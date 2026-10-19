import { ArrowRight, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

interface NavbarProps {
  onOpenJoin: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Training', href: '#training' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080808]/95 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
        >
          <span className="font-impact text-2xl sm:text-3xl tracking-wider text-[#F5F5F5] group-hover:text-white transition-colors">
            BODY <span className="text-[#E52B2B]">FITNESS</span> CLUB
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#9E9E9E] hover:text-[#F5F5F5] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E52B2B] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Button */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={() => onOpenJoin()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E52B2B] hover:bg-[#CC1F1F] active:bg-[#B21919] text-[#F5F5F5] font-semibold text-sm tracking-wide rounded-sm transition-all duration-150 shadow-sm whitespace-nowrap cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => onOpenJoin()}
            className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E52B2B] hover:bg-[#CC1F1F] text-white text-xs font-semibold rounded-sm whitespace-nowrap"
          >
            <span>JOIN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9E9E9E] hover:text-[#F5F5F5] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E52B2B]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101010] border-b border-[#262626] px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#9E9E9E] hover:text-[#F5F5F5] py-2 border-b border-[#1f1f1f] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#E52B2B]">→</span>
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#E52B2B] text-[#F5F5F5] font-semibold text-sm tracking-wide rounded-sm"
              >
                <span>JOIN NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
