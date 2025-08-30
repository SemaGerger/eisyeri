import React from "react";
import { aboutData } from "../api/DefaultData";
import Layout from "../components/mainContent/header/Layout";

const About = () => {
  return (
    <Layout>
    <div className="max-w-6xl mx-auto px-4 py-12 mt-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Eşit İşyeri Projesi
      </h1>

      {aboutData.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 md:pr-8 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default About;
