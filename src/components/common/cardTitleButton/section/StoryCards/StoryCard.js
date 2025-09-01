import React, { useRef, useEffect, useState } from "react";

const StoryCard = ({ data }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Desktp Drag scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // hız katsayısı
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let direction = 1; // sağa
    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1 * direction; // hız
        // sona geldiğinde yön değiştir
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          direction = -1; // Sola
        } else if (scrollContainer.scrollLeft <= 0) {
          direction = 1; // Sağa
        }
      }
    }, 30); // hız ayarı (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex space-x-6 overflow-x-auto p-6 cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {data.map((item, index) => (
        <div
          key={item.id || item.slug || index}
          className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
        >
          {/* Image */}
          <div className="w-28 h-28 md:w-32 md:h-32 overflow-hidden border-2 rounded-full border-blue-500 shadow-lg flex-shrink-0">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                Resim Yok
              </div>
            )}
          </div>

          {/* title */}
          <p className="mt-2 text-sm md:text-base text-center text-gray-700 truncate w-28 md:w-32">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StoryCard;
