"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactLocalizeRedux = require("react-localize-redux");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _redux = require("redux");

var _logo = _interopRequireDefault(require("../../../src/logo.svg"));

var _theme = require("../../actions/theme");

var _user = require("../../actions/user");

var _application = require("../../constants/application.properties");

var _themes = require("../../themes");

var _storage = _interopRequireDefault(require("../../utils/storage"));

require("./NavBar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  _createClass(NavBar, null, [{
    key: "loadStyleSheet",
    // Todo: Dynamic theme injection
    value: function loadStyleSheet(theme) {// const styleSheets = document.querySelectorAll('link[rel=stylesheet]');
      // styleSheets.forEach((styleSheet: any) => {
      //   if (styleSheet.parentNode && styleSheet.sheet && styleSheet.sheet.href && !styleSheet.sheet.href.includes('chunk')) {
      //     styleSheet.parentNode.removeChild(styleSheet);
      //   }
      // });
      // const sheet = document.createElement('link');
      // sheet.rel = 'stylesheet';
      // sheet.href = `./static/css/${theme}/theme.min.css`;
      // sheet.type = 'text/html';
      // if (document.head) { document.head.appendChild(sheet); }
    }
  }]);

  function NavBar(props) {
    var _this;

    _classCallCheck(this, NavBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavBar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "userMenu", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleLangSelection", function (lang) {
      delete lang.active;

      _storage.default.setObject(_application.AppProperties.SELECTED_LANGUAGE_KEY, lang);

      _this.props.setActiveLanguage(lang.code);
    });

    _defineProperty(_assertThisInitialized(_this), "handleThemeSelection", function (theme) {
      NavBar.loadStyleSheet(theme);

      _this.props.setActiveTheme(theme);
    });

    _this.state = {
      availableThemes: Object.keys(_themes.themes).map(function (key) {
        _themes.themes[key].code = key;
        return _themes.themes[key];
      }),
      openSideNav: false
    };
    _this.userMenu = [{
      name: 'logout',
      onClick: function onClick() {
        return _this.props.logoutUser();
      }
    }];
    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          activeLanguage = _this$props.activeLanguage,
          activeTheme = _this$props.activeTheme,
          languages = _this$props.languages;
      var availableThemes = this.state.availableThemes;
      return React.createElement("div", {
        className: "navbar-container fixed-top"
      }, React.createElement(_reactBootstrap.Navbar, {
        collapseOnSelect: true,
        fixedTop: true,
        fluid: true
      }, React.createElement(_reactBootstrap.Navbar.Header, null, React.createElement(_reactBootstrap.Navbar.Brand, null, React.createElement("a", {
        href: "/"
      }, React.createElement("img", {
        className: "logo",
        src: _logo.default
      })))), React.createElement("div", null, React.createElement(_reactBootstrap.Dropdown, {
        id: "language-dropdown",
        className: "transparent-button"
      }, React.createElement(_reactBootstrap.Dropdown.Toggle, null, activeLanguage ? activeLanguage.name : ''), React.createElement(_reactBootstrap.Dropdown.Menu, null, languages.map(function (lang) {
        return React.createElement("li", {
          key: lang.name,
          className: "dropdown-item",
          onClick: function onClick() {
            return _this2.handleLangSelection(lang);
          }
        }, lang.name);
      }))), React.createElement(_reactBootstrap.Dropdown, {
        id: "theme-dropdown",
        className: "transparent-button"
      }, React.createElement(_reactBootstrap.Dropdown.Toggle, null, activeTheme), React.createElement(_reactBootstrap.Dropdown.Menu, null, availableThemes.map(function (availableTheme, index) {
        return React.createElement("li", {
          key: index,
          className: "dropdown-item themeName",
          onClick: function onClick() {
            return _this2.handleThemeSelection(availableTheme.code);
          }
        }, React.createElement("span", {
          style: {
            backgroundColor: availableTheme.primaryColor
          },
          className: "themeIcon"
        }), availableTheme.code);
      }))), React.createElement(_reactBootstrap.Dropdown, {
        id: "user-dropdown",
        className: "transparent-button"
      }, React.createElement(_reactBootstrap.Dropdown.Toggle, null, React.createElement(_reactBootstrap.Glyphicon, {
        glyph: "user"
      })), React.createElement(_reactBootstrap.Dropdown.Menu, null, this.userMenu.map(function (menu, index) {
        return React.createElement("li", {
          key: index,
          className: "dropdown-item",
          onClick: function onClick() {
            return menu.onClick();
          }
        }, React.createElement(_reactLocalizeRedux.Translate, {
          id: menu.name
        }));
      }))))));
    }
  }]);

  return NavBar;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeTheme: state.theme.activeTheme
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logoutUser: function logoutUser() {
      return dispatch((0, _user.logoutUser)());
    },
    setActiveTheme: function setActiveTheme(theme) {
      return dispatch((0, _theme.changeTheme)(theme));
    }
  };
};

