import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SERVICES } from '../data/services';
import { Service } from '../types';
import { Clock, Tag, X, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ServicesGridProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F9F7F5]">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 space-y-3 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4A5A5]">
            Meticulous Skin & Body Care
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C2C2C]">
            Our Treatment Menu
          </h2>
          <p className="text-sm sm:text-base text-[#2C2C2C]/70 max-w-xl">
            Tap any treatment below to view step-by-step procedure details and reserve your slot.
          </p>
        </div>

        {/* Card Grid - 3 cards in exact required order */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setSelectedService(service)}
              className="group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all cursor-pointer flex flex-col justify-between border border-[#2C2C2C]/5"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] w-full bg-[#F9F7F5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-[#2C2C2C] tabular-nums shadow-sm">
                  {service.priceGuide}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#2C2C2C]/60">
                    <Clock className="w-3.5 h-3.5 text-[#D4A5A5]" />
                    <span className="tabular-nums">{service.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2C2C2C] group-hover:text-[#C08B8B] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2C2C2C]/75 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Tags as small unboxed badges */}
                <div className="pt-2 border-t border-[#2C2C2C]/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#C08B8B]">
                    {service.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        {i > 0 && <span className="text-[#2C2C2C]/20" aria-hidden="true">•</span>}
                        <span>{tag}</span>
                      </React.Fragment>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-[#2C2C2C] group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    View Steps <ChevronRight className="w-3.5 h-3.5 text-[#D4A5A5]" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Signature Moment: Modal Revealing Treatment Steps */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-48 sm:h-56 w-full bg-[#2C2C2C] shrink-0">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="Close treatment modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D4A5A5]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{selectedService.duration} • {selectedService.priceGuide}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              {/* Modal Content / Treatment Steps */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A5A5] mb-1">
                    About This Treatment
                  </h4>
                  <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Treatment Steps - Mirroring Meticulous Care */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2C2C] mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A5A5]" />
                    <span>Treatment Steps & Technique</span>
                  </h4>
                  <div className="space-y-3 bg-[#F9F7F5] p-4 rounded-lg border border-[#2C2C2C]/5">
                    {selectedService.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <span className="w-5 h-5 rounded-full bg-[#D4A5A5] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <p className="text-xs font-bold text-[#2C2C2C]">
                            {step.title}
                          </p>
                          <p className="text-xs text-[#2C2C2C]/70 mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 bg-[#F9F7F5] border-t border-[#2C2C2C]/10 flex items-center justify-between gap-3 shrink-0">
                <div>
                  <p className="text-xs text-[#2C2C2C]/60">Ready for instant glow?</p>
                  <p className="text-sm font-bold text-[#2C2C2C]">{selectedService.priceGuide}</p>
                </div>

                <button
                  onClick={() => {
                    const id = selectedService.id;
                    setSelectedService(null);
                    onSelectServiceForBooking(id);
                  }}
                  className="px-6 py-3 bg-[#D4A5A5] hover:bg-[#C08B8B] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-sm transition-all active:scale-[0.98]"
                >
                  Book This Treatment
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
