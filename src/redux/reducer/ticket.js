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
    default: {
      return {
        ...state
      }
    }
  }
}

export default ticket
