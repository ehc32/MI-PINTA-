"use client"

import type React from "react"

import { useState } from "react"
import { FiPhone, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi"
import PrimaryButton from "../buttons/PrimaryButton"
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  const whatsappNumber = "310 5739097" // Asegúrate de poner tu número REAL sin espacios ni signos

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir el mensaje para WhatsApp
    const message = `
*Nuevo contacto desde el sitio web*
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Teléfono: ${formData.phone}
Mensaje: ${formData.details}
    `.trim()

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message)

    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")

    // Opcional: resetear el formulario
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      details: "",
    })
  }

  return (
    <div className="border-t border-gray-200">
      <div className="max-w-[75rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto" id="contact">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contáctanos</h1>
            <p className="mt-2 text-gray-600">
              Estamos aquí para ayudarte. Completa el formulario y te responderemos a la brevedad.
            </p>
          </div>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Formulario */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
              <h2 className="mb-8 text-xl font-semibold text-gray-800">Completa el formulario</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="sr-only">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Nombre"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Apellido"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="details" className="sr-only">
                      Detalles
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      placeholder="Detalles"
                      value={formData.details}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4 grid">
                  <PrimaryButton type="submit" as="button" className="w-full">
                    Enviar consulta
                  </PrimaryButton>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">Te responderemos en 1-2 días hábiles.</p>
                </div>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-bold">Información de contacto</h3>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center gap-3">
                    <FiPhone className="h-5 w-5 text-blue-800" />
                    <span>+57 310 5739097</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMail className="h-5 w-5 text-blue-800" />
                    <span>capepi6510@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMapPin className="h-5 w-5 text-blue-800" />
                    <span>Cl. 9a #9-28 Ofic 302, Neiva, Huila</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMessageCircle className="h-5 w-5 text-blue-800" />
                    <span>WhatsApp: +{whatsappNumber}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold">Horario de atención</h3>
                <div className="mt-4 grid gap-2">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>8:00 - 6:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>8:00 - 6:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>8:00 - 12:00</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-green-500-50 p-6">
                <h3 className="text-xl font-bold text-green-300-800">¿Necesitas una visita urgente?</h3>
                <p className="mt-2">
                  Contáctanos directamente por WhatsApp para programar una visita inmediata. Servicio disponible en tu
                  zona.
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hola, necesito una visita urgente para limpieza.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PrimaryButton className="mt-4 bg-green-400-800 hover:bg-green-300-900">
                    <FaWhatsapp className="mr-2 h-4 w-4" /> Solicitar visita urgente
                  </PrimaryButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
