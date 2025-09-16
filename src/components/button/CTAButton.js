import siteConfig from "../../config/siteConfig";
import {  ClipboardList } from "lucide-react";

const CTAButton = ({ isFixed = false }) => {
  const buttonClass = isFixed 
    ? "px-6 py-3 bg-red-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2 animate-bounce"
    : "px-8 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300";
  
  return (
    <a
      href={siteConfig.hero.ctaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={isFixed ? "fixed-cta-button" : ""}
    >
      <button className={buttonClass}>
        {siteConfig.hero.ctaText}
        {isFixed && <ClipboardList size={20} />}
      </button>
    </a>
  );
};

export default CTAButton;