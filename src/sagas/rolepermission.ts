import { call, put } from 'redux-saga/effects';
import {
  createRolePermissionFailure,
  createRolePermissionSuccess,
  fetchRolePermissionFailure,
  fetchRolePermissionSuccess
} from '../actions/rolepermission';
import RolePermissionService from '../services/rolepermission';

function* createRolePermission(action: any) {
  try {
    const { payload, tenantId, modelName } = action;
    const response = yield call(RolePermissionService.createRolePermission, payload, tenantId, modelName);
    yield put(createRolePermissionSuccess(response));
  } catch (error) {
    yield put(createRolePermissionFailure(error));
  }
}

function* fetchRolePermission(action: any) {
  try {
    const { tenantId, modelName } = action;
    const response = yield call(RolePermissionService.fetchRolePermission, tenantId, modelName);
    yield put(fetchRolePermissionSuccess(response.data));
  } catch (error) {
    yield put(fetchRolePermissionFailure(error));
  }
}

export {
  createRolePermission,
  fetchRolePermission
};
