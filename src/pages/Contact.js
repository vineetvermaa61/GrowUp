import React from 'react'
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section className="text-gray-600 body-font relative mt-16 xl:mx-16">
      <h2 className="py-10 text-2xl tracking-tight text-center font-extrabold text-gray-00 sm:text-3xl md:text-4xl">
        Contact Us
      </h2>
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-[50%] h-[40rem] md:w-1/2 bg-gray-300 rounded-lg mt-8 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.095750249444!2d81.02148777522024!3d26.798376776715493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e1!3m2!1sen!2sin!4v1714507396774!5m2!1sen!2sin"
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Head Office
              </h2>
              <p className="mt-1">
                Chak Ganjaria, C, G. City, Lucknow, Ahmamau, Uttar Pradesh
                226002
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-red-500 leading-relaxed">
                vineetvermaa30@email.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">9696829383</p>
            </div>
          </div>
        </div>
        {/* <!-- <form action="https://formspree.io/f/mayrvonk" method="POST" class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"> --></form> */}
        {/* <form action="https://formsubmit.co/vineetvermaa30@gmail.com" method="POST" class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"></form> */}
        <form
          action="https://formsubmit.co/vineetvermaa30@gmail.com"
          method="POST"
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed text-gray-600 mb-5">
            Questions, Thoughts, Or Just Want To give any Feedback?
          </p>
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              name="Name of Sender:"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600">
              Contact No
            </label>
            <input
              type="number"
              placeholder="Enter your Contact Number"
              id="name"
              name="Contact Number of Sender:"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="Email of Sender:"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="subject"
              className="leading-7 text-sm text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter your subject"
              id="subject"
              name="Subjectof Mail:"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              id="message"
              name="Message of Sender:"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>


          <input type="hidden" name="_subject" value="New submission from GrowUp!!"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_cc" value={`vineetdrive1@gmail.com,lcb2021042@iiitl.ac.in,${email}`}/>


          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/contact"
          />
          <input type="hidden" name="_captcha" value="false" />
          <button
            type="submit"
            className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg"
          >
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-1">
            We'll never share your information with anyone else.
          </p>
          <p className="text-xs text-red-400  mb-3">
            *We'll also send you a copy of the mail!!.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
