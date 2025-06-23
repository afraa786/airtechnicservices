import { useEffect, useState } from "react";

const pallidiumImages = [
  "/projects/pallidium/1.jpeg",
  "/projects/pallidium/2.jpeg",
  "/projects/pallidium/3.jpeg",
];

export default function PallidiumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pallidiumImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {pallidiumImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Pallidium Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
