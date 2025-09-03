import React, { useRef, useEffect, useState } from "react";
import { pressData } from "../../api/DefaultData";
import SectionTitle from "../../components/section/SectionTitle";
import SectionCard from "../../components/section/SectionCard";
import MiniPreviewVideo from "../../components/videoCard/MiniPreviewVideo";
import ModalVideo from "../../components/videoCard/ModalVideo";

const PressSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >


      
      <SectionTitle>Basında Biz</SectionTitle>

      <div className="flex overflow-x-auto space-x-6 py-4 snap-x snap-mandatory scrollbar-hide">
          
          
         
  {/*<svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M 0 250 C 135 190 400 0 1679 357 C 1893 216 1963 -1 1224 5 L 1109 -1 L 0 0 Z "
          fill="url(#grad1)"
        />
        <path
          d="M 2 343 C -10 637 1556 615 1200 321 L 1103 291 C 762 194 4 -114 0 49 Z"
          fill="url(#grad1)"
        />
      </svg>*/}


        {pressData.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-64 snap-startbg-cover bg-no-repeat rounded-xl shadow-lg"
          >
            <SectionCard
              name={item.title}
              extraInfo={item.extraInfo}
              image={null}
              video={item.video}
              onClick={() => handleCardClick(item.video)}
            />
            <MiniPreviewVideo src={item.video} previewTime={5000} />
          </div>
        ))}
      </div>

      {modalOpen && selectedVideo && (
        <ModalVideo src={selectedVideo} onClose={handleClose} />
      )}
    </div>
  );
};

export default PressSection;
