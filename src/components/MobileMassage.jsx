import { site } from "../data/site.js";
import { asset } from "../lib/asset.js";
import { ArrowUpRight, Phone, Sparkle, WhatsApp } from "./Icons.jsx";

const points = [
  "Same professional therapists",
  "Table, fresh linen & warm oils provided",
  "Across Kigali — home, hotel or office",
];

export default function MobileMassage({ onBook }) {
  return (
    <section className="section mobile" id="mobile">
      <div className="container mobile__grid">
        <div className="mobile__media" data-reveal="image">
          <figure>
            <img
              src={asset("images/mobile.jpg")}
              alt="A professional massage table set up with linen, towels and candles in a warm, light-filled home"
              loading="lazy"
            />
          </figure>
          <span className="mobile__tag">
            <Sparkle />
            We come to you
          </span>
        </div>

        <div className="mobile__copy">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__line" />
            05 — Mobile Massage
          </p>
          <h2 data-reveal style={{ "--d": "70ms" }}>
            Relaxation,
            <br />
            <em>wherever you are.</em>
          </h2>
          <p className="lede" data-reveal style={{ "--d": "130ms" }}>
            A full massage experience, set up in your own space. Our therapists arrive
            with a professional table, fresh linen, warm oils and everything else — you
            only need a quiet corner.
          </p>

          <ul className="mobile__points" data-reveal style={{ "--d": "190ms" }}>
            {points.map((point) => (
              <li key={point}>
                <span />
                {point}
              </li>
            ))}
          </ul>

          <div className="mobile__chips" data-reveal style={{ "--d": "240ms" }}>
            <span>At home</span>
            <span>At your hotel</span>
            <span>At the office</span>
          </div>

          <div className="mobile__actions" data-reveal style={{ "--d": "290ms" }}>
            <button
              type="button"
              className="btn btn--gold"
              onClick={() => onBook({ location: "At home" })}
            >
              Arrange your mobile massage
              <WhatsApp />
            </button>
            <a className="mobile__call" href={site.phoneHref}>
              <Phone />
              {site.phoneDisplay}
            </a>
          </div>

          <a
            className="link-gold mobile__link"
            href="#menu"
            data-reveal
            style={{ "--d": "340ms" }}
          >
            View treatments &amp; rates
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
