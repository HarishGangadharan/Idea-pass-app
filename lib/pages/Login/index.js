"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactLocalizeRedux = require("react-localize-redux");

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _redux = require("redux");

var _logo = _interopRequireDefault(require("../../../src/logo.png"));

var _user = require("../../actions/user");

var _commonUtil = require("../../utils/commonUtil");

require("./login.css");

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

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onLoginClick", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      _this.props.loginUser(email, password);
    });

    _this.state = {
      email: '',
      emailValid: false,
      password: '',
      pristine: true
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var loading = this.props.loading;
      var _this$state2 = this.state,
          emailValid = _this$state2.emailValid,
          email = _this$state2.email,
          password = _this$state2.password,
          pristine = _this$state2.pristine;
      return React.createElement("div", {
        className: "container-fluid login-container"
      }, React.createElement("div", {
        className: "shadow-container"
      }, React.createElement("div", {
        className: "head"
      }, React.createElement("img", {
        src: _logo.default
      })), React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "card m-auto card-signin border-0"
      }, React.createElement("div", {
        className: "card-body"
      }, React.createElement("h5", {
        className: "card-title text-center"
      }, "Sign In"), React.createElement("form", {
        className: "form-signin"
      }, React.createElement("label", {
        htmlFor: "inputEmail"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "label.emailAddress"
      })), React.createElement("div", {
        className: "form-label-group"
      }, React.createElement("input", {
        id: "email",
        onChange: function onChange(event) {
          _this2.setState({
            email: event.target.value,
            emailValid: (0, _commonUtil.isEmailValid)(event.target.value)
          });
        },
        onBlur: function onBlur(event) {
          _this2.setState({
            emailValid: (0, _commonUtil.isEmailValid)(event.target.value),
            pristine: false
          });
        },
        value: email,
        name: "email",
        autoComplete: "email",
        type: "email",
        className: "form-control",
        placeholder: "Email address",
        required: true
      }), !pristine && !emailValid && React.createElement("span", {
        className: "error-text"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "validations.email"
      }))), React.createElement("label", {
        className: "mt-3",
        htmlFor: "inputPassword"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "label.password"
      })), React.createElement("div", {
        className: "form-label-group"
      }, React.createElement("input", {
        value: password,
        name: "password",
        type: "password",
        id: "password",
        autoComplete: "off",
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value,
            pristine: false
          });
        },
        className: "form-control",
        placeholder: "Password",
        required: true
      }), !pristine && !password && React.createElement("span", {
        className: "error-text"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "validations.password"
      }))), React.createElement("button", {
        className: "mt-20 btn btn-lg btn-primary btn-block text-uppercase",
        type: "submit",
        disabled: !emailValid || !password || loading || !email,
        onClick: this.onLoginClick
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "login"
      }))))))));
    }
  }]);

  return Login;
}(React.Component);

var mapStateTopProps = function mapStateTopProps(state) {
  return {
    loading: state.user.loading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loginUser: function loginUser(email, password) {
      return dispatch((0, _user.loginUser)(email, password));
    }
  };
};

