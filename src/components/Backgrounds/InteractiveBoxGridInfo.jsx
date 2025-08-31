import React, { useRef } from 'react'
import { InteractiveBoxGrid } from 'wavyjs'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import PropsTable from '../PropTable';


const InteractiveBoxGridInfo = () => {
    const propsData = [
  {
    name: "boxSize",
    type: "number",
    description: "Size of each box in pixels."
  },
  {
    name: "spacing",
    type: "number",
    description: "Distance between adjacent boxes."
  },
  {
    name: "maxDistance",
    type: "number",
    description: "Maximum distance at which the cursor influences box movement."
  },
  {
    name: "moveStrength",
    type: "number",
    description: "Strength of the box movement in response to cursor (0–1 range)."
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS or Tailwind classes for styling."
  },
  {
    name: "boxColor",
    type: "string",
    description: "Fill or stroke color of the boxes."
  }
];


    const divRef = useRef(null);

    const handleCopy = () => {
        if (divRef.current) {
            const text = divRef.current.innerText; // get all visible text
            navigator.clipboard.writeText(text)
                .then(() => {
                    alert("Copied to clipboard!");
                })
                .catch(err => {
                    console.error("Failed to copy text: ", err);
                });
        }
    };
    return (
        <div className='text-white flex flex-col ml-5 sm:ml-5 md:ml-30'>
            <h1 className='text-[28px] sm:text-[36px] md:text-[40px] font-bold'>Interactive Box Grid BG</h1>
            <h4 className='text-gray-500 text-[10px] sm:text-[10px] md:text-[15px]'>Hover on the background.</h4>
            <div className='h-[60vh] w-[70vw] sm:w-[75vw] md:w-[50vw] mt-10 py-5'>
                <h2 className='text-sm sm:text-sm md:text-xl underline'>Preview</h2>
                <div className='h-full w-full mt-5 rounded-lg border-1 border-white/40'>

                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                        <InteractiveBoxGrid boxColor='#2a2828ff' spacing={30} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            Your Content Goes Here
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[50vw] h-auto flex flex-col mt-20'>
                <h2 className='text-lg sm:text-lg md:text-2xl '>Installation</h2>
                <div className=' flex flex-row items-center justify-between p-4 bg-white/10 rounded-lg h-15 w-[70vw] sm:w-[75vw] md:w-[50vw] mt-4' >

                    <h1 className='text-sm sm:text-sm md:text-[16px]' ref={divRef}>
                        <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLongLines customStyle={{ overflowX: "hidden" }}>
                            npm i wavyjs@latest
                        </SyntaxHighlighter>
                    </h1>

                    <button onClick={handleCopy} className='text-white bg-white/30 right-0 px-2 rounded-full cursor-pointer text-[12px]'>Copy</button>
                </div>

                <h2 className='text-lg sm:text-lg md:text-2xl mt-10'>Usage</h2>
                <div className=' flex flex-row justify-between p-4 bg-white/10 rounded-lg h-auto w-[70vw] sm:w-[75vw] md:w-[50vw] mt-4' >
                    <h1 className='text-sm sm:text-sm md:text-[16px]' ref={divRef}>
                        <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLongLines customStyle={{ overflowX: "hidden" }}>

                            {"import { InteractiveBoxGrid } from 'wavyjs'"}
                        </SyntaxHighlighter>
                    </h1>
                    <button onClick={handleCopy} className='h-5 text-white bg-white/30 right-0 px-2 py-1 flex items-center rounded-full cursor-pointer text-[12px]'>Copy</button>
                </div>
                <div className=' flex flex-row justify-between p-4 bg-white/10 rounded-lg h-auto w-[70vw] sm:w-[75vw] md:w-[50vw] mt-4' >

                    <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLongLines customStyle={{ overflowX: "hidden" }}>
                        {`<div className="relative w-full h-full overflow-hidden flex items-center justify-center">
  <InteractiveBoxGrid boxColor="#2a2828ff" spacing={30} />
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
    Your Content Goes Here
  </div>
</div>`}
                    </SyntaxHighlighter>

                    <button onClick={handleCopy} className='h-5 text-white bg-white/30 right-0 px-2 py-1 flex items-center rounded-full cursor-pointer text-[12px]'>Copy</button>
                </div>


            <div className="p-4">
                  <h2 className="text-lg font-semibold text-white mb-3">Props</h2>
          <PropsTable data={propsData} />
        </div>
            </div>




        </div>
    )
}

export default InteractiveBoxGridInfo