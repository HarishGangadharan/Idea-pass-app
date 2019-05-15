"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = require("redux-saga/effects");

var _dynamicTable = require("../actions/dynamicTable");

var _dynamicTable2 = _interopRequireDefault(require("../services/dynamicTable"));

var _logger = _interopRequireDefault(require("../utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchTableMeta),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchTableData);

function fetchTableMeta(action) {
  var callback, response, actualResponse;
  return regeneratorRuntime.wrap(function fetchTableMeta$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          callback = action.callback;
          _context.next = 4;
          return (0, _effects.call)(_dynamicTable2.default.getDynamicTableMeta, '5bd805822e884c5fbc1b7dcb');

        case 4:
          response = _context.sent;

          _logger.default.log(response);
          /* tslint:disable */


          actualResponse = {
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
            'fields': [{
              'options': [],
              '_id': '5bd7f9fe2e884c5fbc1b7da4',
              'name': 'First Name',
              'key': 'empFirstName',
              'type': 'TEXT',
              enableSort: true,
              filterable: true
            }, {
              'options': [],
              '_id': '5bd7f9fe2e884c5fbc1b7da5',
              'name': 'Employee Number',
              'key': 'empNo',
              'type': 'NUMBER',
              enableSort: true,
              filterable: true
            }, {
              'options': [],
              '_id': '5bd7f9fe2e884c5fbc1b7da6',
              'name': 'Employee LastName',
              'key': 'empLastName',
              'type': 'TEXT',
              enableSort: true
            }, {
              'options': [],
              '_id': '5bd7f9fe2e884c5fbc1b7da7',
              'name': 'Email ID',
              'key': 'email',
              'type': 'TEXT',
              enableSort: true
            }, {
              'options': [],
              '_id': '5bd7f9fe2e884c5fbc1b7da8',
              'name': 'Gender',
              'key': 'sex',
              'type': 'TEXT'
            }, {
              'options': [],
              '_id': '5bd7f9fe2e884c5fbc1b7da9',
              'name': 'Phone No',
              'key': 'phoneNo',
              'type': 'NUMBER'
            }, {
              'options': [],
              '_id': '5bd7f9fe2e884c5fbc1b7daa',
              'name': 'Job Title',
              'key': 'jobTitle',
              'type': 'TEXT'
            }],
            'keyField': 'empNo',
            'loadResource': '/forms/employees',
            'isExportable': true,
            'enableInfiniteScroll': false
          };

          if (callback) {
            callback(actualResponse.fields, actualResponse.isAutoRefresh);
          }

          _context.next = 10;
          return (0, _effects.put)((0, _dynamicTable.getTableMetaSuccess)(actualResponse));

        case 10:
          _context.next = 12;
          return (0, _effects.put)((0, _dynamicTable.getTableData)(actualResponse.loadResource, actualResponse.paging ? 0 : actualResponse.pageSize, actualResponse.paging ? 0 : 1, '', actualResponse.keyField, 1, false));

        case 12:
          _context.next = 19;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);

          _logger.default.error('Error in Getting table meta :: ', _context.t0);

          _context.next = 19;
          return (0, _effects.put)((0, _dynamicTable.getTableMetaError)(_context.t0));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 14]]);
}

function fetchTableData(action) {
  var resource, limit, filters, currentPage, sortField, sortOrder, retainData, callback, total, _response, response;

  return regeneratorRuntime.wrap(function fetchTableData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          resource = action.resource, limit = action.limit, filters = action.filters, currentPage = action.currentPage, sortField = action.sortField, sortOrder = action.sortOrder, retainData = action.retainData, callback = action.callback;
          total = limit; // TODO: Implement fetch all data without having to hit API twice

          if (!(limit === 0)) {
            _context2.next = 8;
            break;
          }

          _context2.next = 6;
          return (0, _effects.call)(_dynamicTable2.default.getDynamicTableData, resource, 0, 0, sortField, sortOrder, filters);

        case 6:
          _response = _context2.sent;
          total = _response.data.total;

        case 8:
          _context2.next = 10;
          return (0, _effects.call)(_dynamicTable2.default.getDynamicTableData, resource, total, currentPage, sortField, sortOrder, filters);

        case 10:
          response = _context2.sent;

          if (!callback) {
            _context2.next = 15;
            break;
          }

          callback(response.data);
          _context2.next = 17;
          break;

        case 15:
          _context2.next = 17;
          return (0, _effects.put)((0, _dynamicTable.getTableDataSuccess)(response.data, retainData));

        case 17:
          _context2.next = 24;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);

          _logger.default.error('Error in Getting table Data :: ', _context2.t0);

          _context2.next = 24;
          return (0, _effects.put)((0, _dynamicTable.getTableDataError)(_context2.t0));

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 19]]);
}

