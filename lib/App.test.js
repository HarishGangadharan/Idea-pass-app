"use strict";

var _connectedReactRouter = require("connected-react-router");

var _history = require("history");

var React = _interopRequireWildcard(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _App = _interopRequireDefault(require("./App"));

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var history = (0, _history.createBrowserHistory)();
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(history)(_reducers.default), composeEnhancer((0, _redux.applyMiddleware)((0, _connectedReactRouter.routerMiddleware)(history))));
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(_reactRedux.Provider, {
    store: store
  }, React.createElement(_App.default, {
    history: history
  })), div);
  ReactDOM.unmountComponentAtNode(div);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudGVzdC50c3giXSwibmFtZXMiOlsiaGlzdG9yeSIsImNvbXBvc2VFbmhhbmNlciIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsImNvbXBvc2UiLCJzdG9yZSIsInJvb3RSZWR1Y2VyIiwiaXQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsInVubW91bnRDb21wb25lbnRBdE5vZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxvQ0FBaEI7QUFDQSxJQUFNQyxlQUErQixHQUFJQyxNQUFELENBQWdCQyxvQ0FBaEIsSUFBd0RDLGNBQWhHO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLHdCQUNaLHlDQUFjTCxPQUFkLEVBQXVCTSxpQkFBdkIsQ0FEWSxFQUVaTCxlQUFlLENBQ2IsNEJBQ0UsNENBQWlCRCxPQUFqQixDQURGLENBRGEsQ0FGSCxDQUFkO0FBU0FPLEVBQUUsQ0FBQywwQkFBRCxFQUE2QixZQUFNO0FBQ25DLE1BQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUMsRUFBQUEsUUFBUSxDQUFDQyxNQUFULENBQ0Usb0JBQUMsb0JBQUQ7QUFBVSxJQUFBLEtBQUssRUFBRVA7QUFBakIsS0FDRSxvQkFBQyxZQUFEO0FBQUssSUFBQSxPQUFPLEVBQUVMO0FBQWQsSUFERixDQURGLEVBR2VRLEdBSGY7QUFJQUcsRUFBQUEsUUFBUSxDQUFDRSxzQkFBVCxDQUFnQ0wsR0FBaEM7QUFDRCxDQVBDLENBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0Um91dGVyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcjogdHlwZW9mIGNvbXBvc2UgPSAod2luZG93IGFzIGFueSkuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICBjb25uZWN0Um91dGVyKGhpc3RvcnkpKHJvb3RSZWR1Y2VyKSxcbiAgY29tcG9zZUVuaGFuY2VyKFxuICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSlcbiAgICApXG4gIClcbik7XG5cbml0KCdyZW5kZXJzIHdpdGhvdXQgY3Jhc2hpbmcnLCAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8QXBwIGhpc3Rvcnk9e2hpc3Rvcnl9IC8+XG4gICAgPC9Qcm92aWRlcj4sIGRpdik7XG4gIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcbn0pO1xuIl19