
import { useEffect, useState } from "react";

const saharaImages = [
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sahara1.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sahara2.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sahara4.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/sahara3.jpeg"

];

export default function SaharaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % saharaImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {saharaImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`sahara Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
