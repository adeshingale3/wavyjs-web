import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"

import Hero from "./screens/Hero"
import Components from "./screens/Components"
import { Analytics } from "@vercel/analytics/react"
import gsap from "gsap"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

// 👇 This component scrolls to top smoothly on every route change
function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])

  return null
}

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,  // smooth for desktop wheel
      smoothTouch: true,  // ✅ smooth also on touch / mobile
      lerp: 0.1, 
    })

    lenis.on("scroll", ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <Analytics />
      <ScrollToTop /> {/* auto scroll to top on route change */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/components/*" element={<Components />} />
      </Routes>
    </Router>
  )
}

export default App
