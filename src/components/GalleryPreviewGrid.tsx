import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery-data";

export function GalleryPreviewGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`relative overflow-hidden rounded-2xl ${
            index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
