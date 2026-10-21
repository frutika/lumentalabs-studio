'use client';

import { useState } from 'react';

// A plain YouTube iframe contacts Google the moment the page loads, which would
// make the cookie notice untrue. So this shows a local card and only builds
// the iframe after a deliberate click - and then against youtube-nocookie.
export default function ReelEmbed({ id, title, poster, heading, meta, playLabel, note }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="reel"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <div className="reel-card">
      {/* Local file, far below the fold, purely decorative. */}
      <img className="poster" src={poster} alt="" aria-hidden="true" loading="lazy" decoding="async" width="1280" height="720" />
      <div>
        <p className="label">{meta}</p>
        <h2>{heading}</h2>
      </div>
      <div className="reel-foot">
        <button className="play" type="button" onClick={() => setPlaying(true)}>
          <span className="play-dot" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5 L12 7 L3 12.5 Z" fill="var(--on-accent)" /></svg>
          </span>
          {playLabel}
        </button>
        <span className="mono">{note}</span>
      </div>
    </div>
  );
}
