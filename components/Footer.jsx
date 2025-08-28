export default function Footer() {
  return (
    <footer className="bg-beige text-navy py-6 mt-10">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-center md:text-left">
        <b>Malagrino</b> <br />
      Corrientes 321, Olivos, Buenos Aires 1636
      <br />
      Lun a Vie 8 hs a 20 hs | Fines de semana & feriados 9 hs a 20 hs
    </p>
    <div className="flex gap-4 items-center">
      <a href="https://www.instagram.com/malagrino.ba/?hl=es" target="_blank">
        <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
      </a>
      <a href="https://wa.me/541145282221" target="_blank">
        <img src="/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
      </a>
      <a href="https://www.facebook.com/malagrino.ba/" target="_blank">
        <img src="/facebook.png" alt="Facebook" className="h-6 w-6" />
      </a>
    </div>
  </div>
  <p className="text-center mt-4 text-sm">
    Desarrollado por{" "}
    <a
      href="https://proyectos-virid.vercel.app/"
      target="_blank"
      className="underline hover:text-navy/80"
    >
      Iglesias Sebastian
    </a>
  </p>
</footer>

  );
}
