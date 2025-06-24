import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".glow-card-anim").forEach((el) => {
      gsap.from(el, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    gsap.utils.toArray(".circle-anim").forEach((el) => {
      gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    gsap.utils.toArray(".text-anim").forEach((el) => {
      gsap.from(el, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    gsap.fromTo(
      ".timeline-progress",
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "#experience",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
  title="From Curiosity to Code"
  sub="💡 Projects, Progress, and Passion"
/>

        <div className="mt-32 relative">
          {/* Central Timeline Line + Glowing Progress Bar */}
          <div className="hidden xl:block absolute top-0 bottom-0 left-1/2 w-[4px] -translate-x-1/2 z-0">
            <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-500 rounded-full animate-pulse" />
            <div className="timeline-progress absolute top-0 left-1/2 -translate-x-1/2 w-[6px] rounded-full 
              bg-gradient-to-b from-purple-400 to-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
          </div>

          {/* Experience Cards */}
          <div className="relative z-10 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className="exp-card-wrapper flex flex-col xl:flex-row items-start gap-10"
              >
                {/* Left side: GlowCard */}
                <div className="xl:w-5/12 w-full z-10 glow-card-anim">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img
                        className="rounded-4xl"
                        src={card.imgPath}
                        alt="exp-img"
                      />
                    </div>
                  </GlowCard>
                </div>

                {/* Center: Milestone circle */}
                <div className="hidden xl:flex xl:w-2/12 justify-center relative z-20 circle-anim">
                  <div className="w-12 h-12 rounded-full bg-black border-[4px] border-cyan-400 
                    flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                    <img
                      src={card.logoPath}
                      alt="logo"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </div>

                {/* Right side: Text */}
                <div className="xl:w-5/12 w-full z-10 text-anim">
                  <div className="flex flex-col gap-5">
                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                    <p className="text-white-50">🗓️ {card.date}</p>
                    <p className="text-[#839CB5] italic">Skillset</p>
                    <ul className="list-disc ms-5 mt-2 flex flex-col gap-3 text-white-50">
                      {card.responsibilities.map((res, i) =>
                        res.includes("https://github.com") ? (
                          <li key={i} className="text-lg list-none">
                            <a
                              href="https://github.com/sujal-1245"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 hover:scale-110 transition-transform"
                            >
                              <span className="text-white">GitHub:</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 text-white hover:text-cyan-400 transition-colors"
                              >
                                <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.2 9.2 7.6 10.7.6.1.8-.2.8-.5v-1.8c-3.1.6-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 .1.7 2.3 3.3 1.6.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-6a4.8 4.8 0 011.3-3.3c-.1-.3-.6-1.7.1-3.4 0 0 1-.3 3.4 1.3a11.4 11.4 0 016.2 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.7.3 3.1.1 3.4a4.8 4.8 0 011.3 3.3c0 4.7-2.8 5.7-5.4 6 .4.4.7 1 .7 2v3c0 .3.2.6.8.5 4.4-1.5 7.6-5.6 7.6-10.7C23.4 5.6 18.3.5 12 .5z" />
                              </svg>
                            </a>
                          </li>
                        ) : (
                          <li key={i} className="text-lg">
                            {res}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
