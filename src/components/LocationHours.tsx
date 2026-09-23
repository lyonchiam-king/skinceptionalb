import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=261+Barlow+Moor+Rd,+Manchester+M21+7GJ,+UK";

  return (
    <section id="location-hours" className="py-16 sm:py-24 bg-white border-y border-[#2C2C2C]/5">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A5A5]">
            Visit Skinceptional Beautique
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Location & Opening Hours
          </h2>
          <p className="text-xs sm:text-sm text-[#2C2C2C]/70">
            Conveniently located on Barlow Moor Road in Chorlton, Manchester.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Details Column */}
          <div className="bg-[#F9F7F5] p-6 sm:p-8 rounded-xl border border-[#2C2C2C]/5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg border border-[#2C2C2C]/5 text-[#D4A5A5] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#2C2C2C]">
                    Salon Address
                  </h3>
                  <p className="text-sm font-semibold text-[#2C2C2C]">
                    261 Barlow Moor Rd, Manchester M21 7GJ, UK
                  </p>
                  <p className="text-xs text-[#2C2C2C]/60">
                    Chorlton area • Free local street parking available
                  </p>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg border border-[#2C2C2C]/5 text-[#D4A5A5] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#2C2C2C]">
                    Telephone & Enquiries
                  </h3>
                  <a
                    href="tel:+447464760908"
                    className="text-sm font-bold text-[#2C2C2C] hover:text-[#C08B8B] transition-colors tabular-nums block"
                  >
                    +44 7464 760908
                  </a>
                  <p className="text-xs text-[#2C2C2C]/60">
                    Direct call or WhatsApp enquiries welcome
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg border border-[#2C2C2C]/5 text-[#D4A5A5] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#2C2C2C]">
                    Opening Hours
                  </h3>
                  <p className="text-sm font-semibold text-[#2C2C2C] tabular-nums">
                    [TO CONFIRM] Hours
                  </p>
                  <p className="text-xs text-[#2C2C2C]/60">
                    By appointment online or telephone booking
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps Link Button */}
            <div className="pt-4 border-t border-[#2C2C2C]/10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#2C2C2C] hover:bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#D4A5A5]" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Preview Card */}
          <div className="relative rounded-xl overflow-hidden shadow-card border border-[#2C2C2C]/5 min-h-[300px] flex flex-col justify-between bg-[#2C2C2C]">
            <img
              src="/src/assets/images/hero_salon_barlow_moor_1790164801098.jpg"
              alt="Map view of Barlow Moor Road Manchester"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative z-10 p-6 bg-gradient-to-b from-black/80 to-transparent text-white space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#D4A5A5] text-white rounded text-[11px] font-bold uppercase">
                Chorlton Salon
              </div>
              <h3 className="font-serif text-lg font-bold">
                Skinceptional beautique
              </h3>
              <p className="text-xs text-white/80">
                261 Barlow Moor Rd, Manchester M21 7GJ
              </p>
            </div>

            <div className="relative z-10 p-6 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-between text-white">
              <div className="text-xs space-y-0.5">
                <p className="font-semibold text-[#D4A5A5]">Ladies Only Salon</p>
                <p className="text-white/70">Barlow Moor Road • Manchester</p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-[#2C2C2C] hover:bg-[#FAF2F2] rounded-full shadow-lg transition-transform hover:scale-105"
                title="Get Directions"
              >
                <ExternalLink className="w-5 h-5 text-[#C08B8B]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
