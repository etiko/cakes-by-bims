import { Button } from "./Button";

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
    <section className="bg-cocoa">
      <div className="section-container flex flex-col items-center gap-6 py-20 text-center text-cream">
        <h2 className="max-w-2xl font-serif-display text-3xl md:text-4xl">{title}</h2>
        <p className="max-w-xl text-blush">{description}</p>
        <Button href={primaryHref} variant="primary">
          {primaryLabel}
        </Button>
      </div>
    </section>
  );
}
