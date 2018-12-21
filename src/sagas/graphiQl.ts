import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import {
  createOrUpdateGraphiQlFail,
  createOrUpdateGraphiQlSuccess,
  fetchGraphiQlFail,
  fetchGraphiQlListFail,
  fetchGraphiQlListSuccess,
  fetchGraphiQlSuccess
}
  from '../actions/graphiQl';
import ErrorConstants from '../constants/errorConstants';
import { fetchGraphiQlQueries, getGraphiQlById, saveOrUpdateGraphiQl } from '../services/graphiQl';

export function* createOrUpdateGraphiQl (action: any) {
  const { data } = action;
  const message = `${data._id ? 'Updated' : 'Created'} successfully`;
  try {
    const response = yield call(saveOrUpdateGraphiQl, data);
    yield put(createOrUpdateGraphiQlSuccess(response.data));
    yield put(push('/graphiQlList'));
    toast.success(message);
  } catch (error) {
    yield(put(createOrUpdateGraphiQlFail(error)));
    toast.error(ErrorConstants.REQUEST_FAIL.message);
  }
}

export function* fetchGraphiQlById (action: any) {
  const { id } = action;
  try {
    const response = yield call(getGraphiQlById, id);
    yield put(fetchGraphiQlSuccess(response.data));
  } catch (error) {
    yield(put(fetchGraphiQlFail(error)));
    toast.error(ErrorConstants.REQUEST_FAIL.message);
  }
}

export function* fetchGraphiQlList(action: any) {
  const { data } = action;
  try {
    const response = yield call(fetchGraphiQlQueries, data);
    yield put(fetchGraphiQlListSuccess(response.data));
  } catch (error) {
    yield(put(fetchGraphiQlListFail(error)));
    toast.error(ErrorConstants.REQUEST_FAIL.message);
  }
}
