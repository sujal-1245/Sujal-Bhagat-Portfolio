import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroModel from "../components/HeroModels/HeroModel";
import { motion } from "framer-motion";

// Motion-enhanced version of your custom button
const MotionButton = motion(Button);

// Animation variant for each line
const lineVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            animate="visible"
          >
            <div className="hero-text">
              {/* Line 0: Personalized animated heading */}
              <motion.h1 custom={0} variants={lineVariant}>
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-2 rounded-full bg-white-50 shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                        />
                        <span className="text-white drop-shadow-[0_0_6px_rgba(100,200,255,0.8)]">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </motion.h1>

              {/* Line 1 & 2: Follow-up personalized lines */}
              <motion.h1 custom={1} variants={lineVariant}>
                into Interactive
              </motion.h1>
              <motion.h1 custom={2} variants={lineVariant}>
                Seamless Experiences
              </motion.h1>
            </div>

            {/* Line 3: Description */}
            <motion.p
              custom={3}
              variants={lineVariant}
              className="text-white-50 md:text-xl relative z-10 pointer-events-none"
            >
              Hey there! I’m Sujal Bhagat — a modern web developer turning ideas{" "}
              <br />
              into sleek, responsive, and high-performing websites.
            </motion.p>

            {/* Line 4: Animated CTA Button */}
            <div className="flex flex-col md:flex-row gap-4">
              <MotionButton
                custom={4}
                variants={lineVariant}
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="See my Work"
                initial="hidden"
                animate="visible"
              />

              <motion.a
                custom={5}
                variants={lineVariant}
                id="button"
                initial="hidden"
                animate="visible"
                href="/Sujal Bhagat Resume (Updated).pdf"
                download
                className="md:w-80 md:h-16 w-60 h-12 flex items-center justify-center rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </header>

        {/* Right: 3D Model */}

        <figure>
          <div className="hero-3d-layout mt-20  flex justify-center items-center">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="group relative w-80 h-80 md:ml-40 rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.1)] border-4 border-transparent hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all duration-500"
            >
              {/* Image */}
              <img
                src="/sujal bhagat.jpg"
                alt="Sujal Bhagat"
                className="w-full h-full object-cover rounded-[2rem] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Spinning border using motion */}
              <motion.div
                className="absolute inset-0 rounded-[2rem] border-2 border-dashed border-white/10 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              />

              {/* Hover caption */}
              <div className="absolute bottom-0 w-full text-center bg-black/30 text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Sujal Bhagat
              </div>
            </motion.div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
