import { site } from "../data/site.js";

// All WhatsApp traffic funnels through this module so the
// presentation layer never builds URLs or messages itself.

export const LOCATION_OPTIONS = [
  { value: "At Casa Spa", label: "At Casa Spa", hint: "Kibagabaga" },
  { value: "At home", label: "At home", hint: "Mobile" },
  { value: "At a hotel", label: "At a hotel", hint: "Mobile" },
  { value: "At an office", label: "At an office", hint: "Mobile" },
];

export const DEFAULT_SPA_ADDRESS = `${site.legalName}, ${site.address.full}`;

export function isMobileLocation(location) {
  return location !== "At Casa Spa";
}

export function validateBooking(values) {
  const errors = {};
  const name = (values.name || "").trim();
  if (name.length < 2) errors.name = "Please tell us your name.";

  if (!values.service) errors.service = "Choose a treatment.";

  if (!values.date) {
    errors.date = "Choose a preferred date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosen = parseDateInput(values.date);
    if (!chosen) errors.date = "That date doesn't look right.";
    else if (chosen < today) errors.date = "Please choose a future date.";
  }

  if (!values.time) errors.time = "Choose a preferred time.";

  if (!values.location) errors.location = "Let us know where.";

  if (isMobileLocation(values.location) && (values.address || "").trim().length < 4) {
    errors.address = "Add an address or area for the therapist.";
  }

  return errors;
}

export function formatBookingDate(value) {
  const date = parseDateInput(value);
  if (!date) return value || "";
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function buildBookingMessage(values) {
  const address = isMobileLocation(values.location)
    ? values.address.trim()
    : DEFAULT_SPA_ADDRESS;

  const lines = [
    "Hello Casa Spa! I'd like to make a booking.",
    "",
    `Name: ${values.name.trim()}`,
    `Service: ${values.service}`,
    `Date: ${formatBookingDate(values.date)}`,
    `Time: ${values.time}`,
    `Location: ${values.location}`,
    `Address: ${address}`,
  ];

  if (values.message && values.message.trim()) {
    lines.push(`Additional details: ${values.message.trim()}`);
  }

  lines.push("", "Please confirm availability. Thank you!");
  return lines.join("\n");
}

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildQuickWhatsAppUrl(
  message = "Hello Casa Spa! I'd like to ask about a massage."
) {
  return buildWhatsAppUrl(message);
}

function parseDateInput(value) {
  if (!value) return null;
  const parts = value.split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return null;
  const [year, month, day] = parts;
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function todayInputValue() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}
