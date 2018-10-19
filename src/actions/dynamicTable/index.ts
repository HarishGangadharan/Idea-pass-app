import actions from './constants';

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

export const getTableData = (limit: number, currentPage: number, sortField: string, sortOrder: string) => ({
  currentPage,
  limit,
  sortField,
  sortOrder,
  type: actions.GET_TABLE_DATA
});

export const getTableDataSuccess = (response: object) => ({
  response,
  type: actions.GET_TABLE_DATA_SUCCESS
});

export const getTableDataError = (error: object) => ({
  error,
  type: actions.GET_TABLE_DATA_ERROR
});
