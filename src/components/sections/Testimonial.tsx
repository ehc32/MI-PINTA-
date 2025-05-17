"use client"

import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, User, UserCircle, UserRound, UserCircle2, MessageSquare, Calendar } from 'lucide-react'
import { testimonialsList } from "../../services/data/testimonials"

// Función para obtener el icono correspondiente según el nombre
const getAvatarIcon = (iconName: string) => {
  switch (iconName) {
    case "user":
      return <User className="h-10 w-10 text-blue-500 p-1" />
    case "user-circle":
      return <UserCircle className="h-10 w-10 text-blue-500 p-1" />
    case "user-round":
      return <UserRound className="h-10 w-10 text-blue-500 p-1" />
    case "user-circle-2":
      return <UserCircle2 className="h-10 w-10 text-blue-500 p-1" />
    default:
      return <User className="h-10 w-10 text-blue-500 p-1" />
  }
}

const TestimonialsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Determinar cuántos elementos mostrar según el ancho de la pantalla
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll del carrusel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Tiempo más largo para leer testimonios

    return () => clearInterval(interval)
  }, [currentIndex, isPaused, itemsToShow])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= testimonialsList.length - (itemsToShow - 1) ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonialsList.length - itemsToShow : prevIndex - 1))
  }

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios de clientes satisfechos con nuestros servicios de limpieza profesional
          </p>
        </div>

        {/* Carrusel de testimonios */}
        <div className="relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {testimonialsList.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsToShow}%` }}>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200 h-full flex flex-col">
                    <div className="mb-4">
                      <MessageSquare className="h-8 w-8 text-blue-500 mb-2" />
                      <p className="text-gray-700 italic mb-4">"{testimonial.testimonial}"</p>

                      {testimonial.date && (
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{testimonial.date}</span>
                        </div>
                      )}

                      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                        <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                          {getAvatarIcon(testimonial.avatar)}
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.service}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, index) => (
                          <Star key={index} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles del carrusel */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-blue-50 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-blue-50 transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: testimonialsList.length - (itemsToShow - 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCarousel