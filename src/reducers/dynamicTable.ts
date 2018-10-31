import { combineReducers } from 'redux';
import { IActionProps } from '.';
import constants from '../actions/dynamicTable/constants';
import { IColDef } from '../components/Table/Column';
import { IFormSchema } from './formschema';

export interface IMetaState {
  clientRendering: boolean;
  colHide: boolean;
  cols: IColDef[];
  globalSearch: boolean;
  isAutoRefresh: boolean;
  isExportable: boolean;
  keyField: string;
  length: number;
  loading: boolean;
  loadResource: string;
  name: string;
  noDataIndicator: string;
  rowAction: any;
  selectable: boolean;
  rowSelectForExport: boolean;
  enableInfiniteScroll: boolean;
}

export interface IDataState {
  data: IFormSchema[];
  total: number;
  loading: boolean;
}

const metaInitialState: IMetaState = {
  clientRendering: false,
  colHide: true,
  cols: [],
  enableInfiniteScroll: false,
  globalSearch: false,
  isAutoRefresh: false,
  isExportable: false,
  keyField: 'id',
  length: 10,
  loadResource: '',
  loading: true,
  name: '',
  noDataIndicator: 'No Data',
  rowAction: null,
  rowSelectForExport: false,
  selectable: false
};

const dynamicMetaReducer = (state: IMetaState = metaInitialState, action: IActionProps): IMetaState => {
  switch (action.type) {
    case constants.GET_TABLE_META:
      return {
        ...state,
        loading: true
      };
    case constants.GET_TABLE_META_SUCCESS:
      const { pageSize: length, headerVisible: colHide, fields, enableInfiniteScroll, globalSearch, isExportable, paging: clientRendering,
        keyField, noDataContent: noDataIndicator, selectable, isAutoRefresh, name, loadResource } = action.response;
      return {
        ...state,
        clientRendering,
        colHide: colHide || false,
        cols: fields,
        enableInfiniteScroll: (enableInfiniteScroll) || false,
        globalSearch: globalSearch || false,
        isAutoRefresh: isAutoRefresh || false,
        isExportable: isExportable || false,
        keyField,
        length,
        loadResource,
        loading: false,
        name,
        noDataIndicator,
        rowSelectForExport: false,
        selectable
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
        data: (!action.retainData && action.callback === undefined) ? [] : state.data,
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
