import { Github } from 'lucide-react';
import React from 'react';
import { useHover } from 'wavyjs';

const GitHubStars = () => {
  const [isHovered, hoverProps] = useHover();

  return (
    <button
      {...hoverProps}
      className={`min-w-[80px] sm:min-w-[100px] px-3 py-2 sm:px-4 sm:py-2 flex items-center justify-between rounded-3xl border border-white bg-black transition-colors duration-300 ease-in-out ${
        isHovered ? 'bg-white' : 'bg-black'
      }`}
    >
      <Github
        size={18}
        className={`transition-colors duration-300 ease-in-out ${
          isHovered ? 'text-black' : 'text-white'
        }`}
      />
      <h4
        className={`text-sm transition-colors duration-300 ease-in-out ${
          isHovered ? 'text-black' : 'text-white'
        }`}
      >
        91.2k
      </h4>
    </button>
  );
};

export default GitHubStars;
