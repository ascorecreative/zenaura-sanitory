import React from 'react';
import { X, CheckCircle, MessageSquare } from 'lucide-react';

export default function ProductDetailModal({ item, onClose, onInquire }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Frosted Backdrop Blur Overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#0F1816]/75 backdrop-blur-md transition-opacity"
      />

      {/* Dark Forest Green Frosted Glass Modal Popup Card with White & Gold High Contrast Text */}
      <div className="relative bg-[#203A30]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-[#C8A97E]/30 text-white z-10 space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#203A30] bg-[#C8A97E] px-2.5 py-1 rounded-md">
              MEA 2026 SPECIFICATION
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-2">
              {item.title || item.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {item.image && (
            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-white/10 border border-white/20">
              <img
                src={item.image}
                alt={item.title || item.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <p className="text-xs text-white/90 leading-relaxed font-medium">
            {item.description || item.subtitle || 'Custom luxury architectural specification from the official MEA 2026 BAGNODESIGN catalog.'}
          </p>

          {/* Key Items / Specifications List */}
          {item.items && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                Included Components & Variations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.items.map((sub, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-white font-semibold">
                    <CheckCircle className="w-4 h-4 text-[#C8A97E] shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specs Box */}
          {item.specs && (
            <div className="p-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C8A97E]">
                Compliance & Technical Specs:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-white">
                {Object.entries(item.specs).map(([key, val]) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg border border-white/15">
                    <span className="text-[9px] uppercase font-bold text-[#C8A97E] block">{key}</span>
                    <span className="font-bold text-white">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Row */}
          <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { onClose(); onInquire(item); }}
              className="flex-1 py-3.5 rounded-full bg-[#C8A97E] text-[#203A30] text-xs font-bold uppercase tracking-wider hover:bg-[#d8b88d] transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#203A30]" />
              <span>Inquire This Item via WhatsApp</span>
            </button>
            <button
              onClick={onClose}
              className="py-3.5 px-6 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
