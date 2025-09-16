import React, { useRef, useEffect, useState } from "react";
import { pressData } from "../../api/DefaultData";
import SectionTitle from "../../components/section/SectionTitle";

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

  const safePlay = (videoEl) => {
    if (videoEl && typeof videoEl.play === "function") {
      videoEl.play().catch((error) => {
        console.error("Video oynatma hatası:", error);
      });
    }
  };

  const safePause = (videoEl) => {
    if (videoEl && typeof videoEl.pause === "function") {
      videoEl.pause();
    }
  };


  const MiniPreviewVideo = ({ src, previewTime = 5000 }) => {
    const videoRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
      const el = videoRef.current;
      if (!el) return;

      safePlay(el);

      intervalRef.current = setInterval(() => {
        if (!el.paused) {
          el.currentTime = 0;
        }
      }, previewTime);

      return () => {
        clearInterval(intervalRef.current);
        safePause(el);
      };
    }, [src, previewTime]);

    return (
      <video
        ref={videoRef}
        src={src}
        className="absolute w-full h-full object-cover top-0 left-0 rounded-lg pointer-events-none"
        muted
        autoPlay
        playsInline
        loop={false}
      />
    );
  };


  const ModalVideo = ({ src, onClose }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      const videoEl = videoRef.current;
      safePlay(videoEl);

      // ESC ile kapatma
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        safePause(videoEl);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [src, onClose]);

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="relative bg-black p-4 rounded-lg max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Kapatma butonu */}
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400 transition"
          >
            ×
          </button>

          {/* Video */}
          <video
            ref={videoRef}
            src={src}
            controls
            autoPlay
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    );
  };


  const PressCard = ({ name, image, video, onClick, className = "" }) => {
    return (
      <div
        className={`bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full ${className}`}
        onClick={onClick}
      >
        {video ? (
          <div className="relative ">
            <video
              src={video}
              className="w-full h-48 object-cover"
              muted
              playsInline
            />
            {/* Play ikon 
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 rounded-full p-3">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>*/}
            {/* MiniPreviewVideo */}
            <MiniPreviewVideo src={video} previewTime={5000} />
          </div>
        ) : image ? (
          <img src={image} alt={name} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-gray-500">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

       
      </div>
    );
  };

  // Card Groups
  const firstThree = pressData.slice(0, 3);
  const nextFour = pressData.slice(3, 7);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-2 bg-gray-50" ref={sectionRef}>
      <SectionTitle
  title="Basında Biz"
  subtitle="Basında Eşit İşyeri ile ilgili çıkan haberler"
      
      />
      
      {/* Video container */}
      <div className="max-w-7xl w-full">
        {/* 3  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {firstThree.map((item) => (
            <PressCard
              key={item.id}
              name={item.title}
              extraInfo={item.extraInfo}
              image={null}
              video={item.video}
              onClick={() => handleCardClick(item.video)}
            />
          ))}
        </div>

        {/* 4  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nextFour.map((item) => (
            <PressCard
              key={item.id}
              name={item.title}
              extraInfo={item.extraInfo}
              image={null}
              video={item.video}
              onClick={() => handleCardClick(item.video)}
            />
          ))}
        </div>
      </div>

      {modalOpen && selectedVideo && (
        <ModalVideo src={selectedVideo} onClose={handleClose} />
      )}
    </div>
  );
};

export default PressSection;