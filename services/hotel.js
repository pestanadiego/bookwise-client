import api from '../config';

export async function createHotel(data) {
  const request = await api.post('/hotel/createHotel', data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  if (request.data.success) {
    return true;
  }
  return false;
}

export async function updateHotel(id, data) {
  try {
    const request = await api.put(`/hotel/${id}`, data);
    if (request.data.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteLogicallyHotel(id) {
  try {
    const request = await api.put(`/hotel/delete/${id}`);
  } catch (error) {
    console.error(error);
  }
}
