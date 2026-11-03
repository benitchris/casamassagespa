import { navLinks, site } from "../data/site.js";
import { asset } from "../lib/asset.js";
import { buildQuickWhatsAppUrl } from "../lib/booking.js";
import { ArrowUpRight, Instagram, MapPin, Phone, TikTok, WhatsApp } from "./Icons.jsx";

export default function Footer({ onBook }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img
            className="footer__logo"
            src={asset("images/casa-spa-logo.jpeg")}
            alt="Casa Spa — Relax Your Body"
            loading="lazy"
          />
          <p className="footer__tag">Relax Your Body</p>
          <p className="footer__blurb">
            A quiet house of massage in Kibagabaga, Kigali. On-site and mobile,
            open around the clock.
          </p>
          <div className="footer__social">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Casa Spa on Instagram, ${site.instagramHandle}`}
            >
              <Instagram />
            </a>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Casa Spa on TikTok"
            >
              <TikTok />
            </a>
            <a
              href={buildQuickWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Casa Spa on WhatsApp"
            >
              <WhatsApp />
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h3>Explore</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#menu">Menu &amp; rates</a>
        </nav>

        <div className="footer__col">
          <h3>Visit</h3>
          <p>
            6 KG 249 Street
            <br />
            Kibagabaga, Kigali
            <br />
            Rwanda
          </p>
          <p className="footer__hours">Open 24 hours, Mon–Sun</p>
          <a className="footer__meta-link" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin />
            Google Maps
            <ArrowUpRight />
          </a>
          <a className="footer__meta-link" href={site.phoneHref}>
            <Phone />
            {site.phoneDisplay}
          </a>
        </div>

        <div className="footer__col footer__col--book">
          <h3>Reserve</h3>
          <p>Booking takes less than a minute. We confirm availability personally on WhatsApp.</p>
          <button type="button" className="btn btn--gold" onClick={() => onBook()}>
            Book now
            <WhatsApp />
          </button>
          <p className="footer__handles">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              {site.instagramHandle}
            </a>
            <span>·</span>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer">
              {site.tiktokHandle}
            </a>
          </p>
        </div>
      </div>

      <div className="container footer__bar">
        <span>© {year} Casa Massage Spa · Kigali, Rwanda</span>
        <span>Massage · Mobile massage · Kibagabaga</span>
      </div>

      <div className="footer__watermark" aria-hidden="true">
        CASA SPA
      </div>
    </footer>
  );
}
