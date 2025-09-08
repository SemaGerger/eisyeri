import React from "react";
import logo from "../../../assets/logos/esitisyeri-kalp-logo.png";
import logoYazisi from "../../../assets/logos/esitisyeri-yazisi-logo.png";
import Navbar from "../../main/header/Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/100 shadow-md py-3 px-3 md:px-20 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <a href="/home">
          <img src={logo} alt="Eşit İşyeri" className="h-12 animate-logoAni" />
        </a>
        <a href="/home">
          <img src={logoYazisi} alt="Eşit İşyeri Yazısı" className="h-12" />
        </a>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
