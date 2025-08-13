import React from 'react'
import { FadingBG} from 'wavyjs'

const FadingBGInfo = () => {
  return (
    <div className='text-white flex flex-col ml-5 sm:ml-5 md:ml-30'>
      <h1 className='text-[28px] sm:text-[36px] md:text-[40px] font-bold'>Fading BG</h1>
      <h4 className='text-gray-500 text-[10px] sm:text-[10px] md:text-[15px]'>A background which has horizontal fading of dots. Minimal but attractive Background.</h4>
      <div className='h-[60vh] w-[50vw] mt-10 py-5'>
          <h2 className='text-xl'>Preview</h2>
          <div className='h-full w-full mt-5 rounded-lg border-1 border-white/40'>
              <FadingBG />
          </div>
      </div>
        
    
      
    
    </div>
  )
}

export default FadingBGInfo