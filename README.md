# CakesbyBIMS — Website Redesign

A redesigned, redeveloped marketing site for CakesbyBIMS, a bespoke UK cake business, built with
Next.js (App Router), TypeScript and Tailwind CSS v4.

## Pages

Each top navigation link routes to its own dedicated page (no scroll-anchors mixed into the nav):

- `/` — Home
- `/about` — Our Story
- `/gallery` — Filterable cake gallery with lightbox
- `/services` — Services, indicative pricing and FAQ
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
with Love" description) and the real Facebook/Instagram links. Everything else that the old site
only had as WordPress theme placeholder (Lorem Ipsum About/Contact pages) has been rewritten with
realistic copy, but the following should be swapped for the real details before launch:

- `src/lib/site-config.ts` — phone number, email address, WhatsApp number, service area and
  opening hours are placeholders.
- `src/lib/services-data.ts` — starting prices are indicative guides, not confirmed pricing.
- `src/lib/gallery-data.ts` — gallery photography is royalty-free stock (Unsplash) standing in for
  real photos of CakesbyBIMS' own cakes; swap `public/images/*.jpg` for real photography and update
  the matching `alt` text.
- `src/components/Testimonials.tsx` — testimonials are illustrative placeholders.

## Contact form

The enquiry form on `/contact` is client-side only: submitting it opens the visitor's email app
with a pre-filled message addressed to `siteConfig.email` (a `mailto:` link), so no backend or
third-party form service is required. If a backend inbox is preferred later, replace the
`handleSubmit` logic in `src/components/ContactForm.tsx` with a call to an API route or form
service.
