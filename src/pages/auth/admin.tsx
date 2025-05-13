"use client"

import type React from "react"
import { useState } from "react"
import { FiX, FiUpload, FiPlus, FiTrash2 } from "react-icons/fi"
import type { Product, ProductFormData } from "../../services/api"

interface ProductFormProps {
  initialData?: Product
  onSubmit: (data: ProductFormData) => Promise<void>
  onCancel: () => void
  isSubmitting: boolean
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit, onCancel, isSubmitting }) => {
  const [name, setName] = useState(initialData?.name || "")
  const [description, setDescription] = useState(initialData?.description || "")
  const [price, setPrice] = useState(initialData?.price?.toString() || "")
  const [images, setImages] = useState<File[]>([])
  const [existingImages, setExistingImages] = useState<string[]>(initialData?.images || [])
  const [specs, setSpecs] = useState<string[]>(initialData?.technicalSpecifications || [])
  const [newSpec, setNewSpec] = useState("")
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Manejar carga de imágenes
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)

      // Limitar a 5 imágenes en total (existentes + nuevas)
      const totalImages = existingImages.length + images.length + fileArray.length
      if (totalImages > 5) {
        alert("Solo puedes subir un máximo de 5 imágenes en total.")
        return
      }

      setImages([...images, ...fileArray])

      // Crear previsualizaciones
      const newPreviews = fileArray.map((file) => URL.createObjectURL(file))
      setImagePreviews([...imagePreviews, ...newPreviews])
    }
  }

  // Eliminar imagen existente
  const removeExistingImage = (index: number) => {
    setExistingImages(existingImages.filter((_, i) => i !== index))
  }

  // Eliminar imagen nueva
  const removeNewImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))

    // Revocar URL de objeto para evitar fugas de memoria
    URL.revokeObjectURL(imagePreviews[index])
    setImagePreviews(imagePreviews.filter((_, i) => i !== index))
  }

  // Añadir especificación técnica
  const addSpec = () => {
    if (newSpec.trim()) {
      setSpecs([...specs, newSpec.trim()])
      setNewSpec("")
    }
  }

  // Eliminar especificación técnica
  const removeSpec = (index: number) => {
    setSpecs(specs.filter((_, i) => i !== index))
  }

  // Validar formulario
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!name.trim()) newErrors.name = "El nombre es obligatorio"
    if (!description.trim()) newErrors.description = "La descripción es obligatoria"
    if (!price || isNaN(Number(price)) || Number(price) <= 0) {
      newErrors.price = "El precio debe ser un número mayor que cero"
    }

    if (existingImages.length === 0 && images.length === 0) {
      newErrors.images = "Debes subir al menos una imagen"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const formData: ProductFormData = {
      name,
      description,
      price: Number(price),
      images,
      technicalSpecifications: specs,
    }

    await onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre del producto <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Ej: Detergente Premium Ecológico"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Descripción <span className="text-red-500">*</span>
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Describe el producto detalladamente..."
        />
        {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Precio <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>
        {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Imágenes <span className="text-red-500">*</span>
          <span className="text-xs text-gray-500 ml-2">(Máximo 5 imágenes)</span>
        </label>

        {/* Imágenes existentes */}
        {existingImages.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Imágenes actuales:</p>
            <div className="flex flex-wrap gap-3">
              {existingImages.map((img, idx) => (
                <div key={`existing-${idx}`} className="relative group">
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Imagen ${idx + 1}`}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => removeExistingImage(idx)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Eliminar imagen"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nuevas imágenes */}
        {imagePreviews.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">Nuevas imágenes:</p>
            <div className="flex flex-wrap gap-3">
              {imagePreviews.map((preview, idx) => (
                <div key={`preview-${idx}`} className="relative group">
                  <img
                    src={preview || "/placeholder.svg"}
                    alt={`Vista previa ${idx + 1}`}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => removeNewImage(idx)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Eliminar imagen"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selector de archivos */}
        <div className="mt-2">
          <label
            className={`flex justify-center items-center px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
              errors.images ? "border-red-300 bg-red-50" : "border-gray-300"
            }`}
          >
            <div className="text-center">
              <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-1 text-sm text-gray-600">Haz clic para seleccionar o arrastra y suelta</p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
            </div>
            <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" multiple />
          </label>
          {errors.images && <p className="mt-1 text-sm text-red-500">{errors.images}</p>}
          <p className="mt-2 text-xs text-gray-500">{5 - existingImages.length - images.length} imágenes restantes</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Especificaciones técnicas</label>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            value={newSpec}
            onChange={(e) => setNewSpec(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ej: 100% biodegradable"
          />
          <button
            type="button"
            onClick={addSpec}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiPlus />
          </button>
        </div>

        {specs.length > 0 && (
          <div className="mt-3 space-y-2">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg">
                <span>{spec}</span>
                <button
                  type="button"
                  onClick={() => removeSpec(idx)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Eliminar especificación"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          disabled={isSubmitting}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Guardando..." : initialData ? "Actualizar producto" : "Crear producto"}
        </button>
      </div>
    </form>
  )
}

export default ProductForm
