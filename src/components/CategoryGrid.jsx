import React from 'react';
import { CATEGORIES_DATA } from '../data/catalogData';
import { Droplets, Layers, Box, Sparkles, ShowerHead, ChevronRight, Info } from 'lucide-react';

export default function CategoryGrid({ onSelectCategory }) {
  const iconMap = {
    Droplets: Droplets,
    Layers: Layers,
    Box: Box,
    Sparkles: Sparkles,
    ShowerHead: ShowerHead
  };

  return (
    <section id="categories" className="py-24 bg-[#FBFBFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30] px-3.5 py-1 rounded-full bg-[#E8EFEB] border border-[#203A30]/20">
              Core Divisions Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#203A30] font-light">
              Main Product Categories
            </h2>
            <p className="text-sm sm:text-base text-[#2D3748] font-normal leading-relaxed">
              Explore our curated portfolio across Sanitary Ware, Tiles, Kitchen Appliances, Outdoor Living, and Architectural Slabs.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30]/70">
              5 Primary Categories
            </span>
          </div>
        </div>

        {/* 5 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat) => {
            const IconComp = iconMap[cat.icon] || Droplets;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#203A30]/15 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Header with Zoom Effect */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12]/80 via-[#0D0E12]/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#203A30] border border-[#203A30]/20 flex items-center justify-center shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold">{cat.title}</h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <ul className="space-y-2.5">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-[#1A202C] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                        <span className="hover:text-[#203A30] transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Specs & Detail Button */}
                  <div className="pt-4 border-t border-[#203A30]/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#203A30] font-bold">
                      <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Specifications</span>
                    </div>

                    <button
                      onClick={() => onSelectCategory(cat)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#203A30] uppercase tracking-wider hover:text-[#D4AF37] transition-colors"
                    >
                      <span>View Products</span>
                      <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
