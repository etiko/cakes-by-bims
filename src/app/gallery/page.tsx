import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryExplorer } from "@/components/GalleryExplorer";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse a gallery of bespoke wedding cakes, celebration cakes, baby shower cakes and cupcakes by CakesbyBIMS.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Our Work"
        title="A gallery of our cakes"
        description="A selection of wedding, celebration, baby shower and dedication cakes we've had the pleasure of creating."
        image="/images/cake-pink-drip.jpg"
        imageAlt="Pink drip birthday cake with a waffle cone topper"
        compact
      />

      <section className="section-container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Browse By Category"
            title="Find inspiration for your celebration"
            description="Filter by occasion to see the styles and flavours we can create for you."
          />
        </Reveal>
        <div className="mt-12">
          <GalleryExplorer />
        </div>
      </section>

      <CTASection
        title="See something you love?"
        description="Send us the design and we'll create something just as beautiful for your celebration."
      />
    </>
  );
}
