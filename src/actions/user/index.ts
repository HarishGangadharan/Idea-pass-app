import {
  FETCH_USERS,
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS
} from "./constants";

export const fetchUsers = () => ({  
  type: FETCH_USERS
});

export const fetchUsersSuccess = (response: object) => ({  
  response,
  type: FETCH_USERS_SUCCESS
});

export const fetchUsersFail = (error: any) => ({  
  error,
  type: FETCH_USERS_FAIL
});
