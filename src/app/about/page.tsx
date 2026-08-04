import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind CakesbyBIMS — a bespoke UK bakery dedicated to beautifully crafted wedding, celebration and dedication cakes.",
};

const values = [
  {
    title: "Bespoke Every Time",
    copy: "No templates — every design starts with your event, colours and flowers.",
  },
  {
    title: "Quality Ingredients",
    copy: "We use quality ingredients and can accommodate gluten-free, vegan and allergen requirements.",
  },
  {
    title: "Fully Insured",
    copy: "Food hygiene rated and fully insured, so you can order with total confidence.",
  },
  {
    title: "Reliable Delivery",
    copy: "On-time delivery and venue setup, so your cake arrives exactly as designed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Our Story"
        title="Baked with love, crafted with care"
        description="CakesbyBIMS began with a simple belief: a cake should be as memorable as the occasion itself. Attention to detail is our watch word, from the first enquiry to the final slice."
        image="/images/cake-berry-tier.jpg"
        imageAlt="Naked wedding cake decorated with fresh berries"
        compact
      />

      <section className="section-container grid gap-12 py-24 md:grid-cols-2 md:items-center">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src="/images/cake-chocolate-drip.jpg"
            alt="Chocolate drip celebration cake decorated with piped chocolate swirls"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <SectionHeading
            align="left"
            eyebrow="Beautiful Craft"
            title="We don't just bake for the occasion"
            description="We engage our clients from enquiry stage through to planning and decorating, ensuring the cake, flowers and venue decoration are integrated to get a perfect blend for your day. Be it your wedding cake, dedication cake, celebration cake, baby shower or graduation — you can count on us to make it memorable."
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cocoa-light">
            Every order is handled personally, from your very first message to the moment your
            cake is delivered and set up. We take the time to understand your event so the cake
            feels like a natural part of the celebration, not an afterthought.
          </p>
        </Reveal>
      </section>

      <section className="bg-blush/40 py-24">
        <div className="section-container">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="From enquiry to celebration"
              description="A simple, personal process designed to take the stress out of ordering a bespoke cake."
            />
          </Reveal>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="section-container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="What makes CakesbyBIMS different"
          />
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem
              key={value.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-cocoa/5 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-serif-display text-xl font-semibold text-cocoa">{value.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-cocoa-light">{value.copy}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <CTASection
        title="Let's plan your cake together"
        description="Share your event details and we'll be in touch to talk flavours, design and delivery."
      />
    </>
  );
}
