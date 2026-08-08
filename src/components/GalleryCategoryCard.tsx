"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { GalleryCategory, GalleryItem } from "@/lib/gallery-data";
import { ArrowRightIcon } from "./icons";

export function GalleryCategoryCard({
  category,
  coverItem,
  count,
}: {
  category: GalleryCategory;
  coverItem: GalleryItem;
  count: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-cocoa/10"
    >
      <Link href={`/gallery/${category.slug}`} className="relative block h-64 w-full overflow-hidden">
        <Image
          src={coverItem.src}
          alt={coverItem.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
          {count} photos
        </span>
      </Link>
      <div className="scallop-edge" />
      <div className="flex flex-1 flex-col gap-3 p-6 pt-5">
        <h3 className="font-serif-display text-2xl font-semibold text-cocoa">{category.label}</h3>
        <p className="flex-1 text-base leading-relaxed text-cocoa-light">{category.description}</p>
        <Link
          href={`/gallery/${category.slug}`}
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-rose-dark transition-colors hover:text-cocoa"
        >
          Browse category
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
