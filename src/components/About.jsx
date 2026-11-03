import { asset } from "../lib/asset.js";
import { ArrowUpRight, Check, LotusMark, Sparkle } from "./Icons.jsx";

export default function About({ onBook }) {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__media" data-reveal="image">
          <span className="about__frame" aria-hidden="true" />
          <figure className="about__main">
            <img
              src={asset("images/about.jpg")}
              alt="A therapist's hands easing warm oil into a client's shoulders by candlelight"
              loading="lazy"
            />
          </figure>
          <figure className="about__small">
            <img
              src={asset("images/stilllife.jpg")}
              alt="Rolled linen towels, candles and frangipani on a brass tray"
              loading="lazy"
            />
          </figure>

          <div className="stamp" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="stamp__ring">
              <defs>
                <path
                  id="about-stamp-path"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                />
              </defs>
              <text>
                <textPath href="#about-stamp-path" startOffset="0">
                  RELAX YOUR BODY · CASA SPA ·
                </textPath>
              </text>
            </svg>
            <LotusMark className="stamp__mark" />
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__line" />
            01 — The House
          </p>
          <h2 data-reveal style={{ "--d": "80ms" }}>
            A quiet house
            <br />
            in <em>Kibagabaga.</em>
          </h2>
          <p className="lede" data-reveal style={{ "--d": "140ms" }}>
            At Casa Spa, relaxation is more than a luxury. It&apos;s a moment to slow
            down, release tension and give yourself the care you deserve.
          </p>
          <p data-reveal style={{ "--d": "200ms" }}>
            Tucked away on KG 249 Street, our house is a warm, unhurried space for
            professional massage and quiet recovery. And when leaving home isn&apos;t
            part of the plan, we bring the same calm to you — at home, in your hotel,
            or at the office.
          </p>

          <ul className="ticks" data-reveal style={{ "--d": "260ms" }}>
            <li>
              <Check /> On-site sanctuary in Kibagabaga
            </li>
            <li>
              <Check /> Mobile massage across Kigali
            </li>
            <li>
              <Check /> Open 24 hours, every day
            </li>
          </ul>

          <div className="about__foot" data-reveal style={{ "--d": "320ms" }}>
            <p className="signature">
              Casa Spa <span>— Relax Your Body</span>
            </p>
            <button type="button" className="link-gold" onClick={() => onBook()}>
              Book your visit
              <ArrowUpRight />
            </button>
          </div>

          <p className="about__aside" data-reveal style={{ "--d": "380ms" }}>
            <Sparkle />
            Warm oils, quiet rooms and a menu kept deliberately short — so every visit
            feels unhurried.
          </p>
        </div>
      </div>
    </section>
  );
}
