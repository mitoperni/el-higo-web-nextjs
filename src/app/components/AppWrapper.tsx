'use client';
import { useState, useEffect, ReactNode } from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import MockupDisclaimerModal from './ui/MockupDisclaimerModal';
import useScrollToTop from '../../hooks/useScrollToTop';
import { getAllMenuImages } from '../../data/menuData';

interface AppWrapperProps {
  children: ReactNode;
}

// Preload images utility
const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

export default function AppWrapper({ children }: AppWrapperProps) {
  useScrollToTop();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenMockupDisclaimer');
    if (hasSeenDisclaimer !== 'true') {
      setShowDisclaimer(true);
    }

    // Preload menu images for better UX
    const menuImages = getAllMenuImages();
    preloadImages(menuImages);
  }, []);

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
    localStorage.setItem('hasSeenMockupDisclaimer', 'true');
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
      <MockupDisclaimerModal
        isOpen={showDisclaimer}
        onClose={handleCloseDisclaimer}
      />
    </>
  );
}
