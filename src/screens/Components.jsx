import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Sidebar from '../components/Sidebar';
import Information from '../components/Information';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import Installation from '../components/Installation';
import Monorepo from '../components/Monorepo';
import FadingBGInfo from '../components/Backgrounds/FadingBGInfo';
import MaskedBGInfo from '../components/Backgrounds/MaskedBGInfo';
import GithubBGInfo from '../components/Backgrounds/GithubBGInfo';
import AnimatedBGInfo from '../components/Backgrounds/AnimatedBGInfo';
import NameScrollerBG from '../components/Backgrounds/NameScrollerBG';
import Hover from '../components/Hooks/Hover';
import ReactIconInfo from '../components/Icons/ReactIconInfo';



const Components = () => {
    const navigate = useNavigate();
    
    const [activeTab, setActiveTab] = useState('Information');
   
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
            case 'Information':
                return <Information />;
            case 'Introduction':
                return <Introduction />;
            case 'Installation':
                return <Installation />;
            case 'MonoRepo':
                return <Monorepo />;
            case 'FadingBG':
                return <FadingBGInfo />;  
            case 'MaskedBG':
                return <MaskedBGInfo />;
            case 'GithubBG':
                return <GithubBGInfo />; 
            case 'AnimatedBG':
                return <AnimatedBGInfo />;
            case 'NameScrollerBG':
                return <NameScrollerBG />;  
            case 'useHover':
                return <Hover />; 
            case 'React':
                return <ReactIconInfo />;          
            default:
                return <Information />;
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
                <div ><Sidebar onTabSelect={(tab) => setActiveTab(tab)}/></div>
                <div className='w-full h-screen mt-5 overflow-y-auto scrollbar-hidden'>{renderTabContent()}</div>
            </div>
            <Footer />
        </div>
        
        
    );
};

export default Components;
