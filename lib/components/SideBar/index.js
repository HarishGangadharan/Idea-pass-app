"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _abilityContext = require("../../ability-context");

var _index = require("../index");

require("./SideBar.css");

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

var SideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar(props) {
    _classCallCheck(this, SideBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideBar).call(this, props));
  }

  _createClass(SideBar, [{
    key: "render",
    value: function render() {
      var isExpanded = this.props.isExpanded;
      return React.createElement("div", {
        key: "sidebar",
        className: isExpanded ? 'sidebar expand' : 'sidebar'
      }, React.createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: "/",
        activeClassName: "active",
        className: "nav-link"
      }, React.createElement(_index.BaseIcon, {
        name: "Home",
        label: "navbar.home"
      })), React.createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: "/formschemalist",
        activeClassName: "active",
        className: "nav-link"
      }, React.createElement(_index.BaseIcon, {
        name: "Layers",
        label: "navbar.schemas"
      })), React.createElement(_abilityContext.Can, {
        I: "read",
        a: "admin"
      }, React.createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: "/rolespermissions",
        activeClassName: "active",
        className: "nav-link"
      }, React.createElement(_index.BaseIcon, {
        name: "User",
        label: "navbar.permissions"
      }))), React.createElement(_abilityContext.Can, {
        I: "read",
        a: "appforms"
      }, React.createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: "/appforms/organization",
        activeClassName: "active",
        className: "nav-link"
      }, React.createElement(_index.BaseIcon, {
        name: "Globe",
        label: "navbar.organization"
      }))), React.createElement(_abilityContext.Can, {
        I: "read",
        a: "users"
      }, React.createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: "/users",
        activeClassName: "active",
        className: "nav-link"
      }, React.createElement(_index.BaseIcon, {
        name: "Users",
        label: "navbar.users"
      }))), React.createElement(_abilityContext.Can, {
        I: "read",
        a: "appforms"
      }, React.createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: "/appforms/role",
        activeClassName: "active",
        className: "nav-link"
      }, React.createElement(_index.BaseIcon, {
        name: "Award",
        label: "navbar.role"
      }))), React.createElement(_abilityContext.Can, {
        I: "read",
        a: "appforms"
      }, React.createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: "/graphiQlList",
        activeClassName: "active",
        className: "nav-link"
      }, React.createElement(_index.BaseIcon, {
        name: "HardDrive",
        label: "navbar.graphiQl"
      }))), React.createElement(_abilityContext.Can, {
        I: "read",
        a: "appforms"
      }, React.createElement(_reactRouterDom.NavLink, {
        exact: true,
        to: "/emailTemplateList",
        activeClassName: "active",
        className: "nav-link"
      }, React.createElement(_index.BaseIcon, {
        name: "Mail",
        label: "navbar.emailTemplate"
      }))), React.createElement("div", {
        className: "indicator",
        onClick: this.props.expandSideBar
      }, React.createElement("div", {
        className: "indicator-bar"
      }, "\xA0"), React.createElement(_index.BaseIcon, {
        name: isExpanded ? 'ChevronLeft' : 'ChevronRight',
        size: 20,
        label: ""
      })));
    }
  }]);

  return SideBar;
}(React.Component);

