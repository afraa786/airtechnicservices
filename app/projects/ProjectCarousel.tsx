import { useEffect, useState } from "react";

const imageList = [
  "/projects/airindia/1.jpeg",
  "/projects/airindia/2.jpeg",
  "/projects/airindia/3.jpeg",
  "/projects/airindia/4.jpeg",
  "/projects/airindia/5.jpeg",
  "/projects/airindia/6.jpeg",
];

export default function ProjectCarousel() {
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
          alt={`Air India Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
