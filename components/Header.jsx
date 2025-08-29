"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-beige flex justify-between items-center px-6 py-3 shadow-md">
      {/* Logo con borde degradado estilo IG */}
      <div className="flex items-center gap-3">
        <a
          href="https://www.instagram.com/stories/malagrino.ba/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
        >
          <img
            src="/logo.jpg"
            alt="Logo Restaurante"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
        </a>
      </div>

      {/* Navegación */}
      <div className="flex justify-center gap-6">
        <Link href="/" className="text-navy font-semibold hover:underline">
          Inicio
        </Link>
        <Link href="/ubicacion" className="text-navy font-semibold hover:underline">
          Ubicación
        </Link>
        <Link href="/carta" className="text-navy font-semibold hover:underline">
          Carta
        </Link>
      </div>
    </header>
  );
}
