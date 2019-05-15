"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RolePermissionService = function RolePermissionService() {
  _classCallCheck(this, RolePermissionService);
};

_defineProperty(RolePermissionService, "createRolePermission", function (data) {
  return (0, _axios.default)({
    data: data,
    method: 'patch',
    url: "/permissions"
  });
});

_defineProperty(RolePermissionService, "fetchRolePermission", function (tenantId, modelName) {
  return (0, _axios.default)({
    method: 'get',
    url: "/permissions?tenant_id=".concat(tenantId, "&subject=").concat(modelName)
  });
});

_defineProperty(RolePermissionService, "fetchRolePermissionRules", function (roles) {
  return (0, _axios.default)({
    /**
     * Here removeFromQueue starts true.
     * beacuse didn't receive the response,
     * so we create a boolean value to resolve by calling true.
     */
    data: {
      removeFromQueue: true
    },
    method: 'get',
    url: "/permissions?role_id=".concat(roles)
  });
});

var _default = RolePermissionService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9yb2xlcGVybWlzc2lvbi50cyJdLCJuYW1lcyI6WyJSb2xlUGVybWlzc2lvblNlcnZpY2UiLCJkYXRhIiwibWV0aG9kIiwidXJsIiwidGVuYW50SWQiLCJtb2RlbE5hbWUiLCJyb2xlcyIsInJlbW92ZUZyb21RdWV1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztJQUVNQSxxQjs7OztnQkFBQUEscUIsMEJBQ2lDLFVBQUNDLElBQUQ7QUFBQSxTQUFlLG9CQUFNO0FBQ3hEQSxJQUFBQSxJQUFJLEVBQUpBLElBRHdEO0FBRXhEQyxJQUFBQSxNQUFNLEVBQUUsT0FGZ0Q7QUFHeERDLElBQUFBLEdBQUc7QUFIcUQsR0FBTixDQUFmO0FBQUEsQzs7Z0JBRGpDSCxxQix5QkFPZ0MsVUFBQ0ksUUFBRCxFQUFtQkMsU0FBbkI7QUFBQSxTQUF5QyxvQkFBTTtBQUNqRkgsSUFBQUEsTUFBTSxFQUFFLEtBRHlFO0FBRWpGQyxJQUFBQSxHQUFHLG1DQUE0QkMsUUFBNUIsc0JBQWdEQyxTQUFoRDtBQUY4RSxHQUFOLENBQXpDO0FBQUEsQzs7Z0JBUGhDTCxxQiw4QkFZcUMsVUFBQ00sS0FBRDtBQUFBLFNBQW1CLG9CQUFNO0FBQ2hFOzs7OztBQUtBTCxJQUFBQSxJQUFJLEVBQUU7QUFDSk0sTUFBQUEsZUFBZSxFQUFFO0FBRGIsS0FOMEQ7QUFTaEVMLElBQUFBLE1BQU0sRUFBRSxLQVR3RDtBQVVoRUMsSUFBQUEsR0FBRyxpQ0FBMEJHLEtBQTFCO0FBVjZELEdBQU4sQ0FBbkI7QUFBQSxDOztlQWM1Qk4scUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVJvbGVQZXJtaXNzaW9uID0gKGRhdGE6IGFueSkgPT4gYXhpb3Moe1xuICAgIGRhdGEsXG4gICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgIHVybDogYC9wZXJtaXNzaW9uc2BcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZldGNoUm9sZVBlcm1pc3Npb24gPSAodGVuYW50SWQ6IHN0cmluZywgbW9kZWxOYW1lOiBzdHJpbmcpID0+IGF4aW9zKHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHVybDogYC9wZXJtaXNzaW9ucz90ZW5hbnRfaWQ9JHt0ZW5hbnRJZH0mc3ViamVjdD0ke21vZGVsTmFtZX1gXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmZXRjaFJvbGVQZXJtaXNzaW9uUnVsZXMgPSAocm9sZXM6IHN0cmluZykgPT4gYXhpb3Moe1xuICAgIC8qKlxuICAgICAqIEhlcmUgcmVtb3ZlRnJvbVF1ZXVlIHN0YXJ0cyB0cnVlLlxuICAgICAqIGJlYWN1c2UgZGlkbid0IHJlY2VpdmUgdGhlIHJlc3BvbnNlLFxuICAgICAqIHNvIHdlIGNyZWF0ZSBhIGJvb2xlYW4gdmFsdWUgdG8gcmVzb2x2ZSBieSBjYWxsaW5nIHRydWUuXG4gICAgICovXG4gICAgZGF0YToge1xuICAgICAgcmVtb3ZlRnJvbVF1ZXVlOiB0cnVlXG4gICAgfSxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHVybDogYC9wZXJtaXNzaW9ucz9yb2xlX2lkPSR7cm9sZXN9YFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb2xlUGVybWlzc2lvblNlcnZpY2U7XG4iXX0=