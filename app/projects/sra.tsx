
import { useEffect, useState } from "react";

const SraImages = [
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sra1.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sra2.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sra3.jpeg",
   "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sra4.jpeg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sra5.jpeg"
];

export default function SraCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SraImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {SraImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Sra Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
