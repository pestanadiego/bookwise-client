import { Menu } from '@mui/icons-material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-screen flex flex-row items-center p-1 pt-3 justify-between bg-white shadow-xs">
      <div className="ml-8 text-lg text-gray-700 hidden md:flex">Bookwise</div>
      <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <Menu />
      </div>
      <div className="flex items-left flex-row">
        <div className="flex flex-row-reverse mr-8 md:flex">
          <Link href="/hotel">
            <button className="w-full mx-1 py-2 px-3 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-700 focus:outline-none">
              Hoteles
            </button>
          </Link>
        </div>
        <div className="flex flex-row-reverse mr-8 md:flex">
          <Link href="/room">
            <button className="w-full mx-1 py-2 px-3 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-700 focus:outline-none">
              Habitaciones
            </button>
          </Link>
        </div>
        <div className="flex flex-row-reverse mr-8 md:flex">
          <Link href="/hotel/createHotel">
            <button className="w-full mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
              Añadir Hotel
            </button>
          </Link>
        </div>
        <div className="flex flex-row-reverse mr-8 md:flex">
          <Link href="/room/createRoom">
            <button className="w-full mx-1 py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
              Añadir Habitación
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
