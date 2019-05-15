"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateGraphiQl = createOrUpdateGraphiQl;
exports.fetchGraphiQlById = fetchGraphiQlById;
exports.fetchGraphiQlList = fetchGraphiQlList;

var _connectedReactRouter = require("connected-react-router");

var _reactToastify = require("react-toastify");

var _effects = require("redux-saga/effects");

var _graphiQl = require("../actions/graphiQl");

var _errorConstants = _interopRequireDefault(require("../constants/errorConstants"));

var _graphiQl2 = require("../services/graphiQl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createOrUpdateGraphiQl),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchGraphiQlById),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchGraphiQlList);

function createOrUpdateGraphiQl(action) {
  var data, message, response;
  return regeneratorRuntime.wrap(function createOrUpdateGraphiQl$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = action.data;
          message = "".concat(data._id ? 'Updated' : 'Created', " successfully");
          _context.prev = 2;
          _context.next = 5;
          return (0, _effects.call)(_graphiQl2.saveOrUpdateGraphiQl, data);

        case 5:
          response = _context.sent;
          _context.next = 8;
          return (0, _effects.put)((0, _graphiQl.createOrUpdateGraphiQlSuccess)(response.data));

        case 8:
          _context.next = 10;
          return (0, _effects.put)((0, _connectedReactRouter.push)('/graphiQlList'));

        case 10:
          _reactToastify.toast.success(message);

          _context.next = 18;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          _context.next = 17;
          return (0, _effects.put)((0, _graphiQl.createOrUpdateGraphiQlFail)(_context.t0));

        case 17:
          _reactToastify.toast.error(_errorConstants.default.REQUEST_FAIL.message);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 13]]);
}

