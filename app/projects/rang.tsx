import { useEffect, useState } from "react";

const rangImages = [
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/rang1.jpeg",
 "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/rang2.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/ranng3.jpeg",
];

export default function RangCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rangImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {rangImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`rang Butcher Island Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
