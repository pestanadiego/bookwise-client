import api from '../config';

export async function createHotel(data){
    const request = await api.post("/hotel/createHotel", data,{
        headers: { 
            'Access-Control-Allow-Origin' : '*',
          },
    });
    if (request.data.success){
        return true;
    }
    return false;
} 
