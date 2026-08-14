/**
 * Structured data. Kept to things that are verifiably true from site.config —
 * a schema block that claims a rating or an upload date nobody recorded is
 * worse than no schema at all.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
