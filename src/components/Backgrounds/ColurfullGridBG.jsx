import React, { useRef } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { BlurredShapesBackground } from 'wavyjs'
import PropsTable from '../PropTable';

const ColourfulBGInfo = () => {
  const propsData = [
  { 
    name: "className", 
    type: "string", 
    description: "Optional Tailwind CSS classes to apply custom styling." 
  },
  { 
    name: "colors", 
    type: "string[]", 
    description: "Array of colors used for the shapes. Recommended 2–5 colors." 
  },
  { 
    name: "shapeCount", 
    type: "number", 
    description: "Total number of shapes to be rendered on the background." 
  },
  { 
    name: "animate", 
    type: "boolean", 
    description: "Controls whether the shapes should animate (true) or remain static (false)." 
  },
  { 
    name: "blur", 
    type: "number", 
    description: "Applies a blur effect (in pixels) to the shapes for a soft, diffused look." 
  },
  { 
    name: "opacity", 
    type: "number", 
    description: "Adjusts the overall transparency of shapes. Range: 0 (invisible) to 1 (fully visible)." 
  },
  { 
    name: "backgroundColor", 
    type: "string", 
    description: "Background color of the canvas or container behind the shapes." 
  },
];

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
      <h1 className='text-[28px] sm:text-[36px] md:text-[40px] font-bold'>Colourful Animated BG</h1>
      <h4 className='text-gray-500 text-[10px] sm:text-[10px] md:text-[15px]'>
        A background which has animated colourful shapes.
      </h4>

      {/* Preview */}
      <div className='h-[60vh] w-[70vw] sm:w-[75vw] md:w-[50vw] mt-10 py-5'>
        <h2 className='text-sm sm:text-sm md:text-xl underline'>Preview</h2>
        <div className='h-full w-full mt-5 rounded-lg border-1 border-white/40'>
          <BlurredShapesBackground />
        </div>
      </div>

      {/* Installation */}
      <div className='w-[50vw] h-auto flex flex-col mt-20'>
        <h2 className='text-lg sm:text-lg md:text-2xl '>Installation</h2>
        <div className='flex flex-row items-center justify-between p-4 bg-white/10 rounded-lg mt-4'>
          <SyntaxHighlighter language="bash" style={vscDarkPlus} wrapLongLines>
            npm i wavyjs@latest
          </SyntaxHighlighter>
          <button onClick={handleCopy} className='text-white bg-white/30 px-2 rounded-full cursor-pointer text-[12px]'>Copy</button>
        </div>

        {/* Usage */}
        <h2 className='text-lg sm:text-lg md:text-2xl mt-10'>Usage</h2>
        <div className='flex flex-row justify-between p-4 bg-white/10 rounded-lg mt-4'>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
            {`import { BlurredShapesBackground } from 'wavyjs'`}
          </SyntaxHighlighter>
          <button onClick={handleCopy} className='h-5 text-white bg-white/30 px-2 py-1 rounded-full cursor-pointer text-[12px]'>Copy</button>
        </div>

        <div className='flex flex-row justify-between p-4 bg-white/10 rounded-lg mt-4'>
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLongLines>
{`<div className="h-full w-full">
  <BlurredShapesBackground />
</div>`}
          </SyntaxHighlighter>
          <button onClick={handleCopy} className='h-5 text-white bg-white/30 px-2 py-1 rounded-full cursor-pointer text-[12px]'>Copy</button>
        </div>
        <div className="p-4">
                  <h2 className="text-lg font-semibold text-white mb-3">Props</h2>
          <PropsTable data={propsData} />
        </div>
      </div>
    </div>
  )
}

export default ColourfulBGInfo
