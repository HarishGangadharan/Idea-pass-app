"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/config/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var configInitialState = {
  categories: [],
  loading: false,
  models: [],
  permissionList: {}
};

var configReducer = function configReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : configInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.FETCH_CONFIG_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_CONFIG_SUCCESS:
      return _objectSpread({}, state, {
        categories: action.payload.permissionCategory ? _toConsumableArray(action.payload.permissionCategory) : _toConsumableArray(state.categories),
        loading: false,
        models: action.payload.registeredModels ? _toConsumableArray(action.payload.registeredModels) : state.models,
        permissionList: action.payload.permissionTable ? _objectSpread({}, action.payload.permissionTable) : _objectSpread({}, state.permissionList)
      });

    case _constants.default.FETCH_CONFIG_FAILURE:
      return configInitialState;

    default:
      return state;
  }
};

exports.configReducer = configReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb25maWcudHMiXSwibmFtZXMiOlsiY29uZmlnSW5pdGlhbFN0YXRlIiwiY2F0ZWdvcmllcyIsImxvYWRpbmciLCJtb2RlbHMiLCJwZXJtaXNzaW9uTGlzdCIsImNvbmZpZ1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDb25zdGFudHMiLCJGRVRDSF9DT05GSUdfUkVRVUVTVCIsIkZFVENIX0NPTkZJR19TVUNDRVNTIiwicGF5bG9hZCIsInBlcm1pc3Npb25DYXRlZ29yeSIsInJlZ2lzdGVyZWRNb2RlbHMiLCJwZXJtaXNzaW9uVGFibGUiLCJGRVRDSF9DT05GSUdfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTUEsa0JBQWtDLEdBQUc7QUFDekNDLEVBQUFBLFVBQVUsRUFBRSxFQUQ2QjtBQUV6Q0MsRUFBQUEsT0FBTyxFQUFFLEtBRmdDO0FBR3pDQyxFQUFBQSxNQUFNLEVBQUUsRUFIaUM7QUFJekNDLEVBQUFBLGNBQWMsRUFBRTtBQUp5QixDQUEzQzs7QUFPTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQXNGO0FBQUEsTUFBckZDLEtBQXFGLHVFQUE3RE4sa0JBQTZEO0FBQUEsTUFBekNPLE1BQXlDOztBQUNqSCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyxtQkFBVUMsb0JBQWY7QUFDRSwrQkFDS0osS0FETDtBQUVFSixRQUFBQSxPQUFPLEVBQUU7QUFGWDs7QUFJRixTQUFLTyxtQkFBVUUsb0JBQWY7QUFDRSwrQkFDS0wsS0FETDtBQUVFTCxRQUFBQSxVQUFVLEVBQUVNLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxrQkFBZixzQkFBd0NOLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxrQkFBdkQsdUJBQWlGUCxLQUFLLENBQUNMLFVBQXZGLENBRmQ7QUFHRUMsUUFBQUEsT0FBTyxFQUFFLEtBSFg7QUFJRUMsUUFBQUEsTUFBTSxFQUFFSSxNQUFNLENBQUNLLE9BQVAsQ0FBZUUsZ0JBQWYsc0JBQXNDUCxNQUFNLENBQUNLLE9BQVAsQ0FBZUUsZ0JBQXJELElBQXlFUixLQUFLLENBQUNILE1BSnpGO0FBS0VDLFFBQUFBLGNBQWMsRUFBRUcsTUFBTSxDQUFDSyxPQUFQLENBQWVHLGVBQWYscUJBQXFDUixNQUFNLENBQUNLLE9BQVAsQ0FBZUcsZUFBcEQsc0JBQTJFVCxLQUFLLENBQUNGLGNBQWpGO0FBTGxCOztBQU9GLFNBQUtLLG1CQUFVTyxvQkFBZjtBQUNFLGFBQU9oQixrQkFBUDs7QUFDRjtBQUNFLGFBQU9NLEtBQVA7QUFqQko7QUFtQkQsQ0FwQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQWN0aW9uUHJvcHMgfSBmcm9tICcuJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vYWN0aW9ucy9jb25maWcvY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnUmVkdWNlciB7XG4gIGNhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICBtb2RlbHM6IHN0cmluZ1tdO1xuICBwZXJtaXNzaW9uTGlzdDogYW55O1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBjb25maWdJbml0aWFsU3RhdGU6IElDb25maWdSZWR1Y2VyID0ge1xuICBjYXRlZ29yaWVzOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIG1vZGVsczogW10sXG4gIHBlcm1pc3Npb25MaXN0OiB7fVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ1JlZHVjZXIgPSAoc3RhdGU6IElDb25maWdSZWR1Y2VyID0gY29uZmlnSW5pdGlhbFN0YXRlLCBhY3Rpb246IElBY3Rpb25Qcm9wcyk6IElDb25maWdSZWR1Y2VyID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX0NPTkZJR19SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfQ09ORklHX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWQucGVybWlzc2lvbkNhdGVnb3J5ID8gWy4uLmFjdGlvbi5wYXlsb2FkLnBlcm1pc3Npb25DYXRlZ29yeV0gOiBbLi4uc3RhdGUuY2F0ZWdvcmllc10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBtb2RlbHM6IGFjdGlvbi5wYXlsb2FkLnJlZ2lzdGVyZWRNb2RlbHMgPyBbLi4uYWN0aW9uLnBheWxvYWQucmVnaXN0ZXJlZE1vZGVsc10gOiBzdGF0ZS5tb2RlbHMsXG4gICAgICAgIHBlcm1pc3Npb25MaXN0OiBhY3Rpb24ucGF5bG9hZC5wZXJtaXNzaW9uVGFibGUgPyB7Li4uYWN0aW9uLnBheWxvYWQucGVybWlzc2lvblRhYmxlfSA6IHsuLi5zdGF0ZS5wZXJtaXNzaW9uTGlzdH1cbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfQ09ORklHX0ZBSUxVUkU6XG4gICAgICByZXR1cm4gY29uZmlnSW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG4iXX0=