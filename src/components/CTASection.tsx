import { Button } from "./Button";
import { Reveal } from "./motion/Reveal";

interface CTASectionProps {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
}

export function CTASection({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Enquire Now",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-cocoa">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose/30 blur-3xl" />
      <div className="section-container relative flex flex-col items-center gap-6 py-24 text-center text-cream">
        <Reveal>
          <h2 className="text-display max-w-2xl font-serif-display font-semibold">{title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-blush md:text-lg">{description}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
