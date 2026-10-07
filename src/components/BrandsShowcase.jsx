import React, { useState, useMemo } from 'react';
import { BRANDS_DATA } from '../data/catalogData';
import BrandLogo from './BrandLogo';
import { Award, ExternalLink, Sparkles, Search, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BrandsShowcase({ onOpenInquiry, onSelectBrand }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Sanitary & Mixers',
    'Tiles & Surfaces',
    'Outdoor Living',
    'Kitchen & Appliances',
    'Hardware & Accessories',
    'Wellness & Hydrotherapy'
  ];

  // Filtered brands based on Category tab and Search Query
  const filteredBrands = useMemo(() => {
    return BRANDS_DATA.filter(brand => {
      const matchesCategory = selectedCategory === 'All' || brand.category === selectedCategory;
      const matchesSearch = 
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="brands" className="py-24 bg-[#F0F3F7] relative border-y border-[#203A30]/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-[#203A30]/10 px-4 py-1.5 rounded-full border border-[#203A30]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#203A30] font-bold">
              Official Partner Brands Showcase ({BRANDS_DATA.length} Luxury Brands)
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#203A30]">
            Global <span className="italic font-normal text-[#203A30]">Brand Directory</span>
          </h2>
          
          <p className="text-[#2D3748] text-sm sm:text-base leading-relaxed font-normal">
            Representing 63 world-leading architectural manufacturers across European mixers, sanitaryware, porcelain slabs, luxury outdoor living, and fine hardware.
          </p>
        </div>

        {/* Search Input & Category Tabs */}
        <div className="space-y-6 mb-12">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#203A30]/60 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search 63 brands by name, origin or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#203A30]/20 focus:border-[#203A30] outline-none text-xs text-[#203A30] placeholder-[#203A30]/50 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#203A30]/60 hover:text-[#203A30]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? BRANDS_DATA.length 
                : BRANDS_DATA.filter(b => b.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-[#203A30] text-white shadow-md scale-105'
                      : 'bg-white text-[#203A30] border border-[#203A30]/20 hover:border-[#203A30] hover:bg-[#E8EFEB]'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

        </div>

        {/* Filter Results Counter */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#203A30]/10 text-xs font-semibold text-[#2D3748]">
          <span>Showing {filteredBrands.length} of {BRANDS_DATA.length} Brands</span>
          {selectedCategory !== 'All' && (
            <span className="text-[#D4AF37] font-bold">Category: {selectedCategory}</span>
          )}
        </div>

        {/* Brands Grid Cards */}
        {filteredBrands.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto space-y-4 border border-[#203A30]/15">
            <p className="text-base font-bold text-[#203A30]">No brands found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-2.5 rounded-full bg-[#203A30] text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl p-7 border border-[#203A30]/15 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Ambient Light Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D4AF37]/25 transition-all" />

                <div className="space-y-5 relative z-10">
                  {/* Brand Tag Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#203A30] bg-[#E8EFEB] px-3 py-1 rounded-md border border-[#203A30]/20">
                      Authorized Partner
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#203A30]/80 bg-[#F0F3F7] px-2.5 py-1 rounded-md border border-[#203A30]/10">
                      {brand.origin}
                    </span>
                  </div>

                  {/* Brand Logo Box */}
                  <button
                    onClick={() => onSelectBrand && onSelectBrand(brand)}
                    className="w-full h-24 px-6 py-3 bg-[#F8FAFC] rounded-xl border border-[#203A30]/15 flex items-center justify-center shadow-inner group-hover:bg-white transition-colors cursor-pointer"
                  >
                    <BrandLogo brand={brand} className="max-h-16 w-auto" />
                  </button>

                  <div className="space-y-1">
                    <button
                      onClick={() => onSelectBrand && onSelectBrand(brand)}
                      className="font-serif text-2xl font-bold text-[#203A30] group-hover:text-[#D4AF37] transition-colors text-left block"
                    >
                      {brand.name}
                    </button>
                    <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                      {brand.tagline}
                    </span>
                  </div>

                  <p className="text-xs text-[#2D3748] leading-relaxed font-normal line-clamp-3">
                    {brand.description}
                  </p>
                </div>

                {/* Bottom CTA Action Buttons */}
                <div className="pt-5 mt-6 border-t border-[#203A30]/10 space-y-2 relative z-10">
                  
                  {/* Primary CTA: Dedicated Brand Page */}
                  <button
                    onClick={() => onSelectBrand && onSelectBrand(brand)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#203A30] text-white hover:bg-[#2D4F42] transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <span>View Dedicated Brand Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Secondary CTA: Quick WhatsApp Inquiry */}
                  <button
                    onClick={onOpenInquiry}
                    className="w-full py-2 px-4 rounded-xl bg-[#F4F6F5] hover:bg-[#E8EFEB] text-[#203A30] transition-colors text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-[#203A30]/15"
                  >
                    <span>Quick WhatsApp Inquiry</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
                  </button>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
