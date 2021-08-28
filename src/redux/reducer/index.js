import { combineReducers } from 'redux';
import auth from './auth'
import user from './user'
import chat from './chat'
import ticket from './ticket'
import globalReducer from './globalReducer'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistAuth = {
  key: 'auth',
  storage: storage
}

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  user,
  chat,
  ticket,
  globalReducer
})

export default reducer
