import { IFormSchema, IFormSchemas } from '../../reducers/formschema';
import FormSchemaConstants from './constants';

export const addFormSchema = (data: any) => ({
  payload: data,
  type: FormSchemaConstants.ADD_FORM_SCHEMA
});

export const createFormSchemaRequest = (data: IFormSchema, schemaId?: string) => ({
  payload: data,
  schemaId,
  type: FormSchemaConstants.CREATE_FORM_SCHEMA_REQUEST
});

export const createFormSchemaSuccess = (data: IFormSchema) => ({
  payload: data,
  type: FormSchemaConstants.CREATE_FORM_SCHEMA_SUCCESS
});

export const createFormSchemaFailure = (error: Object) => ({
  error,
  type: FormSchemaConstants.CREATE_FORM_SCHEMA_FAILURE
});

export const clearFormSchemeData = () => ({
  type: FormSchemaConstants.CLEAR_FORM_SCHEMA_DATA
});

export const fetchFormSchemaRequest = (schemaId: string, callback?: (form: IFormSchema) => void) => ({
  callback,
  schemaId,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_REQUEST
});

export const fetchFormSchemaSuccess = (data: IFormSchema) => ({
  payload: data,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_SUCCESS
});

export const fetchFormSchemaFailure = (error: Object) => ({
  error,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_FAILURE
});

export const fetchFormSchemaList = (limit?: number, currentPage?: number, sortField?: string, sortOrder?: number) => ({
  currentPage,
  limit,
  sortField,
  sortOrder,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_LIST
});

export const fetchFormSchemaListSuccess = (data: IFormSchemas) => ({
  payload: data,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_LIST_SUCCESS
});

export const fetchFormSchemaListFailure = (error: Object) => ({
  error,
  type: FormSchemaConstants.FETCH_FORM_SCHEMA_LIST_FAILURE
});

export const fetchTemplateList = (callback?: (templates: IFormSchema[]) => void) => ({
  callback,
  type: FormSchemaConstants.FETCH_TEMPLATE_LIST
});

export const fetchTemplateListSuccess = (data: any) => ({
  payload: data,
  type: FormSchemaConstants.FETCH_TEMPLATE_LIST_SUCCESS
});

export const fetchTemplateListFailure = (error: any) => ({
  error,
  type: FormSchemaConstants.FETCH_TEMPLATE_LIST_FAILURE
});

export const updateFormSchemaState = (data?: IFormSchema) => ({
  data,
  type: FormSchemaConstants.UPDATE_FORM_SCHEMA_STATE
});
