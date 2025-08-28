export default function Ubicacion() {
  return (

    <section className="max-w-5xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-semibold text-navy mb-6 text-center">
        Ubicación
      </h2>


      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 text-navy">
          <p className="mb-2">
            <strong>Dirección:</strong> Corrientes 321, Olivos, Buenos Aires 1636
          </p>
          <p className="mb-2">
            <strong>Horario:</strong> Lun a Vie 8 hs a 20 hs | Fines de semana & feriados 9 hs a 20 hs

          </p>
        </div>

        <div className="flex-1">
          <iframe
            title="Mapa Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5036799441313!2d-58.508379084775!3d-34.52565308047365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb4a2b6c7c1d7%3A0x3a7b5e1771d19e42!2sCorrientes%20321%2C%20Olivos%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1693248000000!5m2!1ses!2sar"
            className="w-full h-64 md:h-80 rounded-xl border-2 border-beige"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
