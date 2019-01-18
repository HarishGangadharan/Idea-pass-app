import { IPermission, IRolePermissionReducer } from '../../reducers/rolepermission';
import Constants from './constants';

export const createRolePermissionRequest = (data: IRolePermissionReducer, updatedRolePermissions: IRolePermissionReducer) => ({
  payload: data,
  type: Constants.CREATE_ROLE_PERMISSION_REQUEST,
  updatedRolePermissions
});

export const createRolePermissionSuccess = (data: IPermission) => ({
  payload: data,
  type: Constants.CREATE_ROLE_PERMISSION_SUCCESS
});

export const createRolePermissionFailure = (error: any) => ({
  error,
  type: Constants.CREATE_ROLE_PERMISSION_FAILURE
});

export const updateRolePermissionState = (row: IPermission, updatedPermissions: []) => ({
  row,
  type: Constants.UPDATE_ROLE_PERMISSION_STATE,
  updatedPermissions
});

export const fetchRolePermissionRequest = (tenantId: string, modelName: string) => ({
  modelName,
  tenantId,
  type: Constants.FETCH_ROLE_PERMISSION_REQUEST
});

export const fetchRolePermissionSuccess = (data: IPermission) => ({
  payload: data,
  type: Constants.FETCH_ROLE_PERMISSION_SUCCESS
});

export const fetchRolePermissionFailure = (error: any) => ({
  error,
  type: Constants.FETCH_ROLE_PERMISSION_FAILURE
});

export const resetPermissionState = () => ({
  type: Constants.RESET_PERMISSION_STATE
});
