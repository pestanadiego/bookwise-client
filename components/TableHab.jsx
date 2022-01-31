// Este array es para pruebas unicamente

const habitaciones = [
    {
      HotelId: 'Humbolt',
      tipo_hab: 'Regular',
      tamano: '120cm',
      num_camas: '2',
      limite_personas: '4',
      cant_hab: '50',
    },
    {
      HotelId: 'Marriot',
      tipo_hab: 'Regular',
      tamano: '120cm',
      num_camas: '2',
      limite_personas: '4',
      cant_hab: '50',
    },
    {
      HotelId: 'Tamanaco',
      tipo_hab: 'Regular',
      tamano: '120cm',
      num_camas: '2',
      limite_personas: '4',
      cant_hab: '50',
    },
  ];
  
  export default function TableHab() {
    return (
      <div className="flex flex-col">
        <div className="px-4">
          <div className="py-8 align-middle inline-block w-full">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                  <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Hotel al que pertenece
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tipo de Habitación
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tamaño 
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Número de Camas
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Limite De Personas
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Cantidad de Habitaciones
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only"></span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only"></span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {habitaciones.map((habitacion) => (
                    <tr key={habitaciones.manager}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-center font-medium text-gray-900">
                          {habitacion.HotelId}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-center font-medium text-gray-900">
                          {habitacion.tipo_hab}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-center text-gray-900">
                          {habitacion.tamano}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {habitacion.num_camas}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {habitacion.limite_personas}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                        {habitacion.cant_hab}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a href="#" className="text-red-600 hover:text-red-900">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  