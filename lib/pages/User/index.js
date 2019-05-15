"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _abilityContext = require("../../ability-context");

var _user = require("../../actions/user");

var _Table = _interopRequireDefault(require("../../components/Table"));

var _Column = _interopRequireDefault(require("../../components/Table/Column"));

var _application = require("../../constants/application.properties");

var _CButton = _interopRequireDefault(require("../../components/Button/CButton"));

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

var Users =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users(props) {
    var _this;

    _classCallCheck(this, Users);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Users).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "createNewUser", function () {
      // tslint:disable-next-line:no-console
      _this.props.history.push('/appforms/user');

      console.log('Called');
    });

    _this.state = {
      columns: [new _Column.default().withKey('_id').withLabel('ID'), new _Column.default().withKey('first_name').withLabel('Name'), new _Column.default().withKey('email').withLabel('Email'), new _Column.default().withKey('username').withLabel('UserName')],
      requestFilter: {
        currentPage: 0,
        limit: _application.AppProperties.TABLE_PROPS.LIMIT,
        sortField: '',
        sortOrder: 0
      }
    };
    return _this;
  }

  _createClass(Users, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers(this.state.requestFilter);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          loading = _this$props.loading,
          users = _this$props.users,
          total = _this$props.total;
      return React.createElement("div", {
        className: "shadow-container"
      }, React.createElement(_abilityContext.Can, {
        I: "read",
        a: "admin"
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement(_CButton.default, {
        className: "btn btn-primary pull-right mb-2",
        onClick: function onClick() {
          return _this2.createNewUser();
        },
        name: "Create New User"
      }))), React.createElement(_Table.default, {
        keyField: "_id",
        data: users || [],
        columns: this.state.columns,
        loading: loading || false,
        length: length || 10,
        total: total || 0,
        remote: true,
        onUpdate: function onUpdate(nextState) {
          var currentPage = nextState.currentPage,
              length = nextState.length,
              sortField = nextState.sortField,
              sortOrder = nextState.sortOrder;

          _this2.props.fetchUsers({
            currentPage: currentPage,
            length: length,
            sortField: sortField,
            sortOrder: sortOrder
          });
        }
      }));
    }
  }]);

  return Users;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.user.loading,
    total: state.user.users.length,
    users: state.user.users
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: function fetchUsers(requestFilter) {
      return dispatch((0, _user.fetchUsers)(requestFilter));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Users);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Vc2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwiaGlzdG9yeSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJjb2x1bW5zIiwiQ29sdW1uIiwid2l0aEtleSIsIndpdGhMYWJlbCIsInJlcXVlc3RGaWx0ZXIiLCJjdXJyZW50UGFnZSIsImxpbWl0IiwiQXBwUHJvcGVydGllcyIsIlRBQkxFX1BST1BTIiwiTElNSVQiLCJzb3J0RmllbGQiLCJzb3J0T3JkZXIiLCJmZXRjaFVzZXJzIiwibG9hZGluZyIsInVzZXJzIiwidG90YWwiLCJjcmVhdGVOZXdVc2VyIiwibGVuZ3RoIiwibmV4dFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFXTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUErQjtBQUFBOztBQUFBOztBQUM3QiwrRUFBTUEsS0FBTjs7QUFENkIsb0VBb0RQLFlBQWE7QUFDbkM7QUFDQSxZQUFLQSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLGdCQUF4Qjs7QUFDQUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNELEtBeEQ4Qjs7QUFFN0IsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLE9BQU8sRUFBRSxDQUNQLElBQUlDLGVBQUosR0FBYUMsT0FBYixDQUFxQixLQUFyQixFQUE0QkMsU0FBNUIsQ0FBc0MsSUFBdEMsQ0FETyxFQUVQLElBQUlGLGVBQUosR0FBYUMsT0FBYixDQUFxQixZQUFyQixFQUFtQ0MsU0FBbkMsQ0FBNkMsTUFBN0MsQ0FGTyxFQUdQLElBQUlGLGVBQUosR0FBYUMsT0FBYixDQUFxQixPQUFyQixFQUE4QkMsU0FBOUIsQ0FBd0MsT0FBeEMsQ0FITyxFQUlQLElBQUlGLGVBQUosR0FBYUMsT0FBYixDQUFxQixVQUFyQixFQUFpQ0MsU0FBakMsQ0FBMkMsVUFBM0MsQ0FKTyxDQURFO0FBT1hDLE1BQUFBLGFBQWEsRUFBRTtBQUNiQyxRQUFBQSxXQUFXLEVBQUUsQ0FEQTtBQUViQyxRQUFBQSxLQUFLLEVBQUVDLDJCQUFjQyxXQUFkLENBQTBCQyxLQUZwQjtBQUdiQyxRQUFBQSxTQUFTLEVBQUUsRUFIRTtBQUliQyxRQUFBQSxTQUFTLEVBQUU7QUFKRTtBQVBKLEtBQWI7QUFGNkI7QUFnQjlCOzs7O3dDQUUwQjtBQUN6QixXQUFLakIsS0FBTCxDQUFXa0IsVUFBWCxDQUFzQixLQUFLYixLQUFMLENBQVdLLGFBQWpDO0FBQ0Q7Ozs2QkFFZTtBQUFBOztBQUFBLHdCQUNvQixLQUFLVixLQUR6QjtBQUFBLFVBQ05tQixPQURNLGVBQ05BLE9BRE07QUFBQSxVQUNHQyxLQURILGVBQ0dBLEtBREg7QUFBQSxVQUNVQyxLQURWLGVBQ1VBLEtBRFY7QUFFZCxhQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLG9CQUFDLG1CQUFEO0FBQUssUUFBQSxDQUFDLEVBQUMsTUFBUDtBQUFjLFFBQUEsQ0FBQyxFQUFDO0FBQWhCLFNBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0Usb0JBQUMsZ0JBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBQyxpQ0FEWjtBQUVFLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDQyxhQUFMLEVBQU47QUFBQSxTQUZYO0FBR0UsUUFBQSxJQUFJLEVBQUM7QUFIUCxRQURGLENBREYsQ0FERixFQVVFLG9CQUFDLGNBQUQ7QUFDRSxRQUFBLFFBQVEsRUFBQyxLQURYO0FBRUUsUUFBQSxJQUFJLEVBQUVGLEtBQUssSUFBSSxFQUZqQjtBQUdFLFFBQUEsT0FBTyxFQUFFLEtBQUtmLEtBQUwsQ0FBV0MsT0FIdEI7QUFJRSxRQUFBLE9BQU8sRUFBRWEsT0FBTyxJQUFJLEtBSnRCO0FBS0UsUUFBQSxNQUFNLEVBQUVJLE1BQU0sSUFBSSxFQUxwQjtBQU1FLFFBQUEsS0FBSyxFQUFFRixLQUFLLElBQUksQ0FObEI7QUFPRSxRQUFBLE1BQU0sRUFBRSxJQVBWO0FBUUUsUUFBQSxRQUFRLEVBQUUsa0JBQUNHLFNBQUQsRUFBa0M7QUFBQSxjQUNsQ2IsV0FEa0MsR0FDWWEsU0FEWixDQUNsQ2IsV0FEa0M7QUFBQSxjQUNyQlksTUFEcUIsR0FDWUMsU0FEWixDQUNyQkQsTUFEcUI7QUFBQSxjQUNiUCxTQURhLEdBQ1lRLFNBRFosQ0FDYlIsU0FEYTtBQUFBLGNBQ0ZDLFNBREUsR0FDWU8sU0FEWixDQUNGUCxTQURFOztBQUUxQyxVQUFBLE1BQUksQ0FBQ2pCLEtBQUwsQ0FBV2tCLFVBQVgsQ0FBc0I7QUFBRVAsWUFBQUEsV0FBVyxFQUFYQSxXQUFGO0FBQWVZLFlBQUFBLE1BQU0sRUFBTkEsTUFBZjtBQUF1QlAsWUFBQUEsU0FBUyxFQUFUQSxTQUF2QjtBQUFrQ0MsWUFBQUEsU0FBUyxFQUFUQTtBQUFsQyxXQUF0QjtBQUNEO0FBWEgsUUFWRixDQURGO0FBMEJEOzs7O0VBbkRpQlEsS0FBSyxDQUFDQyxTOztBQTREMUIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdEIsS0FBRDtBQUFBLFNBQWlDO0FBQ3ZEYyxJQUFBQSxPQUFPLEVBQUVkLEtBQUssQ0FBQ3VCLElBQU4sQ0FBV1QsT0FEbUM7QUFFdkRFLElBQUFBLEtBQUssRUFBRWhCLEtBQUssQ0FBQ3VCLElBQU4sQ0FBV1IsS0FBWCxDQUFpQkcsTUFGK0I7QUFHdkRILElBQUFBLEtBQUssRUFBRWYsS0FBSyxDQUFDdUIsSUFBTixDQUFXUjtBQUhxQyxHQUFqQztBQUFBLENBQXhCOztBQU1BLElBQU1TLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQW9CO0FBQzdDWixJQUFBQSxVQUFVLEVBQUUsb0JBQUNSLGFBQUQ7QUFBQSxhQUNWb0IsUUFBUSxDQUFDLHNCQUFXcEIsYUFBWCxDQUFELENBREU7QUFBQTtBQURpQyxHQUFwQjtBQUFBLENBQTNCOztlQWVlLHlCQUNiaUIsZUFEYSxFQUViRSxrQkFGYSxFQUdiOUIsS0FIYSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IElSZXF1ZXN0RmlsdGVyIH0gZnJvbSAncmVxdWVzdC1maWx0ZXInO1xuaW1wb3J0IHsgQ2FuIH0gZnJvbSAnLi4vLi4vYWJpbGl0eS1jb250ZXh0JztcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3VzZXInO1xuaW1wb3J0IFRhYmxlLCB7IElUYWJsZVVwZGF0ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGUvQ29sdW1uJztcbmltcG9ydCB7IEFwcFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYXBwbGljYXRpb24ucHJvcGVydGllcyc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgQ0J1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uJztcblxuaW50ZXJmYWNlIElVc2VyUHJvcHMgZXh0ZW5kcyBJU3RhdGVQcm9wcywgSURpc3BhdGNoUHJvcHN7XG4gIGhpc3Rvcnk6IGFueVxufVxuXG5pbnRlcmZhY2UgSVVzZXJTdGF0ZSB7XG4gIGNvbHVtbnM6IENvbHVtbltdO1xuICByZXF1ZXN0RmlsdGVyOiBJUmVxdWVzdEZpbHRlclxufVxuXG5jbGFzcyBVc2VycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVXNlclByb3BzLCBJVXNlclN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVXNlclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb2x1bW5zOiBbXG4gICAgICAgIG5ldyBDb2x1bW4oKS53aXRoS2V5KCdfaWQnKS53aXRoTGFiZWwoJ0lEJyksXG4gICAgICAgIG5ldyBDb2x1bW4oKS53aXRoS2V5KCdmaXJzdF9uYW1lJykud2l0aExhYmVsKCdOYW1lJyksXG4gICAgICAgIG5ldyBDb2x1bW4oKS53aXRoS2V5KCdlbWFpbCcpLndpdGhMYWJlbCgnRW1haWwnKSxcbiAgICAgICAgbmV3IENvbHVtbigpLndpdGhLZXkoJ3VzZXJuYW1lJykud2l0aExhYmVsKCdVc2VyTmFtZScpXG4gICAgICBdLFxuICAgICAgcmVxdWVzdEZpbHRlcjoge1xuICAgICAgICBjdXJyZW50UGFnZTogMCxcbiAgICAgICAgbGltaXQ6IEFwcFByb3BlcnRpZXMuVEFCTEVfUFJPUFMuTElNSVQsXG4gICAgICAgIHNvcnRGaWVsZDogJycsXG4gICAgICAgIHNvcnRPcmRlcjogMFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaFVzZXJzKHRoaXMuc3RhdGUucmVxdWVzdEZpbHRlcik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgdXNlcnMsIHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgPENhbiBJPVwicmVhZFwiIGE9XCJhZG1pblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPENCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHQgbWItMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3JlYXRlTmV3VXNlcigpfVxuICAgICAgICAgICAgICBuYW1lPVwiQ3JlYXRlIE5ldyBVc2VyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FuPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBrZXlGaWVsZD1cIl9pZFwiXG4gICAgICAgICAgZGF0YT17dXNlcnMgfHwgW119XG4gICAgICAgICAgY29sdW1ucz17dGhpcy5zdGF0ZS5jb2x1bW5zfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmcgfHwgZmFsc2V9XG4gICAgICAgICAgbGVuZ3RoPXtsZW5ndGggfHwgMTB9XG4gICAgICAgICAgdG90YWw9e3RvdGFsIHx8IDB9XG4gICAgICAgICAgcmVtb3RlPXt0cnVlfVxuICAgICAgICAgIG9uVXBkYXRlPXsobmV4dFN0YXRlOiBJVGFibGVVcGRhdGVQcm9wcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50UGFnZSwgbGVuZ3RoLCBzb3J0RmllbGQsIHNvcnRPcmRlciB9ID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFVzZXJzKHsgY3VycmVudFBhZ2UsIGxlbmd0aCwgc29ydEZpZWxkLCBzb3J0T3JkZXIgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU5ld1VzZXIgPSAoKSA6IHZvaWQgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9hcHBmb3Jtcy91c2VyJyk7XG4gICAgY29uc29sZS5sb2coJ0NhbGxlZCcpO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0YXRlKTogSVN0YXRlUHJvcHMgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUudXNlci5sb2FkaW5nLFxuICB0b3RhbDogc3RhdGUudXNlci51c2Vycy5sZW5ndGgsXG4gIHVzZXJzOiBzdGF0ZS51c2VyLnVzZXJzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBhbnkpID0+ICh7XG4gIGZldGNoVXNlcnM6IChyZXF1ZXN0RmlsdGVyOiBJUmVxdWVzdEZpbHRlcikgPT5cbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKHJlcXVlc3RGaWx0ZXIpKVxufSk7XG5cbmludGVyZmFjZSBJU3RhdGVQcm9wcyB7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHRvdGFsOiBudW1iZXI7XG4gIHVzZXJzOiBhbnlbXTtcbn1cblxuaW50ZXJmYWNlIElEaXNwYXRjaFByb3BzIHtcbiAgZmV0Y2hVc2VyczogKHJlcXVlc3RGaWx0ZXI6IElSZXF1ZXN0RmlsdGVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PElTdGF0ZVByb3BzLCBJRGlzcGF0Y2hQcm9wcywgSVVzZXJQcm9wcywgSVN0YXRlPihcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoVXNlcnMpO1xuIl19