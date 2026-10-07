import React from 'react';

export default function BrandLogo({ brand, className = "h-12 w-auto" }) {
  if (!brand) return null;

  // If explicit logo image exists, render image
  if (brand.logoImage) {
    return (
      <img
        src={brand.logoImage}
        alt={`${brand.name} Logo`}
        className={`object-contain max-h-16 max-w-[200px] ${className}`}
      />
    );
  }

  // Brand specific custom vector styling matching PDF matrix
  const id = brand.id || brand.name.toLowerCase().replace(/[^a-z0-9]/g, '-');

  // Custom styled badges based on PDF sheet
  if (id === 'gebeirt' || id === 'geberit') {
    return (
      <div className="bg-[#00529C] text-white font-bold tracking-widest px-4 py-2 text-lg sm:text-xl uppercase font-sans rounded">
        GEBERIT
      </div>
    );
  }

  if (id === 'harvia') {
    return (
      <div className="bg-[#E30613] text-white font-black tracking-widest px-5 py-2 text-lg sm:text-xl uppercase font-sans">
        HARVIA
      </div>
    );
  }

  if (id === 'olivari') {
    return (
      <div className="bg-[#EAD096] text-[#203A30] border border-[#C8A97E] font-extrabold tracking-wider px-4 py-1.5 text-center leading-tight">
        <div className="text-base font-serif font-black">OLIVARI</div>
        <div className="text-[8px] font-sans uppercase font-bold text-[#203A30]/80">Italy 1911</div>
      </div>
    );
  }

  if (id === 'hewi') {
    return (
      <div className="bg-[#FFED00] text-black font-extrabold tracking-widest px-4 py-1.5 text-lg font-sans border border-black">
        HEWI
      </div>
    );
  }

  if (id === 'dnd') {
    return (
      <div className="bg-black text-white font-mono font-bold text-2xl tracking-tighter px-4 py-1.5 lowercase">
        dnd
      </div>
    );
  }

  if (id === 'wedi') {
    return (
      <div className="flex items-center gap-1 font-bold text-xl text-[#00A896] tracking-tighter font-sans">
        <span className="w-3 h-3 bg-[#00A896] inline-block" />
        <span className="lowercase text-2xl">wedi</span>
      </div>
    );
  }

  if (id === 'aquadrain') {
    return (
      <div className="font-sans font-bold text-xl tracking-tight flex items-center gap-0.5">
        <span className="text-[#00A896]">AQUA</span>
        <span className="text-gray-600 font-normal">DRAIN</span>
      </div>
    );
  }

  if (id === 'vola') {
    return (
      <div className="font-sans font-normal text-2xl tracking-tight text-gray-800 lowercase">
        vola
      </div>
    );
  }

  if (id === 'bongio') {
    return (
      <div className="font-serif italic font-extrabold text-2xl tracking-normal text-[#203A30] lowercase">
        bongio
      </div>
    );
  }

  if (id === 'dornbracht') {
    return (
      <div className="font-serif font-bold text-sm tracking-widest text-[#203A30] text-center border-y border-[#203A30]/30 py-1">
        DORN BRACHT
      </div>
    );
  }

  if (id === 'jee-o') {
    return (
      <div className="border-2 border-black font-sans font-bold text-lg tracking-widest px-3 py-1 text-black">
        JEE-O
      </div>
    );
  }

  if (id === 'fulgor-milano') {
    return (
      <div className="bg-[#2D2D2D] text-white font-sans font-bold text-xs tracking-[0.2em] px-4 py-2 uppercase">
        FULGOR MILANO
      </div>
    );
  }

  if (id === 'croft') {
    return (
      <div className="bg-[#1C2522] text-[#D4AF37] font-serif font-bold text-base tracking-widest px-4 py-2 border border-[#D4AF37]/40 uppercase text-center">
        CROFT
      </div>
    );
  }

  // Fallback high-contrast luxury text badge
  return (
    <div className="px-4 py-2 rounded bg-[#203A30] text-white font-serif font-bold text-sm sm:text-base tracking-widest text-center shadow-sm uppercase border border-[#D4AF37]/30">
      {brand.name}
    </div>
  );
}
