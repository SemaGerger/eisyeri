import React, { useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "../../../components/button/CTAButton";
import belediye from "../../../assets/logos/bcekmecebldlogo.png";

const links = [
  { name: "AnaSayfa", to: "/" },
  { name: "Başkan Hakkında", to: "/baskan-hakkinda" },
  { name: "Eşit İşyerleri", to: "/esit-isyerleri" },
  { name: "Hakkımızda", to: "/hakkimizda" },
  { name: "Bize Ulaşın", to: "/iletisim" },
  { name: "Logomuz", to: "/logomuz" },
];


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center space-x-10">
        <nav className="flex flex-row items-center space-x-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-gray font-medium whitespace-nowrap duration-300 hover:shadow-lg"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <a href="/home" className="flex items-center space-x-2">
          <img src={belediye} alt="Büyükçekmece Belediyesi" className="h-12" />
        </a>
      </div>

      {/* Hamburger */}
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

      {/* Mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg px-6 py-6 flex flex-col items-start space-y-4 md:hidden animate-fadeIn z-40">
          <nav className="flex flex-col space-y-4 items-start pl-4 w-full">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className="text-gray font-medium whitespace-nowrap duration-300 hover:shadow-lg"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200"></div>

          {/* CTA Button */}
          <CTAButton className="" />

          {/* Belediye Logo */}
          <div className="flex justify-center w-full pt-4 border-t border-gray-100">
            <img src={belediye} alt="Büyükçekmece Belediyesi" className="h-12" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
