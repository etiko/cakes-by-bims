"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categories, galleryItems, type CakeCategory } from "@/lib/gallery-data";
import { CloseIcon } from "./icons";

type Filter = "All" | CakeCategory;

export function GalleryExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  );

  const activeItem = galleryItems.find((item) => item.id === activeId) ?? null;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {(["All", ...categories] as Filter[]).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
              filter === cat
                ? "bg-rose text-cream"
                : "bg-white text-cocoa ring-1 ring-cocoa/10 hover:bg-blush"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
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
