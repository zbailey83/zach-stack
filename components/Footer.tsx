import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-white/5 text-center relative z-10">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lumina-periwinkle/60 text-xs font-display tracking-[0.2em] uppercase">
          Lumina Design System v1.0
        </p>
        <p className="text-white/20 text-[10px] font-mono">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};