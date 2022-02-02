import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { updateHotel } from 'services/hotel';
import api from '../../config';

export default function HotelEditForm() {
  const router = useRouter();
  const hotelId = router.query.hotelId;
  const [attributes, setAtrributes] = useState([]);
  const [nameHotel, setNameHotel] = useState('');
  const [address, setAddress] = useState('');
  const [manager, setManager] = useState('');
  const [rating, setRating] = useState('');
  const [done, setDone] = useState(false);

  async function getHotelAttributes() {
    try {
      const hotelAttributes = await api.get(`/hotel/searchHotel/${hotelId}`);
      setAtrributes(hotelAttributes.data.data);
      setDone(true);
    } catch (error) {
      console.error(error, 'ERROR AQUI');
    }
  }

  useEffect(() => {
    getHotelAttributes();
    if (attributes.length != 0) {
      setNameHotel(attributes[0].name_hotel);
      setManager(attributes[0].manager);
      setRating(attributes[0].rating);
      setAddress(attributes[0].address);
    }
  }, [done]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        name_hotel: nameHotel,
        address,
        manager,
        rating,
      };
      const request = await updateHotel(hotelId, data);
      if (request) {
        console.log('Se editó el hotel');
        window.alert('Los datos han sido modificados con éxito');
      } else {
        return console.log('No se editó', request, data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p className="px-6 py-8 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
        Edite un hotel
      </p>
      <div className="flex items-center flex-col">
        <div className="px-4 sm:px-0">
          <h3 className="py-8 text-lg font-medium text-center leading-6 text-gray-900">
            Por favor, modifique los siguientes datos:
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
                      defaultValue={
                        attributes.length == 0 ? '' : attributes[0].name_hotel
                      }
                      type="text"
                      name="name_hotel"
                      id="name_hotel"
                      onChange={(e) => {
                        e.preventDefault();
                        setNameHotel(e.target.value);
                      }}
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
                      defaultValue={
                        attributes.length == 0 ? '' : attributes[0].manager
                      }
                      type="text"
                      name="manager"
                      id="manager"
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
                      defaultValue={
                        attributes.length == 0 ? '' : attributes[0].address
                      }
                      type="text"
                      name="address"
                      id="address"
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
                      defaultValue={
                        attributes.length == 0 ? '' : attributes[0].rating
                      }
                      type="number"
                      name="rating"
                      id="rating"
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
    </div>
  );
}
