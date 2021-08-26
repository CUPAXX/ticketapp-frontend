const initialState = {
  user: [],
  data: [],
  allData: [],
  userData: [],
  sccMsg: '',
  errMsg: ''
}

const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'CHAT_LIST': {
      return {
        ...state,
        user: action.payload
      }
    }
    case 'CHAT_LIST_ALL': {
      return {
        ...state,
        allData: action.payload
      }
    }
    case 'SEND_CHAT': {
      return {
        ...state,
        sccMsg: action.payload,
        errMsg: ''
      }
    }
    case 'SEND_CHAT_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        sccMsg: ''
      }
    }
    case 'CHAT_RESET': {
      return {
        ...state,
        sccMsg: '',
        errMsg: '',
        userData: []
      }
    }
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
