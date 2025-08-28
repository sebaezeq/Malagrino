"use client";
import { useEffect, useState } from "react";

const images = [
  "/foto1.jpg",
  "/foto2.jpg",
  "/foto3.jpg",
  "/foto4.jpg",
  "/foto5.jpg",
  "/foto6.jpg",
  "/foto7.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false); // iniciamos la transición
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500); // tiempo de transición
    }, 4000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-[500px] overflow-hidden relative">
      <img
        src={images[index]}
        alt="Carrusel"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Texto sobre la imagen con sombra */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-white drop-shadow-lg">
          Comida casera · Pastelería · Café de especialidad
        </h1>
        <p className="mt-2 text-lg text-white drop-shadow-lg">🐾 Pet Friendly</p>
      </div>
    </div>
  );
}
