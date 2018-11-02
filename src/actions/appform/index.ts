import Constants from './constants';

export const saveAppFormRequest = (api: string, data: any) => ({
  api,
  data,
  type: Constants.SAVE_APP_FORM_REQUEST
});

export const saveAppFormSuccess = (data: any) => ({
  data,
  type: Constants.SAVE_APP_FORM_SUCCESS
});

export const saveAppFormFailure = (error: any) => ({
  error,
  type: Constants.SAVE_APP_FORM_FAILURE
});

export const fetchAppFormRequest = (api: string) => ({
  api,
  type: Constants.FETCH_APP_FORM_REQUEST
});

export const fetchAppFormSuccess = (data: any) => ({
  data,
  type: Constants.FETCH_APP_FORM_SUCCESS
});

export const fetchAppFormFailure = (error: any) => ({
  error,
  type: Constants.FETCH_APP_FORM_FAILURE
});
