// Configuración general del sitio
export const siteConfig = {
  name: "MI PINTA",
  description: "Servicios de lavandería y limpieza profesional a domicilio",
  logo: "/placeholder.svg", 
  whatsappNumber: "+57 310 5739097",
  email: "contacto@lavanderiaprofesional.com",
  phone: "+57 3105739097",
  address: "Calle Principal #123, Ciudad",
  socialMedia: {
    facebook: "https://facebook.com/lavanderiaprofesional",
    instagram: "https://instagram.com/lavanderiaprofesional",
    twitter: "https://twitter.com/lavanderiapro",
  },
}

// Datos de respaldo para productos
export const backupProducts = [
  {
    id: 1,
    name: "Limpiador Profesional Multiusos",
    description:
      "Limpiador concentrado para todo tipo de superficies. Ideal para uso doméstico y comercial. Elimina manchas difíciles y deja un agradable aroma.",
    price: 45000,
    oldPrice: 55000,
    discount: 18,
    category: "Limpiadores",
    images: [
      "https://cdn-icons-png.flaticon.com/512/2553/2553629.png",
      "https://cdn-icons-png.flaticon.com/512/2553/2553691.png",
      "https://cdn-icons-png.flaticon.com/512/2553/2553635.png",
    ],
    technicalSpecifications: [
      "Contenido: 1 litro",
      "Biodegradable",
      "pH neutro",
      "Aroma: Lavanda",
      "Rinde hasta 20 aplicaciones",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Máquina Limpiadora de Tapicería",
    description:
      "Equipo profesional para la limpieza profunda de tapicería, muebles, colchones y alfombras. Potente succión y sistema de inyección-extracción.",
    price: 1200000,
    category: "Equipos",
    images: [
      "https://cdn-icons-png.flaticon.com/512/2929/2929032.png",
      "https://cdn-icons-png.flaticon.com/512/2929/2929088.png",
    ],
    technicalSpecifications: [
      "Potencia: 1800W",
      "Capacidad: 15 litros",
      "Presión: 4 bar",
      "Incluye accesorios para diferentes superficies",
      "Garantía: 1 año",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Kit de Limpieza para Vehículos",
    description:
      "Kit completo para la limpieza interior y exterior de vehículos. Incluye productos especializados para tapicería, plásticos, vidrios y carrocería.",
    price: 85000,
    oldPrice: 95000,
    discount: 10,
    category: "Kits",
    images: [
      "https://cdn-icons-png.flaticon.com/512/3097/3097140.png",
      "https://cdn-icons-png.flaticon.com/512/3097/3097156.png",
      "https://cdn-icons-png.flaticon.com/512/3097/3097158.png",
    ],
    technicalSpecifications: [
      "5 productos especializados",
      "2 paños de microfibra",
      "1 cepillo para tapicería",
      "1 esponja para carrocería",
      "Instructivo de uso",
    ],
    featured: false,
  },
]

// Datos de respaldo para servicios
export const backupServices = [
  {
    _id: "1",
    title: "Lavado de Tapetes",
    details:
      "Servicio profesional de lavado de tapetes con equipo especializado. Eliminamos manchas, ácaros y olores. Incluye recogida y entrega a domicilio.",
    cost: 50000,
    user: "admin",
    images: ["https://cdn-icons-png.flaticon.com/512/2553/2553629.png"],
    videos: [],
    __v: 0,
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
    __v: 0,
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
    user: "admin",
    images: ["https://cdn-icons-png.flaticon.com/512/3030/3030336.png"],
    videos: [],
    __v: 0,
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
export const backupReviews = [
  { rating: 5, comment: "Excelente producto, muy efectivo", userName: "Carlos M." },
  { rating: 4, comment: "Buen producto, recomendado", userName: "Ana L." },
  { rating: 5, comment: "Superó mis expectativas, lo volvería a comprar", userName: "Juan P." },
  { rating: 4, comment: "Muy buena calidad, entrega rápida", userName: "María G." },
]

// Datos para el header
export const headerData = {
  title: "Servicio de <span class='text-blue-600'>Lavandería</span> Profesional",
  subtitle: "Servicio Profesional de Limpieza",
  description:
    "Nuestro servicio más completo incluye recogida y entrega a domicilio. Ideal para la limpieza de tapicería, muebles, colchones y prendas especiales. Utilizamos equipos profesionales y productos de alta calidad.",
  image: "/placeholder.svg", // Reemplazar con la ruta real de la imagen
  features: ["Entrega rápida", "Garantía de calidad", "Atención personalizada"],
  badge: {
    title: "Calidad garantizada",
    subtitle: "100% Satisfacción",
  },
}

// Datos para la navegación
export const navigationLinks = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/list-blog" },
  { name: "Servicios", href: "/list-service" },
  { name: "Nuestro Equipo", href: "/Nosotros" },

]

// Datos para el footer
export const footerData = {
  columns: [
    {
      title: "Productos",
      links: [
        { name: "Limpiadores", href: "/list-blog?category=limpiadores" },
        { name: "Equipos", href: "/list-blog?category=equipos" },
        { name: "Kits", href: "/list-blog?category=kits" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { name: "Lavado de Tapetes", href: "/services/1" },
        { name: "Limpieza de Muebles", href: "/services/2" },
        { name: "Lavado de Colchones", href: "/services/3" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "/about" },
        { name: "Contacto", href: "/contact" },
        { name: "Términos y Condiciones", href: "/terms" },
      ],
    },
  ],
  copyright: "© 2023 Lavandería Profesional. Todos los derechos reservados.",
}
