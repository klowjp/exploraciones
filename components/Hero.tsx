import React from 'react';
import { RELEASES, HERO_SVG_PATHS } from '../constants.ts';

const Hero: React.FC = () => {
  // Ajustes de radio y tamaño optimizados para impacto visual sin desbordamiento
  // Usamos valores intermedios que mantienen la grandiosidad del original
  const radius = "52vh"; 
  const itemSize = "14vh";

  return (
    <div
  className="relative w-full h-full flex items-center justify-center overflow-hidden select-none"
  style={{
    backgroundImage: "url(/images/fondo2.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      
      {/* 1. INDICADOR SUPERIOR (Pill con Blur) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 animate-[fade-in-up_1s_ease-out]">
        <div className="flex items-center gap-3 px-6 py-3 bg-white/40 backdrop-blur-2xl rounded-full border border-black/5 hover:bg-white/60 transition-all cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe5416] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fe5416]"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] font-black text-[#1d1812]/80">
            Conversemos
          </span>
        </div>
      </div>

      {/* 2. CARRUSEL CIRCULAR (ÓRBITA) */}
      <div 
        className="absolute flex items-center justify-center pointer-events-none"
        style={{
          width: '100vw',
          height: '100vh',
          animation: 'spin-disk 160s linear infinite',
          willChange: 'transform'
        }}
      >
        {RELEASES.map((item, idx) => {
          const total = RELEASES.length;
          const angle = (idx / total) * 360;
          
          return (
  <div
    key={item.id}
    className="absolute pointer-events-auto"
    style={{
      transform: `rotate(${angle}deg) translateY(-${radius})`,
      width: itemSize,
      height: itemSize,
    }}
  >
    <div className="group relative w-full h-full transition-all duration-700 ease-out hover:scale-125 cursor-pointer flex flex-col items-center">
      <img
        src={item.image}
        alt={item.label}
        className="w-full h-full object-contain transition-transform duration-700"
        draggable={false}
      />
      <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:translate-y-2 pointer-events-none">
        <p className="text-xs text-gray-500 whitespace-nowrap font-medium">
          {item.label}
        </p>
      </div>
    </div>
  </div>
);
        })}
      </div>

      

      {/* 4. CONTENIDO CENTRAL (AVATAR + LOGO) */}
      <div className="relative z-40 flex flex-col items-center justify-center animate-[fade-in-up_1.5s_0.4s_both] pointer-events-none">
        <div className="w-28 h-28 md:w-36 md:h-36 mb-10 transition-transform duration-1000 hover:scale-105 pointer-events-auto cursor-pointer">
          <img 
            src="/images/mascara.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1d1812] leading-none m-0 uppercase">
            EXPLORACIONES
          </h1>
          <p className="text-[10px] md:text-[12px] uppercase tracking-[0.7em] font-bold text-[#1d1812]/30 mt-10">
            Things we try to do and things we do while trying
          </p>
        </div>
      </div>

      {/* 5. EFECTO DE DISOLUCIÓN Y BLUR INFERIOR (CRÍTICO) */}
      <div className="absolute bottom-0 left-0 w-full h-[45vh] bg-gradient-to-t from-[#eeeeee] via-[#eeeeee]/95 to-transparent z-[45] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 backdrop-blur-md z-[44] pointer-events-none opacity-40" />
      
    </div>
  );
};

export default Hero;