/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsOverheating } from './components/WhatIsOverheating';
import { WhyBeConcerned } from './components/WhyBeConcerned';
import { WarningSigns } from './components/WarningSigns';
import { FoodGuide } from './components/FoodGuide';
import { VisualReferenceGallery } from './components/VisualReferenceGallery';
import { HeatSimulator } from './components/HeatSimulator';
import { SafePractices } from './components/SafePractices';
import { Quiz } from './components/Quiz';
import { SafetyChecklist } from './components/SafetyChecklist';
import { MythVsFact } from './components/MythVsFact';
import { References } from './components/References';
import { Footer } from './components/Footer';
import { LoginPage } from './components/LoginPage';
import { AuthModal } from './components/AuthModal';

function MainApp() {
  const [currentView, setCurrentView] = useState<'main' | 'login'>('main');
  const [authModalOpen, setAuthModalOpen] = useState(false);

  if (currentView === 'login') {
    return (
      <LoginPage 
        onBackToApp={() => setCurrentView('main')} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Navbar onOpenLogin={() => setAuthModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 2: Homepage Hero */}
        <Hero />

        {/* Section 3: What Is Food Overheating */}
        <WhatIsOverheating />

        {/* Section 4: Why Should We Be Concerned */}
        <WhyBeConcerned />

        {/* Section 5: Recognize the Warning Signs */}
        <WarningSigns />

        {/* Visual Reference Gallery: Real Kitchen Pictures */}
        <VisualReferenceGallery />

        {/* Section 6: Food Heating Awareness Guide */}
        <FoodGuide />

        {/* Interactive Culinary Sandbox: Heat & Temperature Simulator */}
        <HeatSimulator />

        {/* Section 7: Safe Heating Practices — The Practical Solution */}
        <SafePractices />

        {/* Section 8: Interactive Experience — Test Your Knowledge Quiz */}
        <Quiz onOpenLogin={() => setAuthModalOpen(true)} />

        {/* Section 9: Kitchen Safety Checklist */}
        <SafetyChecklist />

        {/* Section 10: Myth vs Fact */}
        <MythVsFact />

        {/* Section 11: Reference and Awareness Section */}
        <References />
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal for Quick Login */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onNavigateToFullPage={() => {
          setAuthModalOpen(false);
          setCurrentView('login');
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
