import { Maximize2 } from 'lucide-react';
import React from 'react';
import { GALLERY_IMAGES } from '../data/gymData.ts';
import { GalleryImage } from '../types.ts';
import { GymImage } from './GymImage.tsx';

interface GalleryProps {
  onSelectImage: (image: GalleryImage) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  return (
    <section id="gallery" className="w-full py-20 lg:py-28 bg-[#080808] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-[#E52B2B]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#9E9E9E] uppercase">
                TRAINING ENVIRONMENT
              </span>
            </div>
            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl text-[#F5F5F5] uppercase tracking-tight">
              INSIDE BODY <span className="text-[#E52B2B]">FITNESS CLUB.</span>
            </h2>
          </div>
          <p className="text-sm text-[#9E9E9E] max-w-md leading-relaxed">
            A genuine visual look at our actual workout floor, heavy metal equipment, and athletic atmosphere.
          </p>
        </div>

        {/* Varied Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Main Strength Floor (Large 2-column span on desktop) */}
          <div
            onClick={() => onSelectImage(GALLERY_IMAGES[0])}
            className="md:col-span-2 relative aspect-[16/9] bg-[#121212] border border-[#262626] rounded-sm overflow-hidden group cursor-pointer"
          >
            <GymImage
              src={GALLERY_IMAGES[0].src}
              fallbackSrc={GALLERY_IMAGES[0].fallbackSrc}
              alt={GALLERY_IMAGES[0].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-500"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-xs font-semibold text-[#E52B2B] tracking-wider uppercase block">FACILITY INTERIOR</span>
                <h3 className="font-impact text-2xl text-white">{GALLERY_IMAGES[0].title}</h3>
                <p className="text-xs text-[#9E9E9E] max-w-md mt-1 hidden sm:block">{GALLERY_IMAGES[0].caption}</p>
              </div>
              <span className="p-2 bg-[#080808]/80 text-white rounded-sm group-hover:bg-[#E52B2B] transition-colors pointer-events-auto">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Athlete Training (Tall Portrait) */}
          <div
            onClick={() => onSelectImage(GALLERY_IMAGES[1])}
            className="relative aspect-[3/4] md:aspect-auto md:row-span-2 bg-[#121212] border border-[#262626] rounded-sm overflow-hidden group cursor-pointer"
          >
            <GymImage
              src={GALLERY_IMAGES[1].src}
              fallbackSrc={GALLERY_IMAGES[1].fallbackSrc}
              alt={GALLERY_IMAGES[1].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-500"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-xs font-semibold text-[#E52B2B] tracking-wider uppercase block">ATHLETE STRENGTH</span>
                <h3 className="font-impact text-2xl text-white">{GALLERY_IMAGES[1].title}</h3>
                <p className="text-xs text-[#9E9E9E] mt-1 hidden sm:block">{GALLERY_IMAGES[1].caption}</p>
              </div>
              <span className="p-2 bg-[#080808]/80 text-white rounded-sm group-hover:bg-[#E52B2B] transition-colors pointer-events-auto">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 3: Free Weight Array */}
          <div
            onClick={() => onSelectImage(GALLERY_IMAGES[2])}
            className="relative aspect-[4/3] bg-[#121212] border border-[#262626] rounded-sm overflow-hidden group cursor-pointer"
          >
            <GymImage
              src={GALLERY_IMAGES[2].src}
              fallbackSrc={GALLERY_IMAGES[2].fallbackSrc}
              alt={GALLERY_IMAGES[2].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-500"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-xs font-semibold text-[#E52B2B] tracking-wider uppercase block">FREE WEIGHTS</span>
                <h3 className="font-impact text-xl text-white">{GALLERY_IMAGES[2].title}</h3>
              </div>
              <span className="p-2 bg-[#080808]/80 text-white rounded-sm group-hover:bg-[#E52B2B] transition-colors pointer-events-auto">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 4: Lifting Platform */}
          <div
            onClick={() => onSelectImage(GALLERY_IMAGES[3])}
            className="relative aspect-[4/3] bg-[#121212] border border-[#262626] rounded-sm overflow-hidden group cursor-pointer"
          >
            <GymImage
              src={GALLERY_IMAGES[3].src}
              fallbackSrc={GALLERY_IMAGES[3].fallbackSrc}
              alt={GALLERY_IMAGES[3].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-500"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-xs font-semibold text-[#E52B2B] tracking-wider uppercase block">LIFTING RIGS</span>
                <h3 className="font-impact text-xl text-white">{GALLERY_IMAGES[3].title}</h3>
              </div>
              <span className="p-2 bg-[#080808]/80 text-white rounded-sm group-hover:bg-[#E52B2B] transition-colors pointer-events-auto">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 5: Turf Strip (2 cols on md) */}
          <div
            onClick={() => onSelectImage(GALLERY_IMAGES[4])}
            className="md:col-span-2 relative aspect-[16/9] sm:aspect-[21/9] bg-[#121212] border border-[#262626] rounded-sm overflow-hidden group cursor-pointer"
          >
            <GymImage
              src={GALLERY_IMAGES[4].src}
              fallbackSrc={GALLERY_IMAGES[4].fallbackSrc}
              alt={GALLERY_IMAGES[4].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-500"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-xs font-semibold text-[#E52B2B] tracking-wider uppercase block">CONDITIONING</span>
                <h3 className="font-impact text-xl sm:text-2xl text-white">{GALLERY_IMAGES[4].title}</h3>
                <p className="text-xs text-[#9E9E9E] mt-1 hidden sm:block">{GALLERY_IMAGES[4].caption}</p>
              </div>
              <span className="p-2 bg-[#080808]/80 text-white rounded-sm group-hover:bg-[#E52B2B] transition-colors pointer-events-auto">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 6: 1-on-1 Coaching Studio */}
          <div
            onClick={() => onSelectImage(GALLERY_IMAGES[5])}
            className="relative aspect-[4/3] sm:aspect-[21/9] md:aspect-[4/3] bg-[#121212] border border-[#262626] rounded-sm overflow-hidden group cursor-pointer"
          >
            <GymImage
              src={GALLERY_IMAGES[5].src}
              fallbackSrc={GALLERY_IMAGES[5].fallbackSrc}
              alt={GALLERY_IMAGES[5].title}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-500"
              containerClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-xs font-semibold text-[#E52B2B] tracking-wider uppercase block">COACHING ZONE</span>
                <h3 className="font-impact text-xl text-white">{GALLERY_IMAGES[5].title}</h3>
              </div>
              <span className="p-2 bg-[#080808]/80 text-white rounded-sm group-hover:bg-[#E52B2B] transition-colors pointer-events-auto">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
