import Link from 'next/link';
import { site } from '../../site.config';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="foot-links">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </span>
      </div>
    </footer>
  );
}
