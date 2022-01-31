import React from 'react';
import Navbar from 'components/Navbar';
import HotelTable from 'components/HotelTable';
import RoomTable from 'components/RoomTable';
export default function Home() {
  return (
    <div>
      <Navbar />
      <p className="px-6 py-4 text-center text-lg text-gray-500 tracking-wider">
        Hoteles
      </p>
      <HotelTable />
      <p className="px-6 py-4 text-center text-lg text-gray-500 tracking-wider">
        Habitaciones
      </p>
      <RoomTable />
    </div>
  );
}
