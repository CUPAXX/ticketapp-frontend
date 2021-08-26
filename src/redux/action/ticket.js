import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const getTicket = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/transactions/transaction`)
      dispatch({
        type: 'GET_TICKET',
        payload: data.results
      })
      setTimeout(() => {
        dispatch({ type: 'TICKET_RESET' });
      }, 3000);
    } catch (err) {
      dispatch({
        type: 'GET_TICKET_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({ type: 'TICKET_RESET' });
      }, 3000);
    }
  }
}

export const getDetailTicket = (id, token) => {
  console.log(id, token)
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/transactions/transaction/${id}`)
      dispatch({
        type: 'GET_DETAIL_TICKET',
        payload: data.results
      })
      setTimeout(() => {
        dispatch({ type: 'TICKET_RESET' });
      }, 3000);
    } catch (err) {
      dispatch({
        type: 'GET_DETAIL_TICKET_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({ type: 'TICKET_RESET' });
      }, 3000);
    }
  }
}

export const payTicket = (id, token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).put(`${URL}/transactions/proceed-to-payment/${id}`)
      dispatch({
        type: 'PAY_TICKET',
        payload: data.data
      })
      setTimeout(() => {
        dispatch({ type: 'TICKET_RESET' });
      }, 3000);
    } catch (err) {
      dispatch({
        type: 'PAY_TICKET_FAILED',
        payload: err.response.data.message
      })
      setTimeout(() => {
        dispatch({ type: 'TICKET_RESET' });
      }, 3000);
    }
  }
}
