# CakesbyBIMS — Website Redesign

A redesigned, redeveloped marketing site for CakesbyBIMS, a bespoke UK cake business, built with
Next.js (App Router), TypeScript and Tailwind CSS v4.

## Pages

Each top navigation link routes to its own dedicated page (no scroll-anchors mixed into the nav):

- `/` — Home
- `/about` — Our Story
- `/gallery` — Gallery index, organised into 9 cake categories
- `/gallery/[category]` — Per-category photo gallery with lightbox (e.g. `/gallery/wedding-cakes`)
- `/services` — Services and FAQ
- `/contact` — Enquiry form + contact details

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint
```

## Content that still needs the real business details

This redesign keeps the one piece of copy that was genuine on the old WordPress site (the "Baked
with Love" description), the real Facebook/Instagram links and the real enquiry inbox
(`info@cakesbybims.co.uk`). Everything else that the old site only had as WordPress theme
placeholder (Lorem Ipsum About/Contact pages) has been rewritten with realistic copy, but the
following should be swapped for the real details before launch:

- `src/lib/site-config.ts` — service area and opening hours are placeholders.
- `src/components/Testimonials.tsx` — testimonials are illustrative placeholders.

Service pricing was removed intentionally: the live site never published real prices, so each
service card now links to the Contact page for a tailored quote instead of showing a fabricated
"from £X" figure. Gallery and hero photography (`public/images/*.jpg`, referenced from
`src/lib/gallery-data.ts` and `src/lib/services-data.ts`) has been swapped from stock photos for
real CakesbyBIMS cake photography sourced from the live site's media library.

## Gallery structure

The gallery mirrors the real business's product categories from
[cakesbybims.co.uk/our-products](https://cakesbybims.co.uk/our-products/). `/gallery` is an index
of 9 categories (Wedding Cakes, Children's Cakes, Baby Shower Cakes, Engagement & Traditional
Cakes, Celebration Cakes for Men, Celebration Cakes for Women, Character & Themed Cakes,
Graduation Cakes, Cupcakes & Favours); each links to its own `/gallery/[category]` page with a
full photo grid and lightbox. All data lives in `src/lib/gallery-data.ts`
(`galleryCategories`/`galleryItems`), and photos are stored under
`public/images/gallery/{category-slug}/`. The live site has ~228 category photos in total; this
redesign ships a curated subset (~99 photos, capped at ~12 per category) sourced from the live
site's media library to balance "lots of pictures per category" against repo size — add more
files to the matching folder and an entry to `gallery-data.ts` to expand any category further.

## Contact form

The enquiry form on `/contact` submits to `public/contact.php`, a plain PHP script deployed
alongside the built site on the shared/cPanel host. It validates the payload, checks a honeypot
field, and emails the enquiry to `info@cakesbybims.co.uk` (see `RECIPIENT_EMAIL` in
`contact.php`, which should stay in sync with `email` in `src/lib/site-config.ts`) using PHP's
built-in `mail()` function — no Node backend, SMTP credentials, or third-party form service
required. Since the form is the primary contact channel, the site intentionally does not display
a phone number or the enquiry email address elsewhere (footer, nav, contact page) — only
social links are shown there. (The live site has no WhatsApp contact channel, so this redesign
does not include one either.)
