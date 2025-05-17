import { SiteConfig } from "../types"

// Configuración general del sitio
export const siteConfig: SiteConfig = {
  name: "Lavandería Profesional",
  description: "Servicios de lavandería y limpieza profesional a domicilio",
  logo: "/placeholder.svg",
  whatsappNumber: "573105739097",
  email: "contacto@lavanderiaprofesional.com",
  phone: "+57 3105739097",
  address: "Calle Principal #123, Ciudad",
  socialMedia: {
    facebook: "https://facebook.com/lavanderiaprofesional",
    instagram: "https://instagram.com/lavanderiaprofesional",
    twitter: "https://twitter.com/lavanderiapro",
  },
};

// Datos para el header
export const headerData = {
  title: "Servicio de <span class='text-blue-600'>Lavandería</span> Profesional",
  subtitle: "Servicio Profesional de Limpieza",
  description:
    "Nuestro servicio más completo incluye recogida y entrega a domicilio. Ideal para la limpieza de tapicería, muebles, colchones y prendas especiales. Utilizamos equipos profesionales y productos de alta calidad.",
  image: "/placeholder.svg",
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
