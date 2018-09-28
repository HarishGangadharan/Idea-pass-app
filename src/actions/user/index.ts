import Constants from './constants';

export const fetchUsers = () => ({
  type: Constants.FETCH_USERS
});

export const fetchUsersSuccess = (response: object) => ({
  response,
  type: Constants.FETCH_USERS_SUCCESS
});

export const fetchUsersFail = (error: any) => ({
  error,
  type: Constants.FETCH_USERS_FAIL
});

export const loginUser = (email: string, password: string) => ({
  email,
  password,
  type: Constants.LOGIN_USER
});

export const loginUserSuccess = (response: any) => ({
  response,
  type: Constants.LOGIN_USER_SUCCESS
});

export const loginUserFail = (error: any) => ({
  error,
  type: Constants.LOGIN_USER_FAIL
});

export const logoutUser = () => ({
  type: Constants.LOGOUT_USER
});

export const logoutUserSuccess = (response: any) => ({
  response,
  type: Constants.LOGOUT_USER_SUCCESS
});

export const logoutUserFail = (error: any) => ({
  error,
  type: Constants.LOGOUT_USER_FAIL
});
