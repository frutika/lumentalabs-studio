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
      <div className="wrap foot-legal">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/cookies">Cookies</Link>
        <Link href="/cookies/manage">Manage cookies</Link>
      </div>
    </footer>
  );
}
