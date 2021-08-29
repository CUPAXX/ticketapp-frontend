const initialState = {
  data: [],
  pageInfo: {},
  dataTicket: [],
  dataDetailTicket: {},
  airlines: [],
  errMsg: '',
  succMsg: ''
}

const ticket = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKET': {
      return {
        ...state,
        data: action.payload.ticket,
        pageInfo: action.payload.pageInfo,
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
    case 'PROCEED_TO_PAYMENT': {
      return {
        ...state
      }
    }
    case 'GET_AIRLINES': {
      return {
        ...state,
        airlines: action.payload
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
