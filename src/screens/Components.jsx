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
import { JavaScriptIcon } from 'wavyjs';
import JavascriptIconInfo from '../components/Icons/JavaScriptIcon';
import JavaIconInfo from '../components/Icons/JavaIcon';
import ReactCardIconInfo from '../components/Card-Icons/ReactCardIcon';
import JavaCardIconInfo from '../components/Card-Icons/JavaCardIcon';
import JavascriptCardIconInfo from '../components/Card-Icons/JavascriptCardIcon';
import PythonCardIconInfo from '../components/Card-Icons/PythonCardInfo';
import TailwindCardIconInfo from '../components/Card-Icons/TailwindCardIcon';
import HtmlCardIconInfo from '../components/Card-Icons/HtmlCardIcon';
import CssCardIconInfo from '../components/Card-Icons/CssCardIcon';
import FlutterCardIconInfo from '../components/Card-Icons/FlutterCardIcon';
import GithubCardIconInfo from '../components/Card-Icons/GithubCardIcon';
import DartCardIconInfo from '../components/Card-Icons/DartCardIcon';
import TailwindIconInfo from '../components/Icons/TailwindIcon';
import PythonIconInfo from '../components/Icons/PythonIcon';
import HtmlIconInfo from '../components/Icons/HtmlIcon';
import GithubIconInfo from '../components/Icons/GithubIcon';
import FlutterIconInfo from '../components/Icons/FlutterIcon';
import DartIconInfo from '../components/Icons/DartIcon';
import CssIconInfo from '../components/Icons/CssIcon';



const Components = () => {
    const tabComponents = {
  Information: <Information />,
  Introduction: <Introduction />,
  Installation: <Installation />,
  MonoRepo: <Monorepo />,
  FadingBG: <FadingBGInfo />,
  MaskedBG: <MaskedBGInfo />,
  GithubBG: <GithubBGInfo />,
  AnimatedBG: <AnimatedBGInfo />,
  NameScrollerBG: <NameScrollerBG />,
  useHover: <Hover />,

  React: <ReactIconInfo />,
  JavaScript: <JavascriptIconInfo />,
  Java: <JavaIconInfo />,
  Tailwind: <TailwindIconInfo />,
  Python: <PythonIconInfo />,
  HTML: <HtmlIconInfo />,
  Github: <GithubIconInfo />,
  Flutter: <FlutterIconInfo />,
  Dart: <DartIconInfo />,
  CSS: <CssIconInfo />,

  ReactCard: <ReactCardIconInfo />,
  JavaCard: <JavaCardIconInfo />,
  JavaScriptCard: <JavascriptCardIconInfo />,
  PythonCard: <PythonCardIconInfo />,
  TailwindCard: <TailwindCardIconInfo />,
  HtmlCard: <HtmlCardIconInfo />,
  CssCard: <CssCardIconInfo />,
  FlutterCard: <FlutterCardIconInfo />,
  GithubCard: <GithubCardIconInfo />,
  DartCard: <DartCardIconInfo />,
};
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
    const renderTabContent = ( activeTab ) => {
  return tabComponents[activeTab] || <Information />;
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
                <div className='w-full h-screen mt-5 overflow-y-auto scrollbar-hidden'>{renderTabContent(activeTab)}</div>
            </div>
            <Footer />
        </div>
        
        
    );
};

export default Components;
