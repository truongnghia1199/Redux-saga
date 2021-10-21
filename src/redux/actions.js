import * as types from "./actionTypes"

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START
})

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users
})

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error
})

export const addUserStart = (user) => ({
  type: types.ADD_USER_START,
  payload: user
})

export const addUserSuccess = () => ({
  type: types.ADD_USER_SUCCESS
})

export const addUserError = (error) => ({
  type: types.ADD_USER_ERROR,
  payload: error
})