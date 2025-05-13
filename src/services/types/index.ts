// Definición de tipos para productos y servicios

export interface Product {
    id: number
    name: string
    description: string
    price: number
    oldPrice?: number
    discount?: number
    category: string
    images: string[]
    technicalSpecifications?: string[]
    featured?: boolean
  }
  
  export interface Service {
    _id: string
    title: string
    details: string
    cost: number
    oldCost?: number
    discount?: number
    user: string
    images: string[]
    videos?: string[]
    featured?: boolean
    benefits?: string[]
    process?: string[]
  }
  
  export interface SiteConfig {
    name: string
    description: string
    logo: string
    whatsappNumber: string
    email: string
    phone: string
    address: string
    socialMedia: {
      facebook: string
      instagram: string
      twitter: string
    }
  }
  