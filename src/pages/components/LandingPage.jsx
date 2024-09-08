import React from 'react'
import TypewriterEffect from '../TypewriterEffect'
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row w-full">

  <div className="w-full sm:w-8/12 mb-10 mt-10 sm:mt-20">
    <div className="container mx-auto h-full p-4 sm:p-10">
      <nav className="flex justify-between items-center">
        <div className="text-3xl sm:text-4xl font-bold">
          Get Started Today<span className="text-green-700">.</span>
        </div>
      </nav>
      <header className="container lg:flex mt-6 sm:mt-10 items-center h-full lg:mt-0">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Plan your <span className="text-green-700">Future</span>
            <TypewriterEffect text="with Confidence" />
          </h1>
          <div className="w-16 h-1 sm:w-20 sm:h-2 bg-green-700 my-4" />
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-10">
            Get tailored recommendations for colleges based on your rank, and let our advisors help you make informed decisions about your future.
          </p>
          <NavLink to="/predictor">
            <button className="bg-green-700 hover:bg-green-800 text-white text-lg sm:text-xl lg:text-2xl font-medium px-4 py-2 rounded shadow">
              Predict College
            </button>
          </NavLink>
        </div>
      </header>
    </div>
  </div>

  {/* Image section */}
  <div className="w-full">
    <img
      src="./home.png"
      alt="Leafs"
      className="w-full h-48 sm:h-full md:h-screen object-contain xl:pl-64 mt-20 md:mt-8"
    />
  </div>
</div>


  )
}

export default LandingPage