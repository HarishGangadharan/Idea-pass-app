"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "routes", {
  enumerable: true,
  get: function get() {
    return _routes.routes;
  }
});
exports.store = void 0;

var _connectedReactRouter = require("connected-react-router");

var _history = require("history");

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _reactLocalizeRedux = require("react-localize-redux");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

require("./App.css");

var _App2 = _interopRequireDefault(require("./App"));

var _interceptors = require("./global/interceptors");

var _reducers = _interopRequireDefault(require("./reducers"));

var _registerServiceWorker = _interopRequireDefault(require("./registerServiceWorker"));

var _ability = _interopRequireDefault(require("./ability"));

var _abilityContext = require("./ability-context");

var _sagas = _interopRequireDefault(require("./sagas"));

var _routes = require("../src/routes");

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

// create the saga middleware
var sagaMiddleware = (0, _reduxSaga.default)();
var history = (0, _history.createBrowserHistory)();
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(history)(_reducers.default), composeEnhancer((0, _redux.applyMiddleware)((0, _connectedReactRouter.routerMiddleware)(history), sagaMiddleware))); // then run the saga

exports.store = store;
sagaMiddleware.run(_sagas.default);
(0, _interceptors.setupInterceptors)(store);

var Main =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Main).call(this, props));
    _this.state = {
      store: store
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(_reactRedux.Provider, {
        store: store
      }, React.createElement(_reactLocalizeRedux.LocalizeProvider, {
        store: this.state.store
      }, React.createElement(_abilityContext.AbilityContext.Provider, {
        value: _ability.default
      }, React.createElement(_App2.default, {
        history: history
      }))));
    }
  }]);

  return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('root'));
(0, _registerServiceWorker.default)();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsic2FnYU1pZGRsZXdhcmUiLCJoaXN0b3J5IiwiY29tcG9zZUVuaGFuY2VyIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwiY29tcG9zZSIsInN0b3JlIiwicm9vdFJlZHVjZXIiLCJydW4iLCJyb290U2FnYSIsIk1haW4iLCJwcm9wcyIsInN0YXRlIiwiYWJpbGl0eSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBNkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEzQ0E7QUFDQSxJQUFNQSxjQUFjLEdBQUcseUJBQXZCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLG9DQUFoQjtBQUVBLElBQU1DLGVBQStCLEdBQ2xDQyxNQUFELENBQWdCQyxvQ0FBaEIsSUFBd0RDLGNBRDFEO0FBR08sSUFBTUMsS0FBSyxHQUFHLHdCQUNuQix5Q0FBY0wsT0FBZCxFQUF1Qk0saUJBQXZCLENBRG1CLEVBRW5CTCxlQUFlLENBQUMsNEJBQWdCLDRDQUFpQkQsT0FBakIsQ0FBaEIsRUFBMkNELGNBQTNDLENBQUQsQ0FGSSxDQUFkLEMsQ0FLUDs7O0FBQ0FBLGNBQWMsQ0FBQ1EsR0FBZixDQUFtQkMsY0FBbkI7QUFFQSxxQ0FBa0JILEtBQWxCOztJQUVNSSxJOzs7OztBQUNKLGdCQUFZQyxLQUFaLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLDhFQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hOLE1BQUFBLEtBQUssRUFBTEE7QUFEVyxLQUFiO0FBRnNCO0FBS3ZCOzs7OzZCQUVlO0FBQ2QsYUFDRSxvQkFBQyxvQkFBRDtBQUFVLFFBQUEsS0FBSyxFQUFFQTtBQUFqQixTQUNFLG9CQUFDLG9DQUFEO0FBQWtCLFFBQUEsS0FBSyxFQUFFLEtBQUtNLEtBQUwsQ0FBV047QUFBcEMsU0FDRSxvQkFBQyw4QkFBRCxDQUFnQixRQUFoQjtBQUF5QixRQUFBLEtBQUssRUFBRU87QUFBaEMsU0FDRSxvQkFBQyxhQUFEO0FBQUssUUFBQSxPQUFPLEVBQUVaO0FBQWQsUUFERixDQURGLENBREYsQ0FERjtBQVNEOzs7O0VBbEJnQmEsS0FBSyxDQUFDQyxTOztBQXFCekJDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQixvQkFBQyxJQUFELE9BQWhCLEVBQTBCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBMUI7QUFFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RSb3V0ZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgTG9jYWxpemVQcm92aWRlciB9IGZyb20gJ3JlYWN0LWxvY2FsaXplLXJlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCAnLi9BcHAuY3NzJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5pbXBvcnQgeyBzZXR1cEludGVyY2VwdG9ycyB9IGZyb20gJy4vZ2xvYmFsL2ludGVyY2VwdG9ycyc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyIGZyb20gJy4vcmVnaXN0ZXJTZXJ2aWNlV29ya2VyJztcblxuaW1wb3J0IGFiaWxpdHkgZnJvbSAnLi9hYmlsaXR5JztcbmltcG9ydCB7IEFiaWxpdHlDb250ZXh0IH0gZnJvbSAnLi9hYmlsaXR5LWNvbnRleHQnO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vc2FnYXMnO1xuXG4vLyBjcmVhdGUgdGhlIHNhZ2EgbWlkZGxld2FyZVxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuY29uc3QgY29tcG9zZUVuaGFuY2VyOiB0eXBlb2YgY29tcG9zZSA9XG4gICh3aW5kb3cgYXMgYW55KS5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSkocm9vdFJlZHVjZXIpLFxuICBjb21wb3NlRW5oYW5jZXIoYXBwbHlNaWRkbGV3YXJlKHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSksIHNhZ2FNaWRkbGV3YXJlKSlcbik7XG5cbi8vIHRoZW4gcnVuIHRoZSBzYWdhXG5zYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuXG5zZXR1cEludGVyY2VwdG9ycyhzdG9yZSk7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxMb2NhbGl6ZVByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0YXRlLnN0b3JlfT5cbiAgICAgICAgICA8QWJpbGl0eUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2FiaWxpdHl9PlxuICAgICAgICAgICAgPEFwcCBoaXN0b3J5PXtoaXN0b3J5fSAvPlxuICAgICAgICAgIDwvQWJpbGl0eUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvTG9jYWxpemVQcm92aWRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPE1haW4gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykgYXMgSFRNTEVsZW1lbnQpO1xuXG5yZWdpc3RlclNlcnZpY2VXb3JrZXIoKTtcblxuZXhwb3J0IHsgcm91dGVzIH0gZnJvbSAnLi4vc3JjL3JvdXRlcyc7Il19