import type React from "react"

interface PriceDisplayProps {
  currentPrice: number
  oldPrice?: number
  discount?: number
  size?: "small" | "medium" | "large"
  className?: string
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  currentPrice,
  oldPrice,
  discount,
  size = "medium",
  className = "",
}) => {
  // Determinar tamaños basados en la prop size
  const priceClasses = {
    small: "text-lg font-bold",
    medium: "text-xl font-bold",
    large: "text-3xl font-bold",
  }

  const oldPriceClasses = {
    small: "text-sm line-through text-gray-500",
    medium: "text-base line-through text-gray-500",
    large: "text-xl line-through text-gray-500",
  }

  const discountClasses = {
    small: "text-xs font-medium bg-red-500 text-white px-1.5 py-0.5 rounded-full",
    medium: "text-sm font-medium bg-red-500 text-white px-2 py-0.5 rounded-full",
    large: "text-base font-medium bg-red-500 text-white px-2.5 py-1 rounded-full",
  }

  // Si hay descuento pero no hay oldPrice, calculamos el oldPrice
  const calculatedOldPrice = oldPrice || (discount ? Math.round(currentPrice / (1 - discount / 100)) : undefined)

  // Si hay oldPrice pero no hay descuento, calculamos el descuento
  const calculatedDiscount = discount || (oldPrice ? Math.round((1 - currentPrice / oldPrice) * 100) : undefined)

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={priceClasses[size]}>${currentPrice.toLocaleString("es-CO")}</span>

      {calculatedOldPrice && (
        <span className={oldPriceClasses[size]}>${calculatedOldPrice.toLocaleString("es-CO")}</span>
      )}

      {calculatedDiscount && calculatedDiscount > 0 && (
        <span className={discountClasses[size]}>-{calculatedDiscount}%</span>
      )}
    </div>
  )
}
