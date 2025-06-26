
import { useEffect, useState } from "react";

const ascendasImages = [
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/chingu.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ingu.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/pingu.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/tingu.jpeg"
];

export default function AscendasCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ascendasImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {ascendasImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Ascendas Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
