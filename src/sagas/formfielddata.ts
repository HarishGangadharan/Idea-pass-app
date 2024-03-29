import { push } from 'connected-react-router';
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
    const { formName, formDataId } = action;
    const response = yield call(FormFieldDataService.fetchFormFieldData, formName, formDataId);
      yield put(fetchFormFieldDataSuccess(response.data));
  } catch (error) {
    yield put(fetchFormFieldDataFailure(error));
  }
}

function* fetchFormFieldDataList(action: any) {
  try {
    const { currentPage, formName, limit } = action;
    const response = yield call(FormFieldDataService.fetchFormFieldDataList, formName, limit, currentPage);
    yield put(fetchFormFieldDataListSuccess(response.data));
  } catch (error) {
    yield put(fetchFormFieldDataListFailure(error));
  }
}

function* saveFormFieldData(action: any) {
  try {
    const { data, formName, formDataId, formId } = action;
    const response = yield call(FormFieldDataService.saveFormFieldData, data, formName, formDataId);
    if (response) {
      yield put(saveFormFieldDataSuccess(data));
      yield put(push(`/formDataList/${formName}/${formId}`));
    }
  } catch (error) {
    yield put(saveFormFieldDataFailure(error));
  }
}

export {
  fetchFormFieldData,
  saveFormFieldData,
  fetchFormFieldDataList
};
