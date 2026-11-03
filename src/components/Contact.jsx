import { site } from "../data/site.js";
import { buildQuickWhatsAppUrl } from "../lib/booking.js";
import { ArrowUpRight, Clock, Instagram, MapPin, Phone, TikTok, WhatsApp } from "./Icons.jsx";

export default function Contact({ onBook }) {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__copy">
          <p className="eyebrow" data-reveal>
            <span className="eyebrow__line" />
            07 — Visit
          </p>
          <h2 data-reveal style={{ "--d": "70ms" }}>
            Find us in
            <br />
            <em>Kibagabaga.</em>
          </h2>
          <p className="lede" data-reveal style={{ "--d": "130ms" }}>
            Come as you are. We&apos;re on KG 249 Street, a quiet turn away from the
            main road — and we&apos;ll happily guide you in.
          </p>

          <dl className="contact__list">
            <div data-reveal style={{ "--d": "160ms" }}>
              <dt>
                <MapPin />
                Address
              </dt>
              <dd>
                6 KG 249 Street
                <br />
                Kibagabaga, Kigali, Rwanda
              </dd>
              <a
                className="link-gold"
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
                <ArrowUpRight />
              </a>
            </div>

            <div data-reveal style={{ "--d": "220ms" }}>
              <dt>
                <Clock />
                Hours
              </dt>
              <dd>
                Open 24 hours
                <br />
                Monday to Sunday
              </dd>
            </div>

            <div data-reveal style={{ "--d": "280ms" }}>
              <dt>
                <Phone />
                Telephone
              </dt>
              <dd>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </dd>
              <a
                className="link-gold"
                href={buildQuickWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
                <WhatsApp />
              </a>
            </div>

            <div data-reveal style={{ "--d": "340ms" }}>
              <dt>
                <Instagram />
                Follow
              </dt>
              <dd>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram {site.instagramHandle}
                </a>
                <br />
                <a href={site.tiktok} target="_blank" rel="noopener noreferrer">
                  TikTok {site.tiktokHandle}
                </a>
              </dd>
            </div>
          </dl>

          <div className="contact__actions" data-reveal>
            <button type="button" className="btn btn--dark" onClick={() => onBook()}>
              Book your experience
              <WhatsApp />
            </button>
            <a className="link-gold" href={site.phoneHref}>
              Call {site.phoneDisplay}
              <Phone />
            </a>
          </div>
        </div>

        <div className="contact__map" data-reveal="image">
          <iframe
            src={site.mapsEmbed}
            title="Map showing Casa Massage Spa at 6 KG 249 Street, Kibagabaga, Kigali"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="contact__map-card">
            <span className="contact__map-kicker">Casa Massage Spa</span>
            <p>6 KG 249 Street, Kibagabaga</p>
            <a
              className="link-gold"
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
              <ArrowUpRight />
            </a>
          </div>
          <span className="contact__map-pin" aria-hidden="true">
            <MapPin />
          </span>
        </div>
      </div>
    </section>
  );
}
