"use client"

import { useState, useEffect } from "react"
import { FiChevronRight, FiPackage, FiTool } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { fetchProducts, fetchServices, type Product, type Service } from "../../services/api"
import ImageCarousel from "../ImageCarousel"

const ProductServiceTabs = () => {
  const [activeTab, setActiveTab] = useState<"products" | "services">("products")
  const [products, setProducts] = useState<Product[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const whatsappNumber = "123456789" // Reemplaza con el número de WhatsApp

  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        if (activeTab === "products") {
          const productsData = await fetchProducts()
          setProducts(productsData)
        } else {
          const servicesData = await fetchServices()
          setServices(servicesData)
        }
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [activeTab])

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="products-services">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <span className="text-sm font-medium text-blue-600">Nuestro Catálogo</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Productos y Servicios</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra selección de servicios de lavandería profesional y productos de calidad
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab("products")}
              className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "products" ? "bg-white text-blue-600 shadow-md" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <FiPackage className="mr-2" /> Productos
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "services" ? "bg-white text-blue-600 shadow-md" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <FiTool className="mr-2" /> Servicios
            </button>
          </div>
        </div>

        {/* Estado de carga */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Mensaje de error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">{error}</div>
        )}

        {/* Contenido de Productos */}
        {activeTab === "products" && !loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={product.id || idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageCarousel images={product.images || []} />
                  {/* Badge de precio - Verificamos que price exista */}
                  {product.price !== undefined && product.price !== null && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white font-bold px-3 py-1 rounded-full shadow-lg">
                      ${product.price.toLocaleString("es-CO")}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {product.technicalSpecifications && product.technicalSpecifications.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Especificaciones:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.technicalSpecifications.map((spec, i) => (
                          <li key={i} className="flex items-center">
                            <svg
                              className="w-4 h-4 text-blue-500 mr-2"
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
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el producto ${product.name}. ¿Podrían darme más información?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg shadow transition-all duration-300 hover:shadow-lg"
                    >
                      <FaWhatsapp className="mr-2 h-5 w-5" /> Más Información
                    </a>
                    <a
                      href={`/list-blog?id=${product.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        localStorage.setItem("selectedProductId", String(product.id))
                        window.location.href = `/list-blog?id=${product.id}`
                      }}
                      className="flex-1 inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                    >
                      Ver más <FiChevronRight className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contenido de Servicios */}
        {activeTab === "services" && !loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service._id || idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 group"
              >
                {/* Media Section - Improved with carousel for multiple images/videos */}
                <div className="relative h-64 overflow-hidden">
                  {service.images && service.images.length > 0 ? (
                    <div className="w-full h-full">
                      {service.images[0].endsWith(".mp4") ? (
                        <video
                          src={service.images[0]}
                          className="w-full h-full object-cover"
                          controls
                          poster="/placeholder.svg?height=300&width=400"
                        />
                      ) : (
                        <img
                          src={service.images[0] || "/placeholder.svg"}
                          alt={service.title || "Servicio"}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                  ) : (
                    <img
                      src="/placeholder.svg?height=300&width=400"
                      alt={service.title || "Servicio"}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Media indicators */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {service.images && service.images.length > 1 && (
                      <div className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        {service.images.length} Imágenes
                      </div>
                    )}
                    {service.videos && service.videos.length > 0 && (
                      <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {service.videos.length} Video{service.videos.length > 1 ? "s" : ""}
                      </div>
                    )}
                  </div>

                  {/* Price badge - Improved styling */}
                  {service.cost !== undefined && service.cost !== null && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white font-bold px-3 py-1.5 rounded-full shadow-lg">
                      ${service.cost.toLocaleString("es-CO")}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Title with better spacing and hover effect */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title || "Servicio"}
                  </h3>

                  {/* Description with better line clamping */}
                  <p className="text-gray-600 mb-6 line-clamp-3 min-h-[4.5rem]">
                    {service.details || "Sin detalles disponibles"}
                  </p>

                  {/* Media gallery - Improved layout */}
                  {((service.images && service.images.length > 1) || (service.videos && service.videos.length > 0)) && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Galería:</h4>
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {/* Show additional images */}
                        {service.images &&
                          service.images.slice(1).map((image, i) => (
                            <div
                              key={`img-${i}`}
                              className="flex-shrink-0 w-24 h-16 relative rounded overflow-hidden border border-gray-200 group/item"
                            >
                              {image.endsWith(".mp4") ? (
                                <>
                                  <video
                                    src={image}
                                    className="w-full h-full object-cover"
                                    poster="/placeholder.svg?height=100&width=100"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                              )}
                              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 transition-all duration-300"></div>
                            </div>
                          ))}

                        {/* Show videos */}
                        {service.videos &&
                          service.videos.map((video, i) => (
                            <div
                              key={`vid-${i}`}
                              className="flex-shrink-0 w-24 h-16 relative rounded overflow-hidden border border-gray-200 group/item"
                            >
                              <video
                                src={video}
                                className="w-full h-full object-cover"
                                poster="/placeholder.svg?height=100&width=100"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-white"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/20 transition-all duration-300"></div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Action buttons - Improved styling and responsiveness */}
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
                      onClick={() => 

                        window.location.href = `/list-service`

                      }
                      className="flex-1 inline-flex justify-center items-center px-4 py-2.5 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                    >
                      Ver detalles <FiChevronRight className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductServiceTabs

