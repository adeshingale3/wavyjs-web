import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const App = () => {

  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in + slide up on load
    tl.fromTo(
      imgRef.current,
      {
        scale: 1.5,
        opacity: 0,
        y: 30, // start a bit lower
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power2.out",
      }
    );

    // Infinite bounce animation after fade in
    tl.to(imgRef.current, {
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className='h-screen w-screen bg-black static'>
      <img ref={imgRef} src='/bg.jpg' className='image h-full w-full scale-110'/>
    </div>
  )
}

export default App