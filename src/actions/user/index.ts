import Constants from "./constants";

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
