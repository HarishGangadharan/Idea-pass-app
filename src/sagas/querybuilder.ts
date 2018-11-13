import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import {
  fetchQueryFieldsFailure,
  fetchQueryFieldsSuccess
} from '../actions/querybuilder';
import QueryBuilderService from '../services/querybuilder';

function* fetchQueryFields(action: any) {
  try {
    const response = yield call(QueryBuilderService.getQueryFields, action.tenant);
    yield put(fetchQueryFieldsSuccess(response));
    yield put(push('/'));
  } catch (error) {
    yield put(push('/'));
    yield put(fetchQueryFieldsFailure(error));
  }
}

export {
  fetchQueryFields
};
