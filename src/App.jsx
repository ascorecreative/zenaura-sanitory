import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
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

// Main Homepage Component
function HomePage({ onRequestCatalogue, onOpenInquiry, onOpenDetailModal, onSelectBrand }) {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to section if hash exists
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <HeroSection 
        onRequestCatalogue={onRequestCatalogue}
        onOpenInquiry={onOpenInquiry}
      />

      <CollectionMatrix 
        onSelectCollection={onOpenDetailModal}
      />

      <CategoryGrid 
        onSelectCategory={onOpenDetailModal}
      />

      <BrandsShowcase 
        onOpenInquiry={onOpenInquiry}
        onSelectBrand={onSelectBrand}
      />

      <MaterialStudio />

      <ShowroomContact />
    </main>
  );
}

// Dedicated Brand Route Wrapper Component
function BrandRouteWrapper({ onOpenInquiry }) {
  const { brandId } = useParams();
  const navigate = useNavigate();
  const brand = ALL_BRANDS_DATA.find(b => b.id === brandId);

  if (!brand) {
    return (
      <div className="min-h-[60vh] pt-36 px-4 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-[#203A30]">Brand Not Found</h2>
        <p className="text-sm text-[#2D3748]">The requested brand parameter "{brandId}" does not exist in our directory.</p>
        <button
          onClick={() => navigate('/#brands')}
          className="px-6 py-2.5 rounded-full bg-[#203A30] text-white text-xs font-bold uppercase tracking-wider"
        >
          Return to Brands Showcase
        </button>
      </div>
    );
  }

  return (
    <main>
      <BrandLandingPage
        brand={brand}
        onBack={() => navigate('/#brands')}
        onSelectBrand={(b) => navigate(`/brands/${b.id}`)}
        onOpenInquiry={() => onOpenInquiry(brand)}
      />
    </main>
  );
}

export default function App() {
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);
  const [inquiryInitialData, setInquiryInitialData] = useState(null);

  const navigate = useNavigate();

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
    navigate(`/brands/${brand.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#203A30] font-sans relative selection:bg-[#C8A97E] selection:text-[#203A30]">
      
      {/* Header & Navigation */}
      <HeaderNav 
        onRequestCatalogue={handleOpenCatalogueModal} 
        onOpenInquiry={() => handleOpenInquiryDrawer()} 
      />

      {/* Routes for Homepage & Dedicated Brand Pages */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              onRequestCatalogue={handleOpenCatalogueModal}
              onOpenInquiry={() => handleOpenInquiryDrawer()}
              onOpenDetailModal={handleOpenDetailModal}
              onSelectBrand={handleSelectBrand}
            />
          } 
        />
        <Route 
          path="/brands" 
          element={
            <HomePage 
              onRequestCatalogue={handleOpenCatalogueModal}
              onOpenInquiry={() => handleOpenInquiryDrawer()}
              onOpenDetailModal={handleOpenDetailModal}
              onSelectBrand={handleSelectBrand}
            />
          } 
        />
        <Route 
          path="/brands/:brandId" 
          element={
            <BrandRouteWrapper 
              onOpenInquiry={handleOpenInquiryDrawer}
            />
          } 
        />
      </Routes>

      {/* Inquiry Drawer */}
      <InquiryDrawer 
        isOpen={inquiryDrawerOpen}
        onClose={() => setInquiryDrawerOpen(false)}
        initialData={inquiryInitialData}
      />

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
