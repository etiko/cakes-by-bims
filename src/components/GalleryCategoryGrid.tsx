"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/lib/gallery-data";
import { CloseIcon } from "./icons";

/** Masonry grid + lightbox for a single gallery category's photos. */
export function GalleryCategoryGrid({ items }: { items: GalleryItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = items.find((item) => item.id === activeId) ?? null;

  return (
    <div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className="mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-rose"
          >
            <span className="relative block w-full">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </span>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-cocoa/90 p-6"
          onClick={() => setActiveId(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-6 top-6 text-cream"
            onClick={() => setActiveId(null)}
          >
            <CloseIcon className="h-8 w-8" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
              width={1200}
              height={1500}
              className="h-auto max-h-[85vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-4 text-center text-sm text-blush">{activeItem.alt}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
