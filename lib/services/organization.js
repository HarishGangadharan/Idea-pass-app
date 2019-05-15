"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrganizationService = function OrganizationService() {
  _classCallCheck(this, OrganizationService);
};

_defineProperty(OrganizationService, "createOrganization", function (data, organizationId) {
  (0, _axios.default)({
    data: data,
    method: organizationId ? 'put' : 'post',
    url: organizationId ? "/organizations/".concat(organizationId) : "/organizations/"
  });
});

_defineProperty(OrganizationService, "fetchOrganization", function (organizationId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/organizations/".concat(organizationId)
  });
});

_defineProperty(OrganizationService, "getAllOrganization", function (limit, currentPage) {
  return (0, _axios.default)({
    method: 'get',
    url: "/organizations?$limit=".concat(limit, "&$skip=").concat(limit * (currentPage - 1))
  });
});

var _default = OrganizationService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9vcmdhbml6YXRpb24udHMiXSwibmFtZXMiOlsiT3JnYW5pemF0aW9uU2VydmljZSIsImRhdGEiLCJvcmdhbml6YXRpb25JZCIsIm1ldGhvZCIsInVybCIsImxpbWl0IiwiY3VycmVudFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsbUI7Ozs7Z0JBQUFBLG1CLHdCQUMrQixVQUFDQyxJQUFELEVBQVlDLGNBQVosRUFBd0M7QUFDekUsc0JBQU07QUFDSkQsSUFBQUEsSUFBSSxFQUFKQSxJQURJO0FBRUpFLElBQUFBLE1BQU0sRUFBRUQsY0FBYyxHQUFHLEtBQUgsR0FBVyxNQUY3QjtBQUdKRSxJQUFBQSxHQUFHLEVBQUVGLGNBQWMsNEJBQXFCQSxjQUFyQjtBQUhmLEdBQU47QUFLRCxDOztnQkFQR0YsbUIsdUJBUzhCLFVBQUNFLGNBQUQ7QUFBQSxTQUE2QixvQkFBTTtBQUNuRUMsSUFBQUEsTUFBTSxFQUFFLEtBRDJEO0FBRW5FQyxJQUFBQSxHQUFHLDJCQUFvQkYsY0FBcEI7QUFGZ0UsR0FBTixDQUE3QjtBQUFBLEM7O2dCQVQ5QkYsbUIsd0JBYytCLFVBQUNLLEtBQUQsRUFBZ0JDLFdBQWhCO0FBQUEsU0FBd0Msb0JBQU07QUFDL0VILElBQUFBLE1BQU0sRUFBRSxLQUR1RTtBQUUvRUMsSUFBQUEsR0FBRyxrQ0FBMkJDLEtBQTNCLG9CQUEwQ0EsS0FBSyxJQUFJQyxXQUFXLEdBQUcsQ0FBbEIsQ0FBL0M7QUFGNEUsR0FBTixDQUF4QztBQUFBLEM7O2VBTXRCTixtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIE9yZ2FuaXphdGlvblNlcnZpY2Uge1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZU9yZ2FuaXphdGlvbiA9IChkYXRhOiBhbnksIG9yZ2FuaXphdGlvbklkPzogc3RyaW5nKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgZGF0YSxcbiAgICAgIG1ldGhvZDogb3JnYW5pemF0aW9uSWQgPyAncHV0JyA6ICdwb3N0JyxcbiAgICAgIHVybDogb3JnYW5pemF0aW9uSWQgPyBgL29yZ2FuaXphdGlvbnMvJHtvcmdhbml6YXRpb25JZH1gIDogYC9vcmdhbml6YXRpb25zL2BcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZmV0Y2hPcmdhbml6YXRpb24gPSAob3JnYW5pemF0aW9uSWQ/OiBzdHJpbmcpID0+IGF4aW9zKHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHVybDogYC9vcmdhbml6YXRpb25zLyR7b3JnYW5pemF0aW9uSWR9YFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QWxsT3JnYW5pemF0aW9uID0gKGxpbWl0OiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIpID0+IGF4aW9zKHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHVybDogYC9vcmdhbml6YXRpb25zPyRsaW1pdD0ke2xpbWl0fSYkc2tpcD0ke2xpbWl0ICogKGN1cnJlbnRQYWdlIC0gMSl9YFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25TZXJ2aWNlO1xuIl19