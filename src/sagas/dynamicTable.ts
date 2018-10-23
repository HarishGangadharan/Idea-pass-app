import { call, put } from 'redux-saga/effects';
import { getTableDataError, getTableDataSuccess, getTableMetaError, getTableMetaSuccess } from '../actions/dynamicTable';
import { IActionProps } from '../reducers';
import FormSchemaService from '../services/formschema';

import { TABLE_SORT } from '../constants/tableConstants';

function* fetchTableMeta(action: IActionProps) {
  try {
    const { callback } = action;
    const response = {
      colHide: true,
      cols: [
        {
          key: '_id',
          label: 'ID'
        },
        {
          enableSort: true,
          key: 'name',
          label: 'Name'
        }
      ],
      globalSearch: false,
      isExportable: true,
      keyField: '_id',
      noDataIndicator: 'No Data',
      rowAction: null,
      rowSelectForExport: false
    };
    yield put(getTableMetaSuccess(response));
    if (callback) {
      callback(response.cols, response.keyField);
    }
  } catch (error) {
    yield put(getTableMetaError(error));
  }
}

function* fetchTableData(action: any) {
  try {
    const { limit, currentPage, sortField, sortOrder, callback } = action;
    const response = yield call(FormSchemaService.getAllFormSchema,
      limit, currentPage, sortField, sortOrder === TABLE_SORT.ASC ? 1 : -1);
    if (callback) {
      callback(response.data);
    } else {
      yield put(getTableDataSuccess(response.data));
    }
  } catch (error) {
    yield put(getTableDataError(error));
  }
}

export default {
  fetchTableData,
  fetchTableMeta
};
