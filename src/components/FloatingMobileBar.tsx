import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past ~250px (past hero)
      if (window.scrollY > 250) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 shadow-2xl pb-[calc(12px+env(safe-area-inset-bottom))]"
        >
          <div className="flex items-center gap-3 max-w-md mx-auto">
            {/* Call button */}
            <a
              href="tel:+447464760908"
              className="flex-1 py-3 bg-white hover:bg-[#FAF2F2] text-[#2C2C2C] text-xs font-bold uppercase tracking-wider rounded-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 border border-[#2C2C2C]/10 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#D4A5A5]" />
              <span className="tabular-nums">Call</span>
            </a>

            {/* Book button */}
            <button
              onClick={onOpenBooking}
              className="flex-1 py-3 bg-[#D4A5A5] hover:bg-[#C08B8B] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
