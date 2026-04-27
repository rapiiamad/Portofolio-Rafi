"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ToolsFade({ imgs }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <div className="w-[25px] h-[25px] relative">
      {imgs.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="tool"
          fill
          className={`w-[22px] h-[22px] object-cover absolute transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}