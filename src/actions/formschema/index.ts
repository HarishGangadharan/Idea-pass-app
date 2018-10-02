import FormSchemaConstants from './constants';

export const createFormSchemaRequest = (data: any, schemaId?: string) => ({
  payload: data,
  schemaId,
  type: FormSchemaConstants.CREATE_FORM_SCHEMA_REQUEST
});

export const createFormSchemaSuccess = (data: any) => ({
  payload: data,
  type: FormSchemaConstants.CREATE_FORM_SCHEMA_SUCCESS
});

export const createFormSchemaFailure = (error: any) => ({
  error,
  type: FormSchemaConstants.CREATE_FORM_SCHEMA_FAILURE
});

export const fetchFormSchemaRequest = (schemaId?: string) => ({
  schemaId,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_REQUEST
});

export const fetchFormSchemaSuccess = (data: any) => ({
  payload: data,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_SUCCESS
});

export const fetchFormSchemaFailure = (error: any) => ({
  error,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_FAILURE
});

export const fetchFormSchemaListSuccess = (data: any) => ({
  payload: data,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_LIST_SUCCESS
});

export const fetchFormSchemaListFailure = (error: any) => ({
  error,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_LIST_FAILURE
});
