"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var HelloChild = function HelloChild(_ref) {
  var pathname = _ref.pathname,
      search = _ref.search,
      hash = _ref.hash;
  return React.createElement("div", null, "Hello-Child", React.createElement("ul", null, React.createElement("li", null, React.createElement(_reactRouterDom.Link, {
    to: "/hello?color=Blue&size=40"
  }, "with query string")), React.createElement("li", null, React.createElement(_reactRouterDom.Link, {
    to: "/hello#lovelove"
  }, "with hash"))), React.createElement("div", null, "pathname: ", pathname), React.createElement("div", null, "search: ", search), React.createElement("div", null, "hash: ", hash));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    hash: state.router.location.hash,
    pathname: state.router.location.pathname,
    search: state.router.location.search
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(HelloChild);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlbGxvQ2hpbGQudHN4Il0sIm5hbWVzIjpbIkhlbGxvQ2hpbGQiLCJwYXRobmFtZSIsInNlYXJjaCIsImhhc2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJvdXRlciIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFTQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLE1BQWIsUUFBYUEsTUFBYjtBQUFBLE1BQXFCQyxJQUFyQixRQUFxQkEsSUFBckI7QUFBQSxTQUNqQixnREFFRSxnQ0FDRSxnQ0FBSSxvQkFBQyxvQkFBRDtBQUFNLElBQUEsRUFBRSxFQUFDO0FBQVQseUJBQUosQ0FERixFQUVFLGdDQUFJLG9CQUFDLG9CQUFEO0FBQU0sSUFBQSxFQUFFLEVBQUM7QUFBVCxpQkFBSixDQUZGLENBRkYsRUFNRSwrQ0FDYUYsUUFEYixDQU5GLEVBU0UsNkNBQ1dDLE1BRFgsQ0FURixFQVlFLDJDQUNTQyxJQURULENBWkYsQ0FEaUI7QUFBQSxDQUFuQjs7QUFtQkEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBb0I7QUFDMUNGLElBQUFBLElBQUksRUFBRUUsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFFBQWIsQ0FBc0JKLElBRGM7QUFFMUNGLElBQUFBLFFBQVEsRUFBRUksS0FBSyxDQUFDQyxNQUFOLENBQWFDLFFBQWIsQ0FBc0JOLFFBRlU7QUFHMUNDLElBQUFBLE1BQU0sRUFBRUcsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFFBQWIsQ0FBc0JMO0FBSFksR0FBcEI7QUFBQSxDQUF4Qjs7ZUFNZSx5QkFBUUUsZUFBUixFQUF5QkosVUFBekIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmludGVyZmFjZSBJSGVsbG9DaGlsZFByb3BzIHtcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBzZWFyY2g6IHN0cmluZ1xuICBoYXNoOiBzdHJpbmdcbn1cblxuY29uc3QgSGVsbG9DaGlsZCA9ICh7IHBhdGhuYW1lLCBzZWFyY2gsIGhhc2ggfTogSUhlbGxvQ2hpbGRQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIEhlbGxvLUNoaWxkXG4gICAgPHVsPlxuICAgICAgPGxpPjxMaW5rIHRvPVwiL2hlbGxvP2NvbG9yPUJsdWUmc2l6ZT00MFwiPndpdGggcXVlcnkgc3RyaW5nPC9MaW5rPjwvbGk+XG4gICAgICA8bGk+PExpbmsgdG89XCIvaGVsbG8jbG92ZWxvdmVcIj53aXRoIGhhc2g8L0xpbms+PC9saT5cbiAgICA8L3VsPlxuICAgIDxkaXY+XG4gICAgICBwYXRobmFtZToge3BhdGhuYW1lfVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICBzZWFyY2g6IHtzZWFyY2h9XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIGhhc2g6IHtoYXNofVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0YXRlKSA9PiAoe1xuICBoYXNoOiBzdGF0ZS5yb3V0ZXIubG9jYXRpb24uaGFzaCxcbiAgcGF0aG5hbWU6IHN0YXRlLnJvdXRlci5sb2NhdGlvbi5wYXRobmFtZSxcbiAgc2VhcmNoOiBzdGF0ZS5yb3V0ZXIubG9jYXRpb24uc2VhcmNoXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlbGxvQ2hpbGQpO1xuIl19