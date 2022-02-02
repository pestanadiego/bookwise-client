import api from '../config';
import { useEffect, useState } from 'react';

export default function HotelTable() {
  const [hotels, setHotels] = useState([]);

  async function getHotels() {
    try {
      const response = await api.get('/hotel/allHotels');
      console.log(response.data.data);
      setHotels(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <div className="flex items-center flex-col">
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
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Dirección
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Manager
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
                {hotels.map((hotel) => (
                  <tr key={hotel.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center font-medium text-gray-900">
                        {hotel.name_hotel}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-900">
                        {hotel.address}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {hotel.rating}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {hotel.manager}
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
