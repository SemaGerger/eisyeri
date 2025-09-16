import React, { useState, useEffect } from "react";
import Header from "../layouts/main/header/Header";
import Footer from "../layouts/main/Footer";
import CTAButton from "../components/button/CTAButton";

const Layout = ({ children }) => {
  const [showFixedCTA, setShowFixedCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero bölümünü yüksekliüği
      const heroHeight = window.innerHeight;
      setShowFixedCTA(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    // İlk yüklemede kontrol
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      
      {/* Fixed CTA button */}
      {showFixedCTA && (
        <div className="fixed bottom-6 right-6 z-50">
          <CTAButton isFixed={true} />
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Layout;