import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import {
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
    yield put(createFormSchemaSuccess(response));
    yield put(push('/formschemalist'));
  } catch (error) {
    yield put(push('/formschemalist'));
    yield put(createFormSchemaFailure(error));
  }
}

function* fetchFormSchema(action: any) {
  try {
    const { schemaId } = action;
    const formSchemas = yield call(FormSchemaService.fetchFormSchema, schemaId);
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
