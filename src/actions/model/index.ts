import Constants from './constants';

export const fetchModelRequest = (modelId: string, callback?: (data: any) => void) => ({
  callback,
  modelId,
  type: Constants.FETCH_MODEL_REQUEST
});

export const fetchModelSuccess = (data: any) => ({
  payload: data,
  type: Constants.FETCH_MODEL_SUCCESS
});

export const fetchModelFailure = (error: any) => ({
  error,
  type: Constants.FETCH_MODEL_FAILURE
});

export const fetchModelListRequest = (tenantId: string) => ({
  tenantId,
  type: Constants.FETCH_MODEL_LIST_REQUEST
});

export const fetchModelListSuccess = (data: any) => ({
  payload: data,
  type: Constants.FETCH_MODEL_LIST_SUCCESS
});

export const fetchModelListFailure = (error: any) => ({
  error,
  type: Constants.FETCH_MODEL_LIST_FAILURE
});
