import React, { useState, useEffect } from 'react';
import { Home, LayoutGrid, MessageSquare, Palette, MapPin } from 'lucide-react';

export default function MobileBottomDock({ onOpenInquiry }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    let idleTimer;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear any pending idle timer
      clearTimeout(idleTimer);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling DOWN -> SHOW bar
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY && currentScrollY > 80) {
        // Scrolling UP -> HIDE bar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);

      // When scroll finishes (page becomes IDLE), SHOW the bar
      idleTimer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(idleTimer);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-4 left-3 right-3 sm:left-6 sm:right-6 z-40 lg:hidden transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-32 pointer-events-none'
      }`}
    >
      {/* Translucent Frosted Glass Dock (Matching Header Transparency) */}
      <div className="bg-[#203A30]/75 backdrop-blur-2xl border border-white/20 rounded-[28px] shadow-2xl px-2 py-2 grid grid-cols-5 items-center text-white font-sans">
        
        {/* Nav 1: Home */}
        <a
          href="#hero"
          onClick={() => setActiveItem('home')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-all duration-300 min-w-0 ${
            activeItem === 'home' ? 'text-[#C8A97E] scale-105' : 'text-white/80 hover:text-white'
          }`}
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase truncate max-w-full">Home</span>
        </a>

        {/* Nav 2: Collections */}
        <a
          href="#collections"
          onClick={() => setActiveItem('collections')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-all duration-300 min-w-0 ${
            activeItem === 'collections' ? 'text-[#C8A97E] scale-105' : 'text-white/80 hover:text-white'
          }`}
        >
          <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase truncate max-w-full">Collections</span>
        </a>

        {/* Center Raised Action Button (Glowing Translucent WhatsApp/Inquiry Trigger) */}
        <div className="flex justify-center items-center -mt-7 relative shrink-0">
          <div className="absolute -inset-1 bg-[#C8A97E]/40 rounded-full blur-md animate-pulse" />
          <button
            onClick={onOpenInquiry}
            className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#203A30]/90 backdrop-blur-xl border-2 border-[#C8A97E] text-[#C8A97E] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
            aria-label="Instant WhatsApp Quote"
          >
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-[#C8A97E]/20" />
          </button>
        </div>

        {/* Nav 4: Finishes */}
        <a
          href="#studio"
          onClick={() => setActiveItem('finishes')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-all duration-300 min-w-0 ${
            activeItem === 'finishes' ? 'text-[#C8A97E] scale-105' : 'text-white/80 hover:text-white'
          }`}
        >
          <Palette className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase truncate max-w-full">Finishes</span>
        </a>

        {/* Nav 5: Showroom */}
        <a
          href="#contact"
          onClick={() => setActiveItem('contact')}
          className={`flex flex-col items-center justify-center gap-1 py-1 transition-all duration-300 min-w-0 ${
            activeItem === 'contact' ? 'text-[#C8A97E] scale-105' : 'text-white/80 hover:text-white'
          }`}
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase truncate max-w-full">Showroom</span>
        </a>

      </div>
    </div>
  );
}
