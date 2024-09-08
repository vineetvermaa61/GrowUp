import React from 'react'
import TypewriterEffect from './TypewriterEffect';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import LandingPage from './components/LandingPage';
import Details from './components/Details';

const Home = () => {
  return (
    <div className='w-full' >
        <LandingPage/>

        <Features/>
        <Details/>
        <FAQ/>
        
        <Testimonials/>
      
    </div>
  )
}

export default Home