var _default = SideBar;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpZGVCYXIiLCJwcm9wcyIsImlzRXhwYW5kZWQiLCJleHBhbmRTaWRlQmFyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9NQSxPOzs7OztBQUNKLG1CQUFZQyxLQUFaLEVBQWtDO0FBQUE7O0FBQUEsZ0ZBQzFCQSxLQUQwQjtBQUVqQzs7Ozs2QkFFZTtBQUFBLFVBQ05DLFVBRE0sR0FDUyxLQUFLRCxLQURkLENBQ05DLFVBRE07QUFFZCxhQUNFO0FBQUssUUFBQSxHQUFHLEVBQUMsU0FBVDtBQUFtQixRQUFBLFNBQVMsRUFBRUEsVUFBVSxHQUFHLGdCQUFILEdBQXNCO0FBQTlELFNBQ0Usb0JBQUMsdUJBQUQ7QUFDRSxRQUFBLEtBQUssRUFBRSxJQURUO0FBRUUsUUFBQSxFQUFFLEVBQUMsR0FGTDtBQUdFLFFBQUEsZUFBZSxFQUFDLFFBSGxCO0FBSUUsUUFBQSxTQUFTLEVBQUM7QUFKWixTQUtFLG9CQUFDLGVBQUQ7QUFBVSxRQUFBLElBQUksRUFBQyxNQUFmO0FBQXNCLFFBQUEsS0FBSyxFQUFDO0FBQTVCLFFBTEYsQ0FERixFQVFFLG9CQUFDLHVCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUUsSUFEVDtBQUVFLFFBQUEsRUFBRSxFQUFDLGlCQUZMO0FBR0UsUUFBQSxlQUFlLEVBQUMsUUFIbEI7QUFJRSxRQUFBLFNBQVMsRUFBQztBQUpaLFNBS0Usb0JBQUMsZUFBRDtBQUFVLFFBQUEsSUFBSSxFQUFDLFFBQWY7QUFBd0IsUUFBQSxLQUFLLEVBQUM7QUFBOUIsUUFMRixDQVJGLEVBZUUsb0JBQUMsbUJBQUQ7QUFBSyxRQUFBLENBQUMsRUFBQyxNQUFQO0FBQWMsUUFBQSxDQUFDLEVBQUM7QUFBaEIsU0FDRSxvQkFBQyx1QkFBRDtBQUNF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LEtBQUssQ0FBQ0MsUzs7ZUFzRmJMLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBDYW4gfSBmcm9tICcuLi8uLi9hYmlsaXR5LWNvbnRleHQnO1xuaW1wb3J0IHsgQmFzZUljb24gfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgJy4vU2lkZUJhci5jc3MnO1xuXG5pbnRlcmZhY2UgSVNpZGVCYXJQcm9wcyB7XG4gIGlzRXhwYW5kZWQ6IGJvb2xlYW47XG4gIGV4cGFuZFNpZGVCYXI6IGFueTtcbn1cblxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJU2lkZUJhclByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJU2lkZUJhclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzRXhwYW5kZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PVwic2lkZWJhclwiIGNsYXNzTmFtZT17aXNFeHBhbmRlZCA/ICdzaWRlYmFyIGV4cGFuZCcgOiAnc2lkZWJhcid9PlxuICAgICAgICA8TmF2TGlua1xuICAgICAgICAgIGV4YWN0PXt0cnVlfVxuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgIDxCYXNlSWNvbiBuYW1lPVwiSG9tZVwiIGxhYmVsPVwibmF2YmFyLmhvbWVcIiAvPlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgZXhhY3Q9e3RydWV9XG4gICAgICAgICAgdG89XCIvZm9ybXNjaGVtYWxpc3RcIlxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICA8QmFzZUljb24gbmFtZT1cIkxheWVyc1wiIGxhYmVsPVwibmF2YmFyLnNjaGVtYXNcIiAvPlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDxDYW4gST1cInJlYWRcIiBhPVwiYWRtaW5cIj5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgZXhhY3Q9e3RydWV9XG4gICAgICAgICAgICB0bz1cIi9yb2xlc3Blcm1pc3Npb25zXCJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgPEJhc2VJY29uIG5hbWU9XCJVc2VyXCIgbGFiZWw9XCJuYXZiYXIucGVybWlzc2lvbnNcIiAvPlxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvQ2FuPlxuICAgICAgICA8Q2FuIEk9XCJyZWFkXCIgYT1cImFwcGZvcm1zXCI+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGV4YWN0PXt0cnVlfVxuICAgICAgICAgICAgdG89XCIvYXBwZm9ybXMvb3JnYW5pemF0aW9uXCJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgPEJhc2VJY29uIG5hbWU9XCJHbG9iZVwiIGxhYmVsPVwibmF2YmFyLm9yZ2FuaXphdGlvblwiIC8+XG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9DYW4+XG4gICAgICAgIDxDYW4gST1cInJlYWRcIiBhPVwidXNlcnNcIj5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgZXhhY3Q9e3RydWV9XG4gICAgICAgICAgICB0bz1cIi91c2Vyc1wiXG4gICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICA8QmFzZUljb24gbmFtZT1cIlVzZXJzXCIgbGFiZWw9XCJuYXZiYXIudXNlcnNcIiAvPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9DYW4+XG4gICAgICAgIDxDYW4gST1cInJlYWRcIiBhPVwiYXBwZm9ybXNcIj5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgZXhhY3Q9e3RydWV9XG4gICAgICAgICAgICB0bz1cIi9hcHBmb3Jtcy9yb2xlXCJcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgPEJhc2VJY29uIG5hbWU9XCJBd2FyZFwiIGxhYmVsPVwibmF2YmFyLnJvbGVcIiAvPlxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC9DYW4+XG4gICAgICAgIDxDYW4gST1cInJlYWRcIiBhPVwiYXBwZm9ybXNcIj5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgZXhhY3Q9e3RydWV9XG4gICAgICAgICAgICB0bz1cIi9ncmFwaGlRbExpc3RcIlxuICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICA8QmFzZUljb24gbmFtZT1cIkhhcmREcml2ZVwiIGxhYmVsPVwibmF2YmFyLmdyYXBoaVFsXCIgLz5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvQ2FuPlxuICAgICAgICA8Q2FuIEk9XCJyZWFkXCIgYT1cImFwcGZvcm1zXCI+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGV4YWN0PXt0cnVlfVxuICAgICAgICAgICAgdG89XCIvZW1haWxUZW1wbGF0ZUxpc3RcIlxuICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICA8QmFzZUljb24gbmFtZT1cIk1haWxcIiBsYWJlbD1cIm5hdmJhci5lbWFpbFRlbXBsYXRlXCIgLz5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvQ2FuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGljYXRvclwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZXhwYW5kU2lkZUJhcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3ItYmFyXCI+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgPEJhc2VJY29uIG5hbWU9e2lzRXhwYW5kZWQgPyAnQ2hldnJvbkxlZnQnIDogJ0NoZXZyb25SaWdodCd9IHNpemU9ezIwfSBsYWJlbD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyO1xuIl19