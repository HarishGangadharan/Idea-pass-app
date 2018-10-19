import Constants from './constants';

export const createRoleRequest = (data: any, roleId?: string) => ({
  payload: data,
  roleId,
  type: Constants.CREATE_ROLE_REQUEST
});

export const createRoleSuccess = (data: any) => ({
  payload: data,
  type: Constants.CREATE_ROLE_SUCCESS
});

export const createRoleFailure = (error: any) => ({
  error,
  type: Constants.CREATE_ROLE_FAILURE
});

export const fetchRoleRequest = (roleId: string, callback?: (data: any) => void) => ({
  callback,
  roleId,
  type: Constants.FETCH_ROLE_REQUEST
});

export const fetchRoleSuccess = (data: any) => ({
  payload: data,
  type: Constants.FETCH_ROLE_SUCCESS
});

export const fetchRoleFailure = (error: any) => ({
  error,
  type: Constants.FETCH_ROLE_FAILURE
});

export const fetchRoleListRequest = (tenantId: string, limit: number, currentPage: number) => ({
  currentPage,
  limit,
  tenantId,
  type: Constants.FETCH_ROLE_LIST_REQUEST
});

export const fetchRoleListSuccess = (data: any) => ({
  payload: data,
  type: Constants.FETCH_ROLE_LIST_SUCCESS
});

export const fetchRoleListFailure = (error: any) => ({
  error,
  type: Constants.FETCH_ROLE_LIST_FAILURE
});
