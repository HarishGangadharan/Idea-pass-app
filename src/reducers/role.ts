import { combineReducers } from 'redux';
import { IActionProps } from '.';
import Constants from '../actions/role/constants';

export interface IRole {
  _id?: string;
  name: string;
  applicationName: string;
  email: string;
  isActive: boolean;
  loading: boolean;
}

export interface IRoles {
  data: IRole[];
  total: number;
  loading: boolean;
}

export interface IRoleReducer {
  currentRole: IRole,
  list: IRoles;
}

const listInitialState: IRoles = {
  data: [],
  loading: false,
  total: 0
};

const roleInitialState: IRole = {
  applicationName: '',
  email: '',
  isActive: true,
  loading: false,
  name: ''
};

const roleReducer = (state: IRole = roleInitialState, action: IActionProps): IRole => {
  switch (action.type) {
    case Constants.CREATE_ROLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.CREATE_ROLE_SUCCESS:
      return roleInitialState;
    case Constants.CREATE_ROLE_FAILURE:
      return roleInitialState;
    case Constants.FETCH_ROLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case Constants.FETCH_ROLE_FAILURE:
      return roleInitialState;
    default:
      return state;
  }
};

const roleListReducer = (state: IRoles = listInitialState, action: IActionProps): IRoles => {
  switch (action.type) {
    case Constants.FETCH_ROLE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Constants.FETCH_ROLE_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        total: action.payload.total
      };
    case Constants.FETCH_ROLE_LIST_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export const roleReducers = combineReducers({
  currentRole: roleReducer,
  list: roleListReducer
});
