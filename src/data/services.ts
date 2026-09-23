import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'hydrafacial',
    name: 'Hydrafacial',
    tagline: 'Deep clean, Instant glow',
    tags: ['Deep clean', 'Instant glow'],
    duration: '60 mins',
    priceGuide: 'From £65',
    description: 'Medical-grade hydro-dermabrasion deep pore cleansing, painless blackhead extraction, and intense anti-oxidant peptide serum infusion for immediate glass skin glow.',
    image: '/src/assets/images/service_hydrafacial_treatment_1790164823583.jpg',
    steps: [
      {
        title: '1. Cleanse & Peel',
        description: 'Uncovers a fresh layer of skin with gentle exfoliation and relaxing resurfacing.'
      },
      {
        title: '2. Extract & Hydrate',
        description: 'Painless suction removes debris from pores followed by deep nourishment with intense moisturiser.'
      },
      {
        title: '3. Fuse & Protect',
        description: 'Saturates the skin surface with antioxidants and peptides to maximise your glow.'
      }
    ]
  },
  {
    id: 'custom-facial',
    name: 'Custom Facial',
    tagline: 'Gentle, Hydrating',
    tags: ['Gentle', 'Hydrating'],
    duration: '45 mins',
    priceGuide: 'From £45',
    description: 'Tailored botanical skincare treatment specifically formulated by Rafia for your unique skin barrier, focusing on gentle hydration, soothing irritation, and natural radiance.',
    image: '/src/assets/images/service_custom_facial_1790164840333.jpg',
    steps: [
      {
        title: '1. Double Cleanse',
        description: 'Gentle oil and botanical milk cleansing to dissolve impurities while respecting skin barrier.'
      },
      {
        title: '2. Tailored Exfoliation',
        description: 'Enzyme treatment to dissolve dead skin cells without harsh scrubbing or irritation.'
      },
      {
        title: '3. Hydrating Serum Mask',
        description: 'Soothing mask applied with fan brush followed by relaxing facial acupressure drainage.'
      }
    ]
  },
  {
    id: 'relaxation-massage',
    name: 'Relaxation Massage',
    tagline: 'Stress relief, Meticulous',
    tags: ['Stress relief', 'Meticulous'],
    duration: '60 mins',
    priceGuide: 'From £50',
    description: 'Deeply relaxing ladies-only body massage focusing on shoulder, neck, and back tension. Crafted with gentle precision and soothing aromatherapy oils in a peaceful sanctuary.',
    image: '/src/assets/images/service_relaxation_massage_1790164856714.jpg',
    steps: [
      {
        title: '1. Aromatherapy Consultation',
        description: 'Selecting custom calming essential oils suited to your stress relief preference.'
      },
      {
        title: '2. Deep Tension Release',
        description: 'Meticulous pressure technique easing stubborn knot tightness around shoulders and upper back.'
      },
      {
        title: '3. Soothing Calming Finish',
        description: 'Gentle long gliding strokes to leave you thoroughly refreshed and unburdened.'
      }
    ]
  }
];
