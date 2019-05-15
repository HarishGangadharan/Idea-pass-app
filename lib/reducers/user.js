"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/user/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  loading: false,
  total: 0,
  user: null,
  users: []
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.FETCH_USERS:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_USERS_FAIL:
      return _objectSpread({}, state, {
        loading: false
      });

    case _constants.default.FETCH_USERS_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        total: action.response.data.total,
        users: action.response.data.data
      });

    case _constants.default.LOGIN_USER:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.LOGIN_USER_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        user: action.response
      });

    case _constants.default.LOGIN_USER_FAIL:
      return _objectSpread({}, state, {
        loading: false
      });

    case _constants.default.LOGOUT_USER:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.LOGOUT_USER_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        user: null
      });

    case _constants.default.LOGOUT_USER_FAIL:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
};

exports.userReducer = userReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91c2VyLnRzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxvYWRpbmciLCJ0b3RhbCIsInVzZXIiLCJ1c2VycyIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ29uc3RhbnRzIiwiRkVUQ0hfVVNFUlMiLCJGRVRDSF9VU0VSU19GQUlMIiwiRkVUQ0hfVVNFUlNfU1VDQ0VTUyIsInJlc3BvbnNlIiwiZGF0YSIsIkxPR0lOX1VTRVIiLCJMT0dJTl9VU0VSX1NVQ0NFU1MiLCJMT0dJTl9VU0VSX0ZBSUwiLCJMT0dPVVRfVVNFUiIsIkxPR09VVF9VU0VSX1NVQ0NFU1MiLCJMT0dPVVRfVVNFUl9GQUlMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxFQUFBQSxPQUFPLEVBQUUsS0FEVTtBQUVuQkMsRUFBQUEsS0FBSyxFQUFFLENBRlk7QUFHbkJDLEVBQUFBLElBQUksRUFBRSxJQUhhO0FBSW5CQyxFQUFBQSxLQUFLLEVBQUU7QUFKWSxDQUFyQjs7QUFnQk8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FHdEI7QUFBQSxNQUZIQyxLQUVHLHVFQUZtQk4sWUFFbkI7QUFBQSxNQURITyxNQUNHOztBQUNILFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1CQUFVQyxXQUFmO0FBQ0UsK0JBQ0tKLEtBREw7QUFFRUwsUUFBQUEsT0FBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS1EsbUJBQVVFLGdCQUFmO0FBQ0UsK0JBQ0tMLEtBREw7QUFFRUwsUUFBQUEsT0FBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS1EsbUJBQVVHLG1CQUFmO0FBQ0UsK0JBQ0tOLEtBREw7QUFFRUwsUUFBQUEsT0FBTyxFQUFFLEtBRlg7QUFHRUMsUUFBQUEsS0FBSyxFQUFFSyxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCWixLQUg5QjtBQUlFRSxRQUFBQSxLQUFLLEVBQUVHLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJBO0FBSjlCOztBQU1GLFNBQUtMLG1CQUFVTSxVQUFmO0FBQ0UsK0JBQ0tULEtBREw7QUFFRUwsUUFBQUEsT0FBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS1EsbUJBQVVPLGtCQUFmO0FBQ0UsK0JBQ0tWLEtBREw7QUFFRUwsUUFBQUEsT0FBTyxFQUFFLEtBRlg7QUFHRUUsUUFBQUEsSUFBSSxFQUFFSSxNQUFNLENBQUNNO0FBSGY7O0FBS0YsU0FBS0osbUJBQVVRLGVBQWY7QUFDRSwrQkFDS1gsS0FETDtBQUVFTCxRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRixTQUFLUSxtQkFBVVMsV0FBZjtBQUNFLCtCQUNLWixLQURMO0FBRUVMLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtRLG1CQUFVVSxtQkFBZjtBQUNFLCtCQUNLYixLQURMO0FBRUVMLFFBQUFBLE9BQU8sRUFBRSxLQUZYO0FBR0VFLFFBQUFBLElBQUksRUFBRTtBQUhSOztBQUtGLFNBQUtNLG1CQUFVVyxnQkFBZjtBQUNFLCtCQUNLZCxLQURMO0FBRUVMLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGO0FBQ0UsYUFBT0ssS0FBUDtBQW5ESjtBQXFERCxDQXpETSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy91c2VyL2NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9hZGluZzogZmFsc2UsXG4gIHRvdGFsOiAwLFxuICB1c2VyOiBudWxsLFxuICB1c2VyczogW11cbn07XG5cbmltcG9ydCB7IElBY3Rpb25Qcm9wcyB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEl1c2VyUmVkdWNlciB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHVzZXI6IGFueTtcbiAgdXNlcnM6IGFueVtdO1xuICB0b3RhbDogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCB1c2VyUmVkdWNlciA9IChcbiAgc3RhdGU6IEl1c2VyUmVkdWNlciA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBJQWN0aW9uUHJvcHNcbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfVVNFUlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5GRVRDSF9VU0VSU19GQUlMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX1VTRVJTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHRvdGFsOiBhY3Rpb24ucmVzcG9uc2UuZGF0YS50b3RhbCxcbiAgICAgICAgdXNlcnM6IGFjdGlvbi5yZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuTE9HSU5fVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkxPR0lOX1VTRVJfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnJlc3BvbnNlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkxPR0lOX1VTRVJfRkFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5MT0dPVVRfVVNFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkxPR09VVF9VU0VSX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGxcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuTE9HT1VUX1VTRVJfRkFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl19