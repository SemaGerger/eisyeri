import React, { useRef, useEffect, useState } from "react";

import { pressData } from "../../../../api/DefaultData";
import SectionTitle from "../../../common/cardTitleButton/SectionTitle";
import SectionCard from "../../../common/cardTitleButton/SectionCard";


const PressSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
          <div
            key={item.id}
            className="flex-shrink-0 w-64 snap-start hover:scale-105 transform transition duration-300"
          >
            <SectionCard
              name={item.title}
              video={item.video}
              extraInfo={item.extraInfo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressSection;
