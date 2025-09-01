import React from "react";
import { ArrowRight } from "lucide-react";

const PageItem = ({ item, onClick }) => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-2xl border border-gray-100 overflow-hidden">
      <div className="p-6 flex flex-col items-start flex-1">
        <div className="w-full">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Resim Yok
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
        {item.subtitle && <p className="text-gray-600 text-sm mb-2">{item.subtitle}</p>}

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

export default PageItem;
