import React, { useRef } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { AnimatedDIamond } from 'wavyjs'

const AnimatedDiamondBGInfo = () => {
  const divRef = useRef(null);

  const handleCopy = () => {
    if (divRef.current) {
      const text = divRef.current.innerText;
      navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => console.error("Failed to copy text: ", err));
    }
  };

  return (
    <div className='text-white flex flex-col ml-5 sm:ml-5 md:ml-30'>
      <h1 className='text-[28px] sm:text-[36px] md:text-[40px] font-bold'>Animated Diamond BG</h1>
      <h4 className='text-gray-500 text-[10px] sm:text-[10px] md:text-[15px]'>Simple animated BG for websites.</h4>

      {/* Preview */}
      <div className='h-[60vh] w-[70vw] sm:w-[75vw] md:w-[50vw] mt-10 py-5'>
        <h2 className='text-sm sm:text-sm md:text-xl underline'>Preview</h2>
        <div className='h-full w-full mt-5 rounded-lg border-1 border-white/40'>
          <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
            <AnimatedDIamond />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              Your Content Goes Here
            </div>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className='w-[50vw] h-auto flex flex-col mt-20'>
        <h2 className='text-lg sm:text-lg md:text-2xl'>Installation</h2>
        <div className='flex flex-row items-center justify-between p-4 bg-white/10 rounded-lg w-[70vw] sm:w-[75vw] md:w-[50vw] mt-4'>
          <div className='w-full' ref={divRef}>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} showLineNumbers wrapLongLines customStyle={{ overflowX: "hidden" }}>
              npm i wavyjs@latest
            </SyntaxHighlighter>
          </div>
          <button onClick={handleCopy} className='text-white bg-white/30 px-2 rounded-full cursor-pointer text-[12px]'>Copy</button>
        </div>

        {/* Usage */}
        <h2 className='text-lg sm:text-lg md:text-2xl mt-10'>Usage</h2>

        {/* Import */}
        <div className='flex flex-row justify-between p-4 bg-white/10 rounded-lg w-[70vw] sm:w-[75vw] md:w-[50vw] mt-4'>
          <div className='w-full' ref={divRef}>
            <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines customStyle={{ overflowX: "hidden" }}>
              {`import { AnimatedDIamond } from 'wavyjs'`}
            </SyntaxHighlighter>
          </div>
          <button onClick={handleCopy} className='h-5 text-white bg-white/30 px-2 py-1 flex items-center rounded-full cursor-pointer text-[12px]'>Copy</button>
        </div>

        {/* JSX Usage */}
        <div className='flex flex-row justify-between p-4 bg-white/10 rounded-lg w-[70vw] sm:w-[75vw] md:w-[50vw] mt-4'>
          <div className='w-full' ref={divRef}>
            <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLongLines customStyle={{ overflowX: "hidden" }}>
{`<div className="relative w-full h-full overflow-hidden flex items-center justify-center">
  <AnimatedDIamond />
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
    Your Content Goes Here
  </div>
</div>`}
            </SyntaxHighlighter>
          </div>
          <button onClick={handleCopy} className='h-5 text-white bg-white/30 px-2 py-1 flex items-center rounded-full cursor-pointer text-[12px]'>Copy</button>
        </div>
      </div>
    </div>
  )
}

export default AnimatedDiamondBGInfo
