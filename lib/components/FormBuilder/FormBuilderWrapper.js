"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = _interopRequireDefault(require("formiojs/components"));

var _Components = _interopRequireDefault(require("formiojs/components/Components"));

var React = _interopRequireWildcard(require("react"));

var _FormBuilder = _interopRequireDefault(require("formiojs/FormBuilder"));

var _select = _interopRequireDefault(require("./customComponents/select/select"));

var _template = _interopRequireDefault(require("./customComponents/template/template"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_Components.default.setComponents(_components.default);

var plugin = {
  priority: 0,
  requestOptions: function requestOptions(value) {
    value.credentials = 'include';
    return value;
  }
};
Formio.registerPlugin(plugin, 'enableCredentials');
Formio.registerComponent('template', _template.default);
Formio.registerComponent('select', _select.default);

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "builder", void 0);

    _defineProperty(_assertThisInitialized(_this), "builderReady", new Promise(function (resolve) {
      return resolve();
    }));

    _defineProperty(_assertThisInitialized(_this), "element", void 0);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      _this.initializeBuilder();
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.builder) {
        _this.builder.instance.destroy(true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initializeBuilder", function () {
      var _this$props = _this.props,
          options = _this$props.options,
          form = _this$props.form;
      _this.builder = new _FormBuilder.default(_this.element.current, form, options);
      _this.builderReady = _this.builder.setDisplay(form.display);

      _this.builderReady.then(function () {
        _this.builder.instance.on('saveComponent', _this.emit('onSaveComponent'));

        _this.builder.instance.on('updateComponent', _this.emit('onUpdateComponent'));

        _this.builder.instance.on('deleteComponent', _this.emit('onDeleteComponent'));

        _this.builder.instance.on('cancelComponent', _this.emit('onCancelComponent'));

        _this.builder.instance.on('editComponent', _this.emit('onEditComponent'));

        _this.builder.instance.on('saveComponent', _this.onChange);

        _this.builder.instance.on('updateComponent', _this.onChange);

        _this.builder.instance.on('deleteComponent', _this.onChange);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return React.createElement("div", {
        ref: _this.element
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      if (_this.props.hasOwnProperty('onChange') && typeof _this.props.onChange === 'function') {
        _this.props.onChange(_this.builder.instance.schema);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "emit", function (funcName) {
      return function () {
        if (_this.props.hasOwnProperty(funcName) && typeof _this.props[funcName] === 'function') {
          var _this$props2;

          (_this$props2 = _this.props)[funcName].apply(_this$props2, arguments);
        }
      };
    });

    _this.element = React.createRef();
    return _this;
  }

  return _default;
}(React.Component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm1CdWlsZGVyL0Zvcm1CdWlsZGVyV3JhcHBlci50c3giXSwibmFtZXMiOlsiQ29tcG9uZW50cyIsInNldENvbXBvbmVudHMiLCJBbGxDb21wb25lbnRzIiwicGx1Z2luIiwicHJpb3JpdHkiLCJyZXF1ZXN0T3B0aW9ucyIsInZhbHVlIiwiY3JlZGVudGlhbHMiLCJGb3JtaW8iLCJyZWdpc3RlclBsdWdpbiIsInJlZ2lzdGVyQ29tcG9uZW50IiwiVGVtcGxhdGVDb21wb25lbnQiLCJTZWxlY3RDb21wb25lbnQiLCJwcm9wcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW5pdGlhbGl6ZUJ1aWxkZXIiLCJidWlsZGVyIiwiaW5zdGFuY2UiLCJkZXN0cm95Iiwib3B0aW9ucyIsImZvcm0iLCJGb3JtQnVpbGRlciIsImVsZW1lbnQiLCJjdXJyZW50IiwiYnVpbGRlclJlYWR5Iiwic2V0RGlzcGxheSIsImRpc3BsYXkiLCJ0aGVuIiwib24iLCJlbWl0Iiwib25DaGFuZ2UiLCJoYXNPd25Qcm9wZXJ0eSIsInNjaGVtYSIsImZ1bmNOYW1lIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhBQSxvQkFBV0MsYUFBWCxDQUF5QkMsbUJBQXpCOztBQU1BLElBQU1DLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxRQUFRLEVBQUUsQ0FERztBQUViQyxFQUFBQSxjQUFjLEVBQUUsd0JBQUNDLEtBQUQsRUFBZ0I7QUFDOUJBLElBQUFBLEtBQUssQ0FBQ0MsV0FBTixHQUFvQixTQUFwQjtBQUNBLFdBQU9ELEtBQVA7QUFDRDtBQUxZLENBQWY7QUFRQUUsTUFBTSxDQUFDQyxjQUFQLENBQXNCTixNQUF0QixFQUE4QixtQkFBOUI7QUFDQUssTUFBTSxDQUFDRSxpQkFBUCxDQUF5QixVQUF6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Q3ZGLGdDQUFLckIsS0FBTCxFQUFXcUIsUUFBWDtBQUNEO0FBQ0YsT0FKRDtBQUtELEtBL0NnQzs7QUFFL0IsVUFBS1gsT0FBTCxHQUFlWSxLQUFLLENBQUNDLFNBQU4sRUFBZjtBQUYrQjtBQUdoQzs7O0VBUDBCRCxLQUFLLENBQUNFLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWxsQ29tcG9uZW50cyBmcm9tICdmb3JtaW9qcy9jb21wb25lbnRzJztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvQ29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5Db21wb25lbnRzLnNldENvbXBvbmVudHMoQWxsQ29tcG9uZW50cyk7XG5pbXBvcnQgRm9ybUJ1aWxkZXIgZnJvbSAnZm9ybWlvanMvRm9ybUJ1aWxkZXInO1xuaW1wb3J0IFNlbGVjdENvbXBvbmVudCBmcm9tICcuL2N1c3RvbUNvbXBvbmVudHMvc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgVGVtcGxhdGVDb21wb25lbnQgZnJvbSAnLi9jdXN0b21Db21wb25lbnRzL3RlbXBsYXRlL3RlbXBsYXRlJztcbmRlY2xhcmUgY29uc3QgRm9ybWlvOiBhbnk7XG5cbmNvbnN0IHBsdWdpbiA9IHtcbiAgcHJpb3JpdHk6IDAsXG4gIHJlcXVlc3RPcHRpb25zOiAodmFsdWU6IGFueSkgPT4ge1xuICAgIHZhbHVlLmNyZWRlbnRpYWxzID0gJ2luY2x1ZGUnO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuRm9ybWlvLnJlZ2lzdGVyUGx1Z2luKHBsdWdpbiwgJ2VuYWJsZUNyZWRlbnRpYWxzJyk7XG5Gb3JtaW8ucmVnaXN0ZXJDb21wb25lbnQoJ3RlbXBsYXRlJywgVGVtcGxhdGVDb21wb25lbnQpO1xuRm9ybWlvLnJlZ2lzdGVyQ29tcG9uZW50KCdzZWxlY3QnLCBTZWxlY3RDb21wb25lbnQpO1xuaW50ZXJmYWNlIElGb3JtQnVpbGRlciB7XG4gIGZvcm06IHtcbiAgICBkaXNwbGF5OiBzdHJpbmcsXG4gICAgY29tcG9uZW50czogW11cbiAgfSxcbiAgb3B0aW9uczogb2JqZWN0LFxuICBvbkNoYW5nZTogKGRhdGE6IGFueSkgPT4gYW55LFxuICBvblNhdmVDb21wb25lbnQ6IChkYXRhOiBhbnkpID0+IGFueSxcbiAgb25VcGRhdGVDb21wb25lbnQ6IChkYXRhOiBhbnkpID0+IGFueSxcbiAgb25EZWxldGVDb21wb25lbnQ6IChkYXRhOiBhbnkpID0+IGFueSxcbiAgb25DYW5jZWxDb21wb25lbnQ6IChkYXRhOiBhbnkpID0+IGFueSxcbiAgb25FZGl0Q29tcG9uZW50OiAoZGF0YTogYW55KSA9PiBhbnksXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElGb3JtQnVpbGRlcj4ge1xuICBwdWJsaWMgYnVpbGRlcjogYW55O1xuICBwdWJsaWMgYnVpbGRlclJlYWR5OiBQcm9taXNlPGFueT4gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgcHVibGljIGVsZW1lbnQ6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRm9ybUJ1aWxkZXIpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5lbGVtZW50ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUJ1aWxkZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5idWlsZGVyKSB7XG4gICAgICB0aGlzLmJ1aWxkZXIuaW5zdGFuY2UuZGVzdHJveSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUJ1aWxkZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge29wdGlvbnMsIGZvcm19ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRm9ybUJ1aWxkZXIodGhpcy5lbGVtZW50LmN1cnJlbnQsIGZvcm0sIG9wdGlvbnMpO1xuICAgIHRoaXMuYnVpbGRlclJlYWR5ID0gdGhpcy5idWlsZGVyLnNldERpc3BsYXkoZm9ybS5kaXNwbGF5KTtcblxuICAgIHRoaXMuYnVpbGRlclJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5idWlsZGVyLmluc3RhbmNlLm9uKCdzYXZlQ29tcG9uZW50JywgdGhpcy5lbWl0KCdvblNhdmVDb21wb25lbnQnKSk7XG4gICAgICB0aGlzLmJ1aWxkZXIuaW5zdGFuY2Uub24oJ3VwZGF0ZUNvbXBvbmVudCcsIHRoaXMuZW1pdCgnb25VcGRhdGVDb21wb25lbnQnKSk7XG4gICAgICB0aGlzLmJ1aWxkZXIuaW5zdGFuY2Uub24oJ2RlbGV0ZUNvbXBvbmVudCcsIHRoaXMuZW1pdCgnb25EZWxldGVDb21wb25lbnQnKSk7XG4gICAgICB0aGlzLmJ1aWxkZXIuaW5zdGFuY2Uub24oJ2NhbmNlbENvbXBvbmVudCcsIHRoaXMuZW1pdCgnb25DYW5jZWxDb21wb25lbnQnKSk7XG4gICAgICB0aGlzLmJ1aWxkZXIuaW5zdGFuY2Uub24oJ2VkaXRDb21wb25lbnQnLCB0aGlzLmVtaXQoJ29uRWRpdENvbXBvbmVudCcpKTtcbiAgICAgIHRoaXMuYnVpbGRlci5pbnN0YW5jZS5vbignc2F2ZUNvbXBvbmVudCcsIHRoaXMub25DaGFuZ2UpO1xuICAgICAgdGhpcy5idWlsZGVyLmluc3RhbmNlLm9uKCd1cGRhdGVDb21wb25lbnQnLCB0aGlzLm9uQ2hhbmdlKTtcbiAgICAgIHRoaXMuYnVpbGRlci5pbnN0YW5jZS5vbignZGVsZXRlQ29tcG9uZW50JywgdGhpcy5vbkNoYW5nZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyID0gKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2IHJlZj17dGhpcy5lbGVtZW50fSAvPjtcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnb25DaGFuZ2UnKSAmJiB0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmJ1aWxkZXIuaW5zdGFuY2Uuc2NoZW1hKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW1pdCA9IChmdW5jTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuICguLi5hcmdzOiBbXSkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoZnVuY05hbWUpICYmIHR5cGVvZiAodGhpcy5wcm9wc1tmdW5jTmFtZV0pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHNbZnVuY05hbWVdKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==