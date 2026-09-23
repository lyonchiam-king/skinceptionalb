import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Sparkles, Shield, Award } from 'lucide-react';

export const RafiaStory: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="rafia-story" className="py-16 sm:py-24 bg-[#F9F7F5] overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Photo Column - Rafia at work / Portrait */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-lg overflow-hidden shadow-card border border-[#2C2C2C]/5">
              <img
                src="/src/assets/images/rafia_skinceptional_portrait_1790164868049.jpg"
                alt="Rafia expert aesthetician at Skinceptional beautique"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Accent badge floating card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 rounded-lg shadow-card border border-[#2C2C2C]/5 max-w-[220px] space-y-1">
              <div className="flex items-center gap-1.5 text-[#C08B8B] text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Meticulous Care</span>
              </div>
              <p className="text-xs text-[#2C2C2C]/75 leading-tight">
                Every treatment tailored to your skin's delicate barrier.
              </p>
            </div>
          </motion.div>

          {/* Text Story Column */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A5A5]">
                The Rafia Difference
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C2C2C] leading-tight">
                Gentle technique, visible glow, and a peaceful ladies-only sanctuary.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#2C2C2C]/80 leading-relaxed">
              At Skinceptional beautique on Barlow Moor Road, skincare isn't rushed. Rafia brings a meticulous, gentle touch to every facial and Hydrafacial—taking the time to understand your skin barrier before applying custom treatments.
            </p>

            <p className="text-sm text-[#2C2C2C]/75 leading-relaxed">
              Clients across Chorlton and Manchester consistently praise Rafia for painless extractions, deeply relaxing pressure technique, and the immediate, long-lasting hydration after every session.
            </p>

            {/* Verified highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#2C2C2C]/90">
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-md border border-[#2C2C2C]/5">
                <Heart className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                <span>Praised for gentle technique</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-md border border-[#2C2C2C]/5">
                <Sparkles className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                <span>Immediate hydration & glow</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-md border border-[#2C2C2C]/5">
                <Shield className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                <span>Private ladies-only salon</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 bg-white rounded-md border border-[#2C2C2C]/5">
                <Award className="w-4 h-4 text-[#D4A5A5] shrink-0" />
                <span>Barlow Moor Rd Chorlton</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
