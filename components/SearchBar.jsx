import { Search } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import api from '../config';
import Link from 'next/link';

export default function SearchBar() {
  const [hotels, setHotels] = useState([]);
  const [data, setData] = useState('');

  async function getManyHotels(prop) {
    try {
      const req = { name_hotel: prop };
      console.log(req);
      const response = await api.post('/hotel/manyHotels', req);
      console.log(response);
      setHotels(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <span className="w-screen md:w-1/3 h-10 flex">
        <input
          type="search"
          name="search"
          placeholder="Buscar..."
          onChange={(e) => setData(e.target.value)}
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
        <button
          type="button"
          onClick={() => getManyHotels(data)}
          className="mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
        >
          <Search />
        </button>
      </span>
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
                        <Link href={`/hotel/${hotel.id}`}>
                          <a className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                            Editar
                          </a>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a
                          onClick={() => handleDelete(hotel.id)}
                          className="text-red-600 hover:text-red-900 cursor-pointer"
                        >
                          Eliminar
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
    </div>
  );
}
