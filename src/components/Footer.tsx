import React from 'react';
import { Phone, MapPin, Instagram, Table, Heart } from 'lucide-react';

interface FooterProps {
  onOpenSpreadsheet: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSpreadsheet }) => {
  return (
    <footer className="bg-[#2C2C2C] text-white pt-16 pb-24 sm:pb-16 border-t border-white/10">
      <div className="max-w-[1000px] mx-auto px-6 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
              Skinceptional beautique
            </h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Professional facials, Hydrafacials, and relaxation body care in a peaceful ladies-only salon on Barlow Moor Road, Chorlton M21.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/skinceptionalbeautique"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-[#D4A5A5] text-white rounded-full transition-colors"
                title="Follow @skinceptionalbeautique on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenSpreadsheet}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-medium flex items-center gap-1.5 border border-white/10"
                title="Owner Spreadsheet Log"
              >
                <Table className="w-3.5 h-3.5 text-[#D4A5A5]" />
                <span>Owner Spreadsheet Log</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#D4A5A5]">
              Quick Menu
            </h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Hydrafacial & Facial Menu
                </a>
              </li>
              <li>
                <a href="#treatment-finder" className="hover:text-white transition-colors">
                  Interactive Treatment Finder
                </a>
              </li>
              <li>
                <a href="#rafia-story" className="hover:text-white transition-colors">
                  The Rafia Difference
                </a>
              </li>
              <li>
                <a href="#location-hours" className="hover:text-white transition-colors">
                  Location & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-[#D4A5A5]">
              Salon Location
            </h4>
            <div className="space-y-2 text-white/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4A5A5] shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=261+Barlow+Moor+Rd,+Manchester+M21+7GJ,+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  261 Barlow Moor Rd, Manchester M21 7GJ, UK
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                <a
                  href="tel:+447464760908"
                  className="hover:text-white transition-colors tabular-nums font-bold"
                >
                  +44 7464 760908
                </a>
              </p>

              <p className="text-white/60 pt-1">
                Hours: [TO CONFIRM] Hours
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Skinceptional beautique. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted for Rafia & Chorlton Manchester</span>
            <Heart className="w-3 h-3 text-[#D4A5A5] fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
};
