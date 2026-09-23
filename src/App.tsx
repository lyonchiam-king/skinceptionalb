import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesGrid } from './components/ServicesGrid';
import { TreatmentFinder } from './components/TreatmentFinder';
import { RafiaStory } from './components/RafiaStory';
import { ProofSection } from './components/ProofSection';
import { InstagramFeed } from './components/InstagramFeed';
import { LocationHours } from './components/LocationHours';
import { BookingModal } from './components/BookingModal';
import { SpreadsheetDrawer } from './components/SpreadsheetDrawer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { Footer } from './components/Footer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [spreadsheetDrawerOpen, setSpreadsheetDrawerOpen] = useState(false);
  
  const [selectedServiceId, setSelectedServiceId] = useState<string>('hydrafacial');
  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setBookingModalOpen(true);
  };

  const handleCompleteFinder = (recommendedServiceId: string, goal: string) => {
    setSelectedServiceId(recommendedServiceId);
    setSelectedGoal(goal);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F5] text-[#2C2C2C] pb-16 sm:pb-0">
      
      {/* Top Bar Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenSpreadsheet={() => setSpreadsheetDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Services Card Grid */}
        <ServicesGrid onSelectServiceForBooking={handleOpenBooking} />

        {/* 4. Interactive Treatment Finder */}
        <TreatmentFinder onCompleteFinder={handleCompleteFinder} />

        {/* 5. The Rafia Difference */}
        <RafiaStory />

        {/* 6. Proof Section */}
        <ProofSection />

        {/* 7. Instagram Feed */}
        <InstagramFeed />

        {/* 8. Location & Opening Hours */}
        <LocationHours />
      </main>

      {/* Footer */}
      <Footer onOpenSpreadsheet={() => setSpreadsheetDrawerOpen(true)} />

      {/* Floating Bottom Bar on Mobile */}
      <FloatingMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedServiceId={selectedServiceId}
        preselectedGoal={selectedGoal}
      />

      {/* Owner Spreadsheet Viewer Drawer */}
      <SpreadsheetDrawer
        isOpen={spreadsheetDrawerOpen}
        onClose={() => setSpreadsheetDrawerOpen(false)}
      />

    </div>
  );
}
