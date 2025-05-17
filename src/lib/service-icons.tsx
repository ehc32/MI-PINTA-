import {  LuSofa, LuBed, LuCar } from "react-icons/lu"
import { FaChair } from "react-icons/fa"
import { MdCleaningServices } from "react-icons/md"
import { LucideSquarePercent } from "lucide-react"

export function getServiceIcon(serviceTitle: string | undefined) {
  if (!serviceTitle) return <MdCleaningServices size={64} />

  const title = serviceTitle.toLowerCase()

  if (title.includes("tapete")) return < size={64} />
  if (title.includes("mueble") || title.includes("sofa")) return <LuSofa size={64} />
  if (title.includes("colchon")) return <LuBed size={64} />
  if (title.includes("silla")) return <FaChair size={64} />
  if (title.includes("vehiculo") || title.includes("carro") || title.includes("auto")) return <LuCar size={64} />
  if (title.includes("cortina")) return <LucideSquarePercent size={64} />

  // Default icon for other services
  return <MdCleaningServices size={64} />
}

export function getServiceIconLarge(serviceTitle: string | undefined) {
  if (!serviceTitle) return <MdCleaningServices size={128} />

  const title = serviceTitle.toLowerCase()

  if (title.includes("tapete")) return <LucideSquarePercent size={128} />
  if (title.includes("mueble") || title.includes("sofa")) return <LuSofa size={128} />
  if (title.includes("colchon")) return <LuBed size={128} />
  if (title.includes("silla")) return <FaChair size={128} />
  if (title.includes("vehiculo") || title.includes("carro") || title.includes("auto")) return <LuCar size={128} />
  if (title.includes("cortina")) return <LucideSquarePercent size={128} />

  // Default icon for other services
  return <MdCleaningServices size={128} />
}
