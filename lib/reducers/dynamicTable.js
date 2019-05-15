"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _constants = _interopRequireDefault(require("../actions/dynamicTable/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var metaInitialState = {
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

var dynamicMetaReducer = function dynamicMetaReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : metaInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.GET_TABLE_META:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.GET_TABLE_META_SUCCESS:
      var _action$response = action.response,
          length = _action$response.pageSize,
          colHide = _action$response.headerVisible,
          fields = _action$response.fields,
          enableInfiniteScroll = _action$response.enableInfiniteScroll,
          globalSearch = _action$response.globalSearch,
          isExportable = _action$response.isExportable,
          clientRendering = _action$response.paging,
          keyField = _action$response.keyField,
          noDataIndicator = _action$response.noDataContent,
          selectable = _action$response.selectable,
          isAutoRefresh = _action$response.isAutoRefresh,
          name = _action$response.name,
          loadResource = _action$response.loadResource;
      return _objectSpread({}, state, {
        clientRendering: clientRendering,
        colHide: colHide || false,
        cols: fields,
        enableInfiniteScroll: enableInfiniteScroll || false,
        globalSearch: globalSearch || false,
        isAutoRefresh: isAutoRefresh || false,
        isExportable: isExportable || false,
        keyField: keyField,
        length: length,
        loadResource: loadResource,
        loading: false,
        name: name,
        noDataIndicator: noDataIndicator,
        rowSelectForExport: false,
        selectable: selectable
      });

    case _constants.default.GET_TABLE_META_ERROR:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
};

var dataInitialState = {
  data: [],
  loading: false,
  total: 0
};

var dynamicDataReducer = function dynamicDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : dataInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.GET_TABLE_DATA:
      return _objectSpread({}, state, {
        data: !action.retainData && action.callback === undefined ? [] : state.data,
        loading: action.callback === undefined
      });

    case _constants.default.GET_TABLE_DATA_SUCCESS:
      var _action$response2 = action.response,
          data = _action$response2.data,
          total = _action$response2.total;
      return _objectSpread({}, state, {
        data: action.retainData ? [].concat(_toConsumableArray(state.data), _toConsumableArray(data)) : data,
        loading: false,
        total: total
      });

    case _constants.default.GET_TABLE_DATA_ERROR:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
};

