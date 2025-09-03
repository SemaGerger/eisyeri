import React from "react";
import CTAButton from "../../components/button/CTAButton";
import videoBg from "../../assets/videos/esitIsyeriVideo.mp4";

const Hero = () => {

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video arkası */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        muted
        loop
      />

      {/* video  */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"> </div>

      {/* video ortası */}
      <div className="relative z-10 text-center px-4 md:px-0 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          %50 Destek <span className="text-yellow-400">Esit İsyeri</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Büyükçekmece Belediyesi Ruhsat ve Denetim Müdürlüğü
        </p>

      {/* CTA Button */}
      <div className="flex justify-center mt-10">
      <CTAButton />
      </div>

 </div>
      
    </section>


  );
};

export default Hero;
