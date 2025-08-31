import React, { useRef, useEffect, useState } from "react";
import { pressData } from "../../../../api/DefaultData";
import SectionTitle from "../../../common/cardTitleButton/SectionTitle";
import SectionCard from "../../../common/cardTitleButton/SectionCard";
import MiniPreviewVideo from "../../../common/cardTitleButton/MiniPreviewVideo";
import ModalVideo from "../../../common/cardTitleButton/ModalVideo";

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
        {pressData.map((item) => (
          <div key={item.id} className="relative flex-shrink-0 w-64 snap-start hover:scale-105 transform transition duration-300">
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
