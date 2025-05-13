// Definimos la interfaz para los testimonios
export interface Testimonial {
    id: number
    name: string
    avatar: string
    testimonial: string
    service: string
    rating: number
    date?: string // Campo opcional para fecha
  }
  
  // Datos de testimonios
  export const testimonialsList: Testimonial[] = [
    {
      id: 1,
      name: "María García",
      avatar: "/avatars/avatar-1.png",
      testimonial: "Excelente servicio. Me dejaron mis muebles muy limpios y como nuevos. Muchas gracias 👏",
      service: "Lavado de Muebles",
      rating: 5,
      date: "15/04/2023"
    },
    {
      id: 2,
      name: "Carolina Mendoza",
      avatar: "/avatars/avatar-2.png",
      testimonial:
        "¡Muchas gracias por dejar mis muebles como nuevos! Hicieron un excelente trabajo; se nota el cuidado, la dedicación en cada detalle y el uso de productos de muy buena calidad. ¡Quedé encantada!",
      service: "Lavado de Muebles",
      rating: 5,
      date: "23/05/2023"
    },
    {
      id: 3,
      name: "Juan Pérez",
      avatar: "/avatars/avatar-3.png",
      testimonial:
        "Me lavaron dos colchones que estaban en mi parecer para ser cambiados. Me decidí a lavarlos con ellos y me quedaron muyy limpios y desinfectados de ácaros. Tienen excelente equipos y personal muy profesional y amables. Recomendadisimos.!",
      service: "Lavado de Colchones",
      rating: 5,
      date: "07/06/2023"
    },
    {
      id: 4,
      name: "Roberto Sánchez",
      avatar: "/avatars/avatar-4.png",
      testimonial: "Excelente servicio, Dejaron la tapicería de mi vehículo muy limpia y quitaron las manchas qué tenía",
      service: "Tapicería de Vehículos",
      rating: 5,
      date: "12/07/2023"
    },
    {
      id: 5,
      name: "Ana Martínez",
      avatar: "/avatars/avatar-5.png",
      testimonial: "Super recomendado, excelente el resultado",
      service: "Lavado de Tapetes",
      rating: 5,
      date: "30/08/2023"
    },
    {
      id: 6,
      name: "Luis Rodríguez",
      avatar: "/avatars/avatar-6.png",
      testimonial:
        "Contratamos el servicio para nuestra oficina y quedamos muy satisfechos. Profesionales, puntuales y con excelentes resultados. Definitivamente los volveremos a contratar.",
      service: "Sillas de Oficina",
      rating: 5,
      date: "18/09/2023"
    },
  ]
  