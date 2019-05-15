"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphiQlReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/graphiQl/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var graphiQlInitialState = {
  data: [],
  error: null,
  graphiQl: null,
  loading: false,
  response: null,
  total: 0
};

var graphiQlReducer = function graphiQlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : graphiQlInitialState;
  var actions = arguments.length > 1 ? arguments[1] : undefined;

  switch (actions.type) {
    case _constants.default.CREATE_UPDATE_QUERY_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.CREATE_UPDATE_QUERY_SUCCESS:
      return _objectSpread({}, state, {
        graphiQl: null,
        loading: false,
        response: actions.response
      });

    case _constants.default.CREATE_UPDATE_QUERY_FAIL:
      return _objectSpread({}, state, {
        error: actions.error,
        loading: false
      });

    case _constants.default.FETCH_QUERY_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_QUERY_SUCCESS:
      return _objectSpread({}, state, {
        graphiQl: actions.response,
        loading: false
      });

    case _constants.default.FETCH_QUERY_FAIL:
      return _objectSpread({}, state, {
        error: actions.error,
        loading: false
      });

    case _constants.default.FETCH_QUERY_LIST_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_QUERY_LIST_SUCCESS:
      return _objectSpread({}, state, {
        data: actions.response.data,
        loading: false,
        total: actions.response.total
      });

    case _constants.default.FETCH_QUERY_LIST_FAIL:
      return _objectSpread({}, state, {
        error: actions.error,
        loading: false
      });

    default:
      return state;
  }
};

