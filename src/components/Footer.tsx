import { ArrowUp } from 'lucide-react';
import React from 'react';
import { CONTACT_INFO } from '../data/gymData.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Training', href: '#training' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-[#080808] border-t border-[#262626] text-[#9E9E9E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Genuine Description */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-impact text-2xl sm:text-3xl text-[#F5F5F5] tracking-wider block">
              BODY <span className="text-[#E52B2B]">FITNESS</span> CLUB
            </span>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-sm">
              A focused strength and conditioning club built for serious training, disciplined habits, and lasting health.
            </p>
            <div className="pt-2 text-xs font-mono text-[#555555]">
              TRAIN WITH PURPOSE · IRON & ATHLETIC DISCIPLINE
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:text-[#E52B2B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Confirmed Details */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5F5F5] block">
              Club Access
            </span>
            <div className="space-y-2 text-xs text-[#888888]">
              <p>
                <strong className="text-[#CCCCCC]">Address:</strong> {CONTACT_INFO.address}
              </p>
              <p>
                <strong className="text-[#CCCCCC]">Phone:</strong> {CONTACT_INFO.phone}
              </p>
              <p>
                <strong className="text-[#CCCCCC]">WhatsApp:</strong> {CONTACT_INFO.whatsapp}
              </p>
              <p>
                <strong className="text-[#CCCCCC]">Hours:</strong> Mon–Fri 05:30–22:30 | Sat–Sun 07:00–20:00
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Dynamic Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© {currentYear} BODY FITNESS CLUB. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#888888] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E52B2B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
