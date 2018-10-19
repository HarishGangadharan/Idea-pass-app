import { combineReducers } from 'redux';
import { IActionProps } from '.';
import constants from '../actions/dynamicTable/constants';
import { IColDef } from '../components/Table/Column';
import { IFormSchema } from './formschema';

export interface IMetaState {
  colHide: boolean;
  cols: IColDef[];
  globalSearch: boolean;
  isExportable: boolean;
  keyField: string;
  loading: boolean;
  noDataIndicator: string;
  rowAction: any;
  rowSelectForExport: boolean;
}

export interface IDataState {
  data: IFormSchema[];
  total: number;
  loading: boolean;
}

const metaInitialState: IMetaState = {
  colHide: true,
  cols: [],
  globalSearch: false,
  isExportable: false,
  keyField: 'id',
  loading: false,
  noDataIndicator: 'No Data',
  rowAction: null,
  rowSelectForExport: false
};

const dynamicMetaReducer = (state: IMetaState = metaInitialState, action: IActionProps): IMetaState => {
  switch (action.type) {
    case constants.GET_TABLE_META:
      return {
        ...state,
        loading: true
      };
    case constants.GET_TABLE_META_SUCCESS:
      return {
        ...state,
        colHide: action.response.colHide,
        cols: action.response.cols,
        globalSearch: action.response.globalSearch,
        isExportable: action.response.isExportable,
        keyField: action.response.keyField,
        loading: false,
        noDataIndicator: action.response.noDataIndicator,
        rowAction: action.response.rowAction,
        rowSelectForExport: action.response.rowSelectForExport
      };
    case constants.GET_TABLE_META_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

const dataInitialState: IDataState = {
  data: [],
  loading: false,
  total: 0
};

const dynamicDataReducer = (state: IDataState = dataInitialState, action: IActionProps): IDataState => {
  switch (action.type) {
    case constants.GET_TABLE_DATA:
      return {
        ...state,
        loading: true
      };
    case constants.GET_TABLE_DATA_SUCCESS:
      return {
        ...state,
        data: action.response.data,
        loading: false,
        total: action.response.total
      };
    case constants.GET_TABLE_DATA_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default combineReducers({
  data: dynamicDataReducer,
  meta: dynamicMetaReducer
});
