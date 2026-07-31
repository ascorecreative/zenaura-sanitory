import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle } from 'lucide-react';

export default function CatalogueModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloaded(true);

    // Send pre-filled WhatsApp request for high-res PDF catalog
    const msg = `Hello Zenaura Sanitary (Ajman Showroom),
I have requested the official MEA 2026 BAGNODESIGN Catalogue PDF:
👤 Name: ${name || 'Valued Client'}
✉️ Email: ${email || 'N/A'}

Please send the direct high-res download link.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/971547834673?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Frosted Backdrop Blur Overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#0F1816]/75 backdrop-blur-md transition-opacity"
      />

      {/* Dark Forest Green Frosted Glass Modal Card */}
      <div className="relative bg-[#203A30]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#C8A97E]/30 text-white z-10 space-y-6 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C8A97E] text-[#203A30] flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Digital Catalogue Request</h3>
              <p className="text-[10px] text-[#C8A97E] font-bold uppercase tracking-wider">Official MEA 2026 Edition</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {downloaded ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C8A97E]/20 text-[#C8A97E] flex items-center justify-center mx-auto shadow-inner border border-[#C8A97E]/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl text-white font-bold">Catalogue Request Sent!</h4>
            <p className="text-xs text-white/80 max-w-sm mx-auto font-medium leading-relaxed">
              Your request for the official MEA 2026 BAGNODESIGN / SANIPEX GROUP catalog has been sent to our technical desk. Our team at Amber Gem Tower, Ajman will assist you immediately.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-full bg-[#C8A97E] text-[#203A30] text-xs font-bold uppercase tracking-wider hover:bg-[#d8b88d] transition-colors shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4">
            <div className="p-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span>MEA 2026 Full Portfolio PDF</span>
                <span className="text-[#C8A97E] text-[10px] font-mono">77 MB</span>
              </div>
              <p className="text-xs text-white/80 font-medium leading-relaxed">
                Includes all 5,000+ Italian sanitary products, technical dimensional line drawings, materials swatches, and WRAS certifications.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                Your Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Arch. Ahmed Hassan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-[#C8A97E] text-xs text-white placeholder-white/40 outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                Business Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@firm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:border-[#C8A97E] text-xs text-white placeholder-white/40 outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#C8A97E] text-[#203A30] font-bold text-xs uppercase tracking-wider hover:bg-[#d8b88d] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#203A30]" />
              <span>Download High-Res PDF Catalogue</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
