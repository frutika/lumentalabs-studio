'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The hero loop is decorative, so it must never cost anything a visitor did not
 * ask for. Two things changed here:
 *
 *  - No `autoplay` attribute. The file is ~1.5 MB and used to compete with the
 *    hero text for bandwidth on first paint. The poster renders immediately and
 *    the video is fetched only after hydration.
 *  - Reduced motion means the file is never fetched at all. Hiding it in CSS
 *    still downloaded it, and hid the poster along with it, so those visitors
 *    paid for a video and got a blank background.
 *
 * The pause control is WCAG 2.2.2: anything that moves by itself for more than
 * five seconds needs a way to stop it.
 */
export default function HeroVideo({ pauseLabel, playLabel }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [offered, setOffered] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    v.preload = 'auto';
    v.load();
    v.play().then(
      () => {
        setPlaying(true);
        setOffered(true);
      },
      () => {
        /* Autoplay refused (data saver, low power mode). Poster stays; fine. */
      }
    );
  }, []);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster="/media/hero.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      {offered ? (
        <button
          type="button"
          className="hero-motion"
          onClick={toggle}
          aria-label={playing ? pauseLabel : playLabel}
        >
          <span aria-hidden="true">{playing ? '❙❙' : '▶'}</span>
        </button>
      ) : null}
    </>
  );
}
