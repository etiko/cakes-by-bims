"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
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
  badge?: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  compact = false,
  badge,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 160]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${compact ? "min-h-[56vh]" : "min-h-[92vh]"} flex items-center overflow-hidden`}
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/50 to-cocoa/25" />

      <motion.div
        className="section-container relative py-24 text-cream"
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "show"}
      >
        <motion.span
          variants={reduceMotion ? undefined : item}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-cream"
        >
          <span aria-hidden="true" className="h-px w-6 bg-gold" />
          {eyebrow}
        </motion.span>
        <motion.h1
          variants={reduceMotion ? undefined : item}
          className="text-hero mt-6 max-w-3xl font-serif-display font-semibold"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={reduceMotion ? undefined : item}
          className="mt-7 max-w-xl text-base leading-relaxed text-blush md:text-xl"
        >
          {description}
        </motion.p>
        {(primaryCta || secondaryCta) && (
          <motion.div variants={reduceMotion ? undefined : item} className="mt-10 flex flex-wrap items-center gap-4">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream shadow-[0_8px_30px_-8px_rgba(193,123,126,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-dark hover:shadow-[0_12px_36px_-6px_rgba(193,123,126,0.85)]"
              >
                {primaryCta.label}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-cocoa"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </motion.div>
        )}
        {badge ? (
          <motion.div
            variants={reduceMotion ? undefined : item}
            className="mt-14 inline-flex items-center gap-3 rounded-2xl border border-cream/20 bg-cream/10 px-5 py-4 backdrop-blur-md"
          >
            <span className="font-serif-display text-2xl text-gold">✦</span>
            <span className="text-sm font-medium text-cream">{badge}</span>
          </motion.div>
        ) : null}
      </motion.div>

      {!compact ? (
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/80 md:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-cream/60" />
        </motion.div>
      ) : null}
    </section>
  );
}
