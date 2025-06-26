import { useEffect, useState } from "react";

const nadiadwalaImages = [
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/1%20(1).jpeg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/2%20(1).jpeg",
 "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/3.jpeg",
 "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/4.jpeg",
];

export default function NadiadwalaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nadiadwalaImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {nadiadwalaImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Nadiadwala Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
