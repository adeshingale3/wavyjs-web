import React, { useState } from 'react';
import GitHubStars from './AllComponents/GithubStars';

const ButtonsInfo = () => {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className="h-screen w-screen p-4 sm:p-6 md:p-10 border border-white/30 rounded-xl flex flex-col overflow-auto">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold">Github Stars</h1>
      <h3 className="text-sm sm:text-base md:text-lg text-white/40 font-semibold">
        Hover on that button
      </h3>

      {/* Toggle Buttons */}
      <div className="w-[40%] sm:w-[25%] md:w-[13%] h-10 sm:h-[8%] flex flex-row items-center justify-between px-4 sm:px-5 mt-6 sm:mt-10 border-2 border-white/30 rounded-xl">
        <button
          onClick={() => setActiveTab('preview')}
          className={`cursor-pointer text-xs sm:text-sm md:text-base text-white transition-all ${
            activeTab === 'preview' ? 'font-bold' : 'opacity-50'
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`cursor-pointer text-xs sm:text-sm md:text-base text-white transition-all ${
            activeTab === 'code' ? 'font-bold' : 'opacity-50'
          }`}
        >
          Code
        </button>
      </div>

      {/* Conditional Content */}
      <div className="w-[95%] h-[350px] sm:h-[400px] md:h-[500px] mt-5 text-white border border-white/20 rounded-xl p-3 sm:p-4 md:p-5 flex flex-col">
        {activeTab === 'preview' ? (
          <div className="h-[350px] w-full flex items-center justify-center scale-105 sm:scale-110">
            <GitHubStars />
          </div>
        ) : (
          <div className="w-full h-full">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Code Snippet</h2>
            <pre className="bg-black/30 p-2 sm:p-3 rounded-md text-xs sm:text-sm font-mono overflow-auto h-[280px] sm:h-[350px] whitespace-pre-wrap break-words scrollbar-hidden">
              {String.raw`
import { Github } from 'lucide-react';
import React from 'react';
import { useHover } from 'wavyjs';

const GitHubStars = () => {
  const [isHovered, hoverProps] = useHover();

  return (
    <button
      {...hoverProps}
      className={\`min-w-[80px] sm:min-w-[100px] px-3 py-2 sm:px-4 sm:py-2 flex items-center justify-between rounded-3xl border border-white bg-black transition-colors duration-300 ease-in-out \${isHovered ? 'bg-white' : 'bg-black'}\`}
    >
      <Github
        size={18}
        className={\`transition-colors duration-300 ease-in-out \${isHovered ? 'text-black' : 'text-white'}\`}
      />
      <h4
        className={\`text-sm transition-colors duration-300 ease-in-out \${isHovered ? 'text-black' : 'text-white'}\`}
      >
        91.2k
      </h4>
    </button>
  );
};

export default GitHubStars;`}
            </pre>
          </div>
        )}
      </div>

      {/* Installation Section */}
      <div className="w-full mt-6 sm:mt-10 flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold">Installation</h3>
        <h3 className="text-sm sm:text-lg text-white/50">
          Install the required dependencies
        </h3>
        <h4 className="text-xs sm:text-base text-white/70 font-semibold mt-2 sm:mt-6 p-2 sm:p-5">
          Paste the below command in your terminal
        </h4>
        <div className="w-[95%] border border-white/20 bg-white/5 text-white/90 rounded-lg px-3 py-2 sm:px-5 sm:py-4 mt-1 sm:mt-3 font-mono text-xs sm:text-sm">
          npm i lucide-react wavyjs
        </div>
        <h4 className="text-xs sm:text-base text-white/70 font-semibold mt-2 sm:mt-6 p-2 sm:p-5">
          Paste below code in your component
        </h4>
        <div className="w-full h-[350px] sm:h-[400px] md:h-[500px]">
          
          <pre className="bg-black/30 p-2 sm:p-3 rounded-md text-xs sm:text-sm font-mono overflow-auto whitespace-pre-wrap break-words text-white border border-white/20">
            {String.raw`import { Github } from 'lucide-react';
import React from 'react';
import { useHover } from 'wavyjs';

const GitHubStars = () => {
  const [isHovered, hoverProps] = useHover();

  return (
    <button
      {...hoverProps}
      className={\`min-w-[80px] sm:min-w-[100px] px-3 py-2 sm:px-4 sm:py-2 flex items-center justify-between rounded-3xl border border-white bg-black transition-colors duration-300 ease-in-out \${isHovered ? 'bg-white' : 'bg-black'}\`}
    >
      <Github
        size={18}
        className={\`transition-colors duration-300 ease-in-out \${isHovered ? 'text-black' : 'text-white'}\`}
      />
      <h4
        className={\`text-sm transition-colors duration-300 ease-in-out \${isHovered ? 'text-black' : 'text-white'}\`}
      >
        91.2k
      </h4>
    </button>
  );
};

export default GitHubStars;`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ButtonsInfo;
