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

var _components = require("../../components");

var _TicketComponent = _interopRequireDefault(require("../../components/HomeComponents/TicketComponent"));

var _Column = _interopRequireDefault(require("../../components/Table/Column"));

var _FormSchemaList = _interopRequireDefault(require("../FormSchemaList"));

require("./home.css");

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

var Home =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Home, _React$PureComponent);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    _this.state = {
      columns: [new _Column.default().withKey('id').withLabel('ID'), new _Column.default().withKey('name').withLabel('Name'), new _Column.default().withKey('phone').withLabel('Phone Number'), new _Column.default().withKey('company.name').withLabel('Company')]
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var activeLanguage = this.props.activeLanguage;
      return React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-lg-8 p-x-0"
      }, React.createElement(_components.Component1, null), React.createElement(_FormSchemaList.default, this.props), React.createElement("div", {
        className: "shadow-container"
      }, React.createElement("h3", null, "Home"), React.createElement("h3", null, "Active Language is ", activeLanguage ? activeLanguage.name : '', ' '), React.createElement("h3", null, React.createElement(_reactLocalizeRedux.Translate, {
        id: "greeting",
        data: {
          name: 'Idea PaaS'
        }
      })))), React.createElement("div", {
        className: "col-lg-4"
      }, React.createElement("div", {
        className: "shadow-container"
      }, React.createElement(_components.ResponsiveLineChart, null)), React.createElement(_TicketComponent.default, null)));
    }
  }]);

  return Home;
}(React.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.user.loading,
    users: state.user.users
  };
};

