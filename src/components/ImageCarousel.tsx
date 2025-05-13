"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  autoplay?: boolean
  interval?: number
  showControls?: boolean
  aspectRatio?: "square" | "video" | "wide" | "auto"
  className?: string
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplay = true,
  interval = 5000,
  showControls = true,
  aspectRatio = "auto",
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Determinar la clase de aspect ratio
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    auto: "aspect-auto",
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
      <div className={`relative w-full bg-muted rounded-lg flex items-center justify-center ${aspectRatioClass} ${className}`}>
        <span className="text-muted-foreground">Sin imagen</span>
      </div>
    )
  }

  // Si solo hay una imagen, mostrarla sin controles
  if (images.length === 1) {
    return (
      <div className={`relative w-full overflow-hidden rounded-lg bg-background ${aspectRatioClass} ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center p-2">
          <img
            src={images[0] || "/placeholder.svg?height=400&width=600"}
            alt="Imagen"
            className={`w-full h-full object-contain ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-lg bg-background group ${aspectRatioClass} ${className}`}>
      {/* Contenedor de imágenes con transición */}
      <div className="absolute inset-0 flex items-center justify-center p-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src || "/placeholder.svg?height=400&width=600"}
            alt={`Imagen ${index + 1}`}
            className={`absolute w-full h-full object-contain transition-all duration-500 ${
              index === currentIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
            onLoad={() => {
              if (index === currentIndex) setImageLoaded(true)
            }}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Controles de navegación */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary z-10"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicadores de posición */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-primary w-6" 
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
