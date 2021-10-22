import * as types from "./actionTypes"


// load users
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


// add user
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


// delete user
export const deleteUserStart = (userId) => ({
  type: types.DELETE_USER_START,
  payload: userId
})

export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId
})

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error
})

// update user
export const updateUserStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo
})

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
})

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error
})