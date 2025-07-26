import React, { useState } from 'react';
import GitHubStars from './AllComponents/GithubStars';

const ButtonsInfo = () => {
    const [activeTab, setActiveTab] = useState('preview'); // default to 'preview'

    return (
        <div className='h-screen w-screen p-10 border border-white/30 rounded-xl flex flex-col overflow-auto'>
            <h1 className='text-6xl text-white font-bold'>Github Stars</h1>
            <h3 className='text-lg text-white/40 font-semibold'>Hover on that button</h3>

            {/* Preview and code */}
            <div className='w-[13%] h-[8%] flex flex-row items-center justify-between px-5 mt-10 border-2 border-white/30 rounded-t-xl rounded-b-lg'>
                <button
                    onClick={() => setActiveTab('preview')}
                    className={`text-white transition-all ${activeTab === 'preview' ? 'font-bold' : 'opacity-50'}`}
                >
                    Preview
                </button>
                <button
                    onClick={() => setActiveTab('code')}
                    className={`text-white transition-all ${activeTab === 'code' ? 'font-bold' : 'opacity-50'}`}
                >
                    Code
                </button>
            </div>

            {/* Conditional Content */}
            <div className='w-[95%] mt-5 text-white border border-white/20 rounded-xl p-5 flex flex-col max-h-[500px] overflow-auto scrollbar-hidden'>
                {activeTab === 'preview' ? (
                    <div className='h-full w-full flex items-center justify-center scale-110'>
                        <GitHubStars />
                    </div>
                ) : (
                    <div className='w-full h-full'>
                        <h2 className='text-xl font-semibold mb-3'>Code Snippet</h2>
                        <pre className='bg-black/30 p-3 rounded-md text-sm font-mono overflow-auto whitespace-pre-wrap break-words'>
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
                )}
            </div>
{/* Installation */}
            <div className='w-full mt-10 flex flex-col'>
                <h3 className='text-2xl text-white font-bold'>Installation</h3>
                <h3 className='text-lg text-white/50'>Install the required dependancies</h3>
                <h4 className='text-lg text-white/70 font-semibold mt-10 p-5'>Paste the below command in your terminal</h4>
                <div className='w-[95%] border-1 border-white/20 bg-white/5 text-white/90 rounded-lg px-5 py-4 mt-5 font-mono'>npm  i  lucide-react  wavyjs</div>
                <h4 className='text-lg text-white/70 font-semibold mt-10 p-5'>Paste below code in your component</h4>
                <div className='w-full h-full'>
                    <h2 className='text-xl font-semibold mb-3'>Code Snippet</h2>
                    <pre className='bg-black/30 p-3 rounded-md text-sm font-mono overflow-auto whitespace-pre-wrap break-words text-white border-1 border-white/20'>
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
