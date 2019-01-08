import { combineReducers } from 'redux';
import { IActionProps } from '.';
import FormSchemaConstants from '../actions/formschema/constants';

export interface IFormSchema {
  form_data: {
    display: string;
    [key: string]: any;
  };
  name: string;
  name_singular: string;
  form_type: string;
  template_type: string;
  _id: string;
  [key: string]: any;
}

export interface IFormSchemas {
  data: IFormSchema[];
  total: number;
  loading: boolean;
}

export interface ITemplateFormSchema {
  data: IFormSchema[];
  loading: boolean;
}

export interface IFormSchemaReducer {
  currentFormSchema: IFormSchema;
  list: IFormSchemas;
}

const listInitialState: IFormSchemas = {
  data: [],
  loading: false,
  total: 0
};

const currentFormInitialState: IFormSchema = {
  _id: '',
  form_data: {
    display: 'form'
  },
  form_type: 'data',
  loading: false,
  name: '',
  name_singular: '',
  template_type: 'default'
};

const templateList: ITemplateFormSchema = {
  data: [],
  loading: false
};

const formSchemaReducer = (
  state: IFormSchema = currentFormInitialState,
  action: IActionProps
): IFormSchema => {
  switch (action.type) {
    case FormSchemaConstants.CREATE_FORM_SCHEMA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FormSchemaConstants.CREATE_FORM_SCHEMA_SUCCESS:
      return currentFormInitialState;
    case FormSchemaConstants.CREATE_FORM_SCHEMA_FAILURE:
      return currentFormInitialState;
    case FormSchemaConstants.FETCH_FORM_SCHEMA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FormSchemaConstants.FETCH_FORM_SCHEMA_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case FormSchemaConstants.FETCH_FORM_SCHEMA_FAILURE:
      return currentFormInitialState;
    case FormSchemaConstants.UPDATE_FORM_SCHEMA_STATE:
      return {
        ...state,
        ...action.data ? action.data : currentFormInitialState,
        isLoading: false
      };
    default:
      return state;
  }
};

const formSchemaListReducer = (
  state: IFormSchemas = listInitialState,
  action: IActionProps
): IFormSchemas => {
  switch (action.type) {
    case FormSchemaConstants.FETCH_FORM_SCHEMA_LIST:
      return {
        ...state,
        loading: true
      };
    case FormSchemaConstants.FETCH_FORM_SCHEMA_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        total: action.payload.total
      };
    case FormSchemaConstants.FETCH_FORM_SCHEMA_LIST_FAILURE:
      return {
        ...state,
        loading: false
      };
    case FormSchemaConstants.ADD_FORM_SCHEMA:
      return {
        ...state,
        data:
          state.data.length < 10 ? [...state.data, action.payload] : state.data,
        total: state.total + 1
      };
    default:
      return state;
  }
};

const templateListReducer = (
  state: ITemplateFormSchema = templateList,
  action: IActionProps
): ITemplateFormSchema => {
  switch (action.type) {
    case FormSchemaConstants.FETCH_TEMPLATE_LIST:
      return {
        ...state,
        loading: true
      };
    case FormSchemaConstants.FETCH_TEMPLATE_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };
    case FormSchemaConstants.FETCH_TEMPLATE_LIST_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export const formSchemaReducers = combineReducers({
  currentFormSchema: formSchemaReducer,
  list: formSchemaListReducer,
  templateList: templateListReducer
});
