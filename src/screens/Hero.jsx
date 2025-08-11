import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect} from 'react'
import SplitType from 'split-type'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
const Hero = () => {
    const navigate = useNavigate();
  const notify = () => toast("Coming Soon !");
    useEffect(() => {
        const split = new SplitType(".title", {
            types: "lines",
            lineClass: "lineChild",
        });

        gsap.from(".lineChild", {
            rotationX: -100,
            transformOrigin: "50% 50% -100px",
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
        });

        

    
    }, []);
    useGSAP(() => {
        const screenWidth = window.innerWidth;

        // Adjust animation distance based on screen size
        const xTarget = screenWidth < 640 ? 150
            : screenWidth < 768 ? 220
                : screenWidth < 1024 ? 300
                    : screenWidth < 1280 ? 360
                        : 420;

        // Animate the lt-circle
        gsap.fromTo(
            '.l-circle',
            { x: -100, opacity: 0 },
            { x: xTarget, opacity: 1, duration: 2.5, ease: 'power3.out' }
        );
        gsap.fromTo(
            '.r-circle',
            { x: 100, opacity: 0 },
            { x: -xTarget, opacity: 1, duration: 2.5, ease: 'power3.out' }
        );

        // Animate the BUTTONS text
        gsap.fromTo(
            '.small-title',
            { opacity: 0 },
            { opacity: 1, duration: 2.5, delay: 0.5, ease: 'power2.out' }
        );

        gsap.fromTo(
            '.buttons',
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 2.5, delay: 0.5, ease: 'power2.out' }
        );


    }, []);



    return (
        <>
        
            <div className='h-screen w-screen flex justify-center'>
                
            <Navbar />
            
            <div className='font-Poppins h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden'>
            {/* LT Line */}
            <div className='absolute h-[0.2%] w-[25%] bg-gradient-to-r from-black to-gray-500 top-50 left-0 rounded-full flex items-center'>
                <h3 className='small-title absolute text-gray-400 text-[10px] ml-20 font-bold'>BUTTONS</h3>
            </div>
            {/* LT Circle */}
            <div className='l-circle absolute h-2 w-2 bg-gray-400 top-49 left-0 rounded-full'></div>
            {/* ---------------------------------------------------------- */}
            {/* LB Line */}
            <div className='absolute h-[0.2%] w-[25%] bg-gradient-to-r from-black to-gray-500 bottom-50 left-0 rounded-full flex items-center'>
                <h3 className='small-title absolute text-gray-400 text-[10px] ml-20 font-bold'>CURSOR</h3>
            </div>
            {/* LB Circle */}
            <div className='l-circle absolute h-2 w-2 bg-gray-400 bottom-49 left-0 rounded-full'></div>
            {/* ----------------------------------------------------------- */}
            {/* RT Line */}
            <div className='absolute h-[0.2%] w-[25%] bg-gradient-to-l from-black to-gray-500 top-50 right-0 rounded-full flex items-center'>
                <h3 className='small-title absolute text-gray-400 text-[10px] right-0 mr-20 font-bold'>CARDS</h3>
            </div>
            {/* RT Circle */}
            <div className='r-circle absolute h-2 w-2 bg-gray-400 top-49 right-0 rounded-full'></div>
            {/* ------------------------------------------------------------------- */}
            {/* RB Line */}
            <div className='absolute h-[0.2%] w-[25%] bg-gradient-to-l from-black to-gray-500 bottom-50 right-0 rounded-full flex items-center'>
                <h3 className='small-titles absolute text-gray-400 text-[10px] right-0 mr-20 font-bold'>NAVBARS</h3>
            </div>
            {/* RB Circle */}
            <div className='r-circle absolute h-2 w-2 bg-gray-400 bottom-49 right-0 rounded-full'></div>
            {/* ------------------------------------------------------------------- */}
            <div className='title w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-[50%] flex flex-col items-center justify-center text-center'>
                <h3 className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-[10px] sm:mb-[12px] md:mb-[14px] lg:mb-[16px]  text-white font-semibold text-center bg-white/20 backdrop-blur-lg rounded-full py-1 px-4 shadow-inner shadow-white/20'>
                    The foundation of your Design System
                </h3>
                <h1 className=' text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[130px] font-bold text-white text-center leading-none'>
                    WAVY JS
                </h1>
                <h2 className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center text-white mt-4'>
                    A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.
                </h2>
            </div>

            <div className='buttons absolute bottom-30 w-[30vw] h-8 sm:h-10 md:h-12 lg:h-14 flex flex-row items-center justify-between gap-2 sm:gap-4 text-white z-9'>
                <button onClick={notify} className='h-full w-[48%] bg-black/80 rounded-full backdrop-blur-lg text-[10px] sm:text-sm md:text-base lg:text-lg shadow-inner shadow-white/20 cursor-pointer'>
                    Components
                </button>
                <button onClick={notify} className='h-full w-[40%] bg-black/80 rounded-full backdrop-blur-lg text-[10px] sm:text-sm md:text-base lg:text-lg shadow-inner shadow-white/20 cursor-pointer'>
                    Visit X
                </button>
            </div>
            <ToastContainer />

           

            


        </div>
        </div>
        </>

    )
}

export default Hero