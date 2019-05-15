"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchFormTrigger = fetchFormTrigger;
exports.saveFormTrigger = saveFormTrigger;
exports.fetchFormTriggerList = fetchFormTriggerList;
exports.fetchSourceFormTrigger = fetchSourceFormTrigger;
exports.fetchTargetFormTrigger = fetchTargetFormTrigger;

var _connectedReactRouter = require("connected-react-router");

var _effects = require("redux-saga/effects");

var _formTrigger = require("../actions/formTrigger");

var _formTrigger2 = _interopRequireDefault(require("../services/formTrigger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchFormTrigger),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchSourceFormTrigger),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchTargetFormTrigger),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchFormTriggerList),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(saveFormTrigger);

function fetchFormTrigger(action) {
  var formTriggerId, callBack, response;
  return regeneratorRuntime.wrap(function fetchFormTrigger$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          formTriggerId = action.formTriggerId, callBack = action.callBack;
          _context.next = 4;
          return (0, _effects.call)(_formTrigger2.default.fetchFormTrigger, formTriggerId);

        case 4:
          response = _context.sent;

          if (callBack) {
            callBack(response.data);
          }

          _context.next = 8;
          return (0, _effects.put)((0, _formTrigger.fetchFormTriggerSuccess)(response.data));

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return (0, _effects.put)((0, _formTrigger.fetchFormTriggerFailure)(_context.t0));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function fetchSourceFormTrigger(action) {
  var formName, response;
  return regeneratorRuntime.wrap(function fetchSourceFormTrigger$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          formName = action.formName;
          _context2.next = 4;
          return (0, _effects.call)(_formTrigger2.default.fetchFormFieldsTrigger, formName);

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return (0, _effects.put)((0, _formTrigger.fetchSourceFormFieldsSuccess)(response.data));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return (0, _effects.put)((0, _formTrigger.fetchSourceFormFieldsFailure)(_context2.t0));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function fetchTargetFormTrigger(action) {
  var formName, response;
  return regeneratorRuntime.wrap(function fetchTargetFormTrigger$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          formName = action.formName;
          _context3.next = 4;
          return (0, _effects.call)(_formTrigger2.default.fetchFormFieldsTrigger, formName);

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return (0, _effects.put)((0, _formTrigger.fetchTargetFormFieldsSuccess)(response.data));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return (0, _effects.put)((0, _formTrigger.fetchTargetFormFieldsFailure)(_context3.t0));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function fetchFormTriggerList(action) {
  var currentPage, formId, limit, response;
  return regeneratorRuntime.wrap(function fetchFormTriggerList$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          currentPage = action.currentPage, formId = action.formId, limit = action.limit;
          _context4.next = 4;
          return (0, _effects.call)(_formTrigger2.default.fetchFormTriggerList, formId, limit, currentPage);

        case 4:
          response = _context4.sent;
          _context4.next = 7;
          return (0, _effects.put)((0, _formTrigger.fetchFormTriggerListSuccess)(response.data));

        case 7:
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 13;
          return (0, _effects.put)((0, _formTrigger.fetchFormTriggerListFailure)(_context4.t0));

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

function saveFormTrigger(action) {
  var data, formTriggerId;
  return regeneratorRuntime.wrap(function saveFormTrigger$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          data = action.data, formTriggerId = action.formTriggerId;
          _context5.next = 4;
          return (0, _effects.call)(_formTrigger2.default.saveFormTrigger, data, formTriggerId);

        case 4:
          _context5.next = 6;
          return (0, _effects.put)((0, _formTrigger.saveFormTriggerSuccess)());

        case 6:
          _context5.next = 8;
          return (0, _effects.put)((0, _connectedReactRouter.push)("/formTriggerList/".concat(data.form)));

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 14;
          return (0, _effects.put)((0, _formTrigger.saveFormTriggerFailure)(_context5.t0));

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 10]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9mb3JtVHJpZ2dlci50cyJdLCJuYW1lcyI6WyJmZXRjaEZvcm1UcmlnZ2VyIiwiZmV0Y2hTb3VyY2VGb3JtVHJpZ2dlciIsImZldGNoVGFyZ2V0Rm9ybVRyaWdnZXIiLCJmZXRjaEZvcm1UcmlnZ2VyTGlzdCIsInNhdmVGb3JtVHJpZ2dlciIsImFjdGlvbiIsImZvcm1UcmlnZ2VySWQiLCJjYWxsQmFjayIsIkZvcm1UcmlnZ2VyU2VydmljZSIsInJlc3BvbnNlIiwiZGF0YSIsImZvcm1OYW1lIiwiZmV0Y2hGb3JtRmllbGRzVHJpZ2dlciIsImN1cnJlbnRQYWdlIiwiZm9ybUlkIiwibGltaXQiLCJmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQVlBOzs7Ozs7d0JBRVVBLGdCOzs7d0JBYUFDLHNCOzs7d0JBVUFDLHNCOzs7d0JBVUFDLG9COzs7d0JBVUFDLGU7O0FBM0NWLFNBQVVKLGdCQUFWLENBQTJCSyxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZQyxVQUFBQSxhQUZaLEdBRXdDRCxNQUZ4QyxDQUVZQyxhQUZaLEVBRTJCQyxRQUYzQixHQUV3Q0YsTUFGeEMsQ0FFMkJFLFFBRjNCO0FBQUE7QUFHcUIsaUJBQU0sbUJBQUtDLHNCQUFtQlIsZ0JBQXhCLEVBQTBDTSxhQUExQyxDQUFOOztBQUhyQjtBQUdVRyxVQUFBQSxRQUhWOztBQUlJLGNBQUlGLFFBQUosRUFBYztBQUNaQSxZQUFBQSxRQUFRLENBQUNFLFFBQVEsQ0FBQ0MsSUFBVixDQUFSO0FBQ0Q7O0FBTkw7QUFPSSxpQkFBTSxrQkFBSSwwQ0FBd0JELFFBQVEsQ0FBQ0MsSUFBakMsQ0FBSixDQUFOOztBQVBKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNLGtCQUFJLHNEQUFKLENBQU47O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYUEsU0FBVVQsc0JBQVYsQ0FBaUNJLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVlNLFVBQUFBLFFBRlosR0FFeUJOLE1BRnpCLENBRVlNLFFBRlo7QUFBQTtBQUdxQixpQkFBTSxtQkFBS0gsc0JBQW1CSSxzQkFBeEIsRUFBZ0RELFFBQWhELENBQU47O0FBSHJCO0FBR1VGLFVBQUFBLFFBSFY7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLCtDQUE2QkEsUUFBUSxDQUFDQyxJQUF0QyxDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUksaUJBQU0sa0JBQUksNERBQUosQ0FBTjs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVQSxTQUFVUixzQkFBVixDQUFpQ0csTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWU0sVUFBQUEsUUFGWixHQUV5Qk4sTUFGekIsQ0FFWU0sUUFGWjtBQUFBO0FBR3FCLGlCQUFNLG1CQUFLSCxzQkFBbUJJLHNCQUF4QixFQUFnREQsUUFBaEQsQ0FBTjs7QUFIckI7QUFHVUYsVUFBQUEsUUFIVjtBQUFBO0FBSUksaUJBQU0sa0JBQUksK0NBQTZCQSxRQUFRLENBQUNDLElBQXRDLENBQUosQ0FBTjs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSSxpQkFBTSxrQkFBSSw0REFBSixDQUFOOztBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBLFNBQVVQLG9CQUFWLENBQStCRSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZUSxVQUFBQSxXQUZaLEdBRTJDUixNQUYzQyxDQUVZUSxXQUZaLEVBRXlCQyxNQUZ6QixHQUUyQ1QsTUFGM0MsQ0FFeUJTLE1BRnpCLEVBRWlDQyxLQUZqQyxHQUUyQ1YsTUFGM0MsQ0FFaUNVLEtBRmpDO0FBQUE7QUFHcUIsaUJBQU0sbUJBQUtQLHNCQUFtQkwsb0JBQXhCLEVBQThDVyxNQUE5QyxFQUFzREMsS0FBdEQsRUFBNkRGLFdBQTdELENBQU47O0FBSHJCO0FBR1VKLFVBQUFBLFFBSFY7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLDhDQUE0QkEsUUFBUSxDQUFDQyxJQUFyQyxDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUksaUJBQU0sa0JBQUksMkRBQUosQ0FBTjs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVQSxTQUFVTixlQUFWLENBQTBCQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZSyxVQUFBQSxJQUZaLEdBRW9DTCxNQUZwQyxDQUVZSyxJQUZaLEVBRWtCSixhQUZsQixHQUVvQ0QsTUFGcEMsQ0FFa0JDLGFBRmxCO0FBQUE7QUFHSSxpQkFBTSxtQkFBS0Usc0JBQW1CSixlQUF4QixFQUF5Q00sSUFBekMsRUFBK0NKLGFBQS9DLENBQU47O0FBSEo7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLDBDQUFKLENBQU47O0FBSko7QUFBQTtBQUtJLGlCQUFNLGtCQUFJLDJEQUF5QkksSUFBSSxDQUFDTSxJQUE5QixFQUFKLENBQU47O0FBTEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0ksaUJBQU0sa0JBQUksc0RBQUosQ0FBTjs7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1c2ggfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBmZXRjaEZvcm1UcmlnZ2VyRmFpbHVyZSxcbiAgZmV0Y2hGb3JtVHJpZ2dlckxpc3RGYWlsdXJlLFxuICBmZXRjaEZvcm1UcmlnZ2VyTGlzdFN1Y2Nlc3MsXG4gIGZldGNoRm9ybVRyaWdnZXJTdWNjZXNzLFxuICBmZXRjaFNvdXJjZUZvcm1GaWVsZHNGYWlsdXJlLFxuICBmZXRjaFNvdXJjZUZvcm1GaWVsZHNTdWNjZXNzLFxuICBmZXRjaFRhcmdldEZvcm1GaWVsZHNGYWlsdXJlLFxuICBmZXRjaFRhcmdldEZvcm1GaWVsZHNTdWNjZXNzLFxuICBzYXZlRm9ybVRyaWdnZXJGYWlsdXJlLFxuICBzYXZlRm9ybVRyaWdnZXJTdWNjZXNzXG59IGZyb20gJy4uL2FjdGlvbnMvZm9ybVRyaWdnZXInO1xuaW1wb3J0IEZvcm1UcmlnZ2VyU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9mb3JtVHJpZ2dlcic7XG5cbmZ1bmN0aW9uKiBmZXRjaEZvcm1UcmlnZ2VyKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBmb3JtVHJpZ2dlcklkLCBjYWxsQmFjayB9ID0gYWN0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChGb3JtVHJpZ2dlclNlcnZpY2UuZmV0Y2hGb3JtVHJpZ2dlciwgZm9ybVRyaWdnZXJJZCk7XG4gICAgaWYgKGNhbGxCYWNrKSB7XG4gICAgICBjYWxsQmFjayhyZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gICAgeWllbGQgcHV0KGZldGNoRm9ybVRyaWdnZXJTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZmV0Y2hGb3JtVHJpZ2dlckZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hTb3VyY2VGb3JtVHJpZ2dlcihhY3Rpb246IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZm9ybU5hbWUgfSA9IGFjdGlvbjtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoRm9ybVRyaWdnZXJTZXJ2aWNlLmZldGNoRm9ybUZpZWxkc1RyaWdnZXIsIGZvcm1OYW1lKTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hTb3VyY2VGb3JtRmllbGRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGZldGNoU291cmNlRm9ybUZpZWxkc0ZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hUYXJnZXRGb3JtVHJpZ2dlcihhY3Rpb246IGFueSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZm9ybU5hbWUgfSA9IGFjdGlvbjtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoRm9ybVRyaWdnZXJTZXJ2aWNlLmZldGNoRm9ybUZpZWxkc1RyaWdnZXIsIGZvcm1OYW1lKTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hUYXJnZXRGb3JtRmllbGRzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGZldGNoVGFyZ2V0Rm9ybUZpZWxkc0ZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hGb3JtVHJpZ2dlckxpc3QoYWN0aW9uOiBhbnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCBmb3JtSWQsIGxpbWl0IH0gPSBhY3Rpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEZvcm1UcmlnZ2VyU2VydmljZS5mZXRjaEZvcm1UcmlnZ2VyTGlzdCwgZm9ybUlkLCBsaW1pdCwgY3VycmVudFBhZ2UpO1xuICAgIHlpZWxkIHB1dChmZXRjaEZvcm1UcmlnZ2VyTGlzdFN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChmZXRjaEZvcm1UcmlnZ2VyTGlzdEZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogc2F2ZUZvcm1UcmlnZ2VyKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhLCBmb3JtVHJpZ2dlcklkIH0gPSBhY3Rpb247XG4gICAgeWllbGQgY2FsbChGb3JtVHJpZ2dlclNlcnZpY2Uuc2F2ZUZvcm1UcmlnZ2VyLCBkYXRhLCBmb3JtVHJpZ2dlcklkKTtcbiAgICB5aWVsZCBwdXQoc2F2ZUZvcm1UcmlnZ2VyU3VjY2VzcygpKTtcbiAgICB5aWVsZCBwdXQocHVzaChgL2Zvcm1UcmlnZ2VyTGlzdC8ke2RhdGEuZm9ybX1gKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHNhdmVGb3JtVHJpZ2dlckZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBmZXRjaEZvcm1UcmlnZ2VyLFxuICBzYXZlRm9ybVRyaWdnZXIsXG4gIGZldGNoRm9ybVRyaWdnZXJMaXN0LFxuICBmZXRjaFNvdXJjZUZvcm1UcmlnZ2VyLFxuICBmZXRjaFRhcmdldEZvcm1UcmlnZ2VyXG59O1xuIl19