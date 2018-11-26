import Constants from '../actions/user/constants';

const initialState = {
  loading: false,
  total: 0,
  user: null,
  users: []
};

import { IActionProps } from './index';

export interface IuserReducer {
  loading: boolean;
  user: any;
  users: any[];
  total: number
}

export const userReducer = (
  state: IuserReducer = initialState,
  action: IActionProps
) => {
  switch (action.type) {
    case Constants.FETCH_USERS:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false
      };
    case Constants.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        total: action.response.data.total,
        users: action.response.data.data
      };
    case Constants.LOGIN_USER:
      return {
        ...state,
        loading: true
      };
    case Constants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.response
      };
    case Constants.LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false
      };
    case Constants.LOGOUT_USER:
      return {
        ...state,
        loading: true
      };
    case Constants.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null
      };
    case Constants.LOGOUT_USER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
