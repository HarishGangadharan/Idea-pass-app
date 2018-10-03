import { combineReducers } from 'redux';
import { IActionProps } from '.';
import FormSchemaConstants from '../actions/formschema/constants';

interface IFormSchema {
  formData: {
    display: string;
    [key: string]: any;
  };
  name: string;
  nameSingular: string;
  type: string;
  _id?: string;
  [key: string]: any;
}

interface IFormSchemas {
  data: IFormSchema[];
  total: number;
  loading: boolean;
}

interface IFormSchemaReducer {
  currentFormSchema: IFormSchema,
  list: IFormSchemas;
}

const listInitialState: IFormSchemas = {
  data: [],
  loading: false,
  total: 0
};

const currentFormInitialState: IFormSchema = {
  formData: {
    display: 'form'
  },
  loading: false,
  name: '',
  nameSingular: '',
  type: 'data'
};

const formSchemaReducer = (state: IFormSchema = currentFormInitialState, action: IActionProps): IFormSchema => {
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
    default:
      return state;
  }
};

const formSchemaListReducer = (state: IFormSchemas = listInitialState, action: IActionProps): IFormSchemas => {
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
    default:
      return state;
  }
};

const formSchemaReducers = combineReducers({
  currentFormSchema: formSchemaReducer,
  list: formSchemaListReducer
});

export { formSchemaReducers, IFormSchemaReducer, IFormSchema, IFormSchemas };
