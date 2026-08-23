import React, { useState } from 'react';
import { MATERIALS_DATA } from '../data/catalogData';
import { Palette, Check, Sparkles, Sliders, Image as ImageIcon } from 'lucide-react';

export default function MaterialStudio() {
  const [activeCategory, setActiveCategory] = useState('warmTones');
  const [selectedSwatch, setSelectedSwatch] = useState(MATERIALS_DATA.warmTones[0]);
  const [viewMode, setViewMode] = useState('swatches'); // 'swatches' or 'catalog'

  const categories = [
    { id: 'warmTones', name: 'Warm Tones' },
    { id: 'timelessClassics', name: 'Timeless Classics' },
    { id: 'armourCollection', name: 'Armour Collection' }
  ];

  const currentSwatches = MATERIALS_DATA[activeCategory] || MATERIALS_DATA.warmTones;

  return (
    <section id="studio" className="py-24 bg-[#F4F6F5]/70 relative overflow-hidden font-sans">
      {/* Glow Effects */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#203A30]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30] px-3.5 py-1 rounded-full bg-[#E8EFEB] border border-[#203A30]/20 inline-flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Catalogue Finishes & Swatches Board</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#203A30] font-light">
            Finish & Material Studio
          </h2>
          <p className="text-sm sm:text-base text-[#2D3748] font-normal leading-relaxed">
            Explore Warm Tones, Timeless Classics, and the heavy-duty military-grade Armour Collection coatings matching the official catalog swatches.
          </p>
        </div>

        {/* View Mode Toggle & Category Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#203A30]/10">
          
          {/* Category Selection Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedSwatch(MATERIALS_DATA[cat.id][0]);
                  setViewMode('swatches');
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id && viewMode === 'swatches'
                    ? 'bg-[#203A30] text-white shadow-lg scale-105'
                    : 'bg-white text-[#203A30] border border-[#203A30]/20 hover:border-[#203A30] hover:bg-[#E8EFEB]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Toggle Full Catalogue Swatch Sheet View */}
          <button
            onClick={() => setViewMode(viewMode === 'catalog' ? 'swatches' : 'catalog')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
              viewMode === 'catalog'
                ? 'bg-[#D4AF37] text-[#203A30] border-[#D4AF37] shadow-md font-bold'
                : 'bg-white text-[#203A30] border-[#203A30]/30 hover:border-[#203A30]'
            }`}
          >
            <ImageIcon className="w-4 h-4 text-[#203A30]" />
            <span>{viewMode === 'catalog' ? 'Show Interactive Swatches' : 'View Full Catalog Swatches Sheet'}</span>
          </button>

        </div>

        {/* View Mode 1: Authentic Full Catalog Swatches Image Display */}
        {viewMode === 'catalog' ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#203A30]/20 shadow-2xl space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[#203A30]/10 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">
                  Official Brand Partner Palette
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#203A30]">
                  Brand Finish Matrix (High-Res)
                </h3>
              </div>
              <span className="text-xs font-bold text-[#203A30] bg-[#E8EFEB] px-3.5 py-1.5 rounded-full border border-[#203A30]/20">
                19 Curated Finishes
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#203A30]/15 p-4 shadow-inner max-w-3xl mx-auto">
              <img
                src="/images/catalog_finishes_page12.jpg"
                alt="Official Catalogue Brand Finish Matrix"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        ) : (
          /* View Mode 2: Interactive Swatches Grid & Spec Card */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Swatch Selector Grid */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#203A30]/20 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-[#203A30]/15 pb-4">
                <h3 className="font-serif text-xl font-semibold text-[#203A30] capitalize">
                  Select Swatch ({categories.find(c => c.id === activeCategory)?.name})
                </h3>
                <span className="text-xs font-medium text-[#2D3748]">
                  {currentSwatches.length} Swatches
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {currentSwatches.map((swatch) => {
                  const isSelected = selectedSwatch.name === swatch.name;
                  return (
                    <button
                      key={swatch.name}
                      onClick={() => setSelectedSwatch(swatch)}
                      className={`p-3.5 rounded-2xl border text-left flex flex-col items-center justify-between gap-3 transition-all duration-300 ${
                        isSelected
                          ? 'bg-white border-[#203A30] shadow-md scale-105 ring-2 ring-[#203A30]/40'
                          : 'bg-[#F4F6F5]/60 border-[#203A30]/15 hover:bg-white hover:border-[#203A30]/50'
                      }`}
                    >
                      {/* Exact Cropped Circular Swatch Image from High-Res Sheet */}
                      <div className="w-16 h-16 rounded-full shadow-md border-2 border-[#203A30]/20 relative flex items-center justify-center transition-transform group-hover:scale-110 overflow-hidden bg-gray-100">
                        {swatch.swatchImage ? (
                          <img 
                            src={swatch.swatchImage} 
                            alt={swatch.name} 
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full" style={{ backgroundColor: swatch.hex }} />
                        )}
                        {isSelected && (
                          <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex items-center justify-center rounded-full">
                            <Check className="w-6 h-6 text-white drop-shadow-lg" />
                          </div>
                        )}
                      </div>

                      <div className="text-center w-full">
                        <p className="text-xs font-bold text-[#203A30] truncate">{swatch.name}</p>
                        <p className="text-[10px] text-[#203A30]/80 font-bold uppercase tracking-wider">{swatch.code}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Swatch Detail Spec Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#203A30]/25 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
                <Sliders className="w-32 h-32 text-[#203A30]" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest text-white uppercase bg-[#203A30] px-3 py-1 rounded-md">
                  Catalogue Swatch Preview
                </span>
                <h3 className="font-serif text-3xl font-light text-[#203A30]">
                  {selectedSwatch.name}
                </h3>
                <p className="text-xs text-[#2D3748] font-semibold">
                  {selectedSwatch.texture}
                </p>
              </div>

              {/* Large Round Circle Preview displaying the exact high-res cropped texture */}
              <div className="relative rounded-2xl h-52 bg-[#F4F6F5] border border-[#203A30]/15 p-6 flex flex-col items-center justify-between overflow-hidden shadow-inner">
                {selectedSwatch.swatchImage ? (
                  <div className="w-36 h-36 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white shrink-0 flex items-center justify-center">
                    <img 
                      src={selectedSwatch.swatchImage} 
                      alt={selectedSwatch.name} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-36 h-36 rounded-full shadow-2xl border-4 border-white" style={{ backgroundColor: selectedSwatch.hex }} />
                )}

                <div className="w-full flex items-center justify-between z-10 mt-2">
                  <div className="bg-[#203A30]/90 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-md border border-white/20 font-bold">
                    HEX: {selectedSwatch.hex}
                  </div>
                  <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-xl text-[#203A30] border border-[#203A30]/20 text-xs font-bold shadow-md">
                    {selectedSwatch.code}
                  </div>
                </div>
              </div>

              {/* Spec Details */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-[#203A30]/15">
                  <span className="text-[#2D3748] font-medium">Coating Technology:</span>
                  <span className="font-bold text-[#203A30]">PVD Vacuum / Military Armour Coating</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#203A30]/15">
                  <span className="text-[#2D3748] font-medium">Scratch & Salt Test:</span>
                  <span className="font-bold text-emerald-700">Passed 1,000 Hours Salt Spray</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#203A30]/15">
                  <span className="text-[#2D3748] font-medium">Warranty Coverage:</span>
                  <span className="font-bold text-[#203A30]">10-Year Anti-Tarnish Guarantee</span>
                </div>
              </div>

              {/* Direct Inquiry CTA */}
              <a
                href={`https://wa.me/9715414160?text=Hello%20Zenaura%20Sanitary,%20I%20am%20interested%20in%20specifying%20the%20${encodeURIComponent(selectedSwatch.name)}%20(${selectedSwatch.code})%20finish%20for%20my%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-[#203A30] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2D4F42] transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Inquire This Finish via WhatsApp</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
