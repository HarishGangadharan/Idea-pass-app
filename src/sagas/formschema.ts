import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import {
  addFormSchema,
  createFormSchemaFailure,
  createFormSchemaSuccess,
  fetchFormSchemaFailure,
  fetchFormSchemaListFailure,
  fetchFormSchemaListSuccess,
  fetchFormSchemaSuccess
} from '../actions/formschema';
import FormSchemaService from '../services/formschema';

function* createFormSchema(action: any) {
  try {
    const response = yield call(FormSchemaService.createFormSchema, action.payload, action.schemaId);
    if (response) {
      yield put(createFormSchemaSuccess(response));
      yield put(addFormSchema(response));
    }
    yield put(push('/formschemalist'));
  } catch (error) {
    yield put(createFormSchemaFailure(error));
  }
}

function* fetchFormSchema(action: any) {
  try {
    const { schemaId, callback } = action;
    const formSchemas = yield call(FormSchemaService.fetchFormSchema, schemaId);
    const { name_singular } = formSchemas.data;
    if (callback) {
      callback(name_singular);
    }
    yield put(fetchFormSchemaSuccess(formSchemas.data));
  } catch (error) {
    yield put(fetchFormSchemaFailure(error));
  }
}

function* fetchFormList(action: any) {
  try {
    const { limit, currentPage, sortField, sortOrder } = action;
    const formSchemas = yield call(FormSchemaService.getAllFormSchema, limit, currentPage, sortField, sortOrder);
    yield put(fetchFormSchemaListSuccess(formSchemas.data));
  } catch (error) {
    yield put(fetchFormSchemaListFailure(error));
  }
}

export {
  createFormSchema,
  fetchFormSchema,
  fetchFormList
};
