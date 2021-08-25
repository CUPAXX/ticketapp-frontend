const initialState = {
  ListChat: [],
  RoomChat: [],
  sccMsg: '',
  errMsg: ''
}

const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'CHAT_LIST': {
      return {
        ...state,
        ListChat: action.payload
      }
    }
    case 'CHAT_ROOM': {
      return {
        ...state,
        RoomChat: action.payload
      }
    }
    case 'SEND_CHAT': {
      return {
        ...state
        // sccMsg: action.payload,
        // errMsg: ''
      }
    }
    case 'SEND_CHAT_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: ''
      }
    }
    // case 'CHAT_RESET': {
    //   return {
    //     ...state,
    //     sccMsg: '',
    //     errMsg: '',
    //     userData: []
    //   }
    // }
    case 'DELETE_CHAT': {
      return {
        ...state,
        allData: []
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}

export default chat
