'use client';

import { useEffect, useState } from 'react';

/**
 * Wayfinder for the home page, which is long: a column of ticks along the left
 * edge, one per section, with the current one lit and named. Wide screens only
 * (CSS) — below that there is no margin to put it in, and the page's own
 * headings do the job.
 *
 * `items` is [{ id, label }] in page order; ids that are not on the page (a
 * section a language does not have) are dropped by the caller.
 */
export default function SectionRail({ items, label }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!els.length) return undefined;
    // A section is "current" while it crosses the line 40% down the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="rail" aria-label={label}>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === active ? 'on' : undefined}
              aria-current={item.id === active ? 'location' : undefined}
            >
              <i aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
