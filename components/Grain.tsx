
import React from 'react';

const Grain: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden opacity-[0.05] mix-blend-multiply">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-[1.5]">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.80" 
            numOctaves="4" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};

export default Grain;
