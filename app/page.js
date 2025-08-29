"use client";
import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel";

export default function Home() {
  const [estado, setEstado] = useState("cerrado");

  useEffect(() => {
    const actualizarEstado = () => {
      const ahora = new Date();
      const hora = ahora.getHours();
      const dia = ahora.getDay(); // 0 domingo, 6 sábado

      let abierto = false;
      let mensaje = "";

      if (dia >= 1 && dia <= 5) {
        // lunes a viernes 08-20
        abierto = hora >= 8 && hora < 20;
        if (hora >= 7 && hora < 8) mensaje = "Abre pronto";
        else if (hora >= 19 && hora < 20) mensaje = "Cierra pronto";
      } else {
        // fines de semana 09-20
        abierto = hora >= 9 && hora < 20;
        if (hora >= 8 && hora < 9) mensaje = "Abre pronto";
        else if (hora >= 19 && hora < 20) mensaje = "Cierra pronto";
      }

      if (abierto && mensaje === "") mensaje = "Ahora: Abierto";
      if (!abierto && mensaje === "") mensaje = "Ahora: Cerrado";

      setEstado(mensaje.toLowerCase());
    };

    actualizarEstado();
    const intervalo = setInterval(actualizarEstado, 60000); // actualiza cada minuto
    return () => clearInterval(intervalo);
  }, []);

  const colores = {
    "ahora: abierto": "bg-abierto text-white",
    "ahora: cerrado": "bg-cerrado text-white",
    "cierra pronto": "bg-pronto text-black",
    "abre pronto": "bg-pronto text-black",
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Carrusel */}
      <div className="relative w-full">
        <Carousel />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <h1 className="text-2xl md:text-4xl font-semibold drop-shadow-lg">
            Comida casera · Pastelería · Café de especialidad
          </h1>
          <p className="mt-2 text-lg drop-shadow-lg">🐾 Pet Friendly</p>

          {/* Botón de contacto */}
          <a
            href="https://wa.me/541145282221"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Estado del negocio */}
      <div className="mt-6 px-4">
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${colores[estado]}`}
        >
          {estado.replace(/^./, (c) => c.toUpperCase())}
        </span>
      </div>
    </div>
  );
}
