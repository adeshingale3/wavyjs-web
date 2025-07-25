import React, { useState } from 'react';
import ButtonsInfo from '../components/ButtonsInfo';
import CardInfo from '../components/CardInfo';
import CursorInfo from '../components/CursorInfo';
// import ButtonInfo from './ButtonInfo';


const Component = () => {
    const tabs = ['Buttons', 'Cards', 'Cursor', 'Buttons', 'Cards', 'Cursor', 'Buttons', 'Cards', 'Cursor', 'Buttons', 'Cards', 'Cursor'];
    const [activeTab, setActiveTab] = useState('Buttons');

    // This function returns the correct component based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Buttons':
                return <ButtonsInfo />;
            case 'Cards':
                return <CardInfo />;
            case 'Cursor':
                return <CursorInfo />;
            default:
                return <ButtonsInfo />;
        }
    };

    return (
        <div className='h-screen w-screen bg-black p-5 overflow-auto scrollbar-hidden'>

            {/* Top bar where all component names will be listed */}
            <div className='w-full relative z-10 flex flex-row items-center'>
                <div className='h-full w-[20%] sm:w-[15%] md:w-[10%] lg:w-[5%] bg-red-500 absolute flex items-center justify-center '>
                    logo
                </div>
                <div className='w-screen flex flex-row flex-nowrap items-center gap-1 sm:gap-2 md:gap-12 p-2 sm:p-4 md:p-5 ml-16 sm:ml-22 md:ml-28 overflow-x-auto scrollbar-hidden'>
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(tab)} // set tab on click
                            className={`min-w-max text-white bg-black/80 rounded-full backdrop-blur-lg
                                    text-base sm:text-sm md:text-base lg:text-lg
                                    px-5 py-2 sm:px-3 sm:py-1 md:px-3 md:py-1
                                    shadow-inner shadow-white/60 cursor-pointer transition-all duration-300
                                    `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-5">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default Component;
