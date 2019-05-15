"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalReducer = void 0;

var _redux = require("redux");

var _constants = _interopRequireDefault(require("../actions/global/constants"));

var _application = require("../constants/application.properties");

var _storage = _interopRequireDefault(require("../utils/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userStatusInitialState = {
  loading: false,
  loggedIn: Boolean(_storage.default.getItem(_application.AppProperties.ACCESS_TOKEN_KEY)),
  resetPassword: false
};
var loaderInitialState = {
  loadInProgress: 0
};

var userStatusReducer = function userStatusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userStatusInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.SET_LOGGED_IN_STATUS:
      return _objectSpread({}, state, action.userStatus);

    default:
      return state;
  }
};

var loaderReducer = function loaderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : loaderInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    /**
     * loadInProceess increase the value,
     * if the dispatch method incrementLoaderQueue triggers
     */
    case _constants.default.INCREMENT_LOADER_QUEUE:
      return _objectSpread({}, state, {
        loadInProgress: state.loadInProgress + 1,
        loading: Boolean(state.loadInProgress + 1)
      });

    /**
     * loadInProceess decrease the value,
     * if the dispatch method decrementLoaderQueue triggers
     */

    case _constants.default.DECREMENT_LOADER_QUEUE:
      return _objectSpread({}, state, {
        loadInProgress: state.loadInProgress - 1,
        loading: Boolean(state.loadInProgress - 1)
      });

    default:
      return state;
  }
};
/**
 * Setting default status on APP init for logged in user having access token
 * to be present in local storage.
 * User will be forced to logout if invalid accessToken is present
 * which will be validated on APP init.
 */


