"use client"

import { useState } from "react"
import { FiChevronDown, FiMenu, FiUser, FiX } from "react-icons/fi"
import { navigationLinks, siteConfig } from "../../services/backup-data"
import logo from "../../assets/image2.png"
import { Link } from "react-router-dom"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="backdrop-filter backdrop-blur-lg shadow-lg bg-opacity-30 fixed flex flex-wrap lg:justify-start lg:flex-nowrap z-20 w-full text-sm py-3 lg:py-0 border-b border-gray-200">
      <nav
        className="relative max-w-[75rem] w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-none text-xl font-semibold" aria-label="Brand">
            <div className="flex items-center gap-x-3 font-medium hover:text-blue-600">
              {/* Logo */}
              <div className="h-14 w-14 lg:h-16 lg:w-16 flex-shrink-0">
                <img
                  src={logo || "/placeholder.svg"}
                  alt={siteConfig.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg lg:text-xl font-bold">{siteConfig.name}</span>
            </div>
          </Link>
          <div className="lg:hidden flex items-center gap-x-4">
            <button
              type="button"
              className="w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <FiX className="flex-shrink-0 w-4 h-4" /> : <FiMenu className="flex-shrink-0 w-4 h-4" />}
            </button>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto`}
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:items-center lg:justify-end sm:gap-x-7 lg:mt-0">
            {/* Enlaces de navegación */}
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="font-medium hover:text-blue-600 lg:py-6"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

        
            {/* Enlace de Login */}
            <Link
              to="/sign-in"
              className="flex items-center gap-x-2 font-medium hover:text-blue-600 lg:border-s lg:border-black/[.3] lg:my-6 lg:ps-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiUser className="flex-shrink-0 w-4 h-4" />
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
