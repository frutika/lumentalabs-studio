/**
 * Where an enquiry came from, kept in module memory only. Nothing is written to
 * cookies or browser storage, so the "no cookies" statement on /cookies stays
 * true; the trade-off is that a full reload starts the record over, which is
 * fine because the form sits one client-side navigation away from any page.
 *
 * document.referrer is read once, on the first page: Next's client-side
 * navigation never updates it, so later reads would still show the external
 * site the visit started from, which is exactly the value we want.
 */
const MAX = 300;

const visit = { landing: null, external: null, previous: null, current: null };

export function recordPath(path) {
  if (visit.landing === null) {
    visit.landing = (path + window.location.search).slice(0, MAX);
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      if (ref && ref.host !== window.location.host) visit.external = ref.host.slice(0, MAX);
    } catch {
      // A malformed referrer is not worth failing over.
    }
  }
  if (path !== visit.current) {
    visit.previous = visit.current;
    visit.current = path;
  }
}

export function getVisitSource() {
  return { prva: visit.landing, prethodna: visit.previous, vanjski: visit.external };
}
