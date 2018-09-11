import { takeLatest } from "redux-saga/effects";

import {
  DECREMENT,
  DECREMENT_ASYNC,
  INCREMENT,
  INCREMENT_ASYNC
} from "../actions/counter/constants";
import {
  FETCH_USERS
} from "../actions/user/constants";

import { onDecrement, onDecrementAsync, onIncrement, onIncrementAsync } from "./counter";
import { onFetchUsers } from "./user";

export default function* rootSaga() {
  yield takeLatest(DECREMENT, onDecrement),
  yield takeLatest(DECREMENT_ASYNC, onDecrementAsync);
  yield takeLatest(INCREMENT, onIncrement);
  yield takeLatest(INCREMENT_ASYNC, onIncrementAsync);
  yield takeLatest(FETCH_USERS, onFetchUsers);
}
