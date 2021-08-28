const initialState = {
  data: [],
  errMsg: '',
  succMsg: ''
}

const notification = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NOTIFICATION': {
      return {
        ...state,
        data: action.payload,
        errMsg: ''
      }
    }
    case 'CREATE_NOTIFICATION': {
      return {
        ...state,
        succMsg: action.payload,
        errMsg: ''
      }
    }
    case 'CREATE_NOTIFICATION_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        succMsg: ''
      }
    }
    case 'DELETE_NOTIFICATION': {
      return {
        ...state,
        succMsg: action.payload
      }
    }
    case 'NOTIFICATION_RESET': {
      return initialState
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default notification
