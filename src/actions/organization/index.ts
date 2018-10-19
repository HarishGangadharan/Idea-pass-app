import Constants from './constants';

export const createOrganizationRequest = (data: any, organizationId?: string) => ({
  organizationId,
  payload: data,
  type: Constants.CREATE_ORGANIZATION_REQUEST
});

export const createOrganizationSuccess = (data: any) => ({
  payload: data,
  type: Constants.CREATE_ORGANIZATION_SUCCESS
});

export const createOrganizationFailure = (error: any) => ({
  error,
  type: Constants.CREATE_ORGANIZATION_FAILURE
});

export const fetchOrganizationRequest = (organizationId: string, callback?: (data: any) => void) => ({
  callback,
  organizationId,
  type: Constants.FETCH_ORGANIZATION_REQUEST
});

export const fetchOrganizationSuccess = (data: any) => ({
  payload: data,
  type: Constants.FETCH_ORGANIZATION_SUCCESS
});

export const fetchOrganizationFailure = (error: any) => ({
  error,
  type: Constants.FETCH_ORGANIZATION_FAILURE
});

export const fetchOrganizationListRequest = (limit: number, currentPage: number) => ({
  currentPage,
  limit,
  type: Constants.FETCH_ORGANIZATION_LIST_REQUEST
});

export const fetchOrganizationListSuccess = (data: any) => ({
  payload: data,
  type: Constants.FETCH_ORGANIZATION_LIST_SUCCESS
});

export const fetchOrganizationListFailure = (error: any) => ({
  error,
  type: Constants.FETCH_ORGANIZATION_LIST_FAILURE
});
