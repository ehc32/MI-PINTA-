interface EquipoCardProps {
    nombre: string
    imagen: string
    descripcion: string
  }
  
  export default function EquipoCard({ nombre, imagen, descripcion }: EquipoCardProps) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg group h-full">
        <div className="relative h-56 w-full">
          <img
            src={imagen || "/placeholder.svg"}
            alt={nombre}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{nombre}</h3>
          <p className="text-gray-600">{descripcion}</p>
        </div>
      </div>
    )
  }
  