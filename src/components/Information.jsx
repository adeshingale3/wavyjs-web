import React from 'react'

const Information = () => {
  const Backgrounds = ["FadingBG", "AnimatedBG", "MaskedBG", "GithubBG", "FadingBG", "AnimatedBG", "MaskedBG", "GithubBG"];
  const Hooks = ["useHover", "useSpeechSynthesis", "useToggle"];
  return (
    <div className='text-white flex flex-col ml-5 sm:ml-5 md:ml-30'>
      <h1 className='text-[28px] sm:text-[36px] md:text-[50px] font-bold'>Components</h1>
      <h4 className='text-gray-500 text-[10px] sm:text-[10px] md:text-[15px]'>Here you will find all components and hooks<p/>which are available in the WAVYJS.</h4>
        
    <div className="h-full w-[80%] sm:w-[80%] md:w-[60%] mt-5 sm:mt-5 md:mt-10 flex flex-col gap-y-5">
      <h1>Backgrounds</h1>
          <div className='flex flex-row flex-wrap gap-x-20 gap-y-5 sm:gap-y-5 md:gap-y-10'>
            {Backgrounds.map((bg, idx) => (
            <h1 key={idx} className='text-md sm:text-sm md:text-xl'>{bg}</h1>
          ))}
          </div>
          
          <div className='flex flex-row flex-wrap gap-x-20 gap-y-5 sm:gap-y-5 md:gap-y-10'>
            {Hooks.map((hk, idx) => (
            <h1 key={idx} className='text-md sm:text-sm md:text-xl'>{hk}</h1>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Information