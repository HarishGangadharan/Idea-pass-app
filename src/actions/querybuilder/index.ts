import Constants from './constants';

export const fetchQueryFieldsRequest = (tenantId: string) => ({
  tenantId,
  type: Constants.FETCH_QUERY_BUILDER_FIELDS_REQUEST
});

export const fetchQueryFieldsSuccess = (data: any) => ({
  payload: data,
  type: Constants.FETCH_QUERY_BUILDER_FIELDS_SUCCESS
});

export const fetchQueryFieldsFailure = (error: any) => ({
  error,
  type: Constants.FETCH_QUERY_BUILDER_FIELDS_FAILURE
});
