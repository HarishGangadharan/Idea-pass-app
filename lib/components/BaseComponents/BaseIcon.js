"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var Icons = _interopRequireWildcard(require("react-feather"));

var _reactLocalizeRedux = require("react-localize-redux");

require("./style.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseIcon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(BaseIcon, _React$PureComponent);

  function BaseIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BaseIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onMissingTranslation", function (options) {
      return options.translationId;
    });

    return _this;
  }

  _createClass(BaseIcon, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          name = _this$props.name,
          label = _this$props.label,
          onClick = _this$props.onClick,
          params = _this$props.params,
          classname = _this$props.classname,
          size = _this$props.size,
          display = _this$props.display,
          title = _this$props.title;
      var Icon = Icons[name];
      return React.createElement(_reactLocalizeRedux.Translate, null, function (_ref) {
        var translate = _ref.translate;
        var translated = label ? translate(label, _objectSpread({}, params), {
          onMissingTranslation: _this2.onMissingTranslation
        }).toString() : '';
        return React.createElement("span", {
          className: "base-icon ".concat(classname || ''),
          style: {
            display: display || 'flex'
          },
          title: translated
        }, React.createElement(Icon, {
          size: size || '15',
          onClick: onClick,
          className: "cursor-pointer"
        }), "\xA0", React.createElement("span", {
          className: "icon-label",
          title: title || ''
        }, translated));
      });
    } // fallback translation message

  }]);

  return BaseIcon;
}(React.PureComponent);

