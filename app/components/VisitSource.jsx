'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { recordPath } from './visitSourceStore';

/** Renders nothing; records each page the visitor opens for the contact form. */
export default function VisitSource() {
  const pathname = usePathname();
  useEffect(() => {
    recordPath(pathname);
  }, [pathname]);
  return null;
}
