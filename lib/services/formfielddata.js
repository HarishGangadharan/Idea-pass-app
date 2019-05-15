"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormFieldDataService = function FormFieldDataService() {
  _classCallCheck(this, FormFieldDataService);
};

_defineProperty(FormFieldDataService, "saveFormFieldData", function (data, formName, formDataId) {
  return (0, _axios.default)({
    data: data,
    method: formDataId ? 'put' : 'post',
    url: formDataId ? "/forms/".concat(formName, "/").concat(formDataId) : "/forms/".concat(formName)
  });
});

_defineProperty(FormFieldDataService, "fetchFormFieldData", function (formName, submissionId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/forms/".concat(formName, "/").concat(submissionId)
  });
});

_defineProperty(FormFieldDataService, "fetchFormFieldDataList", function (formName, limit, currentPage) {
  return (0, _axios.default)({
    method: 'get',
    url: "/forms/".concat(formName, "?$limit=").concat(limit, "&$skip=").concat(limit * (currentPage - 1))
  });
});

var _default = FormFieldDataService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9mb3JtZmllbGRkYXRhLnRzIl0sIm5hbWVzIjpbIkZvcm1GaWVsZERhdGFTZXJ2aWNlIiwiZGF0YSIsImZvcm1OYW1lIiwiZm9ybURhdGFJZCIsIm1ldGhvZCIsInVybCIsInN1Ym1pc3Npb25JZCIsImxpbWl0IiwiY3VycmVudFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsb0I7Ozs7Z0JBQUFBLG9CLHVCQUM4QixVQUFDQyxJQUFELEVBQVlDLFFBQVosRUFBOEJDLFVBQTlCO0FBQUEsU0FBc0Qsb0JBQU07QUFDMUZGLElBQUFBLElBQUksRUFBSkEsSUFEMEY7QUFFMUZHLElBQUFBLE1BQU0sRUFBRUQsVUFBVSxHQUFHLEtBQUgsR0FBVyxNQUY2RDtBQUcxRkUsSUFBQUEsR0FBRyxFQUFFRixVQUFVLG9CQUFhRCxRQUFiLGNBQXlCQyxVQUF6QixxQkFBa0RELFFBQWxEO0FBSDJFLEdBQU4sQ0FBdEQ7QUFBQSxDOztnQkFEOUJGLG9CLHdCQU8rQixVQUFDRSxRQUFELEVBQW1CSSxZQUFuQjtBQUFBLFNBQTZDLG9CQUFNO0FBQ3BGRixJQUFBQSxNQUFNLEVBQUUsS0FENEU7QUFFcEZDLElBQUFBLEdBQUcsbUJBQVlILFFBQVosY0FBd0JJLFlBQXhCO0FBRmlGLEdBQU4sQ0FBN0M7QUFBQSxDOztnQkFQL0JOLG9CLDRCQVltQyxVQUFDRSxRQUFELEVBQW1CSyxLQUFuQixFQUFrQ0MsV0FBbEM7QUFBQSxTQUEwRCxvQkFBTTtBQUNyR0osSUFBQUEsTUFBTSxFQUFFLEtBRDZGO0FBRXJHQyxJQUFBQSxHQUFHLG1CQUFZSCxRQUFaLHFCQUErQkssS0FBL0Isb0JBQThDQSxLQUFLLElBQUlDLFdBQVcsR0FBRyxDQUFsQixDQUFuRDtBQUZrRyxHQUFOLENBQTFEO0FBQUEsQzs7ZUFPMUJSLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgRm9ybUZpZWxkRGF0YVNlcnZpY2Uge1xuICBwdWJsaWMgc3RhdGljIHNhdmVGb3JtRmllbGREYXRhID0gKGRhdGE6IGFueSwgZm9ybU5hbWU6IHN0cmluZywgZm9ybURhdGFJZD86IHN0cmluZykgPT4gYXhpb3Moe1xuICAgICAgZGF0YSxcbiAgICAgIG1ldGhvZDogZm9ybURhdGFJZCA/ICdwdXQnIDogJ3Bvc3QnLFxuICAgICAgdXJsOiBmb3JtRGF0YUlkID8gYC9mb3Jtcy8ke2Zvcm1OYW1lfS8ke2Zvcm1EYXRhSWR9YCA6IGAvZm9ybXMvJHtmb3JtTmFtZX1gXG4gICAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZldGNoRm9ybUZpZWxkRGF0YSA9IChmb3JtTmFtZTogc3RyaW5nLCBzdWJtaXNzaW9uSWQ/OiBzdHJpbmcpID0+IGF4aW9zKHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHVybDogYC9mb3Jtcy8ke2Zvcm1OYW1lfS8ke3N1Ym1pc3Npb25JZH1gXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmZXRjaEZvcm1GaWVsZERhdGFMaXN0ID0gKGZvcm1OYW1lOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIpID0+IGF4aW9zKHtcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHVybDogYC9mb3Jtcy8ke2Zvcm1OYW1lfT8kbGltaXQ9JHtsaW1pdH0mJHNraXA9JHtsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpfWBcbiAgfSlcblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGREYXRhU2VydmljZTtcbiJdfQ==