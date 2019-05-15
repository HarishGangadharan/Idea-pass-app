"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateUrl = exports.constructUrl = exports.comparatorsForAPI = exports.constructColumns = exports.isEmailValid = void 0;

var _Column = _interopRequireDefault(require("../components/Table/Column"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmailValid = function isEmailValid(email) {
  var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email).toLowerCase());
};

exports.isEmailValid = isEmailValid;

var constructColumns = function constructColumns(cols) {
  return cols.map(function (col) {
    return _Column.default.convertObjectToColumn(col);
  });
};

exports.constructColumns = constructColumns;

var comparatorsForAPI = function comparatorsForAPI(comparator) {
  if (comparator === '!=') {
    return '[$ne]=';
  } else if (comparator === '>') {
    return '[$gt]=';
  } else if (comparator === '>=') {
    return '[$gte]=';
  } else if (comparator === '<') {
    return '[$lt]=';
  } else if (comparator === '<=') {
    return '[$lte]=';
  } else {
    return comparator;
  }
};

exports.comparatorsForAPI = comparatorsForAPI;

var constructUrl = function constructUrl(requestQuery) {
  var currentPage = requestQuery.currentPage,
      sortField = requestQuery.sortField,
      sortOrder = requestQuery.sortOrder,
      limit = requestQuery.limit,
      resource = requestQuery.resource,
      filters = requestQuery.filters;
  var queryString = "".concat(resource, "?$limit=").concat(limit, "&$skip=").concat(currentPage ? limit || 0 * (currentPage - 1) : 0);

  if (sortOrder && sortField) {
    queryString += "&$sort[".concat(sortField, "]=").concat(sortOrder);
  }

  if (filters) {
    queryString += "&".concat(filters);
  }

  return queryString;
};

exports.constructUrl = constructUrl;

var interpolateUrl = function interpolateUrl(url) {
  if (url.indexOf('http') !== 0) {
    if (url.substring(0, 1) === '/') {
      return "".concat(process.env.REACT_APP_BASE_URL).concat(url);
    } else {
      return "".concat(process.env.REACT_APP_BASE_URL, "/").concat(url);
    }
  }

  return url;
};

