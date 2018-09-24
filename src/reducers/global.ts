import { combineReducers } from 'redux';
import Constants from '../actions/global/constants';
import { AppProperties } from '../constants/application.properties';
import storage from '../utils/storage';

export interface IUserStatuslReducer {
  loggedIn: boolean,
  resetPassword: boolean
}

const userStatusInitialState = {
  loggedIn: Boolean(storage.getItem(AppProperties.ACCESS_TOKEN_KEY)),
  resetPassword: false
};

const userStatusReducer = (state = userStatusInitialState, action: any) => {
  // tslint:disable
  switch (action.type) {
    case Constants.SET_LOGGED_IN_STATUS:
      return {
        ...state,
        ...action.userStatus
      };
    default:
      return state;
  }
};


/**
 * Setting default status on APP init for logged in user having access token
 * to be present in local storage.
 * User will be forced to logout if invalid accessToken is present
 * which will be validated on APP init.
 */
export interface IGlobalReducer {
  userStatus: IUserStatuslReducer,
  loading: boolean
}

export const globalReducer = combineReducers({
  userStatus: userStatusReducer
});