var _default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _reactLocalizeRedux.withLocalize)(NavBar);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdkJhci9pbmRleC50c3giXSwibmFtZXMiOlsiTmF2QmFyIiwidGhlbWUiLCJwcm9wcyIsImxhbmciLCJhY3RpdmUiLCJzdG9yYWdlIiwic2V0T2JqZWN0IiwiQXBwUHJvcGVydGllcyIsIlNFTEVDVEVEX0xBTkdVQUdFX0tFWSIsInNldEFjdGl2ZUxhbmd1YWdlIiwiY29kZSIsImxvYWRTdHlsZVNoZWV0Iiwic2V0QWN0aXZlVGhlbWUiLCJzdGF0ZSIsImF2YWlsYWJsZVRoZW1lcyIsIk9iamVjdCIsImtleXMiLCJ0aGVtZXMiLCJtYXAiLCJrZXkiLCJvcGVuU2lkZU5hdiIsInVzZXJNZW51IiwibmFtZSIsIm9uQ2xpY2siLCJsb2dvdXRVc2VyIiwiYWN0aXZlTGFuZ3VhZ2UiLCJhY3RpdmVUaGVtZSIsImxhbmd1YWdlcyIsImxvZ28iLCJoYW5kbGVMYW5nU2VsZWN0aW9uIiwiYXZhaWxhYmxlVGhlbWUiLCJpbmRleCIsImhhbmRsZVRoZW1lU2VsZWN0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeUNvbG9yIiwibWVudSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ3aXRoUm91dGVyIiwid2l0aExvY2FsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBV01BLE07Ozs7Ozs7QUFFSjttQ0FDOEJDLEssRUFBZSxDQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztBQUdELGtCQUFZQyxLQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQzVCLGdGQUFNQSxLQUFOOztBQUQ0Qjs7QUFB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QSxJQUFNYSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFvQjtBQUM3Q2hCLElBQUFBLFVBQVUsRUFBRTtBQUFBLGFBQU1nQixRQUFRLENBQUMsdUJBQUQsQ0FBZDtBQUFBLEtBRGlDO0FBRTdDNUIsSUFBQUEsY0FBYyxFQUFFLHdCQUFDWCxLQUFEO0FBQUEsYUFBbUJ1QyxRQUFRLENBQUMsd0JBQVl2QyxLQUFaLENBQUQsQ0FBM0I7QUFBQTtBQUY2QixHQUFwQjtBQUFBLENBQTNCOztlQUtlLG9CQUNid0MsdUJBRGEsRUFFYix5QkFDRUgsZUFERixFQUVFQyxrQkFGRixDQUZhLEVBTWJHLGdDQU5hLEVBT2IxQyxNQVBhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbHlwaGljb24sIE5hdmJhciwgRHJvcGRvd259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBMb2NhbGl6ZUNvbnRleHRQcm9wcywgVHJhbnNsYXRlLCB3aXRoTG9jYWxpemUgfSBmcm9tICdyZWFjdC1sb2NhbGl6ZS1yZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vLi4vc3JjL2xvZ28uc3ZnJztcbmltcG9ydCB7IGNoYW5nZVRoZW1lIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy90aGVtZSc7XG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91c2VyJztcbmltcG9ydCB7IEFwcFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYXBwbGljYXRpb24ucHJvcGVydGllcyc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyB0aGVtZXMgfSBmcm9tICcuLi8uLi90aGVtZXMnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vLi4vdXRpbHMvc3RvcmFnZSc7XG5cblxuaW1wb3J0ICcuL05hdkJhci5jc3MnO1xuXG5pbnRlcmZhY2UgSU5hdlN0YXRlIHtcbiAgYXZhaWxhYmxlVGhlbWVzOiBhbnlbXTtcbiAgb3BlblNpZGVOYXY6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJTmF2UHJvcHMgZXh0ZW5kcyBMb2NhbGl6ZUNvbnRleHRQcm9wcywgSVN0YXRlUHJvcHMsIElEaXNwYXRjaFByb3BzIHtcbiAgY2xhc3NlczogYW55O1xufVxuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SU5hdlByb3BzLCBJTmF2U3RhdGU+IHtcblxuICAvLyBUb2RvOiBEeW5hbWljIHRoZW1lIGluamVjdGlvblxuICBwcml2YXRlIHN0YXRpYyBsb2FkU3R5bGVTaGVldCh0aGVtZTogc3RyaW5nKSB7XG4gICAgLy8gY29uc3Qgc3R5bGVTaGVldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1zdHlsZXNoZWV0XScpO1xuICAgIC8vIHN0eWxlU2hlZXRzLmZvckVhY2goKHN0eWxlU2hlZXQ6IGFueSkgPT4ge1xuICAgIC8vICAgaWYgKHN0eWxlU2hlZXQucGFyZW50Tm9kZSAmJiBzdHlsZVNoZWV0LnNoZWV0ICYmIHN0eWxlU2hlZXQuc2hlZXQuaHJlZiAmJiAhc3R5bGVTaGVldC5zaGVldC5ocmVmLmluY2x1ZGVzKCdjaHVuaycpKSB7XG4gICAgLy8gICAgIHN0eWxlU2hlZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZVNoZWV0KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICAvLyBjb25zdCBzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAvLyBzaGVldC5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgLy8gc2hlZXQuaHJlZiA9IGAuL3N0YXRpYy9jc3MvJHt0aGVtZX0vdGhlbWUubWluLmNzc2A7XG4gICAgLy8gc2hlZXQudHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgIC8vIGlmIChkb2N1bWVudC5oZWFkKSB7IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2hlZXQpOyB9XG4gIH1cbiAgcHJpdmF0ZSB1c2VyTWVudTogYW55W107XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElOYXZQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXZhaWxhYmxlVGhlbWVzOiBPYmplY3Qua2V5cyh0aGVtZXMpLm1hcChrZXkgPT4ge1xuICAgICAgICB0aGVtZXNba2V5XS5jb2RlID0ga2V5O1xuICAgICAgICByZXR1cm4gdGhlbWVzW2tleV07XG4gICAgICB9KSxcbiAgICAgIG9wZW5TaWRlTmF2OiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy51c2VyTWVudSA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2xvZ291dCcsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMucHJvcHMubG9nb3V0VXNlcigpXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVMYW5ndWFnZSwgYWN0aXZlVGhlbWUsIGxhbmd1YWdlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGF2YWlsYWJsZVRoZW1lcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyIGZpeGVkLXRvcFwiPlxuICAgICAgICA8TmF2YmFyIGNvbGxhcHNlT25TZWxlY3Q9e3RydWV9IGZpeGVkVG9wPXt0cnVlfSBmbHVpZD17dHJ1ZX0+XG4gICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2xvZ299IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxEcm9wZG93biBpZD1cImxhbmd1YWdlLWRyb3Bkb3duXCIgY2xhc3NOYW1lPVwidHJhbnNwYXJlbnQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgIHthY3RpdmVMYW5ndWFnZSA/IGFjdGl2ZUxhbmd1YWdlLm5hbWUgOiAnJ31cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZXMubWFwKGxhbmcgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xhbmcubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUxhbmdTZWxlY3Rpb24obGFuZyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bGFuZy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgIDxEcm9wZG93biBpZD1cInRoZW1lLWRyb3Bkb3duXCIgY2xhc3NOYW1lPVwidHJhbnNwYXJlbnQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgIHthY3RpdmVUaGVtZX1cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVUaGVtZXMubWFwKChhdmFpbGFibGVUaGVtZTogYW55LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gdGhlbWVOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRoZW1lU2VsZWN0aW9uKGF2YWlsYWJsZVRoZW1lLmNvZGUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBhdmFpbGFibGVUaGVtZS5wcmltYXJ5Q29sb3IgfX0gY2xhc3NOYW1lPVwidGhlbWVJY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlVGhlbWUuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgPERyb3Bkb3duIGlkPVwidXNlci1kcm9wZG93blwiIGNsYXNzTmFtZT1cInRyYW5zcGFyZW50LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICA8R2x5cGhpY29uIGdseXBoPVwidXNlclwiLz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnVzZXJNZW51Lm1hcCgobWVudTogYW55LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9eygpID0+IG1lbnUub25DbGljaygpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlIGlkPXttZW51Lm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMYW5nU2VsZWN0aW9uID0gKGxhbmc6IGFueSkgPT4ge1xuICAgIGRlbGV0ZSBsYW5nLmFjdGl2ZTtcbiAgICBzdG9yYWdlLnNldE9iamVjdChBcHBQcm9wZXJ0aWVzLlNFTEVDVEVEX0xBTkdVQUdFX0tFWSwgbGFuZyk7XG4gICAgdGhpcy5wcm9wcy5zZXRBY3RpdmVMYW5ndWFnZShsYW5nLmNvZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUaGVtZVNlbGVjdGlvbiA9ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gICAgTmF2QmFyLmxvYWRTdHlsZVNoZWV0KHRoZW1lKTtcbiAgICB0aGlzLnByb3BzLnNldEFjdGl2ZVRoZW1lKHRoZW1lKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgSVN0YXRlUHJvcHMge1xuICBhY3RpdmVUaGVtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSURpc3BhdGNoUHJvcHMge1xuICBsb2dvdXRVc2VyKCk6IHZvaWQ7XG4gIHNldEFjdGl2ZVRoZW1lKHRoZW1lOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcbiAgYWN0aXZlVGhlbWU6IHN0YXRlLnRoZW1lLmFjdGl2ZVRoZW1lXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBhbnkpID0+ICh7XG4gIGxvZ291dFVzZXI6ICgpID0+IGRpc3BhdGNoKGxvZ291dFVzZXIoKSksXG4gIHNldEFjdGl2ZVRoZW1lOiAodGhlbWU6IHN0cmluZykgPT4gZGlzcGF0Y2goY2hhbmdlVGhlbWUodGhlbWUpKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4gIGNvbm5lY3Q8SVN0YXRlUHJvcHMsIElEaXNwYXRjaFByb3BzLCBJTmF2UHJvcHMsIElTdGF0ZT4oXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuICApLFxuICB3aXRoTG9jYWxpemVcbikoTmF2QmFyKSBhcyBSZWFjdC5Db21wb25lbnRDbGFzcztcbiJdfQ==