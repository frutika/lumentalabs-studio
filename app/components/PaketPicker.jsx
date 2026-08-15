'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PAKETI, formatPrice } from '../../content/paketi';

/**
 * The packages section, as a choice rather than a price list. The Booster is a
 * Croatian-only offer, so the destination is fixed — there is no /en/contact or
 * /de/ai-content-booster to route to.
 */
export default function PaketPicker() {
  const [chosen, setChosen] = useState(null);
  const router = useRouter();

  const selected = PAKETI.find((p) => p.id === chosen);

  return (
    <div className="picker">
      <fieldset className="grid picker-grid">
        <legend className="sr">Odaberite paket</legend>

        {PAKETI.map((pkg) => (
          <label className={`card picker-card${chosen === pkg.id ? ' on' : ''}`} key={pkg.id}>
            <span className="picker-head">
              <input
                type="radio"
                name="paket"
                value={pkg.id}
                checked={chosen === pkg.id}
                onChange={() => setChosen(pkg.id)}
              />
              <span className="card-title">
                {pkg.name} — {formatPrice(pkg.price)}
              </span>
              {pkg.featured && <span className="tag">Najčešće</span>}
            </span>

            <ul className="ticks">
              {pkg.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </label>
        ))}
      </fieldset>

      <div className="picker-go">
        <button
          className="btn"
          type="button"
          disabled={!selected}
          onClick={() => router.push(`/hr/contact?paket=${selected.id}`)}
        >
          {selected ? `Nastavi s ${selected.name}` : 'Odaberite paket'}
        </button>
        <span className="section-lede">Bez obveze — javljamo se u roku od 24 sata.</span>
      </div>
    </div>
  );
}