var globalReducer = (0, _redux.combineReducers)({
  loader: loaderReducer,
  userStatus: userStatusReducer
});
exports.globalReducer = globalReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9nbG9iYWwudHMiXSwibmFtZXMiOlsidXNlclN0YXR1c0luaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJsb2dnZWRJbiIsIkJvb2xlYW4iLCJzdG9yYWdlIiwiZ2V0SXRlbSIsIkFwcFByb3BlcnRpZXMiLCJBQ0NFU1NfVE9LRU5fS0VZIiwicmVzZXRQYXNzd29yZCIsImxvYWRlckluaXRpYWxTdGF0ZSIsImxvYWRJblByb2dyZXNzIiwidXNlclN0YXR1c1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDb25zdGFudHMiLCJTRVRfTE9HR0VEX0lOX1NUQVRVUyIsInVzZXJTdGF0dXMiLCJsb2FkZXJSZWR1Y2VyIiwiSU5DUkVNRU5UX0xPQURFUl9RVUVVRSIsIkRFQ1JFTUVOVF9MT0FERVJfUVVFVUUiLCJnbG9iYWxSZWR1Y2VyIiwibG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBWUEsSUFBTUEsc0JBQXNCLEdBQUc7QUFDN0JDLEVBQUFBLE9BQU8sRUFBRSxLQURvQjtBQUU3QkMsRUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLGlCQUFRQyxPQUFSLENBQWdCQywyQkFBY0MsZ0JBQTlCLENBQUQsQ0FGWTtBQUc3QkMsRUFBQUEsYUFBYSxFQUFFO0FBSGMsQ0FBL0I7QUFNQSxJQUFNQyxrQkFBa0IsR0FBRztBQUN6QkMsRUFBQUEsY0FBYyxFQUFFO0FBRFMsQ0FBM0I7O0FBSUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFpRDtBQUFBLE1BQWhEQyxLQUFnRCx1RUFBeENaLHNCQUF3QztBQUFBLE1BQWhCYSxNQUFnQjs7QUFDekUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsbUJBQVVDLG9CQUFmO0FBQ0UsK0JBQ0tKLEtBREwsRUFFS0MsTUFBTSxDQUFDSSxVQUZaOztBQUlGO0FBQ0UsYUFBT0wsS0FBUDtBQVBKO0FBU0QsQ0FWRDs7QUFZQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQTZDO0FBQUEsTUFBNUNOLEtBQTRDLHVFQUFwQ0gsa0JBQW9DO0FBQUEsTUFBaEJJLE1BQWdCOztBQUNqRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRTs7OztBQUlBLFNBQUtDLG1CQUFVSSxzQkFBZjtBQUNFLCtCQUNLUCxLQURMO0FBRUVGLFFBQUFBLGNBQWMsRUFBRUUsS0FBSyxDQUFDRixjQUFOLEdBQXVCLENBRnpDO0FBR0VULFFBQUFBLE9BQU8sRUFBRUUsT0FBTyxDQUFDUyxLQUFLLENBQUNGLGNBQU4sR0FBdUIsQ0FBeEI7QUFIbEI7O0FBS0Y7Ozs7O0FBSUEsU0FBS0ssbUJBQVVLLHNCQUFmO0FBQ0UsK0JBQ0tSLEtBREw7QUFFRUYsUUFBQUEsY0FBYyxFQUFFRSxLQUFLLENBQUNGLGNBQU4sR0FBdUIsQ0FGekM7QUFHRVQsUUFBQUEsT0FBTyxFQUFFRSxPQUFPLENBQUNTLEtBQUssQ0FBQ0YsY0FBTixHQUF1QixDQUF4QjtBQUhsQjs7QUFLRjtBQUNFLGFBQU9FLEtBQVA7QUF0Qko7QUF3QkQsQ0F6QkQ7QUE0QkE7Ozs7Ozs7O0FBV08sSUFBTVMsYUFBYSxHQUFHLDRCQUFnQjtBQUMzQ0MsRUFBQUEsTUFBTSxFQUFFSixhQURtQztBQUUzQ0QsRUFBQUEsVUFBVSxFQUFFTjtBQUYrQixDQUFoQixDQUF0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9nbG9iYWwvY29uc3RhbnRzJztcbmltcG9ydCB7IEFwcFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdGFudHMvYXBwbGljYXRpb24ucHJvcGVydGllcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi91dGlscy9zdG9yYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlclN0YXR1c2xSZWR1Y2VyIHtcbiAgbG9nZ2VkSW46IGJvb2xlYW4sXG4gIHJlc2V0UGFzc3dvcmQ6IGJvb2xlYW4sXG4gIGxvYWRpbmc6IGJvb2xlYW5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUxvYWRlclJlZHVjZXIge1xuICBsb2FkSW5Qcm9ncmVzczogbnVtYmVyLFxuICBsb2FkaW5nOiBib29sZWFuXG59XG5cbmNvbnN0IHVzZXJTdGF0dXNJbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRpbmc6IGZhbHNlLFxuICBsb2dnZWRJbjogQm9vbGVhbihzdG9yYWdlLmdldEl0ZW0oQXBwUHJvcGVydGllcy5BQ0NFU1NfVE9LRU5fS0VZKSksXG4gIHJlc2V0UGFzc3dvcmQ6IGZhbHNlXG59O1xuXG5jb25zdCBsb2FkZXJJbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRJblByb2dyZXNzOiAwXG59O1xuXG5jb25zdCB1c2VyU3RhdHVzUmVkdWNlciA9IChzdGF0ZSA9IHVzZXJTdGF0dXNJbml0aWFsU3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENvbnN0YW50cy5TRVRfTE9HR0VEX0lOX1NUQVRVUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24udXNlclN0YXR1c1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBsb2FkZXJSZWR1Y2VyID0gKHN0YXRlID0gbG9hZGVySW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgLyoqXG4gICAgICogbG9hZEluUHJvY2Vlc3MgaW5jcmVhc2UgdGhlIHZhbHVlLFxuICAgICAqIGlmIHRoZSBkaXNwYXRjaCBtZXRob2QgaW5jcmVtZW50TG9hZGVyUXVldWUgdHJpZ2dlcnNcbiAgICAgKi9cbiAgICBjYXNlIENvbnN0YW50cy5JTkNSRU1FTlRfTE9BREVSX1FVRVVFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRJblByb2dyZXNzOiBzdGF0ZS5sb2FkSW5Qcm9ncmVzcyArIDEsXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4oc3RhdGUubG9hZEluUHJvZ3Jlc3MgKyAxKVxuICAgICAgfTtcbiAgICAvKipcbiAgICAgKiBsb2FkSW5Qcm9jZWVzcyBkZWNyZWFzZSB0aGUgdmFsdWUsXG4gICAgICogaWYgdGhlIGRpc3BhdGNoIG1ldGhvZCBkZWNyZW1lbnRMb2FkZXJRdWV1ZSB0cmlnZ2Vyc1xuICAgICAqL1xuICAgIGNhc2UgQ29uc3RhbnRzLkRFQ1JFTUVOVF9MT0FERVJfUVVFVUU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZEluUHJvZ3Jlc3M6IHN0YXRlLmxvYWRJblByb2dyZXNzIC0gMSxcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbihzdGF0ZS5sb2FkSW5Qcm9ncmVzcyAtIDEpXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTZXR0aW5nIGRlZmF1bHQgc3RhdHVzIG9uIEFQUCBpbml0IGZvciBsb2dnZWQgaW4gdXNlciBoYXZpbmcgYWNjZXNzIHRva2VuXG4gKiB0byBiZSBwcmVzZW50IGluIGxvY2FsIHN0b3JhZ2UuXG4gKiBVc2VyIHdpbGwgYmUgZm9yY2VkIHRvIGxvZ291dCBpZiBpbnZhbGlkIGFjY2Vzc1Rva2VuIGlzIHByZXNlbnRcbiAqIHdoaWNoIHdpbGwgYmUgdmFsaWRhdGVkIG9uIEFQUCBpbml0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElHbG9iYWxSZWR1Y2VyIHtcbiAgdXNlclN0YXR1czogSVVzZXJTdGF0dXNsUmVkdWNlcixcbiAgbG9hZGVyOiBJTG9hZGVyUmVkdWNlclxufVxuXG5leHBvcnQgY29uc3QgZ2xvYmFsUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGxvYWRlcjogbG9hZGVyUmVkdWNlcixcbiAgdXNlclN0YXR1czogdXNlclN0YXR1c1JlZHVjZXJcbn0pO1xuIl19