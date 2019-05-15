"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _server = require("react-dom/server");

var _reactLocalizeRedux = require("react-localize-redux");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.css");

var _redux = require("redux");

var _global = require("../../actions/global");

var _NavBar = _interopRequireDefault(require("../../components/NavBar"));

var _SideBar = _interopRequireDefault(require("../../components/SideBar"));

var _application = require("../../constants/application.properties");

var _languages = require("../../global/languages");

var _routes = require("../../routes");

var _storage = _interopRequireDefault(require("../../utils/storage"));

var _index = _interopRequireDefault(require("../Loader/index"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function BackdropSvgImage() {
//   return <svg className="backdrop" version="1.0" xmlns="http://www.w3.org/2000/svg"
//   width="1429.000000pt" height="175.000000pt" viewBox="0 0 1429.000000 175.000000"
//   preserveAspectRatio="xMidYMid meet">
//     <g transform="translate(0.000000,175.000000) scale(0.100000,-0.100000)"
//     fill="#000000" stroke="none">
//     <path d="M2 1268 l3 -482 315 -38 c705 -84 2408 -261 3050 -318 3317 -291
//     6010 -430 8355 -430 808 0 2099 39 2498 76 l67 6 0 834 0 834 -7145 0 -7145 0
//     2 -482z"/>
//     </g>
//   </svg>;
// }
var AppWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppWrapper, _React$Component);

  function AppWrapper(props) {
    var _this;

    _classCallCheck(this, AppWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "currentLanguage", _storage.default.getObject(_application.AppProperties.SELECTED_LANGUAGE_KEY));

    _defineProperty(_assertThisInitialized(_this), "expandSideBar", function () {
      _this.setState({
        isExpanded: !_this.state.isExpanded
      });

      _storage.default.setItem(_application.AppProperties.SIDEBAR_EXPANDED, !_this.state.isExpanded);
    });

    _this.state = {
      isExpanded: false,
      status: ''
    };
    var activeLanguage = _this.currentLanguage ? _this.currentLanguage : _application.AppProperties.DEFAULT_LANGUAGE; // Enabling default language by getting it from localstorage

    _this.props.initialize({
      languages: _languages.languages,
      options: {
        renderToStaticMarkup: _server.renderToStaticMarkup
      },
      translation: require("../../translations/".concat(activeLanguage.code, ".welcome.json"))
    });

    _this.props.setActiveLanguage(activeLanguage.code);

    _this.addTranslationsForActiveLanguage(activeLanguage);

    return _this;
  }

  _createClass(AppWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isExpanded = _storage.default.getItem(_application.AppProperties.SIDEBAR_EXPANDED);

      if (isExpanded === 'true') {
        this.setState({
          isExpanded: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isUserLoggedIn = _this$props.isUserLoggedIn,
          loadingInProgress = _this$props.loadingInProgress,
          loading = _this$props.loading;
      var isExpanded = this.state.isExpanded;
      return React.createElement(React.Fragment, null, isUserLoggedIn && React.createElement(React.Fragment, null, React.createElement(_NavBar.default, {
        key: "nav"
      }), loadingInProgress > 0 && React.createElement(_index.default, {
        loading: loading
      }), React.createElement("div", {
        className: "container-fluid"
      }, React.createElement(_SideBar.default, {
        expandSideBar: this.expandSideBar,
        isExpanded: isExpanded
      }), React.createElement("div", {
        key: "mainContainer",
        className: isExpanded ? 'main expand' : 'main'
      }, React.createElement(_routes.LoggedInRoutes, {
        key: "logged-in-routes"
      })))) || React.createElement(_routes.persistantRoutes, null), React.createElement(_reactToastify.ToastContainer, null));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var hasActiveLanguageChanged = prevProps.activeLanguage && prevProps.activeLanguage !== this.props.activeLanguage;

      if (hasActiveLanguageChanged) {
        this.addTranslationsForActiveLanguage(this.props.activeLanguage);
      }
    }
  }, {
    key: "addTranslationsForActiveLanguage",
    value: function addTranslationsForActiveLanguage(activeLanguage) {
      this.props.addTranslationForLanguage(require("../../translations/".concat(activeLanguage.code, ".welcome.json")), activeLanguage.code);
    }
  }]);

  return AppWrapper;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isUserLoggedIn: state.global.userStatus.loggedIn,
    loading: state.global.loader.loading,
    loadingInProgress: state.global.loader.loadInProgress
  };
};

