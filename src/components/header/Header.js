import React, { useState } from "react";
import logo from '../../assets/logos/esitisyeri-kalp-logo.png';
import logoYazisi from '../../assets/logos/esitisyeri-yazisi-logo.png';
import Search from "./Search";
import Navbar from "../header/Navbar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/100 shadow-md py-3 px-6 md:px-20 flex justify-between items-center z-50">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <a href="/home">
          <img src={logo} alt="Eşit İşyeri" className="h-12 animate-logoAni" />
        </a>
        <a href="/home">
          <img src={logoYazisi} alt="Eşit İşyeri" className="h-12" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Navbar />
        <Search />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col items-start md:hidden">
          <Navbar isMobile={true} onClickLink={() => setIsMobileMenuOpen(false)} />
          <div className="mt-2 w-full">
            <Search />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