var _default = BaseIcon;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Jhc2VDb21wb25lbnRzL0Jhc2VJY29uLnRzeCJdLCJuYW1lcyI6WyJCYXNlSWNvbiIsIm9wdGlvbnMiLCJ0cmFuc2xhdGlvbklkIiwicHJvcHMiLCJuYW1lIiwibGFiZWwiLCJvbkNsaWNrIiwicGFyYW1zIiwiY2xhc3NuYW1lIiwic2l6ZSIsImRpc3BsYXkiLCJ0aXRsZSIsIkljb24iLCJJY29ucyIsInRyYW5zbGF0ZSIsInRyYW5zbGF0ZWQiLCJvbk1pc3NpbmdUcmFuc2xhdGlvbiIsInRvU3RyaW5nIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBYU1BLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyRUE4QzJCLFVBQUNDLE9BQUQsRUFBa0I7QUFDL0MsYUFBT0EsT0FBTyxDQUFDQyxhQUFmO0FBQ0QsSzs7Ozs7Ozs2QkEvQ2U7QUFBQTs7QUFBQSx3QkFVVixLQUFLQyxLQVZLO0FBQUEsVUFFWkMsSUFGWSxlQUVaQSxJQUZZO0FBQUEsVUFHWkMsS0FIWSxlQUdaQSxLQUhZO0FBQUEsVUFJWkMsT0FKWSxlQUlaQSxPQUpZO0FBQUEsVUFLWkMsTUFMWSxlQUtaQSxNQUxZO0FBQUEsVUFNWkMsU0FOWSxlQU1aQSxTQU5ZO0FBQUEsVUFPWkMsSUFQWSxlQU9aQSxJQVBZO0FBQUEsVUFRWkMsT0FSWSxlQVFaQSxPQVJZO0FBQUEsVUFTWkMsS0FUWSxlQVNaQSxLQVRZO0FBV2QsVUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUNULElBQUQsQ0FBbEI7QUFDQSxhQUNFLG9CQUFDLDZCQUFELFFBQ0csZ0JBQXlDO0FBQUEsWUFBdENVLFNBQXNDLFFBQXRDQSxTQUFzQztBQUN4QyxZQUFNQyxVQUFVLEdBQUdWLEtBQUssR0FDcEJTLFNBQVMsQ0FDUFQsS0FETyxvQkFFSEUsTUFGRyxHQUdQO0FBQUVTLFVBQUFBLG9CQUFvQixFQUFFLE1BQUksQ0FBQ0E7QUFBN0IsU0FITyxDQUFULENBSUVDLFFBSkYsRUFEb0IsR0FNcEIsRUFOSjtBQU9BLGVBQ0U7QUFDRSxVQUFBLFNBQVMsc0JBQWVULFNBQVMsSUFBSSxFQUE1QixDQURYO0FBRUUsVUFBQSxLQUFLLEVBQUU7QUFBRUUsWUFBQUEsT0FBTyxFQUFFQSxPQUFPLElBQUk7QUFBdEIsV0FGVDtBQUdFLFVBQUEsS0FBSyxFQUFFSztBQUhULFdBS0Usb0JBQUMsSUFBRDtBQUNFLFVBQUEsSUFBSSxFQUFFTixJQUFJLElBQUksSUFEaEI7QUFFRSxVQUFBLE9BQU8sRUFBRUgsT0FGWDtBQUdFLFVBQUEsU0FBUyxFQUFDO0FBSFosVUFMRixVQVdFO0FBQU0sVUFBQSxTQUFTLEVBQUMsWUFBaEI7QUFBNkIsVUFBQSxLQUFLLEVBQUVLLEtBQUssSUFBSTtBQUE3QyxXQUNHSSxVQURILENBWEYsQ0FERjtBQWlCRCxPQTFCSCxDQURGO0FBOEJELEssQ0FFRDs7Ozs7RUE3Q3FCRyxLQUFLLENBQUNDLGE7O2VBbURkbkIsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vID0+IExpc3Qgb2YgaWNvbnMgaHR0cHM6Ly9mZWF0aGVyaWNvbnMuY29tL1xuaW1wb3J0ICogYXMgSWNvbnMgZnJvbSAncmVhY3QtZmVhdGhlcic7XG5pbXBvcnQgeyBMb2NhbGl6ZUNvbnRleHRQcm9wcywgVHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtbG9jYWxpemUtcmVkdXgnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmludGVyZmFjZSBJY29uUHJvcHMge1xuICBuYW1lOiBhbnk7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjbGFzc25hbWU/OiBzdHJpbmc7XG4gIHBhcmFtcz86IGFueSxcbiAgZGlzcGxheT86IHN0cmluZztcbiAgc2l6ZT86IG51bWJlcjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAob2JqZWN0PzogYW55KSA9PiBhbnk7XG59XG5cbmNsYXNzIEJhc2VJY29uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJY29uUHJvcHM+IHtcbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lLFxuICAgICAgbGFiZWwsXG4gICAgICBvbkNsaWNrLFxuICAgICAgcGFyYW1zLFxuICAgICAgY2xhc3NuYW1lLFxuICAgICAgc2l6ZSxcbiAgICAgIGRpc3BsYXksXG4gICAgICB0aXRsZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IEljb24gPSBJY29uc1tuYW1lXTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zbGF0ZT5cbiAgICAgICAgeyh7IHRyYW5zbGF0ZSB9OiBMb2NhbGl6ZUNvbnRleHRQcm9wcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWQgPSBsYWJlbFxuICAgICAgICAgICAgPyB0cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgICAgey4uLnBhcmFtc30sXG4gICAgICAgICAgICAgICAgeyBvbk1pc3NpbmdUcmFuc2xhdGlvbjogdGhpcy5vbk1pc3NpbmdUcmFuc2xhdGlvbiB9XG4gICAgICAgICAgICAgICkudG9TdHJpbmcoKVxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmFzZS1pY29uICR7Y2xhc3NuYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGRpc3BsYXkgfHwgJ2ZsZXgnIH19XG4gICAgICAgICAgICAgIHRpdGxlPXt0cmFuc2xhdGVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIHNpemU9e3NpemUgfHwgJzE1J31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tbGFiZWxcIiB0aXRsZT17dGl0bGUgfHwgJyd9PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVkfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvVHJhbnNsYXRlPlxuICAgICk7XG4gIH1cblxuICAvLyBmYWxsYmFjayB0cmFuc2xhdGlvbiBtZXNzYWdlXG4gIHByaXZhdGUgb25NaXNzaW5nVHJhbnNsYXRpb24gPSAob3B0aW9uczogYW55KSA9PiB7XG4gICAgcmV0dXJuIG9wdGlvbnMudHJhbnNsYXRpb25JZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlSWNvbjtcbiJdfQ==