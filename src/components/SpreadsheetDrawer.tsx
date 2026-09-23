import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Table, Download, RefreshCw, X, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { BookingRecord } from '../types';

interface SpreadsheetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpreadsheetDrawer: React.FC<SpreadsheetDrawerProps> = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();

  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setBookings(data.bookings || []);
      }
    } catch (err) {
      console.error('Failed to load spreadsheet data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchBookings();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-hidden">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col border border-[#2C2C2C]/10"
      >
        {/* Header */}
        <div className="bg-[#2C2C2C] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-[#D4A5A5]" />
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Skinceptional Beautique — Appointment Log Spreadsheet
              </h3>
              <p className="text-xs text-white/70">
                Live spreadsheet connector for Rafia • Automatically updated per enquiry
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/api/bookings/download-csv"
              target="_blank"
              download="skinceptional_bookings.csv"
              className="px-3 py-1.5 bg-[#D4A5A5] hover:bg-[#C08B8B] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5"
              title="Download CSV for Excel / Google Sheets"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CSV</span>
            </a>

            <button
              onClick={fetchBookings}
              className="p-2 hover:bg-white/10 text-white rounded transition-colors"
              title="Refresh spreadsheet"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 text-white rounded transition-colors"
              aria-label="Close spreadsheet drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Spreadsheet Table View */}
        <div className="p-6 overflow-auto flex-1 bg-[#F9F7F5]">
          {bookings.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <Table className="w-8 h-8 text-[#D4A5A5] mx-auto" />
              <p className="text-sm font-semibold text-[#2C2C2C]">No enquiries in spreadsheet yet</p>
              <p className="text-xs text-[#2C2C2C]/60">When customers submit an enquiry, it appears here immediately with a timestamp.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-[#2C2C2C]/10 bg-white shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#2C2C2C] text-white font-bold uppercase tracking-wider text-[11px]">
                    <th className="p-3 border-b border-white/10">Timestamp</th>
                    <th className="p-3 border-b border-white/10">Ref ID</th>
                    <th className="p-3 border-b border-white/10">Customer Name</th>
                    <th className="p-3 border-b border-white/10">Phone Number</th>
                    <th className="p-3 border-b border-white/10">Service</th>
                    <th className="p-3 border-b border-white/10">Date & Time</th>
                    <th className="p-3 border-b border-white/10">Goal / Notes</th>
                    <th className="p-3 border-b border-white/10">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2C2C2C]/5 font-sans">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-[#FAF2F2] transition-colors">
                      <td className="p-3 whitespace-nowrap text-[#2C2C2C]/70 tabular-nums font-mono text-[11px]">
                        {b.timestamp}
                      </td>
                      <td className="p-3 whitespace-nowrap font-bold text-[#2C2C2C] font-mono">
                        {b.id}
                      </td>
                      <td className="p-3 font-semibold text-[#2C2C2C]">
                        {b.name}
                      </td>
                      <td className="p-3 whitespace-nowrap text-[#2C2C2C] tabular-nums font-mono font-medium">
                        <a href={`tel:${b.phone}`} className="hover:text-[#C08B8B]">
                          {b.phone}
                        </a>
                      </td>
                      <td className="p-3 text-[#2C2C2C] font-medium">
                        <span className="bg-[#D4A5A5]/15 text-[#C08B8B] px-2 py-0.5 rounded font-bold">
                          {b.service}
                        </span>
                      </td>
                      <td className="p-3 whitespace-nowrap text-[#2C2C2C]/80 tabular-nums">
                        {b.date} ({b.time})
                      </td>
                      <td className="p-3 text-[#2C2C2C]/70 max-w-xs truncate">
                        {b.notes || b.goal || 'None'}
                      </td>
                      <td className="p-3 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Logged</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#2C2C2C]/10 flex items-center justify-between text-xs text-[#2C2C2C]/70 shrink-0">
          <span>Total Rows: <strong className="tabular-nums">{bookings.length}</strong></span>
          <a
            href="/api/bookings/download-csv"
            target="_blank"
            download="skinceptional_bookings.csv"
            className="text-[#C08B8B] hover:underline font-bold"
          >
            Open in Excel or Google Sheets →
          </a>
        </div>

      </motion.div>
    </div>
  );
};
