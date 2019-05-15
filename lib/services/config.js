"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ConfigService = function ConfigService() {
  _classCallCheck(this, ConfigService);
};

_defineProperty(ConfigService, "fetchConfig", function (configList, tenantId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/config?props=".concat(configList, "&tenant_id=").concat(tenantId)
  });
});

var _default = ConfigService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9jb25maWcudHMiXSwibmFtZXMiOlsiQ29uZmlnU2VydmljZSIsImNvbmZpZ0xpc3QiLCJ0ZW5hbnRJZCIsIm1ldGhvZCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztJQUVNQSxhOzs7O2dCQUFBQSxhLGlCQUN3QixVQUFDQyxVQUFELEVBQXFCQyxRQUFyQjtBQUFBLFNBQTJDLG9CQUFNO0FBQzNFQyxJQUFBQSxNQUFNLEVBQUUsS0FEbUU7QUFFM0VDLElBQUFBLEdBQUcsMEJBQW1CSCxVQUFuQix3QkFBMkNDLFFBQTNDO0FBRndFLEdBQU4sQ0FBM0M7QUFBQSxDOztlQU1mRixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQ29uZmlnU2VydmljZSB7XG4gIHB1YmxpYyBzdGF0aWMgZmV0Y2hDb25maWcgPSAoY29uZmlnTGlzdDogc3RyaW5nLCB0ZW5hbnRJZD86IHN0cmluZykgPT4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgdXJsOiBgL2NvbmZpZz9wcm9wcz0ke2NvbmZpZ0xpc3R9JnRlbmFudF9pZD0ke3RlbmFudElkfWBcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnU2VydmljZTtcbiJdfQ==