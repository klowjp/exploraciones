import React from 'react';
import Hero from './components/Hero.tsx';
import Grain from './components/Grain.tsx';

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen">
      <Grain />
      <Hero />
    </div>
  );
};

export default App;