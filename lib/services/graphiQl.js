"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchGraphiQlQueries = exports.getGraphiQlById = exports.saveOrUpdateGraphiQl = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveOrUpdateGraphiQl = function saveOrUpdateGraphiQl(data) {
  return (0, _axios.default)({
    data: data,
    method: "".concat(data._id ? 'put' : 'post'),
    url: "/query".concat(data._id ? "/".concat(data._id) : '')
  });
};

exports.saveOrUpdateGraphiQl = saveOrUpdateGraphiQl;

var getGraphiQlById = function getGraphiQlById(id) {
  return (0, _axios.default)({
    method: 'get',
    url: "/query/".concat(id)
  });
};

exports.getGraphiQlById = getGraphiQlById;

var fetchGraphiQlQueries = function fetchGraphiQlQueries(data) {
  var limit = data.limit,
      currentPage = data.currentPage,
      sortField = data.sortField,
      sortOrder = data.sortOrder,
      filters = data.filters;
  var queryString = '/query';
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
};

exports.fetchGraphiQlQueries = fetchGraphiQlQueries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9ncmFwaGlRbC50cyJdLCJuYW1lcyI6WyJzYXZlT3JVcGRhdGVHcmFwaGlRbCIsImRhdGEiLCJtZXRob2QiLCJfaWQiLCJ1cmwiLCJnZXRHcmFwaGlRbEJ5SWQiLCJpZCIsImZldGNoR3JhcGhpUWxRdWVyaWVzIiwibGltaXQiLCJjdXJyZW50UGFnZSIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsImZpbHRlcnMiLCJxdWVyeVN0cmluZyIsInBhZ2luYXRpb25BcHBsaWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFTyxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLElBQUQ7QUFBQSxTQUFlLG9CQUFNO0FBQ3ZEQSxJQUFBQSxJQUFJLEVBQUpBLElBRHVEO0FBRXZEQyxJQUFBQSxNQUFNLFlBQUtELElBQUksQ0FBQ0UsR0FBTCxHQUFXLEtBQVgsR0FBbUIsTUFBeEIsQ0FGaUQ7QUFHdkRDLElBQUFBLEdBQUcsa0JBQVlILElBQUksQ0FBQ0UsR0FBTCxjQUFlRixJQUFJLENBQUNFLEdBQXBCLElBQTRCLEVBQXhDO0FBSG9ELEdBQU4sQ0FBZjtBQUFBLENBQTdCOzs7O0FBTUEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxFQUFEO0FBQUEsU0FBZ0Isb0JBQU07QUFDbkRKLElBQUFBLE1BQU0sRUFBRSxLQUQyQztBQUVuREUsSUFBQUEsR0FBRyxtQkFBWUUsRUFBWjtBQUZnRCxHQUFOLENBQWhCO0FBQUEsQ0FBeEI7Ozs7QUFLQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNOLElBQUQsRUFBZTtBQUFBLE1BQzFDTyxLQUQwQyxHQUNZUCxJQURaLENBQzFDTyxLQUQwQztBQUFBLE1BQ25DQyxXQURtQyxHQUNZUixJQURaLENBQ25DUSxXQURtQztBQUFBLE1BQ3RCQyxTQURzQixHQUNZVCxJQURaLENBQ3RCUyxTQURzQjtBQUFBLE1BQ1hDLFNBRFcsR0FDWVYsSUFEWixDQUNYVSxTQURXO0FBQUEsTUFDQUMsT0FEQSxHQUNZWCxJQURaLENBQ0FXLE9BREE7QUFFakQsTUFBSUMsV0FBVyxHQUFHLFFBQWxCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsS0FBeEI7O0FBQ0EsTUFBSU4sS0FBSyxJQUFJQyxXQUFiLEVBQTBCO0FBQ3hCSyxJQUFBQSxpQkFBaUIsR0FBRyxJQUFwQjtBQUNBRCxJQUFBQSxXQUFXLHNCQUFlTCxLQUFmLG9CQUE4QkEsS0FBSyxJQUFJQyxXQUFXLEdBQUcsQ0FBbEIsQ0FBbkMsQ0FBWDtBQUNEOztBQUNELE1BQUlFLFNBQVMsSUFBSUQsU0FBakIsRUFBNEI7QUFDMUJHLElBQUFBLFdBQVcsY0FBT0MsaUJBQWlCLEdBQUcsRUFBSCxHQUFRLEdBQWhDLG9CQUE2Q0osU0FBN0MsZUFBMkRDLFNBQTNELENBQVg7QUFDRDs7QUFDRCxNQUFJQyxPQUFKLEVBQWE7QUFDWEMsSUFBQUEsV0FBVyxlQUFRRCxPQUFSLENBQVg7QUFDRDs7QUFDRCxTQUFPLG9CQUFNO0FBQ1hWLElBQUFBLE1BQU0sRUFBRSxLQURHO0FBRVhFLElBQUFBLEdBQUcsRUFBRVM7QUFGTSxHQUFOLENBQVA7QUFJRCxDQWxCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBzYXZlT3JVcGRhdGVHcmFwaGlRbCA9IChkYXRhOiBhbnkpID0+IGF4aW9zKHtcbiAgZGF0YSxcbiAgbWV0aG9kOiBgJHtkYXRhLl9pZCA/ICdwdXQnIDogJ3Bvc3QnfWAsXG4gIHVybDogYC9xdWVyeSR7IGRhdGEuX2lkID8gYC8ke2RhdGEuX2lkfWAgOiAnJyB9YFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRHcmFwaGlRbEJ5SWQgPSAoaWQ6IHN0cmluZykgPT4gYXhpb3Moe1xuICBtZXRob2Q6ICdnZXQnLFxuICB1cmw6IGAvcXVlcnkvJHtpZH1gXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoR3JhcGhpUWxRdWVyaWVzID0gKGRhdGE6IGFueSkgPT4ge1xuICBjb25zdCB7bGltaXQsIGN1cnJlbnRQYWdlLCBzb3J0RmllbGQsIHNvcnRPcmRlciwgZmlsdGVycyB9ID0gZGF0YTtcbiAgbGV0IHF1ZXJ5U3RyaW5nID0gJy9xdWVyeSc7XG4gIGxldCBwYWdpbmF0aW9uQXBwbGllZCA9IGZhbHNlO1xuICBpZiAobGltaXQgJiYgY3VycmVudFBhZ2UpIHtcbiAgICBwYWdpbmF0aW9uQXBwbGllZCA9IHRydWU7XG4gICAgcXVlcnlTdHJpbmcgKz0gYD8kbGltaXQ9JHtsaW1pdH0mJHNraXA9JHtsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpfWA7XG4gIH1cbiAgaWYgKHNvcnRPcmRlciAmJiBzb3J0RmllbGQpIHtcbiAgICBxdWVyeVN0cmluZyArPSBgJHtwYWdpbmF0aW9uQXBwbGllZCA/ICcnIDogJz8nfSYkc29ydFske3NvcnRGaWVsZH1dPSR7c29ydE9yZGVyfWA7XG4gIH1cbiAgaWYgKGZpbHRlcnMpIHtcbiAgICBxdWVyeVN0cmluZyArPSBgJiR7ZmlsdGVyc31gO1xuICB9XG4gIHJldHVybiBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6IHF1ZXJ5U3RyaW5nXG4gIH0pO1xufTtcbiJdfQ==