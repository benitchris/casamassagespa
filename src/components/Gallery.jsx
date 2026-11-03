import { gallery } from "../data/site.js";
import { asset } from "../lib/asset.js";

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <header className="section-head section-head--split gallery__head">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__line" />
              06 — Gallery
            </p>
            <h2 data-reveal style={{ "--d": "70ms" }}>
              A glimpse
              <br />
              of <em>the calm.</em>
            </h2>
          </div>
          <p className="section-head__lede" data-reveal style={{ "--d": "140ms" }}>
            Candlelight, warm linen, stones and slow afternoons. The atmosphere we
            build every treatment around.
          </p>
        </header>

        <div className="gallery__grid">
          {gallery.map((item, index) => (
            <figure
              key={item.src + item.caption}
              className={`gallery__item ${item.className}`}
              data-reveal="image"
              style={{ "--d": `${index * 70}ms` }}
            >
              <img src={asset(item.src)} alt={item.alt} loading="lazy" />
              <figcaption>
                <span>{item.caption}</span>
                <em>{String(index + 1).padStart(2, "0")}</em>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="gallery__note">
          Illustrative atmosphere imagery — genuine photographs of Casa Spa will be
          added soon.
        </p>
      </div>
    </section>
  );
}
