import { takeLatest } from 'redux-saga/effects';
import CounterConstants from '../actions/counter/constants';
import DynamicTableConstants from '../actions/dynamicTable/constants';
import FormFieldDataConstants from '../actions/formfielddata/constants';
import FormSchemaConstants from '../actions/formschema/constants';
import UserConstants from '../actions/user/constants';

import {
  onDecrement,
  onDecrementAsync,
  onIncrement,
  onIncrementAsync
} from './counter';
import DynamicTableSaga from './dynamicTable';
import { fetchFormFieldData, fetchFormFieldDataList, saveFormFieldData  } from './formfielddata';
import { createFormSchema, fetchFormList, fetchFormSchema } from './formschema';
import { onFetchUsers, onLoginUser } from './user';

export default function* rootSaga() {
  yield takeLatest(CounterConstants.DECREMENT, onDecrement);
  yield takeLatest(CounterConstants.DECREMENT_ASYNC, onDecrementAsync);
  yield takeLatest(CounterConstants.INCREMENT, onIncrement);
  yield takeLatest(CounterConstants.INCREMENT_ASYNC, onIncrementAsync);
  yield takeLatest(UserConstants.FETCH_USERS, onFetchUsers);
  yield takeLatest(UserConstants.LOGIN_USER, onLoginUser);
  yield takeLatest(FormSchemaConstants.FETCH_FORM_SCHEMA_LIST, fetchFormList);
  yield takeLatest(FormFieldDataConstants.SAVE_FORM_FIELD_DATA_REQUEST, saveFormFieldData);
  yield takeLatest(FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST, fetchFormFieldDataList);
  yield takeLatest(FormFieldDataConstants.FETCH_FORM_FIELD_DATA_REQUEST, fetchFormFieldData);
  yield takeLatest(FormSchemaConstants.FETCH_FORM_SCHEMA_REQUEST, fetchFormSchema);
  yield takeLatest(FormSchemaConstants.CREATE_FORM_SCHEMA_REQUEST, createFormSchema);
  yield takeLatest(DynamicTableConstants.GET_TABLE_DATA, DynamicTableSaga.fetchTableData);
  yield takeLatest(DynamicTableConstants.GET_TABLE_META, DynamicTableSaga.fetchTableMeta);
}
