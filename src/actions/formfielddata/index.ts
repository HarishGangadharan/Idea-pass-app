import FormFieldDataConstants from './constants';

export const createFormFieldDataRequest = (data: any, schemaId?: string) => ({
  payload: data,
  type: FormFieldDataConstants.CREATE_FORM_FIELD_DATA_REQUEST
});

export const createFormFieldDataSuccess = (data: any) => ({
  payload: data,
  type: FormFieldDataConstants.CREATE_FORM_FIELD_DATA_SUCCESS
});

export const createFormFieldDataFailure = (error: any) => ({
  error,
  type: FormFieldDataConstants.CREATE_FORM_FIELD_DATA_FAILURE
});

export const fetchFormFieldDataRequest = (schemaId?: string) => ({
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_REQUEST
});

export const fetchFormFieldDataSuccess = (data: any) => ({
  payload: data,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_SUCCESS
});

export const fetchFormFieldDataFailure = (error: any) => ({
  error,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_FAILURE
});

export const fetchFormFieldDataListSuccess = (data: any) => ({
  payload: data,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_SUCCESS
});

export const fetchFormFieldDataListFailure = (error: any) => ({
  error,
  type: FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_FAILURE
});