function fetchGraphiQlById(action) {
  var id, response;
  return regeneratorRuntime.wrap(function fetchGraphiQlById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = action.id;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(_graphiQl2.getGraphiQlById, id);

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return (0, _effects.put)((0, _graphiQl.fetchGraphiQlSuccess)(response.data));

        case 7:
          _context2.next = 14;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 13;
          return (0, _effects.put)((0, _graphiQl.fetchGraphiQlFail)(_context2.t0));

        case 13:
          _reactToastify.toast.error(_errorConstants.default.REQUEST_FAIL.message);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}

function fetchGraphiQlList(action) {
  var data, response;
  return regeneratorRuntime.wrap(function fetchGraphiQlList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          data = action.data;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.call)(_graphiQl2.fetchGraphiQlQueries, data);

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return (0, _effects.put)((0, _graphiQl.fetchGraphiQlListSuccess)(response.data));

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 13;
          return (0, _effects.put)((0, _graphiQl.fetchGraphiQlListFail)(_context3.t0));

        case 13:
          _reactToastify.toast.error(_errorConstants.default.REQUEST_FAIL.message);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9ncmFwaGlRbC50cyJdLCJuYW1lcyI6WyJjcmVhdGVPclVwZGF0ZUdyYXBoaVFsIiwiZmV0Y2hHcmFwaGlRbEJ5SWQiLCJmZXRjaEdyYXBoaVFsTGlzdCIsImFjdGlvbiIsImRhdGEiLCJtZXNzYWdlIiwiX2lkIiwic2F2ZU9yVXBkYXRlR3JhcGhpUWwiLCJyZXNwb25zZSIsInRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwiRXJyb3JDb25zdGFudHMiLCJSRVFVRVNUX0ZBSUwiLCJpZCIsImdldEdyYXBoaVFsQnlJZCIsImZldGNoR3JhcGhpUWxRdWVyaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFTQTs7QUFDQTs7Ozs7O3dCQUVpQkEsc0I7Ozt3QkFjQUMsaUI7Ozt3QkFXQUMsaUI7O0FBekJWLFNBQVVGLHNCQUFWLENBQWtDRyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0MsVUFBQUEsSUFESCxHQUNZRCxNQURaLENBQ0dDLElBREg7QUFFQ0MsVUFBQUEsT0FGRCxhQUVjRCxJQUFJLENBQUNFLEdBQUwsR0FBVyxTQUFYLEdBQXVCLFNBRnJDO0FBQUE7QUFBQTtBQUljLGlCQUFNLG1CQUFLQywrQkFBTCxFQUEyQkgsSUFBM0IsQ0FBTjs7QUFKZDtBQUlHSSxVQUFBQSxRQUpIO0FBQUE7QUFLSCxpQkFBTSxrQkFBSSw2Q0FBOEJBLFFBQVEsQ0FBQ0osSUFBdkMsQ0FBSixDQUFOOztBQUxHO0FBQUE7QUFNSCxpQkFBTSxrQkFBSSxnQ0FBSyxlQUFMLENBQUosQ0FBTjs7QUFORztBQU9ISywrQkFBTUMsT0FBTixDQUFjTCxPQUFkOztBQVBHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTSCxpQkFBTSxrQkFBSSxzREFBSixDQUFOOztBQVRHO0FBVUhJLCtCQUFNRSxLQUFOLENBQVlDLHdCQUFlQyxZQUFmLENBQTRCUixPQUF4Qzs7QUFWRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjQSxTQUFVSixpQkFBVixDQUE2QkUsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dXLFVBQUFBLEVBREgsR0FDVVgsTUFEVixDQUNHVyxFQURIO0FBQUE7QUFBQTtBQUdjLGlCQUFNLG1CQUFLQywwQkFBTCxFQUFzQkQsRUFBdEIsQ0FBTjs7QUFIZDtBQUdHTixVQUFBQSxRQUhIO0FBQUE7QUFJSCxpQkFBTSxrQkFBSSxvQ0FBcUJBLFFBQVEsQ0FBQ0osSUFBOUIsQ0FBSixDQUFOOztBQUpHO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1ILGlCQUFNLGtCQUFJLDhDQUFKLENBQU47O0FBTkc7QUFPSEssK0JBQU1FLEtBQU4sQ0FBWUMsd0JBQWVDLFlBQWYsQ0FBNEJSLE9BQXhDOztBQVBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBLFNBQVVILGlCQUFWLENBQTRCQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0MsVUFBQUEsSUFESCxHQUNZRCxNQURaLENBQ0dDLElBREg7QUFBQTtBQUFBO0FBR2MsaUJBQU0sbUJBQUtZLCtCQUFMLEVBQTJCWixJQUEzQixDQUFOOztBQUhkO0FBR0dJLFVBQUFBLFFBSEg7QUFBQTtBQUlILGlCQUFNLGtCQUFJLHdDQUF5QkEsUUFBUSxDQUFDSixJQUFsQyxDQUFKLENBQU47O0FBSkc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUgsaUJBQU0sa0JBQUksa0RBQUosQ0FBTjs7QUFORztBQU9ISywrQkFBTUUsS0FBTixDQUFZQyx3QkFBZUMsWUFBZixDQUE0QlIsT0FBeEM7O0FBUEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXNoIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBjcmVhdGVPclVwZGF0ZUdyYXBoaVFsRmFpbCxcbiAgY3JlYXRlT3JVcGRhdGVHcmFwaGlRbFN1Y2Nlc3MsXG4gIGZldGNoR3JhcGhpUWxGYWlsLFxuICBmZXRjaEdyYXBoaVFsTGlzdEZhaWwsXG4gIGZldGNoR3JhcGhpUWxMaXN0U3VjY2VzcyxcbiAgZmV0Y2hHcmFwaGlRbFN1Y2Nlc3Ncbn1cbiAgZnJvbSAnLi4vYWN0aW9ucy9ncmFwaGlRbCc7XG5pbXBvcnQgRXJyb3JDb25zdGFudHMgZnJvbSAnLi4vY29uc3RhbnRzL2Vycm9yQ29uc3RhbnRzJztcbmltcG9ydCB7IGZldGNoR3JhcGhpUWxRdWVyaWVzLCBnZXRHcmFwaGlRbEJ5SWQsIHNhdmVPclVwZGF0ZUdyYXBoaVFsIH0gZnJvbSAnLi4vc2VydmljZXMvZ3JhcGhpUWwnO1xuXG5leHBvcnQgZnVuY3Rpb24qIGNyZWF0ZU9yVXBkYXRlR3JhcGhpUWwgKGFjdGlvbjogYW55KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYWN0aW9uO1xuICBjb25zdCBtZXNzYWdlID0gYCR7ZGF0YS5faWQgPyAnVXBkYXRlZCcgOiAnQ3JlYXRlZCd9IHN1Y2Nlc3NmdWxseWA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHNhdmVPclVwZGF0ZUdyYXBoaVFsLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoY3JlYXRlT3JVcGRhdGVHcmFwaGlRbFN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xuICAgIHlpZWxkIHB1dChwdXNoKCcvZ3JhcGhpUWxMaXN0JykpO1xuICAgIHRvYXN0LnN1Y2Nlc3MobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQocHV0KGNyZWF0ZU9yVXBkYXRlR3JhcGhpUWxGYWlsKGVycm9yKSkpO1xuICAgIHRvYXN0LmVycm9yKEVycm9yQ29uc3RhbnRzLlJFUVVFU1RfRkFJTC5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoR3JhcGhpUWxCeUlkIChhY3Rpb246IGFueSkge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGdldEdyYXBoaVFsQnlJZCwgaWQpO1xuICAgIHlpZWxkIHB1dChmZXRjaEdyYXBoaVFsU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQocHV0KGZldGNoR3JhcGhpUWxGYWlsKGVycm9yKSkpO1xuICAgIHRvYXN0LmVycm9yKEVycm9yQ29uc3RhbnRzLlJFUVVFU1RfRkFJTC5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoR3JhcGhpUWxMaXN0KGFjdGlvbjogYW55KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYWN0aW9uO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChmZXRjaEdyYXBoaVFsUXVlcmllcywgZGF0YSk7XG4gICAgeWllbGQgcHV0KGZldGNoR3JhcGhpUWxMaXN0U3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQocHV0KGZldGNoR3JhcGhpUWxMaXN0RmFpbChlcnJvcikpKTtcbiAgICB0b2FzdC5lcnJvcihFcnJvckNvbnN0YW50cy5SRVFVRVNUX0ZBSUwubWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==