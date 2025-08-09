import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { title: 'Get Started', subtabs: ['Introduction', 'Installation', 'MonoRepo'] },
    { title: 'Backgrounds', subtabs: ['FadingBG', 'Cards', 'Music Bars', 'CheckBox'] },
    { title: 'Hooks', subtabs: ['useHover', 'useScroll', 'useSpeech', 'useToggle'] },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute bottom-[103%] right-2 z-51 p-2 text-white"
      >
        {isOpen ? <X size={22} />: <Menu size={22}/>}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[70%] sm:w-[50%] md:w-[15vw]
           text-white p-5 overflow-auto scrollbar-hidden bg-black
          transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-100'}
          md:translate-x-0 md:static
        `}
      >
        {tabs.map((tab, idx) => (
          <div
            className="flex flex-col gap-2 mb-4"
            key={idx}
          >
            <h2 className="text-lg font-semibold transition-colors duration-200 cursor-pointer">
              {tab.title}
            </h2>
            <div className="flex flex-col gap-2 mb-2">
              {tab.subtabs.map((subtab, subIdx) => (
                <h3
                  key={subIdx}
                  className="text-sm text-white/70 cursor-pointer hover:text-white transition-colors duration-200"
                >
                  {subtab}
                </h3>
              ))}
            </div>
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
