import { experiencePillars } from "../data/site.js";
import { LotusMark } from "./Icons.jsx";

export default function Experience({ onBook }) {
  return (
    <section className="section experience" id="experience">
      <LotusMark className="experience__lotus" />
      <div className="container">
        <header className="experience__head">
          <div>
            <p className="eyebrow eyebrow--light" data-reveal>
              <span className="eyebrow__line" />
              04 — The Casa Experience
            </p>
            <h2 data-reveal style={{ "--d": "70ms" }}>
              More than a massage.
              <br />
              <em>A moment that is yours.</em>
            </h2>
          </div>
          <p className="experience__quote" data-reveal style={{ "--d": "140ms" }}>
            &ldquo;We keep things simple: warm hands, quiet rooms, and enough time to
            actually exhale.&rdquo;
          </p>
        </header>

        <div className="experience__pillars">
          {experiencePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="pillar"
              data-reveal
              style={{ "--d": `${index * 90}ms` }}
            >
              <span className="pillar__num">0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>

        <div className="experience__foot" data-reveal>
          <p>Open 24 hours · On-site &amp; mobile · Kibagabaga, Kigali</p>
          <button type="button" className="btn btn--gold" onClick={() => onBook()}>
            Reserve your moment
          </button>
        </div>
      </div>
    </section>
  );
}
