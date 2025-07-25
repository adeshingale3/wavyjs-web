import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='flex justify-center'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App