// Central place for business details used across the site.
export const siteConfig = {
  name: "CakesbyBIMS",
  tagline: "Baked with Love",
  description:
    "At CakesbyBIMS, attention to detail is our watch word. We do not just bake for the occasion — we engage our clients from enquiry stage through to planning and decorating, ensuring the cakes, flowers and venue decoration blend perfectly for your day.",
  url: "https://cakesbybims.co.uk",
  email: "cakesbybims@gmail.com",
  phone: "+44 7515 971282",
  phoneHref: "+447515971282",
  serviceArea: "Manchester & Greater Manchester, with nationwide delivery available",
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

// Primary navigation shown in the header and mobile menu.
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

// Secondary links, surfaced only in the footer to keep the header uncluttered.
export const secondaryNavLinks = [{ href: "/flavours", label: "Flavours" }] as const;
