import { legal, isPlaceholder } from '../../site.config';

export const identityPending =
  isPlaceholder(legal.entity) || isPlaceholder(legal.address) || isPlaceholder(legal.oib);

/** Renders a legal field, or a neutral marker while it is still unset. */
export function Field({ value }) {
  if (!isPlaceholder(value)) return value;
  return <span className="pending">[details being finalised]</span>;
}

/** Shown only while the controller details are missing. Disappears by itself. */
export function PendingNotice() {
  if (!identityPending) return null;
  return (
    <div className="notice">
      <strong>This page is not yet complete.</strong>
      <span>
        Our registration details are being finalised and will appear here shortly. In the meantime
        the description of what we do and do not process is accurate and applies as written.
      </span>
    </div>
  );
}
