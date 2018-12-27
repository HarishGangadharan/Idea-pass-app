import { unpackRules } from '@casl/ability/extra';
import { call, put } from 'redux-saga/effects';
import ability from '../ability';
import {
  createRolePermissionFailure,
  createRolePermissionSuccess,
  fetchRolePermissionFailure,
  fetchRolePermissionSuccess
} from '../actions/rolepermission';
import { AppProperties } from '../constants/application.properties';
import RolePermissionService from '../services/rolepermission';
import storage from '../utils/storage';
import { onLogoutUser } from './user';

import _ from 'lodash';

function* createRolePermission(action: any) {
  try {
    const { payload, updatedRolePermissions } = action;
    const response = yield call(RolePermissionService.createRolePermission, payload);
    updatedRolePermissions.permissions = _.merge(response.data.permissions, updatedRolePermissions.permissions);
    yield put(createRolePermissionSuccess(updatedRolePermissions));
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
            action: ''
          },
          delete: {
            action: ''
          },
          read: {
            action: ''
          },
          update: {
            action: ''
          }
        };
      } else {
        Object.keys(permission.permission).forEach((rule: any) => {
          ['create', 'delete', 'read', 'update'].forEach((accessRule: any) => {
            if (accessRule !== rule && !permission.permission[accessRule]) {
              permission.permission[accessRule] = { action: '' };
            }
          });
        });
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
    yield call(onLogoutUser, { user: {} });
    //
  }
}

export {
  createRolePermission,
  fetchRolePermission,
  fetchRolePermissionRules
};
