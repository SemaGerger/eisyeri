import React from "react";

const StoryCard = ({ data }) => {
  return (
    <div className="flex space-x-6 overflow-x-auto p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center"
        >
          {/* story video */}
          <div className=" w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg flex-shrink-0">
            <video 
              src={item.video}
              className="w-full h-full object-cover"
              preload="metadata"
              muted
              playsInline
            />
          </div>

          {/* bvaşlık */}
          <p className="mt-2 text-sm md:text-base text-center text-gray-700 truncate w-28 md:w-32">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StoryCard;
