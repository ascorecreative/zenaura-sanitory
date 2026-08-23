import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, Sparkles, MessageSquare, ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function HeroSection({ onRequestCatalogue, onOpenInquiry }) {
  const slides = [
    {
      id: 1,
      image: '/images/sanipex_slides/slide1_ginza.webp',
      tag: 'BAGNODESIGN • JAPANESE BOUTIQUE ZEN',
      title: 'The Ginza & Ginza Junior Series',
      subtitle: 'Minimalist Japanese aesthetics, Armour matte coatings & organic ceramic forms.',
      ctaText: 'Explore Bathroom Collections',
      categoryLink: '#categories'
    },
    {
      id: 2,
      image: '/images/sanipex_slides/slide2_outdoor_kitchen.webp',
      tag: 'OUTDOOR LIVING • AL FRESCO KITCHEN',
      title: 'Luxury Outdoor Kitchens & Dining',
      subtitle: 'Stainless steel sinks, built-in grills & weatherproof dining modules.',
      ctaText: 'Discover Outdoor Living',
      categoryLink: '#categories'
    },
    {
      id: 3,
      image: '/images/sanipex_slides/slide3_pergola.webp',
      tag: 'ARCHITECTURAL OUTDOOR • PERGOLAS',
      title: 'Bioclimatic Pergolas & Poolbeds',
      subtitle: 'Motorized louvers, integrated LED lighting & poolside daybeds.',
      ctaText: 'View Outdoor Solutions',
      categoryLink: '#categories'
    },
    {
      id: 4,
      image: '/images/sanipex_slides/slide4_slabs.webp',
      tag: 'TILES & SLABS • LARGE FORMAT',
      title: 'Architectural Porcelain Slabs',
      subtitle: '120x280cm bookmatched Calacatta marble & natural stone slabs.',
      ctaText: 'Explore Porcelain Slabs',
      categoryLink: '#categories'
    },
    {
      id: 5,
      image: '/images/sanipex_slides/slide5_hardware.webp',
      tag: 'ARCHITECTURAL HARDWARE • PVD FINISHES',
      title: 'Precision PVD Handles & Fittings',
      subtitle: 'PVD Gold, Oyster, Santiago & Brushed Nickel architectural hardware.',
      ctaText: 'View Hardware Range',
      categoryLink: '#studio'
    },
    {
      id: 6,
      image: '/images/sanipex_slides/slide6_lighting.webp',
      tag: 'LUXURY LIGHTING • SANAURA & HEATHFIELD',
      title: 'Architectural & Ambient Lighting',
      subtitle: 'Spanish alabaster wall sconces, brass pendants & anti-fog LED mirrors.',
      ctaText: 'Inquire Lighting & Mirrors',
      categoryLink: '#categories'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play interval (5s)
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className="relative pt-28 bg-[#0D0E12] text-white overflow-hidden font-sans">
      
      {/* Main Full-Width Sanipex-Style Hero Banner Slider */}
      <div className="relative w-full h-[78vh] sm:h-[84vh] min-h-[560px] overflow-hidden group">
        
        {/* Slides Stack */}
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Slide Background Image with Smooth Parallax Scale Effect */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Sanipex Dark Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/50 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E12]/80 via-transparent to-transparent" />

              {/* Overlay Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
                  <div className="max-w-2xl space-y-4 sm:space-y-6">
                    
                    {/* Tag Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{slide.tag}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif text-3xl sm:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight text-white">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-lg text-white/80 font-normal leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <a
                        href={slide.categoryLink}
                        className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#D4AF37] text-[#0D0E12] font-bold text-xs tracking-wider uppercase hover:bg-white transition-all duration-300 shadow-xl flex items-center gap-2 group/btn"
                      >
                        <span>{slide.ctaText}</span>
                        <ArrowRight className="w-4 h-4 text-[#0D0E12] group-hover/btn:translate-x-1 transition-transform" />
                      </a>

                      <button
                        onClick={onOpenInquiry}
                        className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold text-xs tracking-wider uppercase hover:bg-white hover:text-[#0D0E12] transition-all duration-300 shadow-md flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                        <span>Instant WhatsApp Quote</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Manual Left/Right Arrow Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0D0E12] transition-all duration-300 opacity-80 group-hover:opacity-100"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0D0E12] transition-all duration-300 opacity-80 group-hover:opacity-100"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Sanipex Slider Progress & Play/Pause Controller */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white/80 hover:text-[#D4AF37] transition-colors p-1"
            aria-label={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <span className="text-xs font-mono text-[#D4AF37] font-bold">
            0{currentSlide + 1} / 0{slides.length}
          </span>

          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/40 hover:bg-white'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Sanipex Group Value Proposition Bar below Slider */}
      <div className="bg-[#14161F] py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#203A30] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Global Partner Brands Portfolio</p>
                <p className="text-[11px] text-white/60 font-medium">GROHE • GEBERIT • JAGUAR • RAK CERAMICS</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#203A30] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">10-Year Armour Guarantee</p>
                <p className="text-[11px] text-white/60 font-medium">1,000 Hours Salt Spray Tested</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#203A30] text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Grade 316 Stainless Steel</p>
                <p className="text-[11px] text-white/60 font-medium">Marine-Grade Outdoor & Spa Systems</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
