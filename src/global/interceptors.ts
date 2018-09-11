import axios from 'axios';
import { AppProperties } from '../constants/application.properties';
import ERRORS from '../constants/errorConstants';
import ApiError from '../errors/ApiError';

/**
 * Setup defaults and request response interceptors for axios on load
 * @param store
 */
export const setupInterceptors = (store: any) => {
  axios.defaults.baseURL = AppProperties.BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.validateStatus = () => true;
  axios.interceptors.request.use(
    config => config, error => Promise.reject(error)
  );
  axios.interceptors.response.use((response: any) => {
    /** Processes response body
     *  use store.dispatch() to dispatch any redux actions
     */
    if (response.status > 205) {
      switch (response.status) {
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

/**
 * Set auth token as default in axios
 * @param token
 */
export const setAuthToken = (token = localStorage.getItem('accessToken')) => {
  axios.defaults.headers.common.Authorization = token;
};

setAuthToken();
