"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrUpdateEmailTemplate = createOrUpdateEmailTemplate;
exports.getEmailTemplate = getEmailTemplate;
exports.getAllEmailTemplates = getAllEmailTemplates;

var _connectedReactRouter = require("connected-react-router");

var _reactToastify = require("react-toastify");

var _effects = require("redux-saga/effects");

var _emailTemplate = require("../actions/emailTemplate");

var _errorConstants = _interopRequireDefault(require("../constants/errorConstants"));

var _emailTemplate2 = _interopRequireDefault(require("../services/emailTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createOrUpdateEmailTemplate),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(getEmailTemplate),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(getAllEmailTemplates);

function createOrUpdateEmailTemplate(action) {
  var data, message, response;
  return regeneratorRuntime.wrap(function createOrUpdateEmailTemplate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = action.data;
          message = "".concat(data._id ? 'Updated' : 'Created', " successfully");
          _context.prev = 2;
          _context.next = 5;
          return (0, _effects.call)(_emailTemplate2.default.createOrUpdateEmailTemplate, data);

        case 5:
          response = _context.sent;
          _context.next = 8;
          return (0, _effects.put)((0, _emailTemplate.createOrUpdateEmailTemplateSuccess)(response.data));

        case 8:
          _reactToastify.toast.success(message);

          _context.next = 11;
          return (0, _effects.put)((0, _connectedReactRouter.push)('/emailTemplateList'));

        case 11:
          _context.next = 18;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          _context.next = 17;
          return (0, _effects.put)((0, _emailTemplate.createOrUpdateEmailTemplateFail)(_context.t0));

        case 17:
          _reactToastify.toast.error(_errorConstants.default.REQUEST_FAIL.message);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 13]]);
}

function getEmailTemplate(action) {
  var id, callback, response;
  return regeneratorRuntime.wrap(function getEmailTemplate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = action.id, callback = action.callback;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(_emailTemplate2.default.getEmailTemplate, id);

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return (0, _effects.put)((0, _emailTemplate.getEmailTemplateSuccess)(response.data));

        case 7:
          if (callback) {
            callback(response.data);
          }

          _context2.next = 15;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          _context2.next = 14;
          return (0, _effects.put)((0, _emailTemplate.getEmailTemplateFail)(_context2.t0));

        case 14:
          _reactToastify.toast.error(_errorConstants.default.REQUEST_FAIL.message);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 10]]);
}

