import { useEffect, useState } from "react";

const oasisImages = [
  "/projects/oasis/1.jpeg",
  "/projects/oasis/2.jpeg",
  "/projects/oasis/3.jpeg",
];

export default function OasisCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % oasisImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {oasisImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Oasis Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
