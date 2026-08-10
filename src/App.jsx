import React, { useState } from 'react';
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

export default function App() {
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);
  const [inquiryInitialData, setInquiryInitialData] = useState(null);

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

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#203A30] font-sans relative selection:bg-[#C8A97E] selection:text-[#203A30]">
      
      {/* Header & Navigation */}
      <HeaderNav 
        onRequestCatalogue={handleOpenCatalogueModal} 
        onOpenInquiry={() => handleOpenInquiryDrawer()} 
      />

      {/* Main Content Sections */}
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
        />

        <MaterialStudio />

        <InquiryDrawer 
          isOpen={inquiryDrawerOpen}
          onClose={() => setInquiryDrawerOpen(false)}
          initialData={inquiryInitialData}
        />

        <ShowroomContact />
      </main>

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
