"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveAppForm = saveAppForm;
exports.fetchAppForm = fetchAppForm;

var _effects = require("redux-saga/effects");

var _appform = require("../actions/appform");

var _appform2 = _interopRequireDefault(require("../services/appform"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(saveAppForm),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchAppForm);

function saveAppForm(action) {
  var api, data, response;
  return regeneratorRuntime.wrap(function saveAppForm$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          api = action.api, data = action.data;
          _context.next = 4;
          return (0, _effects.call)(_appform2.default.saveAppForm, api, data);

        case 4:
          response = _context.sent;
          _context.next = 7;
          return (0, _effects.put)((0, _appform.saveAppFormSuccess)(response.data));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          _context.next = 13;
          return (0, _effects.put)((0, _appform.saveAppFormFailure)(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function fetchAppForm(action) {
  var api, response;
  return regeneratorRuntime.wrap(function fetchAppForm$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          api = action.api;
          _context2.next = 4;
          return (0, _effects.call)(_appform2.default.fetchAppForm, api);

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return (0, _effects.put)((0, _appform.fetchAppFormSuccess)(response.data));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return (0, _effects.put)((0, _appform.fetchAppFormFailure)(_context2.t0));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9hcHBmb3JtLnRzIl0sIm5hbWVzIjpbInNhdmVBcHBGb3JtIiwiZmV0Y2hBcHBGb3JtIiwiYWN0aW9uIiwiYXBpIiwiZGF0YSIsIkFwcEZvcm1TZXJ2aWNlIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBTUE7Ozs7Ozt3QkFFVUEsVzs7O3dCQVVBQyxZOztBQVZWLFNBQVVELFdBQVYsQ0FBc0JFLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVlDLFVBQUFBLEdBRlosR0FFMEJELE1BRjFCLENBRVlDLEdBRlosRUFFaUJDLElBRmpCLEdBRTBCRixNQUYxQixDQUVpQkUsSUFGakI7QUFBQTtBQUdxQixpQkFBTSxtQkFBS0Msa0JBQWVMLFdBQXBCLEVBQWlDRyxHQUFqQyxFQUFzQ0MsSUFBdEMsQ0FBTjs7QUFIckI7QUFHVUUsVUFBQUEsUUFIVjtBQUFBO0FBSUksaUJBQU0sa0JBQUksaUNBQW1CQSxRQUFRLENBQUNGLElBQTVCLENBQUosQ0FBTjs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSSxpQkFBTSxrQkFBSSw2Q0FBSixDQUFOOztBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBLFNBQVVILFlBQVYsQ0FBdUJDLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVlDLFVBQUFBLEdBRlosR0FFb0JELE1BRnBCLENBRVlDLEdBRlo7QUFBQTtBQUdxQixpQkFBTSxtQkFBS0Usa0JBQWVKLFlBQXBCLEVBQWtDRSxHQUFsQyxDQUFOOztBQUhyQjtBQUdVRyxVQUFBQSxRQUhWO0FBQUE7QUFJSSxpQkFBTSxrQkFBSSxrQ0FBb0JBLFFBQVEsQ0FBQ0YsSUFBN0IsQ0FBSixDQUFOOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1JLGlCQUFNLGtCQUFJLCtDQUFKLENBQU47O0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgZmV0Y2hBcHBGb3JtRmFpbHVyZSxcbiAgZmV0Y2hBcHBGb3JtU3VjY2VzcyxcbiAgc2F2ZUFwcEZvcm1GYWlsdXJlLFxuICBzYXZlQXBwRm9ybVN1Y2Nlc3Ncbn0gZnJvbSAnLi4vYWN0aW9ucy9hcHBmb3JtJztcbmltcG9ydCBBcHBGb3JtU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9hcHBmb3JtJztcblxuZnVuY3Rpb24qIHNhdmVBcHBGb3JtKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhcGksIGRhdGEgfSA9IGFjdGlvbjtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQXBwRm9ybVNlcnZpY2Uuc2F2ZUFwcEZvcm0sIGFwaSwgZGF0YSk7XG4gICAgeWllbGQgcHV0KHNhdmVBcHBGb3JtU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHNhdmVBcHBGb3JtRmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBmZXRjaEFwcEZvcm0oYWN0aW9uOiBhbnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGFwaSB9ID0gYWN0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBcHBGb3JtU2VydmljZS5mZXRjaEFwcEZvcm0sIGFwaSk7XG4gICAgeWllbGQgcHV0KGZldGNoQXBwRm9ybVN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChmZXRjaEFwcEZvcm1GYWlsdXJlKGVycm9yKSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgc2F2ZUFwcEZvcm0sXG4gIGZldGNoQXBwRm9ybVxufTtcbiJdfQ==