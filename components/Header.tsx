import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end py-8 border-b border-white/5 relative">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-lumina-teal/10 border border-lumina-teal/30 rounded-full">
                <Sparkles className="text-lumina-teal w-6 h-6" />
            </div>
            <span className="text-xs font-display tracking-[0.2em] text-lumina-mint">SYSTEM_V.1.0</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
          Zach<span className="text-lumina-teal">.</span>Stack
        </h1>
      </div>
      
      <div className="mt-8 md:mt-0 text-left md:text-right max-w-md">
        <p className="text-lumina-periwinkle/80 font-sans text-sm md:text-base leading-relaxed">
            A CURATED COLLECTION OF <span className="text-white font-medium">AI-POWERED</span> APPLICATIONS AND EXPERIMENTS.
            DESIGNED FOR THE <span className="text-lumina-mint">FUTURE</span>.
        </p>
      </div>
    </header>
  );
};