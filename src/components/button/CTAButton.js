import { Link } from "react-router-dom";

const CTAButton = () => {
  return (
    <Link to="/formPage" target="_blank" rel="noopener noreferrer">
      <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300">
        İşyerinizi Kaydedin
      </button>
    </Link>
  );
};

export default CTAButton;


/*const CTAButton = () => {
  return (
    <a
      href="https://ulakbel.bcekmece.bel.tr/WebBasvuru/esitisyeri#/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300">
        İşyerinizi Kaydedin
      </button>
    </a>
  );
};

export default CTAButton;*/