exports.interpolateUrl = interpolateUrl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jb21tb25VdGlsLnRzIl0sIm5hbWVzIjpbImlzRW1haWxWYWxpZCIsImVtYWlsIiwiZXhwcmVzc2lvbiIsInRlc3QiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImNvbnN0cnVjdENvbHVtbnMiLCJjb2xzIiwibWFwIiwiY29sIiwiQ29sdW1uIiwiY29udmVydE9iamVjdFRvQ29sdW1uIiwiY29tcGFyYXRvcnNGb3JBUEkiLCJjb21wYXJhdG9yIiwiY29uc3RydWN0VXJsIiwicmVxdWVzdFF1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJsaW1pdCIsInJlc291cmNlIiwiZmlsdGVycyIsInF1ZXJ5U3RyaW5nIiwiaW50ZXJwb2xhdGVVcmwiLCJ1cmwiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9CQVNFX1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUE2QjtBQUN2RCxNQUFNQyxVQUFVLEdBQUcseUpBQW5CO0FBQ0EsU0FBT0EsVUFBVSxDQUFDQyxJQUFYLENBQWdCQyxNQUFNLENBQUNILEtBQUQsQ0FBTixDQUFjSSxXQUFkLEVBQWhCLENBQVA7QUFDRCxDQUhNOzs7O0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFEO0FBQUEsU0FDOUJBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxnQkFBT0MscUJBQVAsQ0FBNkJGLEdBQTdCLENBQUo7QUFBQSxHQUFaLENBRDhCO0FBQUEsQ0FBekI7Ozs7QUFHQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLFVBQUQsRUFBZ0M7QUFDL0QsTUFBSUEsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCLFdBQU8sUUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxVQUFVLEtBQUssR0FBbkIsRUFBd0I7QUFDN0IsV0FBTyxRQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUM5QixXQUFPLFNBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsVUFBVSxLQUFLLEdBQW5CLEVBQXdCO0FBQzdCLFdBQU8sUUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxVQUFVLEtBQUssSUFBbkIsRUFBeUI7QUFDOUIsV0FBTyxTQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBT0EsVUFBUDtBQUNEO0FBQ0YsQ0FkTTs7OztBQWdCQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxZQUFELEVBQWtDO0FBQUEsTUFFMURDLFdBRjBELEdBUXhERCxZQVJ3RCxDQUUxREMsV0FGMEQ7QUFBQSxNQUcxREMsU0FIMEQsR0FReERGLFlBUndELENBRzFERSxTQUgwRDtBQUFBLE1BSTFEQyxTQUowRCxHQVF4REgsWUFSd0QsQ0FJMURHLFNBSjBEO0FBQUEsTUFLMURDLEtBTDBELEdBUXhESixZQVJ3RCxDQUsxREksS0FMMEQ7QUFBQSxNQU0xREMsUUFOMEQsR0FReERMLFlBUndELENBTTFESyxRQU4wRDtBQUFBLE1BTzFEQyxPQVAwRCxHQVF4RE4sWUFSd0QsQ0FPMURNLE9BUDBEO0FBUzVELE1BQUlDLFdBQVcsYUFBTUYsUUFBTixxQkFBeUJELEtBQXpCLG9CQUNiSCxXQUFXLEdBQUdHLEtBQUssSUFBSSxLQUFLSCxXQUFXLEdBQUcsQ0FBbkIsQ0FBWixHQUFvQyxDQURsQyxDQUFmOztBQUVBLE1BQUlFLFNBQVMsSUFBSUQsU0FBakIsRUFBNEI7QUFDMUJLLElBQUFBLFdBQVcscUJBQWNMLFNBQWQsZUFBNEJDLFNBQTVCLENBQVg7QUFDRDs7QUFDRCxNQUFJRyxPQUFKLEVBQWE7QUFDWEMsSUFBQUEsV0FBVyxlQUFRRCxPQUFSLENBQVg7QUFDRDs7QUFDRCxTQUFPQyxXQUFQO0FBQ0QsQ0FsQk07Ozs7QUFvQkEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxHQUFELEVBQWlCO0FBQzdDLE1BQUlBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLE1BQVosTUFBd0IsQ0FBNUIsRUFBK0I7QUFDN0IsUUFBSUQsR0FBRyxDQUFDRSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixNQUF3QixHQUE1QixFQUFpQztBQUMvQix1QkFBVUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGtCQUF0QixTQUEyQ0wsR0FBM0M7QUFDRCxLQUZELE1BRU87QUFDTCx1QkFBVUcsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGtCQUF0QixjQUE0Q0wsR0FBNUM7QUFDRDtBQUNGOztBQUNELFNBQU9BLEdBQVA7QUFDRCxDQVRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlcXVlc3RRdWVyeSB9IGZyb20gJ3JlcXVlc3QtZmlsdGVyJztcbmltcG9ydCBDb2x1bW4sIHsgSUNvbERlZiB9IGZyb20gJy4uL2NvbXBvbmVudHMvVGFibGUvQ29sdW1uJztcblxuZXhwb3J0IGNvbnN0IGlzRW1haWxWYWxpZCA9IChlbWFpbDogc3RyaW5nKSA6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBleHByZXNzaW9uID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgcmV0dXJuIGV4cHJlc3Npb24udGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdENvbHVtbnMgPSAoY29sczogSUNvbERlZltdKTogQ29sdW1uW10gPT5cbiAgY29scy5tYXAoY29sID0+IENvbHVtbi5jb252ZXJ0T2JqZWN0VG9Db2x1bW4oY29sKSk7XG5cbmV4cG9ydCBjb25zdCBjb21wYXJhdG9yc0ZvckFQSSA9IChjb21wYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoY29tcGFyYXRvciA9PT0gJyE9Jykge1xuICAgIHJldHVybiAnWyRuZV09JztcbiAgfSBlbHNlIGlmIChjb21wYXJhdG9yID09PSAnPicpIHtcbiAgICByZXR1cm4gJ1skZ3RdPSc7XG4gIH0gZWxzZSBpZiAoY29tcGFyYXRvciA9PT0gJz49Jykge1xuICAgIHJldHVybiAnWyRndGVdPSc7XG4gIH0gZWxzZSBpZiAoY29tcGFyYXRvciA9PT0gJzwnKSB7XG4gICAgcmV0dXJuICdbJGx0XT0nO1xuICB9IGVsc2UgaWYgKGNvbXBhcmF0b3IgPT09ICc8PScpIHtcbiAgICByZXR1cm4gJ1skbHRlXT0nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb21wYXJhdG9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY29uc3RydWN0VXJsID0gKHJlcXVlc3RRdWVyeTogSVJlcXVlc3RRdWVyeSkgPT4gIHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRQYWdlLFxuICAgIHNvcnRGaWVsZCxcbiAgICBzb3J0T3JkZXIsXG4gICAgbGltaXQsXG4gICAgcmVzb3VyY2UsXG4gICAgZmlsdGVyc1xuICB9ID0gcmVxdWVzdFF1ZXJ5O1xuICBsZXQgcXVlcnlTdHJpbmcgPSBgJHtyZXNvdXJjZX0/JGxpbWl0PSR7bGltaXR9JiRza2lwPSR7XG4gICAgY3VycmVudFBhZ2UgPyBsaW1pdCB8fCAwICogKGN1cnJlbnRQYWdlIC0gMSkgOiAwfWA7XG4gIGlmIChzb3J0T3JkZXIgJiYgc29ydEZpZWxkKSB7XG4gICAgcXVlcnlTdHJpbmcgKz0gYCYkc29ydFske3NvcnRGaWVsZH1dPSR7c29ydE9yZGVyfWA7XG4gIH1cbiAgaWYgKGZpbHRlcnMpIHtcbiAgICBxdWVyeVN0cmluZyArPSBgJiR7ZmlsdGVyc31gO1xuICB9XG4gIHJldHVybiBxdWVyeVN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZVVybCA9ICh1cmw6IHN0cmluZykgPT4ge1xuICBpZiAodXJsLmluZGV4T2YoJ2h0dHAnKSAhPT0gMCkge1xuICAgIGlmICh1cmwuc3Vic3RyaW5nKDAsIDEpID09PSAnLycpIHtcbiAgICAgIHJldHVybiBgJHtwcm9jZXNzLmVudi5SRUFDVF9BUFBfQkFTRV9VUkx9JHt1cmx9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9CQVNFX1VSTH0vJHt1cmx9YDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07XG4iXX0=