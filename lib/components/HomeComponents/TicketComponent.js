"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _boy = _interopRequireDefault(require("../../assets/img/boy.svg"));

var _girl = _interopRequireDefault(require("../../assets/img/girl.svg"));

require("./index.css");

var _CButton = _interopRequireDefault(require("../Button/CButton"));

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

var Ticket =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Ticket, _React$Component);

  function Ticket(props) {
    var _this;

    _classCallCheck(this, Ticket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ticket).call(this, props));
    _this.state = {
      tickets: [{
        message: 'Reviewing PR, added charts',
        time: '2hrs ago',
        user: {
          gender: 'male',
          name: 'Rajesh PR'
        }
      }, {
        message: 'Commited Role based authentication',
        time: '4hrs ago',
        user: {
          gender: 'male',
          name: 'Srikanth'
        }
      }, {
        message: 'Dynamic Table component support needed from backend',
        time: '6hrs ago',
        user: {
          gender: 'female',
          name: 'Sankari'
        }
      }, {
        message: 'Table row expand added',
        time: '8hrs ago',
        user: {
          gender: 'male',
          name: 'Mukundhan'
        }
      }]
    };
    return _this;
  }

  _createClass(Ticket, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "shadow-container ticket-wrapper"
      }, React.createElement("div", {
        className: "ticket-wrapper-header"
      }, React.createElement("div", null, React.createElement("h4", null, "Ticket Header"), React.createElement("span", null, "27 unresolved isssues")), React.createElement("div", null, React.createElement(_CButton.default, {
        className: "btn btn-md btn-primary",
        name: "See All"
      }))), React.createElement("div", {
        className: "row ticket-content"
      }, React.createElement("ul", {
        className: "tickets w-100"
      }, this.state.tickets.map(function (ticket, index) {
        return React.createElement("li", {
          className: "ticket row",
          key: index
        }, React.createElement("div", {
          className: "col-lg-3 col-sm-3 col-md-3"
        }, React.createElement("img", {
          src: ticket.user.gender === 'male' ? _boy.default : _girl.default
        })), React.createElement("div", {
          className: "col-lg-9 col-sm-9 col-md-9"
        }, React.createElement("div", {
          className: "ticket-header"
        }, React.createElement("span", {
          className: "user-name"
        }, ticket.user.name), React.createElement("span", {
          className: "time"
        }, " ", ticket.time)), React.createElement("p", null, ticket.message)));
      }))));
    }
  }]);

  return Ticket;
}(React.Component);

