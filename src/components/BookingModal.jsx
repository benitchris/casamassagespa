import { useEffect, useRef, useState } from "react";
import { rateNames, site } from "../data/site.js";
import {
  LOCATION_OPTIONS,
  buildBookingMessage,
  buildWhatsAppUrl,
  isMobileLocation,
  todayInputValue,
  validateBooking,
} from "../lib/booking.js";
import { Calendar, Check, ChevronDown, Close, Sparkle, WhatsApp } from "./Icons.jsx";

const emptyValues = (preset) => ({
  name: "",
  service: preset?.service || "",
  date: "",
  time: "",
  location: preset?.location || "At Casa Spa",
  address: "",
  message: "",
});

const serviceOptions = [...rateNames, "Not sure yet — recommend for me"];

export default function BookingModal({ preset, onClose }) {
  const [values, setValues] = useState(() => emptyValues(preset));
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);
  const panelRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("is-locked");

    const timer = window.setTimeout(() => {
      const firstField = panelRef.current?.querySelector('input[name="name"]');
      if (firstField) firstField.focus();
    }, 80);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const nodes = Array.from(
        panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, summary, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("is-locked");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) =>
      previous[field] ? { ...previous, [field]: undefined } : previous
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateBooking(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      const firstKey = Object.keys(nextErrors)[0];
      const field = formRef.current?.querySelector(`[name="${firstKey}"]`);
      if (field) field.focus();
      return;
    }

    const message = buildBookingMessage(values);
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent({ url, message });
    panelRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="booking">
      <div className="booking__scrim" onClick={onClose} />
      <div
        className="booking__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        ref={panelRef}
      >
        <header className="booking__head">
          <div>
            <p className="eyebrow">
              <Sparkle />
              Booking request
            </p>
            <h2 id="booking-title">
              Reserve <em>your moment.</em>
            </h2>
          </div>
          <button
            type="button"
            className="booking__close"
            onClick={onClose}
            aria-label="Close booking form"
          >
            <Close />
          </button>
        </header>

        {sent ? (
          <div className="booking__success">
            <span className="booking__success-icon">
              <Check />
            </span>
            <p className="eyebrow">Request prepared</p>
            <h3>One last tap in WhatsApp.</h3>
            <p>
              We&apos;ve put all your details into a message. Press send in WhatsApp
              and Casa Spa will personally confirm availability — nothing is booked
              until we reply.
            </p>
            <a
              className="btn btn--gold booking__success-cta"
              href={sent.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp
              <WhatsApp />
            </a>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => setSent(null)}
            >
              Edit details
            </button>
            <details className="booking__preview">
              <summary>Preview your message</summary>
              <pre>{sent.message}</pre>
            </details>
            <p className="booking__success-phone">
              Prefer to call?{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
          </div>
        ) : (
          <>
            <p className="booking__intro">
              Tell us what you&apos;d like. We&apos;ll open WhatsApp with your details
              so you can send the request and we can confirm your time.
            </p>

            <form className="booking__form" onSubmit={handleSubmit} ref={formRef} noValidate>
              <div className="field">
                <label htmlFor="bk-name">
                  Your name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="bk-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Aline Uwase"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "bk-name-error" : undefined}
                />
                {errors.name && (
                  <p className="field__error" id="bk-name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="bk-service">
                  Preferred service <span aria-hidden="true">*</span>
                </label>
                <div className="field__select">
                  <select
                    id="bk-service"
                    name="service"
                    value={values.service}
                    onChange={update("service")}
                    aria-invalid={Boolean(errors.service)}
                  >
                    <option value="">Choose a treatment</option>
                    {serviceOptions.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown />
                </div>
                {errors.service && <p className="field__error">{errors.service}</p>}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="bk-date">
                    Preferred date <span aria-hidden="true">*</span>
                  </label>
                  <div className="field__icon">
                    <Calendar />
                    <input
                      id="bk-date"
                      name="date"
                      type="date"
                      min={todayInputValue()}
                      value={values.date}
                      onChange={update("date")}
                      aria-invalid={Boolean(errors.date)}
                    />
                  </div>
                  {errors.date && <p className="field__error">{errors.date}</p>}
                </div>

                <div className="field">
                  <label htmlFor="bk-time">
                    Preferred time <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bk-time"
                    name="time"
                    type="time"
                    step="900"
                    value={values.time}
                    onChange={update("time")}
                    aria-invalid={Boolean(errors.time)}
                  />
                  {errors.time && <p className="field__error">{errors.time}</p>}
                </div>
              </div>

              <fieldset className="field field--full">
                <legend>
                  Service location <span aria-hidden="true">*</span>
                </legend>
                <div className="location-grid">
                  {LOCATION_OPTIONS.map((option) => (
                    <label
                      key={option.value}
                      className={`loc ${
                        values.location === option.value ? "is-selected" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="location"
                        value={option.value}
                        checked={values.location === option.value}
                        onChange={update("location")}
                      />
                      <span>{option.label}</span>
                      <em>{option.hint}</em>
                    </label>
                  ))}
                </div>
                {errors.location && <p className="field__error">{errors.location}</p>}
              </fieldset>

              {isMobileLocation(values.location) && (
                <div className="field">
                  <label htmlFor="bk-address">
                    Address / area <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="bk-address"
                    name="address"
                    type="text"
                    placeholder="e.g. Kimironko, KG 11 Ave, house 12"
                    value={values.address}
                    onChange={update("address")}
                    aria-invalid={Boolean(errors.address)}
                  />
                  <p className="field__hint">Where should the therapist come?</p>
                  {errors.address && <p className="field__error">{errors.address}</p>}
                </div>
              )}

              <div className="field">
                <label htmlFor="bk-message">
                  Anything else? <span className="field__optional">optional</span>
                </label>
                <textarea
                  id="bk-message"
                  name="message"
                  rows="3"
                  placeholder="Pressure preference, occasion, questions…"
                  value={values.message}
                  onChange={update("message")}
                />
              </div>

              <button type="submit" className="btn btn--gold booking__submit">
                Confirm via WhatsApp
                <WhatsApp />
              </button>

              <p className="booking__fineprint">
                This opens WhatsApp with your booking details. Nothing is reserved
                until Casa Spa replies, and no payment is needed now.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
