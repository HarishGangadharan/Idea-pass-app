import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { updateLoggedInStatus } from '../actions/global';
import { fetchUsersFail, fetchUsersSuccess } from '../actions/user';
import {
  loginUserFail,
  loginUserSuccess,
  logoutUserFail,
  logoutUserSuccess
} from '../actions/user';
import { AppProperties } from '../constants/application.properties';
import { updateUserSession } from '../global/interceptors';
import { fetchRolePermissionRules } from '../sagas/rolepermission';
import { getUsers, loginUser, logoutUser } from '../services/user';
import ErrorConstants from '../constants/errorConstants';
import storage from '../utils/storage';

function* onFetchUsers(action: any) {
  const { requestFilter } = action;
  try {
    const data = yield call(getUsers, requestFilter);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFail(error));
  }
}

function* onLoginUser(action: any) {
  const { email, password } = action;
  try {
    const response = yield call(loginUser, email, password);
    updateUserSession(true);
    const responseRoles: object = response.data.roles;
    let assignedRoles: string = '';
    let constructedRoles: string[] = [];
    if (Array.isArray(responseRoles)) {
      assignedRoles = responseRoles.join(',');
    } else if (Object.keys(responseRoles).length > 0) {
      Object.keys(responseRoles).forEach(item => {
        constructedRoles = [...constructedRoles, ...responseRoles[item]];
      });
      const uniqueRoles = (roles: string[]) => roles.filter((value: string, index) => roles.indexOf(value) === index);
      assignedRoles = uniqueRoles(constructedRoles).join(',');
    }
    storage.setItem(AppProperties.USER_ID, response.data._id);
    storage.setItem(AppProperties.ROLES, assignedRoles);
    if (response.data.tenant) {
      storage.setItem(AppProperties.TENANT, response.data.tenant);
    }
    yield call(fetchRolePermissionRules, { userRole: assignedRoles });
    yield put(updateLoggedInStatus({ loggedIn: Boolean(response) }));
    yield put(loginUserSuccess(response));
  } catch (error) {
    if (error === 401) {
      toast.error(ErrorConstants.USER_NOT_FOUND.message);
    }
    yield put(loginUserFail(error));
  }
}

function* onLogoutUser(action: any) {
  const { user } = action;
  try {
    const data = yield call(logoutUser, user);
    updateUserSession(false);
    storage.deleteItem(AppProperties.ROLES);
    storage.deleteItem(AppProperties.USER_ID);
    storage.deleteItem(AppProperties.RULES_UPDATED);
    storage.deleteItem(AppProperties.TENANT);
    yield put(updateLoggedInStatus({ loggedIn: false }));
    yield put(logoutUserSuccess(data));
  } catch (error) {
    yield put(logoutUserFail(error));
  }
}

export { onFetchUsers, onLoginUser, onLogoutUser };
