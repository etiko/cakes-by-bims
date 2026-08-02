// Central place for business details used across the site.
// NOTE: Phone number, email and serving area are realistic placeholders —
// swap them for CakesbyBIMS' real details before launch.
export const siteConfig = {
  name: "CakesbyBIMS",
  tagline: "Baked with Love",
  description:
    "At CakesbyBIMS, attention to detail is our watch word. We do not just bake for the occasion — we engage our clients from enquiry stage through to planning and decorating, ensuring the cakes, flowers and venue decoration blend perfectly for your day.",
  url: "https://cakesbybims.co.uk",
  email: "hello@cakesbybims.co.uk",
  phone: "+44 7000 000000",
  phoneDisplay: "07000 000 000",
  whatsapp: "https://wa.me/447000000000",
  serviceArea: "London & the Home Counties, with nationwide delivery available",
  hours: [
    { day: "Monday – Friday", time: "9:00am – 6:00pm" },
    { day: "Saturday", time: "10:00am – 4:00pm" },
    { day: "Sunday", time: "By appointment (order collection only)" },
  ],
  social: {
    facebook: "https://www.facebook.com/Cakesbybims/",
    instagram: "https://www.instagram.com/cakesbybims/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
