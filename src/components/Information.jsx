import React from 'react'
import { Link } from 'react-router-dom';

const Information = () => {
  const Backgrounds = [
  { name: "InteractiveDotsBG", path: "interactive-dots" },
  { name: "InteractiveBoxGridBG", path: "interactive-box-grid" },
  { name: "AnimatedDiamondBG", path: "animated-diamond" },
  { name: "AnimatedChevronBG", path: "animated-chevron" },
  { name: "AnimatedBusinessBG", path: "animated-business" },
  { name: "AnimatedGradientBG", path: "animated-gradient-bg" },
  { name: "GraphBG", path: "graph-bg" },
  { name: "NotebookBG", path: "notebook-bg" },
  { name: "DarkGridBG", path: "dark-grid-bg" },
  { name: "AnimatedLineBG", path: "animated-line" },
  { name: "FadingBG", path: "fading-bg" },
  { name: "AnimatedBG", path: "animated-bg" },
  { name: "MaskedBG", path: "masked-bg" },
  { name: "GithubBG", path: "github-bg" },
  { name: "NameScrollerBG", path: "name-scroller" },
  { name: "AnimatedStar", path: "animated-star" },
  { name: "AnimatedPlus", path: "animted-plus" }, // typo kept same as your old code
];

const Hooks = [
  { name: "useHover", path: "use-hover" },
  { name: "useSpeechSynthesis", path: "use-speech-synthesis" },
  { name: "useToggle", path: "use-toggle" },
  { name: "useCursor", path: "use-cursor" },
  { name: "useSesstionTimeOut", path: "use-session-timeout" },
  { name: "useFetch", path: "use-fetch" },
];

const Icons = [
  { name: "React", path: "react" },
  { name: "JavaScript", path: "javascript" },
  { name: "Java", path: "java" },
  { name: "Tailwind", path: "tailwind" },
  { name: "Python", path: "python" },
  { name: "HTML", path: "html" },
  { name: "CSS", path: "css" },
  { name: "Github", path: "github" },
  { name: "Flutter", path: "flutter" },
  { name: "Dart", path: "dart" },

  // Card Icons
  { name: "ReactCard", path: "react-card" },
  { name: "JavaScriptCard", path: "javascript-card" },
  { name: "JavaCard", path: "java-card" },
  { name: "PythonCard", path: "python-card" },
  { name: "TailwindCard", path: "tailwind-card" },
  { name: "HtmlCard", path: "html-card" },
  { name: "CssCard", path: "css-card" },
  { name: "FlutterCard", path: "flutter-card" },
  { name: "GithubCard", path: "github-card" },
  { name: "DartCard", path: "dart-card" },
];

  return (
    <div className='text-white flex flex-col ml-5 sm:ml-5 md:ml-30'>
      <h1 className='text-[28px] sm:text-[36px] md:text-[50px] font-bold'>Components</h1>
      <h4 className='text-gray-500 text-[10px] sm:text-[10px] md:text-[15px]'>Here you will find all components and hooks<p/>which are available in the WAVYJS.</h4>
        
    <div className="h-full w-[80%] sm:w-[80%] md:w-[60%] mt-5 sm:mt-5 md:mt-10 flex flex-col gap-y-8">
      <h1 className='text-xl sm:text-lg md:text-3xl font-bold underline'>Backgrounds</h1>
          <div className='flex flex-row flex-wrap gap-x-20 gap-y-5 sm:gap-y-5 md:gap-y-10'>
            {Backgrounds.map((bg, idx) => (
            <Link key={idx} to={bg.path} className='text-md sm:text-sm md:text-xl'>{bg.name}</Link>
          ))}
          </div>

      <h1 className='text-xl sm:text-lg md:text-3xl font-bold underline'>Icons</h1>
          <div className='flex flex-row flex-wrap gap-x-20 gap-y-5 sm:gap-y-5 md:gap-y-10'>
            {Icons.map((ic, idx) => (
            <Link key={idx} to={ic.path} className='text-md sm:text-sm md:text-xl'>{ic.name}</Link>
          ))}
          </div>


      <h1 className='text-xl sm:text-lg md:text-3xl font-bold underline'>Hooks</h1>

          <div className='flex flex-row flex-wrap gap-x-20 gap-y-5 sm:gap-y-5 md:gap-y-10'>
            {Hooks.map((hk, idx) => (
            <Link key={idx} to={hk.path} className='text-md sm:text-sm md:text-xl'>{hk.name}</Link>
          ))}
          </div>
      </div>
      
    </div>
  )
}

export default Information