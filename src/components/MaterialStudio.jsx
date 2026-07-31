import React, { useState } from 'react';
import { MATERIALS_DATA } from '../data/catalogData';
import { Palette, Check, Sparkles, Sliders } from 'lucide-react';

export default function MaterialStudio() {
  const [activeCategory, setActiveCategory] = useState('metallics');
  const [selectedSwatch, setSelectedSwatch] = useState(MATERIALS_DATA.metallics[0]);

  const categories = [
    { id: 'metallics', name: 'PVD Metallics' },
    { id: 'armour', name: 'Armour Coatings' },
    { id: 'materials', name: 'Luxury Stones & Glass' }
  ];

  const currentSwatches = MATERIALS_DATA[activeCategory] || MATERIALS_DATA.metallics;

  return (
    <section id="studio" className="py-24 bg-[#F4F6F5]/70 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#203A30]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#C8A97E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30] px-3.5 py-1 rounded-full bg-[#E8EFEB] border border-[#203A30]/20 inline-flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>Interactive Customization</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#203A30] font-light">
            Finish & Material Studio
          </h2>
          <p className="text-sm sm:text-base text-[#2D3748] font-normal leading-relaxed">
            Select high-performance PVD metallics, Armour nanotech color coatings, and rare Italian stone materials to preview live finishes for your project.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedSwatch(MATERIALS_DATA[cat.id][0]);
              }}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#203A30] text-white shadow-lg scale-105'
                  : 'bg-white text-[#203A30] border border-[#203A30]/30 hover:border-[#203A30] hover:bg-[#E8EFEB]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Main Interactive Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Swatch Selector Grid */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#203A30]/20 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-[#203A30]/15 pb-4">
              <h3 className="font-serif text-xl font-semibold text-[#203A30] capitalize">
                Select Finish ({categories.find(c => c.id === activeCategory)?.name})
              </h3>
              <span className="text-xs font-medium text-[#2D3748]">
                {currentSwatches.length} Swatches Available
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {currentSwatches.map((swatch) => {
                const isSelected = selectedSwatch.name === swatch.name;
                return (
                  <button
                    key={swatch.name}
                    onClick={() => setSelectedSwatch(swatch)}
                    className={`p-3 rounded-2xl border text-left flex flex-col items-center justify-between gap-3 transition-all duration-300 ${
                      isSelected
                        ? 'bg-white border-[#203A30] shadow-md scale-105 ring-2 ring-[#203A30]/40'
                        : 'bg-[#F4F6F5]/60 border-[#203A30]/15 hover:bg-white hover:border-[#203A30]/50'
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-full shadow-inner border border-black/15 relative flex items-center justify-center"
                      style={{ backgroundColor: swatch.hex }}
                    >
                      {isSelected && <Check className="w-5 h-5 text-white drop-shadow-md" />}
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

          {/* Right Live Preview Canvas */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#203A30]/25 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
              <Sliders className="w-32 h-32 text-[#203A30]" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-white uppercase bg-[#203A30] px-3 py-1 rounded-md">
                Live Material Spec Preview
              </span>
              <h3 className="font-serif text-3xl font-light text-[#203A30]">
                {selectedSwatch.name}
              </h3>
              <p className="text-xs text-[#2D3748] font-semibold">
                {selectedSwatch.texture}
              </p>
            </div>

            {/* Color Swatch Big Card */}
            <div className="relative rounded-2xl h-44 shadow-inner border border-black/15 p-6 flex flex-col justify-between overflow-hidden" style={{ backgroundColor: selectedSwatch.hex }}>
              <div className="bg-[#203A30]/90 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-md self-start border border-white/20 font-bold">
                HEX: {selectedSwatch.hex}
              </div>
              <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[#203A30] border border-white self-end text-xs font-bold shadow-md">
                {selectedSwatch.code}
              </div>
            </div>

            {/* Spec Details */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-[#203A30]/15">
                <span className="text-[#2D3748] font-medium">Coating Technology:</span>
                <span className="font-bold text-[#203A30]">PVD Physical Vapor Deposition / Nanotech</span>
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
              href={`https://wa.me/971547834673?text=Hello%20Zenaura%20Sanitary,%20I%20am%20interested%20in%20specifying%20the%20${encodeURIComponent(selectedSwatch.name)}%20(${selectedSwatch.code})%20finish%20for%20my%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#203A30] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2D4F42] transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#C8A97E]" />
              <span>Inquire This Finish via WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
