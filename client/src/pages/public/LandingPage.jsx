import { Link } from "react-router-dom";
import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/HeroSection'
import Footer from './components/Fotter'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import FeaturedJobs from './components/FeaturedJobs'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Stats from './components/Stats'

const LandingPage = () => {
 return (
  <div className='flex flex-col w-full min-h-screen items-center text-center'>
  <Navbar/>
  <Hero/>
  <Categories/>
  <HowItWorks/>
  <FeaturedJobs/>
  <WhyChooseUs/>
  <Testimonials/>
  <Stats/>
  <FinalCTA/>
  <Footer/>
  </div>

  )
}

export default LandingPage;
