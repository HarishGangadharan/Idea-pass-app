"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rolePermissionReducer = void 0;

var _constants = _interopRequireDefault(require("../actions/rolepermission/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var rolePermissionInitialState = {
  isSaveDisabled: true,
  loading: false,
  permissions: [],
  subject: '',
  tenant_id: '',
  updatedPermissions: []
};

var rolePermissionReducer = function rolePermissionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : rolePermissionInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.default.CREATE_ROLE_PERMISSION_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.CREATE_ROLE_PERMISSION_SUCCESS:
      return _objectSpread({}, action.payload, {
        isSaveDisabled: true,
        loading: false,
        updatedPermissions: []
      });

    case _constants.default.CREATE_ROLE_PERMISSION_FAILURE:
      return rolePermissionInitialState;

    case _constants.default.UPDATE_ROLE_PERMISSION_STATE:
      return _objectSpread({}, state, {
        isSaveDisabled: false,
        loading: false,
        permissions: state.permissions.map(function (permission) {
          if (permission.role_id === action.row.role_id) {
            return action.row;
          } else {
            return permission;
          }
        }),
        updatedPermissions: action.updatedPermissions
      });

    case _constants.default.FETCH_ROLE_PERMISSION_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _constants.default.FETCH_ROLE_PERMISSION_SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      }, action.payload);

    case _constants.default.FETCH_ROLE_PERMISSION_FAILURE:
      return rolePermissionInitialState;

    case _constants.default.RESET_ROLE_PERMISSION:
      return _objectSpread({}, rolePermissionInitialState, {
        updatedPermissions: []
      });

    case _constants.default.UPDATE_MANAGE_STATE:
      return _objectSpread({}, state, {
        isSaveDisabled: false,
        loading: false
      });

    case _constants.default.RESET_PERMISSION_STATE:
      return _objectSpread({}, rolePermissionInitialState, {
        tenant_id: ''
      });

    default:
      return state;
  }
};

