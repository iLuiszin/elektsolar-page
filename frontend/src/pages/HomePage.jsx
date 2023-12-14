import React from 'react'
import Home from '../Components/HomeComponents/Home'
import Footer from '../Components/HomeComponents/Footer'
import About from '../Components/HomeComponents/About'
import Contact from '../Components/HomeComponents/Contact'
import Work from '../Components/HomeComponents/Work'
import Testimonials from '../Components/HomeComponents/Testimonials'



const HomePage = () => {
  return (
    <div>
      <Home />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage