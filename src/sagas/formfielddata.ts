import { call, put } from 'redux-saga/effects';
import {
  createFormFieldDataFailure,
  createFormFieldDataSuccess,
  fetchFormFieldDataFailure,
  fetchFormFieldDataSuccess
} from '../actions/formfielddata';
import FormFieldDataService from '../services/formfielddata';

function* createFormFieldData(data: any, schemaId?: string) {
  try {
    const response = yield call(FormFieldDataService.createFormFieldData, data.payload, schemaId);
    yield put(createFormFieldDataSuccess(response));
  } catch (error) {
    yield put(createFormFieldDataFailure(error));
  }
}

function* fetchFormFieldData(action: any, schemaId?: string) {
  try {
    const data = yield call(FormFieldDataService.fetchFormFieldData, schemaId);
    yield put(fetchFormFieldDataSuccess(data));
  } catch (error) {
    yield put(fetchFormFieldDataFailure(error));
  }
}

export {
  createFormFieldData,
  fetchFormFieldData
};
