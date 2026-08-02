import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  compact?: boolean;
}

export function Hero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative ${compact ? "min-h-[50vh]" : "min-h-[85vh]"} flex items-center overflow-hidden`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/45 to-cocoa/20" />
      <div className="section-container relative py-24 text-cream">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl font-serif-display text-4xl leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-blush md:text-lg">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-rose-dark"
              >
                {primaryCta.label}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-6 py-3 text-sm font-medium uppercase tracking-wide text-cream transition-colors hover:bg-cream hover:text-cocoa"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
