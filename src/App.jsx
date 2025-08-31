import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Hero from "./screens/Hero"
import Components from "./screens/Components"
import { Analytics } from "@vercel/analytics/react"




const App = () => {
    

  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/components/*" element={<Components />} />
      </Routes>
    </Router>
  )
}

export default App
