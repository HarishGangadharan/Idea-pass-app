import { ITrigger } from '../../reducers/formTrigger';
import FormTriggerConstants from './constants';

export const fetchFormTriggerRequest = (formTriggerId: string, callBack?: (trigger: ITrigger) => void) => ({
  callBack,
  formTriggerId,
  type: FormTriggerConstants.FETCH_FORM_TRIGGER_REQUEST
});

export const fetchFormTriggerSuccess = (data: any) => ({
  data,
  type: FormTriggerConstants.FETCH_FORM_TRIGGER_SUCCESS
});

export const fetchFormTriggerFailure = (error: any) => ({
  error,
  type: FormTriggerConstants.FETCH_FORM_TRIGGER_FAILURE
});

export const fetchSourceFormFieldsRequest = (formName: string) => ({
  formName,
  type: FormTriggerConstants.FETCH_SOURCE_FORM_FIELDS_REQUEST
});

export const fetchSourceFormFieldsSuccess = (data: any) => ({
  data,
  type: FormTriggerConstants.FETCH_SOURCE_FORM_FIELDS_SUCCESS
});

export const fetchSourceFormFieldsFailure = (error: any) => ({
  error,
  type: FormTriggerConstants.FETCH_SOURCE_FORM_FIELDS_FAILURE
});

export const fetchTargetFormFieldsRequest = (formName: string) => ({
  formName,
  type: FormTriggerConstants.FETCH_TARGET_FORM_FIELDS_REQUEST
});

export const fetchTargetFormFieldsSuccess = (data: any) => ({
  data,
  type: FormTriggerConstants.FETCH_TARGET_FORM_FIELDS_SUCCESS
});

export const fetchTargetFormFieldsFailure = (error: any) => ({
  error,
  type: FormTriggerConstants.FETCH_TARGET_FORM_FIELDS_FAILURE
});

export const fetchFormTriggerListRequest = (formId: string, limit: number, currentPage: number) => ({
  currentPage,
  formId,
  limit,
  type: FormTriggerConstants.FETCH_FORM_TRIGGER_LIST_REQUEST
});

export const fetchFormTriggerListSuccess = (data: any) => ({
  data,
  type: FormTriggerConstants.FETCH_FORM_TRIGGER_LIST_SUCCESS
});

export const fetchFormTriggerListFailure = (error: any) => ({
  error,
  type: FormTriggerConstants.FETCH_FORM_TRIGGER_LIST_FAILURE
});

export const saveFormTriggerRequest = (data: ITrigger, formTriggerId?: string) => ({
  data,
  formTriggerId,
  type: FormTriggerConstants.SAVE_FORM_TRIGGER_REQUEST
});

export const saveFormTriggerSuccess = (data?: any) => ({
  data,
  type: FormTriggerConstants.SAVE_FORM_TRIGGER_SUCCESS
});

export const saveFormTriggerFailure = (error: any) => ({
  error,
  type: FormTriggerConstants.SAVE_FORM_TRIGGER_FAILURE
});

export const updateFormTriggerState = (data?: ITrigger) => ({
  data,
  type: FormTriggerConstants.UPDATE_FORM_TRIGGER_STATE
});
