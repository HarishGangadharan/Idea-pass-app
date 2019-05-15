"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleReducers = void 0;

var _redux = require("redux");

var _constants = _interopRequireDefault(require("../actions/role/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var listInitialState = {
  data: [],
  loading: false,
  total: 0
};
var roleInitialState = {
  applicationName: '',
  email: '',
  isActive: true,
  loading: false,
  name: ''
};

var roleReducer = function roleReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : roleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.CREATE_ROLE_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.CREATE_ROLE_SUCCESS:
      return roleInitialState;

    case _constants.default.CREATE_ROLE_FAILURE:
      return roleInitialState;

    case _constants.default.FETCH_ROLE_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_ROLE_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      }, action.payload);

    case _constants.default.FETCH_ROLE_FAILURE:
      return roleInitialState;

    default:
      return state;
  }
};

var roleListReducer = function roleListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : listInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.FETCH_ROLE_LIST_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_ROLE_LIST_SUCCESS:
      return _objectSpread({}, state, {
        data: action.payload.data,
        loading: false,
        total: action.payload.total
      });

    case _constants.default.FETCH_ROLE_LIST_FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
};

var roleReducers = (0, _redux.combineReducers)({
  currentRole: roleReducer,
  list: roleListReducer
});
exports.roleReducers = roleReducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yb2xlLnRzIl0sIm5hbWVzIjpbImxpc3RJbml0aWFsU3RhdGUiLCJkYXRhIiwibG9hZGluZyIsInRvdGFsIiwicm9sZUluaXRpYWxTdGF0ZSIsImFwcGxpY2F0aW9uTmFtZSIsImVtYWlsIiwiaXNBY3RpdmUiLCJuYW1lIiwicm9sZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDb25zdGFudHMiLCJDUkVBVEVfUk9MRV9SRVFVRVNUIiwiQ1JFQVRFX1JPTEVfU1VDQ0VTUyIsIkNSRUFURV9ST0xFX0ZBSUxVUkUiLCJGRVRDSF9ST0xFX1JFUVVFU1QiLCJGRVRDSF9ST0xFX1NVQ0NFU1MiLCJwYXlsb2FkIiwiRkVUQ0hfUk9MRV9GQUlMVVJFIiwicm9sZUxpc3RSZWR1Y2VyIiwiRkVUQ0hfUk9MRV9MSVNUX1JFUVVFU1QiLCJGRVRDSF9ST0xFX0xJU1RfU1VDQ0VTUyIsIkZFVENIX1JPTEVfTElTVF9GQUlMVVJFIiwicm9sZVJlZHVjZXJzIiwiY3VycmVudFJvbGUiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7O0FBc0JBLElBQU1BLGdCQUF3QixHQUFHO0FBQy9CQyxFQUFBQSxJQUFJLEVBQUUsRUFEeUI7QUFFL0JDLEVBQUFBLE9BQU8sRUFBRSxLQUZzQjtBQUcvQkMsRUFBQUEsS0FBSyxFQUFFO0FBSHdCLENBQWpDO0FBTUEsSUFBTUMsZ0JBQXVCLEdBQUc7QUFDOUJDLEVBQUFBLGVBQWUsRUFBRSxFQURhO0FBRTlCQyxFQUFBQSxLQUFLLEVBQUUsRUFGdUI7QUFHOUJDLEVBQUFBLFFBQVEsRUFBRSxJQUhvQjtBQUk5QkwsRUFBQUEsT0FBTyxFQUFFLEtBSnFCO0FBSzlCTSxFQUFBQSxJQUFJLEVBQUU7QUFMd0IsQ0FBaEM7O0FBUUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBa0U7QUFBQSxNQUFqRUMsS0FBaUUsdUVBQWxETixnQkFBa0Q7QUFBQSxNQUFoQ08sTUFBZ0M7O0FBQ3BGLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1CQUFVQyxtQkFBZjtBQUNFLCtCQUNLSixLQURMO0FBRUVSLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtXLG1CQUFVRSxtQkFBZjtBQUNFLGFBQU9YLGdCQUFQOztBQUNGLFNBQUtTLG1CQUFVRyxtQkFBZjtBQUNFLGFBQU9aLGdCQUFQOztBQUNGLFNBQUtTLG1CQUFVSSxrQkFBZjtBQUNFLCtCQUNLUCxLQURMO0FBRUVSLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtXLG1CQUFVSyxrQkFBZjtBQUNFLCtCQUNLUixLQURMO0FBRUVSLFFBQUFBLE9BQU8sRUFBRTtBQUZYLFNBR0tTLE1BQU0sQ0FBQ1EsT0FIWjs7QUFLRixTQUFLTixtQkFBVU8sa0JBQWY7QUFDRSxhQUFPaEIsZ0JBQVA7O0FBQ0Y7QUFDRSxhQUFPTSxLQUFQO0FBeEJKO0FBMEJELENBM0JEOztBQTZCQSxJQUFNVyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQW9FO0FBQUEsTUFBbkVYLEtBQW1FLHVFQUFuRFYsZ0JBQW1EO0FBQUEsTUFBakNXLE1BQWlDOztBQUMxRixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxtQkFBVVMsdUJBQWY7QUFDRSwrQkFDS1osS0FETDtBQUVFUixRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRixTQUFLVyxtQkFBVVUsdUJBQWY7QUFDRSwrQkFDS2IsS0FETDtBQUVFVCxRQUFBQSxJQUFJLEVBQUVVLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlbEIsSUFGdkI7QUFHRUMsUUFBQUEsT0FBTyxFQUFFLEtBSFg7QUFJRUMsUUFBQUEsS0FBSyxFQUFFUSxNQUFNLENBQUNRLE9BQVAsQ0FBZWhCO0FBSnhCOztBQU1GLFNBQUtVLG1CQUFVVyx1QkFBZjtBQUNFLCtCQUNLZCxLQURMO0FBRUVSLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGO0FBQ0UsYUFBT1EsS0FBUDtBQW5CSjtBQXFCRCxDQXRCRDs7QUF3Qk8sSUFBTWUsWUFBWSxHQUFHLDRCQUFnQjtBQUMxQ0MsRUFBQUEsV0FBVyxFQUFFakIsV0FENkI7QUFFMUNrQixFQUFBQSxJQUFJLEVBQUVOO0FBRm9DLENBQWhCLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgSUFjdGlvblByb3BzIH0gZnJvbSAnLic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvcm9sZS9jb25zdGFudHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElSb2xlIHtcbiAgX2lkPzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUm9sZXMge1xuICBkYXRhOiBJUm9sZVtdO1xuICB0b3RhbDogbnVtYmVyO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSb2xlUmVkdWNlciB7XG4gIGN1cnJlbnRSb2xlOiBJUm9sZSxcbiAgbGlzdDogSVJvbGVzO1xufVxuXG5jb25zdCBsaXN0SW5pdGlhbFN0YXRlOiBJUm9sZXMgPSB7XG4gIGRhdGE6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgdG90YWw6IDBcbn07XG5cbmNvbnN0IHJvbGVJbml0aWFsU3RhdGU6IElSb2xlID0ge1xuICBhcHBsaWNhdGlvbk5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIGlzQWN0aXZlOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgbmFtZTogJydcbn07XG5cbmNvbnN0IHJvbGVSZWR1Y2VyID0gKHN0YXRlOiBJUm9sZSA9IHJvbGVJbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvblByb3BzKTogSVJvbGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuQ1JFQVRFX1JPTEVfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkNSRUFURV9ST0xFX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gcm9sZUluaXRpYWxTdGF0ZTtcbiAgICBjYXNlIENvbnN0YW50cy5DUkVBVEVfUk9MRV9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHJvbGVJbml0aWFsU3RhdGU7XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfUk9MRV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfUk9MRV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5GRVRDSF9ST0xFX0ZBSUxVUkU6XG4gICAgICByZXR1cm4gcm9sZUluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCByb2xlTGlzdFJlZHVjZXIgPSAoc3RhdGU6IElSb2xlcyA9IGxpc3RJbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvblByb3BzKTogSVJvbGVzID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX1JPTEVfTElTVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfUk9MRV9MSVNUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbFxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5GRVRDSF9ST0xFX0xJU1RfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgcm9sZVJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgY3VycmVudFJvbGU6IHJvbGVSZWR1Y2VyLFxuICBsaXN0OiByb2xlTGlzdFJlZHVjZXJcbn0pO1xuIl19