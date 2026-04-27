"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Foto() {
  const images = ["/image/telkom.png", "/image/billa.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[28px] h-[28px] relative">
      <Image
        src={images[0]}
        alt="img1"
        fill
        className={`object-cover absolute transition-opacity duration-600 ${
          index === 0 ? "opacity-100" : "opacity-0"
        }`}
      />

      <Image
        src={images[1]}
        alt="img2"
        fill
        className={`object-cover absolute transition-opacity duration-600 ${
          index === 1 ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}