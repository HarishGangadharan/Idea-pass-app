import { takeLatest } from "redux-saga/effects";
import {
  DECREMENT,
  INCREMENT
} from "../constants/counterActions";
import { onDecrement, onIncrement } from "./counter";

export default function* rootSaga() {
  yield takeLatest(DECREMENT, onDecrement),
  yield takeLatest(INCREMENT, onIncrement)
}