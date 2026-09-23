import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const posts = [
    {
      id: 'post-1',
      image: '/src/assets/images/service_hydrafacial_treatment_1790164823583.jpg',
      caption: 'Post-Hydrafacial instant glass skin glow ✨ Deep pore cleanse & peptide infusion.',
      likes: '48',
      comments: '6'
    },
    {
      id: 'post-2',
      image: '/src/assets/images/hero_salon_barlow_moor_1790164801098.jpg',
      caption: 'Our peaceful ladies-only salon room on Barlow Moor Road, Chorlton M21 🌿',
      likes: '62',
      comments: '8'
    },
    {
      id: 'post-3',
      image: '/src/assets/images/service_custom_facial_1790164840333.jpg',
      caption: 'Gentle fan brush application of our soothing botanical hydration mask 💧',
      likes: '39',
      comments: '4'
    },
    {
      id: 'post-4',
      image: '/src/assets/images/service_relaxation_massage_1790164856714.jpg',
      caption: 'Relieving neck and shoulder tension with meticulous aromatherapy pressure therapy 💆‍♀️',
      likes: '54',
      comments: '7'
    },
    {
      id: 'post-5',
      image: '/src/assets/images/rafia_skinceptional_portrait_1790164868049.jpg',
      caption: 'Ready to welcome you for your weekly glow boost! Book online in under a minute 🤍',
      likes: '81',
      comments: '12'
    },
    {
      id: 'post-6',
      image: '/src/assets/images/service_hydrafacial_treatment_1790164823583.jpg',
      caption: 'Painless extractions done right. Gentle technique, maximum clarity ✨',
      likes: '43',
      comments: '5'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F9F7F5]">
      <div className="max-w-[1000px] mx-auto px-6 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A5A5]">
              <Instagram className="w-4 h-4 text-[#D4A5A5]" />
              <span>@skinceptionalbeautique</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
              Recent Results & Studio Moments
            </h2>
            <p className="text-xs sm:text-sm text-[#2C2C2C]/70">
              Real treatment results, quiet salon vibes, and client glowing skin photos.
            </p>
          </div>

          <a
            href="https://www.instagram.com/skinceptionalbeautique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] hover:bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm"
          >
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Post Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/skinceptionalbeautique"
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="group relative aspect-square bg-[#2C2C2C] rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay with caption */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white text-xs">
                <p className="line-clamp-4 leading-relaxed font-normal">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] font-bold text-white/90 pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-white text-white" />
                    <span className="tabular-nums">{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{post.comments}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
