import axios from 'axios';
import { AppProperties } from '../constants/application.properties';
import ERRORS from '../constants/errorConstants';
import ApiError from '../errors/ApiError';
import storage from '../utils/storage';

/**
 * Set auth token as default in axios
 * @param token: string : AccessToken
 */
export const setAuthToken = (token: string = storage.getItem(AppProperties.ACCESS_TOKEN_KEY)) => {
  axios.defaults.headers.common.Authorization = token;
};

/**
 * Saves auth token in storage and sets as default
 * @param token: string : AccessToken
 */
export const persistAuthToken = (token: string) => {
  storage.setItem(AppProperties.ACCESS_TOKEN_KEY, token);
  setAuthToken(token);
};

/**
 * Saves auth token in storage and sets as default
 */
export const removeAuthToken = () => {
  storage.deleteItem(AppProperties.ACCESS_TOKEN_KEY);
  setAuthToken();
};

/**
 * Setup defaults and request response interceptors for axios on load
 * @param store : Redux App Store
 */
export const setupInterceptors = (store: any) => {
  axios.defaults.baseURL = AppProperties.BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.validateStatus = () => true;
  setAuthToken();
  axios.interceptors.request.use(config => config, error => Promise.reject(error));
  axios.interceptors.response.use((response: any) => {
    const { status } = response;
    /** Processes response body
     *  use store.dispatch() to dispatch any redux actions
     *  considered for logut status to be 201
     */
    if (status > 205 && status !== 201) {
      switch (status) {
        case 500:
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
