"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connectedReactRouter = require("connected-react-router");

var React = _interopRequireWildcard(require("react"));

var _AppWrapper = _interopRequireDefault(require("./components/AppWrapper"));

var _ErrorWrapper = _interopRequireDefault(require("./components/ErrorWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var App = function App(_ref) {
  var history = _ref.history;
  return React.createElement("div", {
    className: "appContainer"
  }, React.createElement(_ErrorWrapper.default, null, React.createElement(_connectedReactRouter.ConnectedRouter, {
    history: history
  }, React.createElement(_AppWrapper.default, null))));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsImhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBTUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBNEI7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQ3RDLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0Usb0JBQUMscUJBQUQsUUFDRSxvQkFBQyxxQ0FBRDtBQUFpQixJQUFBLE9BQU8sRUFBRUE7QUFBMUIsS0FDRSxvQkFBQyxtQkFBRCxPQURGLENBREYsQ0FERixDQURGO0FBU0QsQ0FWRDs7ZUFZZUQsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RlZFJvdXRlciB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcFdyYXBwZXIgZnJvbSAnLi9jb21wb25lbnRzL0FwcFdyYXBwZXInO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9jb21wb25lbnRzL0Vycm9yV3JhcHBlcic7XG5cbmludGVyZmFjZSBJQXBwUHJvcHMge1xuICBoaXN0b3J5OiBIaXN0b3J5O1xufVxuXG5jb25zdCBBcHAgPSAoeyBoaXN0b3J5IH06IElBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwQ29udGFpbmVyXCI+XG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgICAgICA8QXBwV3JhcHBlci8+XG4gICAgICAgIDwvQ29ubmVjdGVkUm91dGVyPlxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19