import { call, put } from 'redux-saga/effects';
import {
  fetchConfigFailure,
  fetchConfigSuccess
} from '../actions/config';
import ConfigService from '../services/config';

function* fetchConfig(action: any) {
  try {
    const { tenantId, configList } = action;
    const response = yield call(ConfigService.fetchConfig, configList, tenantId);
    yield put(fetchConfigSuccess(response.data));
  } catch (error) {
    yield put(fetchConfigFailure(error));
  }
}

export {
  fetchConfig
};
