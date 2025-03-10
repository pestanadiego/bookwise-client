import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { updateRoom } from 'services/rooms';
import api from '../../config';

export default function HotelEditForm() {
  const router = useRouter();
  const roomId = router.query.roomId;
  const [attributes, setAtrributes] = useState([]);

  const [nameRoom, setNameRoom] = useState('');
  const [size, setSize] = useState('');
  const [hotelOwner, setHotelOwner] = useState('');
  const [limitPersons, setLimitPersons] = useState('');
  const [bedNumber, setBedNumber] = useState('');
  const [roomsNumber, setRoomsNumber] = useState('');
  const [done, setDone] = useState(false);

  async function getRoomAttributes() {
    try {
      const roomAttributes = await api.get(`/room/searchRoom/${roomId}`);
      setAtrributes(roomAttributes.data.data);
      setDone(true);
    } catch (error) {
      console.error(error, 'ERROR AQUI');
    }
  }

  useEffect(() => {
    getRoomAttributes();
    if (attributes.length != 0) {
      setNameRoom(attributes[0].name);
      setSize(attributes[0].size);
      setBedNumber(attributes[0].num_bed);
      setLimitPersons(attributes[0].limit);
      setRoomsNumber(attributes[0].quantity);
    }
  }, [done]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();

      const data = {
        name: nameRoom, //falta arreglarlo
        size: size,
        num_bed: bedNumber,
        limit: limitPersons,
        quantity: roomsNumber,
      };
      const request = await updateRoom(roomId, data);
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
    <div className="flex items-center flex-col">
      <p className="px-6 py-8 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
        Edite una habitación
      </p>
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
                    htmlFor="nameRoom"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de habitación
                  </label>
                  <input
                    defaultValue={
                      attributes.length == 0 ? '' : attributes[0].name
                    }
                    id="nameRoom"
                    name="nameRoom"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setNameRoom(e.target.value);
                    }}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="tamano"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tamaño
                  </label>
                  <input
                    defaultValue={
                      attributes.length == 0 ? '' : attributes[0].size
                    }
                    type="number"
                    name="tamano"
                    id="tamano"
                    min="1"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setSize(e.target.value);
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="num_camas"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número de camas
                  </label>
                  <input
                    defaultValue={
                      attributes.length == 0 ? '' : attributes[0].num_bed
                    }
                    type="number"
                    name="num_camas"
                    id="num_camas"
                    min="1"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setBedNumber(e.target.value);
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="limite_personas"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Límite de personas
                  </label>
                  <input
                    defaultValue={
                      attributes.length == 0 ? '' : attributes[0].limit
                    }
                    type="number"
                    name="limite_personas"
                    id="limite_personas"
                    required
                    min="1"
                    onChange={(e) => {
                      e.preventDefault();
                      setLimitPersons(e.target.value);
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="cant_hab"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cantidad de habitaciones
                  </label>
                  <input
                    defaultValue={
                      attributes.length == 0 ? '' : attributes[0].quantity
                    }
                    type="number"
                    name="cant_hab"
                    id="cant_hab"
                    required
                    min="1"
                    onChange={(e) => {
                      e.preventDefault();
                      setRoomsNumber(e.target.value);
                    }}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Link href="/room">
                <button className="mx-2 py-2 px-3 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-700 focus:outline-none">
                  Volver
                </button>
              </Link>
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
  );
}
