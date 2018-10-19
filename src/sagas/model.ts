import { call, put } from 'redux-saga/effects';
import {
  fetchModelFailure,
  fetchModelListFailure,
  fetchModelListSuccess,
  fetchModelSuccess
} from '../actions/model';
import ModelService from '../services/model';

function* fetchModel(action: any) {
  try {
    const { modelId, callback } = action;
    const models = yield call(ModelService.fetchModel, modelId);
    if (callback) {
      callback(models.data);
    }
    yield put(fetchModelSuccess(models.data));
  } catch (error) {
    yield put(fetchModelFailure(error));
  }
}

function* fetchModelList(action: any) {
  try {
    const { tenantId } = action;
    const models = yield call(ModelService.getAllModel, tenantId);
    if (models.data.length) {
      yield put(fetchModelListSuccess(models.data));
    } else {
      yield put(fetchModelListSuccess([]));
    }
  } catch (error) {
    yield put(fetchModelListFailure(error));
  }
}

export {
  fetchModel,
  fetchModelList
};
