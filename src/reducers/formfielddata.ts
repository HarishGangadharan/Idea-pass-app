import { combineReducers, Reducer } from 'redux';
import { IActionProps } from '.';
import FormFieldDataConstants from '../actions/formfielddata/constants';
import { AppProperties } from '../constants/application.properties';
export interface IFormFieldData {
  data: any;
  isLoading: boolean;
}

export interface IFormFieldDatas {
  data: IFormFieldData[];
  isLoading: boolean;
  total: number;
  limit: number;
}

export interface IFormFieldDataReducer {
  submission: IFormFieldData,
  list: IFormFieldDatas;
}

const currentFormInitialState = {
  data: {},
  isLoading: false
};

const listInitialState = {
  data: [],
  isLoading: false,
  limit: AppProperties.TABLE_PROPS.LIMIT,
  total: 0
};

const formFieldDataReducer = (state: IFormFieldData = currentFormInitialState, action: IActionProps) => {
  switch (action.type) {
    case FormFieldDataConstants.CREATE_FORM_FIELD_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormFieldDataConstants.CREATE_FORM_FIELD_DATA_SUCCESS:
      return {
        ...state,
        formSchema: action.payload,
        isLoading: false
      };
    case FormFieldDataConstants.CREATE_FORM_FIELD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case FormFieldDataConstants.FETCH_FORM_FIELD_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormFieldDataConstants.FETCH_FORM_FIELD_DATA_SUCCESS:
      return {
        ...state,
        data: {...action.data},
        isLoading: false
      };
    case FormFieldDataConstants.FETCH_FORM_FIELD_DATA_FAILURE:
      return {
        ...state,
        data: {},
        isLoading: false
      };
    case FormFieldDataConstants.SAVE_FORM_FIELD_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FormFieldDataConstants.SAVE_FORM_FIELD_DATA_SUCCESS:
      return {
        ...state,
        data: {...action.data},
        isLoading: false
      };
    case FormFieldDataConstants.SAVE_FORM_FIELD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case FormFieldDataConstants.UPDATE_FORM_FIELD_DATA_STATE:
      return {
        ...state,
        data: action.data ? action.data : currentFormInitialState.data,
        isLoading: false
      };
    default:
      return state;
  }
};

const formFieldDataListReducer = (state: IFormFieldDatas = listInitialState, action: IActionProps) => {
  switch (action.type) {
    case FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_REQUEST:
      return {
        ...state,
        isLoading: false
      };
    case FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_SUCCESS:
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

export const formFieldDataReducers: Reducer<IFormFieldDataReducer> = combineReducers({
  list: formFieldDataListReducer,
  submission: formFieldDataReducer
});
