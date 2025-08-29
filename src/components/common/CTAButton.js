const CTAButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300"
    >
      İşyerinizi Kaydedin
    </button>
  );
};

export default CTAButton;
