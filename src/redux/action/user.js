/* eslint-disable no-undef */
import { http } from '../../helpers/http'
const { REACT_APP_BACKEND_URL: URL } = process.env

export const getUser = (token) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      dispatch({ type: 'SET_LOADING', payload: false });
      const { data } = await http(token).get(`${URL}/users/signed`)
      dispatch({
        type: 'GET_USER',
        payload: data.data
      })
      setTimeout(() => {
        dispatch({ type: 'USER_RESET' });
      }, 3000);
    } catch (err) {
      dispatch({ type: 'SET_LOADING', payload: false });
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

export const searchUser = (token, search) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/users?search=${search}`)
    dispatch({
      type: 'SEARCH_USER',
      payload: data.pageInfo.totalData.rows
    })
  }
}

// export const searchUser =
//   (token, value, sortBy, sort, page) => async dispatch => {
//     console.log(page, 'search action123');
//     try {
//       if (page > 1) {
//         const { data } = await http(token).get(
//           `${URL}/users?search=${value}&sort[${sortBy}]=${sort}&page=${page}`
//         );
//         console.log(data, 'action 123 123');
//         dispatch({
//           type: 'SEARCH_USER_NEXT',
//           payload: {
//             user:
//             pageInfo: data.pageInfo
//           }
//         });
//       } else {
//         const { data } = await http(token).get(
//           `${URL}/users?search=${value}&sort[${sortBy}]=${sort}`
//         );
//         dispatch({
//           type: 'SEARCH_USER',
//           payload: {
//             user: data.pageInfo.totalData.rows,
//             pageInfo: data.pageInfo
//           }
//         });
//       }
//     } catch (err) {
//       dispatch({
//         type: 'SEARCH_USER_REJECTED',
//         error: err.response.data.data
//       });
//     }
//   };

export const searchDefault = () => dispatch => {
  dispatch({
    type: 'SEARCH_DEFAULT'
  });
};
