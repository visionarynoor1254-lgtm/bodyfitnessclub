import { ArrowRight, ChevronDown } from 'lucide-react';
import React from 'react';
import { ASSETS } from '../data/gymData.ts';

interface HeroProps {
  onStartTraining: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTraining, onExplorePrograms }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] lg:min-h-[calc(92vh-5rem)] bg-[#080808] overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-radial from-[#151515] to-[#080808] opacity-60 pointer-events-none" />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-0 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Stacked Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 z-20">
            {/* Small Eyebrow Text */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#E52B2B]" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9E9E9E] uppercase">
                BODY FITNESS CLUB <span className="text-[#E52B2B]">|</span> TRAIN WITH PURPOSE
              </p>
            </div>

            {/* Main Headline - Stacked Large Typography */}
            <h1 className="font-impact text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.2rem] leading-[0.92] tracking-tight text-[#F5F5F5] uppercase text-balance">
              BUILD YOUR<br />
              <span className="text-[#E52B2B] relative inline-block">
                STRONGEST
              </span><br />
              SELF.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#9E9E9E] max-w-xl leading-relaxed font-normal">
              Strength training, expert guidance, and a gym environment built around your goals.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartTraining}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E52B2B] hover:bg-[#CC1F1F] active:bg-[#B21919] text-[#F5F5F5] font-bold text-base tracking-wider rounded-sm transition-all duration-150 shadow-md group cursor-pointer whitespace-nowrap"
              >
                <span>START TRAINING</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-[#151515] text-[#F5F5F5] hover:text-white border border-[#333333] hover:border-[#666666] font-semibold text-base tracking-wider rounded-sm transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>EXPLORE PROGRAMS</span>
              </button>
            </div>

            {/* Small Supporting Line */}
            <p className="text-xs sm:text-sm text-[#707070] tracking-wide pt-1">
              Your training starts here.
            </p>
          </div>

          {/* Right Column: Cinematic Athlete Photography */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[3/4] rounded-sm overflow-hidden border border-[#262626]/80 bg-[#121212] shadow-2xl group">
              {/* Fallback pattern in case of asset lag */}
              <div className="absolute inset-0 bg-[#121212] flex items-center justify-center text-[#333333]">
                <span className="font-impact text-3xl">BODY FITNESS CLUB</span>
              </div>

              {/* Main Realistic Athlete Image */}
              <img
                src={ASSETS.heroAthlete}
                alt="Muscular athlete training with heavy dumbbells in a dark athletic gym"
                referrerPolicy="no-referrer"
                loading="eager"
                className="relative z-10 w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-500 ease-out"
              />

              {/* Cinematic Vignette Overlays for Seamless Readability & Integration */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#080808] via-transparent to-transparent opacity-70" />
              <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-white/10" />

              {/* Discreet Editorial Badge on Image Bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-30 p-3 bg-[#080808]/85 backdrop-blur-sm border border-[#262626] rounded-sm flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#E52B2B] font-semibold tracking-wider uppercase block text-[11px]">Primary Strength Floor</span>
                  <span className="text-[#9E9E9E]">Heavy Urethane Dumbbells & Calibrated Bars</span>
                </div>
                <span className="font-impact text-lg text-white">BFC</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="relative z-20 w-full border-t border-[#1a1a1a] bg-[#0c0c0c]/80 py-3 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#707070]">
          <span className="tracking-widest uppercase">STRENGTH · CONDITIONING · PERSONAL GUIDANCE</span>
          <button
            onClick={onExplorePrograms}
            className="flex items-center gap-1.5 hover:text-[#F5F5F5] transition-colors cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#E52B2B]" />
          </button>
        </div>
      </div>
    </section>
  );
};
