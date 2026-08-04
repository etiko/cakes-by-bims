import { StaggerGroup, StaggerItem } from "./motion/Reveal";

const testimonials = [
  {
    quote:
      "Our wedding cake was even more beautiful in person than in the design mock-up. Every guest asked who made it!",
    name: "Amara & Femi",
    event: "Wedding, Essex",
  },
  {
    quote:
      "From the first enquiry to the final delivery, communication was brilliant. The cake tasted as good as it looked.",
    name: "Ronke O.",
    event: "50th Birthday, London",
  },
  {
    quote:
      "Booked a dedication cake with only two weeks' notice and it was flawless. Will be booking again for our next celebration.",
    name: "Grace T.",
    event: "Baby Dedication, Kent",
  },
];

export function Testimonials() {
  return (
    <StaggerGroup className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <StaggerItem key={t.name}>
          <figure className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cocoa/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <blockquote className="font-serif-display text-xl leading-relaxed text-cocoa">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-base">
              <span className="block font-semibold text-rose-dark">{t.name}</span>
              <span className="text-cocoa-light">{t.event}</span>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
