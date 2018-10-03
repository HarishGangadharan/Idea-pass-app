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
}

interface IFormSchemas {
  data: IFormSchema[];
  total: number;
  limit: number;
}

interface IFormSchemaReducer {
  currentFormSchema: IFormSchema;
  formSchemas: IFormSchemas;
  isLoading: boolean;
}

const initialState = {
  currentFormSchema: {
    formData: {
      display: 'form'
    },
    name: '',
    nameSingular: '',
    type: 'data'
  },
  formSchemas: {
    data: [],
    limit: 10,
    total: 0
  },
  isLoading: false
};

const formSchemaReducer = (state: IFormSchemaReducer = initialState, action: IActionProps) => {
  switch (action.type) {
    case FormSchemaConstants.CREATE_FORM_SCHEMA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormSchemaConstants.CREATE_FORM_SCHEMA_SUCCESS:
      return {
        ...state,
        currentFormSchema: Object.assign({}, initialState.currentFormSchema),
        isLoading: false
      };
    case FormSchemaConstants.CREATE_FORM_SCHEMA_FAILURE:
      return {
        ...state,
        currentFormSchema: Object.assign({}, initialState.currentFormSchema),
        isLoading: false
      };
    case FormSchemaConstants.FETCH_FORM_SCHEMA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormSchemaConstants.FETCH_FORM_SCHEMA_SUCCESS:
      return {
        ...state,
        currentFormSchema: action.payload,
        isLoading: false
      };
    case FormSchemaConstants.FETCH_FORM_SCHEMA_LIST_SUCCESS:
      return {
        ...state,
        formSchemas: action.payload,
        isLoading: false
      };
    case FormSchemaConstants.FETCH_FORM_SCHEMA_FAILURE:
      return {
        ...state,
        currentFormSchema: Object.assign({}, initialState.currentFormSchema),
        isLoading: false
      };
    default:
      return state;
  }
};

export { formSchemaReducer, IFormSchemaReducer, IFormSchema, IFormSchemas };
