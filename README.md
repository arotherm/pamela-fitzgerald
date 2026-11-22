# Pamela Fitzgerald — Nurturing Roots Therapy (preview)

A calm, professional one-page site for Pamela Fitzgerald, Somatic Specialist
& Reiki Practitioner, at Nurturing Roots Therapy in Midland, Ontario.

**Status: preview only.** Nothing here is live on a custom domain. The site
will eventually replace her Wix site (pamelafitzgerald.ca) once Pamela
reviews this preview — that domain decision is still to come.

## Concept

One signature moment: *an hour of stillness, standing beside a horse.*
Everything else stays quiet — warm stone, deep green, a subtle sunflower
accent. Trust and credibility first; no invented claims, no prices, no
testimonials, no metrics.

## Structure

- `index.html` — hero (Equine Reiki), the moment line, offerings, about,
  service areas, events, contact form
- `styles.css` — all styling; the page reads perfectly with JS off
- `script.js` — GSAP + ScrollTrigger + Lenis (CDN), lean standard path:
  hero settle, image parallax, word-by-word scrub on the moment line,
  small once-only entrances; disabled for reduced-motion users
- `thank-you.html` — form confirmation page
- `assets/horse-field.jpg` — hero photo (CC0, Freerange Stock)
- `netlify.toml` — static publish, no build step, no custom domain

## Open items (need Alex / Pamela review)

- **Pamela's photo** — the About section has a reserved frame. The photo of
  Pamela in red yoga and her new photos (via SMS) have not arrived yet;
  swap them in when they do.
- **Events section** — kept minimal with no photos. Which photos to remove
  from the old Events area was unclear from Alex's notes; nothing was
  guessed — the section is text-only pending review.
- **Domain** — no custom domain attached. The site will replace
  pamelafitzgerald.ca only after Pamela approves.
- **Contact form** — plain Netlify form (`contact`). Works once the site is
  on Netlify; locally it posts to `thank-you.html`.

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy

Push to `main` — the Netlify site (when linked) publishes the repo root.
