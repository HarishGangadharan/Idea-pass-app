"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryBuilderReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/querybuilder/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var queryBuilderInitialState = {
  fields: [],
  loading: false
};

var queryBuilderReducer = function queryBuilderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : queryBuilderInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.FETCH_QUERY_BUILDER_FIELDS_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_QUERY_BUILDER_FIELDS_SUCCESS:
      return _objectSpread({}, state, {
        fields: _toConsumableArray(action.payload.fields),
        loading: false
      });

    case _constants.default.FETCH_QUERY_BUILDER_FIELDS_FAILURE:
      return queryBuilderInitialState;

    default:
      return state;
  }
};

exports.queryBuilderReducer = queryBuilderReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9xdWVyeWJ1aWxkZXIudHMiXSwibmFtZXMiOlsicXVlcnlCdWlsZGVySW5pdGlhbFN0YXRlIiwiZmllbGRzIiwibG9hZGluZyIsInF1ZXJ5QnVpbGRlclJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDb25zdGFudHMiLCJGRVRDSF9RVUVSWV9CVUlMREVSX0ZJRUxEU19SRVFVRVNUIiwiRkVUQ0hfUVVFUllfQlVJTERFUl9GSUVMRFNfU1VDQ0VTUyIsInBheWxvYWQiLCJGRVRDSF9RVUVSWV9CVUlMREVSX0ZJRUxEU19GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNQSx3QkFBOEMsR0FBRztBQUNyREMsRUFBQUEsTUFBTSxFQUFFLEVBRDZDO0FBRXJEQyxFQUFBQSxPQUFPLEVBQUU7QUFGNEMsQ0FBdkQ7O0FBS08sSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUF3RztBQUFBLE1BQXZHQyxLQUF1Ryx1RUFBekVKLHdCQUF5RTtBQUFBLE1BQS9DSyxNQUErQzs7QUFDekksVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsbUJBQVVDLGtDQUFmO0FBQ0UsK0JBQ0tKLEtBREw7QUFFRUYsUUFBQUEsT0FBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS0ssbUJBQVVFLGtDQUFmO0FBQ0UsK0JBQ0tMLEtBREw7QUFFRUgsUUFBQUEsTUFBTSxxQkFBTUksTUFBTSxDQUFDSyxPQUFQLENBQWVULE1BQXJCLENBRlI7QUFHRUMsUUFBQUEsT0FBTyxFQUFFO0FBSFg7O0FBS0YsU0FBS0ssbUJBQVVJLGtDQUFmO0FBQ0UsYUFBT1gsd0JBQVA7O0FBQ0Y7QUFDRSxhQUFPSSxLQUFQO0FBZko7QUFpQkQsQ0FsQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQWN0aW9uUHJvcHMgfSBmcm9tICcuJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9xdWVyeWJ1aWxkZXIvY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJUXVlcnlCdWlsZGVyUmVkdWNlciB7XG4gIGZpZWxkcyA6IGFueVtdLFxuICBsb2FkaW5nOiBib29sZWFuXG59XG5cbmNvbnN0IHF1ZXJ5QnVpbGRlckluaXRpYWxTdGF0ZTogSVF1ZXJ5QnVpbGRlclJlZHVjZXIgPSB7XG4gIGZpZWxkczogW10sXG4gIGxvYWRpbmc6IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgcXVlcnlCdWlsZGVyUmVkdWNlciA9IChzdGF0ZTogSVF1ZXJ5QnVpbGRlclJlZHVjZXIgPSBxdWVyeUJ1aWxkZXJJbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvblByb3BzKTogSVF1ZXJ5QnVpbGRlclJlZHVjZXIgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfUVVFUllfQlVJTERFUl9GSUVMRFNfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX1FVRVJZX0JVSUxERVJfRklFTERTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmllbGRzOiBbLi4uYWN0aW9uLnBheWxvYWQuZmllbGRzXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfUVVFUllfQlVJTERFUl9GSUVMRFNfRkFJTFVSRTpcbiAgICAgIHJldHVybiBxdWVyeUJ1aWxkZXJJbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdfQ==