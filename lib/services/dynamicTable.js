"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DynamicTableService = function DynamicTableService() {
  _classCallCheck(this, DynamicTableService);
};

_defineProperty(DynamicTableService, "getDynamicTableMeta", function (tableMetaId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/metagrid/".concat(tableMetaId)
  });
});

_defineProperty(DynamicTableService, "getDynamicTableData", function (resource, limit, currentPage, sortField, sortOrder, filters) {
  var queryString = "".concat(resource, "?$limit=").concat(limit, "&$skip=").concat(currentPage ? limit * (currentPage - 1) : 0);

  if (sortOrder && sortField) {
    queryString += "&$sort[".concat(sortField, "]=").concat(sortOrder);
  }

  if (filters) {
    queryString += "&".concat(filters);
  }

  return (0, _axios.default)({
    method: 'get',
    url: queryString
  });
});

var _default = DynamicTableService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9keW5hbWljVGFibGUudHMiXSwibmFtZXMiOlsiRHluYW1pY1RhYmxlU2VydmljZSIsInRhYmxlTWV0YUlkIiwibWV0aG9kIiwidXJsIiwicmVzb3VyY2UiLCJsaW1pdCIsImN1cnJlbnRQYWdlIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiZmlsdGVycyIsInF1ZXJ5U3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRU1BLG1COzs7O2dCQUFBQSxtQix5QkFNZ0MsVUFBQ0MsV0FBRDtBQUFBLFNBQXlCLG9CQUFNO0FBQ2pFQyxJQUFBQSxNQUFNLEVBQUUsS0FEeUQ7QUFFakVDLElBQUFBLEdBQUcsc0JBQWVGLFdBQWY7QUFGOEQsR0FBTixDQUF6QjtBQUFBLEM7O2dCQU5oQ0QsbUIseUJBb0JnQyxVQUFDSSxRQUFELEVBQW1CQyxLQUFuQixFQUFrQ0MsV0FBbEMsRUFBdURDLFNBQXZELEVBQ0NDLFNBREQsRUFDb0JDLE9BRHBCLEVBQ3lDO0FBQzNFLE1BQUlDLFdBQVcsYUFBTU4sUUFBTixxQkFBeUJDLEtBQXpCLG9CQUF3Q0MsV0FBVyxHQUFHRCxLQUFLLElBQUlDLFdBQVcsR0FBRyxDQUFsQixDQUFSLEdBQStCLENBQWxGLENBQWY7O0FBQ0EsTUFBSUUsU0FBUyxJQUFJRCxTQUFqQixFQUE0QjtBQUMxQkcsSUFBQUEsV0FBVyxxQkFBY0gsU0FBZCxlQUE0QkMsU0FBNUIsQ0FBWDtBQUNEOztBQUNELE1BQUlDLE9BQUosRUFBYTtBQUNYQyxJQUFBQSxXQUFXLGVBQVFELE9BQVIsQ0FBWDtBQUNEOztBQUNELFNBQU8sb0JBQU07QUFDWFAsSUFBQUEsTUFBTSxFQUFFLEtBREc7QUFFWEMsSUFBQUEsR0FBRyxFQUFFTztBQUZNLEdBQU4sQ0FBUDtBQUlELEM7O2VBR1lWLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgRHluYW1pY1RhYmxlU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEZldGNoIE1ldGEgZGF0YSBvZiBncmlkXG4gICAqIEBwYXJhbSB0YWJsZU1ldGFJZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXREeW5hbWljVGFibGVNZXRhID0gKHRhYmxlTWV0YUlkOiBzdHJpbmcpID0+IGF4aW9zKHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHVybDogYC9tZXRhZ3JpZC8ke3RhYmxlTWV0YUlkfWBcbiAgfSlcblxuICAvKipcbiAgICogRmV0Y2ggZGF0YSBmb3IgZ3JpZFxuICAgKiBAcGFyYW0gcmVzb3VyY2VcbiAgICogQHBhcmFtIGxpbWl0XG4gICAqIEBwYXJhbSBjdXJyZW50UGFnZVxuICAgKiBAcGFyYW0gc29ydEZpZWxkXG4gICAqIEBwYXJhbSBzb3J0T3JkZXJcbiAgICogQHBhcmFtIGZpbHRlcnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RHluYW1pY1RhYmxlRGF0YSA9IChyZXNvdXJjZTogc3RyaW5nLCBsaW1pdDogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyLCBzb3J0RmllbGQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRPcmRlcjogbnVtYmVyLCBmaWx0ZXJzPzogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7cmVzb3VyY2V9PyRsaW1pdD0ke2xpbWl0fSYkc2tpcD0ke2N1cnJlbnRQYWdlID8gbGltaXQgKiAoY3VycmVudFBhZ2UgLSAxKSA6IDB9YDtcbiAgICBpZiAoc29ydE9yZGVyICYmIHNvcnRGaWVsZCkge1xuICAgICAgcXVlcnlTdHJpbmcgKz0gYCYkc29ydFske3NvcnRGaWVsZH1dPSR7c29ydE9yZGVyfWA7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJzKSB7XG4gICAgICBxdWVyeVN0cmluZyArPSBgJiR7ZmlsdGVyc31gO1xuICAgIH1cbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIHVybDogcXVlcnlTdHJpbmdcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljVGFibGVTZXJ2aWNlO1xuIl19