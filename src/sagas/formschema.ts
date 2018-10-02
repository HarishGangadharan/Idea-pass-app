import { call, put } from 'redux-saga/effects';
import {
  createFormSchemaFailure,
  createFormSchemaSuccess,
  fetchFormSchemaFailure,
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
    const formSchemas = yield call(FormSchemaService.fetchFormSchema, action.schemaId);
    if (action.schemaId) {
      yield put(fetchFormSchemaSuccess(formSchemas.data));
    } else {
      yield put(fetchFormSchemaListSuccess(formSchemas.data));
    }
  } catch (error) {
    yield put(fetchFormSchemaFailure(error));
  }
}

export {
  createFormSchema,
  fetchFormSchema
};
