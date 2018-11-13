import FormTriggerConstants from './constants';

export const fetchFormTriggerRequest = (formName: string, formTriggerId?: string) => ({
  formName,
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

export const fetchFormTriggerListRequest = (formName: string, limit: number, currentPage: number) => ({
  currentPage,
  formName,
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

export const saveFormTriggerRequest = (data: any, formName: string, formTriggerId?: string) => ({
  data,
  formName,
  formTriggerId,
  type: FormTriggerConstants.SAVE_FORM_TRIGGER_REQUEST
});

export const saveFormTriggerSuccess = () => ({
  type: FormTriggerConstants.SAVE_FORM_TRIGGER_SUCCESS
});

export const saveFormTriggerFailure = (error: any) => ({
  error,
  type: FormTriggerConstants.SAVE_FORM_TRIGGER_FAILURE
});
