import React from 'react'

const Details = () => {
  return (
    <div>

<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

      <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-8">
        <span className='text-green-700'>Some top</span> colleges
      </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

    {/* card1 */}
    <div className="rounded overflow-hidden shadow-lg">
      <a href="/colleges" />
      <div className="relative">
        <a href="/colleges">
          <img className="w-full" src="/colleges/6.jpg" alt="Sunset in the mountains" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
          </div>
        </a>
        <a href="/colleges">
          <div className="absolute bottom-0 left-0 bg-green-700 px-4 py-2 text-white text-sm hover:bg-white hover:text-green-700 transition duration-500 ease-in-out">
            IIT
          </div>
        </a>
        <a href="/colleges">
          <div className="text-sm absolute top-0 right-0 bg-green-700 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-green-700 transition duration-500 ease-in-out">
            <span className="font-bold">NIRF</span>
            <small>1</small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a href="/colleges" className="font-semibold text-lg inline-block hover:text-green-700 transition duration-500 ease-in-out">
        Indian Institute of Technology Madras</a>
        <p className="text-gray-500 text-sm">
        Chennai, Tamil Nadu
        </p>
      </div>

      <div className="px-6 py-4 flex flex-row items-center justify-between">
            <span href="/colleges" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
            <img className="w-4" src="./book-svgrepo-com.svg" />
            <span className="ml-1"> B.Tech, M.Tech, PhD</span></span>
            <a href='/colleges/Indian%20Institute%20of%20Technology%20Madras#' className="text-[0.8rem] text-gray-600 hover:text-green-900 hover:underline truncate cursor-pointer">See details</a>
        </div>

    </div>

    {/* card2 */}
    <div className="rounded overflow-hidden shadow-lg">
      <a href="/colleges" />
      <div className="relative">
        <a href="/colleges">
          <img className="w-full" src="/colleges/10.jpg" alt="Sunset in the mountains" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
          </div>
        </a>
        <a href="#!">
          <div className="absolute bottom-0 left-0 bg-green-700 px-4 py-2 text-white text-sm hover:bg-white hover:text-green-700 transition duration-500 ease-in-out">
            Private
          </div>
        </a>
        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-green-700 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-green-700 transition duration-500 ease-in-out">
            <span className="font-bold">NIRF</span>
            <small>25</small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a href="/colleges" className="font-semibold text-lg inline-block hover:text-green-700 transition duration-500 ease-in-out">
        Birla Institute of Technology and Science Pilani</a>
        <p className="text-gray-500 text-sm">
        Pilani, Rajasthan
        </p>
      </div>

      <div className="px-6 py-4 flex flex-row items-center justify-between">
            <span href="/colleges" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
            <img className="w-4" src="./book-svgrepo-com.svg" />
            <span className="ml-1"> B.E., M.E., PhD</span></span>
            <a href='/colleges/Birla%20Institute%20of%20Technology%20and%20Science%20Pilani#' className="text-[0.8rem] text-gray-600 hover:text-green-900 hover:underline truncate cursor-pointer">See details</a>
        </div>

    </div>

    {/* card3 */}
    <div className="rounded overflow-hidden shadow-lg">
      <a href="/colleges" />
      <div className="relative">
        <a href="/colleges">
          <img className="w-full" src="/colleges/69.jpg" alt="Sunset in the mountains" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
          </div>
        </a>
        <a href="#!">
          <div className="absolute bottom-0 left-0 bg-green-700 px-4 py-2 text-white text-sm hover:bg-white hover:text-green-700 transition duration-500 ease-in-out">
            IIIT
          </div>
        </a>
        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-green-700 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-green-700 transition duration-500 ease-in-out">
            <span className="font-bold">NIRF</span>
            <small>NA</small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a href="/colleges" className="font-semibold text-lg inline-block hover:text-green-700 transition duration-500 ease-in-out">
        Indian Institute of Information Technology Lucknow</a>
        <p className="text-gray-500 text-sm">
        Lucknow, Uttar Pradesh
        </p>
      </div>

      <div className="px-6 py-4 flex flex-row items-center justify-between truncate">
            <span href="/colleges" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
            <img className="w-4" src="./book-svgrepo-com.svg" />
            <span className="ml-1"> B.Tech, B.Sc, M.Tech, M.Sc, PhD</span></span>
            <a href='/colleges/Indian%20Institute%20of%20Information%20Technology%20Lucknow' className="text-[0.8rem] text-gray-600 truncate hover:text-green-900 hover:underline cursor-pointer">See details</a>
        </div>

    </div>


  </div>

</div>


    </div>
  )
}

export default Details