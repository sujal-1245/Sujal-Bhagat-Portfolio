import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import TitleHeader from "../components/TitleHeader";
import { reviews } from "../constants";

// Optional: split into rows if needed
// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative w-64 p-4 cursor-pointer overflow-hidden rounded-xl border border-white/10",
        "bg-gradient-to-br from-indigo-900/30 to-storm/20 transition-all duration-300",
        "hover:shadow-[0_0_25px_4px_rgba(255,255,255,0.12)] hover:scale-[1.02]"
      )}
    >
      <div className="flex items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          src={img}
          alt={name || "Reviewer profile"}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/90">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <section id="testimonials">
      <div className="mt-24 md:mt-36 px-4 md:px-20">
        <TitleHeader
          title="What My Clients Say About Me"
          sub="💬 Hear From My Clients"
        />

        <div className="relative mt-12 w-full flex flex-col items-center justify-center overflow-hidden space-y-8">
          {/* Row 1: Right to Left */}
          <Marquee className="rounded-4xl" reverse speed={60} pauseOnHover>
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>

          {/* Row 2: Left to Right */}
          <Marquee className="rounded-4xl" speed={60} pauseOnHover>
            {reviews.map((review) => (
              <ReviewCard key={review.username + "-ltr"} {...review} />
            ))}
          </Marquee>

          {/* Gradient Fades (Edge Shadows) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0f172a] to-transparent rounded-4xl" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0f172a] to-transparent rounded-4xl" />
        </div>
      </div>
    </section>
  );
}
