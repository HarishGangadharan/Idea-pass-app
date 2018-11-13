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
    const { formName, formTriggerId } = action;
    const response = yield call(FormTriggerService.fetchFormTrigger, formName, formTriggerId);
    yield put(fetchFormTriggerSuccess(response.data));
  } catch (error) {
    yield put(fetchFormTriggerFailure(error));
  }
}

function* fetchFormTriggerList(action: any) {
  try {
    const { currentPage, formName, limit } = action;
    const response = yield call(FormTriggerService.fetchFormTriggerList, formName, limit, currentPage);
    yield put(fetchFormTriggerListSuccess(response.data));
  } catch (error) {
    yield put(fetchFormTriggerListFailure(error));
  }
}

function* saveFormTrigger(action: any) {
  try {
    const { data, formName, formTriggerId } = action;
    yield call(FormTriggerService.saveFormTrigger, data, formName, formTriggerId);
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
