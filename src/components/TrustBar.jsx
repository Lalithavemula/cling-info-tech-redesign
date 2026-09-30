import React from 'react';

const TrustBar = () => {
  return (
    <div className="py-12 bg-surfaceLight border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-8">
          Trusted by businesses building what comes next
        </p>
        
        {/* Text-based trust treatment as requested */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl md:text-2xl font-black tracking-tighter text-primary">PhonoLogix</div>
          <div className="text-xl md:text-2xl font-black tracking-tight text-primary">Mint Engage</div>
          <div className="text-xl md:text-2xl font-bold tracking-widest text-primary">MatchMe</div>
          <div className="text-xl md:text-2xl font-extrabold text-primary">Piaah</div>
          <div className="text-xl md:text-2xl font-black italic text-primary">Matrix</div>
          <div className="text-xl md:text-2xl font-bold tracking-tight text-primary">TaskFlow</div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
