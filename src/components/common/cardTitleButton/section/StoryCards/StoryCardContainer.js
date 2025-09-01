import React, { useRef, useEffect, useState } from "react";
import StoryItem from "./StoryItem";

const StoryCardContainer = ({ data }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag scroll
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
    const walk = (x - startX);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let direction = 1; 
    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1 * direction;
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          direction = -1;
        } else if (scrollContainer.scrollLeft <= 0) {
          direction = 1;
        }
      }
    }, 30);

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
        <StoryItem key={item.id || item.slug || index} item={item} />
      ))}
    </div>
  );
};

export default StoryCardContainer;
