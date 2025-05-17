"use client"

import { useState, useEffect, useRef } from "react"
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
  const [isLoading, setIsLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})
  const carouselRef = useRef<HTMLDivElement>(null)
  
  // Filtrar imágenes válidas y registrar las que no lo son
  const validImages = images?.filter((img, index) => {
    const isValid = img && typeof img === 'string' && img.trim() !== '';
    if (!isValid) {
      console.warn(`Imagen inválida en índice ${index}:`, img);
    }
    return isValid;
  }) || [];

  // Determinar la clase de aspect ratio
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/9]",
    auto: "aspect-auto",
  }[aspectRatio];

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    if (validImages.length <= 1) return;
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validImages.length);
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    if (validImages.length <= 1) return;
    setIsLoading(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + validImages.length) % validImages.length);
  };

  // Función para manejar errores de carga de imágenes
  const handleImageError = (index: number) => {
    console.error(`Error al cargar la imagen en índice ${index}:`, validImages[index]);
    setImageErrors(prev => ({ ...prev, [index]: true }));
    setIsLoading(false);
  };

  // Función para manejar la carga exitosa de imágenes
  const handleImageLoad = (index: number) => {
    if (index === currentIndex) {
      setIsLoading(false);
    }
  };

  // Configurar autoplay
  useEffect(() => {
    if (!autoplay || validImages.length <= 1) return;

    const timer = setInterval(nextImage, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, validImages.length]);

  // Registrar información de depuración al montar el componente
  useEffect(() => {
    console.log("ImageCarousel montado con:", {
      imagesCount: images?.length || 0,
      validImagesCount: validImages.length,
      firstImage: validImages[0] || "ninguna",
    });
    
    // Precargar imágenes
    validImages.forEach((src, index) => {
      const img = new Image();
      img.onload = () => console.log(`Imagen ${index} precargada correctamente:`, src);
      img.onerror = () => console.error(`Error al precargar imagen ${index}:`, src);
      img.src = src;
    });
  }, [images, validImages]);

  // Si no hay imágenes válidas, mostrar un placeholder
  if (validImages.length === 0) {
    return (
      <div className={`relative w-full bg-gray-100 rounded-lg flex items-center justify-center ${aspectRatioClass} ${className}`}>
        <span className="text-gray-500">Sin imagen disponible</span>
      </div>
    );
  }

  // Si solo hay una imagen, mostrarla sin controles
  if (validImages.length === 1) {
    return (
      <div className={`relative w-full overflow-hidden rounded-lg bg-gray-50 ${aspectRatioClass} ${className}`} ref={carouselRef}>
        <div className="absolute inset-0 flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {imageErrors[0] ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-500">Error al cargar la imagen</span>
            </div>
          ) : (
            <img
              src={validImages[0] || "/placeholder.svg"}
              alt="Imagen"
              className="w-full h-full object-contain"
              onLoad={() => handleImageLoad(0)}
              onError={() => handleImageError(0)}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full overflow-hidden rounded-lg bg-gray-50 group ${aspectRatioClass} ${className}`}
      ref={carouselRef}
    >
      {/* Indicador de carga */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {/* Contenedor de imágenes */}
      <div className="absolute inset-0">
        {validImages.map((src, index) => (
          <div 
            key={`img-${index}`}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {imageErrors[index] ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <span className="text-gray-500">Error al cargar la imagen</span>
              </div>
            ) : (
              <img
                src={src || "/placeholder.svg"}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-contain"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      {showControls && validImages.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 focus:outline-none z-30"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 focus:outline-none z-30"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicadores de posición */}
      {validImages.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-30">
          {validImages.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => {
                setIsLoading(true);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-blue-600 w-6" 
                  : "bg-gray-300 hover:bg-gray-400 w-2"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;