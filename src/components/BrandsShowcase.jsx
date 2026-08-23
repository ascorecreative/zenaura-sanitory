import React from 'react';
import { BRANDS_DATA } from '../data/catalogData';
import { Award, ExternalLink, Sparkles } from 'lucide-react';

export default function BrandsShowcase({ onOpenInquiry }) {
  return (
    <section id="brands" className="py-24 bg-[#F0F3F7] relative border-y border-[#203A30]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#203A30]/10 px-4 py-1.5 rounded-full border border-[#203A30]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#203A30] font-bold">
              Official Partner Brands Showcase
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#203A30]">
            Global <span className="italic font-normal text-[#203A30]">Brand Portfolio</span>
          </h2>
          
          <p className="text-[#2D3748] text-sm sm:text-base leading-relaxed font-normal">
            Representing world-leading architectural manufacturers—including GROHE, GEBERIT, JAGUAR, RAK CERAMICS, BAGNODESIGN, and SANIPEX GROUP—in a single unified showcase.
          </p>
        </div>

        {/* Unified Brands Grid (SANIPEX GROUP style box cards with MUCH LARGER LOGOS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANDS_DATA.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-[#203A30]/15 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Subtle Ambient Light Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D4AF37]/25 transition-all" />

              <div className="space-y-5 relative z-10">
                {/* Brand Tag Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#203A30] bg-[#E8EFEB] px-3 py-1 rounded-md border border-[#203A30]/20">
                    Official Partner
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#203A30]/70 bg-[#F0F3F7] px-2.5 py-1 rounded-md border border-[#203A30]/10">
                    {brand.origin}
                  </span>
                </div>

                {/* MUCH LARGER BRAND LOGO CONTAINER */}
                <div className="w-full h-24 px-6 py-3 bg-[#F8FAFC] rounded-xl border border-[#203A30]/15 flex items-center justify-center shadow-inner group-hover:bg-white transition-colors">
                  {brand.logoImage ? (
                    <img 
                      src={brand.logoImage} 
                      alt={`${brand.name} Official Logo`} 
                      className="max-h-16 w-auto object-contain max-w-[220px] filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="px-5 py-2.5 rounded-lg bg-[#203A30] text-white font-serif font-extrabold text-lg sm:text-xl tracking-widest shadow-md">
                      {brand.logoText}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#203A30] group-hover:text-[#D4AF37] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mt-1">
                    {brand.tagline}
                  </span>
                </div>

                <p className="text-xs text-[#2D3748] leading-relaxed font-normal">
                  {brand.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#203A30]/10 flex items-center justify-between relative z-10">
                <span className="text-[11px] font-bold text-[#203A30] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Authorized Partner</span>
                </span>

                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#203A30] uppercase tracking-wider hover:text-[#D4AF37] transition-colors"
                >
                  <span>Inquire Brand</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
