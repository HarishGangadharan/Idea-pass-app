import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import {
  createOrUpdateEmailTemplateFail,
  createOrUpdateEmailTemplateSuccess,
  getAllEmailTemplatesFail,
  getAllEmailTemplatesSuccess,
  getEmailTemplateFail,
  getEmailTemplateSuccess
} from '../actions/emailTemplate';
import ErrorConstants from '../constants/errorConstants';
import EmailTemplateService from '../services/emailTemplate';


export function* createOrUpdateEmailTemplate(action: any) {
  const { data } = action;
  const message = `${data._id ? 'Updated' : 'Created'} successfully`;
  try {
    const response = yield call(EmailTemplateService.createOrUpdateEmailTemplate, data);
    yield put(createOrUpdateEmailTemplateSuccess(response.data));
    toast.success(message);
    yield put(push('/emailTemplateList'));
  } catch (error) {
    yield put(createOrUpdateEmailTemplateFail(error));
    toast.error(ErrorConstants.REQUEST_FAIL.message);
  }
}

export function* getEmailTemplate(action: any) {
  const { id, callback } = action;
  try {
    const response = yield call(EmailTemplateService.getEmailTemplate, id);
    yield put(getEmailTemplateSuccess(response.data));
    if (callback) {
      callback(response.data);
    }
  } catch (error) {
    yield put(getEmailTemplateFail(error));
    toast.error(ErrorConstants.REQUEST_FAIL.message);
  }
}

export function* getAllEmailTemplates(action: any) {
  try {
    const { data } = action;
    const response = yield call(EmailTemplateService.getAllEmailTemplates, data);
    yield put(getAllEmailTemplatesSuccess(response.data));
  } catch (error) {
    yield put(getAllEmailTemplatesFail(error));
    toast.error(ErrorConstants.REQUEST_FAIL.message);
  }
}
