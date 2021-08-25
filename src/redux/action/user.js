import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const getUser = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${URL}/users/signed`)
      dispatch({
        type: 'GET_USER',
        payload: data.results
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
