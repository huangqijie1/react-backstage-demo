import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react';
import store from './store'
// import logo from './logo.svg';
import './App.css';
import BasicLayout from './layout/basicLayout'
import Login from '@/views/system/login'
const persistor = persistStore(store)
function isLogin () {
  const token = sessionStorage.getItem('HQJ_token');
  return token;
}
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path='/' render={() => <Redirect to="/views/sys/home" />} />
              <Route path='/views' render={() => isLogin() ? <BasicLayout/> : <Redirect to="/login" />}/>
              <Route path='/login' component={Login} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}
export default App;
