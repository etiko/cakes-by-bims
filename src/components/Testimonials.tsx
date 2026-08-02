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
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cocoa/5"
        >
          <blockquote className="font-serif-display text-lg leading-relaxed text-cocoa">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm">
            <span className="block font-semibold text-rose-dark">{t.name}</span>
            <span className="text-cocoa-light">{t.event}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
