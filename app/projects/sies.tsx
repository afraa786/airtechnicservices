import { useEffect, useState } from "react";

const siesImages = [
    "/projects/sies/1.jpeg",
    "/projects/sies/2.jpeg",
    "/projects/sies/3.jpeg",
    "/projects/sies/4.jpeg",
    ];

export default function SIESCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % siesImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {siesImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`SIES Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
