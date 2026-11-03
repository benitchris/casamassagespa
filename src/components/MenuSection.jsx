import { rateGroups, site } from "../data/site.js";
import { buildQuickWhatsAppUrl } from "../lib/booking.js";
import { Sparkle, WhatsApp } from "./Icons.jsx";

const price = (value) => new Intl.NumberFormat("en-RW").format(value);

export default function MenuSection({ onBook }) {
  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="menu__frame">
          <span className="menu__corner menu__corner--tl" aria-hidden="true" />
          <span className="menu__corner menu__corner--tr" aria-hidden="true" />
          <span className="menu__corner menu__corner--bl" aria-hidden="true" />
          <span className="menu__corner menu__corner--br" aria-hidden="true" />

          <header className="menu__head">
            <p className="eyebrow eyebrow--center" data-reveal>
              <span className="eyebrow__line" />
              03 — The Menu
              <span className="eyebrow__line" />
            </p>
            <h2 data-reveal style={{ "--d": "70ms" }}>
              Treatments <em>&amp; rates.</em>
            </h2>
            <p className="menu__lede" data-reveal style={{ "--d": "130ms" }}>
              A short, considered menu — warm oils, professional hands and time to
              properly switch off. Every treatment is also available as a mobile
              visit.
            </p>
          </header>

          <div className="menu__groups">
            {rateGroups.map((group, groupIndex) => (
              <div
                className="rate-group"
                key={group.label}
                data-reveal
                style={{ "--d": `${groupIndex * 90}ms` }}
              >
                <div className="rate-group__head">
                  <span>{group.label}</span>
                  <span className="rate-group__duration">{group.duration}</span>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li className="rate" key={item.name}>
                      <span className="rate__name">{item.name}</span>
                      <span className="rate__dots" aria-hidden="true" />
                      <span className="rate__price">
                        {price(item.price)}
                        <small>RWF</small>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="menu__note" data-reveal>
            <Sparkle />
            Prices in Rwandan Francs. Mobile appointments and durations are arranged
            on WhatsApp.
          </p>

          <div className="menu__actions" data-reveal>
            <button type="button" className="btn btn--gold" onClick={() => onBook()}>
              Book your treatment
            </button>
            <a
              className="link-gold"
              href={buildQuickWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask a question
              <WhatsApp />
            </a>
          </div>

          <p className="menu__address" aria-label={site.address.full}>
            {site.legalName} · {site.address.line1} · {site.address.line2}
          </p>
        </div>
      </div>
    </section>
  );
}
