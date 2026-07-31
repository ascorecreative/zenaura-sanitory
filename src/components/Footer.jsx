import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#203A30] text-white pt-20 pb-10 border-t border-[#C8A97E]/20 relative overflow-hidden font-sans">
      
      {/* Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-[#C8A97E]/10 blur-3xl pointer-events-none rounded-full" />

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
              Official supplier and project partner for the MEA 2026 BAGNODESIGN and SANIPEX GROUP catalog in the United Arab Emirates. Delivering luxury mixers, Bagnospa shower systems, custom vanities, and architectural porcelain slabs.
            </p>

            {/* Certifications Row */}
            <div className="pt-2">
              <p className="text-[10px] uppercase font-bold text-[#C8A97E] tracking-widest mb-3">
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
                <span className="text-[10px] font-bold text-[#C8A97E] bg-[#C8A97E]/15 px-3 py-1 rounded-md border border-[#C8A97E]/30">
                  Grade 316 Stainless Steel
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#C8A97E] uppercase tracking-wider">
              Navigation & Catalog
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-medium">
              <li>
                <a href="#hero" className="hover:text-[#C8A97E] transition-colors">Home & Overview</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#C8A97E] transition-colors">Featured MEA 2026 Collections</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#C8A97E] transition-colors">Product Categories & Specifications</a>
              </li>
              <li>
                <a href="#studio" className="hover:text-[#C8A97E] transition-colors">Finish & Material Studio</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C8A97E] transition-colors">Regional Landmark Projects</a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-[#C8A97E] transition-colors">WhatsApp Consultation Drawer</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#C8A97E] uppercase tracking-wider">
              Executive Showroom
            </h4>
            <div className="space-y-3 text-xs text-white/80 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                <span>26th Floor, Amber Gem Tower, Ajman, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <a href="tel:+971547834673" className="hover:text-[#C8A97E] transition-colors font-bold text-white">
                  +971 54 783 4673
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A97E] shrink-0" />
                <a href="mailto:zenauratrading@outlook.com" className="hover:text-[#C8A97E] transition-colors">
                  zenauratrading@outlook.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar with Clean Developed by Ascore Creative link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 font-medium">
          <p>
            © 2026 Zenaura Sanitary. All Rights Reserved. Developed by{' '}
            <a 
              href="https://www.ascore.ae" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#C8A97E] hover:underline font-bold"
            >
              Ascore Creative
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#C8A97E] hover:text-[#203A30] transition-all duration-300 text-white shadow-md flex items-center gap-1.5 text-[11px] uppercase font-bold"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
