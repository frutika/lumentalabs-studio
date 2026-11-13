'use client';

import { useEffect, useRef } from 'react';

/**
 * Lets the visitor steer the hero's one light source. The pointer's horizontal
 * position over the hero is written to --lx (-1 at the left edge, 1 at the
 * right); the beam, its core and the lit part of the headline all read it in
 * CSS, and a transition on the registered property gives the light its lag.
 *
 * Renders nothing and owns no layout: it only finds the hero it sits in. Until
 * the first pointer move the light sways on its own (CSS), and it goes back to
 * that when the pointer leaves. Touch screens never fire the handler and keep
 * the sway; reduced motion gets neither.
 */
export default function HeroLight() {
  const ref = useRef(null);

  useEffect(() => {
    const hero = ref.current?.closest('.hero');
    if (!hero) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;
    let next = 0;
    const apply = () => {
      frame = 0;
      hero.style.setProperty('--lx', next.toFixed(3));
    };
    const onMove = (e) => {
      if (e.pointerType === 'touch') return;
      const box = hero.getBoundingClientRect();
      next = Math.max(-1, Math.min(1, ((e.clientX - box.left) / box.width) * 2 - 1));
      hero.classList.add('steered');
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      hero.classList.remove('steered');
      hero.style.removeProperty('--lx');
    };

    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={ref} hidden />;
}
