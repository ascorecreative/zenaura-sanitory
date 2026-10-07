import React, { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import CollectionMatrix from './components/CollectionMatrix';
import CategoryGrid from './components/CategoryGrid';
import BrandsShowcase from './components/BrandsShowcase';
import MaterialStudio from './components/MaterialStudio';
import InquiryDrawer from './components/InquiryDrawer';
import ShowroomContact from './components/ShowroomContact';
import Footer from './components/Footer';
import CatalogueModal from './components/CatalogueModal';
import ProductDetailModal from './components/ProductDetailModal';
import MobileBottomDock from './components/MobileBottomDock';
import BrandLandingPage from './components/BrandLandingPage';
import { ALL_BRANDS_DATA } from './data/brandsData';

export default function App() {
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);
  const [inquiryInitialData, setInquiryInitialData] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);

  // Listen to hash changes for deep linking (e.g. #brand-grohe)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#brand-')) {
        const brandId = hash.replace('#brand-', '');
        const foundBrand = ALL_BRANDS_DATA.find(b => b.id === brandId);
        if (foundBrand) {
          setActiveBrand(foundBrand);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (hash === '#brands' || hash === '' || hash === '#hero') {
        setActiveBrand(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenCatalogueModal = () => {
    setCatalogueModalOpen(true);
  };

  const handleOpenInquiryDrawer = (data = null) => {
    if (data) setInquiryInitialData(data);
    setInquiryDrawerOpen(true);
  };

  const handleOpenDetailModal = (item) => {
    setSelectedItemForModal(item);
  };

  const handleSelectBrand = (brand) => {
    setActiveBrand(brand);
    window.location.hash = `#brand-${brand.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setActiveBrand(null);
    window.location.hash = '#brands';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#203A30] font-sans relative selection:bg-[#C8A97E] selection:text-[#203A30]">
      
      {/* Header & Navigation */}
      <HeaderNav 
        onRequestCatalogue={handleOpenCatalogueModal} 
        onOpenInquiry={() => handleOpenInquiryDrawer()} 
      />

      {/* Conditional View: Dedicated Brand Landing Page vs Main Homepage */}
      {activeBrand ? (
        <main>
          <BrandLandingPage
            brand={activeBrand}
            onBack={handleBackToMain}
            onSelectBrand={handleSelectBrand}
            onOpenInquiry={() => handleOpenInquiryDrawer(activeBrand)}
          />
        </main>
      ) : (
        <main>
          <HeroSection 
            onRequestCatalogue={handleOpenCatalogueModal}
            onOpenInquiry={() => handleOpenInquiryDrawer()}
          />

          <CollectionMatrix 
            onSelectCollection={(col) => handleOpenDetailModal(col)}
          />

          <CategoryGrid 
            onSelectCategory={(cat) => handleOpenDetailModal(cat)}
          />

          <BrandsShowcase 
            onOpenInquiry={() => handleOpenInquiryDrawer()}
            onSelectBrand={handleSelectBrand}
          />

          <MaterialStudio />

          <InquiryDrawer 
            isOpen={inquiryDrawerOpen}
            onClose={() => setInquiryDrawerOpen(false)}
            initialData={inquiryInitialData}
          />

          <ShowroomContact />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Dock */}
      <MobileBottomDock 
        onOpenInquiry={() => handleOpenInquiryDrawer()} 
      />

      {/* Modals */}
      <CatalogueModal 
        isOpen={catalogueModalOpen}
        onClose={() => setCatalogueModalOpen(false)}
      />

      <ProductDetailModal 
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        onInquire={(item) => {
          setSelectedItemForModal(null);
          handleOpenInquiryDrawer(item);
        }}
      />

    </div>
  );
}
