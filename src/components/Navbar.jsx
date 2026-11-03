import { useEffect, useState } from "react";
import { navLinks, site } from "../data/site.js";
import { asset } from "../lib/asset.js";
import { useScrollState } from "../hooks/useSiteEffects.js";
import { Close, Instagram, Phone, TikTok, WhatsApp } from "./Icons.jsx";

export default function Navbar({ onBook }) {
  const [open, setOpen] = useState(false);
  useScrollState(44);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a className="brand" href="#top" aria-label="Casa Spa — back to top">
            <span className="brand__seal">
              <img src={asset("images/casa-spa-logo.jpeg")} alt="" />
            </span>
            <span className="brand__type">
              <strong>Casa Spa</strong>
              <em>Massage &amp; Wellness</em>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} data-nav-link>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="nav__phone" href={site.phoneHref}>
              <Phone />
              <span>{site.phoneDisplay}</span>
            </a>
            <button type="button" className="btn btn--gold nav__book" onClick={() => onBook()}>
              Book now
            </button>
            <button
              type="button"
              className={`burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="drawer" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="drawer__head">
            <span className="drawer__brand">
              <span className="brand__seal">
                <img src={asset("images/casa-spa-logo.jpeg")} alt="" />
              </span>
              <span className="brand__type">
                <strong>Casa Spa</strong>
                <em>Relax Your Body</em>
              </span>
            </span>
            <button type="button" className="drawer__close" onClick={close} aria-label="Close menu">
              <Close />
            </button>
          </div>

          <nav className="drawer__links" aria-label="Mobile">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                data-nav-link
                onClick={close}
                style={{ "--d": `${80 + index * 55}ms` }}
              >
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="drawer__foot">
            <button
              type="button"
              className="btn btn--gold drawer__book"
              onClick={() => {
                close();
                onBook();
              }}
            >
              Book your experience
              <WhatsApp />
            </button>
            <a className="drawer__phone" href={site.phoneHref}>
              <Phone /> {site.phoneDisplay}
            </a>
            <div className="drawer__social">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Casa Spa on Instagram">
                <Instagram />
              </a>
              <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Casa Spa on TikTok">
                <TikTok />
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="drawer__handle">
                {site.instagramHandle}
              </a>
            </div>
            <p className="drawer__hours">{site.hours}</p>
          </div>
        </div>
      )}
    </>
  );
}
