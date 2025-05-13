import type { Product } from "../types"

export const products: Product[] = [
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
      "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no.png",
      "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no",
      "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no",
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
        "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no",
        "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no",
        "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no",
      ],    technicalSpecifications: [
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
        "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no",
        "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no",
        "https://lh3.googleusercontent.com/geougc/AF1QipP0hMDZ0kJtDxELmeBcj1yQXRGs3UJSSi8d5Xhp=w290-h163-p-no",
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
