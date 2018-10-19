import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import {
  createOrganizationFailure,
  createOrganizationSuccess,
  fetchOrganizationFailure,
  fetchOrganizationListFailure,
  fetchOrganizationListSuccess,
  fetchOrganizationSuccess
} from '../actions/organization';
import OrganizationService from '../services/organization';

function* createOrganization(action: any) {
  try {
    const response = yield call(OrganizationService.createOrganization, action.payload, action.organizationId);
    yield put(createOrganizationSuccess(response));
    yield put(push('/'));
  } catch (error) {
    yield put(push('/'));
    yield put(createOrganizationFailure(error));
  }
}

function* fetchOrganization(action: any) {
  try {
    const { organizationId, callback } = action;
    const organizations = yield call(OrganizationService.fetchOrganization, organizationId);
    if (callback) {
      callback(organizations.data);
    }
    yield put(fetchOrganizationSuccess(organizations.data));
  } catch (error) {
    yield put(fetchOrganizationFailure(error));
  }
}

function* fetchOrganizationList(action: any) {
  try {
    const { limit, currentPage } = action;
    const organizations = yield call(OrganizationService.getAllOrganization, limit, currentPage);
    yield put(fetchOrganizationListSuccess(organizations.data));
  } catch (error) {
    yield put(fetchOrganizationListFailure(error));
  }
}

export {
  createOrganization,
  fetchOrganization,
  fetchOrganizationList
};
