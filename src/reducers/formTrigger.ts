import { combineReducers } from 'redux';
import { IActionProps } from '.';
import FormTriggerConstants from '../actions/formTrigger/constants';
import { AppProperties } from '../constants/application.properties';

export interface ITriggerAction {
  field_mapping?: any;
  form?: string;
  isBefore?: boolean;
  matching_qualification?: any;
  sequence: string;
  type: string;
  valid?: boolean;
}

export interface ITrigger {
  _id?: string;
  actions: ITriggerAction[];
  description?: string;
  form: string;
  is_active?: boolean;
  is_async?: boolean;
  on_create?: boolean;
  on_update?: boolean;
  name: string;
  qualification: any;
  sequence: string;
}

export interface IFormTrigger {
  data: ITrigger;
  isLoading: boolean;
}

export interface IFormTriggers {
  data: IFormTrigger[];
  isLoading: boolean;
  total: number;
  limit: number;
}

export interface IFormFields {
  [key: string]: any;
}

export interface IFormTriggerReducer {
  trigger: IFormTrigger;
  list: IFormTriggers;
  sourceFormFields: IFormFields;
  targetFormFields: IFormFields;
}

const currentFormTriggerInitialState = {
  data: {
    actions: [],
    description: '',
    form: '',
    is_active: false,
    is_async: false,
    name: '',
    on_create: false,
    on_update: false,
    qualification: {},
    sequence: '1'
  },
  isLoading: false
};

const listInitialState = {
  data: [],
  isLoading: false,
  limit: AppProperties.TABLE_PROPS.LIMIT,
  total: 0
};

const sourceFieldInitialState = {
  data: [],
  isLoading: false
};

const targetFieldInitialState = {
  data: [],
  isLoading: false
};

const sourceFormFieldsReducer = (state: IFormFields = sourceFieldInitialState, action: IActionProps) => {
  switch (action.type) {
    case FormTriggerConstants.FETCH_SOURCE_FORM_FIELDS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormTriggerConstants.FETCH_SOURCE_FORM_FIELDS_SUCCESS:
      return {
        ...state,
        data: action.data.map((source: any) => ({ label: source, value: source })),
        isLoading: false
      };
    case FormTriggerConstants.FETCH_SOURCE_FORM_FIELDS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

const targetFormFieldsReducer = (state: IFormFields = targetFieldInitialState, action: IActionProps) => {
  switch (action.type) {
    case FormTriggerConstants.FETCH_TARGET_FORM_FIELDS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormTriggerConstants.FETCH_TARGET_FORM_FIELDS_SUCCESS:
      return {
        ...state,
        data: action.data.map((source: any) => ({ label: source, value: source })),
        isLoading: false
      };
    case FormTriggerConstants.FETCH_TARGET_FORM_FIELDS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

const formTriggerReducer = (state: IFormTrigger = currentFormTriggerInitialState, action: IActionProps) => {
  switch (action.type) {
    case FormTriggerConstants.CREATE_FORM_TRIGGER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormTriggerConstants.CREATE_FORM_TRIGGER_SUCCESS:
      return {
        ...state,
        formSchema: action.payload,
        isLoading: false
      };
    case FormTriggerConstants.CREATE_FORM_TRIGGER_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case FormTriggerConstants.FETCH_FORM_TRIGGER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormTriggerConstants.FETCH_FORM_TRIGGER_SUCCESS:
      return {
        ...state,
        data: { ...action.data },
        isLoading: false
      };
    case FormTriggerConstants.FETCH_FORM_TRIGGER_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case FormTriggerConstants.SAVE_FORM_TRIGGER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormTriggerConstants.SAVE_FORM_TRIGGER_SUCCESS:
      return {
        ...state,
        ...currentFormTriggerInitialState
      };
    case FormTriggerConstants.SAVE_FORM_TRIGGER_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case FormTriggerConstants.UPDATE_FORM_TRIGGER_STATE:
      return {
        ...state,
        data: action.data ? { ...action.data } : currentFormTriggerInitialState.data ,
        isLoading: false
      };
    default:
      return state;
  }
};

const formTriggerListReducer = (state: IFormTriggers = listInitialState, action: IActionProps) => {
  switch (action.type) {
    case FormTriggerConstants.FETCH_FORM_TRIGGER_LIST_REQUEST:
      return {
        ...state,
        isLoading: false
      };
    case FormTriggerConstants.FETCH_FORM_TRIGGER_LIST_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case FormTriggerConstants.FETCH_FORM_TRIGGER_LIST_SUCCESS:
      return {
        ...state,
        data: action.data.data,
        isLoading: false,
        total: action.data.total
      };
    default:
      return state;
  }
};

export const formTriggerReducers = combineReducers({
  list: formTriggerListReducer,
  sourceFormFields: sourceFormFieldsReducer,
  targetFormFields: targetFormFieldsReducer,
  trigger: formTriggerReducer
});
