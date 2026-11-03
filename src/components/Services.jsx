import { useState } from "react";
import { services } from "../data/site.js";
import { asset } from "../lib/asset.js";
import { ArrowUpRight, WhatsApp } from "./Icons.jsx";

export default function Services({ onBook }) {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="section services" id="services">
      <div className="container">
        <header className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal>
              <span className="eyebrow__line" />
              02 — Services
            </p>
            <h2 data-reveal style={{ "--d": "70ms" }}>
              Looked after,
              <br />
              <em>in every way.</em>
            </h2>
          </div>
          <p className="section-head__lede" data-reveal style={{ "--d": "140ms" }}>
            Choose the setting — we&apos;ll take care of the rest. Every session is led
            by professional hands, warm oils and unhurried attention.
          </p>
        </header>

        <div className="services__grid">
          <div className="services__list">
            {services.map((service, index) => (
              <article
                key={service.id}
                className={`svc ${active === index ? "is-active" : ""}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                data-reveal
                style={{ "--d": `${index * 55}ms` }}
              >
                <span className="svc__num">{String(index + 1).padStart(2, "0")}</span>
                <figure className="svc__thumb" aria-hidden="true">
                  <img src={asset(service.image)} alt="" loading="lazy" />
                </figure>
                <div className="svc__body">
                  <h3>{service.title}</h3>
                  <p>{service.blurb}</p>
                </div>
                <button
                  type="button"
                  className="svc__book"
                  onClick={() => onBook(service.preset)}
                  aria-label={`Book ${service.title}`}
                >
                  Book
                  <ArrowUpRight />
                </button>
              </article>
            ))}
          </div>

          <aside className="services__preview" aria-hidden="true">
            <div className="services__frames">
              {services.map((service, index) => (
                <img
                  key={service.id}
                  src={asset(service.image)}
                  alt=""
                  loading="lazy"
                  className={index === active ? "is-active" : ""}
                />
              ))}
            </div>
            <div className="services__caption">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <p>{current.title}</p>
            </div>
          </aside>
        </div>

        <div className="services__note" data-reveal>
          <p>
            Every service can be taken at Casa Spa or brought to you.{" "}
            <a href="#menu">See treatments &amp; rates</a>
          </p>
          <button type="button" className="btn btn--outline" onClick={() => onBook()}>
            Not sure? Ask us on WhatsApp
            <WhatsApp />
          </button>
        </div>
      </div>
    </section>
  );
}
