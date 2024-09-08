import React from 'react'

const Features = () => {
  return (
    <div>
    <section>
  <div className="bg-gray-200 px-2 py-10">
    <div id="features" className="mx-auto max-w-6xl">
      <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
      <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        <span className='text-green-700'>Finding Collge</span> has never been so easy
      </h2>
      <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
        <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
          <img src="./rank.svg"  className="mx-auto h-10 w-10" />
          <h3 className="my-3 font-display font-medium">Rank Predictor</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">
          Wide Range of Resources From detailed college listings to personalized rank predictions, GrowUp offers everything you need to make informed decisions for your engineering career.
          </p>
        </li>
        <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
          <img src="./easy.svg"  className="mx-auto h-10 w-10" />
          <h3 className="my-3 font-display font-medium">Easy to use</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">
          Effortless Navigation Simply enter your details, explore colleges, or predict your rank with just a few clicks—quick, accurate, and hassle-free.
          </p>
        </li>
        <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
          <img src="./compatible.svg"  className="mx-auto h-10 w-10" />
          <h3 className="my-3 font-display font-medium">Device Compatibility</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">
          Compatible Across Devices GrowUp works across all major platforms, including Web, Chrome, Windows, and Mac, ensuring you can access it anytime, anywhere.
          </p>
        </li>
        <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
          
            <img src="./free.svg" className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Free Features</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">Free and Accessible Get started with our free tools—no login required. We offer flexible plans for premium features, including pay-as-you-go and subscription options.</p>
          
        </li>
        <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
          
            <img src="./detail.svg"  className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
            In-depth Details
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">Tailored for You Our platform offers customized features, allowing you to explore in-depth options based on your preferences and academic goals. </p>
          
        </li>
        <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
          
          
            <img src="./update.svg"  className="mx-auto h-10 w-10" />
            <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Real-time Updates</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Access the latest information on cutoffs, seat availability, and admission trends for top engineering colleges, ensuring you make well-informed choices every step of the way.</p>
          
        </li>
      </ul>
    </div>
    <div>
    </div></div></section>
    </div>
  )
}

export default Features