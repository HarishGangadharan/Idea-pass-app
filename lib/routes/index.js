"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistantRoutes = exports.LoggedInRoutes = exports.routes = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRouter = require("react-router");

var _ability = _interopRequireDefault(require("../ability"));

var _abilityContext = require("../ability-context");

var _Admin = _interopRequireDefault(require("../pages/Admin"));

var _AppForm = _interopRequireDefault(require("../pages/AppForm"));

var _DynamicTableRenderer = _interopRequireDefault(require("../pages/DynamicTableRenderer"));

var _EmailTemplate = _interopRequireDefault(require("../pages/EmailTemplate/"));

var _create = _interopRequireDefault(require("../pages/EmailTemplate/create"));

var _FormBuilder = _interopRequireDefault(require("../pages/FormBuilder"));

var _FormDataList = _interopRequireDefault(require("../pages/FormDataList"));

var _FormRenderer = _interopRequireDefault(require("../pages/FormRenderer"));

var _FormSchemaList = _interopRequireDefault(require("../pages/FormSchemaList"));

var _FormTrigger = _interopRequireDefault(require("../pages/FormTrigger"));

var _FormTriggerList = _interopRequireDefault(require("../pages/FormTriggerList"));

var _GraphiQl = _interopRequireDefault(require("../pages/GraphiQl"));

var _GraphiQlList = _interopRequireDefault(require("../pages/GraphiQlList"));

var _Home = _interopRequireDefault(require("../pages/Home"));

var _Login = _interopRequireDefault(require("../pages/Login"));

var _NoMatch = _interopRequireDefault(require("../pages/NoMatch"));

var _User = _interopRequireDefault(require("../pages/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var routes = [{
  component: _Home.default,
  exact: true,
  path: '/'
}, {
  component: _FormSchemaList.default,
  path: '/formschemalist'
}, {
  component: _Admin.default,
  path: '/rolespermissions',
  subject: 'admin'
}, {
  component: _FormBuilder.default,
  exact: true,
  path: '/formBuilder'
}, {
  component: _FormBuilder.default,
  path: '/formBuilder/:id'
}, {
  component: _FormRenderer.default,
  exact: true,
  path: '/formRenderer/:id/:pageType'
}, {
  component: _FormRenderer.default,
  exact: true,
  path: '/formRenderer/:id/:submissionId/:pageType'
}, {
  component: _FormTrigger.default,
  exact: true,
  path: '/formTrigger/:id'
}, {
  component: _FormTrigger.default,
  exact: true,
  path: '/formTrigger/:id/:triggerId'
}, {
  component: _FormDataList.default,
  exact: true,
  path: '/formdatalist/:formName/:formId'
}, {
  component: _FormTriggerList.default,
  exact: true,
  path: '/formTriggerList/:formId'
}, {
  component: _AppForm.default,
  exact: true,
  path: '/appforms/:id',
  subject: 'appforms'
}, {
  component: _DynamicTableRenderer.default,
  exact: true,
  path: '/dynamicTable'
}, {
  component: _User.default,
  exact: true,
  path: '/users'
}, {
  component: _GraphiQlList.default,
  exact: true,
  path: '/graphiQlList'
}, {
  component: _GraphiQl.default,
  exact: true,
  path: '/graphiQl'
}, {
  component: _GraphiQl.default,
  exact: true,
  path: '/graphiQl/:id'
}, {
  component: _create.default,
  exact: true,
  path: '/emailTemplate'
}, {
  component: _create.default,
  exact: true,
  path: '/emailTemplate/:id'
}, {
  component: _EmailTemplate.default,
  exact: true,
  path: '/emailTemplateList'
}, {
  component: _NoMatch.default,
  subject: 'No Match'
}];
exports.routes = routes;

