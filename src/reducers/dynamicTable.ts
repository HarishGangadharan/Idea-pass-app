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
  enableInfiniteScroll: boolean;
}

export interface IDataState {
  data: IFormSchema[];
  total: number;
  loading: boolean;
}

const metaInitialState: IMetaState = {
  colHide: true,
  cols: [],
  enableInfiniteScroll: false,
  globalSearch: false,
  isExportable: false,
  keyField: 'id',
  loading: true,
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
      const { colHide, cols, enableInfiniteScroll, globalSearch, isExportable,
        keyField, noDataIndicator, rowAction, rowSelectForExport } = action.response;
      return {
        ...state,
        colHide: colHide || false,
        cols,
        enableInfiniteScroll: enableInfiniteScroll || false,
        globalSearch: globalSearch || false,
        isExportable: isExportable || false,
        keyField,
        loading: false,
        noDataIndicator,
        rowAction,
        rowSelectForExport: rowSelectForExport || false
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
        loading: action.callback === undefined
      };
    case constants.GET_TABLE_DATA_SUCCESS:
      const { data, total } = action.response;
      return {
        ...state,
        data: action.retainData ? [...state.data, ...data] : data,
        loading: false,
        total
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
