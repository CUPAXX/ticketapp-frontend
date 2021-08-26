/* eslint-disable no-undef */
import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const getUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/users/signed`)
      dispatch({
        type: 'GET_USER',
        payload: data.data
      })
      setTimeout(() => {
        dispatch({ type: 'USER_RESET' });
      }, 3000);
    } catch (err) {
      dispatch({
        type: 'GET_USER_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({ type: 'USER_RESET' });
      }, 3000);
    }
  }
}

export const updateProfile = (data, token) => {
  return async (dispatch) => {
    const form = new FormData()
    form.append('fullname', data.fullname)
    form.append('email', data.email)
    form.append('phone_number', data.phone_number)
    form.append('city', data.city)
    form.append('postcode', data.postcode)
    form.append('address', data.address)
    form.append('picture', data.picture)
    try {
      const { data: axios } = await http(token).put(`${URL}/users/update-profile`, form)
      dispatch({
        type: 'UPDATE_USER',
        payload: axios.data
      })
      setTimeout(() => {
        dispatch({ type: 'USER_RESET' });
      }, 3000);
    } catch (err) {
      dispatch({
        type: 'UPDATE_USER_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({ type: 'USER_RESET' });
      }, 3000);
    }
  }
}
