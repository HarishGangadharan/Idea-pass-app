"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

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

var CreateTriggerComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CreateTriggerComponent, _React$PureComponent);

  function CreateTriggerComponent(props) {
    _classCallCheck(this, CreateTriggerComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreateTriggerComponent).call(this, props));
  }

  _createClass(CreateTriggerComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          trigger = _this$props.trigger,
          onTriggerChange = _this$props.onTriggerChange,
          formName = _this$props.formName;
      return React.createElement("div", {
        className: "shadow-container full-height"
      }, React.createElement("div", {
        className: "title"
      }, React.createElement("h4", null, "Create new trigger")), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "form"
      }, "Form"), React.createElement("input", {
        type: "text",
        name: "form",
        defaultValue: formName,
        className: "form-control",
        disabled: true
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "name"
      }, "Name"), React.createElement("input", {
        type: "text",
        name: "name",
        defaultValue: trigger.name,
        className: "form-control",
        required: true,
        onChange: function onChange(e) {
          return onTriggerChange(e, 'name');
        }
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "description"
      }, "Description"), React.createElement("textarea", {
        name: "description",
        defaultValue: trigger.description,
        className: "form-control",
        required: true,
        rows: 3,
        onChange: function onChange(e) {
          return onTriggerChange(e, 'description');
        }
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "checkbox",
        name: "is_active",
        defaultChecked: trigger.is_active,
        required: true,
        onChange: function onChange(e) {
          return onTriggerChange(e, 'is_active');
        }
      }), " Is Active"), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "sequence"
      }, "Sequence"), React.createElement("input", {
        type: "number",
        name: "sequence",
        defaultValue: trigger.sequence,
        className: "form-control",
        required: true,
        onChange: function onChange(e) {
          return onTriggerChange(e, 'sequence');
        }
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "checkbox",
        name: "is_async",
        defaultChecked: trigger.is_async,
        required: true,
        onChange: function onChange(e) {
          return onTriggerChange(e, 'is_async');
        }
      }), " Is Asynchronous"), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "isOnCreate"
      }, "Conditions: "), React.createElement("br", null), React.createElement("input", {
        type: "checkbox",
        name: "on_create",
        defaultChecked: trigger.on_create,
        required: true,
        onChange: function onChange(e) {
          return onTriggerChange(e, 'on_create');
        }
      }), " On Create", React.createElement("br", null), React.createElement("input", {
        type: "checkbox",
        name: "on_update",
        defaultChecked: trigger.on_update,
        required: true,
        onChange: function onChange(e) {
          return onTriggerChange(e, 'on_update');
        }
      }), " On Update"));
    }
  }]);

  return CreateTriggerComponent;
}(React.PureComponent);

