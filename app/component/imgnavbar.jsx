import { useEffect, useState } from "react";

export default function FadeImage() {
  const images = ["/img1.jpg", "/img2.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden rounded-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}