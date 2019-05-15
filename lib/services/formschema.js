"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormSchemaService = function FormSchemaService() {
  _classCallCheck(this, FormSchemaService);
};

_defineProperty(FormSchemaService, "createFormSchema", function (data, schemaId) {
  return (0, _axios.default)({
    data: data,
    method: schemaId ? 'put' : 'post',
    url: schemaId ? "/form-meta-ui/".concat(schemaId) : "/form-meta-ui/"
  });
});

_defineProperty(FormSchemaService, "fetchFormSchema", function (schemaId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/form-meta-ui/".concat(schemaId)
  });
});

_defineProperty(FormSchemaService, "fetchTemplateList", function () {
  return (0, _axios.default)({
    method: 'get',
    url: '/form-meta-ui?template_type=template_form&$select[]=form_data'
  });
});

_defineProperty(FormSchemaService, "getAllFormSchema", function (limit, currentPage, sortField, sortOrder, filters) {
  var queryString = '/form-meta-ui';
  var paginationApplied = false;

  if (limit && currentPage) {
    paginationApplied = true;
    queryString += "?$limit=".concat(limit, "&$skip=").concat(limit * (currentPage - 1));
  }

  if (sortOrder && sortField) {
    queryString += "".concat(paginationApplied ? '' : '?', "&$sort[").concat(sortField, "]=").concat(sortOrder);
  }

  if (filters) {
    queryString += "&".concat(filters);
  }

  return (0, _axios.default)({
    method: 'get',
    url: queryString
  });
});

