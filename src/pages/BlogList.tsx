"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { fetchProductById, type Product } from "../services/api"
import { FaStar } from "react-icons/fa"
import { siteConfig } from "../services/data/site-config"
import ImageCarousel from "../components/ImageCarousel"
import { PriceDisplay } from "../components/price-display"

interface ProductDetailsProps {
  productId: number | string
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const whatsappNumber = siteConfig.whatsappNumber

  useEffect(() => {
    if (productId) {
      setLoading(true)
      fetchProductById(productId)
        .then((product) => {
          setProduct(product)
          if (product?.images && product.images.length > 0) {
            setActiveImage(product.images[0])
          }

          return product
        })
        .then(() => {
          setLoading(false)
        })
        .catch((error) => {
          setError(error.message || "Error al cargar el producto")
          setLoading(false)
        })
    }
  }, [productId])

  // Función para renderizar las especificaciones técnicas
  const renderTechnicalSpecs = () => {
    if (!product || !product.technicalSpecifications) return null

    let specs: Array<{ key?: string; value: string }> = []

    if (Array.isArray(product.technicalSpecifications)) {
      specs = product.technicalSpecifications.map((spec) => ({ value: spec }))
    } else if (typeof product.technicalSpecifications === "object" && product.technicalSpecifications !== null) {
      specs = Object.entries(product.technicalSpecifications).map(([key, value]) => ({
        key,
        value: String(value),
      }))
    } else if (typeof product.technicalSpecifications === "string") {
      try {
        const parsed = JSON.parse(product.technicalSpecifications)
        if (Array.isArray(parsed)) {
          specs = parsed.map((spec) => ({ value: String(spec) }))
        } else if (typeof parsed === "object" && parsed !== null) {
          specs = Object.entries(parsed).map(([key, value]) => ({
            key,
            value: String(value),
          }))
        } else {
          specs = [{ value: String(parsed) }]
        }
      } catch {
        specs = [{ value: product.technicalSpecifications }]
      }
    }

    return (
      <div className="mb-8">
        <h4 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-200">
          Especificaciones técnicas
        </h4>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
          {specs.map((spec, i) => (
            <li key={i} className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {spec.key ? (
                <span>
                  <span className="font-medium text-gray-700 capitalize">{spec.key}: </span>
                  {spec.value}
                </span>
              ) : (
                <span>{spec.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  // Renderizar reseñas de productos
  const renderReviews = () => {

    return (
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h4 className="font-semibold text-lg text-gray-800 mb-4">Opiniones de clientes</h4>
       
      </div>
    )
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row animate-pulse">
          <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center">
            <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="md:w-1/2 p-8">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="mt-8">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <div className="h-12 bg-gray-200 rounded w-1/2"></div>
              <div className="h-12 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
          <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-red-800 mb-2">Error al cargar el producto</h3>
        <p className="text-red-600 mb-6">{error}</p>
        <a
          href="/list-blog"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Volver a la lista de productos
        </a>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-6">
          <svg className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-yellow-800 mb-2">Producto no encontrado</h3>
        <p className="text-yellow-600 mb-6">No se encontró el producto solicitado</p>
        <a
          href="/list-blog"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Volver a la lista de productos
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Sección de imágenes */}
        <div className="lg:w-1/2 p-6 lg:p-8">
          <div className="mb-4 flex justify-center">
            <div className="relative w-full h-80 sm:h-96 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
              {product.images && product.images.length > 0 ? (
                <ImageCarousel images={product.images} autoplay={false} showControls={true} />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">Sin imagen disponible</span>
                </div>
              )}
            </div>
          </div>

          {/* Miniaturas de imágenes */}
          {product.images && product.images.length > 1 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === img ? "border-blue-500 shadow-md" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} - vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="lg:w-1/2 p-6 lg:p-8 lg:border-l border-gray-100">
          <div className="mb-6">
            {product.category && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                {product.category}
              </span>
            )}
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>

            {/* Precio con descuento */}
            <div className="mb-4">
              <PriceDisplay
                currentPrice={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                size="large"
                className="bg-blue-50 px-4 py-2 rounded-lg inline-flex"
              />
            </div>

            <div className="prose prose-sm text-gray-600 mb-6">
              <p className="leading-relaxed">{product.description}</p>
            </div>
          </div>

          {/* Especificaciones técnicas */}
          {renderTechnicalSpecs()}

          {/* Sección de disponibilidad */}
          <div className="mb-6 bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="text-green-700 font-medium block">Disponible para entrega inmediata</span>
                <span className="text-green-600 text-sm">Consulta tiempos de entrega por WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <div className="mb-8">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa el producto ${product.name}${
                product.price !== undefined ? ` (${product.price.toLocaleString("es-CO")})` : ""
              }. ¿Podrían darme más información?`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-4 text-lg font-medium text-white bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Comprar por WhatsApp
            </a>
            <p className="text-center text-gray-500 text-sm mt-3">
              Contacta directamente con nosotros para consultar disponibilidad y realizar tu pedido
            </p>
          </div>

          {/* Reseñas de productos */}
          {renderReviews()}

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
                <h4 className="font-medium text-gray-800 mb-1">Envío a domicilio</h4>
                <p className="text-gray-600">Consulta costos por WhatsApp</p>
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
                <p className="text-gray-600">Productos de primera calidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
