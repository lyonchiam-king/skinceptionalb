import React, { useState } from 'react';
import { Phone, Calendar, Table, Instagram, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenSpreadsheet: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenSpreadsheet }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F9F7F5]/95 backdrop-blur-md border-b border-[#2C2C2C]/5 transition-all">
      <div className="max-w-[1000px] mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand title (single text element wordmark) */}
        <a 
          href="#" 
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C2C2C] hover:text-[#C08B8B] transition-colors"
        >
          Skinceptional beautique
        </a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C2C2C]/80">
          <a href="#services" className="hover:text-[#C08B8B] transition-colors">
            Services
          </a>
          <a href="#treatment-finder" className="hover:text-[#C08B8B] transition-colors">
            Treatment Finder
          </a>
          <a href="#rafia-story" className="hover:text-[#C08B8B] transition-colors">
            The Rafia Difference
          </a>
          <a href="#location-hours" className="hover:text-[#C08B8B] transition-colors">
            Location & Hours
          </a>
        </nav>

        {/* Zone 3: Primary actions & Phone */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://www.instagram.com/skinceptionalbeautique"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#2C2C2C]/70 hover:text-[#C08B8B] transition-colors"
            title="Follow @skinceptionalbeautique on Instagram"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="tel:+447464760908"
            className="flex items-center gap-2 text-xs font-bold text-[#2C2C2C] hover:text-[#C08B8B] transition-colors tracking-wide uppercase px-3 py-1.5 rounded-md hover:bg-[#D4A5A5]/10"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4A5A5]" />
            <span className="tabular-nums">+44 7464 760908</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="px-4 py-2 bg-[#D4A5A5] hover:bg-[#C08B8B] text-white text-xs font-bold tracking-wider uppercase rounded-md shadow-sm transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#D4A5A5] focus-visible:ring-offset-2"
          >
            Book Appointment
          </button>

          <button
            onClick={onOpenSpreadsheet}
            className="p-2 text-[#2C2C2C]/60 hover:text-[#2C2C2C] hover:bg-white rounded-md transition-all text-xs flex items-center gap-1 border border-[#2C2C2C]/10"
            title="Owner Log Spreadsheet"
            aria-label="Owner Bookings Spreadsheet"
          >
            <Table className="w-4 h-4 text-[#D4A5A5]" />
            <span className="hidden lg:inline text-[11px] font-semibold text-[#2C2C2C]/70">Spreadsheet</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSpreadsheet}
            className="p-2 text-[#2C2C2C]/70 hover:text-[#2C2C2C]"
            title="Owner Log"
          >
            <Table className="w-5 h-5 text-[#D4A5A5]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C2C2C]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F9F7F5] border-b border-[#2C2C2C]/10 px-6 py-4 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#2C2C2C] py-1.5"
          >
            Services
          </a>
          <a
            href="#treatment-finder"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#2C2C2C] py-1.5"
          >
            Treatment Finder
          </a>
          <a
            href="#rafia-story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#2C2C2C] py-1.5"
          >
            The Rafia Difference
          </a>
          <a
            href="#location-hours"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#2C2C2C] py-1.5"
          >
            Location & Hours
          </a>
          <div className="pt-2 border-t border-[#2C2C2C]/10 flex flex-col gap-2">
            <a
              href="tel:+447464760908"
              className="flex items-center gap-2 text-sm font-bold text-[#2C2C2C]"
            >
              <Phone className="w-4 h-4 text-[#D4A5A5]" />
              <span className="tabular-nums">+44 7464 760908</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-[#D4A5A5] text-white text-xs font-bold uppercase tracking-wider rounded-md"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
