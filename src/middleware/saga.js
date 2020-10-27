import { all, call, put, takeEvery } from 'redux-saga/effects';
// import { login_action } from '../reducer/user/action'
import Axios from 'axios'

export function* login (action) {
  const data = yield call(Axios.get, `/api/sys/users?username=${action.data.username}&password=${action.data.password}`)
  console.log('data---===-', action)
  yield put({
    type: 'LOGIN',
    payload: data
  })
}

function* rootSaga () {
  yield takeEvery('LOGIN', login)
}
export default rootSaga
