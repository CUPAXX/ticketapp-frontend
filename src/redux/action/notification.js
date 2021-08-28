/* eslint-disable no-undef */
import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getNotif = (token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/notifications/get-notification`)
    dispatch({
      type: 'GET_NOTIFICATION',
      payload: data.data
    })
  }
}

export const createNotif = (token, dataNotif) => async (dispatch) => {
  console.log(dataNotif)
  const form = new URLSearchParams();
  form.append('userId', dataNotif.id);
  form.append('label', dataNotif.label)
  form.append('message', dataNotif.message)
  try {
    const { data } = await http(token).post(`${URL}/notifications/create-notification`, form);
    dispatch({
      type: 'CREATE_NOTIFICATION',
      payload: data.data
    });
  } catch (err) {
    dispatch({
      type: 'CREATE_NOTIFICATION_FAILED',
      payload: err.response.data.message
    });
  }
};

export const delNotif = (token, id) => {
  console.log(id)
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('notifId', id)
    const { data } = await http(token).delete(`${URL}/notifications/delete-notification`, { data: form })
    dispatch({
      type: 'DELETE_NOTIFICATION',
      payload: data.data
    })
  }
}
