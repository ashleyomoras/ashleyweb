# Ashley Moras — Cycling Site (Phase 2: skeleton)

Real static HTML/CSS site — no build tool, no framework, no Claude artifact.
Open `index.html` directly in a browser to preview, or drag the whole folder
into Netlify Drop for a live temporary URL.

## What's here

- 8 pages: `index.html` (Home), `about.html`, `achievements.html`,
  `coaching.html`, `sponsors.html`, `journal.html`, `podcast.html`,
  `contact.html`
- `assets/styles.css` — one shared stylesheet, built directly on the tokens
  from `preview-option-b.html` (steel-blue `#2c4a66`, hi-vis lime `#b6d400`,
  overcast background `#eff3f6`, Oswald/Inter/IBM Plex Mono, hard edges,
  no border-radius)
- `assets/site.js` — mobile nav toggle, Achievements year/discipline
  filter, Journal sub-tab filter. No dependencies.

Header, nav, and footer markup is duplicated across all 8 pages rather than
templated, since there's no static-site generator yet. Keep them in sync by
hand for now — Phase 3 (or a generator like Eleventy, if you ever add one)
is the natural place to de-duplicate this.

## Design notes

- The template's "Km 0 — Start" eyebrow is reused as a running distance
  marker across every page (Km 0 on Home, Km 132 on Contact), so the whole
  site reads as one continuous route — this uses the brief's own
  bib-number/race-timing motif rather than adding a new device.
- The header bib chip currently reads "AM" (Ashley Moras monogram). Swap
  for an actual race bib number if Ashley has one and wants to use it.
- No border-radius anywhere, on purpose — matches the flat, technical,
  timing-strip feel of the locked template.

## What's placeholder vs. real (matches the brief's content table)

| Section | Status in this build |
|---|---|
| Home hero headline/intro, stats | Placeholder (dashed border + tag) |
| About Me bio | Placeholder |
| About Me "My Work" form | Real fields (Name/Email/Mobile, all required) — **not wired to send anywhere yet** |
| Achievements stats, results rows | Placeholder sample data — filter UI is functional |
| Coaching intro | Placeholder |
| Coaching registration form | Real fields — **not wired yet** |
| Coaching testimonials | Real names (Nayan, Purvi, Pooja, Dr. Gaurang, Dron) — quotes/achievements placeholder |
| Sponsors (4) + Brand associations (3) | Real names — logos/blurbs placeholder |
| Journal — Travel Stories | Real destination names (Sri Lanka, Manali, Goa, Singapore, Malaysia, Delhi) — teasers placeholder; "Future Routes" wishlist is empty placeholder |
| Journal — Crazy Stories | Real titles (FM Manali–Doda, Goa BRM, Bangalore "N'Lore" BRM) — teasers placeholder |
| Journal — Articles | Real titles (Run Crew, Cycling Mods) — body copy placeholder |
| Podcast | One episode slot, structure real, video/thumbnail placeholder |
| Contact form | Real fields — **not wired yet** |
| Contact — Collabs/testing/consulting pitch | Draft starter copy, not placeholder — usable as-is or editable |
| Footer socials | Real: Instagram `ashley_moras`, LinkedIn, `ashley.omoras@gmail.com` |
| Footer promo banner | Real: links to steadfastnutrition.in, code `STEADASHLEY` visible, scrolling marquee, pauses under reduced-motion |

Every placeholder is visually tagged (dashed border + small uppercase
label) so it's obvious at a glance what still needs real content.

## Forms — not functional yet

The three forms (My Work, Coaching registration, Contact) validate on the
front end (required fields) but don't send anywhere — submitting shows an
alert saying so. Phase 3 will wire these to whichever service gets
confirmed (Netlify Forms and Formspree are both free and were named in the
brief).

## Next steps

- **Phase 3:** Wire up Decap CMS `/admin` + turn today's placeholders into
  editable content fields (testimonials, sponsors, journal entries,
  podcast episodes as repeatable collections). Confirm and wire the form
  backend at the same time.
- **Phase 4 onward:** Fill in confirmed real content section by section.
- **Whenever ready:** buy the domain and connect DNS on Netlify — no
  rebuild required.
