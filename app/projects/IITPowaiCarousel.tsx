import { useEffect, useState } from "react";

const iitImages = [
 "/projects/iit/1.jpeg",
 "/projects/iit/2.jpeg",
  "/projects/iit/3.jpeg",
  "/projects/iit/4.jpeg",
];

export default function IITPowaiCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % iitImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {iitImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`IIT Powai Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
