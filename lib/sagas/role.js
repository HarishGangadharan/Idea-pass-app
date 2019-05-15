"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRole = createRole;
exports.fetchRole = fetchRole;
exports.fetchRoleList = fetchRoleList;

var _connectedReactRouter = require("connected-react-router");

var _effects = require("redux-saga/effects");

var _role = require("../actions/role");

var _role2 = _interopRequireDefault(require("../services/role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createRole),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchRole),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchRoleList);

function createRole(action) {
  var response;
  return regeneratorRuntime.wrap(function createRole$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_role2.default.createRole, action.payload, action.roleId);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _role.createRoleSuccess)(response));

        case 6:
          _context.next = 8;
          return (0, _effects.put)((0, _connectedReactRouter.push)('/'));

        case 8:
          _context.next = 16;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return (0, _effects.put)((0, _connectedReactRouter.push)('/'));

        case 14:
          _context.next = 16;
          return (0, _effects.put)((0, _role.createRoleFailure)(_context.t0));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function fetchRole(action) {
  var roleId, callback, roles;
  return regeneratorRuntime.wrap(function fetchRole$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          roleId = action.roleId, callback = action.callback;
          _context2.next = 4;
          return (0, _effects.call)(_role2.default.fetchRole, roleId);

        case 4:
          roles = _context2.sent;

          if (callback) {
            callback(roles.data);
          }

          _context2.next = 8;
          return (0, _effects.put)((0, _role.fetchRoleSuccess)(roles.data));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return (0, _effects.put)((0, _role.fetchRoleFailure)(_context2.t0));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function fetchRoleList(action) {
  var limit, currentPage, tenantId, roles;
  return regeneratorRuntime.wrap(function fetchRoleList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          limit = action.limit, currentPage = action.currentPage, tenantId = action.tenantId;
          _context3.next = 4;
          return (0, _effects.call)(_role2.default.getAllRole, tenantId, limit, currentPage);

        case 4:
          roles = _context3.sent;
          _context3.next = 7;
          return (0, _effects.put)((0, _role.fetchRoleListSuccess)(roles.data));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return (0, _effects.put)((0, _role.fetchRoleListFailure)(_context3.t0));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9yb2xlLnRzIl0sIm5hbWVzIjpbImNyZWF0ZVJvbGUiLCJmZXRjaFJvbGUiLCJmZXRjaFJvbGVMaXN0IiwiYWN0aW9uIiwiUm9sZVNlcnZpY2UiLCJwYXlsb2FkIiwicm9sZUlkIiwicmVzcG9uc2UiLCJjYWxsYmFjayIsInJvbGVzIiwiZGF0YSIsImxpbWl0IiwiY3VycmVudFBhZ2UiLCJ0ZW5hbnRJZCIsImdldEFsbFJvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQVFBOzs7Ozs7d0JBRVVBLFU7Ozt3QkFXQUMsUzs7O3dCQWFBQyxhOztBQXhCVixTQUFVRixVQUFWLENBQXFCRyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXFCLGlCQUFNLG1CQUFLQyxlQUFZSixVQUFqQixFQUE2QkcsTUFBTSxDQUFDRSxPQUFwQyxFQUE2Q0YsTUFBTSxDQUFDRyxNQUFwRCxDQUFOOztBQUZyQjtBQUVVQyxVQUFBQSxRQUZWO0FBQUE7QUFHSSxpQkFBTSxrQkFBSSw2QkFBa0JBLFFBQWxCLENBQUosQ0FBTjs7QUFISjtBQUFBO0FBSUksaUJBQU0sa0JBQUksZ0NBQUssR0FBTCxDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUksaUJBQU0sa0JBQUksZ0NBQUssR0FBTCxDQUFKLENBQU47O0FBTko7QUFBQTtBQU9JLGlCQUFNLGtCQUFJLHlDQUFKLENBQU47O0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV0EsU0FBVU4sU0FBVixDQUFvQkUsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWUcsVUFBQUEsTUFGWixHQUVpQ0gsTUFGakMsQ0FFWUcsTUFGWixFQUVvQkUsUUFGcEIsR0FFaUNMLE1BRmpDLENBRW9CSyxRQUZwQjtBQUFBO0FBR2tCLGlCQUFNLG1CQUFLSixlQUFZSCxTQUFqQixFQUE0QkssTUFBNUIsQ0FBTjs7QUFIbEI7QUFHVUcsVUFBQUEsS0FIVjs7QUFJSSxjQUFJRCxRQUFKLEVBQWM7QUFDWkEsWUFBQUEsUUFBUSxDQUFDQyxLQUFLLENBQUNDLElBQVAsQ0FBUjtBQUNEOztBQU5MO0FBT0ksaUJBQU0sa0JBQUksNEJBQWlCRCxLQUFLLENBQUNDLElBQXZCLENBQUosQ0FBTjs7QUFQSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTSSxpQkFBTSxrQkFBSSx5Q0FBSixDQUFOOztBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFBLFNBQVVSLGFBQVYsQ0FBd0JDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVlRLFVBQUFBLEtBRlosR0FFNkNSLE1BRjdDLENBRVlRLEtBRlosRUFFbUJDLFdBRm5CLEdBRTZDVCxNQUY3QyxDQUVtQlMsV0FGbkIsRUFFZ0NDLFFBRmhDLEdBRTZDVixNQUY3QyxDQUVnQ1UsUUFGaEM7QUFBQTtBQUdrQixpQkFBTSxtQkFBS1QsZUFBWVUsVUFBakIsRUFBNkJELFFBQTdCLEVBQXVDRixLQUF2QyxFQUE4Q0MsV0FBOUMsQ0FBTjs7QUFIbEI7QUFHVUgsVUFBQUEsS0FIVjtBQUFBO0FBSUksaUJBQU0sa0JBQUksZ0NBQXFCQSxLQUFLLENBQUNDLElBQTNCLENBQUosQ0FBTjs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSSxpQkFBTSxrQkFBSSw2Q0FBSixDQUFOOztBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVzaCB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY2FsbCwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVJvbGVGYWlsdXJlLFxuICBjcmVhdGVSb2xlU3VjY2VzcyxcbiAgZmV0Y2hSb2xlRmFpbHVyZSxcbiAgZmV0Y2hSb2xlTGlzdEZhaWx1cmUsXG4gIGZldGNoUm9sZUxpc3RTdWNjZXNzLFxuICBmZXRjaFJvbGVTdWNjZXNzXG59IGZyb20gJy4uL2FjdGlvbnMvcm9sZSc7XG5pbXBvcnQgUm9sZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvcm9sZSc7XG5cbmZ1bmN0aW9uKiBjcmVhdGVSb2xlKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJvbGVTZXJ2aWNlLmNyZWF0ZVJvbGUsIGFjdGlvbi5wYXlsb2FkLCBhY3Rpb24ucm9sZUlkKTtcbiAgICB5aWVsZCBwdXQoY3JlYXRlUm9sZVN1Y2Nlc3MocmVzcG9uc2UpKTtcbiAgICB5aWVsZCBwdXQocHVzaCgnLycpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQocHVzaCgnLycpKTtcbiAgICB5aWVsZCBwdXQoY3JlYXRlUm9sZUZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hSb2xlKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyByb2xlSWQsIGNhbGxiYWNrIH0gPSBhY3Rpb247XG4gICAgY29uc3Qgcm9sZXMgPSB5aWVsZCBjYWxsKFJvbGVTZXJ2aWNlLmZldGNoUm9sZSwgcm9sZUlkKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKHJvbGVzLmRhdGEpO1xuICAgIH1cbiAgICB5aWVsZCBwdXQoZmV0Y2hSb2xlU3VjY2Vzcyhyb2xlcy5kYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGZldGNoUm9sZUZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hSb2xlTGlzdChhY3Rpb246IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbGltaXQsIGN1cnJlbnRQYWdlLCB0ZW5hbnRJZCB9ID0gYWN0aW9uO1xuICAgIGNvbnN0IHJvbGVzID0geWllbGQgY2FsbChSb2xlU2VydmljZS5nZXRBbGxSb2xlLCB0ZW5hbnRJZCwgbGltaXQsIGN1cnJlbnRQYWdlKTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hSb2xlTGlzdFN1Y2Nlc3Mocm9sZXMuZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChmZXRjaFJvbGVMaXN0RmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVJvbGUsXG4gIGZldGNoUm9sZSxcbiAgZmV0Y2hSb2xlTGlzdFxufTtcbiJdfQ==