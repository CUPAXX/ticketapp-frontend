const initialState = {
  dataUser: {},
  errMsg: '',
  succMsg: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER': {
      return {
        ...state,
        dataUser: action.payload,
        errMsg: ''
      }
    }
    case 'GET_USER_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        succMsg: ''
      }
    }
    case 'USER_RESET': {
      return {
        ...state,
        errMsg: '',
        succMsg: ''
      }
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        succMsg: action.payload,
        errMsg: ''
      }
    }
    case 'UPDATE_USER_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        succMsg: ''
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default auth
