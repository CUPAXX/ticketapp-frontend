import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getTickets = (departure, destination, airline, transit, classTicket, sortBy, sort, page) => {
  return async dispatch => {
    try {
      // dispatch({ type: 'GET_TICKET', payload: [] });
      const { data: results } = await http().get(
        `${URL}/tickets/tickets?departure=${departure}&destination=${destination}&airline=${airline}&transit=${transit}&searchClass=${classTicket}&sort[${sortBy}]=${sort}&page=${page}`
      );
      console.log(results, 'test data')
      dispatch({
        type: 'GET_TICKET',
        payload: {
          ticket: results.results,
          pageInfo: results.pageInfo
        }
      });
    } catch (err) {
      console.log(err)
    }
  };
};

export const addToBooking = (token, setData) => async (dispatch) => {
  const form = new URLSearchParams();
  form.append('total_amount', setData.total_amount);
  form.append('id_ticket', setData.id_ticket)
  try {
    const { data } = await http(token).post(`${URL}/transactions/create-transaction`, form);
    dispatch({
      type: 'PROCEED_TO_PAYMENT',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTicket = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/transactions/transaction`)
      dispatch({
        type: 'GET_BOOKING',
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

export const getAirlines = () => async dispatch => {
  try {
    const { data } = await http().get(`${URL}/airlines/airlines`)
    dispatch({
      type: 'GET_AIRLINES',
      payload: data.results
    })
  } catch (err) {
    console.log(err)
  }
}
