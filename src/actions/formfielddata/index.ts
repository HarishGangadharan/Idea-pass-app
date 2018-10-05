import FormFieldDataConstants from './constants';

export const fetchFormFieldDataRequest = (formName: string, formDataId?: string) => ({
  formDataId,
  formName,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_REQUEST
});

export const fetchFormFieldDataSuccess = (data: any) => ({
  data,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_SUCCESS
});

export const fetchFormFieldDataFailure = (error: any) => ({
  error,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_FAILURE
});

export const fetchFormFieldDataListRequest = (formName: string) => ({
  formName,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_REQUEST
});

export const fetchFormFieldDataListSuccess = (data: any) => ({
  data,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_SUCCESS
});

export const fetchFormFieldDataListFailure = (error: any) => ({
  error,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_FAILURE
});

export const saveFormFieldDataRequest = (data: any, formName: string) => ({
  data,
  formName,
  type: FormFieldDataConstants.SAVE_FORM_FIELD_DATA_REQUEST
});

export const saveFormFieldDataSuccess = () => ({
  type: FormFieldDataConstants.SAVE_FORM_FIELD_DATA_SUCCESS
});

export const saveFormFieldDataFailure = (error: any) => ({
  error,
  type: FormFieldDataConstants.SAVE_FORM_FIELD_DATA_FAILURE
});
