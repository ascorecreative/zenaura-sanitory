import React from 'react';
import { Phone, Mail, MessageSquare, Send, Sparkles, ShieldCheck } from 'lucide-react';

export default function ShowroomContact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FBFBFC] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30] px-3.5 py-1 rounded-full bg-[#E8EFEB] border border-[#203A30]/20 inline-block">
            Direct Consultation & Sales Support
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#203A30] font-light">
            Connect with Zenaura Trading
          </h2>
          <p className="text-xs sm:text-base text-[#2D3748] font-normal leading-relaxed">
            Our technical specialists provide end-to-end support for specification, finish matching, and catalog pricing inquiries.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#203A30]/20 shadow-xl flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              
              {/* Zenaura Logo Display */}
              <div className="flex items-center gap-3 pb-2 border-b border-[#203A30]/10">
                <img 
                  src="/logo.svg" 
                  alt="ZS ZENAURA SANITARY" 
                  className="h-10 sm:h-12 w-auto object-contain" 
                />
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F4F6F5] border border-[#203A30]/15">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-600/20 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#203A30]">Direct Phone & WhatsApp Inquiry</h4>
                  <a href="tel:+971541414160" className="block text-sm font-bold text-[#203A30] hover:text-[#D4AF37] transition-colors mt-0.5">
                    +971 54 141 4160
                  </a>
                  <p className="text-[10px] text-[#2D3748] font-medium">Instant Project Specification Assistance</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F4F6F5] border border-[#203A30]/15">
                <div className="w-9 h-9 rounded-xl bg-[#E8EFEB] text-[#203A30] flex items-center justify-center shrink-0 border border-[#203A30]/15 mt-0.5">
                  <Mail className="w-4 h-4 text-[#203A30]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#203A30]">Official Email Inquiry</h4>
                  <a href="mailto:info@zenauratrading.com" className="block text-xs font-bold text-[#203A30] hover:text-[#D4AF37] transition-colors mt-0.5">
                    info@zenauratrading.com
                  </a>
                </div>
              </div>

              {/* Support */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#F4F6F5] border border-[#203A30]/15">
                <div className="w-9 h-9 rounded-xl bg-[#E8EFEB] text-[#203A30] flex items-center justify-center shrink-0 border border-[#203A30]/15 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#203A30]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#203A30]">Architectural Support</h4>
                  <p className="text-xs text-[#2D3748] font-medium mt-0.5">
                    BIM/CAD Specs, Finishes Swatch Testing & Quotation Dossiers
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-4 border-t border-[#203A30]/10">
              <a
                href="https://wa.me/971541414160?text=Hello%20Zenaura%20Sanitary,%20I%20would%20like%20to%20inquire%20about%20catalog%20pricing%20and%20product%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-full bg-[#203A30] text-white hover:bg-[#2D4F42] transition-colors duration-300 shadow-md text-[11px] sm:text-xs font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2.5 text-center leading-tight group"
              >
                <MessageSquare className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
                <span>Start Direct WhatsApp Chat (+971 54 141 4160)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Digital Inquiry Box */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#203A30]/20 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3 border-b border-[#203A30]/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Quick Digital Inquiry</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#203A30]">
                Request Material Samples & Catalog
              </h3>
              <p className="text-xs text-[#2D3748]">
                Select your category of interest to connect directly with our sales team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <a 
                href="https://wa.me/971541414160?text=Hello,%20I%20want%20to%20request%20samples%20and%20pricing%20for%20Bathroom%20Sanitary%20Ware."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#F4F6F5] hover:bg-[#E8EFEB] border border-[#203A30]/15 transition-all text-[#203A30] font-bold flex items-center justify-between"
              >
                <span>🚿 Bathroom Sanitary Ware</span>
                <Send className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <a 
                href="https://wa.me/971541414160?text=Hello,%20I%20want%20to%20request%20samples%20and%20pricing%20for%20Architectural%20Tiles%20%26%20Slabs."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#F4F6F5] hover:bg-[#E8EFEB] border border-[#203A30]/15 transition-all text-[#203A30] font-bold flex items-center justify-between"
              >
                <span>📐 Tiles & Slabs</span>
                <Send className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <a 
                href="https://wa.me/971541414160?text=Hello,%20I%20want%20to%20request%20samples%20and%20pricing%20for%20Kitchen%20Fittings%20%26%20Sinks."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#F4F6F5] hover:bg-[#E8EFEB] border border-[#203A30]/15 transition-all text-[#203A30] font-bold flex items-center justify-between"
              >
                <span>🍳 Kitchen Appliances & Sinks</span>
                <Send className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <a 
                href="https://wa.me/971541414160?text=Hello,%20I%20want%20to%20request%20samples%20and%20pricing%20for%20Outdoor%20Living%20Furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#F4F6F5] hover:bg-[#E8EFEB] border border-[#203A30]/15 transition-all text-[#203A30] font-bold flex items-center justify-between"
              >
                <span>☀️ Outdoor Living Furniture</span>
                <Send className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-[#203A30] text-white text-xs space-y-1">
              <p className="font-bold text-[#D4AF37]">Need assistance with project BOQ specifications?</p>
              <p className="text-white/80">Send your drawings or product codes directly to info@zenauratrading.com or WhatsApp.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
