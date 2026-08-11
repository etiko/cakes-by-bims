// Cake categories mirroring the real CakesbyBIMS product categories, each with its own
// gallery page at /gallery/[category]. Photography sourced from the live site's media library.
/** A small, fixed set of top-level themes categories are grouped under.
 *  New categories should slot into one of these rather than adding a new
 *  group, so the group-tab bar itself stays a bounded, stable control no
 *  matter how many categories exist beneath it. */
export type GalleryGroup = "weddings-engagements" | "celebrations" | "kids-characters" | "cupcakes-favours";

export const galleryGroups: { slug: GalleryGroup; label: string }[] = [
  { slug: "weddings-engagements", label: "Weddings & Engagements" },
  { slug: "celebrations", label: "Celebrations" },
  { slug: "kids-characters", label: "Kids & Characters" },
  { slug: "cupcakes-favours", label: "Cupcakes & Favours" },
];

export interface GalleryCategory {
  slug: string;
  label: string;
  description: string;
  group: GalleryGroup;
}

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "wedding-cakes",
    label: "Wedding Cakes",
    description: "Bespoke tiered wedding cakes designed around your colour palette, venue and flowers.",
    group: "weddings-engagements",
  },
  {
    slug: "engagement-traditional-cakes",
    label: "Engagement & Traditional Cakes",
    description: "Cakes for engagements, traditional ceremonies and cultural celebrations.",
    group: "weddings-engagements",
  },
  {
    slug: "celebration-cakes-women",
    label: "Celebration Cakes (Women)",
    description: "Elegant birthday and milestone cakes for her special day.",
    group: "celebrations",
  },
  {
    slug: "celebration-cakes-men",
    label: "Celebration Cakes (Men)",
    description: "Birthday and milestone cakes designed for the men in your life.",
    group: "celebrations",
  },
  {
    slug: "graduation-cake",
    label: "Graduation Cakes",
    description: "Celebrate the achievement with a custom graduation cake.",
    group: "celebrations",
  },
  {
    slug: "childrens-cake",
    label: "Children's Cakes",
    description: "Fun, colourful cakes for birthdays and children's celebrations.",
    group: "kids-characters",
  },
  {
    slug: "character-themed-cakes",
    label: "Character & Themed Cakes",
    description: "Custom character and themed cakes for any celebration.",
    group: "kids-characters",
  },
  {
    slug: "baby-shower-cakes",
    label: "Baby Shower Cakes",
    description: "Soft palettes and delicate detailing to celebrate a new arrival.",
    group: "kids-characters",
  },
  {
    slug: "cupcakes-favours",
    label: "Cupcakes & Favours",
    description: "Individually finished cupcakes and dessert favours.",
    group: "cupcakes-favours",
  },
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  /** Matches a `slug` in `galleryCategories`. */
  category: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "wedding-cakes-01",
    src: "/images/gallery/wedding-cakes/01.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 1",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-02",
    src: "/images/gallery/wedding-cakes/02.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 2",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-03",
    src: "/images/gallery/wedding-cakes/03.png",
    alt: "Wedding Cakes by CakesbyBIMS — design 3",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-04",
    src: "/images/gallery/wedding-cakes/04.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 4",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-05",
    src: "/images/gallery/wedding-cakes/05.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 5",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-06",
    src: "/images/gallery/wedding-cakes/06.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 6",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-07",
    src: "/images/gallery/wedding-cakes/07.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 7",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-08",
    src: "/images/gallery/wedding-cakes/08.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 8",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-09",
    src: "/images/gallery/wedding-cakes/09.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 9",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-10",
    src: "/images/gallery/wedding-cakes/10.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 10",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-11",
    src: "/images/gallery/wedding-cakes/11.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 11",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-12",
    src: "/images/gallery/wedding-cakes/12.jpg",
    alt: "Wedding Cakes by CakesbyBIMS — design 12",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-13",
    src: "/images/gallery/wedding-cakes/13.jpg",
    alt: "Tall multi-tier wedding cake trailed with blush and ivory roses at a floral archway reception",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-14",
    src: "/images/gallery/wedding-cakes/14.jpg",
    alt: "Wedding fair display of four bespoke tiered cakes with ruffles, monograms and dried florals",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-15",
    src: "/images/gallery/wedding-cakes/15.jpg",
    alt: "Suspended ivory and gold wedding cake with monogram plaque and cascading roses",
    category: "wedding-cakes",
  },
  {
    id: "wedding-cakes-16",
    src: "/images/gallery/wedding-cakes/16.jpg",
    alt: "Suspended pearl and floral wedding cake with a hanging rose garland",
    category: "wedding-cakes",
  },
  {
    id: "childrens-cake-01",
    src: "/images/gallery/childrens-cake/01.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 1",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-02",
    src: "/images/gallery/childrens-cake/02.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 2",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-03",
    src: "/images/gallery/childrens-cake/03.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 3",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-04",
    src: "/images/gallery/childrens-cake/04.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 4",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-05",
    src: "/images/gallery/childrens-cake/05.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 5",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-06",
    src: "/images/gallery/childrens-cake/06.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 6",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-07",
    src: "/images/gallery/childrens-cake/07.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 7",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-08",
    src: "/images/gallery/childrens-cake/08.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 8",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-09",
    src: "/images/gallery/childrens-cake/09.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 9",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-10",
    src: "/images/gallery/childrens-cake/10.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 10",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-11",
    src: "/images/gallery/childrens-cake/11.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 11",
    category: "childrens-cake",
  },
  {
    id: "childrens-cake-12",
    src: "/images/gallery/childrens-cake/12.jpg",
    alt: "Children's Cakes by CakesbyBIMS — design 12",
    category: "childrens-cake",
  },
  {
    id: "baby-shower-cakes-01",
    src: "/images/gallery/baby-shower-cakes/01.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 1",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-02",
    src: "/images/gallery/baby-shower-cakes/02.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 2",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-03",
    src: "/images/gallery/baby-shower-cakes/03.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 3",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-04",
    src: "/images/gallery/baby-shower-cakes/04.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 4",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-05",
    src: "/images/gallery/baby-shower-cakes/05.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 5",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-06",
    src: "/images/gallery/baby-shower-cakes/06.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 6",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-07",
    src: "/images/gallery/baby-shower-cakes/07.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 7",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-08",
    src: "/images/gallery/baby-shower-cakes/08.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 8",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-09",
    src: "/images/gallery/baby-shower-cakes/09.jpg",
    alt: "Baby Shower Cakes by CakesbyBIMS — design 9",
    category: "baby-shower-cakes",
  },
  {
    id: "baby-shower-cakes-10",
    src: "/images/gallery/baby-shower-cakes/10.jpg",
    alt: "Ivory baby shower cake with gold balloon cluster, palm fronds and a teddy bear topper",
    category: "baby-shower-cakes",
  },
  {
    id: "engagement-traditional-cakes-01",
    src: "/images/gallery/engagement-traditional-cakes/01.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 1",
    category: "engagement-traditional-cakes",
  },
  {
    id: "engagement-traditional-cakes-02",
    src: "/images/gallery/engagement-traditional-cakes/02.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 2",
    category: "engagement-traditional-cakes",
  },
  {
    id: "engagement-traditional-cakes-03",
    src: "/images/gallery/engagement-traditional-cakes/03.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 3",
    category: "engagement-traditional-cakes",
  },
  {
    id: "engagement-traditional-cakes-04",
    src: "/images/gallery/engagement-traditional-cakes/04.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 4",
    category: "engagement-traditional-cakes",
  },
  {
    id: "engagement-traditional-cakes-05",
    src: "/images/gallery/engagement-traditional-cakes/05.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 5",
    category: "engagement-traditional-cakes",
  },
  {
    id: "engagement-traditional-cakes-06",
    src: "/images/gallery/engagement-traditional-cakes/06.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 6",
    category: "engagement-traditional-cakes",
  },
  {
    id: "engagement-traditional-cakes-07",
    src: "/images/gallery/engagement-traditional-cakes/07.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 7",
    category: "engagement-traditional-cakes",
  },
  {
    id: "engagement-traditional-cakes-08",
    src: "/images/gallery/engagement-traditional-cakes/08.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 8",
    category: "engagement-traditional-cakes",
  },
  {
    id: "engagement-traditional-cakes-09",
    src: "/images/gallery/engagement-traditional-cakes/09.jpg",
    alt: "Engagement & Traditional Cakes by CakesbyBIMS — design 9",
    category: "engagement-traditional-cakes",
  },
  {
    id: "celebration-cakes-men-01",
    src: "/images/gallery/celebration-cakes-men/01.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 1",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-02",
    src: "/images/gallery/celebration-cakes-men/02.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 2",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-03",
    src: "/images/gallery/celebration-cakes-men/03.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 3",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-04",
    src: "/images/gallery/celebration-cakes-men/04.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 4",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-05",
    src: "/images/gallery/celebration-cakes-men/05.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 5",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-06",
    src: "/images/gallery/celebration-cakes-men/06.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 6",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-07",
    src: "/images/gallery/celebration-cakes-men/07.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 7",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-08",
    src: "/images/gallery/celebration-cakes-men/08.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 8",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-09",
    src: "/images/gallery/celebration-cakes-men/09.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 9",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-10",
    src: "/images/gallery/celebration-cakes-men/10.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 10",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-11",
    src: "/images/gallery/celebration-cakes-men/11.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 11",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-12",
    src: "/images/gallery/celebration-cakes-men/12.jpg",
    alt: "Celebration Cakes (Men) by CakesbyBIMS — design 12",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-men-13",
    src: "/images/gallery/celebration-cakes-men/13.jpg",
    alt: "Tuxedo-inspired 40th birthday cake with gold bow tie topper and fondant money detailing",
    category: "celebration-cakes-men",
  },
  {
    id: "celebration-cakes-women-01",
    src: "/images/gallery/celebration-cakes-women/01.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 1",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-02",
    src: "/images/gallery/celebration-cakes-women/02.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 2",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-03",
    src: "/images/gallery/celebration-cakes-women/03.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 3",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-04",
    src: "/images/gallery/celebration-cakes-women/04.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 4",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-05",
    src: "/images/gallery/celebration-cakes-women/05.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 5",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-06",
    src: "/images/gallery/celebration-cakes-women/06.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 6",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-07",
    src: "/images/gallery/celebration-cakes-women/07.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 7",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-08",
    src: "/images/gallery/celebration-cakes-women/08.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 8",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-09",
    src: "/images/gallery/celebration-cakes-women/09.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 9",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-10",
    src: "/images/gallery/celebration-cakes-women/10.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 10",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-11",
    src: "/images/gallery/celebration-cakes-women/11.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 11",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-12",
    src: "/images/gallery/celebration-cakes-women/12.jpg",
    alt: "Celebration Cakes (Women) by CakesbyBIMS — design 12",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-13",
    src: "/images/gallery/celebration-cakes-women/13.jpg",
    alt: "Dramatic black and gold 40th birthday cake with painted florals and geometric fondant base",
    category: "celebration-cakes-women",
  },
  {
    id: "celebration-cakes-women-14",
    src: "/images/gallery/celebration-cakes-women/14.jpg",
    alt: "Custom celebration cake with hand-sculpted figurine toppers seated on an armchair",
    category: "celebration-cakes-women",
  },
  {
    id: "character-themed-cakes-01",
    src: "/images/gallery/character-themed-cakes/01.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 1",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-02",
    src: "/images/gallery/character-themed-cakes/02.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 2",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-03",
    src: "/images/gallery/character-themed-cakes/03.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 3",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-04",
    src: "/images/gallery/character-themed-cakes/04.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 4",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-05",
    src: "/images/gallery/character-themed-cakes/05.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 5",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-06",
    src: "/images/gallery/character-themed-cakes/06.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 6",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-07",
    src: "/images/gallery/character-themed-cakes/07.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 7",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-08",
    src: "/images/gallery/character-themed-cakes/08.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 8",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-09",
    src: "/images/gallery/character-themed-cakes/09.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 9",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-10",
    src: "/images/gallery/character-themed-cakes/10.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 10",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-11",
    src: "/images/gallery/character-themed-cakes/11.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 11",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-12",
    src: "/images/gallery/character-themed-cakes/12.jpg",
    alt: "Character & Themed Cakes by CakesbyBIMS — design 12",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-13",
    src: "/images/gallery/character-themed-cakes/13.jpg",
    alt: "Superhero-themed birthday cake with Hulk fist, Superman, Spider-Man and Captain America tiers",
    category: "character-themed-cakes",
  },
  {
    id: "character-themed-cakes-14",
    src: "/images/gallery/character-themed-cakes/14.jpg",
    alt: "Four-tier superhero birthday cake with Hulk, Superman, Spider-Man and Batman detailing at a party",
    category: "character-themed-cakes",
  },
  {
    id: "graduation-cake-01",
    src: "/images/gallery/graduation-cake/01.jpg",
    alt: "Graduation Cakes by CakesbyBIMS — design 1",
    category: "graduation-cake",
  },
  {
    id: "graduation-cake-02",
    src: "/images/gallery/graduation-cake/02.jpg",
    alt: "Graduation Cakes by CakesbyBIMS — design 2",
    category: "graduation-cake",
  },
  {
    id: "graduation-cake-03",
    src: "/images/gallery/graduation-cake/03.jpg",
    alt: "Graduation Cakes by CakesbyBIMS — design 3",
    category: "graduation-cake",
  },
  {
    id: "graduation-cake-04",
    src: "/images/gallery/graduation-cake/04.jpg",
    alt: "Graduation Cakes by CakesbyBIMS — design 4",
    category: "graduation-cake",
  },
  {
    id: "graduation-cake-05",
    src: "/images/gallery/graduation-cake/05.jpg",
    alt: "Graduation Cakes by CakesbyBIMS — design 5",
    category: "graduation-cake",
  },
  {
    id: "graduation-cake-06",
    src: "/images/gallery/graduation-cake/06.jpg",
    alt: "Graduation Cakes by CakesbyBIMS — design 6",
    category: "graduation-cake",
  },
  {
    id: "graduation-cake-07",
    src: "/images/gallery/graduation-cake/07.jpg",
    alt: "Graduation Cakes by CakesbyBIMS — design 7",
    category: "graduation-cake",
  },
  {
    id: "graduation-cake-08",
    src: "/images/gallery/graduation-cake/08.jpg",
    alt: "Graduation Cakes by CakesbyBIMS — design 8",
    category: "graduation-cake",
  },
  {
    id: "graduation-cake-09",
    src: "/images/gallery/graduation-cake/09.jpg",
    alt: "Graduation celebration cake with mortarboard topper, silhouette plaque and pink florals",
    category: "graduation-cake",
  },
  {
    id: "cupcakes-favours-01",
    src: "/images/gallery/cupcakes-favours/01.jpg",
    alt: "Individually boxed vanilla sponge cake favours finished with gold trim",
    category: "cupcakes-favours",
  },
  {
    id: "cupcakes-favours-02",
    src: "/images/gallery/cupcakes-favours/02.jpg",
    alt: "Individual jarred cake desserts in red velvet, salted caramel and cookies and cream flavours",
    category: "cupcakes-favours",
  },
];

export function getGalleryCategory(slug: string): GalleryCategory | undefined {
  return galleryCategories.find((category) => category.slug === slug);
}

export function getGalleryItems(slug: string): GalleryItem[] {
  return galleryItems.filter((item) => item.category === slug);
}

