import Link from 'next/link';
import api from '../config';
import { useEffect, useState } from 'react';

export default function RoomhtmlForm() {
  const [optionsHotel, setOptionsHotel] = useState([]);
  const [typeRoom, setTypeRoom] = useState('');
  const [size, setSize] = useState('');
  const [hotelOwner, setHotelOwner] = useState('');
  const [limitPersons, setLimitPersons] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [roomsNumber, setRoomsNumber] = useState('');
  const optionsTypes = [
    {
      name: 'Regular',
      value: 1,
    },
    {
      name: 'Premiun',
      value: 2,
    },
    {
      name: 'VIP',
      value: 3,
    },
  ];

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        typeRoom,
        size,
        hotelOwner,
        limitPersons,
        bedNumber,
        roomsNumber,
      };
      // const request = await createRoom(data);
      // if (request) {
      //   console.log('Se creo la habitacion');
      // } else {
      //   return console.log('No se creo la habitacion');
      // }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  async function getHotels() {
    try {
      const response = await api.get('/hotel/allHotels');
      console.log(response.data.data);
      setOptionsHotel(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getHotels();
  }, []);
  
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="px-7 text-lg font-medium leading-6 text-gray-900">
              InhtmlFormación de la Habitación
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
                      htmlFor="typeRoom"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tipo de Habitación
                    </label>
                    <select
                      id="typeRoom"
                      name="typeRoom"
                      defaultValue="1"
                      onChange={(e) => {
                        e.preventDefault()
                        setTypeRoom(e.target.value)
                      }}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="0">Selecciona tipo de Habitacion</option>
                      {optionsTypes.map((option) => (
                        <option value={option?.value}> {option?.name} </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="tamano"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tamaño
                    </label>
                    <input
                      type="text"
                      name="tamano"
                      id="tamano"
                      onChange={(e) => {
                        e.preventDefault()
                        setSize(e.target.value)
                      }}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hotel al que pertenece
                    </label>
                    <select
                      id="country"
                      name="country"
                      defaultValue={optionsHotel?.[0] ?? "Hotel Default"}
                      onChange={(e) => {
                        e.preventDefault()
                        setHotelOwner(e.target.value)
                      }}                      
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="0">Selecciona Hotel</option>
                      {optionsHotel.map((hotel) => (
                        <option>{hotel.name_hotel}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="num_camas"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Número de Camas
                    </label>
                    <input
                      type="text"
                      name="num_camas"
                      id="num_camas"
                      onChange={(e) => {
                        e.preventDefault()
                        setBedNumber(e.target.value)
                      }}  
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="limite_personas"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Límite de Personas
                    </label>
                    <input
                      type="text"
                      name="limite_personas"
                      id="limite_personas"
                      onChange={(e) => {
                        e.preventDefault()
                        setLimitPersons(e.target.value)
                      }}  
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="cant_hab"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cantidad de Habitaciones
                    </label>
                    <input
                      type="text"
                      name="cant_hab"
                      id="cant_hab"
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
