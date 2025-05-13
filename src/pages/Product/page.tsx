"use client"

import { useEffect, useState } from "react"
import { FiChevronRight } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { Product } from "../../services/types"
import { siteConfig } from "../../services/data/site-config"
import { fetchProducts } from '../../services/api';
import Breadcumb from "../../components/Breadcumb"
import { PriceDisplay } from "../../components/price-display"
import ImageCarousel from "../../components/ImageCarousel"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const whatsappNumber = siteConfig.whatsappNumber

  const breadcumb = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Productos", link: "/products" },
  ]

  useEffect(() => {
    setLoading(true)
    fetchProducts()
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        setError("Error al cargar los productos: " + error.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Breadcumb data={breadcumb} className="mb-8" />

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Productos</h1>
          <p className="text-gray-600">
            Descubre nuestra selección de productos de limpieza profesional para todo tipo de necesidades
          </p>
        </div>

        {/* Estado de carga */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <div className="h-10 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-10 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Estado de error */}
        {!loading && error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Reintentar
            </button>
          </div>
        )}

        {/* Lista de productos */}
        {!loading && !error && (
          <>
            {products.length === 0 ? (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No hay productos disponibles</h3>
                <p className="mt-1 text-sm text-gray-500">Vuelve más tarde para ver nuestros productos.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 group"
                  >
                    <div className="relative overflow-hidden h-48">
                      {product.images && product.images.length > 0 ? (
                        <ImageCarousel images={product.images} />
                      ) : (
                        <img
                          src="/placeholder.svg"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      {/* Badge de precio */}
                      <div className="absolute top-4 right-4">
                        <PriceDisplay
                          currentPrice={product.price}
                          oldPrice={product.oldPrice}
                          discount={product.discount}
                          size="medium"
                          className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg"
                        />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                      {product.technicalSpecifications && Array.isArray(product.technicalSpecifications) && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Especificaciones:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {product.technicalSpecifications.slice(0, 2).map((spec, i) => (
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
                            {product.technicalSpecifications.length > 2 && (
                              <li className="text-blue-600 text-xs mt-1 hover:underline cursor-pointer">
                                + {product.technicalSpecifications.length - 2} más...
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el producto ${product.name}${
                            product.price !== undefined ? ` (${product.price.toLocaleString("es-CO")})` : ""
                          }. ¿Podrían darme más información?`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg shadow transition-all duration-300 hover:shadow-lg"
                        >
                          <FaWhatsapp className="mr-2 h-5 w-5" /> Más Información
                        </a>
                        <a
                          href={`/products/${product.id}`}
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
          </>
        )}
      </div>
    </div>
  )
}
