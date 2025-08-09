import React, { useState } from 'react';
import FadingBG from '../components/AllComponents/Backgrounds/FadingBG';

const TestingComponent = () => {
  const [activeBg, setActiveBg] = useState(null);

  const renderBackground = () => {
    switch (activeBg) {
      case 'FadingBG':
        return <FadingBG />;
      case 'AnotherBG':
        return <AnotherBG />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {renderBackground()}
      </div>

      {/* UI Layer */}
      <div className="relative z-10 flex gap-4 p-4">
        <button className='text-red-500' onClick={() => setActiveBg('FadingBG')}>Preview 1</button>
        <button className='text-red-500' onClick={() => setActiveBg('AnotherBG')}>Preview 2</button>
        <button className='text-red-500' onClick={() => setActiveBg(null)}>Reset</button>
      </div>
    </div>
  );
};

export default TestingComponent;
