import RoomTable from 'components/RoomTable';
import Link from 'next/link';

export default function Room() {
    return (
      <div>
        <p className="px-6 py-4 text-center text-lg text-gray-500 tracking-wider">
          Hoteles
        </p>
        <Link href="/">
            <button className="w-50 mx-1 py-2 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Volver
            </button>
          </Link>
        <RoomTable />
      </div>
    );
  }