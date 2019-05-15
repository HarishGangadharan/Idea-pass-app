"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrganization = createOrganization;
exports.fetchOrganization = fetchOrganization;
exports.fetchOrganizationList = fetchOrganizationList;

var _connectedReactRouter = require("connected-react-router");

var _effects = require("redux-saga/effects");

var _organization = require("../actions/organization");

var _organization2 = _interopRequireDefault(require("../services/organization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createOrganization),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchOrganization),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchOrganizationList);

function createOrganization(action) {
  var response;
  return regeneratorRuntime.wrap(function createOrganization$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_organization2.default.createOrganization, action.payload, action.organizationId);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return (0, _effects.put)((0, _organization.createOrganizationSuccess)(response));

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
          return (0, _effects.put)((0, _organization.createOrganizationFailure)(_context.t0));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function fetchOrganization(action) {
  var organizationId, callback, organizations;
  return regeneratorRuntime.wrap(function fetchOrganization$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          organizationId = action.organizationId, callback = action.callback;
          _context2.next = 4;
          return (0, _effects.call)(_organization2.default.fetchOrganization, organizationId);

        case 4:
          organizations = _context2.sent;

          if (callback) {
            callback(organizations.data);
          }

          _context2.next = 8;
          return (0, _effects.put)((0, _organization.fetchOrganizationSuccess)(organizations.data));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return (0, _effects.put)((0, _organization.fetchOrganizationFailure)(_context2.t0));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function fetchOrganizationList(action) {
  var limit, currentPage, organizations;
  return regeneratorRuntime.wrap(function fetchOrganizationList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          limit = action.limit, currentPage = action.currentPage;
          _context3.next = 4;
          return (0, _effects.call)(_organization2.default.getAllOrganization, limit, currentPage);

        case 4:
          organizations = _context3.sent;
          _context3.next = 7;
          return (0, _effects.put)((0, _organization.fetchOrganizationListSuccess)(organizations.data));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return (0, _effects.put)((0, _organization.fetchOrganizationListFailure)(_context3.t0));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9vcmdhbml6YXRpb24udHMiXSwibmFtZXMiOlsiY3JlYXRlT3JnYW5pemF0aW9uIiwiZmV0Y2hPcmdhbml6YXRpb24iLCJmZXRjaE9yZ2FuaXphdGlvbkxpc3QiLCJhY3Rpb24iLCJPcmdhbml6YXRpb25TZXJ2aWNlIiwicGF5bG9hZCIsIm9yZ2FuaXphdGlvbklkIiwicmVzcG9uc2UiLCJjYWxsYmFjayIsIm9yZ2FuaXphdGlvbnMiLCJkYXRhIiwibGltaXQiLCJjdXJyZW50UGFnZSIsImdldEFsbE9yZ2FuaXphdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBUUE7Ozs7Ozt3QkFFVUEsa0I7Ozt3QkFXQUMsaUI7Ozt3QkFhQUMscUI7O0FBeEJWLFNBQVVGLGtCQUFWLENBQTZCRyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXFCLGlCQUFNLG1CQUFLQyx1QkFBb0JKLGtCQUF6QixFQUE2Q0csTUFBTSxDQUFDRSxPQUFwRCxFQUE2REYsTUFBTSxDQUFDRyxjQUFwRSxDQUFOOztBQUZyQjtBQUVVQyxVQUFBQSxRQUZWO0FBQUE7QUFHSSxpQkFBTSxrQkFBSSw2Q0FBMEJBLFFBQTFCLENBQUosQ0FBTjs7QUFISjtBQUFBO0FBSUksaUJBQU0sa0JBQUksZ0NBQUssR0FBTCxDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUksaUJBQU0sa0JBQUksZ0NBQUssR0FBTCxDQUFKLENBQU47O0FBTko7QUFBQTtBQU9JLGlCQUFNLGtCQUFJLHlEQUFKLENBQU47O0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBV0EsU0FBVU4saUJBQVYsQ0FBNEJFLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVlHLFVBQUFBLGNBRlosR0FFeUNILE1BRnpDLENBRVlHLGNBRlosRUFFNEJFLFFBRjVCLEdBRXlDTCxNQUZ6QyxDQUU0QkssUUFGNUI7QUFBQTtBQUcwQixpQkFBTSxtQkFBS0osdUJBQW9CSCxpQkFBekIsRUFBNENLLGNBQTVDLENBQU47O0FBSDFCO0FBR1VHLFVBQUFBLGFBSFY7O0FBSUksY0FBSUQsUUFBSixFQUFjO0FBQ1pBLFlBQUFBLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxJQUFmLENBQVI7QUFDRDs7QUFOTDtBQU9JLGlCQUFNLGtCQUFJLDRDQUF5QkQsYUFBYSxDQUFDQyxJQUF2QyxDQUFKLENBQU47O0FBUEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0ksaUJBQU0sa0JBQUkseURBQUosQ0FBTjs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQSxTQUFVUixxQkFBVixDQUFnQ0MsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWVEsVUFBQUEsS0FGWixHQUVtQ1IsTUFGbkMsQ0FFWVEsS0FGWixFQUVtQkMsV0FGbkIsR0FFbUNULE1BRm5DLENBRW1CUyxXQUZuQjtBQUFBO0FBRzBCLGlCQUFNLG1CQUFLUix1QkFBb0JTLGtCQUF6QixFQUE2Q0YsS0FBN0MsRUFBb0RDLFdBQXBELENBQU47O0FBSDFCO0FBR1VILFVBQUFBLGFBSFY7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLGdEQUE2QkEsYUFBYSxDQUFDQyxJQUEzQyxDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUksaUJBQU0sa0JBQUksNkRBQUosQ0FBTjs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1c2ggfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBjcmVhdGVPcmdhbml6YXRpb25GYWlsdXJlLFxuICBjcmVhdGVPcmdhbml6YXRpb25TdWNjZXNzLFxuICBmZXRjaE9yZ2FuaXphdGlvbkZhaWx1cmUsXG4gIGZldGNoT3JnYW5pemF0aW9uTGlzdEZhaWx1cmUsXG4gIGZldGNoT3JnYW5pemF0aW9uTGlzdFN1Y2Nlc3MsXG4gIGZldGNoT3JnYW5pemF0aW9uU3VjY2Vzc1xufSBmcm9tICcuLi9hY3Rpb25zL29yZ2FuaXphdGlvbic7XG5pbXBvcnQgT3JnYW5pemF0aW9uU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9vcmdhbml6YXRpb24nO1xuXG5mdW5jdGlvbiogY3JlYXRlT3JnYW5pemF0aW9uKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKE9yZ2FuaXphdGlvblNlcnZpY2UuY3JlYXRlT3JnYW5pemF0aW9uLCBhY3Rpb24ucGF5bG9hZCwgYWN0aW9uLm9yZ2FuaXphdGlvbklkKTtcbiAgICB5aWVsZCBwdXQoY3JlYXRlT3JnYW5pemF0aW9uU3VjY2VzcyhyZXNwb25zZSkpO1xuICAgIHlpZWxkIHB1dChwdXNoKCcvJykpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChwdXNoKCcvJykpO1xuICAgIHlpZWxkIHB1dChjcmVhdGVPcmdhbml6YXRpb25GYWlsdXJlKGVycm9yKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGZldGNoT3JnYW5pemF0aW9uKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBvcmdhbml6YXRpb25JZCwgY2FsbGJhY2sgfSA9IGFjdGlvbjtcbiAgICBjb25zdCBvcmdhbml6YXRpb25zID0geWllbGQgY2FsbChPcmdhbml6YXRpb25TZXJ2aWNlLmZldGNoT3JnYW5pemF0aW9uLCBvcmdhbml6YXRpb25JZCk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhvcmdhbml6YXRpb25zLmRhdGEpO1xuICAgIH1cbiAgICB5aWVsZCBwdXQoZmV0Y2hPcmdhbml6YXRpb25TdWNjZXNzKG9yZ2FuaXphdGlvbnMuZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChmZXRjaE9yZ2FuaXphdGlvbkZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hPcmdhbml6YXRpb25MaXN0KGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBsaW1pdCwgY3VycmVudFBhZ2UgfSA9IGFjdGlvbjtcbiAgICBjb25zdCBvcmdhbml6YXRpb25zID0geWllbGQgY2FsbChPcmdhbml6YXRpb25TZXJ2aWNlLmdldEFsbE9yZ2FuaXphdGlvbiwgbGltaXQsIGN1cnJlbnRQYWdlKTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hPcmdhbml6YXRpb25MaXN0U3VjY2Vzcyhvcmdhbml6YXRpb25zLmRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZmV0Y2hPcmdhbml6YXRpb25MaXN0RmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZU9yZ2FuaXphdGlvbixcbiAgZmV0Y2hPcmdhbml6YXRpb24sXG4gIGZldGNoT3JnYW5pemF0aW9uTGlzdFxufTtcbiJdfQ==