exports.graphiQlReducer = graphiQlReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9ncmFwaGlRbC50cyJdLCJuYW1lcyI6WyJncmFwaGlRbEluaXRpYWxTdGF0ZSIsImRhdGEiLCJlcnJvciIsImdyYXBoaVFsIiwibG9hZGluZyIsInJlc3BvbnNlIiwidG90YWwiLCJncmFwaGlRbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbnMiLCJ0eXBlIiwiR3JhcGhpUWxDb25zdGFudHMiLCJDUkVBVEVfVVBEQVRFX1FVRVJZX1JFUVVFU1QiLCJDUkVBVEVfVVBEQVRFX1FVRVJZX1NVQ0NFU1MiLCJDUkVBVEVfVVBEQVRFX1FVRVJZX0ZBSUwiLCJGRVRDSF9RVUVSWV9SRVFVRVNUIiwiRkVUQ0hfUVVFUllfU1VDQ0VTUyIsIkZFVENIX1FVRVJZX0ZBSUwiLCJGRVRDSF9RVUVSWV9MSVNUX1JFUVVFU1QiLCJGRVRDSF9RVUVSWV9MSVNUX1NVQ0NFU1MiLCJGRVRDSF9RVUVSWV9MSVNUX0ZBSUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7QUFXQSxJQUFNQSxvQkFBc0MsR0FBRztBQUM3Q0MsRUFBQUEsSUFBSSxFQUFFLEVBRHVDO0FBRTdDQyxFQUFBQSxLQUFLLEVBQUUsSUFGc0M7QUFHN0NDLEVBQUFBLFFBQVEsRUFBRSxJQUhtQztBQUk3Q0MsRUFBQUEsT0FBTyxFQUFFLEtBSm9DO0FBSzdDQyxFQUFBQSxRQUFRLEVBQUUsSUFMbUM7QUFNN0NDLEVBQUFBLEtBQUssRUFBRTtBQU5zQyxDQUEvQzs7QUFTTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQTJFO0FBQUEsTUFBMUVDLEtBQTBFLHVFQUFoRFIsb0JBQWdEO0FBQUEsTUFBMUJTLE9BQTBCOztBQUN4RyxVQUFRQSxPQUFPLENBQUNDLElBQWhCO0FBQ0UsU0FBS0MsbUJBQWtCQywyQkFBdkI7QUFDRSwrQkFDS0osS0FETDtBQUVFSixRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRixTQUFLTyxtQkFBa0JFLDJCQUF2QjtBQUNFLCtCQUNLTCxLQURMO0FBRUVMLFFBQUFBLFFBQVEsRUFBRSxJQUZaO0FBR0VDLFFBQUFBLE9BQU8sRUFBRSxLQUhYO0FBSUVDLFFBQUFBLFFBQVEsRUFBRUksT0FBTyxDQUFDSjtBQUpwQjs7QUFNRixTQUFLTSxtQkFBa0JHLHdCQUF2QjtBQUNFLCtCQUNLTixLQURMO0FBRUVOLFFBQUFBLEtBQUssRUFBRU8sT0FBTyxDQUFDUCxLQUZqQjtBQUdFRSxRQUFBQSxPQUFPLEVBQUU7QUFIWDs7QUFLQSxTQUFLTyxtQkFBa0JJLG1CQUF2QjtBQUNBLCtCQUNLUCxLQURMO0FBRUVKLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtPLG1CQUFrQkssbUJBQXZCO0FBQ0UsK0JBQ0tSLEtBREw7QUFFRUwsUUFBQUEsUUFBUSxFQUFFTSxPQUFPLENBQUNKLFFBRnBCO0FBR0VELFFBQUFBLE9BQU8sRUFBRTtBQUhYOztBQUtGLFNBQUtPLG1CQUFrQk0sZ0JBQXZCO0FBQ0UsK0JBQ0tULEtBREw7QUFFRU4sUUFBQUEsS0FBSyxFQUFFTyxPQUFPLENBQUNQLEtBRmpCO0FBR0VFLFFBQUFBLE9BQU8sRUFBRTtBQUhYOztBQU1GLFNBQUtPLG1CQUFrQk8sd0JBQXZCO0FBQ0UsK0JBQ0tWLEtBREw7QUFFRUosUUFBQUEsT0FBTyxFQUFFO0FBRlg7O0FBSUYsU0FBS08sbUJBQWtCUSx3QkFBdkI7QUFDRSwrQkFDS1gsS0FETDtBQUVFUCxRQUFBQSxJQUFJLEVBQUVRLE9BQU8sQ0FBQ0osUUFBUixDQUFpQkosSUFGekI7QUFHRUcsUUFBQUEsT0FBTyxFQUFFLEtBSFg7QUFJRUUsUUFBQUEsS0FBSyxFQUFFRyxPQUFPLENBQUNKLFFBQVIsQ0FBaUJDO0FBSjFCOztBQU1GLFNBQUtLLG1CQUFrQlMscUJBQXZCO0FBQ0UsK0JBQ0taLEtBREw7QUFFRU4sUUFBQUEsS0FBSyxFQUFFTyxPQUFPLENBQUNQLEtBRmpCO0FBR0VFLFFBQUFBLE9BQU8sRUFBRTtBQUhYOztBQUtGO0FBQ0UsYUFBT0ksS0FBUDtBQXhESjtBQTBERCxDQTNETSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBY3Rpb25Qcm9wcyB9IGZyb20gJy4nO1xuaW1wb3J0IEdyYXBoaVFsQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvZ3JhcGhpUWwvY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJR3JhcGhpUWxSZWR1Y2VyIHtcbiAgbG9hZGluZzogYm9vbGVhbixcbiAgcmVzcG9uc2U6IGFueSxcbiAgZXJyb3I6IGFueSxcbiAgZ3JhcGhpUWw6IGFueSxcbiAgZGF0YTogYW55W10sXG4gIHRvdGFsOiBudW1iZXIsXG59XG5cbmNvbnN0IGdyYXBoaVFsSW5pdGlhbFN0YXRlOiBJR3JhcGhpUWxSZWR1Y2VyID0ge1xuICBkYXRhOiBbXSxcbiAgZXJyb3I6IG51bGwsXG4gIGdyYXBoaVFsOiBudWxsLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgcmVzcG9uc2U6IG51bGwsXG4gIHRvdGFsOiAwXG59O1xuXG5leHBvcnQgY29uc3QgZ3JhcGhpUWxSZWR1Y2VyID0gKHN0YXRlOiBJR3JhcGhpUWxSZWR1Y2VyID0gZ3JhcGhpUWxJbml0aWFsU3RhdGUsIGFjdGlvbnM6IElBY3Rpb25Qcm9wcykgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbnMudHlwZSkge1xuICAgIGNhc2UgR3JhcGhpUWxDb25zdGFudHMuQ1JFQVRFX1VQREFURV9RVUVSWV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBHcmFwaGlRbENvbnN0YW50cy5DUkVBVEVfVVBEQVRFX1FVRVJZX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZ3JhcGhpUWw6IG51bGwsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICByZXNwb25zZTogYWN0aW9ucy5yZXNwb25zZVxuICAgICAgfTtcbiAgICBjYXNlIEdyYXBoaVFsQ29uc3RhbnRzLkNSRUFURV9VUERBVEVfUVVFUllfRkFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogYWN0aW9ucy5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgICBjYXNlIEdyYXBoaVFsQ29uc3RhbnRzLkZFVENIX1FVRVJZX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIEdyYXBoaVFsQ29uc3RhbnRzLkZFVENIX1FVRVJZX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZ3JhcGhpUWw6IGFjdGlvbnMucmVzcG9uc2UsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGNhc2UgR3JhcGhpUWxDb25zdGFudHMuRkVUQ0hfUVVFUllfRkFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogYWN0aW9ucy5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH07XG5cbiAgICBjYXNlIEdyYXBoaVFsQ29uc3RhbnRzLkZFVENIX1FVRVJZX0xJU1RfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgR3JhcGhpUWxDb25zdGFudHMuRkVUQ0hfUVVFUllfTElTVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhdGE6IGFjdGlvbnMucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHRvdGFsOiBhY3Rpb25zLnJlc3BvbnNlLnRvdGFsXG4gICAgICB9O1xuICAgIGNhc2UgR3JhcGhpUWxDb25zdGFudHMuRkVUQ0hfUVVFUllfTElTVF9GQUlMOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBhY3Rpb25zLmVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl19