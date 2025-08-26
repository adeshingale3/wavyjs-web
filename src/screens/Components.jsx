import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

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
import InteractiveDotsBGInfo from '../components/Backgrounds/InteractiveDotBG';
import ColourfulBGInfo from '../components/Backgrounds/ColurfullGridBG';
import DarkGridBGInfo from '../components/Backgrounds/DarkGridBGInfo';
import InteractiveBoxGridInfo from '../components/Backgrounds/InteractiveBoxGridInfo';
import AnimatedLinesBGInfo from '../components/Backgrounds/AnimatedLinesInfo';
import AnimatedDiamondBGInfo from '../components/Backgrounds/AnimatedDiamondBGInfo';

// Exported so Sidebar can use it
export const tabRoutes = {
  Information: { path: "information", component: <Information /> },
  Introduction: { path: "introduction", component: <Introduction /> },
  Installation: { path: "installation", component: <Installation /> },
  MonoRepo: { path: "monorepo", component: <Monorepo /> },
  InteractiveDotsBG: {path: "interactive-dots", component: <InteractiveDotsBGInfo />},
  InteractiveBoxGridBG: {path: "interactive-box-grid", component: <InteractiveBoxGridInfo />},
  AnimatedLineBG: {path: "animated-line", component: <AnimatedLinesBGInfo />},
  AnimatedDiamondBG:{path: "animated-diamond", component: <AnimatedDiamondBGInfo />},
  // BlurredBG:{path:"blurred-bg", component: <ColourfulBGInfo />},
  DarkGridBG: {path: "dark-grid-bg", component: <DarkGridBGInfo />},
  FadingBG: { path: "fading-bg", component: <FadingBGInfo /> },
  MaskedBG: { path: "masked-bg", component: <MaskedBGInfo /> },
  GithubBG: { path: "github-bg", component: <GithubBGInfo /> },
  AnimatedBG: { path: "animated-bg", component: <AnimatedBGInfo /> },
  NameScrollerBG: { path: "name-scroller", component: <NameScrollerBG /> },
  useHover: { path: "use-hover", component: <Hover /> },

  React: { path: "react", component: <ReactIconInfo /> },
  JavaScript: { path: "javascript", component: <JavascriptIconInfo /> },
  Java: { path: "java", component: <JavaIconInfo /> },
  Tailwind: { path: "tailwind", component: <TailwindIconInfo /> },
  Python: { path: "python", component: <PythonIconInfo /> },
  HTML: { path: "html", component: <HtmlIconInfo /> },
  Github: { path: "github", component: <GithubIconInfo /> },
  Flutter: { path: "flutter", component: <FlutterIconInfo /> },
  Dart: { path: "dart", component: <DartIconInfo /> },
  CSS: { path: "css", component: <CssIconInfo /> },

  ReactCard: { path: "react-card", component: <ReactCardIconInfo /> },
  JavaCard: { path: "java-card", component: <JavaCardIconInfo /> },
  JavaScriptCard: { path: "javascript-card", component: <JavascriptCardIconInfo /> },
  PythonCard: { path: "python-card", component: <PythonCardIconInfo /> },
  TailwindCard: { path: "tailwind-card", component: <TailwindCardIconInfo /> },
  HtmlCard: { path: "html-card", component: <HtmlCardIconInfo /> },
  CssCard: { path: "css-card", component: <CssCardIconInfo /> },
  FlutterCard: { path: "flutter-card", component: <FlutterCardIconInfo /> },
  GithubCard: { path: "github-card", component: <GithubCardIconInfo /> },
  DartCard: { path: "dart-card", component: <DartCardIconInfo /> },
};

const Components = () => {
  useEffect(() => {
    gsap.fromTo(".nav", { y: -100 }, { y: 0, duration: 2 });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".info",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2.5, delay: 0.5, ease: "power2.out" }
    );
  });

  return (
    <div className="h-screen w-screen bg-black p-5 overflow-auto scrollbar-hidden">
      {/* Top bar */}
      <div className="nav w-[80%] h-20 relative z-10 flex flex-row items-center">
        <Link
          to="/"
          className="h-full w-[20%] sm:w-[15%] md:w-[10%] lg:w-[5%] absolute flex items-center justify-center "
        >
          <img src="/wavy logo.png" />
        </Link>
      </div>

      {/* Content */}
      <div className="info h-screen flex flex-row justify-between h-full w-full">
        <Sidebar />
        <div className="w-full h-screen mt-5 overflow-y-auto scrollbar-hidden">
          <Routes>
            {Object.entries(tabRoutes).map(([key, { path, component }]) => (
              <Route key={key} path={path} element={component} />
            ))}
            {/* default when only /components */}
            <Route index element={<Information />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Components;
