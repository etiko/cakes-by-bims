import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { GalleryPreviewGrid } from "@/components/GalleryPreviewGrid";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/Button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { services } from "@/lib/services-data";
import { galleryItems } from "@/lib/gallery-data";
import { siteConfig } from "@/lib/site-config";
import { InstagramIcon } from "@/components/icons";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const previewGallery = galleryItems.slice(0, 6);

  return (
    <>
      <Hero
        eyebrow="Beautiful Craft"
        title={siteConfig.tagline}
        description={siteConfig.description}
        image="/images/hero-wedding-cake.jpg"
        imageAlt="Elegant four-tier white wedding cake decorated with fresh roses"
        primaryCta={{ href: "/contact", label: "Enquire Now" }}
        secondaryCta={{ href: "/gallery", label: "View Gallery" }}
        badge="Trusted for weddings, celebrations & dedications across the UK"
      />

      {/* Quick highlights */}
      <StaggerGroup className="section-container relative z-10 -mt-16 grid gap-4 rounded-3xl bg-white p-8 shadow-2xl shadow-cocoa/10 ring-1 ring-cocoa/5 md:grid-cols-3 md:p-10">
        {[
          {
            title: "Bespoke Design",
            copy: "Every cake is designed around your event, theme and flowers — never off the shelf.",
          },
          {
            title: "Quality Ingredients",
            copy: "Made fresh with quality ingredients, with allergen-aware and dietary options available.",
          },
          {
            title: "Personal Service",
            copy: "We're with you from enquiry to delivery, so nothing is left to chance on the day.",
          },
        ].map((item) => (
          <StaggerItem
            key={item.title}
            className="border-t-2 border-gold pt-4 first:border-t-2 md:border-t-0 md:border-l-2 md:pl-6 md:pt-0 md:first:border-l-0 md:first:pl-0"
          >
            <h3 className="font-serif-display text-lg font-semibold text-cocoa">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cocoa-light">{item.copy}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Services teaser */}
      <section className="section-container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="What We Bake"
            title="Cakes for every occasion"
            description="From wedding showstoppers to birthday favourites, each cake is planned and decorated to suit your celebration."
          />
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {featuredServices.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </Reveal>
      </section>

      {/* Gallery preview */}
      <section className="relative overflow-hidden bg-blush/40 py-24">
        <div className="bg-noise-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full" />
        <div className="section-container relative">
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="A taste of what we've baked"
              description="A small selection from recent weddings, birthdays and celebrations."
            />
          </Reveal>
          <div className="mt-12">
            <GalleryPreviewGrid items={previewGallery} />
          </div>
          <Reveal delay={0.15} className="mt-10 flex justify-center">
            <Button href="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Kind Words"
            title="Loved by our clients"
            description="A few notes from the couples and families we've had the pleasure of baking for."
          />
        </Reveal>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      <CTASection
        title="Ready to create something sweet?"
        description="Tell us about your event and we'll get back to you within 24 hours with ideas and availability."
      />

      {/* Instagram strip */}
      <section className="section-container flex flex-col items-center gap-4 py-16 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <InstagramIcon className="h-8 w-8 text-rose" />
          <p className="font-serif-display text-2xl font-semibold text-cocoa">@cakesbybims</p>
          <p className="max-w-md text-sm text-cocoa-light">
            Follow us on Instagram for the latest creations, behind-the-scenes decorating and booking availability.
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-semibold uppercase tracking-wide text-rose transition-colors hover:text-rose-dark"
          >
            Follow Along →
          </a>
        </Reveal>
      </section>
    </>
  );
}
