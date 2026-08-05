export interface FlavourItem {
  id: string;
  name: string;
  description: string;
}

export interface FlavourGroup {
  category: string;
  items: FlavourItem[];
}

export const flavourGroups: FlavourGroup[] = [
  {
    category: "Sponge Flavours",
    items: [
      {
        id: "classic-vanilla",
        name: "Classic Vanilla",
        description: "Light, buttery vanilla sponge layered with vanilla bean buttercream.",
      },
      {
        id: "belgian-chocolate",
        name: "Belgian Chocolate",
        description: "Rich cocoa sponge with a silky Belgian chocolate ganache filling.",
      },
      {
        id: "red-velvet",
        name: "Red Velvet",
        description: "Cocoa-kissed red velvet sponge with tangy cream cheese frosting.",
      },
      {
        id: "lemon-elderflower",
        name: "Lemon & Elderflower",
        description: "Zesty lemon sponge brightened with elderflower buttercream.",
      },
      {
        id: "salted-caramel",
        name: "Salted Caramel",
        description: "Caramel sponge layered with salted caramel sauce and buttercream.",
      },
      {
        id: "coconut-lime",
        name: "Coconut & Lime",
        description: "Coconut sponge with a fresh lime buttercream and toasted coconut finish.",
      },
      {
        id: "carrot-walnut",
        name: "Carrot & Walnut",
        description: "Spiced carrot sponge with walnuts and cream cheese frosting.",
      },
      {
        id: "cookies-and-cream",
        name: "Cookies & Cream",
        description: "Vanilla sponge folded with crushed biscuits and cookies & cream buttercream.",
      },
    ],
  },
  {
    category: "Premium & Alternative Options",
    items: [
      {
        id: "biscoff",
        name: "Biscoff",
        description: "Spiced Biscoff sponge with Biscoff buttercream and cookie crumb.",
      },
      {
        id: "tiramisu",
        name: "Tiramisu",
        description: "Coffee-soaked sponge layered with mascarpone cream, dusted with cocoa.",
      },
      {
        id: "mango-passionfruit",
        name: "Mango & Passionfruit",
        description: "Tropical mango sponge with a passionfruit buttercream centre.",
      },
      {
        id: "gluten-free-vanilla",
        name: "Gluten-Free Vanilla",
        description: "Our classic vanilla sponge, made gluten-free without compromising on flavour.",
      },
      {
        id: "vegan-chocolate",
        name: "Vegan Chocolate",
        description: "Dairy-free and egg-free chocolate sponge with vegan buttercream.",
      },
    ],
  },
];

export const flavourNotes = [
  "All sponges are baked fresh to order and can be mixed across tiers for weddings and multi-tier celebration cakes.",
  "Gluten-free, dairy-free, egg-free and vegan options are available on request — just let us know at enquiry stage.",
  "Cake tastings can be arranged for wedding enquiries so you can sample flavours before confirming your order.",
];
