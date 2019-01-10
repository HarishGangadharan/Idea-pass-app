import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import {
  addFormSchema,
  createFormSchemaFailure,
  createFormSchemaSuccess,
  fetchFormSchemaFailure,
  fetchFormSchemaListFailure,
  fetchFormSchemaListSuccess,
  fetchFormSchemaSuccess,
  fetchTemplateListFailure,
  fetchTemplateListSuccess
} from '../actions/formschema';
import { IActionProps } from '../reducers';
import FormSchemaService from '../services/formschema';

function* createFormSchema(action: any) {
  try {
    const { payload, schemaId} = action;
    const response = yield call(FormSchemaService.createFormSchema, payload, schemaId);
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
    if (callback) {
      callback(formSchemas.data);
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

function* fetchTemplateList(action: IActionProps) {
  try {
    const { callback } = action;
    const response = yield call(FormSchemaService.fetchTemplateList);
    if (callback) {
      callback(response.data.data);
    }
    yield put(fetchTemplateListSuccess(response.data));
  } catch (error) {
    yield put(fetchTemplateListFailure(error));
  }
}

export {
  createFormSchema,
  fetchFormSchema,
  fetchFormList,
  fetchTemplateList
};
