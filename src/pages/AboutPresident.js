import React from "react";
import { abaoutPresident } from "../api/DefaultData";
import Layout from "../components/mainContent/header/Layout";

const AboutPresident = () => {
  return (
    <Layout>
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-16 mt-12 px-6">
      {abaoutPresident.map((item) => (
        <div
          key={item.id}
          className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full"        >
          {/* Image */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center  bg-gray-100 p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {item.title}
            </h2>
            <p className="text-lg text-gray-600">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default AboutPresident;
