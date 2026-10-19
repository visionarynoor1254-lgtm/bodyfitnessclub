import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';
import { PROGRAMS } from '../data/gymData.ts';
import { ProgramDetail } from '../types.ts';

interface ProgramsProps {
  onSelectProgram: (program: ProgramDetail) => void;
  onOpenJoin: (programTitle?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="training" className="w-full py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#E52B2B]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#9E9E9E] uppercase">
                TRAINING PATHWAYS
              </span>
            </div>
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl text-[#F5F5F5] uppercase tracking-tight">
              TRAIN WITH A <span className="text-[#E52B2B]">PURPOSE.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-[#9E9E9E] text-base leading-relaxed border-l border-[#262626] pl-6">
            <p>
              We prioritize deliberate training over random exertion. Every program pathway is structured around progressive overload, biomechanical efficiency, and sustainable training habits.
            </p>
          </div>
        </div>

        {/* 3 Visually Strong Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS.map((program, idx) => (
            <div
              key={program.id}
              className="group relative bg-[#151515] rounded-sm border border-[#262626] hover:border-[#E52B2B]/60 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1f1f1f]">
                <img
                  src={program.image}
                  alt={program.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90" />
                
                {/* Clean Index Number */}
                <div className="absolute top-4 left-4 font-impact text-2xl text-white/40 tracking-wider">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-impact text-2xl sm:text-3xl text-[#F5F5F5] group-hover:text-white transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#9E9E9E] leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="space-y-2 border-t border-[#222222] pt-4">
                  {program.focusAreas.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#707070]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E52B2B] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Working EXPLORE PROGRAM CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="w-full py-3 px-4 bg-[#1e1e1e] hover:bg-[#E52B2B] text-[#F5F5F5] font-semibold text-xs tracking-wider uppercase rounded-sm flex items-center justify-between transition-colors duration-150 cursor-pointer"
                  >
                    <span>EXPLORE PROGRAM</span>
                    <ArrowRight className="w-4 h-4 text-[#E52B2B] group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Note */}
        <div className="mt-8 text-center text-xs text-[#707070]">
          <span>All programs include full facility access during designated training hours.</span>
        </div>

      </div>
    </section>
  );
};
