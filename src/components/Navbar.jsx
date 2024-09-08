
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div> 
    <nav className="flex items-center h-20 max-w-6xl justify-between mx-auto px-4 md:px-8">
      <NavLink to="/">
        <div>
          <img src="../logo.png" className="h-12 md:h-14" />
        </div>
      </NavLink>

      <div className="hidden md:flex items-center font-medium text-slate-100 space-x-6">
        <NavLink to="/" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">Home</p>
        </NavLink>
        <NavLink to="/about" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">About</p>
        </NavLink>
        <NavLink to="/colleges" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">Colleges</p>
        </NavLink>
        <NavLink to="/predictor" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">Predict College</p>
        </NavLink>
        <NavLink to="/contact" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">Contact Us</p>
        </NavLink>
      </div>

      {/* Hamburger menu button for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-slate-100 focus:outline-none">
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>

    {/* Mobile menu */}
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="flex flex-col items-center font-medium text-slate-100 space-y-4 mt-2 pb-6">
        <NavLink to="/" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">Home</p>
        </NavLink>
        <NavLink to="/about" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">About</p>
        </NavLink>
        <NavLink to="/colleges" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">Colleges</p>
        </NavLink>
        <NavLink to="/predictor" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">Predict College</p>
        </NavLink>
        <NavLink to="/contact" >
          <p className="hover:text-green-600 transition-transform duration-300 cursor-pointer">Contact Us</p>
        </NavLink>
      </div>
    </div>
  </div>




  )
};

export default Navbar;
