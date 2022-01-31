import { Search, Menu } from '@mui/icons-material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-screen flex flex-row items-center p-1 pt-3 justify-between bg-white shadow-xs">
      <div className="ml-8 text-lg text-gray-700 hidden md:flex">Bookwise</div>
      <span className="w-screen md:w-1/3 h-10 flex">
        <input
          type="search"
          name="serch"
          placeholder="Buscar..."
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
        <button className="mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Search />
        </button>
      </span>
      <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <Menu />
      </div>
      <div className="flex flex-row-reverse mr-8 md:flex">
        <Link href="/hotel/create">
          <button className="w-full mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Crear
          </button>
        </Link>
      </div>
    </div>
  );
}