var mapDispatchToProps = {
  updateLoggedInStatus: _global.updateLoggedInStatus
};

var _default = (0, _redux.compose)(_reactRouter.withRouter, _reactLocalizeRedux.withLocalize, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(AppWrapper);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcFdyYXBwZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFwcFdyYXBwZXIiLCJwcm9wcyIsInN0b3JhZ2UiLCJnZXRPYmplY3QiLCJBcHBQcm9wZXJ0aWVzIiwiU0VMRUNURURfTEFOR1VBR0VfS0VZIiwic2V0U3RhdGUiLCJpc0V4cGFuZGVkIiwic3RhdGUiLCJzZXRJdGVtIiwiU0lERUJBUl9FWFBBTkRFRCIsInN0YXR1cyIsImFjdGl2ZUxhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwiREVGQVVMVF9MQU5HVUFHRSIsImluaXRpYWxpemUiLCJsYW5ndWFnZXMiLCJvcHRpb25zIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJ0cmFuc2xhdGlvbiIsInJlcXVpcmUiLCJjb2RlIiwic2V0QWN0aXZlTGFuZ3VhZ2UiLCJhZGRUcmFuc2xhdGlvbnNGb3JBY3RpdmVMYW5ndWFnZSIsImdldEl0ZW0iLCJpc1VzZXJMb2dnZWRJbiIsImxvYWRpbmdJblByb2dyZXNzIiwibG9hZGluZyIsImV4cGFuZFNpZGVCYXIiLCJwcmV2UHJvcHMiLCJoYXNBY3RpdmVMYW5ndWFnZUNoYW5nZWQiLCJhZGRUcmFuc2xhdGlvbkZvckxhbmd1YWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJnbG9iYWwiLCJ1c2VyU3RhdHVzIiwibG9nZ2VkSW4iLCJsb2FkZXIiLCJsb2FkSW5Qcm9ncmVzcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInVwZGF0ZUxvZ2dlZEluU3RhdHVzIiwid2l0aFJvdXRlciIsIndpdGhMb2NhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVNQSxVOzs7OztBQUVKLHNCQUFZQyxLQUFaLEVBQXFDO0FBQUE7O0FBQUE7O0FBQ25DLG9GQUFNQSxLQUFOOztBQURtQyxzRUFETkMsaUJBQVFDLFNBQVIsQ0FBa0JDLDJCQUFjQyxxQkFBaEMsQ0FDTTs7QUFBQSxvRUF1RGIsWUFBTTtBQUM1QixZQUFLQyxRQUFMLENBQWM7QUFBQ0MsUUFBQUEsVUFBVSxFQUFFLENBQUMsTUFBS0MsS0FBTCxDQUFXRDtBQUF6QixPQUFkOztBQUNBTCx1QkFBUU8sT0FBUixDQUFnQkwsMkJBQWNNLGdCQUE5QixFQUFnRCxDQUFDLE1BQUtGLEtBQUwsQ0FBV0QsVUFBNUQ7QUFDRCxLQTFEb0M7O0FBRW5DLFVBQUtDLEtBQUwsR0FBYTtBQUNYRCxNQUFBQSxVQUFVLEVBQUUsS0FERDtBQUVYSSxNQUFBQSxNQUFNLEVBQUU7QUFGRyxLQUFiO0FBSUEsUUFBTUMsY0FBYyxHQUFHLE1BQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBNUIsR0FBOENULDJCQUFjVSxnQkFBbkYsQ0FObUMsQ0FPbkM7O0FBQ0EsVUFBS2IsS0FBTCxDQUFXYyxVQUFYLENBQXNCO0FBQ3BCQyxNQUFBQSxTQUFTLEVBQVRBLG9CQURvQjtBQUVwQkMsTUFBQUEsT0FBTyxFQUFFO0FBQUVDLFFBQUFBLG9CQUFvQixFQUFwQkE7QUFBRixPQUZXO0FBR3BCQyxNQUFBQSxXQUFXLEVBQUVDLE9BQU8sOEJBQXVCUixjQUFjLENBQUNTLElBQXRDO0FBSEEsS0FBdEI7O0FBS0EsVUFBS3BCLEtBQUwsQ0FBV3FCLGlCQUFYLENBQTZCVixjQUFjLENBQUNTLElBQTVDOztBQUNBLFVBQUtFLGdDQUFMLENBQXNDWCxjQUF0Qzs7QUFkbUM7QUFlcEM7Ozs7d0NBRTBCO0FBQ3pCLFVBQU1MLFVBQVUsR0FBR0wsaUJBQVFzQixPQUFSLENBQWdCcEIsMkJBQWNNLGdCQUE5QixDQUFuQjs7QUFDQSxVQUFJSCxVQUFVLEtBQUssTUFBbkIsRUFBMkI7QUFDekIsYUFBS0QsUUFBTCxDQUFjO0FBQUVDLFVBQUFBLFVBQVUsRUFBRTtBQUFkLFNBQWQ7QUFDRDtBQUNGOzs7NkJBRWU7QUFBQSx3QkFDeUMsS0FBS04sS0FEOUM7QUFBQSxVQUNOd0IsY0FETSxlQUNOQSxjQURNO0FBQUEsVUFDVUMsaUJBRFYsZUFDVUEsaUJBRFY7QUFBQSxVQUM2QkMsT0FEN0IsZUFDNkJBLE9BRDdCO0FBQUEsVUFFTnBCLFVBRk0sR0FFUyxLQUFLQyxLQUZkLENBRU5ELFVBRk07QUFHZCxhQUNFLG9CQUFDLGNBQUQsUUFDR2tCLGNBQWMsSUFDYixvQkFBQyxjQUFELFFBQ0Usb0JBQUMsZUFBRDtBQUFRLFFBQUEsR0FBRyxFQUFDO0FBQVosUUFERixFQUVHQyxpQkFBaUIsR0FBRyxDQUFwQixJQUF5QixvQkFBQyxjQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQztBQUExQixRQUY1QixFQUdJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLG9CQUFDLGdCQUFEO0FBQVMsUUFBQSxhQUFhLEVBQUUsS0FBS0MsYUFBN0I7QUFBNEMsUUFBQSxVQUFVLEVBQUVyQjtBQUF4RCxRQURGLEVBRUU7QUFBSyxRQUFBLEdBQUcsRUFBQyxlQUFUO0FBQXlCLFFBQUEsU0FBUyxFQUFFQSxVQUFVLEdBQUcsYUFBSCxHQUFtQjtBQUFqRSxTQUNFLG9CQUFDLHNCQUFEO0FBQWdCLFFBQUEsR0FBRyxFQUFDO0FBQXBCLFFBREYsQ0FGRixDQUhKLENBREQsSUFZRCxvQkFBQyx3QkFBRCxPQWJGLEVBY0Usb0JBQUMsNkJBQUQsT0FkRixDQURGO0FBa0JEOzs7dUNBRXlCc0IsUyxFQUFnQjtBQUN4QyxVQUFNQyx3QkFBd0IsR0FDNUJELFNBQVMsQ0FBQ2pCLGNBQVYsSUFBNEJpQixTQUFTLENBQUNqQixjQUFWLEtBQTZCLEtBQUtYLEtBQUwsQ0FBV1csY0FEdEU7O0FBRUEsVUFBSWtCLHdCQUFKLEVBQThCO0FBQzVCLGFBQUtQLGdDQUFMLENBQXNDLEtBQUt0QixLQUFMLENBQVdXLGNBQWpEO0FBQ0Q7QUFDRjs7O3FEQU93Q0EsYyxFQUFxQjtBQUM1RCxXQUFLWCxLQUFMLENBQVc4Qix5QkFBWCxDQUFxQ1gsT0FBTyw4QkFBdUJSLGNBQWMsQ0FBQ1MsSUFBdEMsbUJBQTVDLEVBQXdHVCxjQUFjLENBQUNTLElBQXZIO0FBQ0Q7Ozs7RUFoRXNCVyxLQUFLLENBQUNDLFM7O0FBb0UvQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUMxQixLQUFEO0FBQUEsU0FBaUM7QUFDdkRpQixJQUFBQSxjQUFjLEVBQUVqQixLQUFLLENBQUMyQixNQUFOLENBQWFDLFVBQWIsQ0FBd0JDLFFBRGU7QUFFdkRWLElBQUFBLE9BQU8sRUFBRW5CLEtBQUssQ0FBQzJCLE1BQU4sQ0FBYUcsTUFBYixDQUFvQlgsT0FGMEI7QUFHdkRELElBQUFBLGlCQUFpQixFQUFFbEIsS0FBSyxDQUFDMkIsTUFBTixDQUFhRyxNQUFiLENBQW9CQztBQUhnQixHQUFqQztBQUFBLENBQXhCOztBQU1BLElBQU1DLGtCQUFtQyxHQUFJO0FBQzNDQyxFQUFBQSxvQkFBb0IsRUFBcEJBO0FBRDJDLENBQTdDOztlQWNlLG9CQUNiQyx1QkFEYSxFQUViQyxnQ0FGYSxFQUdiLHlCQUNFVCxlQURGLEVBRUVNLGtCQUZGLENBSGEsRUFPYnhDLFVBUGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IExvY2FsaXplQ29udGV4dFByb3BzLCB3aXRoTG9jYWxpemUgfSBmcm9tICdyZWFjdC1sb2NhbGl6ZS1yZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgdXBkYXRlTG9nZ2VkSW5TdGF0dXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2dsb2JhbCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2lkZUJhcic7XG5pbXBvcnQgeyBBcHBQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2FwcGxpY2F0aW9uLnByb3BlcnRpZXMnO1xuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi4vLi4vZ2xvYmFsL2xhbmd1YWdlcyc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycyc7XG5pbXBvcnQge1xuICBMb2dnZWRJblJvdXRlcyxcbiAgcGVyc2lzdGFudFJvdXRlcyBhcyBQZXJzaXN0YW50Um91dGVzXG59IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi91dGlscy9zdG9yYWdlJztcbmltcG9ydCBMb2FkZXJDb21wb25lbnQgZnJvbSAnLi4vTG9hZGVyL2luZGV4JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbnRlcmZhY2UgSUFwcFdyYXBwZXJQcm9wcyBleHRlbmRzIExvY2FsaXplQ29udGV4dFByb3BzIHtcbiAgaXNVc2VyTG9nZ2VkSW46IGJvb2xlYW47XG4gIGxvYWRpbmdJblByb2dyZXNzOiBudW1iZXI7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJQXBwV3JhcHBlclN0YXRlIHtcbiAgaXNFeHBhbmRlZDogYm9vbGVhbjtcbiAgc3RhdHVzOiBzdHJpbmc7XG59XG5cbi8vIGZ1bmN0aW9uIEJhY2tkcm9wU3ZnSW1hZ2UoKSB7XG4vLyAgIHJldHVybiA8c3ZnIGNsYXNzTmFtZT1cImJhY2tkcm9wXCIgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuLy8gICB3aWR0aD1cIjE0MjkuMDAwMDAwcHRcIiBoZWlnaHQ9XCIxNzUuMDAwMDAwcHRcIiB2aWV3Qm94PVwiMCAwIDE0MjkuMDAwMDAwIDE3NS4wMDAwMDBcIlxuLy8gICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuLy8gICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwxNzUuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCJcbi8vICAgICBmaWxsPVwiIzAwMDAwMFwiIHN0cm9rZT1cIm5vbmVcIj5cbi8vICAgICA8cGF0aCBkPVwiTTIgMTI2OCBsMyAtNDgyIDMxNSAtMzggYzcwNSAtODQgMjQwOCAtMjYxIDMwNTAgLTMxOCAzMzE3IC0yOTFcbi8vICAgICA2MDEwIC00MzAgODM1NSAtNDMwIDgwOCAwIDIwOTkgMzkgMjQ5OCA3NiBsNjcgNiAwIDgzNCAwIDgzNCAtNzE0NSAwIC03MTQ1IDBcbi8vICAgICAyIC00ODJ6XCIvPlxuLy8gICAgIDwvZz5cbi8vICAgPC9zdmc+O1xuLy8gfVxuXG5jbGFzcyBBcHBXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElBcHBXcmFwcGVyUHJvcHMsIElBcHBXcmFwcGVyU3RhdGU+IHtcbiAgcHVibGljIGN1cnJlbnRMYW5ndWFnZSA6IGFueSA9IHN0b3JhZ2UuZ2V0T2JqZWN0KEFwcFByb3BlcnRpZXMuU0VMRUNURURfTEFOR1VBR0VfS0VZKTtcbiAgY29uc3RydWN0b3IocHJvcHM6IElBcHBXcmFwcGVyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgc3RhdHVzOiAnJ1xuICAgIH07XG4gICAgY29uc3QgYWN0aXZlTGFuZ3VhZ2UgPSB0aGlzLmN1cnJlbnRMYW5ndWFnZSA/IHRoaXMuY3VycmVudExhbmd1YWdlIDogQXBwUHJvcGVydGllcy5ERUZBVUxUX0xBTkdVQUdFO1xuICAgIC8vIEVuYWJsaW5nIGRlZmF1bHQgbGFuZ3VhZ2UgYnkgZ2V0dGluZyBpdCBmcm9tIGxvY2Fsc3RvcmFnZVxuICAgIHRoaXMucHJvcHMuaW5pdGlhbGl6ZSh7XG4gICAgICBsYW5ndWFnZXMsXG4gICAgICBvcHRpb25zOiB7IHJlbmRlclRvU3RhdGljTWFya3VwIH0sXG4gICAgICB0cmFuc2xhdGlvbjogcmVxdWlyZShgLi4vLi4vdHJhbnNsYXRpb25zLyR7YWN0aXZlTGFuZ3VhZ2UuY29kZX0ud2VsY29tZS5qc29uYClcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLnNldEFjdGl2ZUxhbmd1YWdlKGFjdGl2ZUxhbmd1YWdlLmNvZGUpO1xuICAgIHRoaXMuYWRkVHJhbnNsYXRpb25zRm9yQWN0aXZlTGFuZ3VhZ2UoYWN0aXZlTGFuZ3VhZ2UpO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBzdG9yYWdlLmdldEl0ZW0oQXBwUHJvcGVydGllcy5TSURFQkFSX0VYUEFOREVEKTtcbiAgICBpZiAoaXNFeHBhbmRlZCA9PT0gJ3RydWUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNVc2VyTG9nZ2VkSW4sIGxvYWRpbmdJblByb2dyZXNzLCBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNFeHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7aXNVc2VyTG9nZ2VkSW4gJiYgKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxOYXZCYXIga2V5PVwibmF2XCIvPlxuICAgICAgICAgICAge2xvYWRpbmdJblByb2dyZXNzID4gMCAmJiA8TG9hZGVyQ29tcG9uZW50IGxvYWRpbmc9e2xvYWRpbmd9IC8+fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxTaWRlQmFyIGV4cGFuZFNpZGVCYXI9e3RoaXMuZXhwYW5kU2lkZUJhcn0gaXNFeHBhbmRlZD17aXNFeHBhbmRlZH0vPlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwibWFpbkNvbnRhaW5lclwiIGNsYXNzTmFtZT17aXNFeHBhbmRlZCA/ICdtYWluIGV4cGFuZCcgOiAnbWFpbid9PlxuICAgICAgICAgICAgICAgICAgPExvZ2dlZEluUm91dGVzIGtleT1cImxvZ2dlZC1pbi1yb3V0ZXNcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICkgfHxcbiAgICAgICAgPFBlcnNpc3RhbnRSb3V0ZXMvPn1cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBhbnkpIHtcbiAgICBjb25zdCBoYXNBY3RpdmVMYW5ndWFnZUNoYW5nZWQgPVxuICAgICAgcHJldlByb3BzLmFjdGl2ZUxhbmd1YWdlICYmIHByZXZQcm9wcy5hY3RpdmVMYW5ndWFnZSAhPT0gdGhpcy5wcm9wcy5hY3RpdmVMYW5ndWFnZTtcbiAgICBpZiAoaGFzQWN0aXZlTGFuZ3VhZ2VDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uc0ZvckFjdGl2ZUxhbmd1YWdlKHRoaXMucHJvcHMuYWN0aXZlTGFuZ3VhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kU2lkZUJhciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0V4cGFuZGVkOiAhdGhpcy5zdGF0ZS5pc0V4cGFuZGVkfSk7XG4gICAgc3RvcmFnZS5zZXRJdGVtKEFwcFByb3BlcnRpZXMuU0lERUJBUl9FWFBBTkRFRCwgIXRoaXMuc3RhdGUuaXNFeHBhbmRlZCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFRyYW5zbGF0aW9uc0ZvckFjdGl2ZUxhbmd1YWdlKGFjdGl2ZUxhbmd1YWdlOiBhbnkpIHtcbiAgICB0aGlzLnByb3BzLmFkZFRyYW5zbGF0aW9uRm9yTGFuZ3VhZ2UocmVxdWlyZShgLi4vLi4vdHJhbnNsYXRpb25zLyR7YWN0aXZlTGFuZ3VhZ2UuY29kZX0ud2VsY29tZS5qc29uYCksIGFjdGl2ZUxhbmd1YWdlLmNvZGUpO1xuICB9XG5cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJU3RhdGUpOiBJU3RhdGVQcm9wcyA9PiAoe1xuICBpc1VzZXJMb2dnZWRJbjogc3RhdGUuZ2xvYmFsLnVzZXJTdGF0dXMubG9nZ2VkSW4sXG4gIGxvYWRpbmc6IHN0YXRlLmdsb2JhbC5sb2FkZXIubG9hZGluZyxcbiAgbG9hZGluZ0luUHJvZ3Jlc3M6IHN0YXRlLmdsb2JhbC5sb2FkZXIubG9hZEluUHJvZ3Jlc3Ncbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgOiBJRGlzcGF0Y2hQcm9wcyA9ICh7XG4gIHVwZGF0ZUxvZ2dlZEluU3RhdHVzXG59KTtcblxuaW50ZXJmYWNlIElTdGF0ZVByb3BzIHtcbiAgaXNVc2VyTG9nZ2VkSW46IGJvb2xlYW47XG4gIGxvYWRpbmdJblByb2dyZXNzOiBudW1iZXI7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJRGlzcGF0Y2hQcm9wcyB7XG4gIHVwZGF0ZUxvZ2dlZEluU3RhdHVzOiAodXNlclN0YXR1czogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUm91dGVyLFxuICB3aXRoTG9jYWxpemUsXG4gIGNvbm5lY3Q8SVN0YXRlUHJvcHMsIElEaXNwYXRjaFByb3BzLCBJQXBwV3JhcHBlclByb3BzLCBJU3RhdGU+KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgKVxuKShBcHBXcmFwcGVyKSBhcyBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG4iXX0=