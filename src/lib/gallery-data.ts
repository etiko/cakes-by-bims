export type CakeCategory =
  | "Wedding"
  | "Birthday & Celebration"
  | "Baby Shower & Dedication"
  | "Cupcakes & Favours";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: CakeCategory;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "wedding-rose-tier",
    src: "/images/hero-wedding-cake.jpg",
    alt: "Four-tier white wedding cake decorated with fresh pink and cream roses",
    category: "Wedding",
  },
  {
    id: "berry-naked-tier",
    src: "/images/cake-berry-tier.jpg",
    alt: "Three-tier naked wedding cake topped with fresh strawberries and blueberries",
    category: "Wedding",
  },
  {
    id: "chocolate-drip",
    src: "/images/cake-chocolate-drip.jpg",
    alt: "Chocolate drip celebration cake topped with piped chocolate swirls",
    category: "Birthday & Celebration",
  },
  {
    id: "rainbow-slice",
    src: "/images/cake-rainbow-slice.jpg",
    alt: "Rainbow layered celebration cake decorated with sugar stars and sprinkles",
    category: "Birthday & Celebration",
  },
  {
    id: "pink-drip-cone",
    src: "/images/cake-pink-drip.jpg",
    alt: "Pink drip birthday cake finished with a waffle cone and sprinkles",
    category: "Birthday & Celebration",
  },
  {
    id: "tiramisu-layers",
    src: "/images/cake-tiramisu.jpg",
    alt: "Elegant layered tiramisu-style celebration cake dusted with cocoa",
    category: "Birthday & Celebration",
  },
  {
    id: "mint-cupcakes",
    src: "/images/cake-mint-cupcakes.jpg",
    alt: "Row of cupcakes with pastel mint buttercream and rainbow sprinkles",
    category: "Baby Shower & Dedication",
  },
  {
    id: "pastel-swirl-cupcakes",
    src: "/images/cake-pastel-cupcakes.jpg",
    alt: "Pastel swirl buttercream cupcakes topped with edible decorations",
    category: "Baby Shower & Dedication",
  },
  {
    id: "vanilla-cupcakes",
    src: "/images/cake-vanilla-cupcakes.jpg",
    alt: "Vanilla cupcakes with white buttercream and colourful sprinkles",
    category: "Cupcakes & Favours",
  },
];

export const categories: CakeCategory[] = [
  "Wedding",
  "Birthday & Celebration",
  "Baby Shower & Dedication",
  "Cupcakes & Favours",
];
