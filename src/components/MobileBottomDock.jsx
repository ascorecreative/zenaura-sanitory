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

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN -> SHOW bar
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        // Scrolling UP -> HIDE bar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);

      // When scroll finishes (page becomes IDLE), SHOW the bar
      idleTimer = setTimeout(() => {
        setIsVisible(true);
      }, 900);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(idleTimer);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-40 lg:hidden transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-32 pointer-events-none'
      }`}
    >
      {/* Zenaura Theme Bottom Floating Dock */}
      <div className="bg-[#203A30]/95 backdrop-blur-2xl border border-[#C8A97E]/30 rounded-[28px] shadow-2xl px-4 py-2 flex items-center justify-between relative text-white font-sans">
        
        {/* Nav 1: Home */}
        <a
          href="#hero"
          onClick={() => setActiveItem('home')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 transition-all duration-300 ${
            activeItem === 'home' ? 'text-[#C8A97E] scale-105' : 'text-white/70 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Home</span>
        </a>

        {/* Nav 2: Collections */}
        <a
          href="#collections"
          onClick={() => setActiveItem('collections')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 transition-all duration-300 ${
            activeItem === 'collections' ? 'text-[#C8A97E] scale-105' : 'text-white/70 hover:text-white'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Collections</span>
        </a>

        {/* Center Raised Action Button (Glowing WhatsApp/Inquiry Trigger) */}
        <div className="relative -mt-7 shrink-0">
          <div className="absolute -inset-1.5 bg-[#C8A97E]/40 rounded-full blur-md animate-pulse" />
          <button
            onClick={onOpenInquiry}
            className="relative w-14 h-14 rounded-full bg-[#203A30] border-2 border-[#C8A97E] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
            aria-label="Instant WhatsApp Quote"
          >
            <MessageSquare className="w-6 h-6 text-[#C8A97E] fill-[#C8A97E]/20" />
          </button>
        </div>

        {/* Nav 3: Finishes */}
        <a
          href="#studio"
          onClick={() => setActiveItem('finishes')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 transition-all duration-300 ${
            activeItem === 'finishes' ? 'text-[#C8A97E] scale-105' : 'text-white/70 hover:text-white'
          }`}
        >
          <Palette className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Finishes</span>
        </a>

        {/* Nav 4: Location */}
        <a
          href="#contact"
          onClick={() => setActiveItem('contact')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 transition-all duration-300 ${
            activeItem === 'contact' ? 'text-[#C8A97E] scale-105' : 'text-white/70 hover:text-white'
          }`}
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Showroom</span>
        </a>

      </div>
    </div>
  );
}
