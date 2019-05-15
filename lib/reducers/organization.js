"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.organizationReducers = void 0;

var _redux = require("redux");

var _constants = _interopRequireDefault(require("../actions/organization/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var listInitialState = {
  data: [],
  loading: false,
  total: 0
};
var organizationInitialState = {
  applicationName: '',
  email: '',
  isActive: true,
  loading: false,
  name: ''
};

var organizationReducer = function organizationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : organizationInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.CREATE_ORGANIZATION_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.CREATE_ORGANIZATION_SUCCESS:
      return organizationInitialState;

    case _constants.default.CREATE_ORGANIZATION_FAILURE:
      return organizationInitialState;

    case _constants.default.FETCH_ORGANIZATION_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_ORGANIZATION_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      }, action.payload);

    case _constants.default.FETCH_ORGANIZATION_FAILURE:
      return organizationInitialState;

    default:
      return state;
  }
};

var organizationListReducer = function organizationListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : listInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.FETCH_ORGANIZATION_LIST_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_ORGANIZATION_LIST_SUCCESS:
      return _objectSpread({}, state, {
        data: action.payload.data,
        loading: false,
        total: action.payload.total
      });

    case _constants.default.FETCH_ORGANIZATION_LIST_FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
};

var organizationReducers = (0, _redux.combineReducers)({
  currentOrganization: organizationReducer,
  list: organizationListReducer
});
exports.organizationReducers = organizationReducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9vcmdhbml6YXRpb24udHMiXSwibmFtZXMiOlsibGlzdEluaXRpYWxTdGF0ZSIsImRhdGEiLCJsb2FkaW5nIiwidG90YWwiLCJvcmdhbml6YXRpb25Jbml0aWFsU3RhdGUiLCJhcHBsaWNhdGlvbk5hbWUiLCJlbWFpbCIsImlzQWN0aXZlIiwibmFtZSIsIm9yZ2FuaXphdGlvblJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDb25zdGFudHMiLCJDUkVBVEVfT1JHQU5JWkFUSU9OX1JFUVVFU1QiLCJDUkVBVEVfT1JHQU5JWkFUSU9OX1NVQ0NFU1MiLCJDUkVBVEVfT1JHQU5JWkFUSU9OX0ZBSUxVUkUiLCJGRVRDSF9PUkdBTklaQVRJT05fUkVRVUVTVCIsIkZFVENIX09SR0FOSVpBVElPTl9TVUNDRVNTIiwicGF5bG9hZCIsIkZFVENIX09SR0FOSVpBVElPTl9GQUlMVVJFIiwib3JnYW5pemF0aW9uTGlzdFJlZHVjZXIiLCJGRVRDSF9PUkdBTklaQVRJT05fTElTVF9SRVFVRVNUIiwiRkVUQ0hfT1JHQU5JWkFUSU9OX0xJU1RfU1VDQ0VTUyIsIkZFVENIX09SR0FOSVpBVElPTl9MSVNUX0ZBSUxVUkUiLCJvcmdhbml6YXRpb25SZWR1Y2VycyIsImN1cnJlbnRPcmdhbml6YXRpb24iLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7O0FBc0JBLElBQU1BLGdCQUFnQyxHQUFHO0FBQ3ZDQyxFQUFBQSxJQUFJLEVBQUUsRUFEaUM7QUFFdkNDLEVBQUFBLE9BQU8sRUFBRSxLQUY4QjtBQUd2Q0MsRUFBQUEsS0FBSyxFQUFFO0FBSGdDLENBQXpDO0FBTUEsSUFBTUMsd0JBQXVDLEdBQUc7QUFDOUNDLEVBQUFBLGVBQWUsRUFBRSxFQUQ2QjtBQUU5Q0MsRUFBQUEsS0FBSyxFQUFFLEVBRnVDO0FBRzlDQyxFQUFBQSxRQUFRLEVBQUUsSUFIb0M7QUFJOUNMLEVBQUFBLE9BQU8sRUFBRSxLQUpxQztBQUs5Q00sRUFBQUEsSUFBSSxFQUFFO0FBTHdDLENBQWhEOztBQVFBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBMEY7QUFBQSxNQUF6RkMsS0FBeUYsdUVBQWxFTix3QkFBa0U7QUFBQSxNQUF4Q08sTUFBd0M7O0FBQ3BILFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1CQUFVQywyQkFBZjtBQUNFLCtCQUNLSixLQURMO0FBRUVSLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtXLG1CQUFVRSwyQkFBZjtBQUNFLGFBQU9YLHdCQUFQOztBQUNGLFNBQUtTLG1CQUFVRywyQkFBZjtBQUNFLGFBQU9aLHdCQUFQOztBQUNGLFNBQUtTLG1CQUFVSSwwQkFBZjtBQUNFLCtCQUNLUCxLQURMO0FBRUVSLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtXLG1CQUFVSywwQkFBZjtBQUNFLCtCQUNLUixLQURMO0FBRUVSLFFBQUFBLE9BQU8sRUFBRTtBQUZYLFNBR0tTLE1BQU0sQ0FBQ1EsT0FIWjs7QUFLRixTQUFLTixtQkFBVU8sMEJBQWY7QUFDRSxhQUFPaEIsd0JBQVA7O0FBQ0Y7QUFDRSxhQUFPTSxLQUFQO0FBeEJKO0FBMEJELENBM0JEOztBQTZCQSxJQUFNVyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQW9GO0FBQUEsTUFBbkZYLEtBQW1GLHVFQUEzRFYsZ0JBQTJEO0FBQUEsTUFBekNXLE1BQXlDOztBQUNsSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxtQkFBVVMsK0JBQWY7QUFDRSwrQkFDS1osS0FETDtBQUVFUixRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRixTQUFLVyxtQkFBVVUsK0JBQWY7QUFDRSwrQkFDS2IsS0FETDtBQUVFVCxRQUFBQSxJQUFJLEVBQUVVLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlbEIsSUFGdkI7QUFHRUMsUUFBQUEsT0FBTyxFQUFFLEtBSFg7QUFJRUMsUUFBQUEsS0FBSyxFQUFFUSxNQUFNLENBQUNRLE9BQVAsQ0FBZWhCO0FBSnhCOztBQU1GLFNBQUtVLG1CQUFVVywrQkFBZjtBQUNFLCtCQUNLZCxLQURMO0FBRUVSLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGO0FBQ0UsYUFBT1EsS0FBUDtBQW5CSjtBQXFCRCxDQXRCRDs7QUF3Qk8sSUFBTWUsb0JBQW9CLEdBQUcsNEJBQWdCO0FBQ2xEQyxFQUFBQSxtQkFBbUIsRUFBRWpCLG1CQUQ2QjtBQUVsRGtCLEVBQUFBLElBQUksRUFBRU47QUFGNEMsQ0FBaEIsQ0FBN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBJQWN0aW9uUHJvcHMgfSBmcm9tICcuJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9vcmdhbml6YXRpb24vY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJT3JnYW5pemF0aW9uIHtcbiAgX2lkPzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3JnYW5pemF0aW9ucyB7XG4gIGRhdGE6IElPcmdhbml6YXRpb25bXTtcbiAgdG90YWw6IG51bWJlcjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJT3JnYW5pemF0aW9uUmVkdWNlciB7XG4gIGN1cnJlbnRPcmdhbml6YXRpb246IElPcmdhbml6YXRpb24sXG4gIGxpc3Q6IElPcmdhbml6YXRpb25zO1xufVxuXG5jb25zdCBsaXN0SW5pdGlhbFN0YXRlOiBJT3JnYW5pemF0aW9ucyA9IHtcbiAgZGF0YTogW10sXG4gIGxvYWRpbmc6IGZhbHNlLFxuICB0b3RhbDogMFxufTtcblxuY29uc3Qgb3JnYW5pemF0aW9uSW5pdGlhbFN0YXRlOiBJT3JnYW5pemF0aW9uID0ge1xuICBhcHBsaWNhdGlvbk5hbWU6ICcnLFxuICBlbWFpbDogJycsXG4gIGlzQWN0aXZlOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgbmFtZTogJydcbn07XG5cbmNvbnN0IG9yZ2FuaXphdGlvblJlZHVjZXIgPSAoc3RhdGU6IElPcmdhbml6YXRpb24gPSBvcmdhbml6YXRpb25Jbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvblByb3BzKTogSU9yZ2FuaXphdGlvbiA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENvbnN0YW50cy5DUkVBVEVfT1JHQU5JWkFUSU9OX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5DUkVBVEVfT1JHQU5JWkFUSU9OX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gb3JnYW5pemF0aW9uSW5pdGlhbFN0YXRlO1xuICAgIGNhc2UgQ29uc3RhbnRzLkNSRUFURV9PUkdBTklaQVRJT05fRkFJTFVSRTpcbiAgICAgIHJldHVybiBvcmdhbml6YXRpb25Jbml0aWFsU3RhdGU7XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfT1JHQU5JWkFUSU9OX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5GRVRDSF9PUkdBTklaQVRJT05fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfT1JHQU5JWkFUSU9OX0ZBSUxVUkU6XG4gICAgICByZXR1cm4gb3JnYW5pemF0aW9uSW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IG9yZ2FuaXphdGlvbkxpc3RSZWR1Y2VyID0gKHN0YXRlOiBJT3JnYW5pemF0aW9ucyA9IGxpc3RJbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvblByb3BzKTogSU9yZ2FuaXphdGlvbnMgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfT1JHQU5JWkFUSU9OX0xJU1RfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX09SR0FOSVpBVElPTl9MSVNUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQuZGF0YSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbFxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5GRVRDSF9PUkdBTklaQVRJT05fTElTVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBvcmdhbml6YXRpb25SZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGN1cnJlbnRPcmdhbml6YXRpb246IG9yZ2FuaXphdGlvblJlZHVjZXIsXG4gIGxpc3Q6IG9yZ2FuaXphdGlvbkxpc3RSZWR1Y2VyXG59KTtcbiJdfQ==