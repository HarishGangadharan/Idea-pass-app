"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormTriggerService = function FormTriggerService() {
  _classCallCheck(this, FormTriggerService);
};

_defineProperty(FormTriggerService, "saveFormTrigger", function (data, formTriggerId) {
  return (0, _axios.default)({
    data: data,
    method: formTriggerId ? 'put' : 'post',
    url: formTriggerId ? "/meta-triggers/".concat(formTriggerId) : "/meta-triggers"
  });
});

_defineProperty(FormTriggerService, "fetchFormTrigger", function (formTriggerId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/meta-triggers/".concat(formTriggerId)
  });
});

_defineProperty(FormTriggerService, "fetchFormFieldsTrigger", function (formName) {
  return (0, _axios.default)({
    method: 'get',
    url: "/form-fields/".concat(formName)
  });
});

_defineProperty(FormTriggerService, "fetchFormTriggerList", function (formId, limit, currentPage) {
  var queryUrl = "/form-meta-ui/".concat(formId, "/triggers");

  if (limit && currentPage) {
    queryUrl = "".concat(queryUrl, "?$limit=").concat(limit, "&$skip=").concat(limit * (currentPage - 1));
  }

  return (0, _axios.default)({
    method: 'get',
    url: queryUrl
  });
});

var _default = FormTriggerService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9mb3JtVHJpZ2dlci50cyJdLCJuYW1lcyI6WyJGb3JtVHJpZ2dlclNlcnZpY2UiLCJkYXRhIiwiZm9ybVRyaWdnZXJJZCIsIm1ldGhvZCIsInVybCIsImZvcm1OYW1lIiwiZm9ybUlkIiwibGltaXQiLCJjdXJyZW50UGFnZSIsInF1ZXJ5VXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRU1BLGtCOzs7O2dCQUFBQSxrQixxQkFDNEIsVUFBQ0MsSUFBRCxFQUFZQyxhQUFaO0FBQUEsU0FBdUMsb0JBQU07QUFDM0VELElBQUFBLElBQUksRUFBSkEsSUFEMkU7QUFFM0VFLElBQUFBLE1BQU0sRUFBRUQsYUFBYSxHQUFHLEtBQUgsR0FBVyxNQUYyQztBQUczRUUsSUFBQUEsR0FBRyxFQUFFRixhQUFhLDRCQUFxQkEsYUFBckI7QUFIeUQsR0FBTixDQUF2QztBQUFBLEM7O2dCQUQ1QkYsa0Isc0JBTzZCLFVBQUNFLGFBQUQ7QUFBQSxTQUEyQixvQkFBTTtBQUNoRUMsSUFBQUEsTUFBTSxFQUFFLEtBRHdEO0FBRWhFQyxJQUFBQSxHQUFHLDJCQUFvQkYsYUFBcEI7QUFGNkQsR0FBTixDQUEzQjtBQUFBLEM7O2dCQVA3QkYsa0IsNEJBWW1DLFVBQUNLLFFBQUQ7QUFBQSxTQUFzQixvQkFBTTtBQUNqRUYsSUFBQUEsTUFBTSxFQUFFLEtBRHlEO0FBRWpFQyxJQUFBQSxHQUFHLHlCQUFrQkMsUUFBbEI7QUFGOEQsR0FBTixDQUF0QjtBQUFBLEM7O2dCQVpuQ0wsa0IsMEJBaUJpQyxVQUFDTSxNQUFELEVBQWlCQyxLQUFqQixFQUFnQ0MsV0FBaEMsRUFBd0Q7QUFDM0YsTUFBSUMsUUFBZ0IsMkJBQW9CSCxNQUFwQixjQUFwQjs7QUFDQSxNQUFJQyxLQUFLLElBQUlDLFdBQWIsRUFBMEI7QUFDeEJDLElBQUFBLFFBQVEsYUFBTUEsUUFBTixxQkFBeUJGLEtBQXpCLG9CQUF3Q0EsS0FBSyxJQUFJQyxXQUFXLEdBQUcsQ0FBbEIsQ0FBN0MsQ0FBUjtBQUNEOztBQUNELFNBQU8sb0JBQU07QUFDWEwsSUFBQUEsTUFBTSxFQUFFLEtBREc7QUFFWEMsSUFBQUEsR0FBRyxFQUFFSztBQUZNLEdBQU4sQ0FBUDtBQUlELEM7O2VBSVlULGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgRm9ybVRyaWdnZXJTZXJ2aWNlIHtcbiAgcHVibGljIHN0YXRpYyBzYXZlRm9ybVRyaWdnZXIgPSAoZGF0YTogYW55LCBmb3JtVHJpZ2dlcklkPzogc3RyaW5nKSA9PiBheGlvcyh7XG4gICAgZGF0YSxcbiAgICBtZXRob2Q6IGZvcm1UcmlnZ2VySWQgPyAncHV0JyA6ICdwb3N0JyxcbiAgICB1cmw6IGZvcm1UcmlnZ2VySWQgPyBgL21ldGEtdHJpZ2dlcnMvJHtmb3JtVHJpZ2dlcklkfWAgOiBgL21ldGEtdHJpZ2dlcnNgXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmZXRjaEZvcm1UcmlnZ2VyID0gKGZvcm1UcmlnZ2VySWQ6IHN0cmluZykgPT4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgdXJsOiBgL21ldGEtdHJpZ2dlcnMvJHtmb3JtVHJpZ2dlcklkfWBcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZldGNoRm9ybUZpZWxkc1RyaWdnZXIgPSAoZm9ybU5hbWU6IHN0cmluZykgPT4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgdXJsOiBgL2Zvcm0tZmllbGRzLyR7Zm9ybU5hbWV9YFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZmV0Y2hGb3JtVHJpZ2dlckxpc3QgPSAoZm9ybUlkOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIpID0+IHtcbiAgICBsZXQgcXVlcnlVcmw6IHN0cmluZyA9IGAvZm9ybS1tZXRhLXVpLyR7Zm9ybUlkfS90cmlnZ2Vyc2A7XG4gICAgaWYgKGxpbWl0ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgICBxdWVyeVVybCA9IGAke3F1ZXJ5VXJsfT8kbGltaXQ9JHtsaW1pdH0mJHNraXA9JHtsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpfWA7XG4gICAgfVxuICAgIHJldHVybiBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgdXJsOiBxdWVyeVVybFxuICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVRyaWdnZXJTZXJ2aWNlO1xuIl19