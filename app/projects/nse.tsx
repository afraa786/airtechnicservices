
import { useEffect, useState } from "react";

const nseImages = [
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/nse1.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/nse2.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/nse3.jpeg",
];

export default function NseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nseImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {nseImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`nse Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
