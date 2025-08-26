
import React from "react";

const Cards = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transform transition duration-500">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Cards;
