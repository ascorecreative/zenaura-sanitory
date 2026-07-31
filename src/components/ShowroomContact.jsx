import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export default function ShowroomContact() {
  return (
    <section id="contact" className="py-24 bg-[#FBFBFC] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#203A30] px-3.5 py-1 rounded-full bg-[#E8EFEB] border border-[#203A30]/20">
            UAE Showroom & Corporate Office
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#203A30] font-light">
            Ajman Executive Location
          </h2>
          <p className="text-sm sm:text-base text-[#2D3748] font-normal leading-relaxed">
            Visit our architectural showroom in Amber Gem Tower, Ajman to experience tactile finish samples and consult with technical specification specialists.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards with Official Zenaura Logo */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#203A30]/20 shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Zenaura Official Logo Display */}
              <div className="flex items-center gap-3 pb-2 border-b border-[#203A30]/10">
                <img 
                  src="/logo.svg" 
                  alt="ZS ZENAURA SANITARY" 
                  className="h-12 w-auto object-contain" 
                />
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F6F5] border border-[#203A30]/15">
                <div className="w-10 h-10 rounded-xl bg-[#E8EFEB] text-[#203A30] flex items-center justify-center shrink-0 border border-[#203A30]/15">
                  <MapPin className="w-5 h-5 text-[#203A30]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#203A30]">Showroom & Corporate Office</h4>
                  <p className="text-xs text-[#2D3748] font-medium mt-1 leading-relaxed">
                    26th Floor, Amber Gem Tower, Sheikh Khalifa Bin Zayed St, Ajman, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F6F5] border border-[#203A30]/15">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-600/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#203A30]">Direct Phone & WhatsApp</h4>
                  <a href="tel:+971547834673" className="block text-sm font-bold text-[#203A30] hover:text-[#C8A97E] transition-colors mt-0.5">
                    +971 54 783 4673
                  </a>
                  <p className="text-[10px] text-[#2D3748] font-medium">Available Sat - Thu: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F6F5] border border-[#203A30]/15">
                <div className="w-10 h-10 rounded-xl bg-[#E8EFEB] text-[#203A30] flex items-center justify-center shrink-0 border border-[#203A30]/15">
                  <Mail className="w-5 h-5 text-[#203A30]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#203A30]">Official Email Inquiry</h4>
                  <a href="mailto:zenauratrading@outlook.com" className="block text-xs font-bold text-[#203A30] hover:text-[#C8A97E] transition-colors mt-0.5">
                    zenauratrading@outlook.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Button: Matching Brand Theme (#203A30 Deep Forest Green, White Text, Gold Icon) */}
            <div className="pt-4 border-t border-[#203A30]/10">
              <a
                href="https://maps.google.com/?q=Amber+Gem+Tower+Ajman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#203A30] text-white hover:bg-[#2D4F42] transition-colors duration-300 shadow-md text-xs font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2.5 group"
              >
                <Navigation className="w-4 h-4 text-[#C8A97E] group-hover:scale-110 transition-transform" />
                <span>Get Driving Directions to Amber Gem Tower</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-[#203A30]/20 shadow-xl flex flex-col min-h-[420px] relative overflow-hidden">
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-[#203A30]/10 flex-1">
              <iframe
                title="Zenaura Amber Gem Tower Ajman Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.79555627252!2d55.448555876077395!3d25.378170224982637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f575cbef64121%3A0x6b1076b1fb0a7199!2sAmber%20Gem%20Tower!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                className="w-full h-full border-0 filter contrast-125 opacity-95"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#203A30]/20 shadow-xl max-w-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                  <span className="text-xs font-bold text-[#203A30]">26th Floor Executive Suite</span>
                </div>
                <p className="text-[10px] text-[#2D3748] font-medium">Amber Gem Tower, Ajman Waterfront District</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
