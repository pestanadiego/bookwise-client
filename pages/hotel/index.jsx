import HotelTable from 'components/HotelTable';
import Link from 'next/link';

export default function Hotel() {
  return (
    <div className="flex flex-col items-center justify-content">
      <p className="px-6 py-4 text-center text-lg text-gray-500 tracking-wider">
        Hoteles
      </p>
      <Link href="/">
        <button className="w-24 mx-2 py-2 px-3 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-700 focus:outline-none">
          Volver
        </button>
      </Link>
      <HotelTable />
    </div>
  );
}
