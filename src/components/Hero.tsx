import React from 'react';
import { Calendar, ChevronRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full bg-[#2C2C2C] text-white overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_salon_barlow_moor_1790164801098.jpg"
          alt="Skinceptional beautique salon interior on Barlow Moor Road Manchester"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim overlay for maximum WCAG text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
      </div>

      {/* Hero Content Container - Max-width 1000px */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-20 sm:py-28 lg:py-32 flex flex-col justify-center min-h-[480px]">
        <div className="max-w-2xl space-y-6">
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-md text-xs font-medium tracking-wide text-white/90 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4A5A5]" />
            <span>Chorlton, Manchester M21</span>
          </div>

          {/* Headline - Exact required copy */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] text-balance">
            Professional facials and Hydrafacials on Barlow Moor Road.
          </h1>

          {/* Subcopy - Exact required copy */}
          <p className="text-base sm:text-lg text-white/90 font-normal leading-[1.6] max-w-xl">
            Skip the DMs. View our menu and book your slot online in under a minute.
          </p>

          {/* Primary CTA - Exact required text & micro-interaction (scale 0.98 on press) */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 bg-[#D4A5A5] hover:bg-[#C08B8B] text-white font-bold text-sm tracking-wider uppercase rounded-md shadow-lg transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Appointment</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#services"
              className="text-xs font-semibold uppercase tracking-wider text-white/80 hover:text-white underline underline-offset-4 transition-colors py-2"
            >
              View Service Menu
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
