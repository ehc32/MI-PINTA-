import { FaWhatsapp, FaArrowRight } from "react-icons/fa"

const ProductCTA = () => {
  const whatsappNumber = "123456789" // Reemplaza con tu número real

  return (
    <section className="py-20 bg-gradient-to-b from-[#f5f8ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido y CTA */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] leading-tight">
                Calidad impecable en cada prenda que tocamos
              </h2>
              <p className="mt-6 text-xl text-gray-600">
                Más que una lavandería, somos expertos en el cuidado de tus prendas favoritas. Servicio profesional con
                la atención personalizada que mereces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">¿Por qué elegirnos?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-[#1e3a8a] text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-600">Tecnología avanzada para resultados perfectos</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-[#1e3a8a] text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-600">Productos ecológicos que cuidan tus prendas y el planeta</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-[#1e3a8a] text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-600">Servicio a domicilio puntual y confiable</p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#productos"
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-[#1e3a8a] hover:bg-[#1e40af] transition-colors shadow-md"
              >
                Ver nuestros servicios <FaArrowRight className="ml-2" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa conocer más sobre sus servicios de lavandería.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors shadow-md"
              >
                <FaWhatsapp className="mr-2 text-xl" /> Contáctanos por WhatsApp
              </a>
            </div>
          </div>

          {/* Imagen o ilustración */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/20 to-transparent z-10"></div>
           
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e3a8a] to-transparent p-8 z-20">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg inline-block">
                <p className="text-[#1e3a8a] font-bold">Mi Pinta</p>
                <p className="text-gray-700 text-sm">Servicio de Lavandería Profesional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas o logros */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#1e3a8a]">5+</p>
            <p className="text-gray-600 mt-2">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#1e3a8a]">1000+</p>
            <p className="text-gray-600 mt-2">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#1e3a8a]">24h</p>
            <p className="text-gray-600 mt-2">Servicio rápido</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#1e3a8a]">100%</p>
            <p className="text-gray-600 mt-2">Garantía de calidad</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCTA
