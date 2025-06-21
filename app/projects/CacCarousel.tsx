// CacCarousel.tsx
import { useEffect, useState } from "react";

const imageList = [
  "/projects/cac/1.jpeg",
  "/projects/cac/2.jpeg",
  "/projects/cac/3.jpeg",
    "/projects/cac/4.jpeg",
];

export default function CacCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {imageList.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`CAC Project Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
