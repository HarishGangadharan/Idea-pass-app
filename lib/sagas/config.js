"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchConfig = fetchConfig;

var _effects = require("redux-saga/effects");

var _config = require("../actions/config");

var _config2 = _interopRequireDefault(require("../services/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchConfig);

function fetchConfig(action) {
  var tenantId, configList, response;
  return regeneratorRuntime.wrap(function fetchConfig$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          tenantId = action.tenantId, configList = action.configList;
          _context.next = 4;
          return (0, _effects.call)(_config2.default.fetchConfig, configList, tenantId);

        case 4:
          response = _context.sent;
          _context.next = 7;
          return (0, _effects.put)((0, _config.fetchConfigSuccess)(response.data));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          _context.next = 13;
          return (0, _effects.put)((0, _config.fetchConfigFailure)(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9jb25maWcudHMiXSwibmFtZXMiOlsiZmV0Y2hDb25maWciLCJhY3Rpb24iLCJ0ZW5hbnRJZCIsImNvbmZpZ0xpc3QiLCJDb25maWdTZXJ2aWNlIiwicmVzcG9uc2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBSUE7Ozs7Ozt3QkFFVUEsVzs7QUFBVixTQUFVQSxXQUFWLENBQXNCQyxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZQyxVQUFBQSxRQUZaLEdBRXFDRCxNQUZyQyxDQUVZQyxRQUZaLEVBRXNCQyxVQUZ0QixHQUVxQ0YsTUFGckMsQ0FFc0JFLFVBRnRCO0FBQUE7QUFHcUIsaUJBQU0sbUJBQUtDLGlCQUFjSixXQUFuQixFQUFnQ0csVUFBaEMsRUFBNENELFFBQTVDLENBQU47O0FBSHJCO0FBR1VHLFVBQUFBLFFBSFY7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLGdDQUFtQkEsUUFBUSxDQUFDQyxJQUE1QixDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUksaUJBQU0sa0JBQUksNENBQUosQ0FBTjs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBmZXRjaENvbmZpZ0ZhaWx1cmUsXG4gIGZldGNoQ29uZmlnU3VjY2Vzc1xufSBmcm9tICcuLi9hY3Rpb25zL2NvbmZpZyc7XG5pbXBvcnQgQ29uZmlnU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9jb25maWcnO1xuXG5mdW5jdGlvbiogZmV0Y2hDb25maWcoYWN0aW9uOiBhbnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHRlbmFudElkLCBjb25maWdMaXN0IH0gPSBhY3Rpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKENvbmZpZ1NlcnZpY2UuZmV0Y2hDb25maWcsIGNvbmZpZ0xpc3QsIHRlbmFudElkKTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hDb25maWdTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZmV0Y2hDb25maWdGYWlsdXJlKGVycm9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgZmV0Y2hDb25maWdcbn07XG4iXX0=