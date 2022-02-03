import Link from 'next/link';
import { useState } from 'react';
import { createHotel } from 'services/hotel';

export default function HotelForm() {
  const [nameHotel, setNameHotel] = useState('');
  const [address, setAddress] = useState('');
  const [manager, setManager] = useState('');
  const [rating, setRating] = useState('');

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        name_hotel: nameHotel,
        address,
        manager,
        rating,
      };
      const request = await createHotel(data);
      if (request) {
        console.log('Se creó el hotel');
        window.alert('El hotel fue añadido con éxito');
      } else {
        return console.log('No se creó');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center flex-col">
      <div className="px-4 sm:px-0">
        <h3 className="py-8 text-lg font-medium text-center leading-6 text-gray-900">
          Por favor, rellene los siguientes datos:
        </h3>
      </div>
      <div className="w-1/2">
        <form onSubmit={onSubmit} method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="name_hotel"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre del hotel
                  </label>
                  <input
                    type="text"
                    name="name_hotel"
                    id="name_hotel"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setNameHotel(e.target.value);
                    }}
                    required
                    autocomplete="nombre-hotel"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="manager"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre del manager
                  </label>
                  <input
                    type="text"
                    name="manager"
                    id="manager"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setManager(e.target.value);
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setAddress(e.target.value);
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="rating"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    required
                    min="0"
                    max="5"
                    onChange={(e) => {
                      e.preventDefault();
                      setRating(e.target.value);
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Link href="/">
                <button className="mx-2 py-2 px-3 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-700 focus:outline-none">
                  Volver
                </button>
              </Link>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
