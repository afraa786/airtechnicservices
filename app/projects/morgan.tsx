
import { useEffect, useState } from "react";

const morganImages = [
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/morgan.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/morgannn.jpeg",
  "https://mhcfhsjqcgzipdykodnv.supabase.co/storage/v1/object/public/gallery/images/morgan1.jpeg",
];

export default function MorganCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % morganImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-lg">
      {morganImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`morgan Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}
    </div>
  );
}
