"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EmailTemplateService = function EmailTemplateService() {
  _classCallCheck(this, EmailTemplateService);
};

exports.default = EmailTemplateService;

_defineProperty(EmailTemplateService, "createOrUpdateEmailTemplate", function (data) {
  return (0, _axios.default)({
    data: data,
    method: "".concat(data._id ? 'put' : 'post'),
    url: "/template".concat(data._id ? "/".concat(data._id) : '')
  });
});

_defineProperty(EmailTemplateService, "getEmailTemplate", function (id) {
  return (0, _axios.default)({
    method: 'get',
    url: "template/".concat(id)
  });
});

_defineProperty(EmailTemplateService, "getAllEmailTemplates", function (data) {
  var limit = data.limit,
      currentPage = data.currentPage,
      sortField = data.sortField,
      sortOrder = data.sortOrder,
      filters = data.filters;
  var url = '/template';
  var paginationApplied = false;

  if (limit && currentPage) {
    paginationApplied = true;
    url += "?$limit=".concat(limit, "&$skip=").concat(limit * (currentPage - 1));
  }

  if (sortOrder && sortField) {
    url += "".concat(paginationApplied ? '' : '?', "&$sort[").concat(sortField, "]=").concat(sortOrder);
  }

  if (filters) {
    url += "&".concat(filters);
  }

  return (0, _axios.default)({
    method: 'get',
    url: url
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9lbWFpbFRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbIkVtYWlsVGVtcGxhdGVTZXJ2aWNlIiwiZGF0YSIsIm1ldGhvZCIsIl9pZCIsInVybCIsImlkIiwibGltaXQiLCJjdXJyZW50UGFnZSIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsImZpbHRlcnMiLCJwYWdpbmF0aW9uQXBwbGllZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztJQUVxQkEsb0I7Ozs7OztnQkFBQUEsb0IsaUNBQ3lCLFVBQUNDLElBQUQ7QUFBQSxTQUFlLG9CQUFNO0FBQy9EQSxJQUFBQSxJQUFJLEVBQUpBLElBRCtEO0FBRS9EQyxJQUFBQSxNQUFNLFlBQUtELElBQUksQ0FBQ0UsR0FBTCxHQUFXLEtBQVgsR0FBbUIsTUFBeEIsQ0FGeUQ7QUFHL0RDLElBQUFBLEdBQUcscUJBQWVILElBQUksQ0FBQ0UsR0FBTCxjQUFlRixJQUFJLENBQUNFLEdBQXBCLElBQTRCLEVBQTNDO0FBSDRELEdBQU4sQ0FBZjtBQUFBLEM7O2dCQUR6Qkgsb0Isc0JBT2MsVUFBQ0ssRUFBRDtBQUFBLFNBQWEsb0JBQU07QUFDbERILElBQUFBLE1BQU0sRUFBRSxLQUQwQztBQUVsREUsSUFBQUEsR0FBRyxxQkFBY0MsRUFBZDtBQUYrQyxHQUFOLENBQWI7QUFBQSxDOztnQkFQZEwsb0IsMEJBWWtCLFVBQUNDLElBQUQsRUFBZ0I7QUFBQSxNQUM1Q0ssS0FENEMsR0FDVUwsSUFEVixDQUM1Q0ssS0FENEM7QUFBQSxNQUNyQ0MsV0FEcUMsR0FDVU4sSUFEVixDQUNyQ00sV0FEcUM7QUFBQSxNQUN4QkMsU0FEd0IsR0FDVVAsSUFEVixDQUN4Qk8sU0FEd0I7QUFBQSxNQUNiQyxTQURhLEdBQ1VSLElBRFYsQ0FDYlEsU0FEYTtBQUFBLE1BQ0ZDLE9BREUsR0FDVVQsSUFEVixDQUNGUyxPQURFO0FBRW5ELE1BQUlOLEdBQUcsR0FBRyxXQUFWO0FBQ0EsTUFBSU8saUJBQWlCLEdBQUcsS0FBeEI7O0FBQ0EsTUFBSUwsS0FBSyxJQUFJQyxXQUFiLEVBQTBCO0FBQ3hCSSxJQUFBQSxpQkFBaUIsR0FBRyxJQUFwQjtBQUNBUCxJQUFBQSxHQUFHLHNCQUFlRSxLQUFmLG9CQUE4QkEsS0FBSyxJQUFJQyxXQUFXLEdBQUcsQ0FBbEIsQ0FBbkMsQ0FBSDtBQUNEOztBQUNELE1BQUlFLFNBQVMsSUFBSUQsU0FBakIsRUFBNEI7QUFDMUJKLElBQUFBLEdBQUcsY0FBT08saUJBQWlCLEdBQUcsRUFBSCxHQUFRLEdBQWhDLG9CQUE2Q0gsU0FBN0MsZUFBMkRDLFNBQTNELENBQUg7QUFDRDs7QUFDRCxNQUFJQyxPQUFKLEVBQWE7QUFDWE4sSUFBQUEsR0FBRyxlQUFRTSxPQUFSLENBQUg7QUFDRDs7QUFDRCxTQUFPLG9CQUFNO0FBQ1hSLElBQUFBLE1BQU0sRUFBRSxLQURHO0FBRVhFLElBQUFBLEdBQUcsRUFBSEE7QUFGVyxHQUFOLENBQVA7QUFJRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxUZW1wbGF0ZVNlcnZpY2Uge1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZU9yVXBkYXRlRW1haWxUZW1wbGF0ZSA9IChkYXRhOiBhbnkpID0+IGF4aW9zKHtcbiAgICBkYXRhLFxuICAgIG1ldGhvZDogYCR7ZGF0YS5faWQgPyAncHV0JyA6ICdwb3N0J31gLFxuICAgIHVybDogYC90ZW1wbGF0ZSR7IGRhdGEuX2lkID8gYC8ke2RhdGEuX2lkfWAgOiAnJyB9YFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RW1haWxUZW1wbGF0ZSA9IChpZDogYW55KSA9PiBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6IGB0ZW1wbGF0ZS8ke2lkfWBcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGdldEFsbEVtYWlsVGVtcGxhdGVzID0gKGRhdGE/OiBhbnkpID0+IHtcbiAgICBjb25zdCB7bGltaXQsIGN1cnJlbnRQYWdlLCBzb3J0RmllbGQsIHNvcnRPcmRlciwgZmlsdGVycyB9ID0gZGF0YTtcbiAgICBsZXQgdXJsID0gJy90ZW1wbGF0ZSc7XG4gICAgbGV0IHBhZ2luYXRpb25BcHBsaWVkID0gZmFsc2U7XG4gICAgaWYgKGxpbWl0ICYmIGN1cnJlbnRQYWdlKSB7XG4gICAgICBwYWdpbmF0aW9uQXBwbGllZCA9IHRydWU7XG4gICAgICB1cmwgKz0gYD8kbGltaXQ9JHtsaW1pdH0mJHNraXA9JHtsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpfWA7XG4gICAgfVxuICAgIGlmIChzb3J0T3JkZXIgJiYgc29ydEZpZWxkKSB7XG4gICAgICB1cmwgKz0gYCR7cGFnaW5hdGlvbkFwcGxpZWQgPyAnJyA6ICc/J30mJHNvcnRbJHtzb3J0RmllbGR9XT0ke3NvcnRPcmRlcn1gO1xuICAgIH1cbiAgICBpZiAoZmlsdGVycykge1xuICAgICAgdXJsICs9IGAmJHtmaWx0ZXJzfWA7XG4gICAgfVxuICAgIHJldHVybiBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgdXJsXG4gICAgfSk7XG4gIH1cbn1cblxuXG4iXX0=