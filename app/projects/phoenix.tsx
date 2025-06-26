// CacCarousel.tsx
import { useEffect, useState } from "react";

const phoenixImages = [
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/a.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/b.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/c.jpeg",
"https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/d.jpeg"
];

export default function PhoenixCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phoenixImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {phoenixImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`CAC Project Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
