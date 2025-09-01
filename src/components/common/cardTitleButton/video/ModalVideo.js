import React, { useRef, useEffect } from "react";
import { safePlay, safePause } from "../../cardTitleButton/video/videoControl";

const ModalVideo = ({ src, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    safePlay(videoRef.current);
    return () => safePause(videoRef.current);
  }, [src]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-black p-4 rounded-lg max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl font-bold z-50"
        >
          ×
        </button>
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  );
};

export default ModalVideo;
