import RoomForm from 'components/RoomForm';

export default function CreateHab() {
  return (
    <div>
      <p className="px-6 py-8 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">
        AÑADA UN TIPO DE HABITACIÓN
      </p>
      <br />
      <RoomForm />
    </div>
  );
}
