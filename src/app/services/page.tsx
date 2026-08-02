import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services, faqs } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore CakesbyBIMS services — wedding cakes, celebration cakes, baby shower cakes, graduation cakes and cupcakes, with indicative starting prices.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Cakes for every celebration"
        description="Browse our range of bespoke cakes and desserts. Every price is a starting guide — we'll confirm an exact quote after your consultation."
        image="/images/cake-tiramisu.jpg"
        imageAlt="Elegant layered tiramisu-style celebration cake"
        compact
      />

      <section className="section-container py-24">
        <SectionHeading
          eyebrow="What We Offer"
          title="Choose your occasion"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-blush/40 py-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="Good To Know"
            title="Frequently asked questions"
            description="Everything you need to know before placing your order."
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-cocoa/10 rounded-2xl bg-white shadow-sm ring-1 ring-cocoa/5">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6 open:bg-blush/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif-display text-lg text-cocoa">
                  {faq.question}
                  <span className="shrink-0 text-rose transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-light">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to book your cake?"
        description="Tell us your event date and vision — we'll reply within 24 hours with ideas and a quote."
      />
    </>
  );
}
