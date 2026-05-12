"use client";

import { useEffect, useState } from "react";

export default function TypingText() {
  const text =
    "I’m Rafi — a frontend developer who turns complex problems into elegant, user-friendly solutions.";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      // stop saat text selesai
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* invisible text */}
      <h1 className="invisible text-2xl md:text-[58px] font-bold leading-23 jakarta text-left">
        {text}
      </h1>

      {/* typing text */}
      <h1 className="absolute inset-0 text-2xl md:text-[64px] font-semibold text-[#3a3a3a] leading-23 jakarta text-left">
        {displayText}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}