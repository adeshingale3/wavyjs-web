import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { tabRoutes } from "../screens/Components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleTab = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tabs = [
    { title: "Get Started", subtabs: ["Introduction", "Installation", "MonoRepo"] },
    { title: "Icons", subtabs: ["React", "JavaScript", "Java", "Tailwind", "Python", "HTML", "CSS", "Github", "Flutter", "Dart"] },
    { title: "Card Icons", subtabs: ["ReactCard", "JavaScriptCard", "JavaCard", "PythonCard", "TailwindCard", "HtmlCard", "CssCard", "FlutterCard", "GithubCard", "DartCard"] },
    { title: "Backgrounds", subtabs: ["InteractiveDotsBG", "InteractiveBoxGridBG", "AnimatedDiamondBG","AnimatedChevronBG", "AnimatedStar","AnimatedPlus", "AnimatedBusinessBG","AnimatedGradientBG", "GraphBG", "NotebookBG", "DarkGridBG","AnimatedLineBG", "FadingBG", "AnimatedBG", "MaskedBG", "GithubBG", "NameScrollerBG"] },
    { title: "Hooks", subtabs: ["useHover"] }, // add more hooks here
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute bottom-[103%] right-2 z-51 p-1 text-white"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[70%] sm:w-[70%] md:w-[15vw]
          text-white p-5 overflow-auto scrollbar-hidden bg-black
          transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-100"}
          md:translate-x-0 md:static
        `}
      >
        {tabs.map((tab, idx) => (
          <div className="flex flex-col gap-2 mb-4 mt-6" key={idx}>
            {/* Tab title */}
            <h2
              className="text-lg font-semibold transition-colors duration-200 cursor-pointer flex justify-between items-center"
              onClick={() => toggleTab(idx)}
            >
              {tab.title}
              <span className="text-white/50">{openIndex === idx ? "▲" : "▼"}</span>
            </h2>

            {/* Subtabs */}
            {openIndex === idx && (
              <div className="flex flex-col gap-2 mb-2 pl-4">
                {tab.subtabs.map((subtab, subIdx) => (
                  <Link
                    key={subIdx}
                    to={`/components/${tabRoutes[subtab].path}`}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-white/70 cursor-pointer hover:text-white transition-colors duration-200"
                  >
                    {subtab}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
