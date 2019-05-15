"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CButton = function CButton(props) {
  return React.createElement("button", {
    id: props.id,
    className: props.className,
    disabled: props.disabled,
    onClick: props.onClick,
    "aria-label": props.aria_label,
    type: props.type
  }, props.name);
};

var _default = CButton;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uLnRzeCJdLCJuYW1lcyI6WyJDQnV0dG9uIiwicHJvcHMiLCJpZCIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwib25DbGljayIsImFyaWFfbGFiZWwiLCJ0eXBlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBV0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUF3QjtBQUNwQyxTQUNJO0FBQ0UsSUFBQSxFQUFFLEVBQUVBLEtBQUssQ0FBQ0MsRUFEWjtBQUVFLElBQUEsU0FBUyxFQUFFRCxLQUFLLENBQUNFLFNBRm5CO0FBR0UsSUFBQSxRQUFRLEVBQUVGLEtBQUssQ0FBQ0csUUFIbEI7QUFJRSxJQUFBLE9BQU8sRUFBRUgsS0FBSyxDQUFDSSxPQUpqQjtBQUtFLGtCQUFZSixLQUFLLENBQUNLLFVBTHBCO0FBTUUsSUFBQSxJQUFJLEVBQUVMLEtBQUssQ0FBQ007QUFOZCxLQVFHTixLQUFLLENBQUNPLElBUlQsQ0FESjtBQVlELENBYkg7O2VBZWVSLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBDQnV0dG9uUHJvcHMge1xuICBpZD86IHN0cmluZyxcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gIGRpc2FibGVkPzogYW55LFxuICBvbkNsaWNrPzogYW55LFxuICBhcmlhX2xhYmVsPzogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHR5cGU/OiBzdHJpbmdcbn1cbmNvbnN0IENCdXR0b24gPSAocHJvcHM6Q0J1dHRvblByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICBhcmlhLWxhYmVsPXtwcm9wcy5hcmlhX2xhYmVsfVxuICAgICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMubmFtZX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBDQnV0dG9uO1xuIl19