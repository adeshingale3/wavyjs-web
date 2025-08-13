import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './screens/Hero'
import Components from './screens/Components';
import { Analytics } from "@vercel/analytics/react"
import Introduction from './components/Introduction';
import Installation from './components/Installation';



const App = () => {
  return (
    <Router>
      <Analytics/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/components" element={<Components />} />
        <Route path="/introdunction" element={<Introduction />} />
        <Route path="/installation" element={<Installation />} />
     
        
      </Routes>
    </Router>
  )
}

export default App