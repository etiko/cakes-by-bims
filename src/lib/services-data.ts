export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  startingFrom: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    id: "wedding-cakes",
    title: "Wedding Cakes",
    description:
      "Bespoke tiered wedding cakes designed around your colour palette, venue and flowers, from intimate two-tiers to grand five-tier showstoppers.",
    startingFrom: "£250",
    image: "/images/hero-wedding-cake.jpg",
  },
  {
    id: "celebration-cakes",
    title: "Celebration Cakes",
    description:
      "Birthdays, anniversaries and milestones deserve a centrepiece. Choose from drip cakes, fondant sculpting or elegant buttercream finishes.",
    startingFrom: "£65",
    image: "/images/cake-chocolate-drip.jpg",
  },
  {
    id: "baby-shower-dedication",
    title: "Baby Shower & Dedication Cakes",
    description:
      "Soft palettes and delicate detailing to mark a new arrival, christening or dedication in style.",
    startingFrom: "£55",
    image: "/images/cake-mint-cupcakes.jpg",
  },
  {
    id: "graduation-cakes",
    title: "Graduation Cakes",
    description:
      "Celebrate the achievement with a custom cake featuring school colours, mortarboards or edible photo toppers.",
    startingFrom: "£60",
    image: "/images/cake-rainbow-slice.jpg",
  },
  {
    id: "cupcakes-favours",
    title: "Cupcakes & Favours",
    description:
      "Beautifully finished cupcakes and dessert favours, perfect as a standalone treat table or alongside your main cake.",
    startingFrom: "£24 / dozen",
    image: "/images/cake-vanilla-cupcakes.jpg",
  },
  {
    id: "bespoke-desserts",
    title: "Bespoke Desserts",
    description:
      "From layered tiramisu-style cakes to fruit-topped naked cakes, we design a dessert table to match any occasion.",
    startingFrom: "£45",
    image: "/images/cake-tiramisu.jpg",
  },
];

export const processSteps = [
  {
    title: "Enquiry",
    description:
      "Tell us your event date, guest count and vision. We'll respond within 24 hours with availability and guidance.",
  },
  {
    title: "Consultation & Design",
    description:
      "We discuss flavours, styling and venue details — including flowers and décor — so everything blends together beautifully.",
  },
  {
    title: "Baking & Decorating",
    description:
      "Your cake is baked fresh and hand-decorated in our kitchen using quality ingredients and careful attention to detail.",
  },
  {
    title: "Delivery & Setup",
    description:
      "We deliver and set up on-site for weddings and larger events, or arrange collection for smaller celebrations.",
  },
];

export const faqs = [
  {
    question: "How far in advance should I order?",
    answer:
      "For wedding cakes we recommend booking 3–6 months ahead, especially for peak season (May–September). Celebration cakes and cupcakes can often be arranged with 1–2 weeks' notice, subject to availability.",
  },
  {
    question: "Do you cater for allergies and dietary requirements?",
    answer:
      "Yes — we offer gluten-free, dairy-free, egg-free and vegan options. Please let us know any allergies at enquiry stage so we can advise on suitable recipes.",
  },
  {
    question: "Do you deliver?",
    answer:
      "We offer local delivery and venue setup across London & the Home Counties, and can arrange nationwide courier delivery for cupcakes and smaller cakes.",
  },
  {
    question: "How much does a cake cost?",
    answer:
      "Pricing depends on size, tiers, and design complexity. The prices on our Services page are starting guides — we'll confirm an exact quote after your consultation.",
  },
  {
    question: "Can I book a tasting?",
    answer:
      "Absolutely. Tasting sessions are available for wedding enquiries so you can sample flavours before confirming your order.",
  },
];
