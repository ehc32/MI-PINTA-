"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  autoplay?: boolean
  interval?: number
  showControls?: boolean
  aspectRatio?: "square" | "video" | "wide" | "auto"
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplay = true,
  interval = 5000,
  showControls = true,
  aspectRatio = "auto",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Determinar la clase de aspect ratio
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    auto: "aspect-auto", // Añadido modo auto que respeta las proporciones originales
  }[aspectRatio]

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setImageLoaded(false)
  }

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setImageLoaded(false)
  }

  // Configurar autoplay
  useEffect(() => {
    if (!autoplay || images.length <= 1) return

    const timer = setInterval(nextImage, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval, images.length])

  // Si no hay imágenes, mostrar un placeholder
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">Sin imagen</span>
      </div>
    )
  }

  // Si solo hay una imagen, mostrarla sin controles
  if (images.length === 1) {
    return (
      <div className="relative w-full h-64 flex items-center justify-center bg-white p-2 overflow-hidden">
        <img
          src={images[0] || "/placeholder.svg"}
          alt="Imagen"
          className="max-w-full max-h-full object-contain"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    )
  }

  return (
    <div className="relative w-full h-64 overflow-hidden group bg-white">
      {/* Imagen actual */}
      <div className="w-full h-full flex items-center justify-center p-2">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Imagen ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Controles de navegación */}
      {showControls && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Indicadores de posición */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-300"}`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
