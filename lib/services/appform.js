"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AppFormService = function AppFormService() {
  _classCallCheck(this, AppFormService);
};

_defineProperty(AppFormService, "saveAppForm", function (api, data) {
  return (0, _axios.default)({
    data: data,
    method: data.id ? 'put' : 'post',
    url: "".concat(api)
  });
});

_defineProperty(AppFormService, "fetchAppForm", function (api) {
  return (0, _axios.default)({
    method: 'get',
    url: "".concat(api)
  });
});

var _default = AppFormService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9hcHBmb3JtLnRzIl0sIm5hbWVzIjpbIkFwcEZvcm1TZXJ2aWNlIiwiYXBpIiwiZGF0YSIsIm1ldGhvZCIsImlkIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRU1BLGM7Ozs7Z0JBQUFBLGMsaUJBQ3dCLFVBQUNDLEdBQUQsRUFBY0MsSUFBZDtBQUFBLFNBQTRCLG9CQUFNO0FBQzVEQSxJQUFBQSxJQUFJLEVBQUpBLElBRDREO0FBRTVEQyxJQUFBQSxNQUFNLEVBQUVELElBQUksQ0FBQ0UsRUFBTCxHQUFVLEtBQVYsR0FBa0IsTUFGa0M7QUFHNURDLElBQUFBLEdBQUcsWUFBS0osR0FBTDtBQUh5RCxHQUFOLENBQTVCO0FBQUEsQzs7Z0JBRHhCRCxjLGtCQU95QixVQUFDQyxHQUFEO0FBQUEsU0FBaUIsb0JBQU07QUFDbERFLElBQUFBLE1BQU0sRUFBRSxLQUQwQztBQUVsREUsSUFBQUEsR0FBRyxZQUFLSixHQUFMO0FBRitDLEdBQU4sQ0FBakI7QUFBQSxDOztlQU1oQkQsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEFwcEZvcm1TZXJ2aWNlIHtcbiAgcHVibGljIHN0YXRpYyBzYXZlQXBwRm9ybSA9IChhcGk6IHN0cmluZywgZGF0YTogYW55KSA9PiBheGlvcyh7XG4gICAgZGF0YSxcbiAgICBtZXRob2Q6IGRhdGEuaWQgPyAncHV0JyA6ICdwb3N0JyxcbiAgICB1cmw6IGAke2FwaX1gXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmZXRjaEFwcEZvcm0gPSAoYXBpOiBzdHJpbmcpID0+IGF4aW9zKHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHVybDogYCR7YXBpfWBcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwRm9ybVNlcnZpY2U7XG4iXX0=