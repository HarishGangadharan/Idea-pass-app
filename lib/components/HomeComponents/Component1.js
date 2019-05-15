"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _layer = _interopRequireDefault(require("./layer1.png"));

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

var Component1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Component1, _React$Component);

  function Component1(props) {
    var _this;

    _classCallCheck(this, Component1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Component1).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Component1, [{
    key: "render",
    value: function render() {
      // You can render any custom fallback UI
      return React.createElement("div", {
        className: "shadow-container"
      }, React.createElement("div", {
        className: "row pt-3"
      }, React.createElement("div", {
        className: "col-md-4 text-center"
      }, React.createElement("img", {
        src: _layer.default
      })), React.createElement("div", {
        className: "col-md-8"
      }, React.createElement("h3", {
        className: "m-0 pb-3"
      }, "Anniversary celebration 2018"), React.createElement("p", null, "Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys holding a dancing-ape by a long cord"))), React.createElement("div", {
        className: "footer"
      }, React.createElement("div", {
        className: "row icon-list"
      }, React.createElement("div", {
        className: "col-md-6 icon"
      }, React.createElement(_index.BaseIcon, {
        name: "Clock",
        label: "23 October 2018, 10:00AM"
      })), React.createElement("div", {
        className: "col-md-6 text-right d-flex align-items-center"
      }, React.createElement("span", {
        className: "icon"
      }, React.createElement(_index.BaseIcon, {
        name: "Share2",
        display: "inline",
        label: "Share",
        classname: "d-flex align-items-center"
      })), React.createElement("span", {
        className: "icon"
      }, React.createElement(_index.BaseIcon, {
        name: "Pocket",
        display: "inline",
        label: "Saved",
        classname: "d-flex align-items-center"
      })), React.createElement("span", {
        className: "icon"
      }, React.createElement(_index.BaseIcon, {
        name: "MoreHorizontal",
        display: "inline",
        label: "More",
        classname: "d-flex align-items-center"
      }))))));
    }
  }]);

  return Component1;
}(React.Component);

var _default = Component1;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvbWVDb21wb25lbnRzL0NvbXBvbmVudDEudHN4Il0sIm5hbWVzIjpbIkNvbXBvbmVudDEiLCJwcm9wcyIsInN0YXRlIiwiaW1nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7O0FBQ0osc0JBQVlDLEtBQVosRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEIsb0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZzQjtBQUd2Qjs7Ozs2QkFFZTtBQUNkO0FBQ0EsYUFDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFFBQUEsR0FBRyxFQUFFQztBQUFWLFFBREYsQ0FERixFQUlFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFO0FBQUksUUFBQSxTQUFTLEVBQUM7QUFBZCx3Q0FERixFQUVFLHlVQUZGLENBSkYsQ0FERixFQWlCRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRSxvQkFBQyxlQUFEO0FBQVUsUUFBQSxJQUFJLEVBQUMsT0FBZjtBQUF1QixRQUFBLEtBQUssRUFBQztBQUE3QixRQURGLENBREYsRUFJRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRTtBQUFNLFFBQUEsU0FBUyxFQUFDO0FBQWhCLFNBQ0Usb0JBQUMsZUFBRDtBQUFVLFFBQUEsSUFBSSxFQUFDLFFBQWY7QUFBd0IsUUFBQSxPQUFPLEVBQUMsUUFBaEM7QUFBeUMsUUFBQSxLQUFLLEVBQUMsT0FBL0M7QUFBdUQsUUFBQSxTQUFTLEVBQUM7QUFBakUsUUFERixDQURGLEVBSUU7QUFBTSxRQUFBLFNBQVMsRUFBQztBQUFoQixTQUNFLG9CQUFDLGVBQUQ7QUFBVSxRQUFBLElBQUksRUFBQyxRQUFmO0FBQXdCLFFBQUEsT0FBTyxFQUFDLFFBQWhDO0FBQXlDLFFBQUEsS0FBSyxFQUFDLE9BQS9DO0FBQXVELFFBQUEsU0FBUyxFQUFDO0FBQWpFLFFBREYsQ0FKRixFQU9FO0FBQU0sUUFBQSxTQUFTLEVBQUM7QUFBaEIsU0FDRSxvQkFBQyxlQUFEO0FBQVUsUUFBQSxJQUFJLEVBQUMsZ0JBQWY7QUFBZ0MsUUFBQSxPQUFPLEVBQUMsUUFBeEM7QUFBaUQsUUFBQSxLQUFLLEVBQUMsTUFBdkQ7QUFBOEQsUUFBQSxTQUFTLEVBQUM7QUFBeEUsUUFERixDQVBGLENBSkYsQ0FERixDQWpCRixDQURGO0FBc0NEOzs7O0VBOUNzQkMsS0FBSyxDQUFDQyxTOztlQWlEaEJMLFUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYXNlSWNvbiB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCBpbWcgZnJvbSAnLi9sYXllcjEucG5nJztcblxuY2xhc3MgQ29tcG9uZW50MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgYW55PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICAvLyBZb3UgY2FuIHJlbmRlciBhbnkgY3VzdG9tIGZhbGxiYWNrIFVJXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwdC0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibS0wIHBiLTNcIj5Bbm5pdmVyc2FyeSBjZWxlYnJhdGlvbiAyMDE4PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBCZWluZyB0aGUgc2F2YWdlJ3MgYm93c21hbiwgdGhhdCBpcywgdGhlIHBlcnNvbiB3aG8gcHVsbGVkIHRoZVxuICAgICAgICAgICAgICBib3ctb2FyIGluIGhpcyBib2F0ICh0aGUgc2Vjb25kIG9uZSBmcm9tIGZvcndhcmQpLFxuICAgICAgICAgICAgICBpdCB3YXMgbXkgY2hlZXJmdWwgZHV0eSB0byBhdHRlbmQgdXBvbiBoaW0gd2hpbGUgdGFraW5nIHRoYXRcbiAgICAgICAgICAgICAgaGFyZC1zY3JhYmJsZSBzY3JhbWJsZSB1cG9uIHRoZSBkZWFkIHdoYWxlJ3MgYmFjay5cbiAgICAgICAgICAgICAgWW91IGhhdmUgc2VlbiBJdGFsaWFuIG9yZ2FuLWJveXMgaG9sZGluZyBhXG4gICAgICAgICAgICAgIGRhbmNpbmctYXBlIGJ5IGEgbG9uZyBjb3JkXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGljb24tbGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBpY29uXCI+XG4gICAgICAgICAgICAgIDxCYXNlSWNvbiBuYW1lPVwiQ2xvY2tcIiBsYWJlbD1cIjIzIE9jdG9iZXIgMjAxOCwgMTA6MDBBTVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiB0ZXh0LXJpZ2h0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgIDxCYXNlSWNvbiBuYW1lPVwiU2hhcmUyXCIgZGlzcGxheT1cImlubGluZVwiIGxhYmVsPVwiU2hhcmVcIiBjbGFzc25hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgPEJhc2VJY29uIG5hbWU9XCJQb2NrZXRcIiBkaXNwbGF5PVwiaW5saW5lXCIgbGFiZWw9XCJTYXZlZFwiIGNsYXNzbmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIiAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICA8QmFzZUljb24gbmFtZT1cIk1vcmVIb3Jpem9udGFsXCIgZGlzcGxheT1cImlubGluZVwiIGxhYmVsPVwiTW9yZVwiIGNsYXNzbmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIi8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50MTtcbiJdfQ==