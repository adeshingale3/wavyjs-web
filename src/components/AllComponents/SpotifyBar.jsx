import React from "react";

const SpotifyBar = () => {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      <div className="bg-green-500 flex items-center justify-center overflow-hidden rounded-full h-12 w-12
                md:justify-start md:w-[180px] md:h-12 md:px-2
                lg:h-14 lg:w-[200px] lg:rounded-3xl">
        <img
          src="https://imgs.search.brave.com/BeRb9ikMXri2xGsbkVtAh8Wclq7mtZ1Rnl0GLEV1WBA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudG9paW1nLmNv/bS90aHVtYi9pbWdz/aXplLTIzNDU2LG1z/aWQtODYyMzMyMzMs/d2lkdGgtNjAwLHJl/c2l6ZW1vZGUtNC84/NjIzMzIzMy5qcGc"
          alt="Adesh"
          className="h-10 w-10 rounded-full object-cover animate-spin
                    md:h-10 md:w-10
                    lg:h-12 lg:w-12"
          style={{ animationDuration: "3s" }}
        />

        <div className="hidden md:flex flex-col justify-center flex-1 px-2 overflow-hidden">
          <h1 className="text-white text-sm font-semibold truncate">Vibrate</h1>
          <div className="relative w-full overflow-hidden whitespace-nowrap">
            <div
              className="text-white text-xs font-light inline-block"
              style={{
                animation: "marquee 5s linear infinite",
              }}
            >
              KR$N, Badshah
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpotifyBar;
