import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const authLogin = (email, password) => {
  return async (dispatch) => {
    const form = new URLSearchParams()
    form.append('email', email)
    form.append('password', password)
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      dispatch({ type: 'SET_LOADING', payload: false });
      const { data } = await http().post(`${URL}/users/login`, form.toString())
      dispatch({
        type: 'AUTH_LOGIN',
        payload: data.token
      })
      setTimeout(() => {
        dispatch({ type: 'AUTH_RESET' });
      }, 3000);
    } catch (err) {
      dispatch({ type: 'SET_LOADING', payload: false });
      dispatch({
        type: 'AUTH_LOGIN_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({ type: 'AUTH_RESET' });
      }, 3000);
    }
  }
}

export const authRegister = (email, password, fullname) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    const from2 = new URLSearchParams()
    from2.append('email', email)
    from2.append('password', password)
    from2.append('fullname', fullname)
    try {
      dispatch({ type: 'SET_LOADING', payload: false });
      const { data } = await http().post(`${URL}/users/register`, from2.toString())
      dispatch({
        type: 'AUTH_REGISTER',
        payload: data.message
      })
      setTimeout(() => {
        dispatch({ type: 'AUTH_RESET' });
      }, 3000);
    } catch (err) {
      dispatch({ type: 'SET_LOADING', payload: false });
      dispatch({
        type: 'AUTH_REGISTER_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({ type: 'AUTH_RESET' });
      }, 3000);
    }
  }
}

export const authLogout = () => {
  return async dispatch => {
    dispatch({ type: 'AUTH_LOGOUT' })
  }
}