var _default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapStateTopProps, mapDispatchToProps))(Login);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Mb2dpbi9pbmRleC50c3giXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpblVzZXIiLCJlbWFpbFZhbGlkIiwicHJpc3RpbmUiLCJsb2FkaW5nIiwiSW1hZ2UiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwib25Mb2dpbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvcFByb3BzIiwidXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWNNQSxLOzs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzlCLCtFQUFNQSxLQUFOOztBQUQ4QixtRUE2RlQsVUFBQ0MsS0FBRCxFQUFnQjtBQUNyQ0EsTUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRHFDLHdCQUVULE1BQUtDLEtBRkk7QUFBQSxVQUU3QkMsS0FGNkIsZUFFN0JBLEtBRjZCO0FBQUEsVUFFdEJDLFFBRnNCLGVBRXRCQSxRQUZzQjs7QUFHckMsWUFBS0wsS0FBTCxDQUFXTSxTQUFYLENBQXFCRixLQUFyQixFQUE0QkMsUUFBNUI7QUFDRCxLQWpHK0I7O0FBRTlCLFVBQUtGLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxLQUFLLEVBQUUsRUFESTtBQUVYRyxNQUFBQSxVQUFVLEVBQUUsS0FGRDtBQUdYRixNQUFBQSxRQUFRLEVBQUUsRUFIQztBQUlYRyxNQUFBQSxRQUFRLEVBQUU7QUFKQyxLQUFiO0FBRjhCO0FBUS9COzs7OzZCQUVlO0FBQUE7O0FBQUEsVUFDTkMsT0FETSxHQUNNLEtBQUtULEtBRFgsQ0FD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QUQsSUFBYSxDQUFDSCxRQUFkLElBQ0Q7QUFBTSxRQUFBLFNBQVMsRUFBQztBQUFoQixTQUE2QixvQkFBQyw2QkFBRDtBQUFXLFFBQUEsRUFBRSxFQUFDO0FBQWQsUUFBN0IsQ0FuQkosQ0EvQkYsRUFxREU7QUFDRSxRQUFBLFNBQVMsRUFBQyx1REFEWjtBQUVFLFFBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFBLFFBQVEsRUFBRSxDQUFDRSxVQUFELElBQWUsQ0FBQ0YsUUFBaEIsSUFBNEJJLE9BQTVCLElBQXVDLENBQUNMLEtBSHBEO0FBSUUsUUFBQSxPQUFPLEVBQUUsS0FBS1U7QUFKaEIsU0FNRSxvQkFBQyw2QkFBRDtBQUFXLFFBQUEsRUFBRSxFQUFDO0FBQWQsUUFORixDQXJERixDQUZGLENBREYsQ0FERixDQUpGLENBREEsQ0FERjtBQThFRDs7OztFQTVGaUJDLEtBQUssQ0FBQ0MsUzs7QUE2RzFCLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ2QsS0FBRDtBQUFBLFNBQW9CO0FBQzNDTSxJQUFBQSxPQUFPLEVBQUVOLEtBQUssQ0FBQ2UsSUFBTixDQUFXVDtBQUR1QixHQUFwQjtBQUFBLENBQXpCOztBQUlBLElBQU1VLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQW9CO0FBQzdDZCxJQUFBQSxTQUFTLEVBQUUsbUJBQUNGLEtBQUQsRUFBaUJDLFFBQWpCO0FBQUEsYUFBc0NlLFFBQVEsQ0FBQyxxQkFBVWhCLEtBQVYsRUFBaUJDLFFBQWpCLENBQUQsQ0FBOUM7QUFBQTtBQURrQyxHQUFwQjtBQUFBLENBQTNCOztlQUllLG9CQUNiZ0IsdUJBRGEsRUFFYix5QkFDRUosZ0JBREYsRUFFRUUsa0JBRkYsQ0FGYSxFQU1icEIsS0FOYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtbG9jYWxpemUtcmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi9zcmMvbG9nby5wbmcnO1xuaW1wb3J0IHsgbG9naW5Vc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy91c2VyJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IGlzRW1haWxWYWxpZCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblV0aWwnO1xuaW1wb3J0ICcuL2xvZ2luLmNzcyc7XG5cblxuaW50ZXJmYWNlIElMb2dpblByb3BzIGV4dGVuZHMgSURpc3BhdGNoUHJvcHMsIElNYXBTdGF0ZVByb3BzIHtcbiAgY2xhc3NlczogYW55O1xufVxuXG5pbnRlcmZhY2UgSUxvZ2luU3RhdGUge1xuICBlbWFpbDogc3RyaW5nLFxuICBlbWFpbFZhbGlkOiBib29sZWFuLFxuICBwYXNzd29yZDogc3RyaW5nLFxuICBwcmlzdGluZTogYm9vbGVhblxufVxuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJTG9naW5Qcm9wcywgSUxvZ2luU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IElMb2dpblByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBlbWFpbFZhbGlkOiBmYWxzZSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHByaXN0aW5lOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW1haWxWYWxpZCwgZW1haWwsIHBhc3N3b3JkLCBwcmlzdGluZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbG9naW4tY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxuICAgICAgICA8aW1nIHNyYz17SW1hZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG0tYXV0byBjYXJkLXNpZ25pbiBib3JkZXItMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXJcIj5TaWduIEluPC9oNT5cbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1zaWduaW5cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0RW1haWxcIj48VHJhbnNsYXRlIGlkPVwibGFiZWwuZW1haWxBZGRyZXNzXCIgLz48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsVmFsaWQ6IGlzRW1haWxWYWxpZChldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxWYWxpZDogaXNFbWFpbFZhbGlkKGV2ZW50LnRhcmdldC52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlzdGluZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIXByaXN0aW5lICYmICFlbWFpbFZhbGlkICAmJlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+PFRyYW5zbGF0ZSBpZD1cInZhbGlkYXRpb25zLmVtYWlsXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm10LTNcIiBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiPjxUcmFuc2xhdGUgaWQ9XCJsYWJlbC5wYXNzd29yZFwiIC8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tbGFiZWwtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAgZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpc3RpbmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICFwcmlzdGluZSAmJiAhcGFzc3dvcmQgICYmXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj48VHJhbnNsYXRlIGlkPVwidmFsaWRhdGlvbnMucGFzc3dvcmRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMjAgYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2sgdGV4dC11cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVtYWlsVmFsaWQgfHwgIXBhc3N3b3JkIHx8IGxvYWRpbmcgfHwgIWVtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkxvZ2luQ2xpY2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBpZD1cImxvZ2luXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uTG9naW5DbGljayA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzLmxvZ2luVXNlcihlbWFpbCwgcGFzc3dvcmQpO1xuICB9XG59XG5cbmludGVyZmFjZSBJRGlzcGF0Y2hQcm9wcyB7XG4gIGxvZ2luVXNlcjogKGVtYWlsOiBzdHJpbmcgLCBwYXNzd29yZDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSU1hcFN0YXRlUHJvcHMge1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvcFByb3BzID0gKHN0YXRlOiBJU3RhdGUpID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLnVzZXIubG9hZGluZ1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogYW55KSA9PiAoe1xuICBsb2dpblVzZXI6IChlbWFpbDogc3RyaW5nICwgcGFzc3dvcmQ6IHN0cmluZykgPT4gZGlzcGF0Y2gobG9naW5Vc2VyKGVtYWlsLCBwYXNzd29yZCkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbiAgY29ubmVjdDxJTWFwU3RhdGVQcm9wcywgSURpc3BhdGNoUHJvcHMsIElMb2dpblByb3BzLCBJU3RhdGU+KFxuICAgIG1hcFN0YXRlVG9wUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4gIClcbikoTG9naW4pIGFzIFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PjtcbiJdfQ==