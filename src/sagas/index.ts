import { takeLatest } from 'redux-saga/effects';
import CounterConstants from '../actions/counter/constants';
import DynamicTableConstants from '../actions/dynamicTable/constants';
import FormFieldDataConstants from '../actions/formfielddata/constants';
import FormSchemaConstants from '../actions/formschema/constants';
import ModelConstants from '../actions/model/constants';
import OrganizationConstants from '../actions/organization/constants';
import RoleConstants from '../actions/role/constants';
import RolePermissionConstants from '../actions/rolepermission/constants';
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
import { fetchModelList } from './model';
import { fetchOrganizationList } from './organization';
import { fetchRoleList } from './role';
import { fetchRolePermission } from './rolepermission';
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
  yield takeLatest(DynamicTableConstants.GET_TABLE_DATA, DynamicTableSaga.fetchTableData);
  yield takeLatest(DynamicTableConstants.GET_TABLE_META, DynamicTableSaga.fetchTableMeta);
  yield takeLatest(OrganizationConstants.FETCH_ORGANIZATION_LIST_REQUEST, fetchOrganizationList);
  yield takeLatest(RoleConstants.FETCH_ROLE_LIST_REQUEST, fetchRoleList);
  yield takeLatest(RolePermissionConstants.FETCH_ROLE_PERMISSION_REQUEST, fetchRolePermission);
  yield takeLatest(ModelConstants.FETCH_MODEL_LIST_REQUEST, fetchModelList);
}
