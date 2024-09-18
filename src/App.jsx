import { useState } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import BookNow from './components/BookNow'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <NavBar />
     <Hero />
     <WhyUs />
     <BookNow />
     <Testimonials />
     <Footer />
    </>
  )
}

export default App
