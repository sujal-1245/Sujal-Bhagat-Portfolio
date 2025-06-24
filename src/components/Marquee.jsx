import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { twMerge } from "tailwind-merge";

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  speed = 40,
  children,
}) {
  const wrapperRef = useRef();
  const containerRef = useRef();
  const tweenRef = useRef();

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    // ✅ Set correct starting position
    gsap.set(wrapper, {
      x: reverse ? "0%" : "-50%",
    });

    // ✅ Animate in correct direction
    tweenRef.current = gsap.to(wrapper, {
      x: reverse ? "-50%" : "0%",
      duration: speed,
      ease: "linear",
      repeat: -1,
    });

    // ✅ Pause on hover (optional)
    const pause = () => tweenRef.current?.pause();
    const play = () => tweenRef.current?.play();

    if (pauseOnHover) {
      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", play);
    }

    return () => {
      tweenRef.current?.kill();
      if (pauseOnHover) {
        container.removeEventListener("mouseenter", pause);
        container.removeEventListener("mouseleave", play);
      }
    };
  }, [reverse, pauseOnHover, speed]);

  return (
    <div
      ref={containerRef}
      className={twMerge("relative overflow-hidden w-full py-2", className)}
    >
      <div ref={wrapperRef} className="flex gap-4 w-max">
        {/* ✅ Two identical sets to enable looping */}
        <div className="flex gap-4 marquee-set">{children}</div>
        <div className="flex gap-4 marquee-set">{children}</div>
      </div>
    </div>
  );
}
