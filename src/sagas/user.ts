import { call, put } from "redux-saga/effects";
import { fetchUsersFail, fetchUsersSuccess } from "../actions/user";
import { getUsers } from '../services/user';

function* onFetchUsers() {
  try {
    const data = yield call(getUsers);
    yield put(fetchUsersSuccess(data));
  } catch (error) {
    yield put(fetchUsersFail(error));
  }
}

export {
  onFetchUsers
};
