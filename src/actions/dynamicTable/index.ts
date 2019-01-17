import actions from './constants';
import { IDataState } from '../../reducers/dynamicTable';

export const getTableMeta = (callback: any) => ({
  callback,
  type: actions.GET_TABLE_META
});

export const getTableMetaSuccess = (response: object) => ({
  response,
  type: actions.GET_TABLE_META_SUCCESS
});

export const getTableMetaError = (error: object) => ({
  error,
  type: actions.GET_TABLE_META_ERROR
});

export const getTableData = (resource: string, limit: number, currentPage: number, filters: string, sortField: string, sortOrder: number, retainData: boolean = false, callback?: any) => ({
  callback,
  currentPage,
  filters,
  limit,
  resource,
  retainData,
  sortField,
  sortOrder,
  type: actions.GET_TABLE_DATA
});

export const getTableDataSuccess = (response: IDataState, retainData: boolean = false) => ({
  response,
  retainData,
  type: actions.GET_TABLE_DATA_SUCCESS
});

export const getTableDataError = (error: object) => ({
  error,
  type: actions.GET_TABLE_DATA_ERROR
});
