import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const notify = () => toast("Coming Soon !");
  useEffect(() => {
    gsap.fromTo(".nav",
      { y: -100 },
      { y: 0, duration: 2 }
    ),

      gsap.fromTo(".word",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 3 }
      )
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='nav absolute z-50 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] h-[45px] sm:h-[50px] md:h-[60px] flex flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 top-4 sm:top-6 md:top-10'>

        {/* Left menu */}
        <div className='bg-black/30 backdrop-blur-lg w-[40%] sm:w-[30%] h-full rounded-full shadow-inner shadow-white/20 flex flex-row items-center justify-between px-3 sm:px-4 md:px-6 gap-1 sm:gap-2'>
          <Link onClick={notify} className='word text-white text-[10px] sm:text-xs md:text-sm' to="">Components</Link>
          <Link onClick={notify} className='word text-white text-[10px] sm:text-xs md:text-sm' to="">Docs</Link>

        </div>

        {/* Logo */}
        {/* <h2 className='text-white text-[12px] sm:text-sm md:text-base'>
    <img src='/wavy logo.png' className='w-full h-full'/>
  </h2> */}
        <Link
          to="/"
          className="absolute h-10 w-10"
        >
          <img
            src="/wavy logo.png"
            className="w-26 sm:w-22 md:w-18 lg:w-14 " // Adjust sizes for different screens
            alt="Logo"
          />
        </Link>


        {/* Right menu */}
        <div className='bg-black/30 backdrop-blur-lg w-[40%] sm:w-[30%] h-full rounded-full shadow-inner shadow-white/20 flex flex-row items-center justify-between px-4 sm:px-5 md:px-7 gap-1 sm:gap-2'>
          <Link onClick={notify} className='word text-white text-[10px] sm:text-xs md:text-sm' to="">Visit X</Link>
          <Link onClick={notify} className='word text-white text-[10px] sm:text-xs md:text-sm' to="">GitHub</Link>
        </div>
      </div>

    </>

  )
}

export default Navbar