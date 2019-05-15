"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("formiojs/dist/formio.full.min.css");

var React = _interopRequireWildcard(require("react"));

var _FormBuilderWrapper = _interopRequireDefault(require("./FormBuilderWrapper"));

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

var Builder =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Builder, _React$Component);

  function Builder(props) {
    _classCallCheck(this, Builder);

    return _possibleConstructorReturn(this, _getPrototypeOf(Builder).call(this, props));
  }

  _createClass(Builder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          renderSchema = _this$props.renderSchema,
          renderComponent = _this$props.renderComponent,
          builderOptions = _this$props.builderOptions,
          formBuilderSchema = _this$props.formBuilderSchema;
      return React.createElement("div", null, React.createElement(_FormBuilderWrapper.default, {
        form: formBuilderSchema,
        options: builderOptions,
        onChange: function onChange(schema) {
          return renderSchema(schema);
        },
        onSaveComponent: function onSaveComponent(component) {
          return renderComponent(component, 'save');
        },
        onUpdateComponent: function onUpdateComponent(component) {
          return renderComponent(component, 'update');
        },
        onEditComponent: function onEditComponent(component) {
          return renderComponent(component, 'edit');
        },
        onCancelComponent: function onCancelComponent(component) {
          return renderComponent(component, 'cancel');
        },
        onDeleteComponent: function onDeleteComponent(component) {
          return renderComponent(component, 'delete');
        }
      }));
    }
  }]);

  return Builder;
}(React.Component);

var _default = Builder;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm1CdWlsZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJCdWlsZGVyIiwicHJvcHMiLCJyZW5kZXJTY2hlbWEiLCJyZW5kZXJDb21wb25lbnQiLCJidWlsZGVyT3B0aW9ucyIsImZvcm1CdWlsZGVyU2NoZW1hIiwic2NoZW1hIiwiY29tcG9uZW50IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU01BLE87Ozs7O0FBQ0osbUJBQVlDLEtBQVosRUFBa0M7QUFBQTs7QUFBQSxnRkFDMUJBLEtBRDBCO0FBRWpDOzs7OzZCQUVlO0FBQUEsd0JBQytELEtBQUtBLEtBRHBFO0FBQUEsVUFDTkMsWUFETSxlQUNOQSxZQURNO0FBQUEsVUFDUUMsZUFEUixlQUNRQSxlQURSO0FBQUEsVUFDeUJDLGNBRHpCLGVBQ3lCQSxjQUR6QjtBQUFBLFVBQ3lDQyxpQkFEekMsZUFDeUNBLGlCQUR6QztBQUVkLGFBQ0UsaUNBQ0Usb0JBQUMsMkJBQUQ7QUFBYSxRQUFBLElBQUksRUFBRUEsaUJBQW5CO0FBQXNDLFFBQUEsT0FBTyxFQUFFRCxjQUEvQztBQUNFLFFBQUEsUUFBUSxFQUFFLGtCQUFDRSxNQUFEO0FBQUEsaUJBQWlCSixZQUFZLENBQUNJLE1BQUQsQ0FBN0I7QUFBQSxTQURaO0FBRUUsUUFBQSxlQUFlLEVBQUUseUJBQUNDLFNBQUQ7QUFBQSxpQkFBb0JKLGVBQWUsQ0FBQ0ksU0FBRCxFQUFZLE1BQVosQ0FBbkM7QUFBQSxTQUZuQjtBQUdFLFFBQUEsaUJBQWlCLEVBQUUsMkJBQUNBLFNBQUQ7QUFBQSxpQkFBb0JKLGVBQWUsQ0FBQ0ksU0FBRCxFQUFZLFFBQVosQ0FBbkM7QUFBQSxTQUhyQjtBQUlFLFFBQUEsZUFBZSxFQUFFLHlCQUFDQSxTQUFEO0FBQUEsaUJBQW9CSixlQUFlLENBQUNJLFNBQUQsRUFBWSxNQUFaLENBQW5DO0FBQUEsU0FKbkI7QUFLRSxRQUFBLGlCQUFpQixFQUFFLDJCQUFDQSxTQUFEO0FBQUEsaUJBQW9CSixlQUFlLENBQUNJLFNBQUQsRUFBWSxRQUFaLENBQW5DO0FBQUEsU0FMckI7QUFNRSxRQUFBLGlCQUFpQixFQUFFLDJCQUFDQSxTQUFEO0FBQUEsaUJBQW9CSixlQUFlLENBQUNJLFNBQUQsRUFBWSxRQUFaLENBQW5DO0FBQUE7QUFOckIsUUFERixDQURGO0FBV0Q7Ozs7RUFsQm1CQyxLQUFLLENBQUNDLFM7O2VBcUJiVCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmb3JtaW9qcy9kaXN0L2Zvcm1pby5mdWxsLm1pbi5jc3MnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1CdWlsZGVyIGZyb20gJy4vRm9ybUJ1aWxkZXJXcmFwcGVyJztcblxuaW50ZXJmYWNlIElCdWlsZGVyUHJvcHMge1xuICBmb3JtQnVpbGRlclNjaGVtYTogYW55LFxuICBidWlsZGVyT3B0aW9ucz86IGFueSxcbiAgcmVuZGVyU2NoZW1hKHNjaGVtYTogYW55KTogdm9pZCxcbiAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudDogYW55LCByZW5kZXJNZXRob2Q6IHN0cmluZyk6IHZvaWQsXG59XG5cbmNsYXNzIEJ1aWxkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUJ1aWxkZXJQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSUJ1aWxkZXJQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZW5kZXJTY2hlbWEsIHJlbmRlckNvbXBvbmVudCwgYnVpbGRlck9wdGlvbnMsIGZvcm1CdWlsZGVyU2NoZW1hIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybUJ1aWxkZXIgZm9ybT17Zm9ybUJ1aWxkZXJTY2hlbWF9IG9wdGlvbnM9e2J1aWxkZXJPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2NoZW1hOiBhbnkpID0+IHJlbmRlclNjaGVtYShzY2hlbWEpfVxuICAgICAgICAgIG9uU2F2ZUNvbXBvbmVudD17KGNvbXBvbmVudDogYW55KSA9PiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCAnc2F2ZScpfVxuICAgICAgICAgIG9uVXBkYXRlQ29tcG9uZW50PXsoY29tcG9uZW50OiBhbnkpID0+IHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsICd1cGRhdGUnKX1cbiAgICAgICAgICBvbkVkaXRDb21wb25lbnQ9eyhjb21wb25lbnQ6IGFueSkgPT4gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgJ2VkaXQnKX1cbiAgICAgICAgICBvbkNhbmNlbENvbXBvbmVudD17KGNvbXBvbmVudDogYW55KSA9PiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCAnY2FuY2VsJyl9XG4gICAgICAgICAgb25EZWxldGVDb21wb25lbnQ9eyhjb21wb25lbnQ6IGFueSkgPT4gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgJ2RlbGV0ZScpfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWlsZGVyO1xuIl19