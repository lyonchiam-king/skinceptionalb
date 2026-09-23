import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, RotateCcw, Clock, Target, Wallet } from 'lucide-react';
import { TreatmentFinderState } from '../types';

interface TreatmentFinderProps {
  onCompleteFinder: (recommendedServiceId: string, goal: string) => void;
}

export const TreatmentFinder: React.FC<TreatmentFinderProps> = ({ onCompleteFinder }) => {
  const shouldReduceMotion = useReducedMotion();

  const [step, setStep] = useState<number>(1);
  const [state, setState] = useState<TreatmentFinderState>({
    goal: '',
    time: '',
    budget: ''
  });

  const goals = [
    {
      id: 'deep-clean',
      title: 'Deep Pore Cleanse & Instant Glow',
      desc: 'Target blackheads, congested pores & dull texture for an immediate glass skin glow.',
      targetService: 'hydrafacial'
    },
    {
      id: 'gentle-hydrate',
      title: 'Gentle Barrier Hydration & Soothing',
      desc: 'Calm sensitive skin, restore moisture balance and smooth dry patches gently.',
      targetService: 'custom-facial'
    },
    {
      id: 'stress-relief',
      title: 'Stress Relief & Neck/Shoulder Tension',
      desc: 'Unwind persistent muscle knots and shoulder tightness in a quiet ladies sanctuary.',
      targetService: 'relaxation-massage'
    }
  ];

  const timeOptions = [
    { id: '30-45', label: '30 - 45 Mins', detail: 'Mid-errand refresh' },
    { id: '60', label: '60 Mins', detail: 'Full meticulous treatment' },
    { id: '90', label: '90 Mins', detail: 'Deluxe relaxation session' }
  ];

  const budgetOptions = [
    { id: 'standard', label: 'Essential Refresh (£45 - £50)', detail: 'Botanical custom care' },
    { id: 'premium', label: 'Hydrafacial Medical Grade (£65+)', detail: 'Maximum instant results' }
  ];

  // Determine recommended service based on user selections
  const getRecommendation = () => {
    if (state.goal === 'stress-relief') {
      return {
        id: 'relaxation-massage',
        name: 'Relaxation Massage',
        reason: 'Perfect match for relieving deep shoulder tension and stress within your time preference.',
        image: '/src/assets/images/service_relaxation_massage_1790164856714.jpg',
        price: 'From £50',
        duration: '60 mins'
      };
    }
    if (state.goal === 'gentle-hydrate' || state.budget === 'standard') {
      return {
        id: 'custom-facial',
        name: 'Custom Facial',
        reason: 'Ideal gentle tailored treatment formulated specifically for soothing skin barrier and deep hydration.',
        image: '/src/assets/images/service_custom_facial_1790164840333.jpg',
        price: 'From £45',
        duration: '45 mins'
      };
    }
    return {
      id: 'hydrafacial',
      name: 'Hydrafacial',
      reason: 'Our flagship medical-grade treatment for deep pore extraction and immediate glass skin radiance.',
      image: '/src/assets/images/service_hydrafacial_treatment_1790164823583.jpg',
      price: 'From £65',
      duration: '60 mins'
    };
  };

  const handleGoalSelect = (goalId: string) => {
    setState({ ...state, goal: goalId });
    setStep(2);
  };

  const handleTimeSelect = (timeId: string) => {
    setState({ ...state, time: timeId });
    setStep(3);
  };

  const handleBudgetSelect = (budgetId: string) => {
    setState({ ...state, budget: budgetId });
    setStep(4); // Recommendation step
  };

  const handleReset = () => {
    setStep(1);
    setState({ goal: '', time: '', budget: '' });
  };

  const selectedGoalObj = goals.find(g => g.id === state.goal);
  const selectedTimeObj = timeOptions.find(t => t.id === state.time);
  const selectedBudgetObj = budgetOptions.find(b => b.id === state.budget);
  const recommendation = getRecommendation();

  return (
    <section id="treatment-finder" className="py-16 sm:py-24 bg-white border-y border-[#2C2C2C]/5">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="max-w-2xl mx-auto bg-[#F9F7F5] rounded-xl p-6 sm:p-10 shadow-card border border-[#2C2C2C]/5 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4A5A5]/15 text-[#C08B8B] rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Treatment Finder
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
              Find Your Perfect Treatment
            </h2>
            <p className="text-xs sm:text-sm text-[#2C2C2C]/70">
              Answer 3 quick taps to find what Rafia recommends for your skin today.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between max-w-xs mx-auto text-xs font-bold text-[#2C2C2C]/60">
            <span className={step >= 1 ? 'text-[#C08B8B]' : ''}>1. Goal</span>
            <span className="text-[#2C2C2C]/20">•</span>
            <span className={step >= 2 ? 'text-[#C08B8B]' : ''}>2. Time</span>
            <span className="text-[#2C2C2C]/20">•</span>
            <span className={step >= 3 ? 'text-[#C08B8B]' : ''}>3. Budget</span>
            <span className="text-[#2C2C2C]/20">•</span>
            <span className={step === 4 ? 'text-[#C08B8B]' : ''}>Result</span>
          </div>

          {/* Summary Badges of Selected Options So Far */}
          {(state.goal || state.time || state.budget) && (
            <div className="flex flex-wrap items-center justify-center gap-2 p-3 bg-white rounded-lg border border-[#2C2C2C]/5 text-xs text-[#2C2C2C]/80">
              <span className="font-semibold text-[#2C2C2C]">Selected:</span>
              {selectedGoalObj && (
                <span className="bg-[#D4A5A5]/15 text-[#C08B8B] px-2.5 py-0.5 rounded-md font-medium">
                  {selectedGoalObj.title}
                </span>
              )}
              {selectedTimeObj && (
                <span className="bg-[#D4A5A5]/15 text-[#C08B8B] px-2.5 py-0.5 rounded-md font-medium">
                  {selectedTimeObj.label}
                </span>
              )}
              {selectedBudgetObj && (
                <span className="bg-[#D4A5A5]/15 text-[#C08B8B] px-2.5 py-0.5 rounded-md font-medium">
                  {selectedBudgetObj.label}
                </span>
              )}
            </div>
          )}

          {/* Step 1: Skin / Care Goal */}
          {step === 1 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#2C2C2C] flex items-center gap-2">
                <Target className="w-4 h-4 text-[#D4A5A5]" />
                Step 1: What is your main treatment goal?
              </h3>
              <div className="space-y-3">
                {goals.map(g => (
                  <button
                    key={g.id}
                    onClick={() => handleGoalSelect(g.id)}
                    className="w-full text-left p-4 bg-white hover:bg-[#FAF2F2] rounded-lg border border-[#2C2C2C]/5 hover:border-[#D4A5A5] transition-all cursor-pointer flex items-center justify-between group active:scale-[0.99]"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#C08B8B]">
                        {g.title}
                      </p>
                      <p className="text-xs text-[#2C2C2C]/70">
                        {g.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4A5A5] shrink-0 group-hover:translate-x-1 transition-transform ml-2" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Time Available */}
          {step === 2 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#2C2C2C] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4A5A5]" />
                Step 2: How much time do you have?
              </h3>
              <div className="space-y-3">
                {timeOptions.map(t => (
                  <button
                    key={t.id}
                    onClick={() => handleTimeSelect(t.id)}
                    className="w-full text-left p-4 bg-white hover:bg-[#FAF2F2] rounded-lg border border-[#2C2C2C]/5 hover:border-[#D4A5A5] transition-all cursor-pointer flex items-center justify-between group active:scale-[0.99]"
                  >
                    <div>
                      <p className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#C08B8B] tabular-nums">
                        {t.label}
                      </p>
                      <p className="text-xs text-[#2C2C2C]/70">
                        {t.detail}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4A5A5] shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Preferred Budget */}
          {step === 3 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#2C2C2C] flex items-center gap-2">
                <Wallet className="w-4 h-4 text-[#D4A5A5]" />
                Step 3: Preferred budget?
              </h3>
              <div className="space-y-3">
                {budgetOptions.map(b => (
                  <button
                    key={b.id}
                    onClick={() => handleBudgetSelect(b.id)}
                    className="w-full text-left p-4 bg-white hover:bg-[#FAF2F2] rounded-lg border border-[#2C2C2C]/5 hover:border-[#D4A5A5] transition-all cursor-pointer flex items-center justify-between group active:scale-[0.99]"
                  >
                    <div>
                      <p className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#C08B8B] tabular-nums">
                        {b.label}
                      </p>
                      <p className="text-xs text-[#2C2C2C]/70">
                        {b.detail}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4A5A5] shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Result / Recommendation */}
          {step === 4 && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg p-6 border border-[#D4A5A5]/30 space-y-4 shadow-sm">
                <div className="flex items-center justify-between text-xs font-bold text-[#C08B8B] uppercase tracking-wider">
                  <span>Rafia's Recommendation</span>
                  <span className="tabular-nums">{recommendation.price}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <img
                    src={recommendation.image}
                    alt={recommendation.name}
                    className="w-full sm:w-28 h-28 object-cover rounded-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1.5 text-center sm:text-left">
                    <h3 className="font-serif text-xl font-bold text-[#2C2C2C]">
                      {recommendation.name}
                    </h3>
                    <p className="text-xs text-[#2C2C2C]/80 leading-relaxed">
                      {recommendation.reason}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Hand-off to Booking */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onCompleteFinder(recommendation.id, selectedGoalObj?.title || '')}
                  className="w-full py-3.5 bg-[#D4A5A5] hover:bg-[#C08B8B] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Book {recommendation.name} With My Selections</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-3 bg-white hover:bg-[#FAF2F2] text-[#2C2C2C] text-xs font-semibold rounded-md border border-[#2C2C2C]/10 transition-colors flex items-center justify-center gap-1.5 shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#2C2C2C]/60" />
                  <span>Start Over</span>
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
