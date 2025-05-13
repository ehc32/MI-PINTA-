import { Service } from "../types"

// Datos de servicios
export const services: Service[] = [
  {
    _id: "1",
    title: "Lavado de Tapetes",
    details:
      "Servicio profesional de lavado de tapetes con equipo especializado. Eliminamos manchas, ácaros y olores. Incluye recogida y entrega a domicilio.",
    cost: 50000,
    oldCost: 60000,
    discount: 17,
    user: "admin",
    images: ["https://cdn-icons-png.flaticon.com/512/2553/2553629.png"],
    videos: [],
    featured: true,
    benefits: [
      "Eliminación de manchas difíciles",
      "Tratamiento anti-ácaros",
      "Secado rápido",
      "Recogida y entrega a domicilio",
      "Productos ecológicos",
    ],
    process: [
      "Inspección y evaluación inicial",
      "Pre-tratamiento de manchas",
      "Lavado profundo con equipo especializado",
      "Enjuague y extracción",
      "Secado controlado",
    ],
  },
  {
    _id: "2",
    title: "Limpieza de Muebles",
    details:
      "Limpieza profunda de muebles y sofás con sistema de inyección-extracción. Eliminamos manchas y revitalizamos los colores de la tapicería.",
    cost: 120000,
    user: "admin",
    images: ["https://cdn-icons-png.flaticon.com/512/2929/2929032.png"],
    videos: [],
    featured: true,
    benefits: [
      "Eliminación de manchas y olores",
      "Revitalización de colores",
      "Tratamiento anti-ácaros",
      "Protección contra manchas futuras",
      "Secado rápido",
    ],
    process: [
      "Aspirado profundo",
      "Aplicación de pre-tratamiento",
      "Limpieza con sistema de inyección-extracción",
      "Aplicación de protector",
      "Secado",
    ],
  },
  {
    _id: "3",
    title: "Lavado de Colchones",
    details:
      "Servicio especializado para la limpieza y desinfección de colchones. Eliminamos ácaros, bacterias y alérgenos. Ideal para personas con alergias.",
    cost: 80000,
    oldCost: 95000,
    discount: 16,
    user: "admin",
    images: ["https://cdn-icons-png.flaticon.com/512/3030/3030336.png"],
    videos: [],
    featured: false,
    benefits: [
      "Eliminación de ácaros y alérgenos",
      "Desinfección profunda",
      "Eliminación de manchas",
      "Tratamiento anti-bacteriano",
      "Ideal para personas con alergias",
    ],
    process: [
      "Aspirado profundo",
      "Aplicación de tratamiento anti-ácaros",
      "Limpieza con vapor a alta temperatura",
      "Extracción de residuos",
      "Secado y sanitización UV",
    ],
  },
]

// Datos de respaldo para reseñas
export const reviews = [
  { rating: 5, comment: "Excelente producto, muy efectivo", userName: "Carlos M." },
  { rating: 4, comment: "Buen producto, recomendado", userName: "Ana L." },
  { rating: 5, comment: "Superó mis expectativas, lo volvería a comprar", userName: "Juan P." },
  { rating: 4, comment: "Muy buena calidad, entrega rápida", userName: "María G." },
]
