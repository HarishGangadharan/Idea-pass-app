import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import {
  createRoleFailure,
  createRoleSuccess,
  fetchRoleFailure,
  fetchRoleListFailure,
  fetchRoleListSuccess,
  fetchRoleSuccess
} from '../actions/role';
import RoleService from '../services/role';

function* createRole(action: any) {
  try {
    const response = yield call(RoleService.createRole, action.payload, action.roleId);
    yield put(createRoleSuccess(response));
    yield put(push('/'));
  } catch (error) {
    yield put(push('/'));
    yield put(createRoleFailure(error));
  }
}

function* fetchRole(action: any) {
  try {
    const { roleId, callback } = action;
    const roles = yield call(RoleService.fetchRole, roleId);
    if (callback) {
      callback(roles.data);
    }
    yield put(fetchRoleSuccess(roles.data));
  } catch (error) {
    yield put(fetchRoleFailure(error));
  }
}

function* fetchRoleList(action: any) {
  try {
    const { limit, currentPage, tenantId } = action;
    const roles = yield call(RoleService.getAllRole, tenantId, limit, currentPage);
    yield put(fetchRoleListSuccess(roles.data));
  } catch (error) {
    yield put(fetchRoleListFailure(error));
  }
}

export {
  createRole,
  fetchRole,
  fetchRoleList
};
