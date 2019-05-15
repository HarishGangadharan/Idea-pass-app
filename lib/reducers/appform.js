"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appFormReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/appform/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appFormInitialState = {
  data: {},
  loading: false
};

var appFormReducer = function appFormReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appFormInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.SAVE_APP_FORM_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.SAVE_APP_FORM_SUCCESS:
      return _objectSpread({}, state, action.payload, {
        loading: false
      });

    case _constants.default.SAVE_APP_FORM_FAILURE:
      return _objectSpread({}, state, action.payload, {
        loading: false
      });

    case _constants.default.FETCH_APP_FORM_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_APP_FORM_SUCCESS:
      return _objectSpread({}, state, action.payload, {
        loading: false
      });

    case _constants.default.FETCH_APP_FORM_FAILURE:
      return _objectSpread({}, state, action.payload, {
        loading: false
      });

    default:
      return state;
  }
};

exports.appFormReducer = appFormReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9hcHBmb3JtLnRzIl0sIm5hbWVzIjpbImFwcEZvcm1Jbml0aWFsU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsImFwcEZvcm1SZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ29uc3RhbnRzIiwiU0FWRV9BUFBfRk9STV9SRVFVRVNUIiwiU0FWRV9BUFBfRk9STV9TVUNDRVNTIiwicGF5bG9hZCIsIlNBVkVfQVBQX0ZPUk1fRkFJTFVSRSIsIkZFVENIX0FQUF9GT1JNX1JFUVVFU1QiLCJGRVRDSF9BUFBfRk9STV9TVUNDRVNTIiwiRkVUQ0hfQVBQX0ZPUk1fRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7OztBQU9BLElBQU1BLG1CQUFvQyxHQUFHO0FBQzNDQyxFQUFBQSxJQUFJLEVBQUUsRUFEcUM7QUFFM0NDLEVBQUFBLE9BQU8sRUFBRTtBQUZrQyxDQUE3Qzs7QUFLTyxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQXlGO0FBQUEsTUFBeEZDLEtBQXdGLHVFQUEvREosbUJBQStEO0FBQUEsTUFBMUNLLE1BQTBDOztBQUNySCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxtQkFBVUMscUJBQWY7QUFDRSwrQkFDS0osS0FETDtBQUVFRixRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRixTQUFLSyxtQkFBVUUscUJBQWY7QUFDRSwrQkFDS0wsS0FETCxFQUVLQyxNQUFNLENBQUNLLE9BRlo7QUFHRVIsUUFBQUEsT0FBTyxFQUFFO0FBSFg7O0FBS0YsU0FBS0ssbUJBQVVJLHFCQUFmO0FBQ0UsK0JBQ0tQLEtBREwsRUFFS0MsTUFBTSxDQUFDSyxPQUZaO0FBR0VSLFFBQUFBLE9BQU8sRUFBRTtBQUhYOztBQUtGLFNBQUtLLG1CQUFVSyxzQkFBZjtBQUNFLCtCQUNLUixLQURMO0FBRUVGLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlBLFNBQUtLLG1CQUFVTSxzQkFBZjtBQUNFLCtCQUNLVCxLQURMLEVBRUtDLE1BQU0sQ0FBQ0ssT0FGWjtBQUdFUixRQUFBQSxPQUFPLEVBQUU7QUFIWDs7QUFLRixTQUFLSyxtQkFBVU8sc0JBQWY7QUFDRSwrQkFDS1YsS0FETCxFQUVLQyxNQUFNLENBQUNLLE9BRlo7QUFHRVIsUUFBQUEsT0FBTyxFQUFFO0FBSFg7O0FBS0o7QUFDRSxhQUFPRSxLQUFQO0FBcENKO0FBc0NELENBdkNNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFjdGlvblByb3BzIH0gZnJvbSAnLic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvYXBwZm9ybS9jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBGb3JtUmVkdWNlciB7XG4gIGRhdGE6IGFueTtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgYXBwRm9ybUluaXRpYWxTdGF0ZTogSUFwcEZvcm1SZWR1Y2VyID0ge1xuICBkYXRhOiB7fSxcbiAgbG9hZGluZzogZmFsc2Vcbn07XG5cbmV4cG9ydCBjb25zdCBhcHBGb3JtUmVkdWNlciA9IChzdGF0ZTogSUFwcEZvcm1SZWR1Y2VyID0gYXBwRm9ybUluaXRpYWxTdGF0ZSwgYWN0aW9uOiBJQWN0aW9uUHJvcHMpOiBJQXBwRm9ybVJlZHVjZXIgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuU0FWRV9BUFBfRk9STV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuU0FWRV9BUFBfRk9STV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5TQVZFX0FQUF9GT1JNX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX0FQUF9GT1JNX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX0FQUF9GT1JNX1NVQ0NFU1M6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX0FQUF9GT1JNX0ZBSUxVUkU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl19