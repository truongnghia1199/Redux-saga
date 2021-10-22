import { all, call, delay, fork, put, takeEvery, takeLatest, take } from "redux-saga/effects"
import { addUserError, deleteUserSuccess, loadUsersError, loadUsersSuccess, deleteUserError, addUserSuccess, updateUserError, updateUserSuccess } from "./actions"
import * as types from "./actionTypes"
import { addUserApi, loadUsersApi, deleteUserApi, updateUserApi } from "./api"

// function load user

function* onLoadUsersStartAsync () {
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

function* onLoadUsers () {
  yield takeEvery(types.LOAD_USERS_START,onLoadUsersStartAsync)
}


// function add user

function* onAddUserStartAsync ({payload}) {
  try {
    const response = yield call(addUserApi, payload)
    if(response.status === 200) {
      yield put(addUserSuccess(response.data))
    }
  } 
  catch(error) {
    yield put(addUserError(error.response.data))
  }
}

function* onAddUser () {
  yield takeLatest(types.ADD_USER_START,
  onAddUserStartAsync)
}


// function delete user
function* onDeleteUserStartAsync (userId) {
  try {
    const response = yield call(deleteUserApi, userId)
    if(response.status === 200) {
      yield delay(500)
      yield put(deleteUserSuccess(userId))
    }
  } 
  catch(error) {
    yield put(deleteUserError(error.response.data))
  }
}

function* onDeleteUser() {
  while(true) {
    const { payload : userId } = yield take(types.DELETE_USER_START)
    yield call(onDeleteUserStartAsync, userId)
  }

}

// function update user
function* onUpdateUserStartAsync ({payload: {id, fromValue}}) {
  try {
    const response = yield call(updateUserApi, id, fromValue)
    if(response.status === 200){
      yield put(updateUserSuccess())
    }
  } 
  catch(error) {
    yield put(updateUserError(error.response.data))
  }
}

function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync)
}


const userSagas = [fork(onLoadUsers), fork(onAddUser), fork(onDeleteUser), fork(onUpdateUser)]

export default function* rootSaga() {
  yield all([...userSagas])
}

