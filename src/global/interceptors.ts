import axios from 'axios';
import { updateLoggedInStatus, updateUserRole } from '../actions/global';
import { AppProperties } from '../constants/application.properties';
import ERRORS from '../constants/errorConstants';
import ApiError from '../errors/ApiError';
import storage from '../utils/storage';

/**
 * Saves user session in storage and sets as default
 * @param valid: boolean : userSession
 */
export const updateUserSession = (valid: boolean) => {
  storage.setItem(AppProperties.USER_SESSION, valid);
};

/**
 * Setup defaults and request response interceptors for axios on load
 * @param store : Redux App Store
 */
export const setupInterceptors = (store: any) => {
  storage.setItem(AppProperties.RULES_UPDATED, 'false');
  axios.defaults.baseURL = AppProperties.BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.validateStatus = () => true;
  axios.interceptors.request.use(config => {
    config.withCredentials = true;
    return config;
  }, error => Promise.reject(error));
  const userSession = storage.getItem(AppProperties.USER_SESSION);
  const userRole = storage.getItem(AppProperties.ROLES);
  updateUserSession(userSession);
  store.dispatch(updateLoggedInStatus(userSession !== 'true' ? { loggedIn: false } : { loggedIn: true }));
  if (userRole) {
    store.dispatch(updateUserRole(userRole));
  }
  axios.interceptors.response.use((response: any) => {
    const { status } = response;
    /** Processes response body
     *  use store.dispatch() to dispatch any redux actions
     *  considered for logout status to be 201
     */
    if (status > 205 && status !== 201) {
      switch (status) {
        case 500:
          throw new ApiError(ERRORS.SERVER_ERROR);
        case 403:
          updateUserSession(false);
          storage.deleteItem(AppProperties.ROLES);
          storage.deleteItem(AppProperties.USER_ID);
          storage.deleteItem(AppProperties.RULES_UPDATED);
          storage.deleteItem(AppProperties.TENANT);
          store.dispatch(updateLoggedInStatus({ loggedIn: false }));
          throw new ApiError(ERRORS.SERVER_ERROR);
      }
    } else {
      return response;
    }
  }, error => {
    Promise.reject(error);
    throw new ApiError(ERRORS.NETWORK_ERROR);
  });
};
