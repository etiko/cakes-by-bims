import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { flavourGroups, flavourNotes } from "@/lib/flavours-data";

export const metadata: Metadata = {
  title: "Flavours",
  description:
    "Discover CakesbyBIMS' sponge flavours — from classic vanilla and Belgian chocolate to Biscoff, tiramisu and vegan or gluten-free options.",
};

export default function FlavoursPage() {
  return (
    <>
      <Hero
        eyebrow="Taste"
        title="Flavours worth celebrating"
        description="Every cake starts with a flavour you love. Mix and match sponges and fillings across tiers, or ask us for a bespoke flavour combination for your event."
        image="/images/flavours-slice.jpg"
        imageAlt="Slice of layered sponge cake showing filling detail"
        compact
      />

      <section className="section-container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="What's On Offer"
            title="Our sponge flavours"
            description="A selection of our most-loved flavours — all baked fresh to order."
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          {flavourGroups.map((group) => (
            <div key={group.category}>
              <Reveal>
                <h3 className="font-serif-display text-2xl font-semibold text-cocoa">{group.category}</h3>
              </Reveal>
              <StaggerGroup className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((flavour) => (
                  <StaggerItem key={flavour.id}>
                    <div className="h-full rounded-2xl bg-blush/30 p-6 ring-1 ring-cocoa/5">
                      <h4 className="font-serif-display text-xl font-semibold text-cocoa">
                        {flavour.name}
                      </h4>
                      <p className="mt-2 text-base leading-relaxed text-cocoa-light">
                        {flavour.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blush/40 py-24">
        <div className="section-container">
          <Reveal>
            <SectionHeading eyebrow="Good To Know" title="A few notes on flavour" />
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
            <ul className="space-y-4">
              {flavourNotes.map((note) => (
                <li key={note} className="flex gap-3 text-base leading-relaxed text-cocoa-light">
                  <span aria-hidden="true" className="mt-1 text-rose">
                    ✦
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Can't decide on a flavour?"
        description="Tell us about your event and we'll recommend a flavour combination — or arrange a tasting for wedding orders."
      />
    </>
  );
}
