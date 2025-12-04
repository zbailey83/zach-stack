import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface BentoCardProps {
  project: Project;
  index: number;
}

export const BentoCard: React.FC<BentoCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  const handleCardClick = () => {
    if (project.url && project.url !== '#') {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  const isPlaceholder = project.url === '#';
  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <div
      className={`
        group relative overflow-hidden rounded-[2rem] 
        glass-panel
        transition-all duration-500 ease-out
        hover:border-lumina-teal/30 hover:shadow-[0_0_30px_-5px_rgba(79,183,179,0.15)]
        cursor-pointer
        col-span-1
        flex flex-col
        min-h-[350px]
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      role="article"
    >
      {/* Background Gradient Spot */}
      <div 
        className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none`}
      />

      {/* URL Preview (Iframe) */}
      <div className="absolute inset-0 overflow-hidden bg-lumina-night">
        {!isPlaceholder ? (
          <>
            <iframe
              src={project.url}
              title={`Preview of ${project.title}`}
              className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left transform scale-50 border-none pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0"
              tabIndex={-1}
              loading="lazy"
            />
            {/* Interactive blocker to ensure card click works instead of iframe interaction */}
            <div className="absolute inset-0 z-10" />
          </>
        ) : (
          /* Fallback for placeholder items */
          <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-10 mix-blend-screen`} />
        )}
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-lumina-night via-lumina-night/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col p-8 justify-between pointer-events-none">
        
        {/* Header */}
        <div className="flex justify-between items-start">
            <div className={`
                p-3 rounded-xl backdrop-blur-md border border-white/10 
                bg-white/5 group-hover:bg-lumina-teal/20 group-hover:border-lumina-teal/30
                transition-colors duration-300
            `}>
                <Icon size={24} className="text-white group-hover:text-lumina-mint transition-colors" />
            </div>

            <div className="flex items-center gap-2">
                <span className="text-[10px] font-display uppercase tracking-widest text-lumina-periwinkle border border-white/10 px-2 py-1 rounded-full bg-lumina-night/50 backdrop-blur-md">
                    {project.category}
                </span>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-display font-bold text-white mb-2 uppercase leading-tight tracking-tight drop-shadow-lg pr-4">
                {project.title}
            </h3>
            
            <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mb-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                 <p className="text-lumina-periwinkle/80 text-sm font-sans line-clamp-3 mb-2">
                    {project.description}
                 </p>
                 <p className="text-lumina-teal/80 text-xs font-mono truncate">
                   {project.url !== '#' ? project.url.replace('https://', '') : ''}
                 </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                <span className="font-display text-xs text-white/40 group-hover:text-lumina-mint transition-colors">
                    ID_{displayIndex}
                </span>
                
                <button className={`
                    flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest
                    ${isPlaceholder ? 'text-gray-500 cursor-not-allowed' : 'text-white group-hover:text-lumina-teal'}
                    transition-colors duration-300
                `}>
                    {isPlaceholder ? 'OFFLINE' : 'VIEW SITE'}
                    {!isPlaceholder && <ArrowUpRight size={14} />}
                </button>
            </div>
        </div>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 rounded-tl-2xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 rounded-br-2xl opacity-50 pointer-events-none" />
    </div>
  );
};