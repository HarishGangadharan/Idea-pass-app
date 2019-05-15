"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var permissions = ['can', 'cannot', 'created_by'];

var RoleSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RoleSelector, _React$Component);

  _createClass(RoleSelector, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, nextState) {
      switch (nextProps.mode) {
        case 'read':
          return null;

        case 'create':
          return null;

        case 'manage':
          return null;

        case 'update':
          switch (nextProps.permissions[nextProps.rowIndex].permission.create.action) {
            case 'can':
              return {
                availablePermissions: permissions
              };

            case 'cannot':
              return {
                availablePermissions: ['cannot', 'created_by']
              };

            case 'created_by':
              return {
                availablePermissions: ['created_by']
              };

            default:
              return null;
          }

        case 'delete':
          switch (nextProps.permissions[nextProps.rowIndex].permission.create.action) {
            case 'can':
              return {
                availablePermissions: permissions
              };

            case 'cannot':
              return {
                availablePermissions: ['cannot', 'created_by']
              };

            case 'created_by':
              return {
                availablePermissions: ['created_by']
              };

            default:
              return null;
          }

        default:
          return null;
      }
    }
  }]);

  function RoleSelector(props) {
    var _this;

    _classCallCheck(this, RoleSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RoleSelector).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "constructPermission", function (value, data, mode) {
      var ruleTypes = [];

      if (mode === 'create') {
        ruleTypes = ['delete', 'update'];
      }

      var permission = _defineProperty({}, _this.props.mode, _objectSpread({}, data.permission[_this.props.mode], {
        action: value
      }));

      ruleTypes.forEach(function (type) {
        permission[type] = _objectSpread({}, data.permission[type], {
          action: value
        });
      });
      return permission;
    });

    _defineProperty(_assertThisInitialized(_this), "getChangedPermissions", function (value, data, updatedPermissions, mode, row) {
      // @ts-ignore
      var index = _lodash.default.findIndex(updatedPermissions, {
        role_id: row.role_id
      });

      if (index > -1) {
        if (mode === 'create') {
          updatedPermissions[index].permission = _this.constructPermission(value, data, mode);
        } else {
          updatedPermissions[index].permission[mode] = _objectSpread({}, data.permission[mode], {
            action: value
          });
        }
      } else {
        updatedPermissions.push({
          name: data.name,
          permission: mode === 'create' ? _this.constructPermission(value, data, mode) : _defineProperty({}, mode, _objectSpread({}, data.permission[mode], {
            action: value
          })),
          role_id: row.role_id
        });
      }

      return updatedPermissions;
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e, row, rowIndex) {
      var data = _this.props.permissions[rowIndex];
      var mode = _this.props.mode;
      var updatedPermissions = _this.props.updatedPermissions;
      updatedPermissions = _this.getChangedPermissions(e.target.value, data, updatedPermissions, mode, row);
      var newPermissions = {
        name: data.name,
        permission: Object.assign({}, data.permission, _defineProperty({}, mode, _objectSpread({}, data.permission[mode], {
          action: e.target.value
        })), mode === 'create' || mode === 'manage' ? _this.constructPermission(e.target.value, data, mode) : {}),
        role_id: row.role_id
      };

      var clonedObj = _lodash.default.cloneDeep(updatedPermissions);

      _lodash.default.merge(clonedObj, newPermissions.permission);

      _this.props.handleChangeEvent(newPermissions, updatedPermissions);
    });

    _this.state = {
      availablePermissions: permissions
    };
    return _this;
  }

  _createClass(RoleSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          rowData = _this$props.rowData,
          mode = _this$props.mode,
          rowIndex = _this$props.rowIndex;
      var availablePermissions = this.state.availablePermissions;
      var rule = rowData.permission[mode];
      return React.createElement("div", null, rule && React.createElement("select", {
        className: "form-control",
        value: rule.action,
        onChange: function onChange(e) {
          return _this2.onChange(e, rowData, rowIndex);
        }
      }, React.createElement("option", {
        value: ""
      }, "SELECT RULE"), availablePermissions.map(function (permission, i) {
        return React.createElement("option", {
          key: i,
          value: permission
        }, permission);
      })));
    }
    /**
     * Constructs permission object
     *
     * @param {string}
     * @param {any}
     * @param {string}
     *
     * @returns {object} with constructed permissions
     */

  }]);

  return RoleSelector;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    permissions: state.rolePermission.permissions,
    updatedPermissions: state.rolePermission.updatedPermissions
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(RoleSelector);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BZG1pbi9yb2xlU2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbInBlcm1pc3Npb25zIiwiUm9sZVNlbGVjdG9yIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwibW9kZSIsInJvd0luZGV4IiwicGVybWlzc2lvbiIsImNyZWF0ZSIsImFjdGlvbiIsImF2YWlsYWJsZVBlcm1pc3Npb25zIiwicHJvcHMiLCJ2YWx1ZSIsImRhdGEiLCJydWxlVHlwZXMiLCJmb3JFYWNoIiwidHlwZSIsInVwZGF0ZWRQZXJtaXNzaW9ucyIsInJvdyIsImluZGV4IiwiXyIsImZpbmRJbmRleCIsInJvbGVfaWQiLCJjb25zdHJ1Y3RQZXJtaXNzaW9uIiwicHVzaCIsIm5hbWUiLCJlIiwiZ2V0Q2hhbmdlZFBlcm1pc3Npb25zIiwidGFyZ2V0IiwibmV3UGVybWlzc2lvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJjbG9uZWRPYmoiLCJjbG9uZURlZXAiLCJtZXJnZSIsImhhbmRsZUNoYW5nZUV2ZW50Iiwic3RhdGUiLCJyb3dEYXRhIiwicnVsZSIsIm9uQ2hhbmdlIiwibWFwIiwiaSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwicm9sZVBlcm1pc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQixLQURrQixFQUVsQixRQUZrQixFQUdsQixZQUhrQixDQUFwQjs7SUFtQk1DLFk7Ozs7Ozs7NkNBQ21DQyxTLEVBQStCQyxTLEVBQStCO0FBQ25HLGNBQVFELFNBQVMsQ0FBQ0UsSUFBbEI7QUFDRSxhQUFLLE1BQUw7QUFDQSxpQkFBTyxJQUFQOztBQUNBLGFBQUssUUFBTDtBQUNFLGlCQUFPLElBQVA7O0FBQ0YsYUFBSyxRQUFMO0FBQ0UsaUJBQU8sSUFBUDs7QUFDRixhQUFLLFFBQUw7QUFDQSxrQkFBUUYsU0FB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QWQsRUFBaUJXLE9BQWpCLEVBQTBCL0IsUUFBMUIsQ0FBUDtBQUFBO0FBRlosU0FJQTtBQUFRLFFBQUEsS0FBSyxFQUFDO0FBQWQsdUJBSkEsRUFLQ0ksb0JBQW9CLENBQ2xCOEIsR0FERixDQUNNLFVBQUNqQyxVQUFELEVBQWtCa0MsQ0FBbEI7QUFBQSxlQUNIO0FBQVEsVUFBQSxHQUFHLEVBQUVBLENBQWI7QUFBZ0IsVUFBQSxLQUFLLEVBQUVsQztBQUF2QixXQUFvQ0EsVUFBcEMsQ0FERztBQUFBLE9BRE4sQ0FMRCxDQUZKLENBREY7QUFnQkQ7QUFFRDs7Ozs7Ozs7Ozs7OztFQXZGeUJtQyxLQUFLLENBQUNDLFM7O0FBd0xqQyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNSLEtBQUQ7QUFBQSxTQUFvQjtBQUMxQ25DLElBQUFBLFdBQVcsRUFBRW1DLEtBQUssQ0FBQ1MsY0FBTixDQUFxQjVDLFdBRFE7QUFFMUNnQixJQUFBQSxrQkFBa0IsRUFBRW1CLEtBQUssQ0FBQ1MsY0FBTixDQUFxQjVCO0FBRkMsR0FBcEI7QUFBQSxDQUF4Qjs7ZUFLZSx5QkFBUTJCLGVBQVIsRUFBeUIxQyxZQUF6QixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IElQZXJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcm9sZXBlcm1pc3Npb24nO1xuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBwZXJtaXNzaW9ucyA9IFtcbiAgJ2NhbicsXG4gICdjYW5ub3QnLFxuICAnY3JlYXRlZF9ieSdcbl07XG5cbmludGVyZmFjZSBJUm9sZVNlbGVjdG9yUHJvcHMge1xuICByb3dEYXRhOiBhbnksXG4gIHJvd0luZGV4PzogYW55LFxuICBtb2RlOiBzdHJpbmcsXG4gIGhhbmRsZUNoYW5nZUV2ZW50OiBhbnksXG4gIHBlcm1pc3Npb25zOiBJUGVybWlzc2lvbltdLFxuICB1cGRhdGVkUGVybWlzc2lvbnM6IGFueVtdXG59XG5cbmludGVyZmFjZSBJUm9sZVNlbGVjdG9yU3RhdGUge1xuICBhdmFpbGFibGVQZXJtaXNzaW9uczogc3RyaW5nW11cbn1cblxuY2xhc3MgUm9sZVNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElSb2xlU2VsZWN0b3JQcm9wcywgSVJvbGVTZWxlY3RvclN0YXRlPiB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wczogSVJvbGVTZWxlY3RvclByb3BzLCBuZXh0U3RhdGU6IElSb2xlU2VsZWN0b3JTdGF0ZSkge1xuICAgIHN3aXRjaCAobmV4dFByb3BzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ3JlYWQnOlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlICdjcmVhdGUnOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgJ21hbmFnZSc6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgY2FzZSAndXBkYXRlJzpcbiAgICAgIHN3aXRjaCAobmV4dFByb3BzLnBlcm1pc3Npb25zW25leHRQcm9wcy5yb3dJbmRleF0ucGVybWlzc2lvbi5jcmVhdGUuYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2Nhbic6XG4gICAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBhdmFpbGFibGVQZXJtaXNzaW9uczogcGVybWlzc2lvbnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnY2Fubm90JzpcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgYXZhaWxhYmxlUGVybWlzc2lvbnM6IFtcbiAgICAgICAgICAgICdjYW5ub3QnLFxuICAgICAgICAgICAgJ2NyZWF0ZWRfYnknXG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnY3JlYXRlZF9ieSc6XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgIGF2YWlsYWJsZVBlcm1pc3Npb25zOiBbXG4gICAgICAgICAgICAnY3JlYXRlZF9ieSdcbiAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICBzd2l0Y2ggKG5leHRQcm9wcy5wZXJtaXNzaW9uc1tuZXh0UHJvcHMucm93SW5kZXhdLnBlcm1pc3Npb24uY3JlYXRlLmFjdGlvbikge1xuICAgICAgICBjYXNlICdjYW4nOlxuICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgYXZhaWxhYmxlUGVybWlzc2lvbnM6IHBlcm1pc3Npb25zXG4gICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ2Nhbm5vdCc6XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgIGF2YWlsYWJsZVBlcm1pc3Npb25zOiBbXG4gICAgICAgICAgICAnY2Fubm90JyxcbiAgICAgICAgICAgICdjcmVhdGVkX2J5J1xuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ2NyZWF0ZWRfYnknOlxuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICBhdmFpbGFibGVQZXJtaXNzaW9uczogW1xuICAgICAgICAgICAgJ2NyZWF0ZWRfYnknXG4gICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVJvbGVTZWxlY3RvclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhdmFpbGFibGVQZXJtaXNzaW9uczogcGVybWlzc2lvbnNcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvd0RhdGEsIG1vZGUsIHJvd0luZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYXZhaWxhYmxlUGVybWlzc2lvbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcnVsZSA9IHJvd0RhdGEucGVybWlzc2lvblttb2RlXTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3J1bGUgJiZcbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB2YWx1ZT17cnVsZS5hY3Rpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSwgcm93RGF0YSwgcm93SW5kZXgpfVxuICAgICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U0VMRUNUIFJVTEU8L29wdGlvbj5cbiAgICAgICAgICB7YXZhaWxhYmxlUGVybWlzc2lvbnNcbiAgICAgICAgICAgIC5tYXAoKHBlcm1pc3Npb246IGFueSwgaTogc3RyaW5nIHwgbnVtYmVyKSA9PlxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e3Blcm1pc3Npb259PntwZXJtaXNzaW9ufTwvb3B0aW9uPilcbiAgICAgICAgICB9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0cyBwZXJtaXNzaW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ31cbiAgICogQHBhcmFtIHthbnl9XG4gICAqIEBwYXJhbSB7c3RyaW5nfVxuICAgKlxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSB3aXRoIGNvbnN0cnVjdGVkIHBlcm1pc3Npb25zXG4gICAqL1xuICBwcml2YXRlIGNvbnN0cnVjdFBlcm1pc3Npb24gPSAodmFsdWU6IHN0cmluZywgZGF0YTogYW55LCBtb2RlOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgcnVsZVR5cGVzOiBhbnlbXSA9IFtdO1xuICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xuICAgICAgcnVsZVR5cGVzID0gWydkZWxldGUnLCAndXBkYXRlJ107XG4gICAgfVxuICAgIGNvbnN0IHBlcm1pc3Npb24gPSB7XG4gICAgICBbdGhpcy5wcm9wcy5tb2RlXToge1xuICAgICAgICAuLi5kYXRhLnBlcm1pc3Npb25bdGhpcy5wcm9wcy5tb2RlXSxcbiAgICAgICAgYWN0aW9uOiB2YWx1ZVxuICAgICAgfVxuICAgIH07XG4gICAgcnVsZVR5cGVzLmZvckVhY2godHlwZSA9PiB7XG4gICAgICBwZXJtaXNzaW9uW3R5cGVdID0ge1xuICAgICAgICAuLi5kYXRhLnBlcm1pc3Npb25bdHlwZV0sXG4gICAgICAgIGFjdGlvbjogdmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHBlcm1pc3Npb247XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgdXBkYXRlZCBwZXJtaXNzaW9uIGZyb20gdGhlIHVzZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfVxuICAgKiBAcGFyYW0ge2FueX1cbiAgICogQHBhcmFtIHthbnl9XG4gICAqIEBwYXJhbSB7c3RyaW5nfVxuICAgKiBAcGFyYW0ge2FueX1cbiAgICpcbiAgICogQHJldHVybnMge0FycmF5fSBvZiBwZXJtaXNzaW9ucyB3aXRoIHJlc3BlY3QgdG8gdXNlciByb2xlc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRDaGFuZ2VkUGVybWlzc2lvbnMgPSAodmFsdWU6IHN0cmluZywgZGF0YTogYW55LCB1cGRhdGVkUGVybWlzc2lvbnM6IGFueSwgbW9kZTogc3RyaW5nLCByb3c6IGFueSkgPT4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBpbmRleCA9IF8uZmluZEluZGV4KHVwZGF0ZWRQZXJtaXNzaW9ucywgeyByb2xlX2lkOiByb3cucm9sZV9pZCB9KTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICAgIHVwZGF0ZWRQZXJtaXNzaW9uc1tpbmRleF0ucGVybWlzc2lvbiA9IHRoaXMuY29uc3RydWN0UGVybWlzc2lvbih2YWx1ZSwgZGF0YSwgbW9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVkUGVybWlzc2lvbnNbaW5kZXhdLnBlcm1pc3Npb25bbW9kZV0gPSB7XG4gICAgICAgICAgLi4uZGF0YS5wZXJtaXNzaW9uW21vZGVdLFxuICAgICAgICAgIGFjdGlvbjogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlZFBlcm1pc3Npb25zLnB1c2goe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBlcm1pc3Npb246IChtb2RlID09PSAnY3JlYXRlJykgPyB0aGlzLmNvbnN0cnVjdFBlcm1pc3Npb24odmFsdWUsIGRhdGEsIG1vZGUpIDoge1xuICAgICAgICAgIFttb2RlXToge1xuICAgICAgICAgICAgLi4uZGF0YS5wZXJtaXNzaW9uW21vZGVdLFxuICAgICAgICAgICAgYWN0aW9uOiB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcm9sZV9pZDogcm93LnJvbGVfaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlZFBlcm1pc3Npb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb24gY2hhbmdlIG9mIGRyb3Bkb3duc1xuICAgKlxuICAgKiBAcGFyYW0ge2FueX1cbiAgICogQHBhcmFtIHtJUGVybWlzc2lvbn1cbiAgICogQHBhcmFtIHtudW1iZXJ9XG4gICAqXG4gICAqL1xuICBwcml2YXRlIG9uQ2hhbmdlID0gKGUgOiBhbnksIHJvdzogSVBlcm1pc3Npb24sIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5wZXJtaXNzaW9uc1tyb3dJbmRleF07XG4gICAgY29uc3QgeyBtb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB7IHVwZGF0ZWRQZXJtaXNzaW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICB1cGRhdGVkUGVybWlzc2lvbnMgPSB0aGlzLmdldENoYW5nZWRQZXJtaXNzaW9ucyhlLnRhcmdldC52YWx1ZSwgZGF0YSwgdXBkYXRlZFBlcm1pc3Npb25zLCBtb2RlLCByb3cpO1xuICAgIGNvbnN0IG5ld1Blcm1pc3Npb25zID0ge1xuICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgcGVybWlzc2lvbjogT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgZGF0YS5wZXJtaXNzaW9uLCB7XG4gICAgICAgIFttb2RlXToge1xuICAgICAgICAgIC4uLmRhdGEucGVybWlzc2lvblttb2RlXSxcbiAgICAgICAgICBhY3Rpb246IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgfSwgKG1vZGUgPT09ICdjcmVhdGUnIHx8IG1vZGUgPT09ICdtYW5hZ2UnKSA/IHRoaXMuY29uc3RydWN0UGVybWlzc2lvbihlLnRhcmdldC52YWx1ZSwgZGF0YSwgbW9kZSkgOiB7fSksXG4gICAgICByb2xlX2lkOiByb3cucm9sZV9pZFxuICAgIH07XG4gICAgY29uc3QgY2xvbmVkT2JqID0gXy5jbG9uZURlZXAodXBkYXRlZFBlcm1pc3Npb25zKTtcbiAgICBfLm1lcmdlKGNsb25lZE9iaiwgbmV3UGVybWlzc2lvbnMucGVybWlzc2lvbik7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2VFdmVudChuZXdQZXJtaXNzaW9ucywgdXBkYXRlZFBlcm1pc3Npb25zKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcbiAgcGVybWlzc2lvbnM6IHN0YXRlLnJvbGVQZXJtaXNzaW9uLnBlcm1pc3Npb25zLFxuICB1cGRhdGVkUGVybWlzc2lvbnM6IHN0YXRlLnJvbGVQZXJtaXNzaW9uLnVwZGF0ZWRQZXJtaXNzaW9uc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSb2xlU2VsZWN0b3IpO1xuIl19