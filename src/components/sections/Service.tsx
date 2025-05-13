import { Component } from 'react';
import { FiBriefcase, FiChevronRight, FiCloud, FiCpu, FiDollarSign, FiLock, FiTrello } from 'react-icons/fi';

class Service extends Component {
  render() {
      
    const service = [
      { id: 1, title: 'Lavado de Muebles', description: ' los mejores servicios de lavado de muebles.', icon: <FiTrello size={32} className="text-blue-600 mt-0.5 me-6" /> },
      { id: 2, title: 'Lavado de Tapetes', description: 'New design projects delivered to your inbox each morning.', icon: <FiBriefcase size={32} className="text-blue-600 mt-0.5 me-6" /> },
      { id: 3, title: 'Lavado de Colchones', description: 'Get your goods in front of millions of potential customers with ease.', icon: <FiDollarSign size={32} className="text-blue-600 mt-0.5 me-6" /> },
      { id: 4, title: 'Vestidos y Ropa de Fiesta', description: 'Automate your tasks with our easy to use automation tools.', icon: <FiCpu size={32} className="text-blue-600 mt-0.5 me-6" /> },
      { id: 5, title: 'Tapicería de Vehículos', description: 'Store your files in our cloud and access them from anywhere in the world', icon: <FiCloud size={32} className="text-blue-600 mt-0.5 me-6" /> },
      { id: 6, title: 'Cortinas y Overoles', description: 'Data encryption in your mailbox and after email is sent.', icon: <FiLock size={32} className="text-blue-600 mt-0.5 me-6" /> }
    ];

      return (
        <div className='border-t border-gray-200 '>
          <div className="max-w-[75rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto" id='services'>
            <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
              Servicios 
              </h2>
              <p className="text-gray-600">
                Servicios de lavandería profesional y productos de calidad.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
              {service.map((item) => (
                <a key={item.id} className="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all"
                  href="#">
                  {item.icon}
                  <div>
                    <div>
                      <h3 className="block font-bold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800">
                      Learn more
                      <FiChevronRight className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        );
    }
}

export default Service;