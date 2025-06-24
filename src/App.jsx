import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowCaseSection'
import RotatingCube from './components/RotatingCube'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonial from './sections/Testimonials'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
       <Hero />
       <RotatingCube />
       <FeatureCards />
       <ShowcaseSection />       
       <Experience />
       <TechStack />
       <Testimonial />
       <Contact />
    </div>
  )
}

export default App