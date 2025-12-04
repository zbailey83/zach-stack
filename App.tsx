import React from 'react';
import { BentoGrid } from './components/BentoGrid';
import { Header } from './components/Header';
import { PROJECTS } from './constants';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-lumina-night">
      {/* Noise Texture Overlay */}
      <div className="noise-bg" />

      {/* Fluid Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-lumina-deepIndigo/40 rounded-full blur-[100px] animate-blob mix-blend-screen" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-lumina-teal/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
         <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-lumina-periwinkle/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="w-full max-w-7xl z-10 flex flex-col gap-16 p-6 sm:p-8 md:p-12">
        <Header />
        <main className="min-h-[60vh]">
          <BentoGrid items={PROJECTS} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;