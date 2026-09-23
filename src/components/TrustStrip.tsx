import React from 'react';
import { Heart, MapPin, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-white border-y border-[#2C2C2C]/5 py-4 sm:py-5 shadow-sm">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-xs sm:text-sm font-semibold tracking-wide text-[#2C2C2C]/90">
          
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#D4A5A5] shrink-0" />
            <span>Ladies Only</span>
          </div>

          <span className="hidden sm:inline text-[#2C2C2C]/20" aria-hidden="true">•</span>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4A5A5] shrink-0" />
            <span>Barlow Moor Road</span>
          </div>

          <span className="hidden sm:inline text-[#2C2C2C]/20" aria-hidden="true">•</span>

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4A5A5] shrink-0" />
            <span>Hydrafacial Experts</span>
          </div>

        </div>
      </div>
    </section>
  );
};
