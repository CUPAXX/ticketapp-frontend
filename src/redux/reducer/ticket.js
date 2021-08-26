const initialState = {
  data: []
}

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKET': {
      return {
        ...state,
        data: action.payload
      }
    }
    case 'PROCEED_TO_PAYMENT': {
      return {
        ...state
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default ticket
