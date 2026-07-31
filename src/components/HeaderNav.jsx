import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Download, Menu, X, ArrowUpRight } from 'lucide-react';

export default function HeaderNav({ onRequestCatalogue, onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Shortened Navigation Labels (Single Line, No Collisions)
  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'COLLECTIONS', href: '#collections' },
    { name: 'CATEGORIES', href: '#categories' },
    { name: 'FINISHES', href: '#studio' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'INQUIRY', href: '#inquiry' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Mini Top Contact Bar */}
      <div className="bg-[#F4F6F5] text-[#203A30] text-[12px] py-2 px-4 sm:px-8 border-b border-[#203A30]/10 font-sans">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Phone & Email */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+971547834673" 
              className="flex items-center gap-1.5 font-medium hover:text-[#C8A97E] transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>+971 54 783 4673</span>
            </a>
            <span className="text-[#203A30]/30">|</span>
            <a 
              href="mailto:zenauratrading@outlook.com" 
              className="flex items-center gap-1.5 font-medium hover:text-[#C8A97E] transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 text-[#C8A97E]" />
              <span>zenauratrading@outlook.com</span>
            </a>
          </div>

          {/* Right: Address */}
          <div className="hidden md:flex items-center gap-1.5 text-[#203A30]/80 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>26th Floor, Amber Gem Tower, Ajman, UAE</span>
          </div>
        </div>
      </div>

      {/* Main Single-Line Header Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-sm py-2.5 border-b border-[#203A30]/10' 
            : 'bg-white/95 backdrop-blur-md py-3 border-b border-[#203A30]/10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 flex items-center justify-between w-full">
          
          {/* Brand Logo Container */}
          <div className="flex-shrink-0 mr-8">
            <a href="#hero" className="flex items-center group">
              <img 
                src="/logo.svg" 
                alt="ZS ZENAURA SANITARY" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-102" 
              />
            </a>
          </div>

          {/* Desktop Navigation Links (Single Line, Gap 1.75rem, No Wrap) */}
          <div className="hidden lg:flex items-center gap-7 flex-nowrap mr-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap text-[0.8125rem] font-semibold tracking-[0.06em] uppercase text-[#203A30] hover:text-[#C8A97E] transition-all duration-300 relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8A97E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right CTA Buttons (High Contrast & Minimum 2rem Gap from Nav) */}
          <div className="hidden sm:flex items-center gap-3.5 flex-shrink-0">
            {/* Outline Button: Request Catalogue */}
            <button
              onClick={onRequestCatalogue}
              className="whitespace-nowrap text-[12px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-full border-[1.5px] border-[#203A30] bg-white text-[#203A30] hover:bg-[#203A30] hover:text-white transition-all duration-300 shadow-sm flex items-center gap-2 group"
            >
              <Download className="w-3.5 h-3.5 text-[#203A30] group-hover:text-white transition-colors" />
              <span>Request Catalogue</span>
            </button>

            {/* Solid Button: Instant Quote */}
            <button
              onClick={onOpenInquiry}
              className="whitespace-nowrap text-[12px] font-bold tracking-wider uppercase px-6 py-2.5 rounded-full bg-[#203A30] text-white hover:bg-[#2D4F42] transition-colors duration-300 shadow-md flex items-center gap-2"
            >
              <span className="text-white font-bold">Instant Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8A97E]" />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#203A30] hover:text-[#C8A97E] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#203A30]/15 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#203A30] hover:text-[#C8A97E] py-2 border-b border-[#F4F6F5]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onRequestCatalogue(); }}
                className="w-full flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-wider px-5 py-3 rounded-full border-[1.5px] border-[#203A30] bg-white text-[#203A30]"
              >
                <Download className="w-4 h-4" />
                <span>Request Digital Catalogue</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }}
                className="w-full flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-wider px-5 py-3 rounded-full bg-[#203A30] text-white"
              >
                <span>Instant WhatsApp Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#C8A97E]" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
