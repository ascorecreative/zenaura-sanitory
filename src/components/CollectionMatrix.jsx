import React, { useState } from 'react';
import { COLLECTIONS_DATA } from '../data/catalogData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CollectionMatrix({ onSelectCollection }) {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Hotel Luxe', 'Mid-Century', 'Japandi & Zen', 'Industrial Chic'];

  const filteredCollections = activeTab === 'All' 
    ? COLLECTIONS_DATA 
    : COLLECTIONS_DATA.filter(col => col.category === activeTab);

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#F4F6F5]/60 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30] px-3.5 py-1 rounded-full bg-[#E8EFEB] border border-[#203A30]/20 inline-block">
            Curated Architectural Lines
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#203A30] font-light">
            Key Collection Matrix
          </h2>
          <p className="text-xs sm:text-base text-[#2D3748] font-normal leading-relaxed max-w-2xl mx-auto">
            Explore signature designer collections from the MEA 2026 BAGNODESIGN portfolio, masterfully blending heritage craftsmanship with contemporary ergonomics.
          </p>
        </div>

        {/* Responsive Mobile-Friendly Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-[#203A30] text-white shadow-md scale-105'
                  : 'bg-white text-[#203A30] border border-[#203A30]/30 hover:border-[#203A30] hover:bg-[#E8EFEB]'
              }`}
            >
              {tab === 'All' ? 'All Featured' : tab}
            </button>
          ))}
        </div>

        {/* Collection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCollections.map((col) => (
            <div
              key={col.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#203A30]/15 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F6F5]">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.08em] uppercase text-[#203A30] bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-[#203A30]/20 shadow-sm">
                    {col.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#203A30] group-hover:text-[#C8A97E] transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#203A30]/80 uppercase tracking-wider">
                    {col.tagline}
                  </p>
                  <p className="text-xs text-[#2D3748] leading-relaxed">
                    {col.description}
                  </p>
                </div>

                {/* Feature Bullet List */}
                <div className="space-y-2 pt-2 border-t border-[#203A30]/10">
                  {col.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A97E] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-[#1A202C] font-semibold leading-tight">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Action */}
                <button
                  onClick={() => onSelectCollection(col)}
                  className="w-full mt-3 sm:mt-4 py-3 rounded-xl bg-white text-[#203A30] border border-[#203A30]/40 hover:bg-[#203A30] hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                >
                  <span>Inquire Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8A97E] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
