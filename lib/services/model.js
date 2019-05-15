"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ModelService = function ModelService() {
  _classCallCheck(this, ModelService);
};

_defineProperty(ModelService, "createModel", function (data, modelId) {
  (0, _axios.default)({
    data: data,
    method: modelId ? 'put' : 'post',
    url: modelId ? "/models/".concat(modelId) : "/models/"
  });
});

_defineProperty(ModelService, "fetchModel", function (modelId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/models/".concat(modelId)
  });
});

_defineProperty(ModelService, "getAllModel", function (tenantId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/models?tenant=".concat(tenantId)
  });
});

var _default = ModelService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9tb2RlbC50cyJdLCJuYW1lcyI6WyJNb2RlbFNlcnZpY2UiLCJkYXRhIiwibW9kZWxJZCIsIm1ldGhvZCIsInVybCIsInRlbmFudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRU1BLFk7Ozs7Z0JBQUFBLFksaUJBQ3dCLFVBQUNDLElBQUQsRUFBWUMsT0FBWixFQUFpQztBQUMzRCxzQkFBTTtBQUNKRCxJQUFBQSxJQUFJLEVBQUpBLElBREk7QUFFSkUsSUFBQUEsTUFBTSxFQUFFRCxPQUFPLEdBQUcsS0FBSCxHQUFXLE1BRnRCO0FBR0pFLElBQUFBLEdBQUcsRUFBRUYsT0FBTyxxQkFBY0EsT0FBZDtBQUhSLEdBQU47QUFLRCxDOztnQkFQR0YsWSxnQkFTdUIsVUFBQ0UsT0FBRDtBQUFBLFNBQXNCLG9CQUFNO0FBQ3JEQyxJQUFBQSxNQUFNLEVBQUUsS0FENkM7QUFFckRDLElBQUFBLEdBQUcsb0JBQWFGLE9BQWI7QUFGa0QsR0FBTixDQUF0QjtBQUFBLEM7O2dCQVR2QkYsWSxpQkFjd0IsVUFBQ0ssUUFBRDtBQUFBLFNBQXNCLG9CQUFNO0FBQ3RERixJQUFBQSxNQUFNLEVBQUUsS0FEOEM7QUFFdERDLElBQUFBLEdBQUcsMkJBQW9CQyxRQUFwQjtBQUZtRCxHQUFOLENBQXRCO0FBQUEsQzs7ZUFNZkwsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIE1vZGVsU2VydmljZSB7XG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlTW9kZWwgPSAoZGF0YTogYW55LCBtb2RlbElkPzogc3RyaW5nKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgZGF0YSxcbiAgICAgIG1ldGhvZDogbW9kZWxJZCA/ICdwdXQnIDogJ3Bvc3QnLFxuICAgICAgdXJsOiBtb2RlbElkID8gYC9tb2RlbHMvJHttb2RlbElkfWAgOiBgL21vZGVscy9gXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZldGNoTW9kZWwgPSAobW9kZWxJZD86IHN0cmluZykgPT4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgdXJsOiBgL21vZGVscy8ke21vZGVsSWR9YFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QWxsTW9kZWwgPSAodGVuYW50SWQ6IHN0cmluZykgPT4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ2dldCcsXG4gICAgdXJsOiBgL21vZGVscz90ZW5hbnQ9JHt0ZW5hbnRJZH1gXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsU2VydmljZTtcbiJdfQ==