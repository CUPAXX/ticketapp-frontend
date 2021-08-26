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

export const chatRoom = (token, id) => async dispatch => {
  try {
    const { data } = await http(token).get(`${URL}/chats/room/${id}`);
    dispatch({
      type: 'CHAT_ROOM',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const sendChat = (token, id, setData) => async dispatch => {
  const form = new FormData()
  form.append('message', setData.message);
  // form.append('attachment', {
  //   uri: setData.attachment.uri,
  //   name: setData.attachment.fileName,
  //   type: setData.attachment.type
  // });
  console.log(form, 'action form');
  try {
    const { data } = await http(token).post(`${URL}/chats/send/${id}`, form);
    dispatch({
      type: 'SEND_CHAT',
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteChat = (token, id, chatId) => async dispatch => {
  const form = new URLSearchParams();
  form.append('chatId', chatId);
  try {
    const { data } = await http(token).delete(`${URL}/chats/delete/${id}`, {
      data: form
    });
    console.log(data, 'action data123');
    dispatch({
      type: 'DELETE_CHAT',
      payload: data.data
    });
    dispatch(chatList(token));
    dispatch(chatRoom(token, id));
  } catch (err) {
    console.log(err);
  }
};
