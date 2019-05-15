"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFormSchema = createFormSchema;
exports.fetchFormSchema = fetchFormSchema;
exports.fetchFormList = fetchFormList;
exports.fetchTemplateList = fetchTemplateList;

var _connectedReactRouter = require("connected-react-router");

var _effects = require("redux-saga/effects");

var _formschema = require("../actions/formschema");

var _formschema2 = _interopRequireDefault(require("../services/formschema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createFormSchema),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchFormSchema),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchFormList),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(fetchTemplateList);

function createFormSchema(action) {
  var payload, schemaId, response;
  return regeneratorRuntime.wrap(function createFormSchema$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          payload = action.payload, schemaId = action.schemaId;
          _context.next = 4;
          return (0, _effects.call)(_formschema2.default.createFormSchema, payload, schemaId);

        case 4:
          response = _context.sent;

          if (!response) {
            _context.next = 10;
            break;
          }

          _context.next = 8;
          return (0, _effects.put)((0, _formschema.createFormSchemaSuccess)(response));

        case 8:
          _context.next = 10;
          return (0, _effects.put)((0, _formschema.addFormSchema)(response));

        case 10:
          _context.next = 12;
          return (0, _effects.put)((0, _connectedReactRouter.push)('/formschemalist'));

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          _context.next = 18;
          return (0, _effects.put)((0, _formschema.createFormSchemaFailure)(_context.t0));

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 14]]);
}

