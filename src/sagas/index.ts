import { takeLatest } from 'redux-saga/effects';
import AppFormConstants from '../actions/appform/constants';
import ConfigConstants from '../actions/config/constants';
import CounterConstants from '../actions/counter/constants';
import DynamicTableConstants from '../actions/dynamicTable/constants';
import EmailTemplateConstants from '../actions/emailTemplate/constants';
import FormFieldDataConstants from '../actions/formfielddata/constants';
import FormSchemaConstants from '../actions/formschema/constants';
import FormTriggerConstants from '../actions/formTrigger/constants';
import GlobalConstants from '../actions/global/constants';
import GraphiQlContants from '../actions/graphiQl/constants';
import OrganizationConstants from '../actions/organization/constants';
import QueryBuilderConstants from '../actions/querybuilder/constants';
import RoleConstants from '../actions/role/constants';
import RolePermissionConstants from '../actions/rolepermission/constants';
import UserConstants from '../actions/user/constants';

import { saveAppForm } from './appform';
import { fetchConfig } from './config';
import {
  onDecrement,
  onDecrementAsync,
  onIncrement,
  onIncrementAsync
} from './counter';
import DynamicTableSaga from './dynamicTable';
import { createOrUpdateEmailTemplate, getAllEmailTemplates, getEmailTemplate } from './emailTemplate';
import { fetchFormFieldData, fetchFormFieldDataList, saveFormFieldData  } from './formfielddata';
import { createFormSchema, fetchFormList, fetchFormSchema, fetchTemplateList } from './formschema';
import { fetchFormTrigger, fetchFormTriggerList, fetchSourceFormTrigger, fetchTargetFormTrigger, saveFormTrigger  } from './formTrigger';
import { createOrUpdateGraphiQl, fetchGraphiQlById,  fetchGraphiQlList } from './graphiQl';
import { fetchOrganization, fetchOrganizationList } from './organization';
import { fetchQueryFields } from './querybuilder';
import { fetchRoleList } from './role';
import { createRolePermission, fetchRolePermission, fetchRolePermissionRules } from './rolepermission';
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
  yield takeLatest(FormSchemaConstants.FETCH_TEMPLATE_LIST, fetchTemplateList);
  yield takeLatest(FormFieldDataConstants.SAVE_FORM_FIELD_DATA_REQUEST, saveFormFieldData);
  yield takeLatest(FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_REQUEST, fetchFormFieldDataList);
  yield takeLatest(FormFieldDataConstants.FETCH_FORM_FIELD_DATA_REQUEST, fetchFormFieldData);
  yield takeLatest(FormTriggerConstants.SAVE_FORM_TRIGGER_REQUEST, saveFormTrigger);
  yield takeLatest(FormTriggerConstants.FETCH_FORM_TRIGGER_LIST_REQUEST, fetchFormTriggerList);
  yield takeLatest(FormTriggerConstants.FETCH_FORM_TRIGGER_REQUEST, fetchFormTrigger);
  yield takeLatest(FormTriggerConstants.FETCH_SOURCE_FORM_FIELDS_REQUEST, fetchSourceFormTrigger);
  yield takeLatest(FormTriggerConstants.FETCH_TARGET_FORM_FIELDS_REQUEST, fetchTargetFormTrigger);
  yield takeLatest(FormSchemaConstants.FETCH_FORM_SCHEMA_REQUEST, fetchFormSchema);
  yield takeLatest(FormSchemaConstants.CREATE_FORM_SCHEMA_REQUEST, createFormSchema);
  yield takeLatest(DynamicTableConstants.GET_TABLE_DATA, DynamicTableSaga.fetchTableData);
  yield takeLatest(DynamicTableConstants.GET_TABLE_META, DynamicTableSaga.fetchTableMeta);
  yield takeLatest(OrganizationConstants.FETCH_ORGANIZATION_LIST_REQUEST, fetchOrganizationList);
  yield takeLatest(OrganizationConstants.FETCH_ORGANIZATION_REQUEST, fetchOrganization);
  yield takeLatest(RoleConstants.FETCH_ROLE_LIST_REQUEST, fetchRoleList);
  yield takeLatest(RolePermissionConstants.FETCH_ROLE_PERMISSION_REQUEST, fetchRolePermission);
  yield takeLatest(RolePermissionConstants.CREATE_ROLE_PERMISSION_REQUEST, createRolePermission);
  yield takeLatest(ConfigConstants.FETCH_CONFIG_REQUEST, fetchConfig);
  yield takeLatest(AppFormConstants.SAVE_APP_FORM_REQUEST, saveAppForm);
  yield takeLatest(GlobalConstants.SET_USER_ROLE, fetchRolePermissionRules);
  yield takeLatest(QueryBuilderConstants.FETCH_QUERY_BUILDER_FIELDS_REQUEST, fetchQueryFields);
  yield takeLatest(GraphiQlContants.CREATE_UPDATE_QUERY_REQUEST, createOrUpdateGraphiQl);
  yield takeLatest(GraphiQlContants.FETCH_QUERY_REQUEST, fetchGraphiQlById);
  yield takeLatest(GraphiQlContants.FETCH_QUERY_LIST_REQUEST, fetchGraphiQlList);
  yield takeLatest(EmailTemplateConstants.CREATE_OR_UPDATE_EMAIL_TEMPLATE, createOrUpdateEmailTemplate);
  yield takeLatest(EmailTemplateConstants.GET_EMAIL_TEMPLATE, getEmailTemplate);
  yield takeLatest(EmailTemplateConstants.GET_ALL_EMAIL_TEMPLATES, getAllEmailTemplates);
}
