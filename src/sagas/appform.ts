import { call, put } from 'redux-saga/effects';
import {
  fetchAppFormFailure,
  fetchAppFormSuccess,
  saveAppFormFailure,
  saveAppFormSuccess
} from '../actions/appform';
import AppFormService from '../services/appform';

function* saveAppForm(action: any) {
  try {
    const { api, data } = action;
    const response = yield call(AppFormService.saveAppForm, api, data);
    yield put(saveAppFormSuccess(response.data));
  } catch (error) {
    yield put(saveAppFormFailure(error));
  }
}

function* fetchAppForm(action: any) {
  try {
    const { api } = action;
    const response = yield call(AppFormService.fetchAppForm, api);
    yield put(fetchAppFormSuccess(response.data));
  } catch (error) {
    yield put(fetchAppFormFailure(error));
  }
}

export {
  saveAppForm,
  fetchAppForm
};
