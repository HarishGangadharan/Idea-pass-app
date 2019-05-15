"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onFetchUsers = onFetchUsers;
exports.onLoginUser = onLoginUser;
exports.onLogoutUser = onLogoutUser;

var _effects = require("redux-saga/effects");

var _reactToastify = require("react-toastify");

var _global = require("../actions/global");

var _user = require("../actions/user");

var _application = require("../constants/application.properties");

var _interceptors = require("../global/interceptors");

var _rolepermission = require("../sagas/rolepermission");

var _user2 = require("../services/user");

var _errorConstants = _interopRequireDefault(require("../constants/errorConstants"));

var _storage = _interopRequireDefault(require("../utils/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(onFetchUsers),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(onLoginUser),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(onLogoutUser);

function onFetchUsers(action) {
  var requestFilter, data;
  return regeneratorRuntime.wrap(function onFetchUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          requestFilter = action.requestFilter;
          _context.prev = 1;
          _context.next = 4;
          return (0, _effects.call)(_user2.getUsers, requestFilter);

        case 4:
          data = _context.sent;
          _context.next = 7;
          return (0, _effects.put)((0, _user.fetchUsersSuccess)(data));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          _context.next = 13;
          return (0, _effects.put)((0, _user.fetchUsersFail)(_context.t0));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}

function onLoginUser(action) {
  var email, password, response, responseRoles, assignedRoles, constructedRoles, uniqueRoles;
  return regeneratorRuntime.wrap(function onLoginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          email = action.email, password = action.password;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.call)(_user2.loginUser, email, password);

        case 4:
          response = _context2.sent;
          (0, _interceptors.updateUserSession)(true);
          responseRoles = response.data.roles;
          assignedRoles = '';
          constructedRoles = [];

          if (Array.isArray(responseRoles)) {
            assignedRoles = responseRoles.join(',');
          } else if (Object.keys(responseRoles).length > 0) {
            Object.keys(responseRoles).forEach(function (item) {
              constructedRoles = [].concat(_toConsumableArray(constructedRoles), _toConsumableArray(responseRoles[item]));
            });

            uniqueRoles = function uniqueRoles(roles) {
              return roles.filter(function (value, index) {
                return roles.indexOf(value) === index;
              });
            };

            assignedRoles = uniqueRoles(constructedRoles).join(',');
          }

          _storage.default.setItem(_application.AppProperties.USER_ID, response.data._id);

          _storage.default.setItem(_application.AppProperties.ROLES, assignedRoles);

          if (response.data.tenant) {
            _storage.default.setItem(_application.AppProperties.TENANT, response.data.tenant);
          }

          _context2.next = 15;
          return (0, _effects.call)(_rolepermission.fetchRolePermissionRules, {
            userRole: assignedRoles
          });

        case 15:
          _context2.next = 17;
          return (0, _effects.put)((0, _global.updateLoggedInStatus)({
            loggedIn: Boolean(response)
          }));

        case 17:
          _context2.next = 19;
          return (0, _effects.put)((0, _user.loginUserSuccess)(response));

        case 19:
          _context2.next = 26;
          break;

        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](1);

          if (_context2.t0 === 401) {
            _reactToastify.toast.error(_errorConstants.default.USER_NOT_FOUND.message);
          }

          _context2.next = 26;
          return (0, _effects.put)((0, _user.loginUserFail)(_context2.t0));

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 21]]);
}

