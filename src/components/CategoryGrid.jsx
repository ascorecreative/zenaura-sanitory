import React from 'react';
import { CATEGORIES_DATA } from '../data/catalogData';
import { Droplets, ShowerHead, Bath, Box, Sparkles, Layers, ChevronRight, Info } from 'lucide-react';

export default function CategoryGrid({ onSelectCategory }) {
  const iconMap = {
    Droplets: Droplets,
    ShowerHead: ShowerHead,
    Bath: Bath,
    Box: Box,
    Sparkles: Sparkles,
    Layers: Layers
  };

  return (
    <section id="categories" className="py-24 bg-[#FBFBFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30] px-3.5 py-1 rounded-full bg-[#E8EFEB] border border-[#203A30]/20">
              MEA 2026 Core Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#203A30] font-light">
              Main Product Categories
            </h2>
            <p className="text-sm sm:text-base text-[#2D3748] font-normal leading-relaxed">
              Engineered to meet European WRAS and ESMA compliance, providing uncompromising aesthetics and performance.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30]/70">
              6 Principal Divisions
            </span>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat) => {
            const IconComp = iconMap[cat.icon] || Droplets;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#203A30]/15 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* A. Fixed Icon Badge Background & Visible Forest Green Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#E8EFEB] text-[#203A30] border border-[#203A30]/20 flex items-center justify-center shadow-sm group-hover:bg-[#203A30] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* B. Tag Pills & Badge Text Contrast */}
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#203A30] bg-[#E8EFEB] px-3 py-1 rounded-md border border-[#203A30]/20">
                      {cat.specs.certification || cat.specs.warranty || 'Italian Standard'}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-normal text-[#203A30] group-hover:text-[#C8A97E] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#203A30]/80 uppercase tracking-wider mt-1">
                      {cat.subtitle}
                    </p>
                  </div>

                  {/* C. Sub-Links & List Items High Contrast (#1A202C / #2D3748) */}
                  <ul className="space-y-2.5 pt-3 border-t border-[#203A30]/10">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-xs text-[#1A202C] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] shrink-0" />
                        <span className="hover:text-[#203A30] transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Drawer Trigger Button */}
                <div className="pt-6 mt-6 border-t border-[#203A30]/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#203A30] font-bold">
                    <Info className="w-3.5 h-3.5 text-[#C8A97E]" />
                    <span>Technical Specs</span>
                  </div>

                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#203A30] uppercase tracking-wider hover:text-[#C8A97E] transition-colors"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 text-[#C8A97E] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
