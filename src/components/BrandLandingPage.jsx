import React, { useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { 
  ArrowLeft, 
  Award, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  Globe, 
  FileText,
  Building2,
  ChevronRight
} from 'lucide-react';
import { ALL_BRANDS_DATA } from '../data/brandsData';

export default function BrandLandingPage({ brand, onBack, onSelectBrand, onOpenInquiry }) {
  if (!brand) return null;

  // Dynamically update document title & meta tags for SEO
  useEffect(() => {
    const originalTitle = document.title;
    document.title = brand.seoTitle || `${brand.name} UAE | Authorized Supplier | Zenaura Sanitary`;

    // Inject JSON-LD Schema.org for Brand
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'brand-json-ld';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Brand",
      "name": brand.name,
      "description": brand.description,
      "logo": brand.logoImage ? `https://www.zenaurasanitary.ae${brand.logoImage}` : undefined,
      "url": window.location.href,
      "mainEntityOfPage": window.location.href,
      "seller": {
        "@type": "LocalBusiness",
        "name": "Zenaura Sanitary Ware & Architectural Solutions",
        "telephone": "+971541414160",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Amber Gem Tower, Sheikh Khalifa Bin Zayed St",
          "addressLocality": "Ajman",
          "addressCountry": "AE"
        }
      }
    });

    document.head.appendChild(script);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      const el = document.getElementById('brand-json-ld');
      if (el) el.remove();
    };
  }, [brand]);

  // Direct WhatsApp message pre-filled for this brand
  const whatsappUrl = `https://wa.me/971541414160?text=${encodeURIComponent(
    `Hello Zenaura Sanitary, I am interested in inquiring about ${brand.name} (${brand.origin}) products and catalog specifications for my project.`
  )}`;

  // Find 4 related brands in the same category
  const relatedBrands = ALL_BRANDS_DATA
    .filter(b => b.id !== brand.id && b.category === brand.category)
    .slice(0, 4);

  return (
    <article className="min-h-screen bg-[#FBFBFC] text-[#203A30] font-sans pb-24 pt-28">
      
      {/* Top Breadcrumb Nav Bar */}
      <div className="bg-[#203A30] text-white py-3.5 px-4 sm:px-8 border-b border-[#D4AF37]/30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Breadcrumb Links */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-white/80 font-medium">
            <button 
              onClick={onBack}
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            <button 
              onClick={onBack}
              className="hover:text-[#D4AF37] transition-colors font-semibold"
            >
              <span>Partner Brands Showcase</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-bold">{brand.name}</span>
          </nav>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#203A30] transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-white/20"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Brands</span>
          </button>

        </div>
      </div>

      {/* Brand Hero Banner */}
      <section className="relative bg-[#203A30] text-white py-16 sm:py-24 border-b border-[#D4AF37]/30 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay scale-105 filter blur-[1px]"
          style={{ backgroundImage: `url(${brand.bannerImage || '/images/hero_bathtub.png'})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#203A30] via-[#203A30]/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#203A30] bg-[#D4AF37] px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#203A30]" />
                <span>Authorized Partner UAE</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-white bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{brand.origin}</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4AF37]/40">
                {brand.category}
              </span>
            </div>

            {/* Quick Contact Badge */}
            <span className="text-xs font-bold text-white/90 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 hidden sm:inline-flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Available at Zenaura Sanitary Ajman / Dubai</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header Content */}
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-white">
                {brand.name}
              </h1>
              <p className="text-lg sm:text-xl text-[#D4AF37] font-medium tracking-wide italic">
                {brand.tagline}
              </p>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-3xl pt-2">
                {brand.description}
              </p>
            </div>

            {/* Right Brand Logo Card */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-[#D4AF37]/50 shadow-2xl flex flex-col items-center justify-center space-y-6 text-center text-[#203A30]">
              <div className="w-full h-28 flex items-center justify-center p-4 bg-[#F8FAFC] rounded-2xl border border-[#203A30]/15 shadow-inner">
                <BrandLogo brand={brand} className="max-h-20 w-auto" />
              </div>

              <div className="w-full space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-[#203A30] text-white hover:bg-[#2D4F42] transition-all font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <span>Inquire {brand.name} via WhatsApp</span>
                </a>

                <p className="text-[11px] text-[#2D3748] font-semibold flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct Sales Desk: +971 54 141 4160</span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        
        {/* Features & Certifications Grid */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#203A30]">
              Key Features & Architectural Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brand.features && brand.features.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#203A30]/15 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#E8EFEB] text-[#203A30] flex items-center justify-center font-bold text-sm border border-[#203A30]/15">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#203A30] leading-relaxed">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Compliance Specs Box */}
        {brand.specs && (
          <div className="bg-[#203A30] text-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/30 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-white/15 pb-4 md:pb-0 md:pr-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">Warranty Guarantee</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white block">{brand.specs.warranty}</span>
              <span className="text-xs text-white/80">Manufacturer Backed Warranty</span>
            </div>

            <div className="space-y-1.5 border-b md:border-b-0 md:border-r border-white/15 pb-4 md:pb-0 md:pr-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">Quality Compliance</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white block">{brand.specs.certification}</span>
              <span className="text-xs text-white/80">Approved for UAE & International BOQ</span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">Material Engineering</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white block">{brand.specs.material}</span>
              <span className="text-xs text-white/80">Premium Grade Construction</span>
            </div>
          </div>
        )}

        {/* Representative Products Gallery */}
        {brand.popularProducts && brand.popularProducts.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#203A30]/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Featured Portfolio
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#203A30]">
                  {brand.name} Showcase Products
                </h2>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#203A30] uppercase tracking-wider hover:text-[#D4AF37] transition-colors"
              >
                <span>Request PDF Catalog</span>
                <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {brand.popularProducts.map((prod, pIdx) => (
                <div key={pIdx} className="bg-white rounded-2xl border border-[#203A30]/15 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                      <img
                        src={prod.image || '/images/hero_bathtub.png'}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-[#203A30]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-white/20">
                        {prod.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="font-serif text-xl font-bold text-[#203A30]">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-[#2D3748] leading-relaxed">
                        {prod.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={`https://wa.me/971541414160?text=${encodeURIComponent(
                        `Hello Zenaura Sanitary, I am interested in inquiring about ${prod.name} from ${brand.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-[#F4F6F5] hover:bg-[#203A30] text-[#203A30] hover:text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#203A30]/20"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Inquire Product</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Call to Action Box */}
        <div className="bg-gradient-to-r from-[#203A30] to-[#182B24] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#D4AF37]/30">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3 py-1 rounded-full bg-white/10 border border-white/15 inline-block">
              Direct Project BOQ Support
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-light">
              Need Specifications for {brand.name}?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
              Our engineering specialists in Ajman provide complete BOQ matching, CAD line drawings, finish swatches, and wholesale pricing for {brand.name}.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-full bg-[#D4AF37] text-[#203A30] font-bold text-xs uppercase tracking-wider hover:bg-[#d8b88d] transition-colors shadow-lg flex items-center justify-center gap-2 text-center"
            >
              <MessageSquare className="w-4 h-4 text-[#203A30]" />
              <span>WhatsApp Direct Quote</span>
            </a>
          </div>
        </div>

        {/* Related Brands Section */}
        {relatedBrands.length > 0 && (
          <div className="space-y-6 pt-6">
            <h3 className="font-serif text-2xl font-light text-[#203A30]">
              Explore Related Brands in <span className="font-bold">{brand.category}</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedBrands.map((relBrand) => (
                <button
                  key={relBrand.id}
                  onClick={() => onSelectBrand(relBrand)}
                  className="bg-white p-5 rounded-2xl border border-[#203A30]/15 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between gap-4 group"
                >
                  <div className="h-12 flex items-center justify-center bg-[#F8FAFC] rounded-xl p-2 border border-[#203A30]/10">
                    <BrandLogo brand={relBrand} className="max-h-8 w-auto" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#203A30] group-hover:text-[#D4AF37] transition-colors">
                      {relBrand.name}
                    </h4>
                    <span className="text-[10px] text-[#2D3748] block font-medium">
                      {relBrand.origin}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

      </section>

    </article>
  );
}