var _default = FormSchemaService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9mb3Jtc2NoZW1hLnRzIl0sIm5hbWVzIjpbIkZvcm1TY2hlbWFTZXJ2aWNlIiwiZGF0YSIsInNjaGVtYUlkIiwibWV0aG9kIiwidXJsIiwibGltaXQiLCJjdXJyZW50UGFnZSIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsImZpbHRlcnMiLCJxdWVyeVN0cmluZyIsInBhZ2luYXRpb25BcHBsaWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRU1BLGlCOzs7O2dCQUFBQSxpQixzQkFDNkIsVUFBQ0MsSUFBRCxFQUFZQyxRQUFaO0FBQUEsU0FBa0Msb0JBQU07QUFDdkVELElBQUFBLElBQUksRUFBSkEsSUFEdUU7QUFFdkVFLElBQUFBLE1BQU0sRUFBRUQsUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUY0QztBQUd2RUUsSUFBQUEsR0FBRyxFQUFFRixRQUFRLDJCQUFvQkEsUUFBcEI7QUFIMEQsR0FBTixDQUFsQztBQUFBLEM7O2dCQUQ3QkYsaUIscUJBTzRCLFVBQUNFLFFBQUQ7QUFBQSxTQUF1QixvQkFBTTtBQUMzREMsSUFBQUEsTUFBTSxFQUFFLEtBRG1EO0FBRTNEQyxJQUFBQSxHQUFHLDBCQUFtQkYsUUFBbkI7QUFGd0QsR0FBTixDQUF2QjtBQUFBLEM7O2dCQVA1QkYsaUIsdUJBWThCO0FBQUEsU0FBTSxvQkFBTTtBQUM1Q0csSUFBQUEsTUFBTSxFQUFFLEtBRG9DO0FBRTVDQyxJQUFBQSxHQUFHLEVBQUU7QUFGdUMsR0FBTixDQUFOO0FBQUEsQzs7Z0JBWjlCSixpQixzQkFpQjZCLFVBQUNLLEtBQUQsRUFBZ0JDLFdBQWhCLEVBQXFDQyxTQUFyQyxFQUF3REMsU0FBeEQsRUFBMkVDLE9BQTNFLEVBQWdHO0FBQy9ILE1BQUlDLFdBQVcsR0FBRyxlQUFsQjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHLEtBQXhCOztBQUNBLE1BQUlOLEtBQUssSUFBSUMsV0FBYixFQUEwQjtBQUN4QkssSUFBQUEsaUJBQWlCLEdBQUcsSUFBcEI7QUFDQUQsSUFBQUEsV0FBVyxzQkFBZUwsS0FBZixvQkFBOEJBLEtBQUssSUFBSUMsV0FBVyxHQUFHLENBQWxCLENBQW5DLENBQVg7QUFDRDs7QUFDRCxNQUFJRSxTQUFTLElBQUlELFNBQWpCLEVBQTRCO0FBQzFCRyxJQUFBQSxXQUFXLGNBQU9DLGlCQUFpQixHQUFHLEVBQUgsR0FBUSxHQUFoQyxvQkFBNkNKLFNBQTdDLGVBQTJEQyxTQUEzRCxDQUFYO0FBQ0Q7O0FBQ0QsTUFBSUMsT0FBSixFQUFhO0FBQ1hDLElBQUFBLFdBQVcsZUFBUUQsT0FBUixDQUFYO0FBQ0Q7O0FBQ0QsU0FBTyxvQkFBTTtBQUNYTixJQUFBQSxNQUFNLEVBQUUsS0FERztBQUVYQyxJQUFBQSxHQUFHLEVBQUVNO0FBRk0sR0FBTixDQUFQO0FBSUQsQzs7ZUFHWVYsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBGb3JtU2NoZW1hU2VydmljZSB7XG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRm9ybVNjaGVtYSA9IChkYXRhOiBhbnksIHNjaGVtYUlkPzogc3RyaW5nKSA9PiBheGlvcyh7XG4gICAgZGF0YSxcbiAgICBtZXRob2Q6IHNjaGVtYUlkID8gJ3B1dCcgOiAncG9zdCcsXG4gICAgdXJsOiBzY2hlbWFJZCA/IGAvZm9ybS1tZXRhLXVpLyR7c2NoZW1hSWR9YCA6IGAvZm9ybS1tZXRhLXVpL2BcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZldGNoRm9ybVNjaGVtYSA9IChzY2hlbWFJZD86IHN0cmluZykgPT4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgdXJsOiBgL2Zvcm0tbWV0YS11aS8ke3NjaGVtYUlkfWBcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZldGNoVGVtcGxhdGVMaXN0ID0gKCkgPT4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgdXJsOiAnL2Zvcm0tbWV0YS11aT90ZW1wbGF0ZV90eXBlPXRlbXBsYXRlX2Zvcm0mJHNlbGVjdFtdPWZvcm1fZGF0YSdcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGdldEFsbEZvcm1TY2hlbWEgPSAobGltaXQ6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlciwgc29ydEZpZWxkOiBzdHJpbmcsIHNvcnRPcmRlcjogbnVtYmVyLCBmaWx0ZXJzPzogc3RyaW5nKSA9PiB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJy9mb3JtLW1ldGEtdWknO1xuICAgIGxldCBwYWdpbmF0aW9uQXBwbGllZCA9IGZhbHNlO1xuICAgIGlmIChsaW1pdCAmJiBjdXJyZW50UGFnZSkge1xuICAgICAgcGFnaW5hdGlvbkFwcGxpZWQgPSB0cnVlO1xuICAgICAgcXVlcnlTdHJpbmcgKz0gYD8kbGltaXQ9JHtsaW1pdH0mJHNraXA9JHtsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpfWA7XG4gICAgfVxuICAgIGlmIChzb3J0T3JkZXIgJiYgc29ydEZpZWxkKSB7XG4gICAgICBxdWVyeVN0cmluZyArPSBgJHtwYWdpbmF0aW9uQXBwbGllZCA/ICcnIDogJz8nfSYkc29ydFske3NvcnRGaWVsZH1dPSR7c29ydE9yZGVyfWA7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJzKSB7XG4gICAgICBxdWVyeVN0cmluZyArPSBgJiR7ZmlsdGVyc31gO1xuICAgIH1cbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgIHVybDogcXVlcnlTdHJpbmdcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtU2NoZW1hU2VydmljZTtcbiJdfQ==