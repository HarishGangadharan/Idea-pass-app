"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _logger = _interopRequireDefault(require("../../utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Defauilt Error Handler component in application level
 * to show fallback UI.
 */
var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true
      }); // tslint:disable-next-line:no-console

      _logger.default.error(info, error); // Display fallback UI

      /** You can also log the error to an error reporting service
       * logErrorToMyService(error, info);
       */

    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return React.createElement("div", null, React.createElement("div", {
          style: {
            paddingBottom: '20px',
            paddingTop: '20px'
          }
        }, React.createElement("h3", null, "SomeThing Wrong from our side :("), React.createElement("p", null, "Kindly try again later...!!!")));
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(React.Component);

var _default = ErrorBoundary;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Vycm9yV3JhcHBlci9pbmRleC50c3giXSwibmFtZXMiOlsiRXJyb3JCb3VuZGFyeSIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImVycm9yIiwiaW5mbyIsInNldFN0YXRlIiwiTG9nZ2VyIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7O0lBSU1BLGE7Ozs7O0FBQ0oseUJBQVlDLEtBQVosRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEIsdUZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBYjtBQUZzQjtBQUd2Qjs7OztzQ0FFd0JDLEssRUFBWUMsSSxFQUFXO0FBQzlDLFdBQUtDLFFBQUwsQ0FBYztBQUFFSCxRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFkLEVBRDhDLENBRTlDOztBQUNBSSxzQkFBT0gsS0FBUCxDQUFhQyxJQUFiLEVBQW1CRCxLQUFuQixFQUg4QyxDQUk5Qzs7QUFDQTs7OztBQUdEOzs7NkJBRWU7QUFDZCxVQUFJLEtBQUtGLEtBQUwsQ0FBV0MsUUFBZixFQUF5QjtBQUN2QjtBQUNBLGVBQ0UsaUNBQ0U7QUFDRSxVQUFBLEtBQUssRUFBRTtBQUNMSyxZQUFBQSxhQUFhLEVBQUUsTUFEVjtBQUVMQyxZQUFBQSxVQUFVLEVBQUU7QUFGUDtBQURULFdBTUUsbUVBTkYsRUFPRSw4REFQRixDQURGLENBREY7QUFhRDs7QUFDRCxhQUFPLEtBQUtSLEtBQUwsQ0FBV1MsUUFBbEI7QUFDRDs7OztFQWxDeUJDLEtBQUssQ0FBQ0MsUzs7ZUFxQ25CWixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5pbnRlcmZhY2UgSUVycm9yQm91bmRhcnlTdGF0ZSB7XG4gIGhhc0Vycm9yOiBib29sZWFuO1xufVxuXG4vKipcbiAqIERlZmF1aWx0IEVycm9yIEhhbmRsZXIgY29tcG9uZW50IGluIGFwcGxpY2F0aW9uIGxldmVsXG4gKiB0byBzaG93IGZhbGxiYWNrIFVJLlxuICovXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJRXJyb3JCb3VuZGFyeVN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH07XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IGFueSwgaW5mbzogYW55KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlIH0pO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgTG9nZ2VyLmVycm9yKGluZm8sIGVycm9yKTtcbiAgICAvLyBEaXNwbGF5IGZhbGxiYWNrIFVJXG4gICAgLyoqIFlvdSBjYW4gYWxzbyBsb2cgdGhlIGVycm9yIHRvIGFuIGVycm9yIHJlcG9ydGluZyBzZXJ2aWNlXG4gICAgICogbG9nRXJyb3JUb015U2VydmljZShlcnJvciwgaW5mbyk7XG4gICAgICovXG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICAvLyBZb3UgY2FuIHJlbmRlciBhbnkgY3VzdG9tIGZhbGxiYWNrIFVJXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcyMHB4JyxcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzIwcHgnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5Tb21lVGhpbmcgV3JvbmcgZnJvbSBvdXIgc2lkZSA6KDwvaDM+XG4gICAgICAgICAgICA8cD5LaW5kbHkgdHJ5IGFnYWluIGxhdGVyLi4uISEhPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XG4iXX0=