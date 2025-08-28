export default function Carta() {
  return (
    <section className="max-w-5xl mx-auto my-10 px-4 text-center">
      <h2 className="text-3xl font-semibold text-navy mb-6">
        Nuestra Carta
      </h2>

      <p className="mb-4 text-navy">Escaneá el QR para ver nuestra carta completa</p>

      <a
        href="/carta.pdf"
        target="_blank"
        className="inline-block p-4 border-2 border-beige rounded-xl hover:shadow-lg transition"
      >
        <img src="/qr.png" alt="QR Carta" className="w-40 h-40 mx-auto" />
      </a>
    </section>
  );
}
