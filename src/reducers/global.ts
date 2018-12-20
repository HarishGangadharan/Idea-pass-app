import { combineReducers } from 'redux';
import Constants from '../actions/global/constants';
import { AppProperties } from '../constants/application.properties';
import storage from '../utils/storage';

export interface IUserStatuslReducer {
  loggedIn: boolean,
  resetPassword: boolean,
  loading: boolean
}
export interface ILoaderReducer {
  loadInProgress: number,
  loading: boolean
}

const userStatusInitialState = {
  loading: false,
  loggedIn: Boolean(storage.getItem(AppProperties.ACCESS_TOKEN_KEY)),
  resetPassword: false
};

const loaderInitialState = {
  loadInProgress: 0
};

const userStatusReducer = (state = userStatusInitialState, action: any) => {
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

const loaderReducer = (state = loaderInitialState, action: any) => {
  switch (action.type) {
    /**
     * loadInProceess increase the value,
     * if the dispatch method incrementLoaderQueue triggers
     */
    case Constants.INCREMENT_LOADER_QUEUE:
      return {
        ...state,
        loadInProgress: state.loadInProgress + 1,
        loading: Boolean(state.loadInProgress + 1)
      };
    /**
     * loadInProceess decrease the value,
     * if the dispatch method decrementLoaderQueue triggers
     */
    case Constants.DECREMENT_LOADER_QUEUE:
      return {
        ...state,
        loadInProgress: state.loadInProgress - 1,
        loading: Boolean(state.loadInProgress - 1)
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
  loader: ILoaderReducer
}

export const globalReducer = combineReducers({
  loader: loaderReducer,
  userStatus: userStatusReducer
});