exports.rolePermissionReducer = rolePermissionReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9yb2xlcGVybWlzc2lvbi50cyJdLCJuYW1lcyI6WyJyb2xlUGVybWlzc2lvbkluaXRpYWxTdGF0ZSIsImlzU2F2ZURpc2FibGVkIiwibG9hZGluZyIsInBlcm1pc3Npb25zIiwic3ViamVjdCIsInRlbmFudF9pZCIsInVwZGF0ZWRQZXJtaXNzaW9ucyIsInJvbGVQZXJtaXNzaW9uUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkNvbnN0YW50cyIsIkNSRUFURV9ST0xFX1BFUk1JU1NJT05fUkVRVUVTVCIsIkNSRUFURV9ST0xFX1BFUk1JU1NJT05fU1VDQ0VTUyIsInBheWxvYWQiLCJDUkVBVEVfUk9MRV9QRVJNSVNTSU9OX0ZBSUxVUkUiLCJVUERBVEVfUk9MRV9QRVJNSVNTSU9OX1NUQVRFIiwibWFwIiwicGVybWlzc2lvbiIsInJvbGVfaWQiLCJyb3ciLCJGRVRDSF9ST0xFX1BFUk1JU1NJT05fUkVRVUVTVCIsIkZFVENIX1JPTEVfUEVSTUlTU0lPTl9TVUNDRVNTIiwiRkVUQ0hfUk9MRV9QRVJNSVNTSU9OX0ZBSUxVUkUiLCJSRVNFVF9ST0xFX1BFUk1JU1NJT04iLCJVUERBVEVfTUFOQUdFX1NUQVRFIiwiUkVTRVRfUEVSTUlTU0lPTl9TVEFURSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7OztBQWlDQSxJQUFNQSwwQkFBa0QsR0FBRztBQUN6REMsRUFBQUEsY0FBYyxFQUFFLElBRHlDO0FBRXpEQyxFQUFBQSxPQUFPLEVBQUUsS0FGZ0Q7QUFHekRDLEVBQUFBLFdBQVcsRUFBRSxFQUg0QztBQUl6REMsRUFBQUEsT0FBTyxFQUFFLEVBSmdEO0FBS3pEQyxFQUFBQSxTQUFTLEVBQUUsRUFMOEM7QUFNekRDLEVBQUFBLGtCQUFrQixFQUFFO0FBTnFDLENBQTNEOztBQVNPLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBOEc7QUFBQSxNQUE3R0MsS0FBNkcsdUVBQTdFUiwwQkFBNkU7QUFBQSxNQUFqRFMsTUFBaUQ7O0FBQ2pKLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1CQUFVQyw4QkFBZjtBQUNFLCtCQUNLSixLQURMO0FBRUVOLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtTLG1CQUFVRSw4QkFBZjtBQUNFLCtCQUNLSixNQUFNLENBQUNLLE9BRFo7QUFFRWIsUUFBQUEsY0FBYyxFQUFFLElBRmxCO0FBR0VDLFFBQUFBLE9BQU8sRUFBRSxLQUhYO0FBSUVJLFFBQUFBLGtCQUFrQixFQUFFO0FBSnRCOztBQU1GLFNBQUtLLG1CQUFVSSw4QkFBZjtBQUNFLGFBQU9mLDBCQUFQOztBQUNGLFNBQUtXLG1CQUFVSyw0QkFBZjtBQUNFLCtCQUNLUixLQURMO0FBRUVQLFFBQUFBLGNBQWMsRUFBRSxLQUZsQjtBQUdFQyxRQUFBQSxPQUFPLEVBQUUsS0FIWDtBQUlFQyxRQUFBQSxXQUFXLEVBQUVLLEtBQUssQ0FBQ0wsV0FBTixDQUFrQmMsR0FBbEIsQ0FBc0IsVUFBQUMsVUFBVSxFQUFJO0FBQy9DLGNBQUlBLFVBQVUsQ0FBQ0MsT0FBWCxLQUF1QlYsTUFBTSxDQUFDVyxHQUFQLENBQVdELE9BQXRDLEVBQStDO0FBQzdDLG1CQUFPVixNQUFNLENBQUNXLEdBQWQ7QUFDRCxXQUZELE1BRU87QUFDTCxtQkFBT0YsVUFBUDtBQUNEO0FBQ0YsU0FOWSxDQUpmO0FBV0VaLFFBQUFBLGtCQUFrQixFQUFFRyxNQUFNLENBQUNIO0FBWDdCOztBQWFGLFNBQUtLLG1CQUFVVSw2QkFBZjtBQUNFLCtCQUNLYixLQURMO0FBRUVOLFFBQUFBLE9BQU8sRUFBRTtBQUZYOztBQUlGLFNBQUtTLG1CQUFVVyw2QkFBZjtBQUNFLCtCQUNLZCxLQURMO0FBRUVOLFFBQUFBLE9BQU8sRUFBRTtBQUZYLFNBR0tPLE1BQU0sQ0FBQ0ssT0FIWjs7QUFLRixTQUFLSCxtQkFBVVksNkJBQWY7QUFDRSxhQUFPdkIsMEJBQVA7O0FBQ0YsU0FBS1csbUJBQVVhLHFCQUFmO0FBQ0UsK0JBQ0t4QiwwQkFETDtBQUVFTSxRQUFBQSxrQkFBa0IsRUFBRTtBQUZ0Qjs7QUFJRixTQUFLSyxtQkFBVWMsbUJBQWY7QUFDRSwrQkFDS2pCLEtBREw7QUFFRVAsUUFBQUEsY0FBYyxFQUFFLEtBRmxCO0FBR0VDLFFBQUFBLE9BQU8sRUFBRTtBQUhYOztBQUtGLFNBQUtTLG1CQUFVZSxzQkFBZjtBQUNFLCtCQUNLMUIsMEJBREw7QUFFRUssUUFBQUEsU0FBUyxFQUFFO0FBRmI7O0FBSUY7QUFDRSxhQUFPRyxLQUFQO0FBM0RKO0FBNkRELENBOURNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFjdGlvblByb3BzIH0gZnJvbSAnLic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL2FjdGlvbnMvcm9sZXBlcm1pc3Npb24vY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBJUGVybWlzc2lvbiB7XG4gIHJvbGVfaWQ/OiBzdHJpbmcsXG4gIG5hbWU6IHN0cmluZyxcbiAgcGVybWlzc2lvbjoge1xuICAgIGNyZWF0ZToge1xuICAgICAgYWN0aW9uOiBzdHJpbmdcbiAgICB9LFxuICAgIGRlbGV0ZToge1xuICAgICAgYWN0aW9uOiBzdHJpbmdcbiAgICB9LFxuICAgIG1hbmFnZToge1xuICAgICAgYWN0aW9uOiBzdHJpbmdcbiAgICB9LFxuICAgIHVwZGF0ZToge1xuICAgICAgYWN0aW9uOiBzdHJpbmdcbiAgICB9LFxuICAgIHJlYWQ6IHtcbiAgICAgIGFjdGlvbjogc3RyaW5nXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvbGVQZXJtaXNzaW9uUmVkdWNlciB7XG4gIHN1YmplY3Q6IHN0cmluZztcbiAgdGVuYW50X2lkOiBzdHJpbmc7XG4gIHBlcm1pc3Npb25zOiBJUGVybWlzc2lvbltdO1xuICBpc1NhdmVEaXNhYmxlZDogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgdXBkYXRlZFBlcm1pc3Npb25zOiBhbnlbXVxufVxuXG5jb25zdCByb2xlUGVybWlzc2lvbkluaXRpYWxTdGF0ZTogSVJvbGVQZXJtaXNzaW9uUmVkdWNlciA9IHtcbiAgaXNTYXZlRGlzYWJsZWQ6IHRydWUsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBwZXJtaXNzaW9uczogW10sXG4gIHN1YmplY3Q6ICcnLFxuICB0ZW5hbnRfaWQ6ICcnLFxuICB1cGRhdGVkUGVybWlzc2lvbnM6IFtdXG59O1xuXG5leHBvcnQgY29uc3Qgcm9sZVBlcm1pc3Npb25SZWR1Y2VyID0gKHN0YXRlOiBJUm9sZVBlcm1pc3Npb25SZWR1Y2VyID0gcm9sZVBlcm1pc3Npb25Jbml0aWFsU3RhdGUsIGFjdGlvbjogSUFjdGlvblByb3BzKTogSVJvbGVQZXJtaXNzaW9uUmVkdWNlciA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENvbnN0YW50cy5DUkVBVEVfUk9MRV9QRVJNSVNTSU9OX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5DUkVBVEVfUk9MRV9QRVJNSVNTSU9OX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgaXNTYXZlRGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB1cGRhdGVkUGVybWlzc2lvbnM6IFtdXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkNSRUFURV9ST0xFX1BFUk1JU1NJT05fRkFJTFVSRTpcbiAgICAgIHJldHVybiByb2xlUGVybWlzc2lvbkluaXRpYWxTdGF0ZTtcbiAgICBjYXNlIENvbnN0YW50cy5VUERBVEVfUk9MRV9QRVJNSVNTSU9OX1NUQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU2F2ZURpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHBlcm1pc3Npb25zOiBzdGF0ZS5wZXJtaXNzaW9ucy5tYXAocGVybWlzc2lvbiA9PiB7XG4gICAgICAgICAgaWYgKHBlcm1pc3Npb24ucm9sZV9pZCA9PT0gYWN0aW9uLnJvdy5yb2xlX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnJvdztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBlcm1pc3Npb247XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdXBkYXRlZFBlcm1pc3Npb25zOiBhY3Rpb24udXBkYXRlZFBlcm1pc3Npb25zXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX1JPTEVfUEVSTUlTU0lPTl9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgY2FzZSBDb25zdGFudHMuRkVUQ0hfUk9MRV9QRVJNSVNTSU9OX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLkZFVENIX1JPTEVfUEVSTUlTU0lPTl9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHJvbGVQZXJtaXNzaW9uSW5pdGlhbFN0YXRlO1xuICAgIGNhc2UgQ29uc3RhbnRzLlJFU0VUX1JPTEVfUEVSTUlTU0lPTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJvbGVQZXJtaXNzaW9uSW5pdGlhbFN0YXRlLFxuICAgICAgICB1cGRhdGVkUGVybWlzc2lvbnM6IFtdXG4gICAgICB9O1xuICAgIGNhc2UgQ29uc3RhbnRzLlVQREFURV9NQU5BR0VfU1RBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTYXZlRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIENvbnN0YW50cy5SRVNFVF9QRVJNSVNTSU9OX1NUQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucm9sZVBlcm1pc3Npb25Jbml0aWFsU3RhdGUsXG4gICAgICAgIHRlbmFudF9pZDogJydcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcbiJdfQ==