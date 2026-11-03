# Casa Massage Spa — Kigali

A premium, fully responsive one-page website for **Casa Massage Spa**, 6 KG 249 Street, Kibagabaga, Kigali, Rwanda. Built with React, Vite and hand-written CSS, and deployed as a static site on GitHub Pages.

Bookings are handled entirely through **WhatsApp** — there is no backend, database, account system, payment flow or environment variable.

---

## What's included

- **Art-directed identity** — warm ivory, champagne gold, espresso and charcoal; Fraunces serif headings with italic accents, Jost body text, botanical details and a subtle grain overlay.
- **Sections** — hero, the house (About), services, treatments & rates, The Casa Experience, mobile massage, gallery, location & contact, and footer.
- **Booking slide-out** — name, treatment, date, time, service location (Casa Spa / home / hotel / office), address for mobile visits, and an optional note. Required fields are validated in-line; the request opens WhatsApp with a formatted, URI-encoded message. Nothing is stored or booked until Casa Spa replies.
- **Preset booking** — service rows and mobile CTAs open the form with the relevant treatment or location already selected.
- **Motion with care** — scroll reveals, staggered type, hover states and smooth panel transitions, all disabled under `prefers-reduced-motion`.
- **SEO** — descriptive title and description, Open Graph/Twitter metadata, branded SVG favicon, keywords, and `HealthAndBeautyBusiness` JSON-LD with address, 24/7 hours, phone, social profiles and the treatment catalog.
- **Accessibility** — skip link, labelled form fields, keyboard focus trap and Escape handling in the booking panel, visible focus styles, and sensible heading order.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 (JavaScript, no TypeScript) |
| Build tool | Vite 5 |
| Styling | One global stylesheet with CSS custom properties; no UI framework |
| Type | Fraunces + Jost from Google Fonts |
| Icons | Small hand-drawn inline SVG set (`src/components/Icons.jsx`) |
| Hosting | GitHub Pages (static) |

No paid APIs. The Google Maps embed uses the public embed endpoint and needs no key.

## Run locally

Requires Node.js 18 or newer (20 LTS recommended).

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`).

Production build and local preview:

```bash
npm run build
npm run preview
```

The static output is written to `dist/`.

## Deploy to GitHub Pages

A workflow is already included at `.github/workflows/deploy.yml`. It installs dependencies with `npm ci`, builds the site, uploads `dist/` and deploys it with the official GitHub Pages actions on every push to `main`.

1. Create a repository on GitHub and push this project to its `main` branch.

   ```bash
   git init
   git add .
   git commit -m "Casa Massage Spa website"
   git branch -M main
   git remote add origin https://github.com/<your-user>/<your-repo>.git
   git push -u origin main
   ```

2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab). The site goes live at:

   ```text
   https://<your-user>.github.io/<your-repo>/
   ```

`vite.config.js` uses `base: "./"`, so every asset resolves correctly both under a project path such as `/casa-spa/` and on a custom domain. `public/.nojekyll` is included so GitHub Pages serves the built asset folder untouched.

### Custom domain

In **Settings → Pages → Custom domain**, enter the domain and follow GitHub's DNS instructions. The relative asset base already supports custom domains. If you use a custom domain and want a `CNAME` file in the build, add it to `public/` as well.

### Social preview URLs and custom domains

Open Graph, Twitter and structured-data images use absolute URLs for the project site at `https://benitchris.github.io/casamassagespa/`. If you connect a custom domain or rename the repository, update these in `index.html`:

- the canonical link
- `og:url`, `og:image` and `twitter:image`
- `url`, `image` and `logo` inside the JSON-LD block

Then keep those values in sync with the deployed hostname.

## Editing content

Nearly all business copy lives in one file: **`src/data/site.js`**.

- **Contact details** — phone, WhatsApp number, address, hours, Maps links, Instagram and TikTok.
- **Navigation** — labels and section anchors.
- **Services** — title, description, preview image and the booking preset applied when that row is clicked.
- **Treatments & rates** — `rateGroups` holds the printed menu groups and prices in RWF. Display formatting uses `Intl.NumberFormat("en-RW")`; the booking form's treatment list is generated from `rateNames`, so adding a rate also adds it to the form.
- **Gallery** — image paths, alt text, captions and mosaic classes.
- **Experience pillars** — the four numbered blocks.