var _default = CreateTriggerComponent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVRyaWdnZXJDb21wb25lbnQvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNyZWF0ZVRyaWdnZXJDb21wb25lbnQiLCJwcm9wcyIsInRyaWdnZXIiLCJvblRyaWdnZXJDaGFuZ2UiLCJmb3JtTmFtZSIsIm5hbWUiLCJlIiwiZGVzY3JpcHRpb24iLCJpc19hY3RpdmUiLCJzZXF1ZW5jZSIsImlzX2FzeW5jIiwib25fY3JlYXRlIiwib25fdXBkYXRlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTTUEsc0I7Ozs7O0FBQ0osa0NBQVlDLEtBQVosRUFBd0M7QUFBQTs7QUFBQSwrRkFDaENBLEtBRGdDO0FBRXZDOzs7OzZCQUVlO0FBQUEsd0JBQ2lDLEtBQUtBLEtBRHRDO0FBQUEsVUFDTkMsT0FETSxlQUNOQSxPQURNO0FBQUEsVUFDR0MsZUFESCxlQUNHQSxlQURIO0FBQUEsVUFDb0JDLFFBRHBCLGVBQ29CQSxRQURwQjtBQUVkLGFBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0UscURBREYsQ0FERixFQUlFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFO0FBQU8sUUFBQSxPQUFPLEVBQUM7QUFBZixnQkFERixFQUVFO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLElBQUksRUFBQyxNQUF4QjtBQUErQixRQUFBLFlBQVksRUFBRUEsUUFBN0M7QUFBdUQsUUFBQSxTQUFTLEVBQUMsY0FBakU7QUFBZ0YsUUFBQSxRQUFRLEVBQUU7QUFBMUYsUUFGRixDQUpGLEVBUUU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFBTyxRQUFBLE9BQU8sRUFBQztBQUFmLGdCQURGLEVBRUU7QUFBTyxRQUFBLElBQUksRUFBQyxNQUFaO0FBQW1C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QUFEO0FBQUEsaUJBQTRDSCxlQUFlLENBQUNHLENBQUQsRUFBSSxXQUFKLENBQTNEO0FBQUE7QUFEWixRQU5GLGVBL0JGLENBREY7QUEyQ0Q7Ozs7RUFsRGtDTyxLQUFLLENBQUNDLGE7O2VBcUQ1QmQsc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJVHJpZ2dlciB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2Zvcm1UcmlnZ2VyJztcblxuaW50ZXJmYWNlIElDcmVhdGVUcmlnZ2VyUHJvcHMge1xuICB0cmlnZ2VyOiBJVHJpZ2dlcjtcbiAgZm9ybU5hbWU6IHN0cmluZztcbiAgb25UcmlnZ2VyQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+LCBmaWVsZDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5jbGFzcyBDcmVhdGVUcmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJQ3JlYXRlVHJpZ2dlclByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJQ3JlYXRlVHJpZ2dlclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyaWdnZXIsIG9uVHJpZ2dlckNoYW5nZSwgZm9ybU5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNvbnRhaW5lciBmdWxsLWhlaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgPGg0PkNyZWF0ZSBuZXcgdHJpZ2dlcjwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvcm1cIj5Gb3JtPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZm9ybVwiIGRlZmF1bHRWYWx1ZT17Zm9ybU5hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGRpc2FibGVkPXt0cnVlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGRlZmF1bHRWYWx1ZT17dHJpZ2dlci5uYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IG9uVHJpZ2dlckNoYW5nZShlLCAnbmFtZScpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImRlc2NyaXB0aW9uXCIgZGVmYXVsdFZhbHVlPXt0cmlnZ2VyLmRlc2NyaXB0aW9ufSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgIHJvd3M9ezN9IG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IG9uVHJpZ2dlckNoYW5nZShlLCAnZGVzY3JpcHRpb24nKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaXNfYWN0aXZlXCIgZGVmYXVsdENoZWNrZWQ9e3RyaWdnZXIuaXNfYWN0aXZlfSByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IG9uVHJpZ2dlckNoYW5nZShlLCAnaXNfYWN0aXZlJyl9IC8+IElzIEFjdGl2ZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZXF1ZW5jZVwiPlNlcXVlbmNlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJzZXF1ZW5jZVwiIGRlZmF1bHRWYWx1ZT17dHJpZ2dlci5zZXF1ZW5jZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBvblRyaWdnZXJDaGFuZ2UoZSwgJ3NlcXVlbmNlJyl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImlzX2FzeW5jXCIgZGVmYXVsdENoZWNrZWQ9e3RyaWdnZXIuaXNfYXN5bmN9IHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gb25UcmlnZ2VyQ2hhbmdlKGUsICdpc19hc3luYycpfSAvPiBJcyBBc3luY2hyb25vdXNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaXNPbkNyZWF0ZVwiPkNvbmRpdGlvbnM6IDwvbGFiZWw+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJvbl9jcmVhdGVcIiBkZWZhdWx0Q2hlY2tlZD17dHJpZ2dlci5vbl9jcmVhdGV9IHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gb25UcmlnZ2VyQ2hhbmdlKGUsICdvbl9jcmVhdGUnKX0gLz4gT24gQ3JlYXRlXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJvbl91cGRhdGVcIiBkZWZhdWx0Q2hlY2tlZD17dHJpZ2dlci5vbl91cGRhdGV9IHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gb25UcmlnZ2VyQ2hhbmdlKGUsICdvbl91cGRhdGUnKX0gLz4gT24gVXBkYXRlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUcmlnZ2VyQ29tcG9uZW50O1xuIl19