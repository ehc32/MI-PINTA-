"use client"

import { FaWhatsapp } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi"
import { getServiceIconLarge } from "../lib/service-icons"
import { Service } from "../services/types"

interface ServiceCardProps {
  service: Service
  whatsappNumber: string
}

export const ServiceCard = ({ service, whatsappNumber }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 group">
      {/* Media Section with Icon */}
      <div className="relative h-64 overflow-hidden bg-blue-50 flex items-center justify-center">
        <div className="w-32 h-32 text-blue-500">{getServiceIconLarge(service.title)}</div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {service.title || "Servicio"}
        </h3>

        <p className="text-gray-600 mb-6 line-clamp-3 min-h-[4.5rem]">
          {service.details || "Sin detalles disponibles"}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el servicio: ${service.title || "Servicio"}. ¿Podrían darme más información?`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex justify-center items-center px-4 py-2.5 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg shadow transition-all duration-300 hover:shadow-lg"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" /> Consultar Precio
          </a>
          <button
            onClick={() => (window.location.href = `/service/${service._id}`)}
            className="flex-1 inline-flex justify-center items-center px-4 py-2.5 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
          >
            Ver detalles <FiChevronRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}
