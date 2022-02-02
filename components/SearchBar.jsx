import { Search } from '@mui/icons-material';
import api from '../config';
import { deleteLogicallyHotel } from 'services/hotel';
import { useEffect, useState } from 'react';

export default function RoomTable() {
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

  const handleOnChange = async (id) => {
    window.alert('Abemus Tabla');
  };

  useEffect(() => {
    getHotels();
  }, [hotels]);

  return (
    <span className="w-screen md:w-1/3 h-10 flex">
      <select>
        <option value="0">Seleccione un Hotel..</option>
        {hotels.map((hotel) => (
          <option value={hotel.id} onClick={() => handleOnChange(hotel.id)}>
            {hotel.name_hotel}
          </option>
        ))}
      </select>
      <button className="mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
        <Search />
      </button>
    </span>
  );
}