var LoggedInRoutes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoggedInRoutes, _React$Component);

  function LoggedInRoutes() {
    _classCallCheck(this, LoggedInRoutes);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoggedInRoutes).apply(this, arguments));
  }

  _createClass(LoggedInRoutes, [{
    key: "render",
    value: function render() {
      // const routes = [
      //   {
      //     component: Home,
      //     exact: true,
      //     path: '/'
      //   },
      //   {
      //     component: FormSchemaList,
      //     path: '/formschemalist'
      //   },
      //   {
      //     component: Admin,
      //     path: '/rolespermissions',
      //     subject: 'admin'
      //   },
      //   {
      //     component: FormBuilder,
      //     exact: true,
      //     path: '/formBuilder'
      //   },
      //   {
      //     component: FormBuilder,
      //     path: '/formBuilder/:id'
      //   },
      //   {
      //     component: FormRenderer,
      //     exact: true,
      //     path: '/formRenderer/:id/:pageType'
      //   },
      //   {
      //     component: FormRenderer,
      //     exact: true,
      //     path: '/formRenderer/:id/:submissionId/:pageType'
      //   },
      //   {
      //     component: FormTrigger,
      //     exact: true,
      //     path: '/formTrigger/:id'
      //   },
      //   {
      //     component: FormTrigger,
      //     exact: true,
      //     path: '/formTrigger/:id/:triggerId'
      //   },
      //   {
      //     component: FormDataList,
      //     exact: true,
      //     path: '/formdatalist/:formName/:formId'
      //   },
      //   {
      //     component: FormTriggerList,
      //     exact: true,
      //     path: '/formTriggerList/:formId'
      //   },
      //   {
      //     component: AppForm,
      //     exact: true,
      //     path: '/appforms/:id',
      //     subject: 'appforms'
      //   },
      //   {
      //     component: DynamicTableRender,
      //     exact: true,
      //     path: '/dynamicTable'
      //   },
      //   {
      //     component: Users,
      //     exact: true,
      //     path: '/users'
      //   },
      //   {
      //     component: GraphiQlList,
      //     exact: true,
      //     path: '/graphiQlList'
      //   },
      //   {
      //     component: GraphiQl,
      //     exact: true,
      //     path: '/graphiQl'
      //   },
      //   {
      //     component: GraphiQl,
      //     exact: true,
      //     path: '/graphiQl/:id'
      //   },
      //   {
      //     component: EmailTemplate,
      //     exact: true,
      //     path: '/emailTemplate'
      //   },
      //   {
      //     component: EmailTemplate,
      //     exact: true,
      //     path: '/emailTemplate/:id'
      //   },
      //   {
      //     component: EmailTemplateList,
      //     exact: true,
      //     path: '/emailTemplateList'
      //   },
      //   {
      //     component: NoMatch,
      //     subject: 'No Match'
      //   }
      return React.createElement(_abilityContext.Can, {
        I: "read",
        a: "default"
      }, React.createElement(_reactRouter.Switch, null, routes.map(function (route, index) {
        return React.createElement(_reactRouter.Route, {
          key: index,
          exact: route.exact,
          path: route.path,
          render: function render(routeProps) {
            var SubjectComponent = route.subject ? _ability.default.can('read', route.subject) ? route.component : _NoMatch.default : route.component;
            return React.createElement(SubjectComponent, _extends({}, routeProps, {
              subject: route.subject
            }));
          }
        });
      })));
    }
  }]);

  return LoggedInRoutes;
}(React.Component);

exports.LoggedInRoutes = LoggedInRoutes;

var persistantRoutes = function persistantRoutes() {
  return React.createElement(_reactRouter.Switch, null, React.createElement(_reactRouter.Route, {
    component: _Login.default
  }));
};

