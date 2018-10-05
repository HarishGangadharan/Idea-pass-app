import { takeLatest } from 'redux-saga/effects';
import CounterConstants from '../actions/counter/constants';
import FormFieldDataConstants from '../actions/formfielddata/constants';
import FormSchemaConstants from '../actions/formschema/constants';
import UserConstants from '../actions/user/constants';

import {
  onDecrement,
  onDecrementAsync,
  onIncrement,
  onIncrementAsync
} from './counter';
import { fetchFormFieldData, fetchFormFieldDataList, saveFormFieldData  } from './formfielddata';
import { createFormSchema, fetchFormList, fetchFormSchema } from './formschema';
import { onFetchUsers, onLoginUser, onLogoutUser } from './user';

export default function* rootSaga() {
  yield takeLatest(CounterConstants.DECREMENT, onDecrement);
  yield takeLatest(CounterConstants.DECREMENT_ASYNC, onDecrementAsync);
  yield takeLatest(CounterConstants.INCREMENT, onIncrement);
  yield takeLatest(CounterConstants.INCREMENT_ASYNC, onIncrementAsync);
  yield takeLatest(UserConstants.FETCH_USERS, onFetchUsers);
  yield takeLatest(UserConstants.LOGIN_USER, onLoginUser);
  yield takeLatest(UserConstants.LOGOUT_USER, onLogoutUser);
  yield takeLatest(FormSchemaConstants.FETCH_FORM_SCHEMA_LIST, fetchFormList);
  yield takeLatest(FormFieldDataConstants.SAVE_FORM_FIELD_DATA_REQUEST, saveFormFieldData);
  yield takeLatest(FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST, fetchFormFieldDataList);
  yield takeLatest(FormFieldDataConstants.FETCH_FORM_FIELD_DATA_REQUEST, fetchFormFieldData);
  yield takeLatest(FormSchemaConstants.FETCH_FORM_SCHEMA_REQUEST, fetchFormSchema);
  yield takeLatest(FormSchemaConstants.CREATE_FORM_SCHEMA_REQUEST, createFormSchema);
}
