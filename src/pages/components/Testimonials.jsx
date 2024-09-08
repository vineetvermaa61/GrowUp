import React from 'react'

const Testimonials = () => {
  return (

      <div className='pb-12 bg-gray-100'>
    
    
    <section className="max-w-5xl mx-auto w-full px-10">
  <div className="flex items-center justify-center flex-col gap-y-2 py-5">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold p-4">What our users <span className='text-green-700'>say...</span>  </h2>
    
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">

    <div className="border bg-gray-50 p-7 rounded-xl  drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">"A Game-Changer for College Counseling"</p>
        <p className="font-medium "> The Rank Predictor tool gave me clarity on my options, and the detailed insights into each institution were incredibly helpful in making my decision.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Rohana Patel" className="h-10 w-10" />
        <p className="pt-2 text-sm font-semibold">— Rohana Patel
        </p>
        <p className="text-sm font-medium ">Aspiring Engineer</p>
      </div>
    </div>

    <div className="border bg-gray-50 p-7 rounded-xl drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">"Exceptional Guidance and Support"</p>
        <p className="font-medium ">The counseling and customer support at GrowUp have been fantastic. They answered all my questions and provided personalized recommendations tailored to my JEE performance. Highly recommend!</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/34.jpg" alt="Meera Sharma" className="h-10 w-10" />
        <p className="pt-2 text-sm font-semibold">— Meera Sharma</p>
        <p className="text-sm font-medium ">JEE Mains Candidate</p>
      </div>
    </div>

    <div className="border bg-gray-50 p-7 rounded-xl  drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">"Easy-to-Use and Accurate"</p>
        <p className="font-medium ">The Rank Predictor is so easy to use, and the predictions matched the actual cutoffs! GrowUp saved me hours of research by offering all the college details in one place.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/94.jpg" alt="Anshu Verma" className="h-10 w-10" />
        <p className="pt-2 text-sm font-semibold">— Anshu Verma</p>
        <p className="text-sm font-medium ">Future Engineering Student</p>
      </div>
    </div>

    <div className="border bg-gray-50 p-7 rounded-xl  drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">"A Must-Have for JEE Aspirants"</p>
        <p className="font-medium ">Using GrowUp was a stress-free experience. From the rank prediction to detailed college profiles, everything was smooth and extremely informative. </p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/men/93.jpg" alt="Ankit Raj" className="h-10 w-10" />
        <p className="pt-2 text-sm font-semibold">— Ankit Raj</p>
        <p className="text-sm font-medium ">JEE Advanced Candidate</p>
      </div>
    </div>

  </div>
</section>



      </div>


  )
}

export default Testimonials