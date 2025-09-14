import React from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../../config/siteConfig";
import Navbar from "../../main/header/Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/100 shadow-md py-3 px-3 md:px-20 flex justify-between items-center z-50">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img
            src={siteConfig.assets.logos.esitIsyeri.src}
            alt={siteConfig.assets.logos.esitIsyeri.alt}
            className="h-12 animate-logoAni"
          />
        </Link>
        <Link to="/">
          <img
            src={siteConfig.assets.logos.esitIsyeriYazisi.src}
            alt={siteConfig.assets.logos.esitIsyeriYazisi.alt}
            className="h-12"
          />
        </Link>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
