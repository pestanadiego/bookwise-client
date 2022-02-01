import Link from 'next/link';
import { useState } from 'react';
import { createHotel } from 'services/hotel';

export default function HotelForm() {

  const [nameHotel, setNameHotel] = useState("");
  const [address, setAddress] = useState("");
  const [manager, setManager] = useState("");
  const [rating, setRating] = useState("");
  const [roomsNumber, setRoomsNumber] = useState("");

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const  data = {
        name_hotel:nameHotel,
        address,
        manager,
        rating,
        nro_hab:roomsNumber
      }
      const request = await createHotel(data);
      if (request){
        console.log("Se creo el hotel")
      } else {
      return console.log("No se creo")
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="px-7 text-lg font-medium leading-6 text-gray-900">
              Información del Hotel
            </h3>
          </div>
          <br />
          <Link href="/">
            <button className="w-50 mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Volver
            </button>
          </Link>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={onSubmit} method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="name_hotel"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre Hotel
                    </label>
                    <input
                      type="text"
                      name="name_hotel"
                      id="name_hotel"
                      onChange={(e) => {
                        e.preventDefault()
                        setNameHotel(e.target.value)
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
                      Nombre Manager
                    </label>
                    <input
                      type="text"
                      name="manager"
                      id="manager"
                      onChange={(e) => {
                        e.preventDefault()
                        setManager(e.target.value)
                      }}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      dirección
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      onChange={(e) => {
                        e.preventDefault()
                        setAddress(e.target.value)
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
                      onChange={(e) => {
                        e.preventDefault()
                        setRating(e.target.value)
                      }}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="nro_hab"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Número de Habitaciones
                    </label>
                    <input
                      type="number"
                      name="nro_hab"
                      id="nro_hab"
                      onChange={(e) => {
                        e.preventDefault()
                        setRoomsNumber(e.target.value)
                      }}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
