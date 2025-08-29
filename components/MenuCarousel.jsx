"use client";
import { useState } from "react";

export default function MenuCarousel({ items }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <div className="relative w-full max-w-3xl mt-6">
      <div className="overflow-hidden rounded-lg shadow-lg">
        {items.map((item, i) => (
          <img
            key={i}
            src={item}
            alt={`Producto ${i}`}
            className={`w-full transition-transform duration-500 ${
              i === index ? "translate-x-0" : "hidden"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
