import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Component from './screens/Components'
// import Navbar from './components/Navbar'

import Hero from './screens/Hero'
import ButtonsInfo from './components/ButtonsInfo'
import Components from './screens/Components';
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    // <div className='flex justify-center bg-[#0A0A0A]'>
    //   <Component />
    //   {/* <Hero /> */}
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/buttonsinfo" element={<ButtonsInfo />} />
        <Route path="/components" element={<Components />} />
        <Analytics/>
        
      </Routes>
    </Router>
  )
}

export default App