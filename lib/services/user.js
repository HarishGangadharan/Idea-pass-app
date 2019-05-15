"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.loginUser = exports.getUsers = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _commonUtil = require("../utils/commonUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getUsers = function getUsers(requestFilter) {
  var queryFilter = _objectSpread({}, requestFilter, {
    resource: '/users'
  });

  return (0, _axios.default)({
    method: 'get',
    url: (0, _commonUtil.constructUrl)(queryFilter)
  });
};

exports.getUsers = getUsers;

var loginUser = function loginUser(username, password) {
  return (0, _axios.default)({
    data: {
      password: password,
      username: username
    },
    method: 'post',
    url: '/login'
  });
};

exports.loginUser = loginUser;

var logoutUser = function logoutUser() {
  return (0, _axios.default)({
    method: 'post',
    url: '/logout'
  });
};

exports.logoutUser = logoutUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy91c2VyLnRzIl0sIm5hbWVzIjpbImdldFVzZXJzIiwicmVxdWVzdEZpbHRlciIsInF1ZXJ5RmlsdGVyIiwicmVzb3VyY2UiLCJtZXRob2QiLCJ1cmwiLCJsb2dpblVzZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGF0YSIsImxvZ291dFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7QUFFTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxhQUFELEVBQW1DO0FBQ3pELE1BQU1DLFdBQVcscUJBQU9ELGFBQVA7QUFBc0JFLElBQUFBLFFBQVEsRUFBRTtBQUFoQyxJQUFqQjs7QUFDQSxTQUFPLG9CQUFNO0FBQ1hDLElBQUFBLE1BQU0sRUFBRSxLQURHO0FBRVhDLElBQUFBLEdBQUcsRUFBRSw4QkFBYUgsV0FBYjtBQUZNLEdBQU4sQ0FBUDtBQUlELENBTk07Ozs7QUFRQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxRQUFELEVBQW9CQyxRQUFwQjtBQUFBLFNBQ3ZCLG9CQUFNO0FBQ0pDLElBQUFBLElBQUksRUFBRTtBQUNKRCxNQUFBQSxRQUFRLEVBQVJBLFFBREk7QUFFSkQsTUFBQUEsUUFBUSxFQUFSQTtBQUZJLEtBREY7QUFLSkgsSUFBQUEsTUFBTSxFQUFFLE1BTEo7QUFNSkMsSUFBQUEsR0FBRyxFQUFFO0FBTkQsR0FBTixDQUR1QjtBQUFBLENBQWxCOzs7O0FBVUEsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUN4QixvQkFBTTtBQUNKTixJQUFBQSxNQUFNLEVBQUUsTUFESjtBQUVKQyxJQUFBQSxHQUFHLEVBQUU7QUFGRCxHQUFOLENBRHdCO0FBQUEsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgSVJlcXVlc3RGaWx0ZXIgfSBmcm9tICdyZXF1ZXN0LWZpbHRlcic7XG5pbXBvcnQgeyBjb25zdHJ1Y3RVcmwgfSBmcm9tICcuLi91dGlscy9jb21tb25VdGlsJztcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gKHJlcXVlc3RGaWx0ZXI6IElSZXF1ZXN0RmlsdGVyKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5RmlsdGVyID0gey4uLnJlcXVlc3RGaWx0ZXIsIHJlc291cmNlOiAnL3VzZXJzJ307XG4gIHJldHVybiBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6IGNvbnN0cnVjdFVybChxdWVyeUZpbHRlcilcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKHVzZXJuYW1lOiBzdHJpbmcgLCBwYXNzd29yZDogc3RyaW5nKSA9PlxuICBheGlvcyh7XG4gICAgZGF0YToge1xuICAgICAgcGFzc3dvcmQsXG4gICAgICB1c2VybmFtZVxuICAgIH0sXG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiAnL2xvZ2luJ1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoKSA9PlxuICBheGlvcyh7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiAnL2xvZ291dCdcbiAgfSk7XG4iXX0=