var _default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapStateToProps, null), _reactLocalizeRedux.withLocalize)(Home);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Ib21lL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJzdGF0ZSIsImNvbHVtbnMiLCJDb2x1bW4iLCJ3aXRoS2V5Iiwid2l0aExhYmVsIiwiYWN0aXZlTGFuZ3VhZ2UiLCJuYW1lIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibG9hZGluZyIsInVzZXIiLCJ1c2VycyIsIndpdGhSb3V0ZXIiLCJ3aXRoTG9jYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBYU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBMkI7QUFBQTs7QUFBQTs7QUFDekIsOEVBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLENBQ1AsSUFBSUMsZUFBSixHQUFhQyxPQUFiLENBQXFCLElBQXJCLEVBQTJCQyxTQUEzQixDQUFxQyxJQUFyQyxDQURPLEVBRVAsSUFBSUYsZUFBSixHQUFhQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCQyxTQUE3QixDQUF1QyxNQUF2QyxDQUZPLEVBR1AsSUFBSUYsZUFBSixHQUFhQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCQyxTQUE5QixDQUF3QyxjQUF4QyxDQUhPLEVBSVAsSUFBSUYsZUFBSixHQUFhQyxPQUFiLENBQXFCLGNBQXJCLEVBQXFDQyxTQUFyQyxDQUErQyxTQUEvQyxDQUpPO0FBREUsS0FBYjtBQUZ5QjtBQVUxQjs7Ozs2QkFFZTtBQUFBLFVBQ05DLGNBRE0sR0FDa0IsS0FBS04sS0FEdkIsQ0FDTk0sY0FETTtBQUVkLGFBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0Usb0JBQUMsc0JBQUQsT0FERixFQUVFLG9CQUFDLHVCQUFELEVBQW9CLEtBQUtOLEtBQXpCLENBRkYsRUFHRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRSx1Q0FERixFQUVFLHVEQUNzQk0sY0FBYyxHQUFHQSxjQUFjLENBQUNDLElBQWxCLEdBQXlCLEVBRDdELEVBQ2lFLEdBRGpFLENBRkYsRUFLRSxnQ0FDRSxvQkFBQyw2QkFBRDtBQUFXLFFBQUEsRUFBRSxFQUFDLFVBQWQ7QUFBeUIsUUFBQSxJQUFJLEVBQUU7QUFBRUEsVUFBQUEsSUFBSSxFQUFFO0FBQVI7QUFBL0IsUUFERixDQUxGLENBSEYsQ0FERixFQWNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLG9CQUFDLCtCQUFELE9BREYsQ0FERixFQUlFLG9CQUFDLHdCQUFELE9BSkYsQ0FkRixDQURGO0FBdUJEOzs7O0VBdENnQkMsS0FBSyxDQUFDQyxhOztBQXlDekIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDVCxLQUFEO0FBQUEsU0FBb0I7QUFDMUNVLElBQUFBLE9BQU8sRUFBRVYsS0FBSyxDQUFDVyxJQUFOLENBQVdELE9BRHNCO0FBRTFDRSxJQUFBQSxLQUFLLEVBQUVaLEtBQUssQ0FBQ1csSUFBTixDQUFXQztBQUZ3QixHQUFwQjtBQUFBLENBQXhCOztlQVVlLG9CQUNiQyx1QkFEYSxFQUViLHlCQUNFSixlQURGLEVBRUUsSUFGRixDQUZhLEVBTWJLLGdDQU5hLEVBT2JoQixJQVBhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBMYW5ndWFnZSxcbiAgTG9jYWxpemVDb250ZXh0UHJvcHMsXG4gIFRyYW5zbGF0ZSxcbiAgd2l0aExvY2FsaXplXG59IGZyb20gJ3JlYWN0LWxvY2FsaXplLXJlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBDb21wb25lbnQxLCBSZXNwb25zaXZlTGluZUNoYXJ0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgVGlja2V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudHMvVGlja2V0Q29tcG9uZW50JztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZS9Db2x1bW4nO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMnO1xuXG5pbXBvcnQgRm9ybVNjaGVtYUxpc3QgZnJvbSAnLi4vRm9ybVNjaGVtYUxpc3QnO1xuaW1wb3J0ICcuL2hvbWUuY3NzJztcblxuaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIExvY2FsaXplQ29udGV4dFByb3BzLCBSb3V0ZUNvbXBvbmVudFByb3BzIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgYWN0aXZlTGFuZ3VhZ2U6IExhbmd1YWdlO1xuICB1c2Vyczogb2JqZWN0W107XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJSG9tZVN0YXRlIHtcbiAgY29sdW1uczogQ29sdW1uW107XG59XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSUhvbWVTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIG5ldyBDb2x1bW4oKS53aXRoS2V5KCdpZCcpLndpdGhMYWJlbCgnSUQnKSxcbiAgICAgICAgbmV3IENvbHVtbigpLndpdGhLZXkoJ25hbWUnKS53aXRoTGFiZWwoJ05hbWUnKSxcbiAgICAgICAgbmV3IENvbHVtbigpLndpdGhLZXkoJ3Bob25lJykud2l0aExhYmVsKCdQaG9uZSBOdW1iZXInKSxcbiAgICAgICAgbmV3IENvbHVtbigpLndpdGhLZXkoJ2NvbXBhbnkubmFtZScpLndpdGhMYWJlbCgnQ29tcGFueScpXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVMYW5ndWFnZSB9OiBhbnkgPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IHAteC0wXCI+XG4gICAgICAgICAgPENvbXBvbmVudDEgLz5cbiAgICAgICAgICA8Rm9ybVNjaGVtYUxpc3Qgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMz5Ib21lPC9oMz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgQWN0aXZlIExhbmd1YWdlIGlzIHthY3RpdmVMYW5ndWFnZSA/IGFjdGl2ZUxhbmd1YWdlLm5hbWUgOiAnJ317JyAnfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBpZD1cImdyZWV0aW5nXCIgZGF0YT17eyBuYW1lOiAnSWRlYSBQYWFTJyB9fSAvPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxSZXNwb25zaXZlTGluZUNoYXJ0IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFRpY2tldC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUudXNlci5sb2FkaW5nLFxuICB1c2Vyczogc3RhdGUudXNlci51c2Vyc1xufSk7XG5cbmludGVyZmFjZSBJU3RhdGVQcm9wcyB7XG4gIHVzZXJzOiBhbnlbXTtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbiAgY29ubmVjdDxJU3RhdGVQcm9wcywgbnVsbCwgSVByb3BzLCBJU3RhdGU+KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBudWxsXG4gICksXG4gIHdpdGhMb2NhbGl6ZVxuKShIb21lKTtcbiJdfQ==