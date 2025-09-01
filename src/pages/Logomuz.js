import React from "react";
import Layout from "../components/mainContent/header/Layout";
import { logo } from "../api/DefaultData";

const LogomuzPage = () => {
  return (
    <Layout>
      <div className="py-12 px-6 mt-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Logomuz ve Belgemiz
      </h1>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {logo.map((item) => (
            <div key={item.id} className="border rounded-xl shadow p-4 text-center">
              <h2 className="text-lg font-semibold mb-4">{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto max-h-64 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LogomuzPage;
