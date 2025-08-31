import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { NotebookBackground } from 'wavyjs'
import PropsTable from '../PropTable'

const NotebookBGInfo = () => {
  const propsData = [
  {
    name: "lineSpacing",
    type: "number",
    description: "Vertical spacing between horizontal lines in pixels."
  },
  {
    name: "lineColor",
    type: "string",
    description: "Color of the horizontal lines."
  },
  {
    name: "lineWidth",
    type: "number",
    description: "Thickness of the horizontal lines in pixels."
  },
  {
    name: "marginLineColor",
    type: "string",
    description: "Color of the vertical margin line."
  },
  {
    name: "marginWidth",
    type: "number",
    description: "Thickness of the vertical margin line in pixels."
  },
  {
    name: "showMargin",
    type: "boolean",
    description: "Whether to display the vertical margin line."
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS or Tailwind classes for styling."
  }
];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch(err => console.error("Failed to copy: ", err))
  }

  return (
    <div className="text-white flex flex-col ml-5 sm:ml-5 md:ml-30">
      <h1 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold">Notebook BG</h1>
      <h4 className="text-gray-500 text-[10px] sm:text-[10px] md:text-[15px]">
        Simple Notebook BG for websites.
      </h4>

      {/* Preview */}
      <div className="h-[60vh] w-[70vw] sm:w-[75vw] md:w-[50vw] mt-10 py-5">
        <h2 className="text-sm sm:text-sm md:text-xl underline">Preview</h2>
        <div className="h-full w-full mt-5 rounded-lg border-1 border-white/40">
          <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
            <NotebookBackground />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-black">
              Your Content Goes Here
            </div>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="w-[50vw] h-auto flex flex-col mt-20">
        <h2 className="text-lg sm:text-lg md:text-2xl">Installation</h2>
        <div className="flex flex-row items-center justify-between p-4 bg-white/10 rounded-lg mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus} wrapLongLines>
            npm i wavyjs@latest
          </SyntaxHighlighter>
          <button onClick={() => handleCopy("npm i wavyjs@latest")} className="text-white bg-white/30 px-2 rounded-full cursor-pointer text-[12px]">
            Copy
          </button>
        </div>

        {/* Usage */}
        <h2 className="text-lg sm:text-lg md:text-2xl mt-10">Usage</h2>
        <div className="flex flex-row justify-between p-4 bg-white/10 rounded-lg mt-4">
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} wrapLongLines>
            {`import { NotebookBackground } from 'wavyjs'`}
          </SyntaxHighlighter>
          <button onClick={() => handleCopy("import { NotebookBackground } from 'wavyjs'")} className="h-5 text-white bg-white/30 px-2 py-1 rounded-full cursor-pointer text-[12px]">
            Copy
          </button>
        </div>

        <div className="flex flex-row justify-between p-4 bg-white/10 rounded-lg mt-4">
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLongLines customStyle={{overflowX: "hidden"}}>
{`<div className="relative w-full h-full overflow-hidden flex items-center justify-center">
  <NotebookBackground />
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-black">
    Your Content Goes Here
  </div>
</div>`}
          </SyntaxHighlighter>
          <button onClick={() => handleCopy(`<div className="relative w-full h-full overflow-hidden flex items-center justify-center">\n  <NotebookBackground />\n  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-black">\n    Your Content Goes Here\n  </div>\n</div>`)} className="h-5 text-white bg-white/30 px-2 py-1 rounded-full cursor-pointer text-[12px]">
            Copy
          </button>
        </div>
        <div className="p-4">
                  <h2 className="text-lg font-semibold text-white mb-3">Props</h2>
          <PropsTable data={propsData} />
        </div>
      </div>
    </div>
  )
}

export default NotebookBGInfo
