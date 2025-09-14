import React, { useRef, useState, useEffect } from "react";
import StoryCard from "../../components/section/StoryCard";
import SampleImage from "../../assets/logos/esitisyeri-kalp-logo.png";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StoryCardContainer = ({ partners }) => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll pozisyonunu kontrol et
  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll event liste
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [partners]);

  // Drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll hızı
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Ok butonları için scroll
  const scrollLeftHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightHandler = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (!partners) {
    return (
      <div className="flex justify-center items-center h-64 m-16">
        <p className="text-gray-500 text-lg">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="relative mt-8">
      {showLeftArrow && (
        <button
          onClick={scrollLeftHandler}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 
                   bg-white/80 hover:bg-white rounded-full p-2 shadow-lg 
                   transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={scrollRightHandler}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 
                   bg-white/80 hover:bg-white rounded-full p-2 shadow-lg 
                   transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide py-4 px-2
                   cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollBehavior: "smooth" }}
      >
        {partners.map((partner, index) => {
          const cells = partner.Cells || [];
          const name = cells[2]?.DisplayText || "İsim yok";
          const yetkili = cells[3]?.DisplayText || "Yetkili yok";
          const faaliyet = cells[4]?.DisplayText || "Faaliyet türü yok";

          let image = SampleImage;
          try {
            const filesJson = cells[16]?.Value || "[]";
            const files = JSON.parse(filesJson);
            if (Array.isArray(files) && files.length > 0) {
              image = files[0]?.src ?? SampleImage;
            }
          } catch (err) {
            console.warn("Resim verisi okunamadı:", err);
          }

          const objectCell = cells.find(c => c.ColumnName === "vw_esit_isyeri.objectid");
          const objectId = objectCell?.Value ? String(objectCell.Value) : null;

          return (
            <div
              key={objectId || `partner-${index}`}
              className="flex-shrink-0 w-64" // Kart genişliği
            >
              <Link
                to={`/detay/${objectId}`}
                state={{ image }}
                className="block"
              >
                <StoryCard
                  id={objectId}
                  name={name}
                  image={image}
                  extraInfo={`Yetkili: ${yetkili} | Tür: ${faaliyet}`}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StoryCardContainer;