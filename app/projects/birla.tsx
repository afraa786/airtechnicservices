
import { useEffect, useState } from "react";

const birlaImages = [
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/birlaaa.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/birla.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/birlaa.jpeg",
];

export default function BirlaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % birlaImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {birlaImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Birla Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
