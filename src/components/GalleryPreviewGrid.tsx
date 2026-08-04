"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { GalleryItem } from "@/lib/gallery-data";

export function GalleryPreviewGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className={`group relative overflow-hidden rounded-2xl ${
            index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoa/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}
