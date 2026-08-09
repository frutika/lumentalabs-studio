'use client';

import { useState } from 'react';

// A plain YouTube iframe contacts Google the moment the page loads, which would
// make the cookie notice untrue. So this shows a local poster and only builds
// the iframe after a deliberate click - and then against youtube-nocookie.
export default function ReelEmbed({ id, title, poster, playLabel, note }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="reel"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button className="reel reel-facade" type="button" onClick={() => setPlaying(true)}>
      <img src={poster} alt="" aria-hidden="true" />
      <span className="reel-play" aria-hidden="true">▶</span>
      <span className="reel-label">
        {playLabel}
        <em>{note}</em>
      </span>
    </button>
  );
}
