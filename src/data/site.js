// Central content for Casa Massage Spa.
// Editing copy, rates or contact details only requires changes here.

export const site = {
  name: "Casa Spa",
  legalName: "Casa Massage Spa",
  tagline: "Relax Your Body",
  phoneDisplay: "+250 788 592 931",
  phoneHref: "tel:+250788592931",
  whatsappNumber: "250788592931",
  address: {
    line1: "6 KG 249 Street",
    line2: "Kibagabaga, Kigali",
    country: "Rwanda",
    full: "6 KG 249 Street, Kibagabaga, Kigali, Rwanda",
  },
  hours: "Open 24 hours · Monday to Sunday",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=6+KG+249+Street%2C+Kibagabaga%2C+Kigali%2C+Rwanda",
  mapsEmbed:
    "https://www.google.com/maps?q=6+KG+249+Street%2C+Kibagabaga%2C+Kigali%2C+Rwanda&output=embed",
  instagram: "https://www.instagram.com/casa_massage4/",
  instagramHandle: "@casa_massage4",
  tiktok: "https://www.tiktok.com/@casa_massage_spa",
  tiktokHandle: "@casa_massage_spa",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    id: "therapy",
    title: "Professional Massage Therapy",
    blurb:
      "Therapeutic, deliberate touch to ease deep tension and return ease to tired muscles.",
    image: "images/about.jpg",
    preset: {},
  },
  {
    id: "relaxation",
    title: "Relaxation Massage",
    blurb:
      "Slow, flowing strokes with warm oil — a treatment made purely for calm.",
    image: "images/relax.jpg",
    preset: { service: "Relax massage" },
  },
  {
    id: "mobile",
    title: "Mobile Massage Services",
    blurb:
      "Our therapists travel with everything needed for a complete spa experience.",
    image: "images/mobile.jpg",
    preset: { location: "At home" },
  },
  {
    id: "home",
    title: "Home Massage",
    blurb:
      "Your living room, turned into a quiet treatment room for an hour or two.",
    image: "images/interior.jpg",
    preset: { location: "At home" },
  },
  {
    id: "hotel",
    title: "Hotel Massage",
    blurb:
      "Unwind in your suite after a long journey or a full day in the city.",
    image: "images/couple.jpg",
    preset: { location: "At a hotel" },
  },
  {
    id: "office",
    title: "Office Massage",
    blurb:
      "Bring relief to the team without anyone having to leave the building.",
    image: "images/stilllife.jpg",
    preset: { location: "At an office" },
  },
];

// Rates supplied on the Casa Massage printed menu (Rwandan Francs).
export const rateGroups = [
  {
    label: "One hour",
    duration: "1h",
    items: [
      { name: "Relax massage", price: 25000 },
      { name: "Deep massage", price: 30000 },
      { name: "Scrub massage", price: 30000 },
      { name: "Hot stone massage", price: 35000 },
    ],
  },
  {
    label: "One hour thirty",
    duration: "1h 30min",
    items: [
      { name: "Couple massage", price: 50000 },
      { name: "Four hands scrub", price: 50000 },
      { name: "Four hands stone", price: 60000 },
    ],
  },
];

export const rateNames = rateGroups.flatMap((group) =>
  group.items.map((item) => item.name)
);

export const gallery = [
  {
    src: "images/stones.jpg",
    alt: "Warm basalt stones resting along a client's back during a hot stone massage",
    caption: "Warm stones",
    className: "gallery__item--tall",
  },
  {
    src: "images/stilllife.jpg",
    alt: "Candles, rolled linen towels and frangipani flowers on a brass tray",
    caption: "Candlelight & linen",
    className: "",
  },
  {
    src: "images/interior.jpg",
    alt: "A quiet spa corner with an arched doorway, rattan chair and soft daylight",
    caption: "The quiet room",
    className: "gallery__item--tall",
  },
  {
    src: "images/relax.jpg",
    alt: "A relaxed guest receiving a gentle head massage by candlelight",
    caption: "Slow down",
    className: "",
  },
  {
    src: "images/mobile.jpg",
    alt: "A massage table set up in a warm, light-filled home",
    caption: "Set up at home",
    className: "gallery__item--wide",
  },
  {
    src: "images/couple.jpg",
    alt: "Two massage tables prepared side by side for a couple massage",
    caption: "For two",
    className: "gallery__item--wide",
  },
];

export const experiencePillars = [
  {
    title: "Personalised attention",
    text: "Every body carries tension differently. Your therapist listens first, then works to what you actually need.",
  },
  {
    title: "Relaxation & comfort",
    text: "Warm towels, soft light, carefully chosen oils and music kept low. Nothing rushed, nothing loud.",
  },
  {
    title: "Convenient by design",
    text: "Book in under a minute on WhatsApp. We confirm availability personally and answer your questions before you arrive.",
  },
  {
    title: "A welcoming house",
    text: "No ceremony, no pressure. Just a calm, professional space in Kibagabaga where you can switch off.",
  },
];
