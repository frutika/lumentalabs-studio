/**
 * The hero's "live" agent run: a document going in, the agent's steps, and the
 * one action it proposes. It shows DocuFlow AI's flow instead of describing it.
 *
 * Illustrative and labelled as such (`a.example`): the figures are example
 * data from the dictionary, not a real invoice. Nothing here is interactive -
 * the buttons in the output card are drawn as spans so a keyboard user is not
 * sent to controls that do nothing.
 */

const Done = () => (
  <span className="run-step-icon done" aria-hidden="true">
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.3 L5 8.6 L9.5 3.6" />
    </svg>
  </span>
);

// Line items on the paper, as [description, amount] bar widths in percent.
const PAPER_ROWS = 6;

export default function AgentRun({ a }) {
  return (
    <figure className="run" id="run" aria-label={a.label}>
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
            <div className="paper" aria-hidden="true">
              <div className="paper-head"><span className="bar ink w42 h12" /><span className="paper-name">{a.file}</span></div>
              <span className="bar soft w58" />
              <span className="bar soft w34" />
              <div className="paper-rows">
                {Array.from({ length: PAPER_ROWS }, (_, i) => (
                  <div key={i}><span className="bar row" /><span className="bar row amt" /></div>
                ))}
              </div>
              <div className="paper-total"><span className="bar ink w38 h14" /></div>
              <span className="hit hit-a" />
              <span className="hit hit-b" />
              <span className="scan" />
            </div>
          </div>

          <div className="run-col wide">
            <p className="run-label">{a.agentLabel}</p>
            <ol className="run-steps">
              {a.steps.map(([text, time]) => (
                <li key={text}><Done /><span className="run-text">{text}</span><span className="run-time">{time}</span></li>
              ))}
              <li className="now">
                <span className="run-step-icon spin" aria-hidden="true" />
                <span className="run-text shimmer">{a.current}</span>
                <span className="run-time hot">{a.liveTag}</span>
              </li>
              <li className="next">
                <span className="run-step-icon wait" aria-hidden="true" />
                <span className="run-text">{a.next}</span>
              </li>
            </ol>
          </div>

          <div className="run-col">
            <p className="run-label">{a.outputLabel}</p>
            <div className="action">
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