var _default = Ticket;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hvbWVDb21wb25lbnRzL1RpY2tldENvbXBvbmVudC50c3giXSwibmFtZXMiOlsiVGlja2V0IiwicHJvcHMiLCJzdGF0ZSIsInRpY2tldHMiLCJtZXNzYWdlIiwidGltZSIsInVzZXIiLCJnZW5kZXIiLCJuYW1lIiwibWFwIiwidGlja2V0IiwiaW5kZXgiLCJib3kiLCJnaXJsIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBd0I7QUFBQTs7QUFBQTs7QUFDdEIsZ0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFDRUMsUUFBQUEsT0FBTyxFQUFFLDRCQURYO0FBRUVDLFFBQUFBLElBQUksRUFBRSxVQUZSO0FBR0VDLFFBQUFBLElBQUksRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUUsTUFESjtBQUVKQyxVQUFBQSxJQUFJLEVBQUU7QUFGRjtBQUhSLE9BRE8sRUFTUDtBQUNFSixRQUFBQSxPQUFPLEVBQUUsb0NBRFg7QUFFRUMsUUFBQUEsSUFBSSxFQUFFLFVBRlI7QUFHRUMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLE1BQU0sRUFBRSxNQURKO0FBRUpDLFVBQUFBLElBQUksRUFBRTtBQUZGO0FBSFIsT0FUTyxFQWlCUDtBQUNFSixRQUFBQSxPQUFPLEVBQUUscURBRFg7QUFFRUMsUUFBQUEsSUFBSSxFQUFFLFVBRlI7QUFHRUMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLE1BQU0sRUFBRSxRQURKO0FBRUpDLFVBQUFBLElBQUksRUFBRTtBQUZGO0FBSFIsT0FqQk8sRUF5QlA7QUFDRUosUUFBQUEsT0FBTyxFQUFFLHdCQURYO0FBRUVDLFFBQUFBLElBQUksRUFBRSxVQUZSO0FBR0VDLFFBQUFBLElBQUksRUFBRTtBQUNKQyxVQUFBQSxNQUFNLEVBQUUsTUFESjtBQUVKQyxVQUFBQSxJQUFJLEVBQUU7QUFGRjtBQUhSLE9BekJPO0FBREUsS0FBYjtBQUZzQjtBQXNDdkI7Ozs7NkJBRWU7QUFDZCxhQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLGlDQUNFLGdEQURGLEVBRUUsMERBRkYsQ0FERixFQUtFLGlDQUNFLG9CQUFDLGdCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUMsd0JBRFo7QUFFRSxRQUFBLElBQUksRUFBQztBQUZQLFFBREYsQ0FMRixDQURGLEVBYUU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxRQUFBLFNBQVMsRUFBQztBQUFkLFNBQ0csS0FBS04sS0FBTCxDQUFXQyxPQUFYLENBQW1CTSxHQUFuQixDQUF1QixVQUFDQyxNQUFELEVBQWNDLEtBQWQ7QUFBQSxlQUN0QjtBQUFJLFVBQUEsU0FBUyxFQUFDLFlBQWQ7QUFBMkIsVUFBQSxHQUFHLEVBQUVBO0FBQWhDLFdBQ0U7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLFdBQ0U7QUFBSyxVQUFBLEdBQUcsRUFBRUQsTUFBTSxDQUFDSixJQUFQLENBQVlDLE1BQVosS0FBdUIsTUFBdkIsR0FBZ0NLLFlBQWhDLEdBQXNDQztBQUFoRCxVQURGLENBREYsRUFJRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDRTtBQUFNLFVBQUEsU0FBUyxFQUFDO0FBQWhCLFdBQTZCSCxNQUFNLENBQUNKLElBQVAsQ0FBWUUsSUFBekMsQ0FERixFQUVFO0FBQU0sVUFBQSxTQUFTLEVBQUM7QUFBaEIsZ0JBQXlCRSxNQUFNLENBQUNMLElBQWhDLENBRkYsQ0FERixFQUtFLCtCQUFJSyxNQUFNLENBQUNOLE9BQVgsQ0FMRixDQUpGLENBRHNCO0FBQUEsT0FBdkIsQ0FESCxDQURGLENBYkYsQ0FERjtBQWtDRDs7OztFQTVFa0JVLEtBQUssQ0FBQ0MsUzs7ZUErRVpmLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYm95IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWcvYm95LnN2Zyc7XG5pbXBvcnQgZ2lybCBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2dpcmwuc3ZnJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IENCdXR0b24gZnJvbSAnLi4vQnV0dG9uL0NCdXR0b24nO1xuXG5jbGFzcyBUaWNrZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIGFueT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aWNrZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiAnUmV2aWV3aW5nIFBSLCBhZGRlZCBjaGFydHMnLFxuICAgICAgICAgIHRpbWU6ICcyaHJzIGFnbycsXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgICAgICAgICBuYW1lOiAnUmFqZXNoIFBSJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdDb21taXRlZCBSb2xlIGJhc2VkIGF1dGhlbnRpY2F0aW9uJyxcbiAgICAgICAgICB0aW1lOiAnNGhycyBhZ28nLFxuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgICAgICAgICAgbmFtZTogJ1NyaWthbnRoJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdEeW5hbWljIFRhYmxlIGNvbXBvbmVudCBzdXBwb3J0IG5lZWRlZCBmcm9tIGJhY2tlbmQnLFxuICAgICAgICAgIHRpbWU6ICc2aHJzIGFnbycsXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgZ2VuZGVyOiAnZmVtYWxlJyxcbiAgICAgICAgICAgIG5hbWU6ICdTYW5rYXJpJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1lc3NhZ2U6ICdUYWJsZSByb3cgZXhwYW5kIGFkZGVkJyxcbiAgICAgICAgICB0aW1lOiAnOGhycyBhZ28nLFxuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIGdlbmRlcjogJ21hbGUnLFxuICAgICAgICAgICAgbmFtZTogJ011a3VuZGhhbidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY29udGFpbmVyIHRpY2tldC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0LXdyYXBwZXItaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5UaWNrZXQgSGVhZGVyPC9oND5cbiAgICAgICAgICAgIDxzcGFuPjI3IHVucmVzb2x2ZWQgaXNzc3Vlczwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tZCBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJTZWUgQWxsXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0aWNrZXQtY29udGVudFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0aWNrZXRzIHctMTAwXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50aWNrZXRzLm1hcCgodGlja2V0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpY2tldCByb3dcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS0zIGNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGlja2V0LnVzZXIuZ2VuZGVyID09PSAnbWFsZScgPyBib3kgOiBnaXJsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTkgY29sLXNtLTkgY29sLW1kLTlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj57dGlja2V0LnVzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj4ge3RpY2tldC50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+e3RpY2tldC5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaWNrZXQ7XG4iXX0=