import React from "react";
import { ArrowRight } from "lucide-react";


const TestPartnersCard = ({ name, image, extraInfo, onClick }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-6 flex flex-col items-start flex-1">
        <div className="w-full">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-40 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Resim Yok
            </div>
          )}
        </div>


        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        {extraInfo && <p className="text-gray-600 text-sm mb-2">{extraInfo}</p>}


        <button
          onClick={onClick}
          className="mt-auto flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          İncele
          <ArrowRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TestPartnersCard;



