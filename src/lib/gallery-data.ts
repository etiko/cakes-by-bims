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
    id: "wedding-tall-roses",
    src: "/images/wedding-cake-tall-roses.jpg",
    alt: "Tall multi-tier wedding cake trailed with blush and ivory roses at a floral archway reception",
    category: "Wedding",
  },
  {
    id: "wedding-display",
    src: "/images/wedding-cake-display.jpg",
    alt: "Wedding fair display of four bespoke tiered cakes with ruffles, monograms and dried florals",
    category: "Wedding",
  },
  {
    id: "wedding-ivory-mr",
    src: "/images/wedding-cake-ivory-mr.jpg",
    alt: "Suspended ivory and gold wedding cake with monogram plaque and cascading roses",
    category: "Wedding",
  },
  {
    id: "birthday-superhero",
    src: "/images/birthday-superhero-cake.jpg",
    alt: "Superhero-themed birthday cake with Hulk fist, Superman, Spider-Man and Captain America tiers",
    category: "Birthday & Celebration",
  },
  {
    id: "birthday-tuxedo",
    src: "/images/birthday-tuxedo-cake.jpg",
    alt: "Tuxedo-inspired 40th birthday cake with gold bow tie topper and fondant money detailing",
    category: "Birthday & Celebration",
  },
  {
    id: "birthday-black-gold",
    src: "/images/birthday-black-gold-cake.jpg",
    alt: "Dramatic black and gold 40th birthday cake with painted florals and geometric fondant base",
    category: "Birthday & Celebration",
  },
  {
    id: "celebration-figurine",
    src: "/images/celebration-figurine-cake.jpg",
    alt: "Custom celebration cake with hand-sculpted figurine toppers seated on an armchair",
    category: "Birthday & Celebration",
  },
  {
    id: "baby-shower-gold",
    src: "/images/baby-shower-gold-cake.jpg",
    alt: "Ivory baby shower cake with gold balloon cluster, palm fronds and a teddy bear topper",
    category: "Baby Shower & Dedication",
  },
  {
    id: "graduation-cake",
    src: "/images/graduation-cake.jpg",
    alt: "Graduation celebration cake with mortarboard topper, silhouette plaque and pink florals",
    category: "Baby Shower & Dedication",
  },
  {
    id: "jar-desserts",
    src: "/images/jar-desserts.jpg",
    alt: "Individual jarred cake desserts in red velvet, salted caramel and cookies and cream flavours",
    category: "Cupcakes & Favours",
  },
  {
    id: "dessert-favours",
    src: "/images/dessert-favours.jpg",
    alt: "Individually boxed vanilla sponge cake favours finished with gold trim",
    category: "Cupcakes & Favours",
  },
];

export const categories: CakeCategory[] = [
  "Wedding",
  "Birthday & Celebration",
  "Baby Shower & Dedication",
  "Cupcakes & Favours",
];
