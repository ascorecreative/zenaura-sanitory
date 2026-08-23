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
              Official Partner Brands
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#203A30]">
            Global <span className="italic font-normal text-[#203A30]">Brand Portfolio</span>
          </h2>
          
          <p className="text-[#2D3748] text-sm sm:text-base leading-relaxed font-normal">
            Representing world-leading architectural manufacturers—including GROHE, GEBERIT, JAGUAR, and RAK CERAMICS—in a single unified showcase.
          </p>
        </div>

        {/* Unified Brands Grid (SANIPEX GROUP style box cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS_DATA.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#203A30]/15 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Subtle Ambient Light Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D4AF37]/20 transition-all" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  {brand.logoImage ? (
                    <div className="h-10 px-3 py-1 bg-gray-50 rounded-lg border border-[#203A30]/10 flex items-center justify-center">
                      <img 
                        src={brand.logoImage} 
                        alt={brand.name} 
                        className="h-full w-auto object-contain max-w-[120px]"
                      />
                    </div>
                  ) : (
                    <div className="px-3.5 py-1 rounded-md bg-[#203A30] text-white font-serif font-bold text-sm tracking-wider shadow-sm">
                      {brand.logoText}
                    </div>
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#203A30]/70 bg-[#F0F3F7] px-2.5 py-1 rounded-md border border-[#203A30]/10">
                    {brand.origin}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-[#203A30] group-hover:text-[#D4AF37] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mt-0.5">
                    {brand.tagline}
                  </span>
                </div>

                <p className="text-xs text-[#2D3748] leading-relaxed font-normal">
                  {brand.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#203A30]/10 flex items-center justify-between relative z-10">
                <span className="text-[11px] font-bold text-[#203A30] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Authorized Representative</span>
                </span>

                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#203A30] uppercase tracking-wider hover:text-[#D4AF37] transition-colors"
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