var _default = (0, _redux.combineReducers)({
  data: dynamicDataReducer,
  meta: dynamicMetaReducer
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9keW5hbWljVGFibGUudHMiXSwibmFtZXMiOlsibWV0YUluaXRpYWxTdGF0ZSIsImNsaWVudFJlbmRlcmluZyIsImNvbEhpZGUiLCJjb2xzIiwiZW5hYmxlSW5maW5pdGVTY3JvbGwiLCJnbG9iYWxTZWFyY2giLCJpc0F1dG9SZWZyZXNoIiwiaXNFeHBvcnRhYmxlIiwia2V5RmllbGQiLCJsZW5ndGgiLCJsb2FkUmVzb3VyY2UiLCJsb2FkaW5nIiwibmFtZSIsIm5vRGF0YUluZGljYXRvciIsInJvd0FjdGlvbiIsInJvd1NlbGVjdEZvckV4cG9ydCIsInNlbGVjdGFibGUiLCJkeW5hbWljTWV0YVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJjb25zdGFudHMiLCJHRVRfVEFCTEVfTUVUQSIsIkdFVF9UQUJMRV9NRVRBX1NVQ0NFU1MiLCJyZXNwb25zZSIsInBhZ2VTaXplIiwiaGVhZGVyVmlzaWJsZSIsImZpZWxkcyIsInBhZ2luZyIsIm5vRGF0YUNvbnRlbnQiLCJHRVRfVEFCTEVfTUVUQV9FUlJPUiIsImRhdGFJbml0aWFsU3RhdGUiLCJkYXRhIiwidG90YWwiLCJkeW5hbWljRGF0YVJlZHVjZXIiLCJHRVRfVEFCTEVfREFUQSIsInJldGFpbkRhdGEiLCJjYWxsYmFjayIsInVuZGVmaW5lZCIsIkdFVF9UQUJMRV9EQVRBX1NVQ0NFU1MiLCJHRVRfVEFCTEVfREFUQV9FUlJPUiIsIm1ldGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQSxJQUFNQSxnQkFBNEIsR0FBRztBQUNuQ0MsRUFBQUEsZUFBZSxFQUFFLEtBRGtCO0FBRW5DQyxFQUFBQSxPQUFPLEVBQUUsSUFGMEI7QUFHbkNDLEVBQUFBLElBQUksRUFBRSxFQUg2QjtBQUluQ0MsRUFBQUEsb0JBQW9CLEVBQUUsS0FKYTtBQUtuQ0MsRUFBQUEsWUFBWSxFQUFFLEtBTHFCO0FBTW5DQyxFQUFBQSxhQUFh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QUFxQzs7QUFDckcsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsbUJBQVVjLGNBQWY7QUFDRSwrQkFDS2pCLEtBREw7QUFFRWMsUUFBQUEsSUFBSSxFQUFHLENBQUNiLE1BQU0sQ0FBQ2lCLFVBQVIsSUFBc0JqQixNQUFNLENBQUNrQixRQUFQLEtBQW9CQyxTQUEzQyxHQUF3RCxFQUF4RCxHQUE2RHBCLEtBQUssQ0FBQ2MsSUFGM0U7QUFHRXJCLFFBQUFBLE9BQU8sRUFBRVEsTUFBTSxDQUFDa0IsUUFBUCxLQUFvQkM7QUFIL0I7O0FBS0YsU0FBS2pCLG1CQUFVa0Isc0JBQWY7QUFBQSw4QkFDMEJwQixNQUFNLENBQUNLLFFBRGpDO0FBQUEsVUFDVVEsSUFEVixxQkFDVUEsSUFEVjtBQUFBLFVBQ2dCQyxLQURoQixxQkFDZ0JBLEtBRGhCO0FBRUUsK0JBQ0tmLEtBREw7QUFFRWMsUUFBQUEsSUFBSSxFQUFFYixNQUFNLENBQUNpQixVQUFQLGdDQUF3QmxCLEtBQUssQ0FBQ2MsSUFBOUIsc0JBQXVDQSxJQUF2QyxLQUErQ0EsSUFGdkQ7QUFHRXJCLFFBQUFBLE9BQU8sRUFBRSxLQUhYO0FBSUVzQixRQUFBQSxLQUFLLEVBQUxBO0FBSkY7O0FBTUYsU0FBS1osbUJBQVVtQixvQkFBZjtBQUNFLCtCQUNLdEIsS0FETDtBQUVFUCxRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRjtBQUNFLGFBQU9PLEtBQVA7QUFyQko7QUF1QkQsQ0F4QkQ7O2VBMEJlLDRCQUFnQjtBQUM3QmMsRUFBQUEsSUFBSSxFQUFFRSxrQkFEdUI7QUFFN0JPLEVBQUFBLElBQUksRUFBRXhCO0FBRnVCLENBQWhCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBJQWN0aW9uUHJvcHMgfSBmcm9tICcuJztcbmltcG9ydCBjb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9keW5hbWljVGFibGUvY29uc3RhbnRzJztcbmltcG9ydCB7IElDb2xEZWYgfSBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlL0NvbHVtbic7XG5pbXBvcnQgeyBJRm9ybVNjaGVtYSB9IGZyb20gJy4vZm9ybXNjaGVtYSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1ldGFTdGF0ZSB7XG4gIGNsaWVudFJlbmRlcmluZzogYm9vbGVhbjtcbiAgY29sSGlkZTogYm9vbGVhbjtcbiAgY29sczogSUNvbERlZltdO1xuICBnbG9iYWxTZWFyY2g6IGJvb2xlYW47XG4gIGlzQXV0b1JlZnJlc2g6IGJvb2xlYW47XG4gIGlzRXhwb3J0YWJsZTogYm9vbGVhbjtcbiAga2V5RmllbGQ6IHN0cmluZztcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGxvYWRSZXNvdXJjZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5vRGF0YUluZGljYXRvcjogc3RyaW5nO1xuICByb3dBY3Rpb246IGFueTtcbiAgc2VsZWN0YWJsZTogYm9vbGVhbjtcbiAgcm93U2VsZWN0Rm9yRXhwb3J0OiBib29sZWFuO1xuICBlbmFibGVJbmZpbml0ZVNjcm9sbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVN0YXRlIHtcbiAgZGF0YTogSUZvcm1TY2hlbWFbXTtcbiAgdG90YWw6IG51bWJlcjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgbWV0YUluaXRpYWxTdGF0ZTogSU1ldGFTdGF0ZSA9IHtcbiAgY2xpZW50UmVuZGVyaW5nOiBmYWxzZSxcbiAgY29sSGlkZTogdHJ1ZSxcbiAgY29sczogW10sXG4gIGVuYWJsZUluZmluaXRlU2Nyb2xsOiBmYWxzZSxcbiAgZ2xvYmFsU2VhcmNoOiBmYWxzZSxcbiAgaXNBdXRvUmVmcmVzaDogZmFsc2UsXG4gIGlzRXhwb3J0YWJsZTogZmFsc2UsXG4gIGtleUZpZWxkOiAnaWQnLFxuICBsZW5ndGg6IDEwLFxuICBsb2FkUmVzb3VyY2U6ICcnLFxuICBsb2FkaW5nOiB0cnVlLFxuICBuYW1lOiAnJyxcbiAgbm9EYXRhSW5kaWNhdG9yOiAnTm8gRGF0YScsXG4gIHJvd0FjdGlvbjogbnVsbCxcbiAgcm93U2VsZWN0Rm9yRXhwb3J0OiBmYWxzZSxcbiAgc2VsZWN0YWJsZTogZmFsc2Vcbn07XG5cbmNvbnN0IGR5bmFtaWNNZXRhUmVkdWNlciA9IChzdGF0ZTogSU1ldGFTdGF0ZSA9IG1ldGFJbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvblByb3BzKTogSU1ldGFTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGNvbnN0YW50cy5HRVRfVEFCTEVfTUVUQTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgY29uc3RhbnRzLkdFVF9UQUJMRV9NRVRBX1NVQ0NFU1M6XG4gICAgICBjb25zdCB7IHBhZ2VTaXplOiBsZW5ndGgsIGhlYWRlclZpc2libGU6IGNvbEhpZGUsIGZpZWxkcywgZW5hYmxlSW5maW5pdGVTY3JvbGwsIGdsb2JhbFNlYXJjaCwgaXNFeHBvcnRhYmxlLCBwYWdpbmc6IGNsaWVudFJlbmRlcmluZyxcbiAgICAgICAga2V5RmllbGQsIG5vRGF0YUNvbnRlbnQ6IG5vRGF0YUluZGljYXRvciwgc2VsZWN0YWJsZSwgaXNBdXRvUmVmcmVzaCwgbmFtZSwgbG9hZFJlc291cmNlIH0gPSBhY3Rpb24ucmVzcG9uc2U7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50UmVuZGVyaW5nLFxuICAgICAgICBjb2xIaWRlOiBjb2xIaWRlIHx8IGZhbHNlLFxuICAgICAgICBjb2xzOiBmaWVsZHMsXG4gICAgICAgIGVuYWJsZUluZmluaXRlU2Nyb2xsOiAoZW5hYmxlSW5maW5pdGVTY3JvbGwpIHx8IGZhbHNlLFxuICAgICAgICBnbG9iYWxTZWFyY2g6IGdsb2JhbFNlYXJjaCB8fCBmYWxzZSxcbiAgICAgICAgaXNBdXRvUmVmcmVzaDogaXNBdXRvUmVmcmVzaCB8fCBmYWxzZSxcbiAgICAgICAgaXNFeHBvcnRhYmxlOiBpc0V4cG9ydGFibGUgfHwgZmFsc2UsXG4gICAgICAgIGtleUZpZWxkLFxuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGxvYWRSZXNvdXJjZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIG5vRGF0YUluZGljYXRvcixcbiAgICAgICAgcm93U2VsZWN0Rm9yRXhwb3J0OiBmYWxzZSxcbiAgICAgICAgc2VsZWN0YWJsZVxuICAgICAgfTtcbiAgICBjYXNlIGNvbnN0YW50cy5HRVRfVEFCTEVfTUVUQV9FUlJPUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBkYXRhSW5pdGlhbFN0YXRlOiBJRGF0YVN0YXRlID0ge1xuICBkYXRhOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHRvdGFsOiAwXG59O1xuXG5jb25zdCBkeW5hbWljRGF0YVJlZHVjZXIgPSAoc3RhdGU6IElEYXRhU3RhdGUgPSBkYXRhSW5pdGlhbFN0YXRlLCBhY3Rpb246IElBY3Rpb25Qcm9wcyk6IElEYXRhU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBjb25zdGFudHMuR0VUX1RBQkxFX0RBVEE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogKCFhY3Rpb24ucmV0YWluRGF0YSAmJiBhY3Rpb24uY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkgPyBbXSA6IHN0YXRlLmRhdGEsXG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5jYWxsYmFjayA9PT0gdW5kZWZpbmVkXG4gICAgICB9O1xuICAgIGNhc2UgY29uc3RhbnRzLkdFVF9UQUJMRV9EQVRBX1NVQ0NFU1M6XG4gICAgICBjb25zdCB7IGRhdGEsIHRvdGFsIH0gPSBhY3Rpb24ucmVzcG9uc2U7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnJldGFpbkRhdGEgPyBbLi4uc3RhdGUuZGF0YSwgLi4uZGF0YV0gOiBkYXRhLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgdG90YWxcbiAgICAgIH07XG4gICAgY2FzZSBjb25zdGFudHMuR0VUX1RBQkxFX0RBVEFfRVJST1I6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgZGF0YTogZHluYW1pY0RhdGFSZWR1Y2VyLFxuICBtZXRhOiBkeW5hbWljTWV0YVJlZHVjZXJcbn0pO1xuIl19