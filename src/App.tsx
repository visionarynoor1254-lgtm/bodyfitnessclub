/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { Facilities } from './components/Facilities.tsx';
import { Footer } from './components/Footer.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutModal, JoinModal, LightboxModal, ProgramModal } from './components/Modals.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Programs } from './components/Programs.tsx';
import { Toast } from './components/Toast.tsx';
import { Trainers } from './components/Trainers.tsx';
import { Membership } from './components/Membership.tsx';
import { GalleryImage, MembershipPlan, ProgramDetail } from './types.ts';

export default function App() {
  // Modal states
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [selectedPlanOrProgram, setSelectedPlanOrProgram] = useState<string>('Club Standard Access');
  
  const [selectedProgramModal, setSelectedProgramModal] = useState<ProgramDetail | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenJoin = (planOrProgramTitle?: string) => {
    if (planOrProgramTitle) {
      setSelectedPlanOrProgram(planOrProgramTitle);
    }
    setIsJoinOpen(true);
  };

  const handleSelectProgram = (program: ProgramDetail) => {
    setSelectedProgramModal(program);
  };

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSelectedPlanOrProgram(plan.name);
    setIsJoinOpen(true);
  };

  const handleSelectFacilityImage = (src: string, title: string) => {
    setLightboxImage({
      id: 'facility-view',
      src,
      title,
      caption: 'High-standard gym equipment and athletic floor at BODY FITNESS CLUB.',
      aspect: 'landscape'
    });
  };

  const handleExploreProgramsScroll = () => {
    const el = document.getElementById('training');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] font-sans selection:bg-[#E52B2B] selection:text-white flex flex-col">
      {/* 1. Header / Navbar */}
      <Navbar onOpenJoin={() => handleOpenJoin()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section - Strictly follows the 3rd reference image */}
        <Hero
          onStartTraining={() => handleOpenJoin('Strength Training')}
          onExplorePrograms={handleExploreProgramsScroll}
        />

        {/* 3. Training Programs Section - Asymmetrical layout with 3 program cards */}
        <Programs
          onSelectProgram={handleSelectProgram}
          onOpenJoin={handleOpenJoin}
        />

        {/* 4. About BODY FITNESS CLUB - Split layout with real gym photo */}
        <About
          onOpenAboutModal={() => setIsAboutModalOpen(true)}
        />

        {/* 5. Facilities & Equipment - Real photos & confirmed areas */}
        <Facilities
          onSelectFacilityImage={handleSelectFacilityImage}
        />

        {/* 6. Trainers Section - Coaching guidance without invented credentials */}
        <Trainers
          onOpenJoin={handleOpenJoin}
          onShowToast={(msg) => setToastMessage(msg)}
        />

        {/* 7. Membership Section - Clean editable cards with enquiry triggers */}
        <Membership
          onSelectPlan={handleSelectPlan}
        />

        {/* 8. Gallery - Asymmetrical real gym photography with lightbox */}
        <Gallery
          onSelectImage={(img) => setLightboxImage(img)}
        />

        {/* 9. Contact & Location - Confirmed info, verified map, and working buttons */}
        <Contact
          onOpenJoin={() => handleOpenJoin()}
          onShowToast={(msg) => setToastMessage(msg)}
        />
      </main>

      {/* 10. Footer - Compact dark theme with dynamic year */}
      <Footer />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
        defaultPlanOrProgram={selectedPlanOrProgram}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      <ProgramModal
        program={selectedProgramModal}
        onClose={() => setSelectedProgramModal(null)}
        onEnquire={(title) => {
          setSelectedProgramModal(null);
          handleOpenJoin(title);
        }}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenJoin={() => {
          setIsAboutModalOpen(false);
          handleOpenJoin('Club Tour / Orientation');
        }}
      />

      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />
    </div>
  );
}
