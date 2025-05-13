"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { fetchServiceById, type Service } from "../services/api"

interface ServiceDetailProps {
  id: string
  onBack: () => void
}

const ServiceDetail = ({ id, onBack }: ServiceDetailProps) => {
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const whatsappNumber = "123456789" // Reemplaza con tu número real

  useEffect(() => {
    const loadService = async () => {
      setLoading(true)
      try {
        const serviceData = await fetchServiceById(id)
        setService(serviceData)
        if (serviceData.images && serviceData.images.length > 0) {
          setActiveImage(serviceData.images[0])
        }
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    loadService()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error || !service) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
        <p>{error || "No se pudo cargar el servicio"}</p>
        <button
          onClick={onBack}
          className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Volver a servicios
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Sección de imágenes */}
        <div className="lg:w-1/2 p-6 lg:p-8">
          <button onClick={onBack} className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a servicios
          </button>

          <div className="mb-4 flex justify-center">
            <div className="relative w-full h-80 sm:h-96 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
              {activeImage ? (
                activeImage.endsWith(".mp4") || activeImage.endsWith(".MP4") ? (
                  <video
                    src={activeImage}
                    className="w-full h-full object-contain"
                    controls
                    poster="/placeholder.svg?height=300&width=400"
                  />
                ) : (
                  <img
                    src={activeImage || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
                  />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">Sin imagen disponible</span>
                </div>
              )}
            </div>
          </div>

          {/* Miniaturas de imágenes */}
          {service.images && service.images.length > 1 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {service.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === img ? "border-blue-500 shadow-md" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${service.title} - vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Videos del servicio */}
          {service.videos && service.videos.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Videos</h4>
              <div className="grid grid-cols-1 gap-4">
                {service.videos.map((video, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-gray-200">
                    <video
                      src={video}
                      className="w-full h-auto"
                      controls
                      poster="/placeholder.svg?height=200&width=400"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Información del servicio */}
        <div className="lg:w-1/2 p-6 lg:p-8 lg:border-l border-gray-100">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{service.title}</h1>

            {/* Precio */}
            <div className="flex items-center mb-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-700 font-bold text-2xl">
                  ${service.cost !== undefined ? service.cost.toLocaleString("es-CO") : "Consultar"}
                </span>
              </div>
            </div>

            {/* Descripción */}
            <div className="prose prose-sm text-gray-600 mb-6">
              <p className="leading-relaxed">{service.details}</p>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <div className="mb-8">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el servicio ${service.title}${
                service.cost !== undefined ? ` (${service.cost.toLocaleString("es-CO")})` : ""
              }. ¿Podrían darme más información?`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <FaWhatsapp className="mr-3 h-6 w-6" />
              Solicitar este servicio
            </a>
            <p className="text-center text-gray-500 text-sm mt-3">
              Contacta directamente con nosotros para consultar disponibilidad y realizar tu pedido
            </p>
          </div>

          {/* Información adicional */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <svg
                  className="w-8 h-8 text-green-500 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="font-medium text-gray-800 mb-1">Atención personalizada</h4>
                <p className="text-gray-600">Respuesta rápida a tus consultas</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <svg
                  className="w-8 h-8 text-green-500 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                <h4 className="font-medium text-gray-800 mb-1">Servicio a domicilio</h4>
                <p className="text-gray-600">Recogida y entrega disponible</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <svg
                  className="w-8 h-8 text-green-500 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h4 className="font-medium text-gray-800 mb-1">Garantía de calidad</h4>
                <p className="text-gray-600">Satisfacción garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
