"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { fetchServiceById, type Service } from "../services/api"
import { getServiceIconLarge } from "../lib/service-icons"

interface ServiceDetailProps {
  id: string
  onBack: () => void
}

const ServiceDetail = ({ id, onBack }: ServiceDetailProps) => {
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const whatsappNumber = "123456789" // Reemplaza con tu número real

  useEffect(() => {
    const loadService = async () => {
      setLoading(true)
      try {
        const serviceData = await fetchServiceById(id)
        setService(serviceData)
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
        {/* Sección de imágenes - Reemplazada con icono */}
        <div className="lg:w-1/2 p-6 lg:p-8">
          <button onClick={onBack} className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a servicios
          </button>

          <div className="mb-4 flex justify-center">
            <div className="relative w-full h-80 sm:h-96 bg-blue-50 rounded-lg overflow-hidden border border-gray-100 flex items-center justify-center">
              <div className="text-blue-500">{getServiceIconLarge(service.title)}</div>
            </div>
          </div>

          {/* Beneficios del servicio */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Beneficios</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Información del servicio */}
        <div className="lg:w-1/2 p-6 lg:p-8 lg:border-l border-gray-100">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{service.title}</h1>

            {/* Descripción */}
            <div className="prose prose-sm text-gray-600 mb-6">
              <p className="leading-relaxed">{service.details}</p>
            </div>
          </div>

          {/* Proceso del servicio */}
          {service.process && service.process.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Proceso</h4>
              <ol className="space-y-3">
                {service.process.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Botón de WhatsApp */}
          <div className="mb-8">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el servicio ${service.title}. ¿Podrían darme más información?`}
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
