import api from '../config';
import Link from 'next/link';
import { deleteLogicallyRoom } from 'services/rooms';
import { useEffect, useState } from 'react';

export default function RoomTable() {
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState([]);

  async function getRooms() {
    try {
      const response = await api.get('/room/allRooms');
      setRooms(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getHotels() {
    try {
      const response = await api.get('/hotel/allHotels');
      setHotels(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const matchIdHotel = (id) => {
    for (let i = 0; i < hotels.length; i++) {
      const hotelId = hotels[i].id;
      if (id == hotelId) {
        return hotels[i].name_hotel;
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar la habitacion?')) {
      deleteLogicallyRoom(id);
      getRooms();
    }
  };

  useEffect(() => {
    getHotels();
    getRooms();
  }, [rooms]);
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
                {rooms.map((room) => (
                  <tr key={room.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center font-medium text-gray-900">
                        {matchIdHotel(room.id_hotel)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center font-medium text-gray-900">
                        {room.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-center text-gray-900">
                        {room.size}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {room.num_bed}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {room.limit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {room.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link href={`/room/${room.id}`}>
                        <a className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                          Editar
                        </a>
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a
                        onClick={() => handleDelete(room.id)}
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
  );
}
