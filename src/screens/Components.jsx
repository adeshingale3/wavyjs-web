import React, { useEffect, useState } from 'react';
import ButtonsInfo from '../components/ButtonsInfo';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Sidebar from '../components/Sidebar';
// import ButtonInfo from './ButtonInfo';



const Components = () => {
    const navigate = useNavigate();
    const tabs = ['Buttons'];
    const [activeTab, setActiveTab] = useState('Buttons');
    useEffect(() => {
        gsap.fromTo(".nav", 
          {y:-100},
          {y:0, duration: 2}
        )
    }, []);
    useGSAP(()=>{
        gsap.fromTo(
            ".info",
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 2.5, delay: 0.5, ease: 'power2.out' }
        );
    })
    // This function returns the correct component based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Buttons':
                return <ButtonsInfo />;
            default:
                return <ButtonsInfo />;
        }
    };

    return (
        <div className='h-screen w-screen bg-black p-5 overflow-auto scrollbar-hidden'>

            {/* Top bar where all component names will be listed */}
            <div className='nav w-[80%] h-20 relative z-10 flex flex-row items-center'>
                <Link to="/" className='h-full w-[20%] sm:w-[15%] md:w-[10%] lg:w-[5%] absolute flex items-center justify-center '>
                    <img src='/wavy logo.png'/>
                </Link>
            </div>
            {/* Below Content */}
            <div className='info h-screen flex flex-row justify-between h-full w-full'>
                <div><Sidebar /></div>
                <div className='w-full h-screen'>{renderTabContent()}</div>
            </div>
        </div>
    );
};

export default Components;
