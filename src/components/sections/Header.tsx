"use client"

import { FiChevronRight } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import PrimaryButton from "../buttons/PrimaryButton"
import { Link } from "react-router-dom"
import SecondaryButton from "../buttons/SecondaryButton"
import { headerData, siteConfig } from "../../services/backup-data"
import logo from "../../assets/image2.png"

const Header = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Texto a la izquierda */}
          <div className="w-full lg:w-1/2 text-left lg:pr-10">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-sm font-medium bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500 text-transparent">
                {headerData.subtitle}
              </span>
            </div>

            <h1
              className="mt-6 font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl leading-tight"
              dangerouslySetInnerHTML={{ __html: headerData.title }}
            ></h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">{headerData.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/list-blog">
                <PrimaryButton className="shadow-lg shadow-blue-500/20 transform transition hover:scale-105">
                  Ver productos <FiChevronRight className="ml-2" />
                </PrimaryButton>
              </Link>
              <Link to="/services">
                <SecondaryButton className="transform transition hover:scale-105">
                  Ver servicios <FiChevronRight className="ml-2" />
                </SecondaryButton>
              </Link>
            </div>

            <div className="mt-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                <FaWhatsapp className="mr-2 text-lg" /> Contáctanos por WhatsApp
              </a>
            </div>

            {/* Indicadores de confianza */}
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              {headerData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Círculo decorativo detrás de la imagen */}
              <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-90 blur-sm"></div>

              <img
                src={logo || "/placeholder.svg"}
                alt="Productos de limpieza"
                className="relative z-10 max-w-full h-auto rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105"
              />

              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 z-20">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">{headerData.badge.title}</p>
                    <p className="text-sm font-bold text-gray-800">{headerData.badge.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
