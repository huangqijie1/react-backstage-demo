import { createStore, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import rootSaga from '../middleware/saga.js';

const sagaMiddleware = createSagaMiddleware();

const myReducer = persistReducer({
  key: 'root',
  storage
}, reducer)
const store = createStore(myReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga) 

export default store