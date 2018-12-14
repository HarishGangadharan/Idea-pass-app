import { IPermission } from '../../reducers/rolepermission';
import Constants from './constants';

export const createRolePermissionRequest = (data: any) => ({
  payload: data,
  type: Constants.CREATE_ROLE_PERMISSION_REQUEST
});

export const createRolePermissionSuccess = (data: any) => ({
  payload: data,
  type: Constants.CREATE_ROLE_PERMISSION_SUCCESS
});

export const createRolePermissionFailure = (error: any) => ({
  error,
  type: Constants.CREATE_ROLE_PERMISSION_FAILURE
});

export const updateRolePermissionState = (row: IPermission) => ({
  row,
  type: Constants.UPDATE_ROLE_PERMISSION_STATE
});

export const fetchRolePermissionRequest = (tenantId: string, modelName: string) => ({
  modelName,
  tenantId,
  type: Constants.FETCH_ROLE_PERMISSION_REQUEST
});

export const fetchRolePermissionSuccess = (data: any) => ({
  payload: data,
  type: Constants.FETCH_ROLE_PERMISSION_SUCCESS
});

export const fetchRolePermissionFailure = (error: any) => ({
  error,
  type: Constants.FETCH_ROLE_PERMISSION_FAILURE
});
