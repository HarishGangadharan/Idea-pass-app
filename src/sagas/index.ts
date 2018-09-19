import { takeLatest } from "redux-saga/effects";
import CounterConstants from "../actions/counter/constants";
import UserConstants from "../actions/user/constants";

import {
  onDecrement,
  onDecrementAsync,
  onIncrement,
  onIncrementAsync
} from "./counter";
import { onFetchUsers } from "./user";

export default function* rootSaga() {
  yield takeLatest(CounterConstants.DECREMENT, onDecrement),
    yield takeLatest(CounterConstants.DECREMENT_ASYNC, onDecrementAsync),
    yield takeLatest(CounterConstants.INCREMENT, onIncrement),
    yield takeLatest(CounterConstants.INCREMENT_ASYNC, onIncrementAsync),
    yield takeLatest(UserConstants.FETCH_USERS, onFetchUsers);
}
