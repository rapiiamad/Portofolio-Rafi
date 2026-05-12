"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TypingText() {
  const text =
    "I’m Rafi — a frontend developer who turns complex problems into elegant, user-friendly solutions.";

  const images = [
    "/image/rocket.png",
    "/image/laptop.png",
    "/image/star.png",
  ];

  const [displayText, setDisplayText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(typing);
        setShowImage(true);
      }
    }, 40);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    if (!showImage) return;

    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // fade in
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [showImage]);

  return (
    <div className="relative w-full">
      <h1 className="invisible text-2xl md:text-[58px] font-bold leading-23 jakarta text-left">
        {text}
      </h1>

      <h1 className="absolute inset-0 text-2xl md:text-[64px] font-semibold text-[#3a3a3a] leading-23 jakarta text-left">
        {displayText}

        {showImage && (
          <Image
            src={images[currentImage]}
            alt="icon"
            width={60}
            height={60}
            className={`inline-block ml-6 align-middle transition-opacity duration-900 ${fade ? "opacity-100" : "opacity-0"
              }`}
          />
        )}

        <span className="animate-pulse ml-1">|</span>
      </h1>
    </div>
  );
}