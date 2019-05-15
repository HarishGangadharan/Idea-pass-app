"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRolePermission = createRolePermission;
exports.fetchRolePermission = fetchRolePermission;
exports.fetchRolePermissionRules = fetchRolePermissionRules;

var _extra = require("@casl/ability/extra");

var _effects = require("redux-saga/effects");

var _ability = _interopRequireDefault(require("../ability"));

var _rolepermission = require("../actions/rolepermission");

var _application = require("../constants/application.properties");

var _rolepermission2 = _interopRequireDefault(require("../services/rolepermission"));

var _storage = _interopRequireDefault(require("../utils/storage"));

var _user = require("./user");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createRolePermission),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchRolePermission),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchRolePermissionRules);

function createRolePermission(action) {
  var payload, updatedRolePermissions, response;
  return regeneratorRuntime.wrap(function createRolePermission$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          payload = action.payload, updatedRolePermissions = action.updatedRolePermissions;
          _context.next = 4;
          return (0, _effects.call)(_rolepermission2.default.createRolePermission, payload);

        case 4:
          response = _context.sent;
          updatedRolePermissions.permissions = _lodash.default.merge(response.data.permissions, updatedRolePermissions.permissions);
          _context.next = 8;
          return (0, _effects.put)((0, _rolepermission.createRolePermissionSuccess)(updatedRolePermissions));

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return (0, _effects.put)((0, _rolepermission.createRolePermissionFailure)(_context.t0));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function fetchRolePermission(action) {
  var tenantId, modelName, response;
  return regeneratorRuntime.wrap(function fetchRolePermission$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          tenantId = action.tenantId, modelName = action.modelName;
          _context2.next = 4;
          return (0, _effects.call)(_rolepermission2.default.fetchRolePermission, tenantId, modelName);

        case 4:
          response = _context2.sent;
          response.data.permissions.forEach(function (permission) {
            if (!permission.permission || !Object.keys(permission.permission).length) {
              permission.permission = {
                create: {
                  action: ''
                },
                delete: {
                  action: ''
                },
                read: {
                  action: ''
                },
                update: {
                  action: ''
                }
              };
            } else {
              Object.keys(permission.permission).forEach(function (rule) {
                ['create', 'delete', 'read', 'update'].forEach(function (accessRule) {
                  if (accessRule !== rule && !permission.permission[accessRule]) {
                    permission.permission[accessRule] = {
                      action: ''
                    };
                  }
                });
              });
            }
          });
          _context2.next = 8;
          return (0, _effects.put)((0, _rolepermission.fetchRolePermissionSuccess)(response.data));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return (0, _effects.put)((0, _rolepermission.fetchRolePermissionFailure)(_context2.t0));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function fetchRolePermissionRules(action) {
  var userRole, response, defaultRules;
  return regeneratorRuntime.wrap(function fetchRolePermissionRules$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          userRole = action.userRole;
          _context3.next = 4;
          return (0, _effects.call)(_rolepermission2.default.fetchRolePermissionRules, userRole);

        case 4:
          response = _context3.sent;

          if (response.data !== '[]') {
            _ability.default.update(_toConsumableArray((0, _extra.unpackRules)(JSON.parse(response.data))));
          } else {
            defaultRules = [{
              'actions': ['read'],
              'subject': ['default']
            }];

            _ability.default.update(defaultRules);
          }

          _storage.default.setItem(_application.AppProperties.RULES_UPDATED, 'true');

          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return (0, _effects.call)(_user.onLogoutUser, {
            user: {}
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9yb2xlcGVybWlzc2lvbi50cyJdLCJuYW1lcyI6WyJjcmVhdGVSb2xlUGVybWlzc2lvbiIsImZldGNoUm9sZVBlcm1pc3Npb24iLCJmZXRjaFJvbGVQZXJtaXNzaW9uUnVsZXMiLCJhY3Rpb24iLCJwYXlsb2FkIiwidXBkYXRlZFJvbGVQZXJtaXNzaW9ucyIsIlJvbGVQZXJtaXNzaW9uU2VydmljZSIsInJlc3BvbnNlIiwicGVybWlzc2lvbnMiLCJfIiwibWVyZ2UiLCJkYXRhIiwidGVuYW50SWQiLCJtb2RlbE5hbWUiLCJmb3JFYWNoIiwicGVybWlzc2lvbiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjcmVhdGUiLCJkZWxldGUiLCJyZWFkIiwidXBkYXRlIiwicnVsZSIsImFjY2Vzc1J1bGUiLCJ1c2VyUm9sZSIsImFiaWxpdHkiLCJKU09OIiwicGFyc2UiLCJkZWZhdWx0UnVsZXMiLCJzdG9yYWdlIiwic2V0SXRlbSIsIkFwcFByb3BlcnRpZXMiLCJSVUxFU19VUERBVEVEIiwib25Mb2dvdXRVc2VyIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O3dCQUVVQSxvQjs7O3dCQVdBQyxtQjs7O3dCQW9DQUMsd0I7O0FBL0NWLFNBQVVGLG9CQUFWLENBQStCRyxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZQyxVQUFBQSxPQUZaLEdBRWdERCxNQUZoRCxDQUVZQyxPQUZaLEVBRXFCQyxzQkFGckIsR0FFZ0RGLE1BRmhELENBRXFCRSxzQkFGckI7QUFBQTtBQUdxQixpQkFBTSxtQkFBS0MseUJBQXNCTixvQkFBM0IsRUFBaURJLE9BQWpELENBQU47O0FBSHJCO0FBR1VHLFVBQUFBLFFBSFY7QUFJSUYsVUFBQUEsc0JBQXNCLENBQUNHLFdBQXZCLEdBQXFDQyxnQkFBRUMsS0FB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QUVPO0FBQ0NrQixZQUFBQSxZQURELEdBQ2dCLENBQ25CO0FBQ0UseUJBQVcsQ0FBQyxNQUFELENBRGI7QUFFRSx5QkFBVyxDQUFDLFNBQUQ7QUFGYixhQURtQixDQURoQjs7QUFPTEgsNkJBQVFKLE1BQVIsQ0FBZU8sWUFBZjtBQUNEOztBQUNEQywyQkFBUUMsT0FBUixDQUFnQkMsMkJBQWNDLGFBQTlCLEVBQTZDLE1BQTdDOztBQWZKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkksaUJBQU0sbUJBQUtDLGtCQUFMLEVBQW1CO0FBQUVDLFlBQUFBLElBQUksRUFBRTtBQUFSLFdBQW5CLENBQU47O0FBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdW5wYWNrUnVsZXMgfSBmcm9tICdAY2FzbC9hYmlsaXR5L2V4dHJhJztcbmltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYWJpbGl0eSBmcm9tICcuLi9hYmlsaXR5JztcbmltcG9ydCB7XG4gIGNyZWF0ZVJvbGVQZXJtaXNzaW9uRmFpbHVyZSxcbiAgY3JlYXRlUm9sZVBlcm1pc3Npb25TdWNjZXNzLFxuICBmZXRjaFJvbGVQZXJtaXNzaW9uRmFpbHVyZSxcbiAgZmV0Y2hSb2xlUGVybWlzc2lvblN1Y2Nlc3Ncbn0gZnJvbSAnLi4vYWN0aW9ucy9yb2xlcGVybWlzc2lvbic7XG5pbXBvcnQgeyBBcHBQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FwcGxpY2F0aW9uLnByb3BlcnRpZXMnO1xuaW1wb3J0IFJvbGVQZXJtaXNzaW9uU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9yb2xlcGVybWlzc2lvbic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi91dGlscy9zdG9yYWdlJztcbmltcG9ydCB7IG9uTG9nb3V0VXNlciB9IGZyb20gJy4vdXNlcic7XG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uKiBjcmVhdGVSb2xlUGVybWlzc2lvbihhY3Rpb246IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcGF5bG9hZCwgdXBkYXRlZFJvbGVQZXJtaXNzaW9ucyB9ID0gYWN0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSb2xlUGVybWlzc2lvblNlcnZpY2UuY3JlYXRlUm9sZVBlcm1pc3Npb24sIHBheWxvYWQpO1xuICAgIHVwZGF0ZWRSb2xlUGVybWlzc2lvbnMucGVybWlzc2lvbnMgPSBfLm1lcmdlKHJlc3BvbnNlLmRhdGEucGVybWlzc2lvbnMsIHVwZGF0ZWRSb2xlUGVybWlzc2lvbnMucGVybWlzc2lvbnMpO1xuICAgIHlpZWxkIHB1dChjcmVhdGVSb2xlUGVybWlzc2lvblN1Y2Nlc3ModXBkYXRlZFJvbGVQZXJtaXNzaW9ucykpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChjcmVhdGVSb2xlUGVybWlzc2lvbkZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hSb2xlUGVybWlzc2lvbihhY3Rpb246IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdGVuYW50SWQsIG1vZGVsTmFtZSB9ID0gYWN0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSb2xlUGVybWlzc2lvblNlcnZpY2UuZmV0Y2hSb2xlUGVybWlzc2lvbiwgdGVuYW50SWQsIG1vZGVsTmFtZSk7XG4gICAgcmVzcG9uc2UuZGF0YS5wZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uOiBhbnkpID0+IHtcbiAgICAgIGlmICghcGVybWlzc2lvbi5wZXJtaXNzaW9uIHx8ICFPYmplY3Qua2V5cyhwZXJtaXNzaW9uLnBlcm1pc3Npb24pLmxlbmd0aCkge1xuICAgICAgICBwZXJtaXNzaW9uLnBlcm1pc3Npb24gPSB7XG4gICAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBhY3Rpb246ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlYWQ6IHtcbiAgICAgICAgICAgIGFjdGlvbjogJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZToge1xuICAgICAgICAgICAgYWN0aW9uOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBlcm1pc3Npb24ucGVybWlzc2lvbikuZm9yRWFjaCgocnVsZTogYW55KSA9PiB7XG4gICAgICAgICAgWydjcmVhdGUnLCAnZGVsZXRlJywgJ3JlYWQnLCAndXBkYXRlJ10uZm9yRWFjaCgoYWNjZXNzUnVsZTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoYWNjZXNzUnVsZSAhPT0gcnVsZSAmJiAhcGVybWlzc2lvbi5wZXJtaXNzaW9uW2FjY2Vzc1J1bGVdKSB7XG4gICAgICAgICAgICAgIHBlcm1pc3Npb24ucGVybWlzc2lvblthY2Nlc3NSdWxlXSA9IHsgYWN0aW9uOiAnJyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hSb2xlUGVybWlzc2lvblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChmZXRjaFJvbGVQZXJtaXNzaW9uRmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBmZXRjaFJvbGVQZXJtaXNzaW9uUnVsZXMoYWN0aW9uOiBhbnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXJSb2xlIH0gPSBhY3Rpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJvbGVQZXJtaXNzaW9uU2VydmljZS5mZXRjaFJvbGVQZXJtaXNzaW9uUnVsZXMsIHVzZXJSb2xlKTtcbiAgICBpZiAocmVzcG9uc2UuZGF0YSAhPT0gJ1tdJykge1xuICAgICAgYWJpbGl0eS51cGRhdGUoWy4uLnVucGFja1J1bGVzKEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YSkpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRSdWxlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICdhY3Rpb25zJzogWydyZWFkJ10sXG4gICAgICAgICAgJ3N1YmplY3QnOiBbJ2RlZmF1bHQnXVxuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgYWJpbGl0eS51cGRhdGUoZGVmYXVsdFJ1bGVzKTtcbiAgICB9XG4gICAgc3RvcmFnZS5zZXRJdGVtKEFwcFByb3BlcnRpZXMuUlVMRVNfVVBEQVRFRCwgJ3RydWUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBjYWxsKG9uTG9nb3V0VXNlciwgeyB1c2VyOiB7fSB9KTtcbiAgICAvL1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVJvbGVQZXJtaXNzaW9uLFxuICBmZXRjaFJvbGVQZXJtaXNzaW9uLFxuICBmZXRjaFJvbGVQZXJtaXNzaW9uUnVsZXNcbn07XG4iXX0=