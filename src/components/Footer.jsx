import React from 'react';
import { ArrowUp, Phone, Mail, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#203A30] text-white pt-20 pb-10 border-t border-[#D4AF37]/20 relative overflow-hidden font-sans">
      
      {/* Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-[#D4AF37]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          
          {/* Brand Info & White Logo */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#hero" className="inline-block">
              <img 
                src="/logo_white.svg" 
                alt="ZS ZENAURA SANITARY Logo" 
                className="h-12 sm:h-14 w-auto object-contain" 
              />
            </a>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm font-medium">
              Official supplier and project partner for GROHE, GEBERIT, JAGUAR, RAK CERAMICS, BAGNODESIGN and SANIPEX GROUP portfolios. Delivering luxury mixers, shower systems, custom vanities, and architectural porcelain slabs across the UAE & GCC.
            </p>

            {/* Certifications Row */}
            <div className="pt-2">
              <p className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest mb-3">
                Quality Compliance & Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-white bg-white/10 px-3 py-1 rounded-md border border-white/15">
                  WRAS Approved (UK)
                </span>
                <span className="text-[10px] font-bold text-white bg-white/10 px-3 py-1 rounded-md border border-white/15">
                  CE Conformity
                </span>
                <span className="text-[10px] font-bold text-white bg-white/10 px-3 py-1 rounded-md border border-white/15">
                  ESMA Certified (UAE)
                </span>
                <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 px-3 py-1 rounded-md border border-[#D4AF37]/30">
                  Grade 316 Stainless Steel
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              Navigation & Catalog
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-medium">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home & Overview</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#D4AF37] transition-colors">Featured Design Collections</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#D4AF37] transition-colors">Product Categories & Specifications</a>
              </li>
              <li>
                <a href="#brands" className="hover:text-[#D4AF37] transition-colors">Partner Brands Showcase</a>
              </li>
              <li>
                <a href="#studio" className="hover:text-[#D4AF37] transition-colors">Finish & Material Studio</a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#D4AF37] transition-colors">WhatsApp Consultation Drawer</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#D4AF37] uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-white/80 font-medium">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Sanitary Ware • Tiles • Architectural Solutions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+971541414160" className="hover:text-[#D4AF37] transition-colors font-bold text-white">
                  +971 54 141 4160
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@zenauratrading.com" className="hover:text-[#D4AF37] transition-colors">
                  info@zenauratrading.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar with Clean Developed by Ascore Creative link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 font-medium">
          <p>
            © 2026 Zenaura Trading. All Rights Reserved. Designed by{' '}
            <a 
              href="https://www.ascore.ae" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D4AF37] hover:underline font-bold"
            >
              Ascore Creative
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#203A30] transition-all duration-300 text-white shadow-md flex items-center gap-1.5 text-[11px] uppercase font-bold"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
