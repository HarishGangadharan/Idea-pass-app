"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchFormFieldData = fetchFormFieldData;
exports.saveFormFieldData = saveFormFieldData;
exports.fetchFormFieldDataList = fetchFormFieldDataList;

var _connectedReactRouter = require("connected-react-router");

var _effects = require("redux-saga/effects");

var _formfielddata = require("../actions/formfielddata");

var _formfielddata2 = _interopRequireDefault(require("../services/formfielddata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchFormFieldData),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchFormFieldDataList),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(saveFormFieldData);

function fetchFormFieldData(action) {
  var formName, formDataId, response;
  return regeneratorRuntime.wrap(function fetchFormFieldData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          formName = action.formName, formDataId = action.formDataId;
          _context.next = 4;
          return (0, _effects.call)(_formfielddata2.default.fetchFormFieldData, formName, formDataId);

        case 4:
          response = _context.sent;
          _context.next = 7;
          return (0, _effects.put)((0, _formfielddata.fetchFormFieldDataSuccess)(response.data));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          _context.next = 13;
          return (0, _effects.put)((0, _formfielddata.fetchFormFieldDataFailure)(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function fetchFormFieldDataList(action) {
  var currentPage, formName, limit, response;
  return regeneratorRuntime.wrap(function fetchFormFieldDataList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          currentPage = action.currentPage, formName = action.formName, limit = action.limit;
          _context2.next = 4;
          return (0, _effects.call)(_formfielddata2.default.fetchFormFieldDataList, formName, limit, currentPage);

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return (0, _effects.put)((0, _formfielddata.fetchFormFieldDataListSuccess)(response.data));

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return (0, _effects.put)((0, _formfielddata.fetchFormFieldDataListFailure)(_context2.t0));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function saveFormFieldData(action) {
  var data, formName, formDataId, formId, response;
  return regeneratorRuntime.wrap(function saveFormFieldData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          data = action.data, formName = action.formName, formDataId = action.formDataId, formId = action.formId;
          _context3.next = 4;
          return (0, _effects.call)(_formfielddata2.default.saveFormFieldData, data, formName, formDataId);

        case 4:
          response = _context3.sent;

          if (!response) {
            _context3.next = 10;
            break;
          }

          _context3.next = 8;
          return (0, _effects.put)((0, _formfielddata.saveFormFieldDataSuccess)(data));

        case 8:
          _context3.next = 10;
          return (0, _effects.put)((0, _connectedReactRouter.push)("/formDataList/".concat(formName, "/").concat(formId)));

        case 10:
          _context3.next = 16;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 16;
          return (0, _effects.put)((0, _formfielddata.saveFormFieldDataFailure)(_context3.t0));

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 12]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9mb3JtZmllbGRkYXRhLnRzIl0sIm5hbWVzIjpbImZldGNoRm9ybUZpZWxkRGF0YSIsImZldGNoRm9ybUZpZWxkRGF0YUxpc3QiLCJzYXZlRm9ybUZpZWxkRGF0YSIsImFjdGlvbiIsImZvcm1OYW1lIiwiZm9ybURhdGFJZCIsIkZvcm1GaWVsZERhdGFTZXJ2aWNlIiwicmVzcG9uc2UiLCJkYXRhIiwiY3VycmVudFBhZ2UiLCJsaW1pdCIsImZvcm1JZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBUUE7Ozs7Ozt3QkFFVUEsa0I7Ozt3QkFVQUMsc0I7Ozt3QkFVQUMsaUI7O0FBcEJWLFNBQVVGLGtCQUFWLENBQTZCRyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZQyxVQUFBQSxRQUZaLEdBRXFDRCxNQUZyQyxDQUVZQyxRQUZaLEVBRXNCQyxVQUZ0QixHQUVxQ0YsTUFGckMsQ0FFc0JFLFVBRnRCO0FBQUE7QUFHcUIsaUJBQU0sbUJBQUtDLHdCQUFxQk4sa0JBQTFCLEVBQThDSSxRQUE5QyxFQUF3REMsVUFBeEQsQ0FBTjs7QUFIckI7QUFHVUUsVUFBQUEsUUFIVjtBQUFBO0FBSU0saUJBQU0sa0JBQUksOENBQTBCQSxRQUFRLENBQUNDLElBQW5DLENBQUosQ0FBTjs7QUFKTjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSSxpQkFBTSxrQkFBSSwwREFBSixDQUFOOztBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBLFNBQVVQLHNCQUFWLENBQWlDRSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZTSxVQUFBQSxXQUZaLEdBRTZDTixNQUY3QyxDQUVZTSxXQUZaLEVBRXlCTCxRQUZ6QixHQUU2Q0QsTUFGN0MsQ0FFeUJDLFFBRnpCLEVBRW1DTSxLQUZuQyxHQUU2Q1AsTUFGN0MsQ0FFbUNPLEtBRm5DO0FBQUE7QUFHcUIsaUJBQU0sbUJBQUtKLHdCQUFxQkwsc0JBQTFCLEVBQWtERyxRQUFsRCxFQUE0RE0sS0FBNUQsRUFBbUVELFdBQW5FLENBQU47O0FBSHJCO0FBR1VGLFVBQUFBLFFBSFY7QUFBQTtBQUlJLGlCQUFNLGtCQUFJLGtEQUE4QkEsUUFBUSxDQUFDQyxJQUF2QyxDQUFKLENBQU47O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUksaUJBQU0sa0JBQUksK0RBQUosQ0FBTjs7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVQSxTQUFVTixpQkFBVixDQUE0QkMsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFWUssVUFBQUEsSUFGWixHQUVtREwsTUFGbkQsQ0FFWUssSUFGWixFQUVrQkosUUFGbEIsR0FFbURELE1BRm5ELENBRWtCQyxRQUZsQixFQUU0QkMsVUFGNUIsR0FFbURGLE1BRm5ELENBRTRCRSxVQUY1QixFQUV3Q00sTUFGeEMsR0FFbURSLE1BRm5ELENBRXdDUSxNQUZ4QztBQUFBO0FBR3FCLGlCQUFNLG1CQUFLTCx3QkFBcUJKLGlCQUExQixFQUE2Q00sSUFBN0MsRUFBbURKLFFBQW5ELEVBQTZEQyxVQUE3RCxDQUFOOztBQUhyQjtBQUdVRSxVQUFBQSxRQUhWOztBQUFBLGVBSVFBLFFBSlI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFLTSxpQkFBTSxrQkFBSSw2Q0FBeUJDLElBQXpCLENBQUosQ0FBTjs7QUFMTjtBQUFBO0FBTU0saUJBQU0sa0JBQUksd0RBQXNCSixRQUF0QixjQUFrQ08sTUFBbEMsRUFBSixDQUFOOztBQU5OO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNLGtCQUFJLDBEQUFKLENBQU47O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXNoIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjYWxsLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgZmV0Y2hGb3JtRmllbGREYXRhRmFpbHVyZSxcbiAgZmV0Y2hGb3JtRmllbGREYXRhTGlzdEZhaWx1cmUsXG4gIGZldGNoRm9ybUZpZWxkRGF0YUxpc3RTdWNjZXNzLFxuICBmZXRjaEZvcm1GaWVsZERhdGFTdWNjZXNzLFxuICBzYXZlRm9ybUZpZWxkRGF0YUZhaWx1cmUsXG4gIHNhdmVGb3JtRmllbGREYXRhU3VjY2Vzc1xufSBmcm9tICcuLi9hY3Rpb25zL2Zvcm1maWVsZGRhdGEnO1xuaW1wb3J0IEZvcm1GaWVsZERhdGFTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2Zvcm1maWVsZGRhdGEnO1xuXG5mdW5jdGlvbiogZmV0Y2hGb3JtRmllbGREYXRhKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBmb3JtTmFtZSwgZm9ybURhdGFJZCB9ID0gYWN0aW9uO1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChGb3JtRmllbGREYXRhU2VydmljZS5mZXRjaEZvcm1GaWVsZERhdGEsIGZvcm1OYW1lLCBmb3JtRGF0YUlkKTtcbiAgICAgIHlpZWxkIHB1dChmZXRjaEZvcm1GaWVsZERhdGFTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZmV0Y2hGb3JtRmllbGREYXRhRmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBmZXRjaEZvcm1GaWVsZERhdGFMaXN0KGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBjdXJyZW50UGFnZSwgZm9ybU5hbWUsIGxpbWl0IH0gPSBhY3Rpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEZvcm1GaWVsZERhdGFTZXJ2aWNlLmZldGNoRm9ybUZpZWxkRGF0YUxpc3QsIGZvcm1OYW1lLCBsaW1pdCwgY3VycmVudFBhZ2UpO1xuICAgIHlpZWxkIHB1dChmZXRjaEZvcm1GaWVsZERhdGFMaXN0U3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGZldGNoRm9ybUZpZWxkRGF0YUxpc3RGYWlsdXJlKGVycm9yKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHNhdmVGb3JtRmllbGREYXRhKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkYXRhLCBmb3JtTmFtZSwgZm9ybURhdGFJZCwgZm9ybUlkIH0gPSBhY3Rpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEZvcm1GaWVsZERhdGFTZXJ2aWNlLnNhdmVGb3JtRmllbGREYXRhLCBkYXRhLCBmb3JtTmFtZSwgZm9ybURhdGFJZCk7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICB5aWVsZCBwdXQoc2F2ZUZvcm1GaWVsZERhdGFTdWNjZXNzKGRhdGEpKTtcbiAgICAgIHlpZWxkIHB1dChwdXNoKGAvZm9ybURhdGFMaXN0LyR7Zm9ybU5hbWV9LyR7Zm9ybUlkfWApKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHNhdmVGb3JtRmllbGREYXRhRmFpbHVyZShlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGZldGNoRm9ybUZpZWxkRGF0YSxcbiAgc2F2ZUZvcm1GaWVsZERhdGEsXG4gIGZldGNoRm9ybUZpZWxkRGF0YUxpc3Rcbn07XG4iXX0=