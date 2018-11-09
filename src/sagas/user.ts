import { call, put } from 'redux-saga/effects';
import { AppProperties } from 'src/constants/application.properties';
import storage from 'src/utils/storage';
import { updateLoggedInStatus } from '../actions/global';
import { fetchUsersFail, fetchUsersSuccess } from '../actions/user';
import {
  loginUserFail,
  loginUserSuccess,
  logoutUserFail,
  logoutUserSuccess
} from '../actions/user';
import { updateUserSession } from '../global/interceptors';
import { fetchRolePermissionRules } from '../sagas/rolepermission';
import { getUsers, loginUser, logoutUser } from '../services/user';

function* onFetchUsers() {
  try {
    const data = yield call(getUsers);
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
    const assignedRoles = response.data.roles.join(',');
    storage.setItem(AppProperties.USER_ID, response.data._id);
    storage.setItem(AppProperties.ROLES, assignedRoles);
    if (response.data.tenant) {
      storage.setItem(AppProperties.TENANT, response.data.tenant);
    }
    yield call(fetchRolePermissionRules, { userRole: assignedRoles });
    yield put(updateLoggedInStatus({ loggedIn: Boolean(response) }));
    yield put(loginUserSuccess(response));
  } catch (error) {
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
