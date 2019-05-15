"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("formiojs/dist/formio.full.min.css");

var React = _interopRequireWildcard(require("react"));

var _FormRendererWrapper = _interopRequireDefault(require("./FormRendererWrapper"));

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

var Renderer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Renderer, _React$Component);

  function Renderer(props) {
    _classCallCheck(this, Renderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Renderer).call(this, props));
  }

  _createClass(Renderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          formRendererSchema = _this$props.formRendererSchema,
          handleSubmit = _this$props.handleSubmit,
          onChange = _this$props.onChange,
          getFormio = _this$props.getFormio,
          submission = _this$props.submission,
          options = _this$props.options;
      return React.createElement("div", null, React.createElement(_FormRendererWrapper.default, {
        form: formRendererSchema,
        submission: submission,
        onSubmit: handleSubmit,
        onChange: onChange,
        assignRef: getFormio,
        options: options
      }));
    }
  }]);

  return Renderer;
}(React.Component);

var _default = Renderer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm1SZW5kZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlJlbmRlcmVyIiwicHJvcHMiLCJmb3JtUmVuZGVyZXJTY2hlbWEiLCJoYW5kbGVTdWJtaXQiLCJvbkNoYW5nZSIsImdldEZvcm1pbyIsInN1Ym1pc3Npb24iLCJvcHRpb25zIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBV01BLFE7Ozs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUM7QUFBQTs7QUFBQSxpRkFDM0JBLEtBRDJCO0FBRWxDOzs7OzZCQUVlO0FBQUEsd0JBQ3lFLEtBQUtBLEtBRDlFO0FBQUEsVUFDTkMsa0JBRE0sZUFDTkEsa0JBRE07QUFBQSxVQUNjQyxZQURkLGVBQ2NBLFlBRGQ7QUFBQSxVQUM0QkMsUUFENUIsZUFDNEJBLFFBRDVCO0FBQUEsVUFDc0NDLFNBRHRDLGVBQ3NDQSxTQUR0QztBQUFBLFVBQ2lEQyxVQURqRCxlQUNpREEsVUFEakQ7QUFBQSxVQUM2REMsT0FEN0QsZUFDNkRBLE9BRDdEO0FBRWQsYUFDRSxpQ0FDRSxvQkFBQyw0QkFBRDtBQUFjLFFBQUEsSUFBSSxFQUFFTCxrQkFBcEI7QUFDRSxRQUFBLFVBQVUsRUFBRUksVUFEZDtBQUVFLFFBQUEsUUFBUSxFQUFFSCxZQUZaO0FBR0UsUUFBQSxRQUFRLEVBQUVDLFFBSFo7QUFJRSxRQUFBLFNBQVMsRUFBRUMsU0FKYjtBQUtFLFFBQUEsT0FBTyxFQUFFRTtBQUxYLFFBREYsQ0FERjtBQVdEOzs7O0VBbEJvQkMsS0FBSyxDQUFDQyxTOztlQXFCZFQsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZm9ybWlvanMvZGlzdC9mb3JtaW8uZnVsbC5taW4uY3NzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtUmVuZGVyZXIgZnJvbSAnLi9Gb3JtUmVuZGVyZXJXcmFwcGVyJztcblxuaW50ZXJmYWNlIElSZW5kZXJlclByb3BzIHtcbiAgZm9ybVJlbmRlcmVyU2NoZW1hOiBhbnk7XG4gIHN1Ym1pc3Npb24/OiBvYmplY3Q7XG4gIG9wdGlvbnM/OiBvYmplY3Q7XG4gIG9uQ2hhbmdlPzogKG9iamVjdD86IGFueSkgPT4gdm9pZDtcbiAgaGFuZGxlU3VibWl0KGRhdGE6IGFueSk6IHZvaWQ7XG4gIGdldEZvcm1pbz8oZGF0YTogYW55KTogdm9pZDtcbn1cblxuY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVJlbmRlcmVyUHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IElSZW5kZXJlclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm1SZW5kZXJlclNjaGVtYSwgaGFuZGxlU3VibWl0LCBvbkNoYW5nZSwgZ2V0Rm9ybWlvLCBzdWJtaXNzaW9uLCBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybVJlbmRlcmVyIGZvcm09e2Zvcm1SZW5kZXJlclNjaGVtYX1cbiAgICAgICAgICBzdWJtaXNzaW9uPXtzdWJtaXNzaW9ufVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGFzc2lnblJlZj17Z2V0Rm9ybWlvfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIl19