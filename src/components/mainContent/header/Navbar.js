import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isMobile = false, onClickLink }) => {
  const links = [
    { name: "AnaSayfa", to: "/" },
    { name: "Başkan Hakkında", to: "/aboutPresident" },
    { name: "Eşit İşyerleri", to: "/esitisyerleri" },
    { name: "Hakkımızda", to: "/about" },
    { name: "Bize Ulaşın", to: "/contact" },
    { name: "Logomuz", to: "/logomuz" },
   
  
  ];

  return (
    <ul className={`flex ${isMobile ? "flex-col space-y-2" : "space-x-12"} items-center`}>
  {links.map((link) => (
    <li key={link.to} className="group">
      <Link
        to={link.to}
        onClick={onClickLink}
        className="relative text-gray font-medium whitespace-nowrap duration-300 hover:shadow-lg"
      >
        {link.name}
  
      </Link>
    </li>
  ))}
</ul>

  );
};

export default Navbar;