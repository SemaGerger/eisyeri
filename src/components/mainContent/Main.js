import React from "react";
import PartnersSection from './PartnersSection';
import PressSection from "./PressSection";


const Main = () => {
  return (
    <main className="py-20 px-6 md:px-20 bg-white-50">
      {/* Destek verenler */}
       <section className="mb-20">
        <PartnersSection />
      </section>
   
      {/* Haberler*/}
      <section className="mb-20">
        <PressSection />
      </section>
      <section className="mb-20">
       
      </section>
     
    </main>
  );
};

export default Main;
