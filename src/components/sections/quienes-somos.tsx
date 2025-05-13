"use client"

import { useState } from "react"
import { FiUsers, FiMapPin, FiMail, FiPhone, FiAward, FiTool, FiMessageCircle } from "react-icons/fi"
import Footer from "../layouts/Footer"
import logo from "../../assets/image2.png"
import EquipoCard from "../equipo-card"

const QuienesSomos = () => {
  const [activeTab, setActiveTab] = useState<"principios" | "tecnologia" | "contacto">("principios")

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="pt-28 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
                <span className="text-sm font-medium text-blue-600">Conócenos</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Quiénes Somos</h1>
              <p className="text-lg text-gray-600">
                En <span className="font-semibold">MI PINTA</span>, somos una empresa especializada en servicios de
                lavandería profesional con más de 10 años de experiencia en el mercado. Nos dedicamos a ofrecer
                soluciones de limpieza de alta calidad para hogares y negocios, utilizando tecnología avanzada y
                productos ecológicos.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full transform scale-90 blur-sm"></div>
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Equipo MI PINTA"
                  className="relative z-10 rounded-xl shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 z-20">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <FiUsers className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">Nuestro equipo</p>
                      <p className="text-sm font-bold text-gray-800">+10 años de experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white sticky top-0 z-30 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-1 border-b w-full justify-center">
              <button
                onClick={() => setActiveTab("principios")}
                className={`px-6 py-4 text-sm font-medium transition-colors flex items-center gap-2
                  ${
                    activeTab === "principios"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                <FiAward className={activeTab === "principios" ? "text-blue-600" : "text-gray-400"} />
                Principios
              </button>
              <button
                onClick={() => setActiveTab("tecnologia")}
                className={`px-6 py-4 text-sm font-medium transition-colors flex items-center gap-2
                  ${
                    activeTab === "tecnologia"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                <FiTool className={activeTab === "tecnologia" ? "text-blue-600" : "text-gray-400"} />
                Tecnología
              </button>
              <button
                onClick={() => setActiveTab("contacto")}
                className={`px-6 py-4 text-sm font-medium transition-colors flex items-center gap-2
                  ${
                    activeTab === "contacto"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
              >
                <FiMessageCircle className={activeTab === "contacto" ? "text-blue-600" : "text-gray-400"} />
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Principios Tab */}
        {activeTab === "principios" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
                <span className="text-sm font-medium text-blue-600">Principios</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Nuestros Valores</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Estos son los principios que guían nuestro trabajo diario y nuestro compromiso con la excelencia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Integridad</h3>
                <p className="text-gray-600">
                  Actuamos con honestidad, transparencia y ética en todas nuestras operaciones y relaciones con
                  clientes, proveedores y colaboradores.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Excelencia</h3>
                <p className="text-gray-600">
                  Nos esforzamos por alcanzar los más altos estándares de calidad en todos nuestros servicios, buscando
                  la mejora continua y la satisfacción total del cliente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Trabajo en equipo</h3>
                <p className="text-gray-600">
                  Fomentamos la colaboración, el respeto mutuo y la comunicación efectiva entre todos los miembros de
                  nuestra organización para lograr objetivos comunes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Orientación al cliente</h3>
                <p className="text-gray-600">
                  Nuestros clientes son nuestra prioridad. Nos esforzamos por entender y satisfacer sus necesidades,
                  ofreciendo un servicio personalizado y de calidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsabilidad ambiental</h3>
                <p className="text-gray-600">
                  Nos comprometemos con la protección del medio ambiente, utilizando productos biodegradables y procesos
                  que minimizan el consumo de agua y energía, contribuyendo a un futuro más sostenible.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovación</h3>
                <p className="text-gray-600">
                  Buscamos constantemente nuevas formas de mejorar nuestros servicios, adoptando tecnologías avanzadas y
                  métodos innovadores para ofrecer soluciones más eficientes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tecnología Tab */}
        {activeTab === "tecnologia" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
                <span className="text-sm font-medium text-blue-600">Tecnología</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Nuestro Equipo</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Utilizamos equipos profesionales de última generación para garantizar resultados excepcionales en cada
                servicio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <EquipoCard
                nombre="Limpiador De Muebles"
                imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOlk59VO0b0vWN6Gp_rKdfP33VQCIgo6cLA&s"
                descripcion="Equipo especializado para la limpieza profunda de muebles tapizados, eliminando manchas y ácaros."
              />

              <EquipoCard
                nombre="Lava-Aspiradora KARCHER PUZZI 10/1"
                imagen="https://m.media-amazon.com/images/I/71ShAjO0HAL._AC_UF894,1000_QL80_.jpg"
                descripcion="Inyección y aspirado de agua con detergente. Capacidad de 25 m²/h, 54 lts/seg. Depósito de agua limpia 10lts/sucia 9lts."
              />

              <EquipoCard
                nombre="Kärcher Limpiador a vapor SC 3 Easy Fix"
                imagen="https://karchershop.com.mx/cdn/shop/products/sc-3-easy-fix-mx-208040.jpg?v=1735851498.png"
                descripcion="Vaporizador eléctrico multiusos sin químicos, calentamiento de 40 segundos, ideal para lechada, azulejos, suelos duros y electrodomésticos."
              />

              <EquipoCard
                nombre="Pistola De Hidrolavadora"
                imagen="/images/pistola-hidrolavadora.jpg"
                descripcion="Kit cañón de espuma para Karcher de 1L, perfecto para aplicar detergente de manera uniforme y eficiente."
              />
            </div>
          </div>
        )}

        {/* Contacto Tab */}
        {activeTab === "contacto" && (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
                <span className="text-sm font-medium text-blue-600">Contáctanos</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Encuéntranos</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Visítanos en nuestra sede principal o contáctanos para más información sobre nuestros servicios.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Información de Contacto</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        <FiMapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Dirección</h4>
                        <p className="text-gray-600">Cl. 9a #9-28 Ofic 302, Neiva, Huila</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        <FiPhone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Teléfono</h4>
                        <p className="text-gray-600">+57 310 5739097</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                        <FiMail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">info@mipinta.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                  </div>

                  <div className="mt-8 bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-3">Horario de Atención</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lunes - Viernes:</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sábados:</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Domingos:</span>
                        <span className="font-medium">8:00 AM - 12:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[450px] rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5537356553424!2d-75.28944232412567!3d2.9340029544995757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b747c5a6a4c7d%3A0x9f1e26f1bc778c01!2sCl.%209a%20%239-28%2C%20Neiva%2C%20Huila!5e0!3m2!1ses!2sco!4v1651234567890!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de MI PINTA"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default QuienesSomos
