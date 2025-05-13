import { services } from "./data/services"
import { products } from "./data/products"
import { Product, ProductReview, Service } from "./types"

// Función para obtener productos
export async function fetchProducts(): Promise<Product[]> {
  // En un entorno real, aquí se haría una llamada a una API
  // Por ahora, simplemente devolvemos los datos estáticos
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500) // Simulamos un pequeño retraso para mostrar el estado de carga
  })
}

// Función para obtener servicios
export async function fetchServices(): Promise<Service[]> {
  // En un entorno real, aquí se haría una llamada a una API
  // Por ahora, simplemente devolvemos los datos estáticos
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(services)
    }, 500) // Simulamos un pequeño retraso para mostrar el estado de carga
  })
}

// Función para obtener un producto por ID
export async function fetchProductById(id: number | string): Promise<Product | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const numericId = typeof id === "string" ? Number.parseInt(id, 10) : id
      const product = products.find((p) => p.id === numericId) || null
      resolve(product)
    }, 300)
  })
}

// Función para obtener un servicio por ID
export async function fetchServiceById(id: string): Promise<Service | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const service = services.find((s) => s._id === id) || null
      resolve(service)
    }, 300)
  })
}


const reviews: ProductReview[] = [
  { id: 1, productId: 1, rating: 5, comment: "Excelente producto", user: "John Doe" },
  { id: 2, productId: 2, rating: 4, comment: "Muy bueno", user: "Jane Smith" },
];

export async function fetchProductReviews(productId: number): Promise<ProductReview[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productReviews = reviews.filter((review) => review.productId === productId);
      resolve(productReviews);
    }, 300);
  });
}
// Re-exportamos los tipos para facilitar su uso
export type { Product, Service }
