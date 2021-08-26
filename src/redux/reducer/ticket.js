const initialState = {
  data: [],
  dataTicket: [],
  dataDetailTicket: {},
  errMsg: '',
  succMsg: ''
}

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKET': {
      return {
        ...state,
        data: action.payload,
        errMsg: ''
      }
    }
    case 'GET_BOOKING': {
      return {
        ...state,
        dataTicket: action.payload,
        errMsg: ''
      }
    }
    case 'GET_TICKET_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        succMsg: ''
      }
    }
    case 'GET_DETAIL_TICKET': {
      return {
        ...state,
        dataDetailTicket: action.payload,
        errMsg: ''
      }
    }
    case 'GET_DETAIL_TICKET_FAILED': {
      return {
        ...state,
        errMsg: action.payload,
        succMsg: ''
      }
    }
    case 'PAY_TICKET': {
      return {
        ...state,
        succMsg: action.payload,
        errMsg: ''
      }
    }
    case 'PAY_TICKET_FAILED': {
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

export default ticket
