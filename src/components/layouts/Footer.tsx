import { Component } from 'react';
import { FiFacebook, FiGlobe, FiInstagram , FiYoutube } from 'react-icons/fi';
import logo from '../../assets/iamge.jpg'; // tu logo verdadero

class Footer extends Component {
  render() {
    return (
      <div className="bg-gray-900 w-full text-white">
        <footer className="border-t border-gray-700 py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:flex-row md:justify-between">

            {/* Logo y descripción */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Mi PINTA Logo" className="h-14 w-14 rounded-full object-cover" />
                <span className="text-2xl font-bold">Mi PINTA</span>
              </div>
              <p className="text-sm text-gray-300">
                Servicio profesional de lavandería para particulares y empresas.
              </p>
            </div>

            {/* Navegación, Contacto y Redes */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

              {/* Navegación */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold mb-2">Navegación</h3>
                <a href="#inicio" className="text-sm text-gray-300 hover:text-white transition">Inicio</a>
                <a href="#quienes-somos" className="text-sm text-gray-300 hover:text-white transition">Quiénes Somos</a>
                <a href="#servicios-productos" className="text-sm text-gray-300 hover:text-white transition">Servicios y Productos</a>
                <a href="#contacto" className="text-sm text-gray-300 hover:text-white transition">Contacto</a>
              </div>

              {/* Contacto */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold mb-2">Contacto</h3>
                <span className="text-sm text-gray-300">+57 310 5739097</span>
                <span className="text-sm text-gray-300">info@mipinta.com</span>
                <span className="text-sm text-gray-300"> Cl. 9a #9-28 Ofic 302, Neiva, Huila</span>
              </div>

              {/* Redes sociales */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/share/1Bu2jGVjSz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                    <FiFacebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/lavanderiamipinta?igsh=YW5rdXRvb3U5cmNx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                    <FiInstagram className="h-5 w-5" />
                    <span className="sr-only">Slack</span>
                  </a>
                  <a href="https://www.instagram.com/lavanderiamipinta?igsh=YW5rdXRvb3U5cmNx" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                    <FiYoutube className="h-5 w-5" />
                    <span className="sr-only">Slack</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                    <FiGlobe className="h-5 w-5" />
                    <span className="sr-only">Web</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Copyright */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-xs text-gray-400">
              © 2025 Mi PINTA. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
