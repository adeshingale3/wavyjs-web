import { Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const TeamMemberCard = () => {
  return (
    <div className="w-60 h-80 sm:w-64 sm:h-80 md:w-72 md:h-80 rounded-[2rem] shadow-lg overflow-hidden z-10 relative hover:scale-105 transition-all duration-300 ease-in-out">
      
      
      <img
        src="https://imgs.search.brave.com/T_knPyRmVGyBMSlz2v89mnruEksdyt38WDG28G7VK5g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MyLzZm/L2Q1L2MyNmZkNWZj/YmYwYzI1ZmY3N2Ni/OWE3NDM2YjI4ZWE2/LmpwZw"
        alt="Adesh Ingale"
        className="object-cover h-full w-full brightness-110 absolute inset-0 z-10 mask-b-from-20% mask-b-to-98%"
      />

     
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent z-20 flex items-end px-6 pb-2">
        <div className="flex justify-between items-center w-full">
          
         
          <div className="flex flex-col">
            <h2 className="text-white text-[12px] font-semibold">Rohit</h2>
            <h2 className="text-white text-[10px]">Frontend Developer</h2>
          </div>

          
          <div className="flex items-end gap-2">
            <a href="#"><Instagram color="white" size={18} /></a>
            <a href="#"><Twitter color="white" size={18} /></a>
            <a href="#"><Linkedin color="white" size={18} /></a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamMemberCard;
