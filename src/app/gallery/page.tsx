import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryCategoryCard } from "@/components/GalleryCategoryCard";
import { CTASection } from "@/components/CTASection";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { galleryCategories, galleryItems } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our cake gallery by category — wedding, children's, baby shower, engagement, celebration, character, graduation cakes, cupcakes and favours by CakesbyBIMS.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Our Work"
        title="A gallery of our cakes"
        description="Browse by category to see the full range of wedding, celebration, baby shower and dedication cakes we've had the pleasure of creating."
        image="/images/wedding-cake-pearl-drape.jpg"
        imageAlt="Suspended pearl and floral wedding cake with a hanging rose garland"
        compact
      />

      <section className="section-container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Browse By Category"
            title="Find inspiration for your celebration"
            description="Each category has a full gallery of real cakes we've created — pick one to explore."
          />
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryCategories.map((category) => {
            const items = galleryItems.filter((item) => item.category === category.slug);
            const coverItem = items[0];
            if (!coverItem) return null;
            return (
              <StaggerItem key={category.slug}>
                <GalleryCategoryCard category={category} coverItem={coverItem} count={items.length} />
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <CTASection
        title="See something you love?"
        description="Send us the design and we'll create something just as beautiful for your celebration."
      />
    </>
  );
}
