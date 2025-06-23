
import { useEffect, useState } from "react";

const cinepolisImages = [
  "/projects/cinepolis/1.jpeg",
  "/projects/cinepolis/2.jpeg",
  "/projects/cinepolis/3.jpeg",
];

export default function CinepolisCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cinepolisImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {cinepolisImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Cinepolis Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
