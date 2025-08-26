import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <h1 className={`text-2xl md:text-3xl font-bold mb-6 relative inline-block ${className}`}>
      {children}
      <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-100 rounded"></span>
    </h1>
  );
};

export default SectionTitle;
