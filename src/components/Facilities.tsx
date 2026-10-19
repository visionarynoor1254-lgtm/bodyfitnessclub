import { CheckCircle2, Dumbbell, Shield, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { FACILITIES } from '../data/gymData.ts';
import { FacilityItem } from '../types.ts';

interface FacilitiesProps {
  onSelectFacilityImage: (imageSrc: string, title: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onSelectFacilityImage }) => {
  const [activeFacility, setActiveFacility] = useState<string>(FACILITIES[0].id);

  return (
    <section id="facilities" className="w-full py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#E52B2B]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#9E9E9E] uppercase">
                CLUB INFRASTRUCTURE
              </span>
            </div>
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl text-[#F5F5F5] uppercase tracking-tight">
              FACILITIES & <span className="text-[#E52B2B]">EQUIPMENT.</span>
            </h2>
          </div>
          <p className="text-sm text-[#9E9E9E] max-w-md leading-relaxed">
            Every station, bench, and barbell in BODY FITNESS CLUB is selected for structural durability, precision knurling, and athlete safety.
          </p>
        </div>

        {/* 4 Facility Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility: FacilityItem) => {
            const isSelected = activeFacility === facility.id;

            return (
              <div
                key={facility.id}
                onClick={() => setActiveFacility(facility.id)}
                className={`group relative bg-[#151515] rounded-sm border transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected ? 'border-[#E52B2B] ring-1 ring-[#E52B2B]/40' : 'border-[#262626] hover:border-[#444444]'
                }`}
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#080808]/90 border border-[#333333] px-2.5 py-1 rounded-sm text-[11px] font-semibold text-[#F5F5F5] uppercase tracking-wider">
                    {facility.badge}
                  </div>

                  {/* Expand Image Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFacilityImage(facility.image, facility.title);
                    }}
                    className="absolute top-3 right-3 p-1.5 bg-[#080808]/80 hover:bg-[#E52B2B] text-white rounded-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    title="View photograph"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-impact text-xl text-[#F5F5F5] group-hover:text-white transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-[#9E9E9E] leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  {/* Confirmed Specifics */}
                  <div className="pt-3 border-t border-[#222222] space-y-1.5">
                    {facility.details.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#707070]">
                        <CheckCircle2 className="w-3 h-3 text-[#E52B2B] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="px-5 py-2.5 bg-[#121212] border-t border-[#1f1f1f] text-[11px] flex items-center justify-between text-[#707070]">
                  <span>Status: Operational</span>
                  <span className="text-[#E52B2B] font-mono text-[10px]">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facilities Specs Highlight Banner */}
        <div className="mt-12 p-6 bg-[#121212] border border-[#262626] rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#191919] border border-[#2a2a2a] text-[#E52B2B] rounded-sm">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-wide block">Olympic Standard Bars</span>
              <span className="text-xs text-[#707070]">28mm and 29mm competition knurl with smooth bronze bushings</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#191919] border border-[#2a2a2a] text-[#E52B2B] rounded-sm">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-wide block">Acoustic Rubber Turf</span>
              <span className="text-xs text-[#707070]">High-density absorption floor rated for heavy barbell drops</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#191919] border border-[#2a2a2a] text-[#E52B2B] rounded-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-wide block">Sanitation & Chalk Stations</span>
              <span className="text-xs text-[#707070]">Pure magnesium block chalk and sanitized towel services</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
