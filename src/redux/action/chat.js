import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const chatList = (token) => {
  return async (dispatch) => {
    const { data } = await http(token).get(`${URL}/chats/chat`)
    dispatch({
      type: 'CHAT_LIST',
      payload: data.data
    })
  }
}
