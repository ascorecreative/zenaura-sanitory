import React, { useState } from 'react';
import { MessageSquare, Send, X, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

export default function InquiryDrawer({ isOpen, onClose, initialData }) {
  const [productType, setProductType] = useState(initialData?.title || 'Luxury Mixers & Brassware');
  const [projectSize, setProjectSize] = useState('Private Penthouse / Villa');
  const [finishPreference, setFinishPreference] = useState('PVD Gold (#D4AF37)');
  const [fullName, setFullName] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const productOptions = [
    'Luxury Mixers & Brassware (La Dolce Vita Series)',
    'Bagnospa & Showering (LED Rain Showers & Body Sprays)',
    'Furniture & Sanitaryware (Rimless WCs & Vanities)',
    'Basins & Countertops (Alpine Porcelain & Murano Glass)',
    'Bathing & Wetroom Glass Systems',
    'Luxury Architectural Tiles & Wall Slabs'
  ];

  const sizeOptions = [
    'Private Penthouse / Villa',
    'Boutique Hotel / Hospitality',
    'Commercial Tower / Public Development',
    'Architectural Trade / Reseller Bulk'
  ];

  const finishOptions = [
    'PVD Gold (#D4AF37)',
    'PVD Oyster (Brushed Platinum)',
    'PVD Santiago (Dark Titanium)',
    'Armour Baby Pink / Misty Grey',
    'Armour Cocoa / Truffle',
    'Italian Calacatta Viola / Travertine'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const textMessage = `Hello Zenaura Sanitary (Ajman Showroom),
I would like to request an official project consultation & quotation:

👤 Name: ${fullName || 'Valued Client'}
📦 Product Type: ${productType}
🏢 Project Scope: ${projectSize}
✨ Finish Preference: ${finishPreference}
📝 Notes/Dimensions: ${additionalNotes || 'N/A'}

Please reach out with catalog specs and pricing.`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/971547834673?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Inline Section Container */}
      <section id="inquiry" className="py-24 bg-[#F4F6F5]/60 relative font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          
          {/* Frosted Glass Form Card with Brand Green Styling */}
          <div className="bg-[#203A30]/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-[#C8A97E]/30 shadow-2xl text-white space-y-8">
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#C8A97E] px-3.5 py-1 rounded-full bg-white/10 border border-white/20 inline-flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#C8A97E]" />
                <span>Instant Consultation Drawer</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light">
                Request Instant WhatsApp Project Quote
              </h2>
              <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                Select your product parameters below to generate an instant pre-formatted WhatsApp quote request directly to our UAE technical team at <strong className="text-[#C8A97E]">+971 54 783 4673</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                    Your Name / Firm Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arch. Sarah Mansoor"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-[#C8A97E] outline-none text-xs text-white placeholder-white/40 transition-colors shadow-sm"
                  />
                </div>

                {/* Product Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                    Product Category
                  </label>
                  <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#182B24] border border-white/20 focus:border-[#C8A97E] outline-none text-xs text-white transition-colors shadow-sm"
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#203A30] text-white">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Project Scope */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                    Project Size / Scope
                  </label>
                  <select
                    value={projectSize}
                    onChange={(e) => setProjectSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#182B24] border border-white/20 focus:border-[#C8A97E] outline-none text-xs text-white transition-colors shadow-sm"
                  >
                    {sizeOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#203A30] text-white">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Finish Preference */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                    Finish / Material Selection
                  </label>
                  <select
                    value={finishPreference}
                    onChange={(e) => setFinishPreference(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#182B24] border border-white/20 focus:border-[#C8A97E] outline-none text-xs text-white transition-colors shadow-sm"
                  >
                    {finishOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#203A30] text-white">{opt}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                  Project Quantities / Special Customizations
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention estimated unit quantities, BOQ references, or specific installation requirements..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-[#C8A97E] outline-none text-xs text-white placeholder-white/40 transition-colors shadow-sm"
                />
              </div>

              {/* Form Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#C8A97E] text-[#203A30] hover:bg-[#d8b88d] transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 text-[#203A30] group-hover:translate-x-1 transition-transform" />
                <span>Send Form to WhatsApp (+971 54 783 4673)</span>
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-white/15 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
                Direct Technical Team Response
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C8A97E]" />
                Official MEA 2026 Price List
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Slide-over Drawer Modal (Dark Forest Green Frosted Glass with White/Gold High Contrast Text) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end font-sans">
          {/* Frosted Backdrop Overlay */}
          <div 
            onClick={onClose}
            className="fixed inset-0 bg-[#0F1816]/75 backdrop-blur-md transition-opacity"
          />

          {/* Frosted Glass Drawer Container */}
          <div className="relative w-full max-w-md bg-[#203A30]/95 backdrop-blur-2xl text-white h-full shadow-2xl p-6 sm:p-8 border-l border-[#C8A97E]/30 flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="/logo_white.svg" 
                    alt="ZS ZENAURA SANITARY Logo" 
                    className="h-9 w-auto object-contain" 
                  />
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm space-y-2">
                  <p className="text-xs font-bold text-white flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#C8A97E]" />
                    <span>Direct Call / WhatsApp</span>
                  </p>
                  <p className="text-xs text-white/80 font-medium">
                    Reach our technical desk directly at:
                  </p>
                  <a href="tel:+971547834673" className="block text-sm font-bold text-[#C8A97E] hover:underline">
                    +971 54 783 4673
                  </a>
                </div>

                <form onSubmit={(e) => { handleSubmit(e); onClose(); }} className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#C8A97E]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-[#C8A97E] outline-none text-xs text-white placeholder-white/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#C8A97E]">
                      Product Interest
                    </label>
                    <select
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#182B24] border border-white/20 focus:border-[#C8A97E] outline-none text-xs text-white"
                    >
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#203A30] text-white">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#C8A97E]">
                      Message / BOQ Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief details..."
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-[#C8A97E] outline-none text-xs text-white placeholder-white/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#C8A97E] text-[#203A30] font-bold text-xs uppercase tracking-wider hover:bg-[#d8b88d] transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#203A30]" />
                    <span>Launch WhatsApp Chat</span>
                  </button>
                </form>
              </div>
            </div>

            <div className="pt-6 border-t border-white/15 text-center text-[10px] text-white/70 font-bold">
              26th Floor, Amber Gem Tower, Ajman, UAE
            </div>
          </div>
        </div>
      )}
    </>
  );
}
