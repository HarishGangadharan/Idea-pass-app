"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchQueryFields = fetchQueryFields;

var _connectedReactRouter = require("connected-react-router");

var _effects = require("redux-saga/effects");

var _querybuilder = require("../actions/querybuilder");

var _querybuilder2 = _interopRequireDefault(require("../services/querybuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchQueryFields);

function fetchQueryFields(action) {
  var response;
  return regeneratorRuntime.wrap(function fetchQueryFields$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_querybuilder2.default.getQueryFields, action.tenant);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _querybuilder.fetchQueryFieldsSuccess)(response));

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
          return (0, _effects.put)((0, _querybuilder.fetchQueryFieldsFailure)(_context.t0));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9xdWVyeWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiZmV0Y2hRdWVyeUZpZWxkcyIsImFjdGlvbiIsIlF1ZXJ5QnVpbGRlclNlcnZpY2UiLCJnZXRRdWVyeUZpZWxkcyIsInRlbmFudCIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBSUE7Ozs7Ozt3QkFFVUEsZ0I7O0FBQVYsU0FBVUEsZ0JBQVYsQ0FBMkJDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcUIsaUJBQU0sbUJBQUtDLHVCQUFvQkMsY0FBekIsRUFBeUNGLE1BQU0sQ0FBQ0csTUFBaEQsQ0FBTjs7QUFGckI7QUFFVUMsVUFBQUEsUUFGVjtBQUFBO0FBR0ksaUJBQU0sa0JBQUksMkNBQXdCQSxRQUF4QixDQUFKLENBQU47O0FBSEo7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLGdDQUFLLEdBQUwsQ0FBSixDQUFOOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1JLGlCQUFNLGtCQUFJLGdDQUFLLEdBQUwsQ0FBSixDQUFOOztBQU5KO0FBQUE7QUFPSSxpQkFBTSxrQkFBSSx1REFBSixDQUFOOztBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVzaCB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY2FsbCwgcHV0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7XG4gIGZldGNoUXVlcnlGaWVsZHNGYWlsdXJlLFxuICBmZXRjaFF1ZXJ5RmllbGRzU3VjY2Vzc1xufSBmcm9tICcuLi9hY3Rpb25zL3F1ZXJ5YnVpbGRlcic7XG5pbXBvcnQgUXVlcnlCdWlsZGVyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9xdWVyeWJ1aWxkZXInO1xuXG5mdW5jdGlvbiogZmV0Y2hRdWVyeUZpZWxkcyhhY3Rpb246IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChRdWVyeUJ1aWxkZXJTZXJ2aWNlLmdldFF1ZXJ5RmllbGRzLCBhY3Rpb24udGVuYW50KTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hRdWVyeUZpZWxkc1N1Y2Nlc3MocmVzcG9uc2UpKTtcbiAgICB5aWVsZCBwdXQocHVzaCgnLycpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQocHVzaCgnLycpKTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hRdWVyeUZpZWxkc0ZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBmZXRjaFF1ZXJ5RmllbGRzXG59O1xuIl19