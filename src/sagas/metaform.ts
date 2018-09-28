import { call, put } from 'redux-saga/effects';
import { fetchAllMetaformsError, fetchAllMetaformsSuccess } from '../actions/metaforms';
import { IActionProps } from '../reducers';
import MetaformService from '../services/metaforms';

function* onFetchMetaForms(action: IActionProps) {
  try {
    const { limit, currentPage } = action;
    const response = yield call(MetaformService.getAllMetaForms, limit, currentPage);
    yield put(fetchAllMetaformsSuccess(response.data));
  } catch (error) {
    yield put(fetchAllMetaformsError(error));
  }
}

export { onFetchMetaForms };
