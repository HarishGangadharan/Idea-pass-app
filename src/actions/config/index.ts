import Constants from './constants';

export const fetchConfigRequest = (configList: string, tenantId: string) => ({
  configList,
  tenantId,
  type: Constants.FETCH_CONFIG_REQUEST
});

export const fetchConfigSuccess = (data: Object) => ({
  payload: data,
  type: Constants.FETCH_CONFIG_SUCCESS
});

export const fetchConfigFailure = (error: Object) => ({
  error,
  type: Constants.FETCH_CONFIG_FAILURE
});
