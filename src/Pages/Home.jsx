import React from 'react'
import Features from '../component/Features'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Howitwork from '../component/Howitwork'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <Howitwork/>
        <Footer/>
    </div>
  )
}

export default Home