function getAllEmailTemplates(action) {
  var data, response;
  return regeneratorRuntime.wrap(function getAllEmailTemplates$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          data = action.data;
          _context3.next = 4;
          return (0, _effects.call)(_emailTemplate2.default.getAllEmailTemplates, data);

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return (0, _effects.put)((0, _emailTemplate.getAllEmailTemplatesSuccess)(response.data));

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return (0, _effects.put)((0, _emailTemplate.getAllEmailTemplatesFail)(_context3.t0));

        case 13:
          _reactToastify.toast.error(_errorConstants.default.REQUEST_FAIL.message);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9lbWFpbFRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbImNyZWF0ZU9yVXBkYXRlRW1haWxUZW1wbGF0ZSIsImdldEVtYWlsVGVtcGxhdGUiLCJnZXRBbGxFbWFpbFRlbXBsYXRlcyIsImFjdGlvbiIsImRhdGEiLCJtZXNzYWdlIiwiX2lkIiwiRW1haWxUZW1wbGF0ZVNlcnZpY2UiLCJyZXNwb25zZSIsInRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwiRXJyb3JDb25zdGFudHMiLCJSRVFVRVNUX0ZBSUwiLCJpZCIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFDQTs7Ozs7O3dCQUdpQkEsMkI7Ozt3QkFjQUMsZ0I7Ozt3QkFjQUMsb0I7O0FBNUJWLFNBQVVGLDJCQUFWLENBQXNDRyxNQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDR0MsVUFBQUEsSUFESCxHQUNZRCxNQURaLENBQ0dDLElBREg7QUFFQ0MsVUFBQUEsT0FGRCxhQUVjRCxJQUFJLENBQUNFLEdBQUwsR0FBVyxTQUFYLEdBQXVCLFNBRnJDO0FBQUE7QUFBQTtBQUljLGlCQUFNLG1CQUFLQyx3QkFBcUJQLDJCQUExQixFQUF1REksSUFBdkQsQ0FBTjs7QUFKZDtBQUlHSSxVQUFBQSxRQUpIO0FBQUE7QUFLSCxpQkFBTSxrQkFBSSx1REFBbUNBLFFBQVEsQ0FBQ0osSUFBNUMsQ0FBSixDQUFOOztBQUxHO0FBTUhLLCtCQUFNQyxPQUFOLENBQWNMLE9BQWQ7O0FBTkc7QUFPSCxpQkFBTSxrQkFBSSxnQ0FBSyxvQkFBTCxDQUFKLENBQU47O0FBUEc7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0gsaUJBQU0sa0JBQUksZ0VBQUosQ0FBTjs7QUFURztBQVVISSwrQkFBTUUsS0FBTixDQUFZQyx3QkFBZUMsWUFBZixDQUE0QlIsT0FBeEM7O0FBVkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY0EsU0FBVUosZ0JBQVYsQ0FBMkJFLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHVyxVQUFBQSxFQURILEdBQ29CWCxNQURwQixDQUNHVyxFQURILEVBQ09DLFFBRFAsR0FDb0JaLE1BRHBCLENBQ09ZLFFBRFA7QUFBQTtBQUFBO0FBR2MsaUJBQU0sbUJBQUtSLHdCQUFxQk4sZ0JBQTFCLEVBQTRDYSxFQUE1QyxDQUFOOztBQUhkO0FBR0dOLFVBQUFBLFFBSEg7QUFBQTtBQUlILGlCQUFNLGtCQUFJLDRDQUF3QkEsUUFBUSxDQUFDSixJQUFqQyxDQUFKLENBQU47O0FBSkc7QUFLSCxjQUFJVyxRQUFKLEVBQWM7QUFDWkEsWUFBQUEsUUFBUSxDQUFDUCxRQUFRLENBQUNKLElBQVYsQ0FBUjtBQUNEOztBQVBFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTSCxpQkFBTSxrQkFBSSxzREFBSixDQUFOOztBQVRHO0FBVUhLLCtCQUFNRSxLQUFOLENBQVlDLHdCQUFlQyxZQUFmLENBQTRCUixPQUF4Qzs7QUFWRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjQSxTQUFVSCxvQkFBVixDQUErQkMsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFS0MsVUFBQUEsSUFGTCxHQUVjRCxNQUZkLENBRUtDLElBRkw7QUFBQTtBQUdjLGlCQUFNLG1CQUFLRyx3QkFBcUJMLG9CQUExQixFQUFnREUsSUFBaEQsQ0FBTjs7QUFIZDtBQUdHSSxVQUFBQSxRQUhIO0FBQUE7QUFJSCxpQkFBTSxrQkFBSSxnREFBNEJBLFFBQVEsQ0FBQ0osSUFBckMsQ0FBSixDQUFOOztBQUpHO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1ILGlCQUFNLGtCQUFJLDBEQUFKLENBQU47O0FBTkc7QUFPSEssK0JBQU1FLEtBQU4sQ0FBWUMsd0JBQWVDLFlBQWYsQ0FBNEJSLE9BQXhDOztBQVBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHVzaCB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBjYWxsLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlT3JVcGRhdGVFbWFpbFRlbXBsYXRlRmFpbCxcbiAgY3JlYXRlT3JVcGRhdGVFbWFpbFRlbXBsYXRlU3VjY2VzcyxcbiAgZ2V0QWxsRW1haWxUZW1wbGF0ZXNGYWlsLFxuICBnZXRBbGxFbWFpbFRlbXBsYXRlc1N1Y2Nlc3MsXG4gIGdldEVtYWlsVGVtcGxhdGVGYWlsLFxuICBnZXRFbWFpbFRlbXBsYXRlU3VjY2Vzc1xufSBmcm9tICcuLi9hY3Rpb25zL2VtYWlsVGVtcGxhdGUnO1xuaW1wb3J0IEVycm9yQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cy9lcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgRW1haWxUZW1wbGF0ZVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvZW1haWxUZW1wbGF0ZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBjcmVhdGVPclVwZGF0ZUVtYWlsVGVtcGxhdGUoYWN0aW9uOiBhbnkpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhY3Rpb247XG4gIGNvbnN0IG1lc3NhZ2UgPSBgJHtkYXRhLl9pZCA/ICdVcGRhdGVkJyA6ICdDcmVhdGVkJ30gc3VjY2Vzc2Z1bGx5YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoRW1haWxUZW1wbGF0ZVNlcnZpY2UuY3JlYXRlT3JVcGRhdGVFbWFpbFRlbXBsYXRlLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoY3JlYXRlT3JVcGRhdGVFbWFpbFRlbXBsYXRlU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gICAgdG9hc3Quc3VjY2VzcyhtZXNzYWdlKTtcbiAgICB5aWVsZCBwdXQocHVzaCgnL2VtYWlsVGVtcGxhdGVMaXN0JykpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChjcmVhdGVPclVwZGF0ZUVtYWlsVGVtcGxhdGVGYWlsKGVycm9yKSk7XG4gICAgdG9hc3QuZXJyb3IoRXJyb3JDb25zdGFudHMuUkVRVUVTVF9GQUlMLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0RW1haWxUZW1wbGF0ZShhY3Rpb246IGFueSkge1xuICBjb25zdCB7IGlkLCBjYWxsYmFjayB9ID0gYWN0aW9uO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChFbWFpbFRlbXBsYXRlU2VydmljZS5nZXRFbWFpbFRlbXBsYXRlLCBpZCk7XG4gICAgeWllbGQgcHV0KGdldEVtYWlsVGVtcGxhdGVTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZ2V0RW1haWxUZW1wbGF0ZUZhaWwoZXJyb3IpKTtcbiAgICB0b2FzdC5lcnJvcihFcnJvckNvbnN0YW50cy5SRVFVRVNUX0ZBSUwubWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRBbGxFbWFpbFRlbXBsYXRlcyhhY3Rpb246IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYWN0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChFbWFpbFRlbXBsYXRlU2VydmljZS5nZXRBbGxFbWFpbFRlbXBsYXRlcywgZGF0YSk7XG4gICAgeWllbGQgcHV0KGdldEFsbEVtYWlsVGVtcGxhdGVzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGdldEFsbEVtYWlsVGVtcGxhdGVzRmFpbChlcnJvcikpO1xuICAgIHRvYXN0LmVycm9yKEVycm9yQ29uc3RhbnRzLlJFUVVFU1RfRkFJTC5tZXNzYWdlKTtcbiAgfVxufVxuIl19