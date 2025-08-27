import React from "react";
import { ArrowRight } from "lucide-react";

const TestPartnersCard = ({ title, video, onClick }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="p-6 flex flex-col items-start flex-1">
        <div className="w-full">
          <video
            src={video}
            className="w-full h-40 object-cover rounded-lg"
            preload="metadata"
            muted
            playsInline
          />
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

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
