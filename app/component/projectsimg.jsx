"use client";

import { useEffect, useState } from "react";

export default function ToolsFade({ imgs }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <div className="w-[22px] h-[22px] md:w-[25px] md:h-[25px] relative flex items-center justify-center">
      {imgs.map((icon, i) => (
        <div
          key={i}
          className={`absolute text-[18px] md:text-[22px] text-[#3a3a3a] transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}