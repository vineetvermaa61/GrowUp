
import React from "react";

function AboutUs() {
  return (
    <div className="-mb-24 pb-2 -z-20 mt-16">
      <div className="flex items-center">
        <h2 className="mt-8 text-3xl tracking-tight mx-auto font-extrabold text-gray-600 sm:text-3xl md:text-4xl">
          About Us
        </h2>
      </div>
      <div id="about" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto z-0 -mt-14">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-20 mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left ">
                <h2 className="text-3xl font-bold mb-6 text-slate-700">Our Motivation</h2>
                <p className="text-lg text-gray-600">
                At Grow Up, we understand the stress and uncertainty that come with the college application process. We're committed to simplifying this journey by providing you with the tools and resources you need to make informed decisions about your future. Our mission is to empower students like you to achieve your academic goals and find the perfect college fit.
                </p>
                <h2 className="my-8 text-3xl font-bold mb-5 text-slate-700">Our Mission</h2>
                <p className="text-lg   text-gray-600">
                Our mission is to simplify the college application process by offering personalized guidance, accurate college predictions, and streamlined application support. We'll help you choose majors, craft compelling essays, and navigate the application process. Our college predictor tool estimates your admission chances, helping you focus on realistic options. We'll also assist with every step of the application process, from research to submission.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 -mt-16 pt-2">
          <img
            className="ml-24 w-[85%] object-cover object-top z-10 mt-8"
            src="./about.png"
            alt=""
          />
        </div>
      </div>
</div>

  );
}
export default AboutUs;