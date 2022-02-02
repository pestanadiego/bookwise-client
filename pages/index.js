import React from 'react';
import Navbar from 'components/Navbar';
import SearchBar from 'components/SearchBar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center flex-col items-center m-8">
        <p className="p-8">Ingrese el nombre del hotel que desea buscar</p>
        <SearchBar />
      </div>
    </div>
  );
}
