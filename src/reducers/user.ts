import {
  FETCH_USERS,
  FETCH_USERS_FAIL,
  FETCH_USERS_SUCCESS
} from "../actions/user/constants";

const initialState = {
  loading: false,
  users: []
};

import { IActionProps } from "./index";

export interface IuserReducer {
  loading: boolean;
  users: any[];
}

export const userReducer = (
  state: IuserReducer = initialState,
  action: IActionProps
) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true
      };
      break;
    case FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false
      };
      break;
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.response.data
      };
      break;
    default:
      return state;
  }
};
