import { Service } from "../types"

// Datos de servicios
export const services: Service[] = [
  {
    _id: "1",
    title: "Lavado de Tapetes",
    details:
      "Servicio profesional de lavado de tapetes con equipo especializado. Eliminamos manchas, ácaros y olores. Incluye recogida y entrega a domicilio.",
    
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
    title: "Lavado de Muebles",
    details:
      "Limpieza profunda de muebles y sofás con sistema de inyección-extracción. Eliminamos manchas y revitalizamos los colores de la tapicería.",
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
  {
    _id: "4",
    title: "Lavado de Sillas de Oficina",
    details:
      "Servicio especializado para la limpieza y desinfección de sillas de oficina. Eliminamos manchas, polvo acumulado y gérmenes de la tapicería.",
    user: "admin",
    images: ["https://cdn-icons-png.flaticon.com/512/2829/2829661.png"],
    videos: [],
    featured: false,
    benefits: [
      "Eliminación de manchas y suciedad",
      "Desinfección completa",
      "Mejora la apariencia y durabilidad",
      "Servicio a domicilio",
      "Secado rápido para uso inmediato",
    ],
    process: [
      "Inspección inicial",
      "Aspirado profundo",
      "Aplicación de solución limpiadora",
      "Limpieza con equipo especializado",
      "Secado y finalización",
    ],
  },
  {
    _id: "5",
    title: "Lavado de Tapicería de Vehículos",
    details:
      "Servicio profesional para la limpieza de asientos, alfombras y tapicería interior de vehículos. Eliminamos manchas difíciles y malos olores.",
    user: "admin",
    images: ["https://cdn-icons-png.flaticon.com/512/3097/3097180.png"],
    videos: [],
    featured: true,
    benefits: [
      "Eliminación de manchas profundas",
      "Neutralización de olores",
      "Tratamiento antibacteriano",
      "Protección contra rayos UV",
      "Servicio a domicilio",
    ],
    process: [
      "Evaluación del estado de la tapicería",
      "Aspirado profundo",
      "Pre-tratamiento de manchas",
      "Limpieza con sistema de inyección-extracción",
      "Aplicación de protector y secado",
    ],
  },
  {
    _id: "6",
    title: "Lavado de Cortinas",
    details:
      "Servicio especializado para la limpieza de cortinas de todo tipo sin necesidad de desmontar. Eliminamos polvo, ácaros y alérgenos acumulados.",
    user: "admin",
    images: ["https://cdn-icons-png.flaticon.com/512/1606/1606807.png"],
    videos: [],
    featured: false,
    benefits: [
      "Limpieza sin desmontar",
      "Eliminación de polvo y alérgenos",
      "Revitalización de colores",
      "Tratamiento anti-estático",
      "Servicio a domicilio",
    ],
    process: [
      "Inspección del tipo de tela",
      "Aspirado inicial",
      "Aplicación de solución limpiadora específica",
      "Limpieza con equipo especializado",
      "Secado controlado",
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