import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const getTickets = data => {
  return async dispatch => {
    console.log('action', data)
    try {
      dispatch({ type: 'GET_TICKET', payload: [] });
      const { data: results } = await http().get(
        `${URL}/tickets/tickets?departure=${data.departure}&destination=${data.destination}&searchClass=${data.classTicket}`
      );
      dispatch({ type: 'GET_TICKET', payload: results.results });
      console.log(results.results);
    } catch (err) {
      console.log(err);
      // dispatch({type: 'SET_LOADING', payload: false});
    }
  };
};
