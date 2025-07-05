import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div id="skills" className="flex justify-center items-center py-20 px-4">
      <div className="w-full h-full max-w-[1440px]">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="mt-12 flex justify-center flex-wrap gap-6">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="tech-card relative w-[180px] h-[300px] rounded-full overflow-hidden group bg-gradient-to-br from-white/10 via-white/5 to-white/10 dark:from-white/10 dark:via-white/5 dark:to-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 transition-transform duration-300 hover:scale-105"
            >

              <div className="absolute inset-0 pointer-events-none before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:rotate-12 before:animate-shine z-0" />

              <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-6">

                <div className="relative w-[140px] h-[140px] rounded-full bg-white/10 backdrop-blur-md shadow-inner flex items-center justify-center mb-4 border border-white/20 overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-30 pointer-events-none" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent blur-sm opacity-20 pointer-events-none rotate-[25deg]" />
                  
                  {/* 3D model inside sphere */}
                  <TechIconCardExperience model={techStackIcon} />
                </div>

                <div className="text-2xl font-semibold text-center text-gray-900 dark:text-white px-2">
                  {techStackIcon.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            60% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shine::before {
            animation: shine 2.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TechStack;