function fetchFormSchema(action) {
  var schemaId, callback, formSchemas;
  return regeneratorRuntime.wrap(function fetchFormSchema$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          schemaId = action.schemaId, callback = action.callback;
          _context2.next = 4;
          return (0, _effects.call)(_formschema2.default.fetchFormSchema, schemaId);

        case 4:
          formSchemas = _context2.sent;

          if (callback) {
            callback(formSchemas.data);
          }

          _context2.next = 8;
          return (0, _effects.put)((0, _formschema.fetchFormSchemaSuccess)(formSchemas.data));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return (0, _effects.put)((0, _formschema.fetchFormSchemaFailure)(_context2.t0));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function fetchFormList(action) {
  var limit, currentPage, sortField, sortOrder, formSchemas;
  return regeneratorRuntime.wrap(function fetchFormList$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          limit = action.limit, currentPage = action.currentPage, sortField = action.sortField, sortOrder = action.sortOrder;
          _context3.next = 4;
          return (0, _effects.call)(_formschema2.default.getAllFormSchema, limit, currentPage, sortField, sortOrder);

        case 4:
          formSchemas = _context3.sent;
          _context3.next = 7;
          return (0, _effects.put)((0, _formschema.fetchFormSchemaListSuccess)(formSchemas.data));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 13;
          return (0, _effects.put)((0, _formschema.fetchFormSchemaListFailure)(_context3.t0));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function fetchTemplateList(action) {
  var callback, response;
  return regeneratorRuntime.wrap(function fetchTemplateList$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          callback = action.callback;
          _context4.next = 4;
          return (0, _effects.call)(_formschema2.default.fetchTemplateList);

        case 4:
          response = _context4.sent;

          if (callback) {
            callback(response.data.data);
          }

          _context4.next = 8;
          return (0, _effects.put)((0, _formschema.fetchTemplateListSuccess)(response.data));

        case 8:
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 14;
          return (0, _effects.put)((0, _formschema.fetchTemplateListFailure)(_context4.t0));

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 10]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy9mb3Jtc2NoZW1hLnRzIl0sIm5hbWVzIjpbImNyZWF0ZUZvcm1TY2hlbWEiLCJmZXRjaEZvcm1TY2hlbWEiLCJmZXRjaEZvcm1MaXN0IiwiZmV0Y2hUZW1wbGF0ZUxpc3QiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2NoZW1hSWQiLCJGb3JtU2NoZW1hU2VydmljZSIsInJlc3BvbnNlIiwiY2FsbGJhY2siLCJmb3JtU2NoZW1hcyIsImRhdGEiLCJsaW1pdCIsImN1cnJlbnRQYWdlIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiZ2V0QWxsRm9ybVNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQVlBOzs7Ozs7d0JBRVVBLGdCOzs7d0JBY0FDLGU7Ozt3QkFhQUMsYTs7O3dCQVVBQyxpQjs7QUFyQ1YsU0FBVUgsZ0JBQVYsQ0FBMkJJLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVlDLFVBQUFBLE9BRlosR0FFaUNELE1BRmpDLENBRVlDLE9BRlosRUFFcUJDLFFBRnJCLEdBRWlDRixNQUZqQyxDQUVxQkUsUUFGckI7QUFBQTtBQUdxQixpQkFBTSxtQkFBS0MscUJBQWtCUCxnQkFBdkIsRUFBeUNLLE9BQXpDLEVBQWtEQyxRQUFsRCxDQUFOOztBQUhyQjtBQUdVRSxVQUFBQSxRQUhWOztBQUFBLGVBSVFBLFFBSlI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFLTSxpQkFBTSxrQkFBSSx5Q0FBd0JBLFFBQXhCLENBQUosQ0FBTjs7QUFMTjtBQUFBO0FBTU0saUJBQU0sa0JBQUksK0JBQWNBLFFBQWQsQ0FBSixDQUFOOztBQU5OO0FBQUE7QUFRSSxpQkFBTSxrQkFBSSxnQ0FBSyxpQkFBTCxDQUFKLENBQU47O0FBUko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUksaUJBQU0sa0JBQUkscURBQUosQ0FBTjs7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjQSxTQUFVUCxlQUFWLENBQTBCRyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZRSxVQUFBQSxRQUZaLEdBRW1DRixNQUZuQyxDQUVZRSxRQUZaLEVBRXNCRyxRQUZ0QixHQUVtQ0wsTUFGbkMsQ0FFc0JLLFFBRnRCO0FBQUE7QUFHd0IsaUJBQU0sbUJBQUtGLHFCQUFrQk4sZUFBdkIsRUFBd0NLLFFBQXhDLENBQU47O0FBSHhCO0FBR1VJLFVBQUFBLFdBSFY7O0FBSUksY0FBSUQsUUFBSixFQUFjO0FBQ1pBLFlBQUFBLFFBQVEsQ0FBQ0MsV0FBVyxDQUFDQyxJQUFiLENBQVI7QUFDRDs7QUFOTDtBQU9JLGlCQUFNLGtCQUFJLHdDQUF1QkQsV0FBVyxDQUFDQyxJQUFuQyxDQUFKLENBQU47O0FBUEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0ksaUJBQU0sa0JBQUkscURBQUosQ0FBTjs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhQSxTQUFVVCxhQUFWLENBQXdCRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVZUSxVQUFBQSxLQUZaLEdBRXlEUixNQUZ6RCxDQUVZUSxLQUZaLEVBRW1CQyxXQUZuQixHQUV5RFQsTUFGekQsQ0FFbUJTLFdBRm5CLEVBRWdDQyxTQUZoQyxHQUV5RFYsTUFGekQsQ0FFZ0NVLFNBRmhDLEVBRTJDQyxTQUYzQyxHQUV5RFgsTUFGekQsQ0FFMkNXLFNBRjNDO0FBQUE7QUFHd0IsaUJBQU0sbUJBQUtSLHFCQUFrQlMsZ0JBQXZCLEVBQXlDSixLQUF6QyxFQUFnREMsV0FBaEQsRUFBNkRDLFNBQTdELEVBQXdFQyxTQUF4RSxDQUFOOztBQUh4QjtBQUdVTCxVQUFBQSxXQUhWO0FBQUE7QUFJSSxpQkFBTSxrQkFBSSw0Q0FBMkJBLFdBQVcsQ0FBQ0MsSUFBdkMsQ0FBSixDQUFOOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1JLGlCQUFNLGtCQUFJLHlEQUFKLENBQU47O0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUEsU0FBVVIsaUJBQVYsQ0FBNEJDLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVlLLFVBQUFBLFFBRlosR0FFeUJMLE1BRnpCLENBRVlLLFFBRlo7QUFBQTtBQUdxQixpQkFBTSxtQkFBS0YscUJBQWtCSixpQkFBdkIsQ0FBTjs7QUFIckI7QUFHVUssVUFBQUEsUUFIVjs7QUFJSSxjQUFJQyxRQUFKLEVBQWM7QUFDWkEsWUFBQUEsUUFBUSxDQUFDRCxRQUFRLENBQUNHLElBQVQsQ0FBY0EsSUFBZixDQUFSO0FBQ0Q7O0FBTkw7QUFPSSxpQkFBTSxrQkFBSSwwQ0FBeUJILFFBQVEsQ0FBQ0csSUFBbEMsQ0FBSixDQUFOOztBQVBKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNLGtCQUFJLHVEQUFKLENBQU47O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdXNoIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjYWxsLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtcbiAgYWRkRm9ybVNjaGVtYSxcbiAgY3JlYXRlRm9ybVNjaGVtYUZhaWx1cmUsXG4gIGNyZWF0ZUZvcm1TY2hlbWFTdWNjZXNzLFxuICBmZXRjaEZvcm1TY2hlbWFGYWlsdXJlLFxuICBmZXRjaEZvcm1TY2hlbWFMaXN0RmFpbHVyZSxcbiAgZmV0Y2hGb3JtU2NoZW1hTGlzdFN1Y2Nlc3MsXG4gIGZldGNoRm9ybVNjaGVtYVN1Y2Nlc3MsXG4gIGZldGNoVGVtcGxhdGVMaXN0RmFpbHVyZSxcbiAgZmV0Y2hUZW1wbGF0ZUxpc3RTdWNjZXNzXG59IGZyb20gJy4uL2FjdGlvbnMvZm9ybXNjaGVtYSc7XG5pbXBvcnQgeyBJQWN0aW9uUHJvcHMgfSBmcm9tICcuLi9yZWR1Y2Vycyc7XG5pbXBvcnQgRm9ybVNjaGVtYVNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvZm9ybXNjaGVtYSc7XG5cbmZ1bmN0aW9uKiBjcmVhdGVGb3JtU2NoZW1hKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBwYXlsb2FkLCBzY2hlbWFJZH0gPSBhY3Rpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEZvcm1TY2hlbWFTZXJ2aWNlLmNyZWF0ZUZvcm1TY2hlbWEsIHBheWxvYWQsIHNjaGVtYUlkKTtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHlpZWxkIHB1dChjcmVhdGVGb3JtU2NoZW1hU3VjY2VzcyhyZXNwb25zZSkpO1xuICAgICAgeWllbGQgcHV0KGFkZEZvcm1TY2hlbWEocmVzcG9uc2UpKTtcbiAgICB9XG4gICAgeWllbGQgcHV0KHB1c2goJy9mb3Jtc2NoZW1hbGlzdCcpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoY3JlYXRlRm9ybVNjaGVtYUZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hGb3JtU2NoZW1hKGFjdGlvbjogYW55KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzY2hlbWFJZCwgY2FsbGJhY2sgfSA9IGFjdGlvbjtcbiAgICBjb25zdCBmb3JtU2NoZW1hcyA9IHlpZWxkIGNhbGwoRm9ybVNjaGVtYVNlcnZpY2UuZmV0Y2hGb3JtU2NoZW1hLCBzY2hlbWFJZCk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhmb3JtU2NoZW1hcy5kYXRhKTtcbiAgICB9XG4gICAgeWllbGQgcHV0KGZldGNoRm9ybVNjaGVtYVN1Y2Nlc3MoZm9ybVNjaGVtYXMuZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChmZXRjaEZvcm1TY2hlbWFGYWlsdXJlKGVycm9yKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGZldGNoRm9ybUxpc3QoYWN0aW9uOiBhbnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGxpbWl0LCBjdXJyZW50UGFnZSwgc29ydEZpZWxkLCBzb3J0T3JkZXIgfSA9IGFjdGlvbjtcbiAgICBjb25zdCBmb3JtU2NoZW1hcyA9IHlpZWxkIGNhbGwoRm9ybVNjaGVtYVNlcnZpY2UuZ2V0QWxsRm9ybVNjaGVtYSwgbGltaXQsIGN1cnJlbnRQYWdlLCBzb3J0RmllbGQsIHNvcnRPcmRlcik7XG4gICAgeWllbGQgcHV0KGZldGNoRm9ybVNjaGVtYUxpc3RTdWNjZXNzKGZvcm1TY2hlbWFzLmRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZmV0Y2hGb3JtU2NoZW1hTGlzdEZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogZmV0Y2hUZW1wbGF0ZUxpc3QoYWN0aW9uOiBJQWN0aW9uUHJvcHMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNhbGxiYWNrIH0gPSBhY3Rpb247XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEZvcm1TY2hlbWFTZXJ2aWNlLmZldGNoVGVtcGxhdGVMaXN0KTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEuZGF0YSk7XG4gICAgfVxuICAgIHlpZWxkIHB1dChmZXRjaFRlbXBsYXRlTGlzdFN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChmZXRjaFRlbXBsYXRlTGlzdEZhaWx1cmUoZXJyb3IpKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjcmVhdGVGb3JtU2NoZW1hLFxuICBmZXRjaEZvcm1TY2hlbWEsXG4gIGZldGNoRm9ybUxpc3QsXG4gIGZldGNoVGVtcGxhdGVMaXN0XG59O1xuIl19