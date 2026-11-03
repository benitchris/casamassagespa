import { site } from "../data/site.js";
import { asset } from "../lib/asset.js";
import { buildQuickWhatsAppUrl } from "../lib/booking.js";
import { ArrowRight, Clock, LotusMark, MapPin, WhatsApp } from "./Icons.jsx";

export default function Hero({ onBook }) {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img
          src={asset("images/hero.jpg")}
          alt="A candlelit treatment room at Casa Spa with linen, warm stones and frangipani"
          fetchPriority="high"
          width="1800"
          height="1004"
        />
      </div>
      <div className="hero__veil" />
      <LotusMark className="hero__lotus" />

      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="hero__kicker" data-hero="kicker">
            <span className="hero__kicker-rule" />
            Kibagabaga · Kigali · Open 24 hours
          </p>

          <h1 className="hero__title">
            <span className="hero__line">
              <span>Your body</span>
            </span>
            <span className="hero__line">
              <span>deserves</span>
            </span>
            <span className="hero__line">
              <span>
                <em>this moment.</em>
              </span>
            </span>
          </h1>

          <p className="hero__sub" data-hero="sub">
            Escape the everyday. Reconnect with yourself. Experience relaxation and
            professional massage therapy with Casa Spa — in our quiet house, or
            wherever you are.
          </p>

          <div className="hero__actions" data-hero="actions">
            <a className="btn btn--gold" href="#services">
              Explore our services
              <ArrowRight />
            </a>
            <button type="button" className="btn btn--ghost-light" onClick={() => onBook()}>
              Book your experience
            </button>
          </div>

          <a
            className="hero__wa-link"
            href={buildQuickWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-hero="sub"
          >
            <WhatsApp />
            Prefer to chat? Message us on WhatsApp
          </a>
        </div>

        <div className="hero__seal" aria-hidden="true">
          <div className="hero__seal-ring">
            <svg viewBox="0 0 140 140" className="seal__text-svg">
              <defs>
                <path
                  id="hero-seal-path"
                  d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
                />
              </defs>
              <text>
                <textPath href="#hero-seal-path" startOffset="0">
                  CASA SPA · RELAX YOUR BODY · KIGALI ·
                </textPath>
              </text>
            </svg>
            <LotusMark className="hero__seal-mark" />
          </div>
          <span className="hero__seal-caption">
            {site.address.line2}
            <br />
            Relax your body
          </span>
        </div>
      </div>

      <div className="hero__foot container">
        <span className="hero__foot-item">
          <MapPin />
          6 KG 249 Street, Kibagabaga
        </span>
        <span className="hero__foot-item">
          <Clock />
          Open 24 hours · Mon–Sun
        </span>
        <a className="hero__foot-item hero__foot-item--end" href="#about">
          Scroll to explore
          <span className="hero__scroll-line" />
        </a>
      </div>
    </section>
  );
}

export function Marquee() {
  const words = ["Relax", "Rejuvenate", "Feel Better", "Casa Spa", "Kibagabaga"];
  const row = [...words, ...words, ...words];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__set" key={copy}>
            {row.map((word, index) => (
              <span key={`${copy}-${index}`}>
                {word}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
