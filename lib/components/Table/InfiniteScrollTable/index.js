"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

require("./InfiniteScroll.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withInfiniteScroll = function withInfiniteScroll() {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(InfiniteScrollHoc, _React$Component);

    function InfiniteScrollHoc(props) {
      var _this;

      _classCallCheck(this, InfiniteScrollHoc);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InfiniteScrollHoc).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "container", void 0);

      _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
        var _this$container$curre = _this.container.current.querySelector('tbody'),
            scrollHeight = _this$container$curre.scrollHeight,
            scrollTop = _this$container$curre.scrollTop,
            clientHeight = _this$container$curre.clientHeight;

        if (scrollHeight - scrollTop === clientHeight && _this.props.hasMore) {
          _this.props.onScroll();
        }
      });

      _this.container = React.createRef();
      return _this;
    }

    _createClass(InfiniteScrollHoc, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.enabled) {
          this.container.current.querySelector('tbody').addEventListener('scroll', this.onScroll, false);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.enabled) {
          this.container.current.querySelector('tbody').removeEventListener('scroll', this.onScroll, false);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            content = _this$props.content,
            enabled = _this$props.enabled;
        return React.createElement("div", {
          ref: this.container,
          className: "".concat(enabled ? 'scroll-container' : '')
        }, content);
      }
    }]);

    return InfiniteScrollHoc;
  }(React.Component), _temp;
};

var _default = withInfiniteScroll;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL0luZmluaXRlU2Nyb2xsVGFibGUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIndpdGhJbmZpbml0ZVNjcm9sbCIsInByb3BzIiwiY29udGFpbmVyIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxUb3AiLCJjbGllbnRIZWlnaHQiLCJoYXNNb3JlIiwib25TY3JvbGwiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImVuYWJsZWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRlbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUl2QiwrQkFBWUMsS0FBWixFQUFpQztBQUFBOztBQUFBOztBQUMvQiw2RkFBTUEsS0FBTjs7QUFEK0I7O0FBQUEsaUVBNkJkLFlBQU07QUFBQSxvQ0FDMkIsTUFBS0MsU0FBTCxDQUFlQyxPQUFmLENBQXVCQyxhQUF2QixDQUFxQyxPQUFyQyxDQUQzQjtBQUFBLFlBQ2ZDLFlBRGUseUJBQ2ZBLFlBRGU7QUFBQSxZQUNEQyxTQURDLHlCQUNEQSxTQURDO0FBQUEsWUFDVUMsWUFEVix5QkFDVUEsWUFEVjs7QUFFdkIsWUFBSUYsWUFBWSxHQUFHQyxTQUFmLEtBQTZCQyxZQUE3QixJQUNGLE1BQUtOLEtBQUwsQ0FBV08sT0FEYixFQUVFO0FBQ0EsZ0JBQUtQLEtBQUwsQ0FBV1EsUUFBWDtBQUNEO0FBQ0YsT0FwQ2dDOztBQUUvQixZQUFLUCxTQUFMLEdBQWlCUSxLQUFLLENBQUNDLFNBQU4sRUFBakI7QUFGK0I7QUFHaEM7O0FBUHNCO0FBQUE7QUFBQSwwQ0FTSTtBQUN6QixZQUFJLEtBQUtWLEtBQUwsQ0FBV1csT0FBZixFQUF3QjtBQUN0QixlQUFLVixTQUFMLENBQWVDLE9BQWYsQ0FBdUJDLGFBQXZCLENBQXFDLE9BQXJDLEVBQThDUyxnQkFBOUMsQ0FBK0QsUUFBL0QsRUFBeUUsS0FBS0osUUFBOUUsRUFBd0YsS0FBeEY7QUFDRDtBQUNGO0FBYnNCO0FBQUE7QUFBQSw2Q0FlTztBQUM1QixZQUFJLEtBQUtSLEtBQUwsQ0FBV1csT0FBZixFQUF3QjtBQUN0QixlQUFLVixTQUFMLENBQWVDLE9BQWYsQ0FBdUJDLGFBQXZCLENBQXFDLE9BQXJDLEVBQThDVSxtQkFBOUMsQ0FBa0UsUUFBbEUsRUFBNEUsS0FBS0wsUUFBakYsRUFBMkYsS0FBM0Y7QUFDRDtBQUNGO0FBbkJzQjtBQUFBO0FBQUEsK0JBcUJQO0FBQUEsMEJBQ2UsS0FBS1IsS0FEcEI7QUFBQSxZQUNOYyxPQURNLGVBQ05BLE9BRE07QUFBQSxZQUNHSCxPQURILGVBQ0dBLE9BREg7QUFFZCxlQUNFO0FBQ0UsVUFBQSxHQUFHLEVBQUUsS0FBS1YsU0FEWjtBQUVFLFVBQUEsU0FBUyxZQUFLVSxPQUFPLEdBQUcsa0JBQUgsR0FBd0IsRUFBcEM7QUFGWCxXQUlHRyxPQUpILENBREY7QUFRRDtBQS9Cc0I7O0FBQUE7QUFBQSxJQUNPTCxLQUFLLENBQUNNLFNBRGI7QUFBQSxDQUEzQjs7ZUEyQ2VoQixrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0luZmluaXRlU2Nyb2xsLmNzcyc7XG5cbmludGVyZmFjZSBJU2Nyb2xsUHJvcHMge1xuICBoYXNNb3JlOiBib29sZWFuO1xuICBlbmFibGVkOiBib29sZWFuO1xuICBvblNjcm9sbDogYW55O1xuICBjb250ZW50OiBhbnk7XG59XG5cbmNvbnN0IHdpdGhJbmZpbml0ZVNjcm9sbCA9ICgpID0+XG4gIGNsYXNzIEluZmluaXRlU2Nyb2xsSG9jIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElTY3JvbGxQcm9wcywgb2JqZWN0PiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJU2Nyb2xsUHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlZCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5JykuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBjb250ZW50LCBlbmFibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtlbmFibGVkID8gJ3Njcm9sbC1jb250YWluZXInIDogJyd9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsSGVpZ2h0LCBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCB9ID0gdGhpcy5jb250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuICAgICAgaWYgKHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCA9PT0gY2xpZW50SGVpZ2h0ICYmXG4gICAgICAgIHRoaXMucHJvcHMuaGFzTW9yZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TY3JvbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhJbmZpbml0ZVNjcm9sbDtcbiJdfQ==