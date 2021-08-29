import { http } from '../../helpers/http'

const { REACT_APP_BACKEND_URL: URL } = process.env

export const chatList = (token) => {
  return async (dispatch) => {
    console.log(token)
    const { data } = await http(token).get(`${URL}/chats/chat`)
    dispatch({
      type: 'CHAT_LIST',
      payload: data.data
    })
  }
}
