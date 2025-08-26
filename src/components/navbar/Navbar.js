import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isMobile = false, onClickLink }) => {
  const links = [
    { name: "Eşit İşyerleri", to: "/" },
    { name: "Hakkımızda", to: "/about" },
    { name: "Bize Ulaşın", to: "/contact" },
    { name: "Logomuz", to: "/logomuz" },
    { name: "Test", to: "/test" },
  ];

  return (
    <ul className={`flex ${isMobile ? "flex-col space-y-2" : "space-x-8"} items-center`}>
      {links.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            onClick={onClickLink}
            className={`text-gray-700 hover:text-indigo-600 transition font-medium`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
