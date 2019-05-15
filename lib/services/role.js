"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RoleService = function RoleService() {
  _classCallCheck(this, RoleService);
};

_defineProperty(RoleService, "createRole", function (data, roleId) {
  (0, _axios.default)({
    data: data,
    method: roleId ? 'put' : 'post',
    url: roleId ? "/roles/".concat(roleId) : "/roles/"
  });
});

_defineProperty(RoleService, "fetchRole", function (roleId) {
  return (0, _axios.default)({
    method: 'get',
    url: "/roles/".concat(roleId)
  });
});

_defineProperty(RoleService, "getAllRole", function (tenantId, limit, currentPage) {
  return (0, _axios.default)({
    method: 'get',
    url: "/roles/?tenant_id=".concat(tenantId, "&$limit=").concat(limit, "&$skip=").concat(limit * (currentPage - 1))
  });
});

var _default = RoleService;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9yb2xlLnRzIl0sIm5hbWVzIjpbIlJvbGVTZXJ2aWNlIiwiZGF0YSIsInJvbGVJZCIsIm1ldGhvZCIsInVybCIsInRlbmFudElkIiwibGltaXQiLCJjdXJyZW50UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztJQUVNQSxXOzs7O2dCQUFBQSxXLGdCQUN1QixVQUFDQyxJQUFELEVBQVlDLE1BQVosRUFBZ0M7QUFDekQsc0JBQU07QUFDSkQsSUFBQUEsSUFBSSxFQUFKQSxJQURJO0FBRUpFLElBQUFBLE1BQU0sRUFBRUQsTUFBTSxHQUFHLEtBQUgsR0FBVyxNQUZyQjtBQUdKRSxJQUFBQSxHQUFHLEVBQUVGLE1BQU0sb0JBQWFBLE1BQWI7QUFIUCxHQUFOO0FBS0QsQzs7Z0JBUEdGLFcsZUFTc0IsVUFBQ0UsTUFBRDtBQUFBLFNBQXFCLG9CQUFNO0FBQ25EQyxJQUFBQSxNQUFNLEVBQUUsS0FEMkM7QUFFbkRDLElBQUFBLEdBQUcsbUJBQVlGLE1BQVo7QUFGZ0QsR0FBTixDQUFyQjtBQUFBLEM7O2dCQVR0QkYsVyxnQkFjdUIsVUFBQ0ssUUFBRCxFQUFtQkMsS0FBbkIsRUFBa0NDLFdBQWxDO0FBQUEsU0FBMEQsb0JBQU07QUFDekZKLElBQUFBLE1BQU0sRUFBRSxLQURpRjtBQUV6RkMsSUFBQUEsR0FBRyw4QkFBdUJDLFFBQXZCLHFCQUEwQ0MsS0FBMUMsb0JBQXlEQSxLQUFLLElBQUlDLFdBQVcsR0FBRyxDQUFsQixDQUE5RDtBQUZzRixHQUFOLENBQTFEO0FBQUEsQzs7ZUFNZFAsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFJvbGVTZXJ2aWNlIHtcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVSb2xlID0gKGRhdGE6IGFueSwgcm9sZUlkPzogc3RyaW5nKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgZGF0YSxcbiAgICAgIG1ldGhvZDogcm9sZUlkID8gJ3B1dCcgOiAncG9zdCcsXG4gICAgICB1cmw6IHJvbGVJZCA/IGAvcm9sZXMvJHtyb2xlSWR9YCA6IGAvcm9sZXMvYFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBmZXRjaFJvbGUgPSAocm9sZUlkPzogc3RyaW5nKSA9PiBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6IGAvcm9sZXMvJHtyb2xlSWR9YFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QWxsUm9sZSA9ICh0ZW5hbnRJZDogc3RyaW5nLCBsaW1pdDogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyKSA9PiBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6IGAvcm9sZXMvP3RlbmFudF9pZD0ke3RlbmFudElkfSYkbGltaXQ9JHtsaW1pdH0mJHNraXA9JHtsaW1pdCAqIChjdXJyZW50UGFnZSAtIDEpfWBcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9sZVNlcnZpY2U7XG4iXX0=