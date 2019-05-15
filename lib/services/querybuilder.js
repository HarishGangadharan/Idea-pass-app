"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QueryBuilderService = function QueryBuilderService() {
  _classCallCheck(this, QueryBuilderService);
};

_defineProperty(QueryBuilderService, "getQueryFields", function (data, organizationId) {
  (0, _axios.default)({
    data: data,
    method: organizationId ? 'put' : 'post',
    url: organizationId ? "/organizations/".concat(organizationId) : "/organizations/"
  });
});

var _default = QueryBuilderService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9xdWVyeWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiUXVlcnlCdWlsZGVyU2VydmljZSIsImRhdGEiLCJvcmdhbml6YXRpb25JZCIsIm1ldGhvZCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztJQUVNQSxtQjs7OztnQkFBQUEsbUIsb0JBQzJCLFVBQUNDLElBQUQsRUFBWUMsY0FBWixFQUF3QztBQUNyRSxzQkFBTTtBQUNKRCxJQUFBQSxJQUFJLEVBQUpBLElBREk7QUFFSkUsSUFBQUEsTUFBTSxFQUFFRCxjQUFjLEdBQUcsS0FBSCxHQUFXLE1BRjdCO0FBR0pFLElBQUFBLEdBQUcsRUFBRUYsY0FBYyw0QkFBcUJBLGNBQXJCO0FBSGYsR0FBTjtBQUtELEM7O2VBR1lGLG1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgUXVlcnlCdWlsZGVyU2VydmljZSB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0UXVlcnlGaWVsZHMgPSAoZGF0YTogYW55LCBvcmdhbml6YXRpb25JZD86IHN0cmluZykgPT4ge1xuICAgIGF4aW9zKHtcbiAgICAgIGRhdGEsXG4gICAgICBtZXRob2Q6IG9yZ2FuaXphdGlvbklkID8gJ3B1dCcgOiAncG9zdCcsXG4gICAgICB1cmw6IG9yZ2FuaXphdGlvbklkID8gYC9vcmdhbml6YXRpb25zLyR7b3JnYW5pemF0aW9uSWR9YCA6IGAvb3JnYW5pemF0aW9ucy9gXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlcnlCdWlsZGVyU2VydmljZTtcbiJdfQ==