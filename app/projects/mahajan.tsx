import { useEffect, useState } from "react";

const mahajanImages = [
  "/projects/mahajan/1.jpeg",
  "/projects/mahajan/2.jpeg",
  "/projects/mahajan/3.jpeg",
];

export default function MahajanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mahajanImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {mahajanImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Mahajan Project Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
// This component displays a carousel of images for the Mahajan project.