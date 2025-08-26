import React from "react";
import Header from "../components/header/Header";
import Hero from '../components/hero/Hero';
import Main from "../components/mainContent/Main";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Header />
      {/* sabit header */}
      <div className="">
        <Hero />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
