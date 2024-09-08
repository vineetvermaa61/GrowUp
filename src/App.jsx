import React from 'react'

import './App.css'
import CollegePredictor from './components/CollegePredictor/CollegePredictor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import CollegesList from './pages/CollegesList'
import CollegeDetails from './pages/CollegeDetails'

const App = () => (
  <div className='flex flex-col h-[100vh] justify-between'>
    <div className='bg-slate-900 w-full fixed top-0 left-0 right-0 z-50 shadow'>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/contact" element={<Contact/> } />
      <Route path="/about" element={<About/> } />
      <Route path="/predictor" element={<CollegePredictor/> } />
        <Route path="/colleges" element={<CollegesList />} />
        <Route path="/colleges/:college_name" element={<CollegeDetails />} />
    </Routes>
    <div className='bg-slate-900 w-full'>
      <Footer/>
    </div>
  </div>
  
)

export default App
