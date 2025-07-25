import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'

const Navbar = () => {
  useEffect(() => {
        gsap.fromTo(".nav", 
          {y:-100},
          {y:0, duration: 2}
        ),
        
      gsap.fromTo(".word",
        {y:-100, opacity: 0},
        {y:0, opacity: 1, duration: 3}
      )
    }, []);
    
  return (
    <div className='nav absolute z-100 w-[50%] h-15 flex flex-row items-center justify-center gap-10 top-10'>
        <div className='bg-black/30 backdrop-blur-lg w-[30%] h-full rounded-full inset-shadow-sm inset-shadow-white/30 flex flex-row items-center justify-between px-10 gap-3'>
        <a className='word text-white text-sm' href="">ABOUT</a>
        <a className='word text-white text-sm' href="">WORK</a>
        </div>
        <h2 className='text-white'>logo</h2>
        <div className='bg-black/30 backdrop-blur-lg w-[30%] h-full rounded-full inset-shadow-sm inset-shadow-white/30 flex flex-row items-center justify-between px-10 gap-3'>
        <a className='word text-white text-sm' href="">SERVICES</a>
        <a className='word text-white text-sm' href="">CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar