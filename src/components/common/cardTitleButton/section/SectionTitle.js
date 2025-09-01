import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <h1 className={`text-2xl md:text-3xl font-bold mb-10 relative text-center ${className}`}>
      {children}
      <span className="absolute left-1/2 -bottom-2 w-48 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-100 rounded -translate-x-1/2"></span>

    </h1>
  );
};


export default SectionTitle;
