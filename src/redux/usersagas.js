import { all, call, delay, fork, put, takeEvery, takeLatest } from "redux-saga/effects"
import { addUserError, loadUsersError, loadUsersSuccess } from "./actions"
import * as types from "./actionTypes"
import { addUserApi, loadUsersApi } from "./api"

export function* onLoadUsersStartAsync () {
  try {
    const response = yield call(loadUsersApi)
    if(response.status === 200) {
      yield delay(500)
      yield put(loadUsersSuccess(response.data))
    }
  } 
  catch(error) {
    yield put(loadUsersError(error.response.data))
  }
}

export function* onAddUserStartAsync ({payload}) {
  try {
    const response = yield call(addUserApi, payload)
    if(response.status === 200) {
      yield put(addUserError(response.data))
    }
  } 
  catch(error) {
    yield put(addUserError(error.response.data))
  }
}

export function* onLoadUsers () {
  yield takeEvery(types.LOAD_USERS_START,onLoadUsersStartAsync)
}

export function* onAddUser () {
  yield takeLatest(types.ADD_USER_START,
  onAddUserStartAsync)
}

const userSagas = [fork(onLoadUsers), fork(onAddUser)]

export default function* rootSaga() {
  yield all([...userSagas])
}