Longer section copy lives in the matching component under `src/components/`.

### Changing the WhatsApp number

The number is centralised in `site.js` as `whatsappNumber` (digits only, with country code, no `+`). `phoneDisplay` and `phoneHref` control how the phone number is shown and dialled. Also update the static copies in `index.html`:

- the `telephone` value in the JSON-LD block,
- the phone link in the `<noscript>` fallback,
- the `image` / `logo` URLs if the domain changes.

### Images and logo

All photography lives in `public/images/`:

| File | Use |
| --- | --- |
| `casa-spa-logo.jpeg` | Supplied Casa Spa logo — navigation and footer |
| `hero.jpg` | Home hero and social preview |
| `about.jpg` | About collage, professional therapy preview |
| `mobile.jpg` | Mobile massage and gallery |
| `relax.jpg` | Relaxation preview and gallery |
| `stilllife.jpg` | About inset, office preview and gallery |
| `stones.jpg`, `couple.jpg`, `interior.jpg` | Gallery and service previews |

Replace a file while keeping the same name to refresh the artwork, or update the path in `site.js` / the relevant component. Images are illustrative lifestyle photography, not photos of the actual premises — swap in real Casa Spa photography when it is available. The compact brand favicon is `public/favicon.svg`.

## How the booking flow works

1. Any **Book Now**, **Book your experience**, service row or mobile CTA calls `openBooking(preset)` in `src/App.jsx`, which mounts `BookingModal` with an optional preset.
2. `src/lib/booking.js` holds the pure logic:
   - `validateBooking` — name of at least two characters, treatment, date (not in the past), time, and an address whenever the location is home, hotel or office.
   - `formatBookingDate` — turns the date input into a readable line such as `Friday 20 November 2026`.
   - `buildBookingMessage` — builds the request with name, service, date, time, location, address and optional note. At-spa requests note the spa address instead of a pickup address.
   - `buildWhatsAppUrl` — `https://wa.me/250788592931?text=` plus `encodeURIComponent(message)`.
3. On a valid submission the panel opens WhatsApp in a new tab, then switches to a confirmation state that repeats the link (in case the popup was blocked), lets the guest edit details, and shows a message preview. The fine print makes clear that nothing is reserved until Casa Spa replies.
4. No data is persisted anywhere; the message exists only in the guest's WhatsApp draft.

## Project structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages build + deploy
├── index.html                     # SEO, OG/Twitter, JSON-LD, fonts, favicon
├── package.json
├── vite.config.js                 # base: "./"
├── public/
│   ├── .nojekyll
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/                    # photography + supplied logo
└── src/
    ├── main.jsx
    ├── App.jsx                    # booking state and page composition
    ├── components/                # Navbar, Hero, About, Services, MenuSection,
    │                              # Experience, MobileMassage, Gallery, Contact,
    │                              # Footer, BookingModal, FloatingBooking, Icons
    ├── data/site.js               # business content, rates, gallery
    ├── hooks/useSiteEffects.js    # reveal, active section, scroll state
    ├── lib/booking.js             # validation + WhatsApp message builder
    ├── lib/asset.js               # BASE_URL-aware asset helper
    └── styles/global.css          # complete visual system and responsive rules
```

## Verification performed

- Production build passes with no warnings.
- Desktop 1440×1000: hero fills the viewport; all sections, images and the booking panel render correctly.
- Mobile 390 px: no horizontal overflow (`scrollWidth === viewport width`); drawer, sticky header and booking sheet work.
- Booking tests: empty submit shows the expected required-field errors; a filled hotel request produces the correct `wa.me` URL and a readable message; the success state clears errors and exposes the WhatsApp link again as a popup fallback.
- All external links resolve to WhatsApp, Google Maps, Instagram and TikTok; no broken images; no console errors.

## Notes and limitations

- Google Fonts and the Maps embed require network access; the site itself has no runtime dependencies beyond the built JS/CSS.
- If WhatsApp is unavailable, guests can call the number shown in the panel and contact section.
- The address, phone number, 24/7 hours and menu prices follow the supplied brand material. Confirm the Instagram and TikTok handles with the spa before launch, and keep `site.js` and the JSON-LD in `index.html` in sync.