function onLogoutUser(action) {
  var user, data;
  return regeneratorRuntime.wrap(function onLogoutUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          user = action.user;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _effects.call)(_user2.logoutUser, user);

        case 4:
          data = _context3.sent;
          (0, _interceptors.updateUserSession)(false);

          _storage.default.deleteItem(_application.AppProperties.ROLES);

          _storage.default.deleteItem(_application.AppProperties.USER_ID);

          _storage.default.deleteItem(_application.AppProperties.RULES_UPDATED);

          _storage.default.deleteItem(_application.AppProperties.TENANT);

          _context3.next = 12;
          return (0, _effects.put)((0, _global.updateLoggedInStatus)({
            loggedIn: false
          }));

        case 12:
          _context3.next = 14;
          return (0, _effects.put)((0, _user.logoutUserSuccess)(data));

        case 14:
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 20;
          return (0, _effects.put)((0, _user.logoutUserFail)(_context3.t0));

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 16]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWdhcy91c2VyLnRzIl0sIm5hbWVzIjpbIm9uRmV0Y2hVc2VycyIsIm9uTG9naW5Vc2VyIiwib25Mb2dvdXRVc2VyIiwiYWN0aW9uIiwicmVxdWVzdEZpbHRlciIsImdldFVzZXJzIiwiZGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpblVzZXIiLCJyZXNwb25zZSIsInJlc3BvbnNlUm9sZXMiLCJyb2xlcyIsImFzc2lnbmVkUm9sZXMiLCJjb25zdHJ1Y3RlZFJvbGVzIiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiaXRlbSIsInVuaXF1ZVJvbGVzIiwiZmlsdGVyIiwidmFsdWUiLCJpbmRleCIsImluZGV4T2YiLCJzdG9yYWdlIiwic2V0SXRlbSIsIkFwcFByb3BlcnRpZXMiLCJVU0VSX0lEIiwiX2lkIiwiUk9MRVMiLCJ0ZW5hbnQiLCJURU5BTlQiLCJmZXRjaFJvbGVQZXJtaXNzaW9uUnVsZXMiLCJ1c2VyUm9sZSIsImxvZ2dlZEluIiwiQm9vbGVhbiIsInRvYXN0IiwiZXJyb3IiLCJFcnJvckNvbnN0YW50cyIsIlVTRVJfTk9UX0ZPVU5EIiwibWVzc2FnZSIsInVzZXIiLCJsb2dvdXRVc2VyIiwiZGVsZXRlSXRlbSIsIlJVTEVTX1VQREFURUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQU9BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozt3QkFFVUEsWTs7O3dCQVVBQyxXOzs7d0JBaUNBQyxZOztBQTNDVixTQUFVRixZQUFWLENBQXVCRyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVUMsVUFBQUEsYUFEVixHQUM0QkQsTUFENUIsQ0FDVUMsYUFEVjtBQUFBO0FBQUE7QUFHaUIsaUJBQU0sbUJBQUtDLGVBQUwsRUFBZUQsYUFBZixDQUFOOztBQUhqQjtBQUdVRSxVQUFB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aUNBLFNBQVUxQyxZQUFWLENBQXVCQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVTBDLFVBQUFBLElBRFYsR0FDbUIxQyxNQURuQixDQUNVMEMsSUFEVjtBQUFBO0FBQUE7QUFHaUIsaUJBQU0sbUJBQUtDLGlCQUFMLEVBQWlCRCxJQUFqQixDQUFOOztBQUhqQjtBQUdVdkMsVUFBQUEsSUFIVjtBQUlJLCtDQUFrQixLQUFsQjs7QUFDQXNCLDJCQUFRbUIsVUFBUixDQUFtQmpCLDJCQUFjRyxLQUFqQzs7QUFDQUwsMkJBQVFtQixVQUFSLENBQW1CakIsMkJBQWNDLE9BQWpDOztBQUNBSCwyQkFBUW1CLFVBQVIsQ0FBbUJqQiwyQkFBY2tCLGFBQWpDOztBQUNBcEIsMkJBQVFtQixVQUFSLENBQW1CakIsMkJBQWNLLE1BQWpDOztBQVJKO0FBU0ksaUJBQU0sa0JBQUksa0NBQXFCO0FBQUVHLFlBQUFBLFFBQVEsRUFBRTtBQUFaLFdBQXJCLENBQUosQ0FBTjs7QUFUSjtBQUFBO0FBVUksaUJBQU0sa0JBQUksNkJBQWtCaEMsSUFBbEIsQ0FBSixDQUFOOztBQVZKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlJLGlCQUFNLGtCQUFJLHVDQUFKLENBQU47O0FBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsLCBwdXQgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1cGRhdGVMb2dnZWRJblN0YXR1cyB9IGZyb20gJy4uL2FjdGlvbnMvZ2xvYmFsJztcbmltcG9ydCB7IGZldGNoVXNlcnNGYWlsLCBmZXRjaFVzZXJzU3VjY2VzcyB9IGZyb20gJy4uL2FjdGlvbnMvdXNlcic7XG5pbXBvcnQge1xuICBsb2dpblVzZXJGYWlsLFxuICBsb2dpblVzZXJTdWNjZXNzLFxuICBsb2dvdXRVc2VyRmFpbCxcbiAgbG9nb3V0VXNlclN1Y2Nlc3Ncbn0gZnJvbSAnLi4vYWN0aW9ucy91c2VyJztcbmltcG9ydCB7IEFwcFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb25zdGFudHMvYXBwbGljYXRpb24ucHJvcGVydGllcyc7XG5pbXBvcnQgeyB1cGRhdGVVc2VyU2Vzc2lvbiB9IGZyb20gJy4uL2dsb2JhbC9pbnRlcmNlcHRvcnMnO1xuaW1wb3J0IHsgZmV0Y2hSb2xlUGVybWlzc2lvblJ1bGVzIH0gZnJvbSAnLi4vc2FnYXMvcm9sZXBlcm1pc3Npb24nO1xuaW1wb3J0IHsgZ2V0VXNlcnMsIGxvZ2luVXNlciwgbG9nb3V0VXNlciB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXInO1xuaW1wb3J0IEVycm9yQ29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cy9lcnJvckNvbnN0YW50cyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi91dGlscy9zdG9yYWdlJztcblxuZnVuY3Rpb24qIG9uRmV0Y2hVc2VycyhhY3Rpb246IGFueSkge1xuICBjb25zdCB7IHJlcXVlc3RGaWx0ZXIgfSA9IGFjdGlvbjtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChnZXRVc2VycywgcmVxdWVzdEZpbHRlcik7XG4gICAgeWllbGQgcHV0KGZldGNoVXNlcnNTdWNjZXNzKGRhdGEpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZmV0Y2hVc2Vyc0ZhaWwoZXJyb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiogb25Mb2dpblVzZXIoYWN0aW9uOiBhbnkpIHtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGFjdGlvbjtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwobG9naW5Vc2VyLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgIHVwZGF0ZVVzZXJTZXNzaW9uKHRydWUpO1xuICAgIGNvbnN0IHJlc3BvbnNlUm9sZXM6IG9iamVjdCA9IHJlc3BvbnNlLmRhdGEucm9sZXM7XG4gICAgbGV0IGFzc2lnbmVkUm9sZXM6IHN0cmluZyA9ICcnO1xuICAgIGxldCBjb25zdHJ1Y3RlZFJvbGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3BvbnNlUm9sZXMpKSB7XG4gICAgICBhc3NpZ25lZFJvbGVzID0gcmVzcG9uc2VSb2xlcy5qb2luKCcsJyk7XG4gICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhyZXNwb25zZVJvbGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zZVJvbGVzKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdHJ1Y3RlZFJvbGVzID0gWy4uLmNvbnN0cnVjdGVkUm9sZXMsIC4uLnJlc3BvbnNlUm9sZXNbaXRlbV1dO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB1bmlxdWVSb2xlcyA9IChyb2xlczogc3RyaW5nW10pID0+IHJvbGVzLmZpbHRlcigodmFsdWU6IHN0cmluZywgaW5kZXgpID0+IHJvbGVzLmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XG4gICAgICBhc3NpZ25lZFJvbGVzID0gdW5pcXVlUm9sZXMoY29uc3RydWN0ZWRSb2xlcykuam9pbignLCcpO1xuICAgIH1cbiAgICBzdG9yYWdlLnNldEl0ZW0oQXBwUHJvcGVydGllcy5VU0VSX0lELCByZXNwb25zZS5kYXRhLl9pZCk7XG4gICAgc3RvcmFnZS5zZXRJdGVtKEFwcFByb3BlcnRpZXMuUk9MRVMsIGFzc2lnbmVkUm9sZXMpO1xuICAgIGlmIChyZXNwb25zZS5kYXRhLnRlbmFudCkge1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKEFwcFByb3BlcnRpZXMuVEVOQU5ULCByZXNwb25zZS5kYXRhLnRlbmFudCk7XG4gICAgfVxuICAgIHlpZWxkIGNhbGwoZmV0Y2hSb2xlUGVybWlzc2lvblJ1bGVzLCB7IHVzZXJSb2xlOiBhc3NpZ25lZFJvbGVzIH0pO1xuICAgIHlpZWxkIHB1dCh1cGRhdGVMb2dnZWRJblN0YXR1cyh7IGxvZ2dlZEluOiBCb29sZWFuKHJlc3BvbnNlKSB9KSk7XG4gICAgeWllbGQgcHV0KGxvZ2luVXNlclN1Y2Nlc3MocmVzcG9uc2UpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IgPT09IDQwMSkge1xuICAgICAgdG9hc3QuZXJyb3IoRXJyb3JDb25zdGFudHMuVVNFUl9OT1RfRk9VTkQubWVzc2FnZSk7XG4gICAgfVxuICAgIHlpZWxkIHB1dChsb2dpblVzZXJGYWlsKGVycm9yKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIG9uTG9nb3V0VXNlcihhY3Rpb246IGFueSkge1xuICBjb25zdCB7IHVzZXIgfSA9IGFjdGlvbjtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChsb2dvdXRVc2VyLCB1c2VyKTtcbiAgICB1cGRhdGVVc2VyU2Vzc2lvbihmYWxzZSk7XG4gICAgc3RvcmFnZS5kZWxldGVJdGVtKEFwcFByb3BlcnRpZXMuUk9MRVMpO1xuICAgIHN0b3JhZ2UuZGVsZXRlSXRlbShBcHBQcm9wZXJ0aWVzLlVTRVJfSUQpO1xuICAgIHN0b3JhZ2UuZGVsZXRlSXRlbShBcHBQcm9wZXJ0aWVzLlJVTEVTX1VQREFURUQpO1xuICAgIHN0b3JhZ2UuZGVsZXRlSXRlbShBcHBQcm9wZXJ0aWVzLlRFTkFOVCk7XG4gICAgeWllbGQgcHV0KHVwZGF0ZUxvZ2dlZEluU3RhdHVzKHsgbG9nZ2VkSW46IGZhbHNlIH0pKTtcbiAgICB5aWVsZCBwdXQobG9nb3V0VXNlclN1Y2Nlc3MoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChsb2dvdXRVc2VyRmFpbChlcnJvcikpO1xuICB9XG59XG5cbmV4cG9ydCB7IG9uRmV0Y2hVc2Vycywgb25Mb2dpblVzZXIsIG9uTG9nb3V0VXNlciB9O1xuIl19