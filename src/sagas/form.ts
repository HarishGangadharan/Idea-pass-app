import { put } from 'redux-saga/effects';
import { formSuccess } from '../actions/form';

// worker Saga: will be fired on INCREMENT actions
function* updateForm(data: any) {
  try {
    yield put(formSuccess(data.payload));
  } catch (e) {
    throw(e);
  }
}

export {
  updateForm
};
