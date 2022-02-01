import HotelForm from 'components/HotelForm';


export default function CreateHotel(){
    return(
        <div>
            <p className="px-6 py-8 text-center text-lg font-medium text-gray-500 uppercase tracking-wider">Bienvenido a Bookwize</p>
            <br/>
            <HotelForm/>
        </div>
    )
}