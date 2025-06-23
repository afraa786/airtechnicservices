import { useEffect, useState } from "react";

const goregoanImages = [
    "/projects/goregoan/1.jpeg",
    "/projects/goregoan/2.jpeg",
    "/projects/goregoan/3.jpeg",
];

export default function GoregoanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % goregoanImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {goregoanImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Goregoan Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
