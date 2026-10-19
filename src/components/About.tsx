import { ArrowRight, ShieldCheck, Target, Zap } from 'lucide-react';
import React from 'react';
import { ASSETS } from '../data/gymData.ts';

interface AboutProps {
  onOpenAboutModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAboutModal }) => {
  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-[#080808] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Split Column 1: Real Gym Interior Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-sm overflow-hidden border border-[#262626] bg-[#121212] group shadow-2xl">
              <img
                src={ASSETS.gymInterior}
                alt="Interior view of BODY FITNESS CLUB gym floor with power racks and free weights"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Photo Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#080808]/90 border border-[#262626] rounded-sm text-xs flex justify-between items-center">
                <span className="text-[#9E9E9E] font-medium">Club Floor & Heavy Power Rack Line</span>
                <span className="text-[#E52B2B] font-semibold uppercase tracking-wider text-[11px]">BODY FITNESS CLUB</span>
              </div>
            </div>
          </div>

          {/* Split Column 2: Text & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#E52B2B]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#9E9E9E] uppercase">
                THE CLUB ENVIRONMENT
              </span>
            </div>

            <h2 className="font-impact text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] uppercase tracking-tight">
              MORE THAN A <span className="text-[#E52B2B]">WORKOUT.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9E9E9E] leading-relaxed font-normal">
              BODY FITNESS CLUB is a place to work towards your fitness goals, build consistent training habits, and make time for your health.
            </p>

            {/* Authentic Club Pillars */}
            <div className="space-y-4 pt-2 border-t border-[#1f1f1f]">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#151515] border border-[#262626] text-[#E52B2B] rounded-sm shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wide">Purpose-Built Layout</h3>
                  <p className="text-xs text-[#707070] mt-0.5">Spacious separation between racks and dumbbell lanes so you can train without waiting or crowding.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#151515] border border-[#262626] text-[#E52B2B] rounded-sm shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wide">Heavy Iron & Solid Standards</h3>
                  <p className="text-xs text-[#707070] mt-0.5">Calibrated barbell sets, heavy-duty cages, and durable rubber flooring designed for real lifting.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#151515] border border-[#262626] text-[#E52B2B] rounded-sm shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wide">Focused Atmosphere</h3>
                  <p className="text-xs text-[#707070] mt-0.5">An environment where members respect the equipment, support one another, and show up to do the work.</p>
                </div>
              </div>
            </div>

            {/* CTA: ABOUT OUR GYM → */}
            <div className="pt-4">
              <button
                onClick={onOpenAboutModal}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#E52B2B] hover:bg-[#CC1F1F] active:bg-[#B21919] text-[#F5F5F5] font-bold text-sm tracking-wider uppercase rounded-sm transition-colors duration-150 cursor-pointer shadow-md"
              >
                <span>ABOUT OUR GYM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