var _default = {
  fetchTableData: fetchTableData,
  fetchTableMeta: fetchTableMeta
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9keW5hbWljVGFibGUudHMiXSwibmFtZXMiOlsiZmV0Y2hUYWJsZU1ldGEiLCJmZXRjaFRhYmxlRGF0YSIsImFjdGlvbiIsImNhbGxiYWNrIiwiRHluYW1pY1RhYmxlU2VydmljZSIsImdldER5bmFtaWNUYWJsZU1ldGEiLCJyZXNwb25zZSIsIkxvZ2dlciIsImxvZyIsImFjdHVhbFJlc3BvbnNlIiwiZW5hYmxlU29ydCIsImZpbHRlcmFibGUiLCJmaWVsZHMiLCJpc0F1dG9SZWZyZXNoIiwibG9hZFJlc291cmNlIiwicGFnaW5nIiwicGFnZVNpemUiLCJrZXlGaWVsZCIsImVycm9yIiwicmVzb3VyY2UiLCJsaW1pdCIsImZpbHRlcnMiLCJjdXJyZW50UGFnZSIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsInJldGFpbkRhdGEiLCJ0b3RhbCIsImdldER5bmFtaWNUYWJsZURhdGEiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozt3QkFFVUEsYzs7O3dCQWtHQUMsYzs7QUFsR1YsU0FBVUQsY0FBVixDQUF5QkUsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWUMsVUFBQUEsUUFGWixHQUV5QkQsTUFGekIsQ0FFWUMsUUFGWjtBQUFBO0FBR3FCLGlCQUFNLG1CQUFLQyx1QkFBb0JDLG1CQUF6QixFQUE4QywwQkFBOUMsQ0FBTjs7QUFIckI7QUFHVUMsVUFBQUEsUUFIVjs7QUFJSUMsMEJBQU9DLEdBQVAsQ0FBV0YsUUFBWDtBQUNBOzs7QUFDTUcsVUFBQUEsY0FOVixHQU9NO0FBQ0Usd0JBQVksSUFEZDtBQUVFLHlCQUFhLENBRmY7QUFHRSx3QkFBWSxFQUhkO0FBSUUsbUJBQU8sMEJBSlQ7QUFLRSxvQkFBUSxXQUxWO0FBTUUsdUJBQVcsS0FOYjtBQU9FLDBCQUFjLEtBUGhCO0FBUUUseUJBQWEsS0FSZjtBQVNFLDBCQUFjLElBVGhCO0FBVUUsd0JBQVks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YSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsbCwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IGdldFRhYmxlRGF0YSwgZ2V0VGFibGVEYXRhRXJyb3IsIGdldFRhYmxlRGF0YVN1Y2Nlc3MsIGdldFRhYmxlTWV0YUVycm9yLCBnZXRUYWJsZU1ldGFTdWNjZXNzIH0gZnJvbSAnLi4vYWN0aW9ucy9keW5hbWljVGFibGUnO1xuaW1wb3J0IHsgSUFjdGlvblByb3BzIH0gZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IER5bmFtaWNUYWJsZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvZHluYW1pY1RhYmxlJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuZnVuY3Rpb24qIGZldGNoVGFibGVNZXRhKGFjdGlvbjogSUFjdGlvblByb3BzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBjYWxsYmFjayB9ID0gYWN0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChEeW5hbWljVGFibGVTZXJ2aWNlLmdldER5bmFtaWNUYWJsZU1ldGEsICc1YmQ4MDU4MjJlODg0YzVmYmMxYjdkY2InKTtcbiAgICBMb2dnZXIubG9nKHJlc3BvbnNlKTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICAgIGNvbnN0IGFjdHVhbFJlc3BvbnNlID1cbiAgICAgIHtcbiAgICAgICAgJ2lzQWN0aXZlJzogdHJ1ZSxcbiAgICAgICAgJ3BhZ2VJbmRleCc6IDEsXG4gICAgICAgICdwYWdlU2l6ZSc6IDEwLFxuICAgICAgICAnX2lkJzogJzViZDdmOWZlMmU4ODRjNWZiYzFiN2RhMycsXG4gICAgICAgICduYW1lJzogJ0VtcGxveWVlcycsXG4gICAgICAgICdjYW5FZGl0JzogZmFsc2UsXG4gICAgICAgICdmaWx0ZXJhYmxlJzogZmFsc2UsXG4gICAgICAgICdjYW5JbnNlcnQnOiBmYWxzZSxcbiAgICAgICAgJ3NlbGVjdGFibGUnOiB0cnVlLFxuICAgICAgICAnc29ydGFibGUnOiBmYWxzZSxcbiAgICAgICAgJ3BhZ2luZyc6IHRydWUsXG4gICAgICAgICdpc0F1dG9SZWZyZXNoJzogZmFsc2UsXG4gICAgICAgICdoZWFkZXJWaXNpYmxlJzogdHJ1ZSxcbiAgICAgICAgJ25vRGF0YUNvbnRlbnQnOiAnTm90IEZvdW5kIScsXG4gICAgICAgICdjYW5EZWxldGUnOiB0cnVlLFxuICAgICAgICAnZmllbGRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICdvcHRpb25zJzogW10sXG4gICAgICAgICAgICAnX2lkJzogJzViZDdmOWZlMmU4ODRjNWZiYzFiN2RhNCcsXG4gICAgICAgICAgICAnbmFtZSc6ICdGaXJzdCBOYW1lJyxcbiAgICAgICAgICAgICdrZXknOiAnZW1wRmlyc3ROYW1lJyxcbiAgICAgICAgICAgICd0eXBlJzogJ1RFWFQnLFxuICAgICAgICAgICAgZW5hYmxlU29ydDogdHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdvcHRpb25zJzogW10sXG4gICAgICAgICAgICAnX2lkJzogJzViZDdmOWZlMmU4ODRjNWZiYzFiN2RhNScsXG4gICAgICAgICAgICAnbmFtZSc6ICdFbXBsb3llZSBOdW1iZXInLFxuICAgICAgICAgICAgJ2tleSc6ICdlbXBObycsXG4gICAgICAgICAgICAndHlwZSc6ICdOVU1CRVInLFxuICAgICAgICAgICAgZW5hYmxlU29ydDogdHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdvcHRpb25zJzogW10sXG4gICAgICAgICAgICAnX2lkJzogJzViZDdmOWZlMmU4ODRjNWZiYzFiN2RhNicsXG4gICAgICAgICAgICAnbmFtZSc6ICdFbXBsb3llZSBMYXN0TmFtZScsXG4gICAgICAgICAgICAna2V5JzogJ2VtcExhc3ROYW1lJyxcbiAgICAgICAgICAgICd0eXBlJzogJ1RFWFQnLFxuICAgICAgICAgICAgZW5hYmxlU29ydDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ29wdGlvbnMnOiBbXSxcbiAgICAgICAgICAgICdfaWQnOiAnNWJkN2Y5ZmUyZTg4NGM1ZmJjMWI3ZGE3JyxcbiAgICAgICAgICAgICduYW1lJzogJ0VtYWlsIElEJyxcbiAgICAgICAgICAgICdrZXknOiAnZW1haWwnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnVEVYVCcsXG4gICAgICAgICAgICBlbmFibGVTb3J0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnb3B0aW9ucyc6IFtdLFxuICAgICAgICAgICAgJ19pZCc6ICc1YmQ3ZjlmZTJlODg0YzVmYmMxYjdkYTgnLFxuICAgICAgICAgICAgJ25hbWUnOiAnR2VuZGVyJyxcbiAgICAgICAgICAgICdrZXknOiAnc2V4JyxcbiAgICAgICAgICAgICd0eXBlJzogJ1RFWFQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnb3B0aW9ucyc6IFtdLFxuICAgICAgICAgICAgJ19pZCc6ICc1YmQ3ZjlmZTJlODg0YzVmYmMxYjdkYTknLFxuICAgICAgICAgICAgJ25hbWUnOiAnUGhvbmUgTm8nLFxuICAgICAgICAgICAgJ2tleSc6ICdwaG9uZU5vJyxcbiAgICAgICAgICAgICd0eXBlJzogJ05VTUJFUidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICdvcHRpb25zJzogW10sXG4gICAgICAgICAgICAnX2lkJzogJzViZDdmOWZlMmU4ODRjNWZiYzFiN2RhYScsXG4gICAgICAgICAgICAnbmFtZSc6ICdKb2IgVGl0bGUnLFxuICAgICAgICAgICAgJ2tleSc6ICdqb2JUaXRsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdURVhUJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgJ2tleUZpZWxkJzogJ2VtcE5vJyxcbiAgICAgICAgJ2xvYWRSZXNvdXJjZSc6ICcvZm9ybXMvZW1wbG95ZWVzJyxcbiAgICAgICAgJ2lzRXhwb3J0YWJsZSc6IHRydWUsXG4gICAgICAgICdlbmFibGVJbmZpbml0ZVNjcm9sbCc6IGZhbHNlXG4gICAgICB9O1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soYWN0dWFsUmVzcG9uc2UuZmllbGRzLCBhY3R1YWxSZXNwb25zZS5pc0F1dG9SZWZyZXNoKTtcbiAgICB9XG4gICAgeWllbGQgcHV0KGdldFRhYmxlTWV0YVN1Y2Nlc3MoYWN0dWFsUmVzcG9uc2UpKTtcbiAgICAvLyBJbml0aWFsIGNhbGwgdG8gZmV0Y2ggZ3JpZCBkYXRhXG4gICAgeWllbGQgcHV0KGdldFRhYmxlRGF0YShhY3R1YWxSZXNwb25zZS5sb2FkUmVzb3VyY2UsIGFjdHVhbFJlc3BvbnNlLnBhZ2luZyA/IDAgOiBhY3R1YWxSZXNwb25zZS5wYWdlU2l6ZSwgYWN0dWFsUmVzcG9uc2UucGFnaW5nXG4gICAgICA/IDAgOiAxLCAnJywgYWN0dWFsUmVzcG9uc2Uua2V5RmllbGQsIDEsIGZhbHNlKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgTG9nZ2VyLmVycm9yKCdFcnJvciBpbiBHZXR0aW5nIHRhYmxlIG1ldGEgOjogJywgZXJyb3IpO1xuICAgIHlpZWxkIHB1dChnZXRUYWJsZU1ldGFFcnJvcihlcnJvcikpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBmZXRjaFRhYmxlRGF0YShhY3Rpb246IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcmVzb3VyY2UsIGxpbWl0LCBmaWx0ZXJzLCBjdXJyZW50UGFnZSwgc29ydEZpZWxkLCBzb3J0T3JkZXIsIHJldGFpbkRhdGEsIGNhbGxiYWNrIH0gPSBhY3Rpb247XG4gICAgbGV0IHRvdGFsID0gbGltaXQ7XG4gICAgLy8gVE9ETzogSW1wbGVtZW50IGZldGNoIGFsbCBkYXRhIHdpdGhvdXQgaGF2aW5nIHRvIGhpdCBBUEkgdHdpY2VcbiAgICBpZihsaW1pdCA9PT0gMCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKER5bmFtaWNUYWJsZVNlcnZpY2UuZ2V0RHluYW1pY1RhYmxlRGF0YSwgcmVzb3VyY2UsIDAsIDAsIHNvcnRGaWVsZCwgc29ydE9yZGVyLCBmaWx0ZXJzKTtcbiAgICAgIHRvdGFsID0gcmVzcG9uc2UuZGF0YS50b3RhbDtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKER5bmFtaWNUYWJsZVNlcnZpY2UuZ2V0RHluYW1pY1RhYmxlRGF0YSwgcmVzb3VyY2UsXG4gICAgICB0b3RhbCwgY3VycmVudFBhZ2UsIHNvcnRGaWVsZCwgc29ydE9yZGVyLCBmaWx0ZXJzKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB5aWVsZCBwdXQoZ2V0VGFibGVEYXRhU3VjY2VzcyhyZXNwb25zZS5kYXRhLCByZXRhaW5EYXRhKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIExvZ2dlci5lcnJvcignRXJyb3IgaW4gR2V0dGluZyB0YWJsZSBEYXRhIDo6ICcsIGVycm9yKTtcbiAgICB5aWVsZCBwdXQoZ2V0VGFibGVEYXRhRXJyb3IoZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZldGNoVGFibGVEYXRhLFxuICBmZXRjaFRhYmxlTWV0YVxufTtcbiJdfQ==