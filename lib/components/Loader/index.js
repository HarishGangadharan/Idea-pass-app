"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _loader = _interopRequireDefault(require("../../assets/img/loader.gif"));

require("./loader.css");

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

var Loader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader(props) {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loader).call(this, props));
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      var imageStyle = this.props.imageStyle;
      return React.createElement("div", {
        className: true ? 'loader-main' : 'display-none'
      }, React.createElement("img", {
        style: imageStyle,
        src: _loader.default
      }));
    }
  }]);

  return Loader;
}(React.Component);

exports.default = Loader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvYWRlci9pbmRleC50c3giXSwibmFtZXMiOlsiTG9hZGVyIiwicHJvcHMiLCJpbWFnZVN0eWxlIiwibG9hZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT3FCQSxNOzs7OztBQUNuQixrQkFBWUMsS0FBWixFQUFpQztBQUFBOztBQUFBLCtFQUN6QkEsS0FEeUI7QUFFaEM7Ozs7NkJBRWU7QUFBQSxVQUNOQyxVQURNLEdBQ1MsS0FBS0QsS0FEZCxDQUNOQyxVQURNO0FBRWQsYUFDRTtBQUFLLFFBQUEsU0FBUyxFQUFFLE9BQU8sYUFBUCxHQUF1QjtBQUF2QyxTQUNJO0FBQUssUUFBQSxLQUFLLEVBQUVBLFVBQVo7QUFBd0IsUUFBQSxHQUFHLEVBQUVDO0FBQTdCLFFBREosQ0FERjtBQUtEOzs7O0VBWmlDQyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9hZGVyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvbG9hZGVyLmdpZic7XG5cbmltcG9ydCAnLi9sb2FkZXIuY3NzJztcblxuaW50ZXJmYWNlIElMb2FkZXJQcm9wcyB7XG4gIGltYWdlU3R5bGU/OiBhbnksXG4gIGxvYWRpbmc6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElMb2FkZXJQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSUxvYWRlclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGltYWdlU3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0cnVlID8gJ2xvYWRlci1tYWluJyA6ICdkaXNwbGF5LW5vbmUnfT5cbiAgICAgICAgICA8aW1nIHN0eWxlPXtpbWFnZVN0eWxlfSBzcmM9e2xvYWRlcn0gLz5cbiAgICAgIDwvZGl2ID5cbiAgICApO1xuICB9XG59XG4iXX0=