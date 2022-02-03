import { Search } from '@mui/icons-material';

export default function SearchBar() {
  return (
    <span className="w-screen md:w-1/3 h-10 flex">
      <input
        type="search"
        name="serch"
        placeholder="Buscar..."
        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
      <button className="mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
        <Search />
      </button>
    </span>
  );
}
