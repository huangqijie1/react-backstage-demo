import {createStore,applyMiddleware} from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from '../reducer'
const myReducer = persistReducer({
  key: 'root',
  storage
}, reducer)
const store = createStore(myReducer)

export default store