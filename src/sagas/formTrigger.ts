import { call, put } from 'redux-saga/effects';
import {
  fetchFormTriggerFailure,
  fetchFormTriggerListFailure,
  fetchFormTriggerListSuccess,
  fetchFormTriggerSuccess,
  saveFormTriggerFailure,
  saveFormTriggerSuccess
} from '../actions/formTrigger';
import FormTriggerService from '../services/formTrigger';

function* fetchFormTrigger(action: any) {
  try {
    const { formTriggerId } = action;
    const response = yield call(FormTriggerService.fetchFormTrigger, formTriggerId);
    yield put(fetchFormTriggerSuccess(response.data));
  } catch (error) {
    yield put(fetchFormTriggerFailure(error));
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
  } catch (error) {
    yield put(saveFormTriggerFailure(error));
  }
}

export {
  fetchFormTrigger,
  saveFormTrigger,
  fetchFormTriggerList
};