exports.persistantRoutes = persistantRoutes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInJvdXRlcyIsImNvbXBvbmVudCIsIkhvbWUiLCJleGFjdCIsInBhdGgiLCJGb3JtU2NoZW1hTGlzdCIsIkFkbWluIiwic3ViamVjdCIsIkZvcm1CdWlsZGVyIiwiRm9ybVJlbmRlcmVyIiwiRm9ybVRyaWdnZXIiLCJGb3JtRGF0YUxpc3QiLCJGb3JtVHJpZ2dlckxpc3QiLCJBcHBGb3JtIiwiRHluYW1pY1RhYmxlUmVuZGVyIiwiVXNlcnMiLCJHcmFwaGlRbExpc3QiLCJHcmFwaGlRbCIsIkVtYWlsVGVtcGxhdGUiLCJFbWFpbFRlbXBsYXRlTGlzdCIsIk5vTWF0Y2giLCJMb2dnZWRJblJvdXRlcyIsIm1hcCIsInJvdXRlIiwiaW5kZXgiLCJyb3V0ZVByb3BzIiwiU3ViamVjdENvbXBvbmVudCIsImFiaWxpdHkiLCJjYW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsInBlcnNpc3RhbnRSb3V0ZXMiLCJMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLE1BQU0sR0FBRyxDQUNwQjtBQUNFQyxFQUFBQSxTQUFTLEVBQUVDLGFBRGI7QUFFRUMsRUFBQUEsS0FBSyxFQUFFLElBRlQ7QUFHRUMsRUFBQUEsSUFBSSxFQUFFO0FBSFIsQ0FEb0IsRUFNcEI7QUFDRUgsRUFBQUEsU0FBUyxFQUFFSSx1QkFEYjtBQUVFRCxFQUFBQSxJQUFJLEVBQUU7QUFGUixDQU5vQixFQVVwQjtBQUNFSCxFQUFBQSxTQUFTLEVBQUVLLGNBRGI7QUFFRUYsRUFBQUEsSUFBSSxFQUFFLG1CQUZSO0FBR0VHLEVBQUFBLE9BQU8sRUFBRTtB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Z0IsS0FBSyxDQUFDdEIsU0FBM0MsR0FBdURtQixnQkFBeEUsR0FBbUZHLEtBQUssQ0FBQ3RCLFNBQXZIO0FBQ0EsbUJBQU8sb0JBQUMsZ0JBQUQsZUFBc0J3QixVQUF0QixFQUFzQztBQUFFbEIsY0FBQUEsT0FBTyxFQUFFZ0IsS0FBSyxDQUFDaEI7QUFBakIsYUFBdEMsRUFBUDtBQUNEO0FBTkgsVUFERjtBQVVELE9BWEEsQ0FESCxDQURGLENBREY7QUFrQkQ7Ozs7RUE3SGlDc0IsS0FBSyxDQUFDQyxTOzs7O0FBZ0luQyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsU0FDOUIsb0JBQUMsbUJBQUQsUUFDRSxvQkFBQyxrQkFBRDtBQUFPLElBQUEsU0FBUyxFQUFFQztBQUFsQixJQURGLENBRDhCO0FBQUEsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBhYmlsaXR5IGZyb20gJy4uL2FiaWxpdHknO1xuaW1wb3J0IHsgQ2FuIH0gZnJvbSAnLi4vYWJpbGl0eS1jb250ZXh0JztcbmltcG9ydCBBZG1pbiBmcm9tICcuLi9wYWdlcy9BZG1pbic7XG5pbXBvcnQgQXBwRm9ybSBmcm9tICcuLi9wYWdlcy9BcHBGb3JtJztcbmltcG9ydCBEeW5hbWljVGFibGVSZW5kZXIgZnJvbSAnLi4vcGFnZXMvRHluYW1pY1RhYmxlUmVuZGVyZXInO1xuaW1wb3J0IEVtYWlsVGVtcGxhdGVMaXN0IGZyb20gJy4uL3BhZ2VzL0VtYWlsVGVtcGxhdGUvJztcbmltcG9ydCBFbWFpbFRlbXBsYXRlIGZyb20gJy4uL3BhZ2VzL0VtYWlsVGVtcGxhdGUvY3JlYXRlJztcbmltcG9ydCBGb3JtQnVpbGRlciBmcm9tICcuLi9wYWdlcy9Gb3JtQnVpbGRlcic7XG5pbXBvcnQgRm9ybURhdGFMaXN0IGZyb20gJy4uL3BhZ2VzL0Zvcm1EYXRhTGlzdCc7XG5pbXBvcnQgRm9ybVJlbmRlcmVyIGZyb20gJy4uL3BhZ2VzL0Zvcm1SZW5kZXJlcic7XG5pbXBvcnQgRm9ybVNjaGVtYUxpc3QgZnJvbSAnLi4vcGFnZXMvRm9ybVNjaGVtYUxpc3QnO1xuaW1wb3J0IEZvcm1UcmlnZ2VyIGZyb20gJy4uL3BhZ2VzL0Zvcm1UcmlnZ2VyJztcbmltcG9ydCBGb3JtVHJpZ2dlckxpc3QgZnJvbSAnLi4vcGFnZXMvRm9ybVRyaWdnZXJMaXN0JztcbmltcG9ydCBHcmFwaGlRbCBmcm9tICcuLi9wYWdlcy9HcmFwaGlRbCc7XG5pbXBvcnQgR3JhcGhpUWxMaXN0IGZyb20gJy4uL3BhZ2VzL0dyYXBoaVFsTGlzdCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9wYWdlcy9Ib21lJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9wYWdlcy9Mb2dpbic7XG5pbXBvcnQgTm9NYXRjaCBmcm9tICcuLi9wYWdlcy9Ob01hdGNoJztcbmltcG9ydCBVc2VycyBmcm9tICcuLi9wYWdlcy9Vc2VyJztcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBwYXRoOiAnLydcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogRm9ybVNjaGVtYUxpc3QsXG4gICAgcGF0aDogJy9mb3Jtc2NoZW1hbGlzdCdcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogQWRtaW4sXG4gICAgcGF0aDogJy9yb2xlc3Blcm1pc3Npb25zJyxcbiAgICBzdWJqZWN0OiAnYWRtaW4nXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IEZvcm1CdWlsZGVyLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvZm9ybUJ1aWxkZXInXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IEZvcm1CdWlsZGVyLFxuICAgIHBhdGg6ICcvZm9ybUJ1aWxkZXIvOmlkJ1xuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBGb3JtUmVuZGVyZXIsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgcGF0aDogJy9mb3JtUmVuZGVyZXIvOmlkLzpwYWdlVHlwZSdcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogRm9ybVJlbmRlcmVyLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvZm9ybVJlbmRlcmVyLzppZC86c3VibWlzc2lvbklkLzpwYWdlVHlwZSdcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogRm9ybVRyaWdnZXIsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgcGF0aDogJy9mb3JtVHJpZ2dlci86aWQnXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IEZvcm1UcmlnZ2VyLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvZm9ybVRyaWdnZXIvOmlkLzp0cmlnZ2VySWQnXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IEZvcm1EYXRhTGlzdCxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBwYXRoOiAnL2Zvcm1kYXRhbGlzdC86Zm9ybU5hbWUvOmZvcm1JZCdcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogRm9ybVRyaWdnZXJMaXN0LFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvZm9ybVRyaWdnZXJMaXN0Lzpmb3JtSWQnXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IEFwcEZvcm0sXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgcGF0aDogJy9hcHBmb3Jtcy86aWQnLFxuICAgIHN1YmplY3Q6ICdhcHBmb3JtcydcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogRHluYW1pY1RhYmxlUmVuZGVyLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvZHluYW1pY1RhYmxlJ1xuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBVc2VycyxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBwYXRoOiAnL3VzZXJzJ1xuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBHcmFwaGlRbExpc3QsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgcGF0aDogJy9ncmFwaGlRbExpc3QnXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IEdyYXBoaVFsLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvZ3JhcGhpUWwnXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IEdyYXBoaVFsLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvZ3JhcGhpUWwvOmlkJ1xuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBFbWFpbFRlbXBsYXRlLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvZW1haWxUZW1wbGF0ZSdcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogRW1haWxUZW1wbGF0ZSxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBwYXRoOiAnL2VtYWlsVGVtcGxhdGUvOmlkJ1xuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBFbWFpbFRlbXBsYXRlTGlzdCxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBwYXRoOiAnL2VtYWlsVGVtcGxhdGVMaXN0J1xuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBOb01hdGNoLFxuICAgIHN1YmplY3Q6ICdObyBNYXRjaCdcbiAgfVxuXTtcblxuZXhwb3J0IGNsYXNzIExvZ2dlZEluUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdCByb3V0ZXMgPSBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICAvLyAgICAgZXhhY3Q6IHRydWUsXG4gICAgLy8gICAgIHBhdGg6ICcvJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBGb3JtU2NoZW1hTGlzdCxcbiAgICAvLyAgICAgcGF0aDogJy9mb3Jtc2NoZW1hbGlzdCdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogQWRtaW4sXG4gICAgLy8gICAgIHBhdGg6ICcvcm9sZXNwZXJtaXNzaW9ucycsXG4gICAgLy8gICAgIHN1YmplY3Q6ICdhZG1pbidcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogRm9ybUJ1aWxkZXIsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL2Zvcm1CdWlsZGVyJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBGb3JtQnVpbGRlcixcbiAgICAvLyAgICAgcGF0aDogJy9mb3JtQnVpbGRlci86aWQnXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBjb21wb25lbnQ6IEZvcm1SZW5kZXJlcixcbiAgICAvLyAgICAgZXhhY3Q6IHRydWUsXG4gICAgLy8gICAgIHBhdGg6ICcvZm9ybVJlbmRlcmVyLzppZC86cGFnZVR5cGUnXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBjb21wb25lbnQ6IEZvcm1SZW5kZXJlcixcbiAgICAvLyAgICAgZXhhY3Q6IHRydWUsXG4gICAgLy8gICAgIHBhdGg6ICcvZm9ybVJlbmRlcmVyLzppZC86c3VibWlzc2lvbklkLzpwYWdlVHlwZSdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogRm9ybVRyaWdnZXIsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL2Zvcm1UcmlnZ2VyLzppZCdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogRm9ybVRyaWdnZXIsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL2Zvcm1UcmlnZ2VyLzppZC86dHJpZ2dlcklkJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBGb3JtRGF0YUxpc3QsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL2Zvcm1kYXRhbGlzdC86Zm9ybU5hbWUvOmZvcm1JZCdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogRm9ybVRyaWdnZXJMaXN0LFxuICAgIC8vICAgICBleGFjdDogdHJ1ZSxcbiAgICAvLyAgICAgcGF0aDogJy9mb3JtVHJpZ2dlckxpc3QvOmZvcm1JZCdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogQXBwRm9ybSxcbiAgICAvLyAgICAgZXhhY3Q6IHRydWUsXG4gICAgLy8gICAgIHBhdGg6ICcvYXBwZm9ybXMvOmlkJyxcbiAgICAvLyAgICAgc3ViamVjdDogJ2FwcGZvcm1zJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBEeW5hbWljVGFibGVSZW5kZXIsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL2R5bmFtaWNUYWJsZSdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogVXNlcnMsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL3VzZXJzJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBHcmFwaGlRbExpc3QsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL2dyYXBoaVFsTGlzdCdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogR3JhcGhpUWwsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL2dyYXBoaVFsJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBHcmFwaGlRbCxcbiAgICAvLyAgICAgZXhhY3Q6IHRydWUsXG4gICAgLy8gICAgIHBhdGg6ICcvZ3JhcGhpUWwvOmlkJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBFbWFpbFRlbXBsYXRlLFxuICAgIC8vICAgICBleGFjdDogdHJ1ZSxcbiAgICAvLyAgICAgcGF0aDogJy9lbWFpbFRlbXBsYXRlJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBFbWFpbFRlbXBsYXRlLFxuICAgIC8vICAgICBleGFjdDogdHJ1ZSxcbiAgICAvLyAgICAgcGF0aDogJy9lbWFpbFRlbXBsYXRlLzppZCdcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNvbXBvbmVudDogRW1haWxUZW1wbGF0ZUxpc3QsXG4gICAgLy8gICAgIGV4YWN0OiB0cnVlLFxuICAgIC8vICAgICBwYXRoOiAnL2VtYWlsVGVtcGxhdGVMaXN0J1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgY29tcG9uZW50OiBOb01hdGNoLFxuICAgIC8vICAgICBzdWJqZWN0OiAnTm8gTWF0Y2gnXG4gICAgLy8gICB9XG4gICAgLy8gXTtcbiAgICByZXR1cm4gKFxuICAgICAgPENhbiBJPVwicmVhZFwiIGE9XCJkZWZhdWx0XCI+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAge3JvdXRlcy5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFJvdXRlIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgZXhhY3Q9e3JvdXRlLmV4YWN0fVxuICAgICAgICAgICAgICAgIHBhdGg9e3JvdXRlLnBhdGh9XG4gICAgICAgICAgICAgICAgcmVuZGVyPXsocm91dGVQcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgU3ViamVjdENvbXBvbmVudDogYW55ID0gcm91dGUuc3ViamVjdCA/IChhYmlsaXR5LmNhbigncmVhZCcsIHJvdXRlLnN1YmplY3QpID8gcm91dGUuY29tcG9uZW50IDogTm9NYXRjaCkgOiByb3V0ZS5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPFN1YmplY3RDb21wb25lbnQgey4uLnJvdXRlUHJvcHN9IHsuLi57IHN1YmplY3Q6IHJvdXRlLnN1YmplY3QgfX0gLz47XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9DYW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGVyc2lzdGFudFJvdXRlcyA9ICgpID0+IChcbiAgPFN3aXRjaD5cbiAgICA8Um91dGUgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgPC9Td2l0Y2g+XG4pO1xuXG4iXX0=