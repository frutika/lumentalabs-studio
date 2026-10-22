'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The hero's "live" agent run: a document going in, the agent's steps, and the
 * one action it proposes. It shows DocuFlow AI's flow instead of describing it.
 *
 * It plays as a loop: the document is scanned, the steps tick off one by one,
 * the proposed action slides in and waits for approval, then it starts again.
 * The server renders the finished run, which is also what stays on screen for
 * anyone who asked their system for less motion, and while it is off screen.
 *
 * Illustrative and labelled as such (`a.example`): the figures are example
 * data from the dictionary, not a real invoice. Nothing here is interactive -
 * the buttons in the output card are drawn as spans so a keyboard user is not
 * sent to controls that do nothing.
 */

// How long each stage lasts, in ms. Stages 0-3 are the four steps, 4 is the
// agent proposing, 5 is the finished run waiting for approval.
const STAGE_MS = [900, 1400, 1100, 900, 1700, 3400];
const DONE = STAGE_MS.length - 1;
const RESET_MS = 450;

// Line items on the paper.
const PAPER_ROWS = 6;

const Icon = ({ state }) => (
  <span className={`run-step-icon is-${state}`} aria-hidden="true">
    {state === 'done' ? (
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6.3 L5 8.6 L9.5 3.6" />
      </svg>
    ) : null}
  </span>
);

const stateOf = (index, stage) => (stage > index ? 'done' : stage === index ? 'run' : 'wait');

export default function AgentRun({ a }) {
  const [stage, setStage] = useState(DONE);
  const [resetting, setResetting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let timer;
    let current = 0;
    let running = false;

    const tick = () => {
      if (current < DONE) {
        current += 1;
        setStage(current);
        timer = setTimeout(tick, STAGE_MS[current]);
      } else {
        // A short dim before the loop restarts, so the reset reads as a new
        // run rather than a glitch.
        setResetting(true);
        timer = setTimeout(() => {
          current = 0;
          setStage(0);
          setResetting(false);
          timer = setTimeout(tick, STAGE_MS[0]);
        }, RESET_MS);
      }
    };
    const start = () => {
      if (running) return;
      running = true;
      current = 0;
      setStage(0);
      timer = setTimeout(tick, STAGE_MS[0]);
    };
    const stop = () => {
      running = false;
      clearTimeout(timer);
      setResetting(false);
      setStage(DONE);
    };

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), { threshold: 0.25 });
    io.observe(ref.current);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const proposing = stateOf(a.steps.length, stage);
  const finished = stage >= DONE;

  return (
    <figure ref={ref} className={`run${resetting ? ' resetting' : ''}`} id="run" aria-label={a.label}>
      <div className="run-inner">
        <div className="run-bar">
          <div className="crumbs">
            <b>{a.project}</b>
            <span aria-hidden="true">/</span>
            <span>{a.view}</span>
            <span className="run-example">{a.example}</span>
          </div>
          <div className="meta">
            <span className="run-live"><span className="run-blink" aria-hidden="true" />{a.running}</span>
            <span>{a.context}</span>
          </div>
        </div>

        <div className="run-cols">
          <div className="run-col">
            <p className="run-label">{a.inputLabel}</p>
            <div className={`paper${stage <= 1 ? ' scanning' : ''}`} aria-hidden="true">
              <div className="paper-head"><span className="bar ink w42 h12" /><span className="paper-name">{a.file}</span></div>
              <span className="bar soft w58" />
              <span className="bar soft w34" />
              <div className="paper-rows">
                {Array.from({ length: PAPER_ROWS }, (_, i) => (
                  <div key={i}><span className="bar row" /><span className="bar row amt" /></div>
                ))}
              </div>
              <div className="paper-total"><span className="bar ink w38 h14" /></div>
              {/* What the agent found: the supplier block once it has
                  extracted it, the total once it has checked it. */}
              <span className={`hit hit-a${stage >= 2 ? ' on' : ''}`} />
              <span className={`hit hit-b${stage >= 3 ? ' on' : ''}`} />
              <span className="scan" />
            </div>
          </div>

          <div className="run-col wide">
            <p className="run-label">{a.agentLabel}</p>
            <ol className="run-steps">
              {a.steps.map(([text, time], i) => {
                const state = stateOf(i, stage);
                return (
                  <li key={text} className={`is-${state}`}>
                    <Icon state={state} />
                    <span className={`run-text${state === 'run' ? ' shimmer' : ''}`}>{text}</span>
                    <span className="run-time">{state === 'done' ? time : state === 'run' ? '…' : ''}</span>
                  </li>
                );
              })}
              <li className={`is-${proposing}`}>
                <Icon state={proposing} />
                <span className={`run-text${proposing === 'run' ? ' shimmer' : ''}`}>{a.current}</span>
                <span className="run-time hot">{proposing === 'run' ? a.liveTag : ''}</span>
              </li>
              <li className={`next${finished ? ' on' : ''}`}>
                <Icon state={finished ? 'ask' : 'wait'} />
                <span className="run-text">{a.next}</span>
              </li>
            </ol>
          </div>

          <div className="run-col">
            <p className="run-label">{a.outputLabel}</p>
            <div className={`action${finished ? ' in' : ''}`}>
              <p className="action-title">{a.action.title}</p>
              <dl>
                {a.action.fields.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <div className="action-btns" aria-hidden="true">
                <span className="fake-btn primary">{a.action.approve}</span>
                <span className="fake-btn">{a.action.review}</span>
              </div>
            </div>
            <p className="run-note">{a.note}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}
