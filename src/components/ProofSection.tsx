import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const ProofSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const reviews = [
    {
      quote: "Rafia is so gentle! My skin felt completely hydrated and glowing straight after the Hydrafacial. No redness at all.",
      author: "Local Chorlton Client",
      tag: "Hydrafacial Glow"
    },
    {
      quote: "The most relaxing facial I've ever had in Manchester. Rafia pays attention to every detail and her massage technique is amazing.",
      author: "Barlow Moor Rd Visitor",
      tag: "Custom Facial & Massage"
    },
    {
      quote: "So glad to have a professional, spotless ladies-only salon right on Barlow Moor Road. Booking online was effortless.",
      author: "Verified Customer",
      tag: "Ladies Only Sanctuary"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#2C2C2C]/5">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Verified Proof Banner */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4A5A5]/15 text-[#C08B8B] rounded-full text-xs font-bold uppercase tracking-wider">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Verified Customer Proof</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Why Women in Chorlton Trust Rafia
          </h2>
        </div>

        {/* 3 Proof Pillar Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="p-5 bg-[#F9F7F5] rounded-lg border border-[#2C2C2C]/5 space-y-2">
            <div className="flex justify-center text-[#D4A5A5]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h3 className="text-sm font-bold text-[#2C2C2C]">
              Praised for gentle technique
            </h3>
            <p className="text-xs text-[#2C2C2C]/70">
              Painless extractions and soothing touch tailored for delicate skin.
            </p>
          </div>

          <div className="p-5 bg-[#F9F7F5] rounded-lg border border-[#2C2C2C]/5 space-y-2">
            <div className="flex justify-center text-[#D4A5A5]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h3 className="text-sm font-bold text-[#2C2C2C]">
              Immediate hydration and glow
            </h3>
            <p className="text-xs text-[#2C2C2C]/70">
              Medical-grade serum infusion leaving skin plump, dewy, and radiant.
            </p>
          </div>

          <div className="p-5 bg-[#F9F7F5] rounded-lg border border-[#2C2C2C]/5 space-y-2">
            <div className="flex justify-center text-[#D4A5A5]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <h3 className="text-sm font-bold text-[#2C2C2C]">
              Professional ladies salon
            </h3>
            <p className="text-xs text-[#2C2C2C]/70">
              Private, hygienic, and welcoming environment on Barlow Moor Road.
            </p>
          </div>
        </div>

        {/* Customer Review Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="bg-[#F9F7F5] p-6 rounded-lg border border-[#2C2C2C]/5 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-[#D4A5A5]" />
                <p className="text-xs sm:text-sm text-[#2C2C2C]/85 italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#2C2C2C]/5 flex items-center justify-between text-xs">
                <span className="font-bold text-[#2C2C2C]">{rev.author}</span>
                <span className="text-[#C08B8B] font-medium text-[11px] bg-white px-2 py-0.5 rounded border border-[#2C2C2C]/5">
                  {rev.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
