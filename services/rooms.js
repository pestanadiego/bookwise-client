import api from '../config';

export async function createRoom(data) {
  const request = await api.post('/room/createRoom', data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  if (request.data.success) {
    return true;
  }
  return false;
}

export async function updateRoom(id, data) {
  try {
    const request = await api.put(`/room/${id}`, data);
    if (request.data.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteLogicallyRoom(id) {
  try {
    const request = await api.put(`/room/delete/${id}`);
  } catch (error) {
    console.error(error);
  }
}
