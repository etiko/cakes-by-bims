import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryCategoryGrid } from "@/components/GalleryCategoryGrid";
import { GalleryCategoryFilter } from "@/components/GalleryCategoryFilter";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { galleryCategories, getGalleryCategory, getGalleryItems } from "@/lib/gallery-data";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return galleryCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getGalleryCategory(slug);
  if (!category) return {};

  return {
    title: category.label,
    description: `${category.description} Browse our full ${category.label.toLowerCase()} gallery from CakesbyBIMS.`,
  };
}

export default async function GalleryCategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getGalleryCategory(slug);
  if (!category) notFound();

  const items = getGalleryItems(slug);
  const coverItem = items[0];

  return (
    <>
      <Hero
        eyebrow="Our Work"
        title={category.label}
        description={category.description}
        image={coverItem?.src ?? "/images/wedding-cake-pearl-drape.jpg"}
        imageAlt={coverItem?.alt ?? category.label}
        compact
      />

      <section className="section-container py-24">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading
              eyebrow="Browse By Category"
              title={`${items.length} ${category.label.toLowerCase()}`}
              align="left"
            />
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-dark transition-colors hover:text-cocoa"
            >
              ← All categories
            </Link>
          </div>
        </Reveal>

        <div className="mt-8">
          <GalleryCategoryFilter categories={galleryCategories} activeSlug={category.slug} />
        </div>

        <div className="mt-12">
          <GalleryCategoryGrid items={items} />
        </div>
      </section>

      <CTASection
        title="See something you love?"
        description="Send us the design and we'll create something just as beautiful for your celebration."
      />
    </>
  );
}
