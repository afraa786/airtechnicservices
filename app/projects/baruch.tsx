import { useEffect, useState } from "react";

const baruchImages = [
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/e.jpeg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/f.jpeg",
    "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/g.jpeg",
];

export default function BaruchCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % baruchImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {baruchImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`baruch Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0" }`
        }
        />
      ))}
    </div>
  );
}
