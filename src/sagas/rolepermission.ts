import { unpackRules } from '@casl/ability/extra';
import { call, put } from 'redux-saga/effects';
import { AppProperties } from 'src/constants/application.properties';
import storage from 'src/utils/storage';
import ability from '../ability';
import {
  createRolePermissionFailure,
  createRolePermissionSuccess,
  fetchRolePermissionFailure,
  fetchRolePermissionSuccess
} from '../actions/rolepermission';
import RolePermissionService from '../services/rolepermission';

function* createRolePermission(action: any) {
  try {
    const { payload } = action;
    yield call(RolePermissionService.createRolePermission, payload);
    yield put(createRolePermissionSuccess(payload));
  } catch (error) {
    yield put(createRolePermissionFailure(error));
  }
}

function* fetchRolePermission(action: any) {
  try {
    const { tenantId, modelName } = action;
    const response = yield call(RolePermissionService.fetchRolePermission, tenantId, modelName);
    response.data.permissions.forEach((permission: any) => {
      if (!permission.permission || !Object.keys(permission.permission).length) {
        permission.permission = {
          create: {
            action: 'cannot'
          },
          delete: {
            action: 'cannot'
          },
          read: {
            action: 'cannot'
          },
          update: {
            action: 'cannot'
          }
        };
      }
    });
    yield put(fetchRolePermissionSuccess(response.data));
  } catch (error) {
    yield put(fetchRolePermissionFailure(error));
  }
}

function* fetchRolePermissionRules(action: any) {
  try {
    const { userRole } = action;
    const response = yield call(RolePermissionService.fetchRolePermissionRules, userRole);
    if (response.data !== '[]') {
      ability.update([...unpackRules(JSON.parse(response.data))]);
    } else {
      const defaultRules = [
        {
          'actions': ['read'],
          'subject': ['default']
        }
      ];
      ability.update(defaultRules);
    }
    storage.setItem(AppProperties.RULES_UPDATED, 'true');
  } catch (error) {
    //
  }
}

export {
  createRolePermission,
  fetchRolePermission,
  fetchRolePermissionRules
};
