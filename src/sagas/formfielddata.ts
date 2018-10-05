import { call, put } from 'redux-saga/effects';
import {
  fetchFormFieldDataFailure,
  fetchFormFieldDataListFailure,
  fetchFormFieldDataListSuccess,
  fetchFormFieldDataSuccess,
  saveFormFieldDataFailure,
  saveFormFieldDataSuccess
} from '../actions/formfielddata';
import FormFieldDataService from '../services/formfielddata';

function* fetchFormFieldData(action: any) {
  try {
    const { schemaId } = action;
    const data = yield call(FormFieldDataService.fetchFormFieldData, schemaId);
    yield put(fetchFormFieldDataSuccess(data));
  } catch (error) {
    yield put(fetchFormFieldDataFailure(error));
  }
}

function* fetchFormFieldDataList() {
  try {
    const data = yield call(FormFieldDataService.fetchFormFieldData);
    yield put(fetchFormFieldDataListSuccess(data));
  } catch (error) {
    yield put(fetchFormFieldDataListFailure(error));
  }
}

function* saveFormFieldData(action: any) {
  try {
    const { data, formName, formDataId } = action;
    yield call(FormFieldDataService.saveFormFieldData, data, formName, formDataId);
    yield put(saveFormFieldDataSuccess());
  } catch (error) {
    yield put(saveFormFieldDataFailure(error));
  }
}

export {
  fetchFormFieldData,
  saveFormFieldData,
  fetchFormFieldDataList
};
