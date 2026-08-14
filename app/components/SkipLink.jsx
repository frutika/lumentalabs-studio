import { getDict } from '../../content';

/**
 * WCAG 2.4.1. The nav is sticky and has up to six links plus a language
 * switcher; without this, a keyboard user tabs through all of it on every
 * single page before reaching anything they came for. Hidden until focused.
 */
export default function SkipLink({ lang }) {
  return (
    <a className="skip-link" href="#main">
      {getDict(lang).a11y.skip}
    </a>
  );
}
