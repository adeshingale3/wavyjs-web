import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Hero = () => {
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
            '.lt-circle',
            { x: -100, opacity: 0 },
            { x: xTarget, opacity: 1, duration: 2.5, ease: 'power3.out' }
        );

        // Animate the BUTTONS text
        gsap.fromTo(
            '.buttons',
            { opacity: 0 },
            { opacity: 1, duration: 2.5, delay: 0.5, ease: 'power2.out' }
        );
    }, []);



    return (
        <div className='h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden'>
            {/* LT Line */}
            <div className='absolute h-[0.2%] w-[25%] bg-gradient-to-r from-black to-gray-500 top-50 left-0 rounded-full flex items-center'>
                <h3 className='buttons absolute text-gray-400 text-[10px] ml-20 font-bold'>BUTTONS</h3>
            </div>
            {/* LT Circle */}
            <div className='lt-circle absolute h-2 w-2 bg-gray-400 top-49 left-0 rounded-full'></div>

            <div className='w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-[50%] flex flex-col items-center justify-center'>
                <h3 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white font-semibold text-center'>
                    The foundation of your Design System
                </h3>
                <h1 className='text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] font-bold text-white text-center'>
                    WAVY JS
                </h1>
                <h2 className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-center text-white'>
                    A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.
                </h2>
            </div>
        </div>

    )
}

export default Hero