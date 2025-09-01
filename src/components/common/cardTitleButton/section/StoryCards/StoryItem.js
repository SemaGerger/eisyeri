import React from "react";

const StoryItem = ({ item }) => {
  return (
    <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
      <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden border-2 rounded-full border-blue-500 shadow-lg flex-shrink-0">
        {item.image ? (
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            Resim Yok
          </div>
        )}
      </div>

      <p className="mt-2 text-sm md:text-base text-center text-gray-700 truncate w-28 md:w-32">
        {item.title}
      </p>
    </div>
  );
};

export default StoryItem;
