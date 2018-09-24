import { call, put } from 'redux-saga/effects';
import { updateLoggedInStatus } from '../actions/global';
import { fetchUsersFail, fetchUsersSuccess } from '../actions/user';
import {
  loginUserFail,
  loginUserSuccess,
  logoutUserFail,
  logoutUserSuccess
} from '../actions/user';
import { persistAuthToken, removeAuthToken } from '../global/interceptors';
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
  const { user } = action;
  try {
    const data = yield call(loginUser, user);
    persistAuthToken(data.data.accessToken.id);
    yield put(updateLoggedInStatus({ loggedIn: Boolean(data) }));
    yield put(loginUserSuccess(data));
  } catch (error) {
    yield put(loginUserFail(error));
  }
}

function* onLogoutUser(action: any) {
  const { user } = action;
  try {
    const data = yield call(logoutUser, user);
    removeAuthToken();
    yield put(updateLoggedInStatus({ loggedIn: false }));
    yield put(logoutUserSuccess(data));
  } catch (error) {
    yield put(logoutUserFail(error));
  }
}

export { onFetchUsers, onLoginUser, onLogoutUser };
