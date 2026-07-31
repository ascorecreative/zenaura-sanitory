import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, Sparkles, MessageSquare, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection({ onRequestCatalogue, onOpenInquiry }) {
  const heroSlides = [
    {
      image: '/images/hero_bathtub.png',
      title: 'Bagnoquartz Freestanding Soaking Tub',
      subtitle: 'PVD Brushed Gold Floor-Mounted Mixer',
      tag: 'MEA 2026 BATHING'
    },
    {
      image: '/images/carlyle_collection.png',
      title: 'Carlyle Scalloped Hotel Vanity',
      subtitle: 'Spanish Alabaster Wall Sconce Lighting',
      tag: '5-STAR HOSPITALITY'
    },
    {
      image: '/images/ginza_collection.png',
      title: 'Ginza Japandi Zen Washbasin',
      subtitle: 'Armour Baby Pink & Misty Grey Finish',
      tag: 'JAPANDI MINIMALISM'
    },
    {
      image: '/images/sestriere_collection.png',
      title: 'Sestriere Jewellery Brassware',
      subtitle: 'Italian Calacatta Viola Marble Handles',
      tag: 'HAUTE CRAFTSMANSHIP'
    },
    {
      image: '/images/fonteyn_collection.png',
      title: 'Fonteyn Terrazzo Vanity Console',
      subtitle: 'Transitional 1940s Mid-Century Curves',
      tag: 'TRANSITIONAL LUXURY'
    },
    {
      image: '/images/studio316_collection.png',
      title: 'Studio 316 Marine Outdoor Shower',
      subtitle: 'AISI 316L Salt-Resistant Stainless Steel',
      tag: 'OUTSIDE RESORT SPA'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider interval (4.5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-[#FBFBFC] hero-full-mesh font-sans">
      
      {/* Dynamic Multi-Color Background Orbs */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#203A30]/20 via-[#C8A97E]/20 to-[#8B5CF6]/15 blur-3xl opacity-80 pointer-events-none rounded-full" 
        style={{ animation: 'spin 22s linear infinite' }} 
      />
      <div 
        className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-gradient-to-br from-[#06B6D4]/20 to-[#203A30]/20 rounded-full blur-3xl pointer-events-none" 
        style={{ animation: 'pulse 10s ease-in-out infinite' }} 
      />
      <div 
        className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gradient-to-tl from-[#C8A97E]/25 via-[#8B5CF6]/15 to-[#467970]/20 rounded-full blur-3xl pointer-events-none" 
        style={{ animation: 'pulse 14s ease-in-out infinite' }} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Badge: Fixed Mobile Layout Alignment */}
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#203A30]/20 text-[10px] sm:text-xs font-bold text-[#203A30] shadow-sm max-w-full text-center leading-tight">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A97E] shrink-0" />
              <span>OFFICIAL BAGNODESIGN / SANIPEX GROUP MEA 2026</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-3xl sm:text-6xl xl:text-7xl font-light text-[#203A30] leading-[1.15] sm:leading-[1.1] tracking-tight">
                Architectural <br />
                <span className="font-normal italic text-[#203A30] teal-shimmer">Elegance</span> for Refined Spaces.
              </h1>
              <p className="text-sm sm:text-lg text-[#2D3748] font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Curated Sanitary Ware, Tiles, Spa Systems & Luxury Hardware from the official MEA 2026 Portfolio. Tailored for penthouses, 5-star hospitality, and architectural landmarks across the UAE & GCC.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-[#203A30]/20 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E8EFEB] text-[#203A30] flex items-center justify-center shrink-0 border border-[#203A30]/15">
                  <Award className="w-5 h-5 text-[#203A30]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#203A30]">5000+ Italian</p>
                  <p className="text-[10px] font-medium text-[#2D3748]">Crafted Products</p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-[#203A30]/20 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E8EFEB] text-[#203A30] flex items-center justify-center shrink-0 border border-[#203A30]/15">
                  <ShieldCheck className="w-5 h-5 text-[#203A30]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#203A30]">316 Stainless</p>
                  <p className="text-[10px] font-medium text-[#2D3748]">Marine Grade Alloy</p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-[#203A30]/20 shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E8EFEB] text-[#203A30] flex items-center justify-center shrink-0 border border-[#203A30]/15">
                  <Sparkles className="w-5 h-5 text-[#203A30]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#203A30]">10-Year Armour</p>
                  <p className="text-[10px] font-medium text-[#2D3748]">Coating Warranty</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onRequestCatalogue}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#203A30] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#2D4F42] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 text-[#C8A97E] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/971547834673?text=Hello%20Zenaura%20Sanitary,%20I%20would%20like%20to%20request%20an%20instant%20quote%20for%20the%20MEA%202026%20Sanitary%20Ware%20Collection."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/90 backdrop-blur-md text-[#203A30] border-[1.5px] border-[#203A30] font-bold text-xs tracking-wider uppercase hover:bg-[#203A30] hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700 fill-emerald-700/20 group-hover:text-white" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Slider */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Multi-Color Dynamic Glowing Aura behind the slider */}
            <div 
              className="absolute -inset-6 bg-gradient-to-r from-[#203A30]/25 via-[#C8A97E]/30 via-[#8B5CF6]/20 to-[#06B6D4]/25 rounded-3xl blur-3xl opacity-85"
              style={{ animation: 'spin 18s linear infinite' }}
            />
            
            {/* Main Luxury Image Slider Card */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-2.5 sm:p-3 border border-[#203A30]/20 shadow-2xl overflow-hidden max-w-md w-full group z-10">
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#F4F6F5]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Fixed Mobile Floating Caption Overlay Pill (No Text Overflows!) */}
                    <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3.5 border border-[#203A30]/20 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 w-full">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] sm:text-xs font-bold text-[#203A30] truncate">{slide.title}</p>
                          <p className="text-[9px] sm:text-[10px] font-semibold text-[#2D3748] truncate">{slide.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-[8px] sm:text-[9px] font-bold tracking-wider text-white uppercase bg-[#203A30] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shrink-0 self-start sm:self-auto">
                        {slide.tag}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Slider Manual Prev/Next Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#203A30] border border-[#203A30]/20 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-[#203A30] border border-[#203A30]/20 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Slide Indicator Dots */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? 'w-5 bg-[#C8A97E]' : 'w-1.5 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
