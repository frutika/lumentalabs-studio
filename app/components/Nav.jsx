import Link from 'next/link';
import { site } from '../../site.config';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/">
          <span className="dot" aria-hidden="true" />
          {site.name}
        </Link>
        <div className="nav-links">
          <Link className="link" href="/services">Services</Link>
          <Link className="link" href="/work">Work</Link>
          <Link className="link" href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
