import React from 'react';
import Navbar from 'components/Navbar';
import Table from 'components/Table';
import TableHab from 'components/TableHab'
export default function Home() {
  return (
    <div>
      <Navbar />
      <p className="px-6 py-8 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">Tabla Hoteles</p>
      <Table />
      <p className="px-6 py-8 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">Tabla Habitaciones</p>
       <TableHab />
    </div>
  );
}
