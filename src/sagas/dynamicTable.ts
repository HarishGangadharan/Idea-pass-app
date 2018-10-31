import { call, put } from 'redux-saga/effects';
import { getTableData, getTableDataError, getTableDataSuccess, getTableMetaError, getTableMetaSuccess } from '../actions/dynamicTable';
import { IActionProps } from '../reducers';
import DynamicTableService from '../services/dynamicTable';
import Logger from '../utils/logger';

function* fetchTableMeta(action: IActionProps) {
  try {
    const { callback } = action;
    const response = yield call(DynamicTableService.getDynamicTableMeta, '5bd805822e884c5fbc1b7dcb');
    Logger.log(response);
    /* tslint:disable */
    const actualResponse =
      {
        'isActive': true,
        'pageIndex': 1,
        'pageSize': 10,
        '_id': '5bd7f9fe2e884c5fbc1b7da3',
        'name': 'Employees',
        'canEdit': false,
        'filterable': false,
        'canInsert': false,
        'selectable': true,
        'sortable': false,
        'paging': true,
        'isAutoRefresh': false,
        'headerVisible': true,
        'noDataContent': 'Not Found!',
        'canDelete': true,
        'fields': [
          {
            'options': [],
            '_id': '5bd7f9fe2e884c5fbc1b7da4',
            'name': 'First Name',
            'key': 'empFirstName',
            'type': 'TEXT',
            enableSort: true,
            filterable: true
          },
          {
            'options': [],
            '_id': '5bd7f9fe2e884c5fbc1b7da5',
            'name': 'Employee Number',
            'key': 'empNo',
            'type': 'NUMBER',
            enableSort: true,
            filterable: true
          },
          {
            'options': [],
            '_id': '5bd7f9fe2e884c5fbc1b7da6',
            'name': 'Employee LastName',
            'key': 'empLastName',
            'type': 'TEXT',
            enableSort: true
          },
          {
            'options': [],
            '_id': '5bd7f9fe2e884c5fbc1b7da7',
            'name': 'Email ID',
            'key': 'email',
            'type': 'TEXT',
            enableSort: true
          },
          {
            'options': [],
            '_id': '5bd7f9fe2e884c5fbc1b7da8',
            'name': 'Gender',
            'key': 'sex',
            'type': 'TEXT'
          },
          {
            'options': [],
            '_id': '5bd7f9fe2e884c5fbc1b7da9',
            'name': 'Phone No',
            'key': 'phoneNo',
            'type': 'NUMBER'
          },
          {
            'options': [],
            '_id': '5bd7f9fe2e884c5fbc1b7daa',
            'name': 'Job Title',
            'key': 'jobTitle',
            'type': 'TEXT'
          }
        ],
        'keyField': 'empNo',
        'loadResource': '/forms/employees',
        'isExportable': true,
        'enableInfiniteScroll': false
      };
    if (callback) {
      callback(actualResponse.fields, actualResponse.isAutoRefresh);
    }
    yield put(getTableMetaSuccess(actualResponse));
    // Initial call to fetch grid data
    yield put(getTableData(actualResponse.loadResource, actualResponse.paging ? 0 : actualResponse.pageSize, actualResponse.paging
      ? 0 : 1, '', actualResponse.keyField, 1, false));
  } catch (error) {
    Logger.error('Error in Getting table meta :: ', error);
    yield put(getTableMetaError(error));
  }
}

function* fetchTableData(action: any) {
  try {
    const { resource, limit, filters, currentPage, sortField, sortOrder, retainData, callback } = action;
    let total = limit;
    // TODO: Implement fetch all data without having to hit API twice
    if(limit === 0) {
      const response = yield call(DynamicTableService.getDynamicTableData, resource, 0, 0, sortField, sortOrder, filters);
      total = response.data.total;
    }
    const response = yield call(DynamicTableService.getDynamicTableData, resource,
      total, currentPage, sortField, sortOrder, filters);
    if (callback) {
      callback(response.data);
    } else {
      yield put(getTableDataSuccess(response.data, retainData));
    }
  } catch (error) {
    Logger.error('Error in Getting table Data :: ', error);
    yield put(getTableDataError(error));
  }
}

export default {
  fetchTableData,
  fetchTableMeta
};
