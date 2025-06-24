import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import TitleHeader from '../components/TitleHeader'

const ShowcaseSection = () => {
  const sliderRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideWidth = typeof window !== 'undefined' ? window.innerWidth : 1200

  const projectSets = [
    {
      left: {
        img: '/images/project1.png',
        video: '/videos/Nexus-Canon.mp4',
        title: 'Nexus Canon',
        desc: 'Binge watch your favourite Movies & TV Shows',
      },
      right: [
        {
          img: '/images/project2.png',
          video: '/videos/LucidResume.mp4',
          title: 'Resume Builder',
        },
        {
          img: '/images/project3.png',
          video: '/videos/ToDoVoodoo.mp4',
          title: 'To Do list',
        },
      ],
    },
    {
      left: {
        img: '/images/project4.png',
        video: '/videos/ShopEZ.mp4',
        title: 'ShopEZ',
        desc: 'Shopping done EaZy',
      },
      right: [
        {
          img: '/images/project5.png',
          video: '/videos/car price.mp4',
          title: 'Car Price Prediction',
        },
        {
          img: '/images/project6.png',
          video: '/videos/Rock Paper Scissors.mp4',
          title: 'AI Rock Paper Scissors',
        },
      ],
    },
    {
      left: {
        img: '/images/project7.png',
        video: '/videos/DevNexar.mp4',
        title: 'DevNexar AI',
        desc: 'Landing Page Frontend',
      },
      right: [
        {
          img: '/images/project8.png',
          video: '/videos/ScanWay.mp4',
          title: 'Scanway',
        },
        {
          img: '/images/project9.png',
          video: '/videos/Vyavsaayi Sahayak.mp4',
          title: 'Vyavsaayi Sahayak',
        },
      ],
    },
    {
      left: {
        img: '/images/project10.png',
        video: '/videos/Eato.mp4',
        title: 'Eato',
        desc: 'Food Delivery App',
      },
      right: [
        {
          img: '/images/project11.png',
          video: '/videos/Medimapster.mp4',
          title: 'Medimapster',
        },
        {
          img: '/images/project12.png',
          video: '/videos/student.mp4',
          title: 'Student Dashboard',
        },
      ],
    },
  ]

  const scrollToIndex = (index) => {
    const el = sliderRef.current
    if (!el) return
    el.scrollTo({ left: slideWidth * index, behavior: 'smooth' })
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % projectSets.length
      scrollToIndex(next)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div id="work" className="relative px-4 sm:px-8 py-10">
      <TitleHeader title="Project Gallery" sub="👩🏻‍💻 Work Highlights" />

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory mt-10 gap-8 scrollbar-hide"
      >
        {projectSets.map((set, index) => (
          <motion.div
            key={index}
            className="w-full shrink-0 px-2 sm:px-4 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg snap-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="showcaselayout flex flex-col md:flex-row gap-6 h-[480px]">
              {/* Left Card */}
              <motion.div
                className="md:w-1/2 relative overflow-hidden group rounded-xl h-full"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0.6, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/10 shadow-md">
                  <video
                    src={set.left.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute w-full h-full object-contain top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <img
                    src={set.left.img}
                    alt={set.left.title}
                    className="absolute w-full h-full object-contain top-0 left-0 transition-opacity duration-700 group-hover:opacity-1"
                  />
                </div>

                <motion.div
                  className="relative z-20 mt-4 px-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-semibold text-white">
                    {set.left.title}
                  </h2>
                  <p className="text-white/60 md:text-xl">{set.left.desc}</p>
                </motion.div>
              </motion.div>

              {/* Right Cards */}
              <div className="md:w-1/2 flex flex-col gap-4">
                {set.right.map((proj, i) => (
                  <motion.div
                    key={i}
                    className="group rounded-2xl flex-1 flex flex-col overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * i, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="relative overflow-hidden rounded-2xl aspect-[3/2] bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/10 shadow-md">
                      <video
                        src={proj.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute w-full h-full object-cover top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      />
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="absolute w-full h-full object-contain top-0 left-0 transition-opacity duration-700 group-hover:opacity-1"
                      />
                    </div>

                    <motion.h2
                      className="mt-2 text-xl font-medium text-white px-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + 0.2 * i, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {proj.title}
                    </motion.h2>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projectSets.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? 'bg-white'
                : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ShowcaseSection
