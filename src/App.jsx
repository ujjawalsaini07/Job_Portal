import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/HeroSection'
import SearchBar from './components/SearchBar'
import Footer from './components/Fotter'

export default function App() {
  return (
  <div className='flex flex-col w-full min-h-screen items-center text-center'>
  <Navbar/>
  <Hero/>
  <Footer/>
  </div>

  )
}
