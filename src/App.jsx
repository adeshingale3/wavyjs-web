import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './screens/Hero'
import ButtonsInfo from './components/ButtonsInfo'
import Components from './screens/Components';
import { Analytics } from "@vercel/analytics/react"
import Introduction from './components/Introduction';



const App = () => {
  return (
    <Router>
      <Analytics/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/buttonsinfo" element={<ButtonsInfo />} />
        <Route path="/components" element={<Components />} />
        <Route path="/introdunction" element={<Introduction />} />
     
        
      </Routes>
    </Router>
  )
}

export default App