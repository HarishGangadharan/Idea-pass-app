import { combineReducers } from 'redux';
import { IActionProps } from '.';
import FormTriggerConstants from '../actions/formTrigger/constants';

interface ITriggerAction {
  fieldMapping?: any;
  form?: string;
  isBefore?: boolean;
  matchingQualification?: any;
  sequence?: number | string;
  type: string;
  valid?: boolean;
}

interface ITrigger {
  _id?: string;
  actions: ITriggerAction[];
  description: string;
  form: string;
  isActive: boolean;
  isAsynchronous: boolean;
  isOnCreate: boolean;
  isOnUpdate: boolean;
  name: string;
  qualifications: any;
  sequence: string | number;
}

interface IFormTrigger {
  data: ITrigger;
  isLoading: boolean;
}

interface IFormTriggers {
  data: IFormTrigger[];
  isLoading: boolean;
  total: number;
  limit: number;
}

interface IFormTriggerReducer {
  trigger: IFormTrigger;
  list: IFormTriggers;
}

const currentFormInitialState = {
  data: {
    actions: [],
    description: '',
    form: '',
    isActive: false,
    isAsynchronous: false,
    isOnCreate: false,
    isOnUpdate: false,
    name: '',
    qualifications: {
      id: '',
      rules: []
    },
    sequence: 1
  },
  isLoading: false
};

const listInitialState = {
  data: [],
  isLoading: false,
  limit: 10,
  total: 0
};

const formTriggerReducer = (state: IFormTrigger = currentFormInitialState, action: IActionProps) => {
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
        data: {...action.data},
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
        isLoading: false
      };
    case FormTriggerConstants.SAVE_FORM_TRIGGER_FAILURE:
      return {
        ...state,
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

const formTriggerReducers = combineReducers({
  list: formTriggerListReducer,
  trigger: formTriggerReducer
});

export { formTriggerReducers, IFormTriggerReducer, IFormTrigger, IFormTriggers, ITrigger, ITriggerAction };
