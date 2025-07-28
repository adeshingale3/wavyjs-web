import React, { useState } from 'react';
import { cardsData } from '../JSONinfo/Cards';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const CardInfo = () => {
  const [activeTab, setActiveTab] = useState('preview');
  useGSAP(()=>{
        gsap.fromTo(
            ".info",
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2.5, delay: 0.5, ease: 'power2.out' }
        );
    })

  return (
    <div className="info h-screen w-screen p-4 sm:p-6 md:p-10 border border-white/30 rounded-xl flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20
 overflow-auto scrollbar-hidden">
      {cardsData.map((card, index) => (
        <div key={index} className='flex flex-col mb-16 sm:mb-20 md:mb-28 lg:mb-32'>
          {/* Heading */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold">{card.title}</h1>
          <h3 className="text-sm sm:text-base md:text-lg text-white/40 font-semibold">{card.description}</h3>

          {/* Toggle Buttons */}
          <div className="w-[40%] sm:w-[25%] md:w-[13%] h-6 sm:h-[4%] flex flex-row items-center justify-between px-4 sm:px-5 mt-6 sm:mt-10 border-2 border-white/30 rounded-xl">
            <button
              onClick={() => setActiveTab('preview')}
              className={`cursor-pointer text-xs sm:text-sm md:text-base text-white transition-all ${activeTab === 'preview' ? 'font-bold' : 'opacity-50'
                }`}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`cursor-pointer text-xs sm:text-sm md:text-base text-white transition-all ${activeTab === 'code' ? 'font-bold' : 'opacity-50'
                }`}
            >
              Code
            </button>
          </div>

          {/* Conditional Content */}
          <div className="w-[95%] h-[350px] sm:h-[400px] md:h-[500px] mt-5 text-white border border-white/20 rounded-xl p-3 sm:p-4 md:p-5 flex flex-col">
            {activeTab === 'preview' ? (
              <div className="h-[350px] w-full flex items-center justify-center mt-1 sm:mt-2 md:mt-4 lg:mt-6 scale-105 sm:scale-110">
                <card.component />
              </div>
            ) : (
              <div className="w-full h-full">
                <h2 className="text-lg sm:text-xl font-semibold mb-3">Code Snippet</h2>
                <pre className="bg-black/30 p-2 sm:p-3 rounded-md text-xs sm:text-sm font-mono overflow-auto h-[280px] sm:h-[350px] whitespace-pre-wrap break-words scrollbar-hidden">
                  {card.code}
                </pre>
              </div>
            )}
          </div>

          {/* Installation Section */}
          <div className="w-full mt-6 sm:mt-10 flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold">Installation</h3>       
            <h3 className="text-sm sm:text-lg text-white/50">Install the required dependencies</h3>       
            <h4 className="text-xs sm:text-base text-white/70 font-semibold mt-2 sm:mt-6 p-2 sm:p-5">Paste the below command in your terminal
            </h4>
            <div className="w-[95%] border border-white/20 bg-white/5 text-white/90 rounded-lg px-3 py-2 sm:px-5 sm:py-4 mt-1 sm:mt-3 font-mono text-xs sm:text-sm">{card.installCommand}
            </div>
            <h4 className="text-xs sm:text-base text-white/70 font-semibold mt-2 sm:mt-6 p-2 sm:p-5">
              Paste below code in your component
            </h4>
            <div className="w-full h-[350px] sm:h-[400px] md:h-[500px]">

              <pre className="bg-black/30 p-2 sm:p-3 rounded-md text-xs sm:text-sm font-mono overflow-auto whitespace-pre-wrap break-words text-white border border-white/20">
                {card.code}
              </pre>
            </div>

          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default CardInfo;