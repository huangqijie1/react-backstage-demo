import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react';
import store from './store'
// import logo from './logo.svg';
import './App.css';
import BasicLayout from './layout/basicLayout'
import Login from '@/views/system/login'
const persistor = persistStore(store)
function App() {
  const states = store.getState()
  console.log('store---', states)
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <Switch>
              <Route exact path='/' render={() => <Redirect to="/sys/home" />} />
              <Route path='/sys' component={BasicLayout} />
              <Route path='/login' component={Login} />
            </Switch>
          </HashRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}
export default App;
