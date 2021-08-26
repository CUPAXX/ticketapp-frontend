import { combineReducers } from 'redux';
import auth from './auth'
import user from './user'
import ticket from './ticket'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistAuth = {
  key: 'auth',
  storage: storage
}

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  user,
  ticket
})

export default reducer
