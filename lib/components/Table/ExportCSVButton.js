"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _CButton = _interopRequireDefault(require("../Button/CButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ExportCSVButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExportCSVButton, _React$Component);

  function ExportCSVButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExportCSVButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExportCSVButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      if (_this.props.remote) {
        // To fetch all data corresponding to filter without pagination
        _this.props.onFetchAll(function (response) {
          _this.props.onExport(response.data);
        });
      } else {
        _this.props.onExport();
      }
    });

    return _this;
  }

  _createClass(ExportCSVButton, [{
    key: "render",
    value: function render() {
      return React.createElement(_CButton.default, {
        className: "btn btn-primary",
        name: this.props.children,
        onClick: this.handleClick
      });
    }
  }]);

  return ExportCSVButton;
}(React.Component);

exports.default = ExportCSVButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL0V4cG9ydENTVkJ1dHRvbi50c3giXSwibmFtZXMiOlsiRXhwb3J0Q1NWQnV0dG9uIiwicHJvcHMiLCJyZW1vdGUiLCJvbkZldGNoQWxsIiwicmVzcG9uc2UiLCJvbkV4cG9ydCIsImRhdGEiLCJjaGlsZHJlbiIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTcUJBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRUFXRyxZQUFNO0FBQzFCLFVBQUksTUFBS0MsS0FBTCxDQUFXQyxNQUFmLEVBQXVCO0FBQ3JCO0FBQ0EsY0FBS0QsS0FBTCxDQUFXRSxVQUFYLENBQXNCLFVBQUNDLFFBQUQsRUFBbUI7QUFDdkMsZ0JBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkQsUUFBUSxDQUFDRSxJQUE3QjtBQUNELFNBRkQ7QUFHRCxPQUxELE1BS087QUFDTCxjQUFLTCxLQUFMLENBQVdJLFFBQVg7QUFDRDtBQUNGLEs7Ozs7Ozs7NkJBbkJlO0FBQ2QsYUFDRSxvQkFBQyxnQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFDLGlCQURaO0FBRUUsUUFBQSxJQUFJLEVBQUUsS0FBS0osS0FBTCxDQUFXTSxRQUZuQjtBQUdFLFFBQUEsT0FBTyxFQUFFLEtBQUtDO0FBSGhCLFFBREY7QUFPRDs7OztFQVQwQ0MsS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0NCdXR0b24nO1xuXG5pbnRlcmZhY2UgSUV4cG9ydEJ1dHRvblByb3BzIHtcbiAgb25FeHBvcnQ/OiBhbnksXG4gIG9uRmV0Y2hBbGw6IGFueSxcbiAgcmVtb3RlOiBib29sZWFuLFxuICBjaGlsZHJlbjogYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cG9ydENTVkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRXhwb3J0QnV0dG9uUHJvcHMsIG9iamVjdD4ge1xuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICBuYW1lPXt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5yZW1vdGUpIHtcbiAgICAgIC8vIFRvIGZldGNoIGFsbCBkYXRhIGNvcnJlc3BvbmRpbmcgdG8gZmlsdGVyIHdpdGhvdXQgcGFnaW5hdGlvblxuICAgICAgdGhpcy5wcm9wcy5vbkZldGNoQWxsKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25FeHBvcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4cG9ydCgpO1xuICAgIH1cbiAgfVxufVxuIl19