import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import {
  fetchFormTriggerFailure,
  fetchFormTriggerListFailure,
  fetchFormTriggerListSuccess,
  fetchFormTriggerSuccess,
  fetchSourceFormFieldsFailure,
  fetchSourceFormFieldsSuccess,
  fetchTargetFormFieldsFailure,
  fetchTargetFormFieldsSuccess,
  saveFormTriggerFailure,
  saveFormTriggerSuccess
} from '../actions/formTrigger';
import FormTriggerService from '../services/formTrigger';

function* fetchFormTrigger(action: any) {
  try {
    const { formTriggerId, callBack } = action;
    const response = yield call(FormTriggerService.fetchFormTrigger, formTriggerId);
    if (callBack) {
      callBack(response.data);
    }
    yield put(fetchFormTriggerSuccess(response.data));
  } catch (error) {
    yield put(fetchFormTriggerFailure(error));
  }
}

function* fetchSourceFormTrigger(action: any) {
  try {
    const { formName } = action;
    const response = yield call(FormTriggerService.fetchFormFieldsTrigger, formName);
    yield put(fetchSourceFormFieldsSuccess(response.data));
  } catch (error) {
    yield put(fetchSourceFormFieldsFailure(error));
  }
}

function* fetchTargetFormTrigger(action: any) {
  try {
    const { formName } = action;
    const response = yield call(FormTriggerService.fetchFormFieldsTrigger, formName);
    yield put(fetchTargetFormFieldsSuccess(response.data));
  } catch (error) {
    yield put(fetchTargetFormFieldsFailure(error));
  }
}

function* fetchFormTriggerList(action: any) {
  try {
    const { currentPage, formId, limit } = action;
    const response = yield call(FormTriggerService.fetchFormTriggerList, formId, limit, currentPage);
    yield put(fetchFormTriggerListSuccess(response.data));
  } catch (error) {
    yield put(fetchFormTriggerListFailure(error));
  }
}

function* saveFormTrigger(action: any) {
  try {
    const { data, formTriggerId } = action;
    yield call(FormTriggerService.saveFormTrigger, data, formTriggerId);
    yield put(saveFormTriggerSuccess());
    yield put(push(`/formTriggerList/${data.form}`));
  } catch (error) {
    yield put(saveFormTriggerFailure(error));
  }
}

export {
  fetchFormTrigger,
  saveFormTrigger,
  fetchFormTriggerList,
  fetchSourceFormTrigger,
  fetchTargetFormTrigger
};
