const initialState = {
  dataUser: {},
  errMsg: '',
  succMsg: '',
  searchData: [],
  pageInfo: [],
  searchErr: ''
}

const user = (state = initialState, action) => {
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
    case 'SEARCH_USER': {
      return {
        ...state,
        searchData: action.payload
      };
    }
    // case 'SEARCH_USER_NEXT': {
    //   return {
    //     ...state,
    //     search: [...state.search, ...action.payload.user],
    //     pageInfo: action.payload.pageInfo
    //   };
    // }
    // case 'SEARCH_USER_REJECTED': {
    //   return {
    //     ...state,
    //     searchErr: action.error
    //   };
    // }
    // case 'SEARCH_DEFAULT': {
    //   return {
    //     ...state,
    //     search: [],
    //     pageInfo: [],
    //     searchErr: ''
    //   };
    // }
    default: {
      return {
        ...state
      }
    }
  }
}

export default user
