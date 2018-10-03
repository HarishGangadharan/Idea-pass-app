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
  } catch (error) {
    yield put(createFormSchemaFailure(error));
  }
}

function* fetchFormSchema(action: any) {
  try {
    const { schemaId, callback } = action;
    const formSchemas = yield call(FormSchemaService.fetchFormSchema, schemaId);
    if (callback) {
      const { _id, formData, name } = formSchemas.data;
      callback(_id, formData, name);
    }
    yield put(fetchFormSchemaSuccess(formSchemas.data));
  } catch (error) {
    yield put(fetchFormSchemaFailure(error));
  }
}

function* fetchFormList(action: any) {
  try {
    const { limit, currentPage } = action;
    const formSchemas = yield call(FormSchemaService.getAllFormSchema, limit, currentPage);
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
