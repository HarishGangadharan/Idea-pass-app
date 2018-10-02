import { IActionProps } from '.';
import FormFieldDataConstants from '../actions/formfielddata/constants';

interface IFormFieldData {
  [key: string]: any;
}

interface IFormFieldDatas {
  data: IFormFieldData[];
  total: number;
  limit: number;
}

interface IFormFieldDataReducer {
  currentFormFieldData: IFormFieldData;
  formFieldDatas: IFormFieldDatas;
  isLoading: boolean;
}

const initialState = {
  currentFormFieldData: {},
  formFieldDatas: {
    data: [],
    limit: 10,
    total: 0
  },
  isLoading: false
};

const formFieldDataReducer = (state: IFormFieldDataReducer = initialState, action: IActionProps) => {
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
        formSchema: action.payload,
        isLoading: false
      };
    case FormFieldDataConstants.FETCH_FORM_FIELD_DATA_LIST_SUCCESS:
      return {
        ...state,
        formSchema: action.payload,
        isLoading: false
      };
    case FormFieldDataConstants.FETCH_FORM_FIELD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export { formFieldDataReducer, IFormFieldDataReducer, IFormFieldData, IFormFieldDatas };
