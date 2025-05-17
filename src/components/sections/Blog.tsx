"use client"

import { useState, useEffect } from "react"
import { FiChevronRight, FiPackage, FiTool } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { fetchProducts, fetchServices, type Product, type Service } from "../../services/api"
import { siteConfig } from "../../services/data/site-config"

const ProductServiceTabs = () => {
  const [activeTab, setActiveTab] = useState<"products" | "services">("products")
  const [products, setProducts] = useState<Product[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const whatsappNumber = siteConfig.whatsappNumber

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        if (activeTab === "products") {
          const productsData = await fetchProducts()
          
          // Validar y limpiar datos de productos
          const cleanedProducts = productsData.map(product => ({
            ...product,
            images: Array.isArray(product.images) 
              ? product.images.filter(img => img && typeof img === 'string' && img.trim() !== '')
              : []
          }));
          
          console.log("Productos cargados:", cleanedProducts);
          setProducts(cleanedProducts)
        } else {
          const servicesData = await fetchServices()
          
          // Validar y limpiar datos de servicios
          const cleanedServices = servicesData.map(service => ({
            ...service,
            images: Array.isArray(service.images) 
              ? service.images.filter(img => img && typeof img === 'string' && img.trim() !== '')
              : []
          }));
          
          console.log("Servicios cargados:", cleanedServices);
          setServices(cleanedServices)
        }
        setError(null)
      } catch (err) {
        console.error("Error al cargar datos:", err);
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [activeTab])

  // Función para verificar si una imagen es válida
  const getValidImageUrl = (url: string | undefined): string => {
    if (!url || typeof url !== 'string' || url.trim() === '') {
      return '/placeholder.svg?height=300&width=400';
    }
    return url;
  };

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
            {products.length > 0 ? (
              products.map((product, idx) => (
                <div
                  key={product.id || idx}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    {/* Mostrar solo la primera imagen disponible */}
                    <img
                      src={getValidImageUrl(product.images?.[0]) || "/placeholder.svg?height=300&width=400"}
                      alt={product.name || "Producto"}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        console.error("Error al cargar imagen:", product.images?.[0]);
                        e.currentTarget.src = "/placeholder.svg?height=300&width=400";
                      }}
                    />
                    
                    {/* Badge de precio */}
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No hay productos disponibles en este momento.</p>
              </div>
            )}
          </div>
        )}

        {/* Contenido de Servicios */}
        {activeTab === "services" && !loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.length > 0 ? (
              services.map((service, idx) => (
                <div
                  key={service._id || idx}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 group"
                >
                  {/* Media Section - Simplificado a una sola imagen */}
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
                            src={getValidImageUrl(service.images[0]) || "/placeholder.svg?height=300&width=400"}
                            alt={service.title || "Servicio"}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              console.error("Error al cargar imagen de servicio:", service.images?.[0]);
                              e.currentTarget.src = "/placeholder.svg?height=300&width=400";
                            }}
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
                        onClick={() => window.location.href = `/list-service`}
                        className="flex-1 inline-flex justify-center items-center px-4 py-2.5 text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                      >
                        Ver detalles <FiChevronRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No hay servicios disponibles en este momento.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductServiceTabs;