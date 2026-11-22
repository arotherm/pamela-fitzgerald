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
  hero word-by-word headline, image parallax, sunflower breath + scroll
  turn, word-by-word scrub on the moment line, staggered once-only
  entrances for cards / area pills / past events; disabled for
  reduced-motion users
- `thank-you.html` — form confirmation page
- `assets/horse-field.jpg` — hero photo (CC0, Freerange Stock)
- `netlify.toml` — static publish, no build step, no custom domain

## What changed Nov 22 (branch `pamela-details-gsap-pass`, not main)

Public-source details only, all verified Nov 22, 2026 from
pamelafitzgerald.ca, nurturingrootswellness.ca and mindfullywild.ca:
clinic address 267 King Street, Midland ON L4R 3M4, free parking off
Bourgeois Lane, free discovery call; Pamela's credentials (Neuromuscular
Rehabilitation Specialist, Equine Assisted Learning Certified Facilitator,
RYT 500, Compassionate Horse Care and Horse Behaviour Specialist, Reiki
Practitioner), years in horse rescue, own small herd; Embodied Path
1.5 h, Embodied Presence / Elemental Presence (volcanic stones), Tiny /
Soul Set Studio Yonge St Midland / Wyebridge; Equine work non-mounted,
no experience needed, incl. Compassionate Horse Care and Learn to Love
Horses for littles; Reiki 75–120 min; past events Root to Rise
Aug 16, 2025 Coldwater and Way of the Fire Horse Mar 21, 2026 Minesing.
No prices, testimonials, credentials beyond those listed, health
outcomes, or photo were added.

## Open items (need Alex / Pamela review)

- **Pamela's photo** — the About section has a reserved frame. The photo of
  Pamela in red yoga and her new photos (via SMS) have not arrived yet;
  swap them in when they do. No public photo was reused: the Mindfully Wild
  portrait is copyrighted with no licence, and the Nurturing Roots image
  labelled "Pamela Fitzgerald" is actually filed as Ashley's photo.
- **Events section** — now lists verified past gatherings (Root to Rise,
  Way of the Fire Horse, Reiki & Rest) with no upcoming date invented.
  Add a real upcoming date only when Pamela confirms one.
- **Prices** — deliberately NOT added. Public listings exist (Embodied Path
  from $145 / 1.5 h; integrated Reiki & somatic $150 / 75 min; Reiki
  75–120 min), but the brief is no prices on the preview until Pamela
  approves them. Clinic hours were also left out — two public listings
  disagree on Tue–Thu hours.
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
