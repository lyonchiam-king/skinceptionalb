import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SERVICES } from '../data/services';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, Send, Sparkles, AlertCircle } from 'lucide-react';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  preselectedGoal?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  preselectedGoal
}) => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: preselectedServiceId || 'hydrafacial',
    date: '',
    time: '',
    goal: preselectedGoal || '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData(prev => ({ ...prev, service: preselectedServiceId }));
    }
    if (preselectedGoal) {
      setFormData(prev => ({ ...prev, goal: preselectedGoal }));
    }
  }, [preselectedServiceId, preselectedGoal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const selectedServiceObj = SERVICES.find(s => s.id === formData.service);
      const serviceName = selectedServiceObj ? selectedServiceObj.name : formData.service;

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: serviceName
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setBookingRef(data.booking.id);
      } else {
        setErrorMsg(data.error || 'Failed to record booking. Please try WhatsApp directly.');
      }
    } catch (_err) {
      setErrorMsg('Network error. You can click the WhatsApp button below to chat with Rafia directly!');
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Rafia, I'd like to book a ${
      SERVICES.find(s => s.id === formData.service)?.name || 'facial'
    } appointment at Skinceptional beautique (Barlow Moor Rd). My name is ${formData.name || 'a customer'}.`
  );

  const whatsappUrl = `https://wa.me/447464760908?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden my-8 border border-[#2C2C2C]/5"
      >
        {/* Header */}
        <div className="bg-[#F9F7F5] px-6 py-5 border-b border-[#2C2C2C]/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4A5A5] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Booking & Enquiry
            </span>
            <h3 className="font-serif text-xl font-bold text-[#2C2C2C]">
              Book Your Appointment
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#2C2C2C]/60 hover:text-[#2C2C2C] hover:bg-white rounded-full transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {success ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#D4A5A5]/20 text-[#C08B8B] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl font-bold text-[#2C2C2C]">
                  Booking Enquiry Logged!
                </h4>
                <p className="text-xs text-[#2C2C2C]/60">
                  Ref Number: <span className="font-bold text-[#2C2C2C]">{bookingRef}</span>
                </p>
                <p className="text-sm text-[#2C2C2C]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold">{formData.name}</span>! Your request for <span className="font-bold">{SERVICES.find(s => s.id === formData.service)?.name}</span> has been logged to Rafia's appointment spreadsheet.
                </p>
              </div>

              <div className="p-4 bg-[#F9F7F5] rounded-lg border border-[#2C2C2C]/5 text-xs text-[#2C2C2C]/70 space-y-2 text-left">
                <p className="font-bold text-[#2C2C2C]">Want instant confirmation on WhatsApp?</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Rafia On WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#2C2C2C] text-white text-xs font-bold uppercase tracking-wider rounded-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Error Banner */}
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-md flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2C] mb-1.5">
                  Select Treatment *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F9F7F5] border border-[#2C2C2C]/10 rounded-md text-sm text-[#2C2C2C] font-medium focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none"
                  required
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} • {s.priceGuide})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2C] mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#D4A5A5]" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7F5] border border-[#2C2C2C]/10 rounded-md text-sm text-[#2C2C2C] focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2C] mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#D4A5A5]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="07123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7F5] border border-[#2C2C2C]/10 rounded-md text-sm text-[#2C2C2C] focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none tabular-nums"
                  />
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2C] mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D4A5A5]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7F5] border border-[#2C2C2C]/10 rounded-md text-sm text-[#2C2C2C] focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2C] mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4A5A5]" />
                    <span>Preferred Time</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Morning / 2:00 PM"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F9F7F5] border border-[#2C2C2C]/10 rounded-md text-sm text-[#2C2C2C] focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none"
                  />
                </div>
              </div>

              {/* Goal or Special Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C2C2C] mb-1.5">
                  Skin Goal or Notes for Rafia
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitive skin, blackhead congestion around nose..."
                  value={formData.notes || formData.goal}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F9F7F5] border border-[#2C2C2C]/10 rounded-md text-sm text-[#2C2C2C] focus:ring-2 focus:ring-[#D4A5A5] focus:outline-none"
                />
              </div>

              {/* Form Action Buttons & WhatsApp Link */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-[#D4A5A5] hover:bg-[#C08B8B] text-white font-bold text-xs uppercase tracking-wider rounded-md shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Logging to Spreadsheet...' : 'Submit Booking Request'}</span>
                </button>

                {/* WhatsApp Click to Chat next to form */}
                <div className="flex items-center justify-between p-3 bg-[#F9F7F5] rounded-md border border-[#2C2C2C]/5 text-xs">
                  <span className="text-[#2C2C2C]/70 font-medium">Prefer to message directly?</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[11px] uppercase tracking-wider rounded transition-colors flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Rafia</span>
                  </a>
                </div>
              </div>

            </form>
          )}

        </div>
      </motion.div>
    </div>
  );
};
