"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-beige flex justify-between items-center px-6 py-3 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.jpg"
          alt="Logo Restaurante"
          className="h-10 w-10 rounded-full"
        />
      </div>

      {/* Navegación */}
      <div className="flex justify-center gap-6">
        <Link href="/" className="text-navy font-semibold hover:underline">Inicio</Link>
        <Link href="/ubicacion" className="text-navy font-semibold hover:underline">Ubicación</Link>
        <Link href="/carta" className="text-navy font-semibold hover:underline">Carta</Link>
      </div>

      {/* Redes sociales */}
      <div className="flex gap-4">
        <a href="https://www.instagram.com/malagrino.ba/?hl=es" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
        </a>
        <a href="https://wa.me/541145282221" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
        </a>
        <a href="https://www.facebook.com/malagrino.ba/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
}
