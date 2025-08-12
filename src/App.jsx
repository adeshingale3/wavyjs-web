import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './screens/Hero'
import ButtonsInfo from './components/ButtonsInfo'
import Components from './screens/Components';
import { Analytics } from "@vercel/analytics/react"



const App = () => {
  return (
    <Router>
      <Analytics/>
      <Routes>
        <Route path="/" element={<Components />} />
        <Route path="/buttonsinfo" element={<ButtonsInfo />} />
        <Route path="/components" element={<Components />} />
     
        
      </Routes>
    </Router>
  )
}

export default App