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

var _config = require("../../actions/config");

var _organization = require("../../actions/organization");

var _role = require("../../actions/role");

var _Column = _interopRequireDefault(require("../../components/Table/Column"));

var _CButton = _interopRequireDefault(require("../../components/Button/CButton"));

var _rolepermission = require("../../actions/rolepermission");

var _Table = _interopRequireDefault(require("../../components/Table"));

var _application = require("../../constants/application.properties");

var _storage = _interopRequireDefault(require("../../utils/storage"));

require("./admin.css");

var _roleSelector = _interopRequireDefault(require("./roleSelector"));

var _lodash = _interopRequireDefault(require("lodash"));

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

var Admin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Admin, _React$Component);

  function Admin(props) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChangeEvent", function (newPermission, updatedPermissions) {
      _this.props.updateRolePermissionState(newPermission, updatedPermissions);
    });

    _defineProperty(_assertThisInitialized(_this), "getConfigList", function (e) {
      var tenant = e.target.value;
      _this.props.rolePermission.tenant_id = tenant;

      _this.props.fetchConfigList('permissionCategory,permissionTable', tenant);

      _this.setState({
        isOptionDisable: false,
        selectedTenant: tenant,
        isOrganizationChoosed: true
      });

      _this.props.resetRolePermission();
    });

    _defineProperty(_assertThisInitialized(_this), "getModels", function (e) {
      _this.props.resetRolePermission();

      var selectedTenant = _this.state.selectedTenant;

      _this.props.fetchConfigList("registeredModels,permissionCategory,permissionTable&category=".concat(e.target.value), selectedTenant);

      _this.setState({
        isOrganizationChoosed: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getRolePermission", function (e) {
      var model = e.target.value;

      if (model) {
        _this.props.fetchRolePermission(_this.state.selectedTenant, model);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveRolePermission", function () {
      var rolePermission = _this.props.rolePermission;
      var permissions = rolePermission.updatedPermissions;

      if (permissions.length) {
        var _updatedRolePermissions = _lodash.default.cloneDeep(rolePermission);

        _updatedRolePermissions.permissions = permissions;
        delete rolePermission.updatedPermissions;

        _this.props.createRolePermission(_updatedRolePermissions, rolePermission);
      }
    });

    _this.state = {
      categoryName: '',
      columns: [new _Column.default().withKey('name').withLabel('Roles'), new _Column.default().withKey('permission.create.action').withLabel('CREATE').withCellFormatter(function (cell, row, rowIndex) {
        return React.createElement(_roleSelector.default, {
          mode: "create",
          rowData: row,
          rowIndex: rowIndex,
          handleChangeEvent: _this.handleChangeEvent
        });
      }), new _Column.default().withKey('permission.read.action').withLabel('READ').withCellFormatter(function (cell, row, rowIndex) {
        return React.createElement(_roleSelector.default, {
          mode: "read",
          rowData: row,
          rowIndex: rowIndex,
          handleChangeEvent: _this.handleChangeEvent
        });
      }), new _Column.default().withKey('permission.update.action').withLabel('UPDATE').withCellFormatter(function (cell, row, rowIndex) {
        return React.createElement(_roleSelector.default, {
          mode: "update",
          rowData: row,
          rowIndex: rowIndex,
          handleChangeEvent: _this.handleChangeEvent
        });
      }), new _Column.default().withKey('permission.delete.action').withLabel('DELETE').withCellFormatter(function (cell, row, rowIndex) {
        return React.createElement(_roleSelector.default, {
          mode: "delete",
          rowData: row,
          rowIndex: rowIndex,
          handleChangeEvent: _this.handleChangeEvent
        });
      })],
      currentPage: 1,
      length: 10,
      tenantAdmin: false,
      isOptionDisable: true,
      selectedTenant: '',
      isOrganizationChoosed: false
    };
    return _this;
  }

  _createClass(Admin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var tenant = _storage.default.getItem(_application.AppProperties.TENANT);

      if (tenant) {
        this.props.rolePermission.tenant_id = tenant;
        this.props.fetchOrganizationRequest(tenant);
        this.props.fetchConfigList('registeredModels,permissionCategory,permissionTable', tenant);
        this.setState({
          tenantAdmin: true
        });
      } else {
        this.props.rolePermission.tenant_id = '';
        this.props.fetchOrganizationList(10, 1);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.resetPermissionState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          organization = _this$props.organization,
          organizations = _this$props.organizations,
          models = _this$props.models,
          categories = _this$props.categories,
          rolePermission = _this$props.rolePermission,
          saveDisabled = _this$props.saveDisabled;
      var _this$state = this.state,
          categoryName = _this$state.categoryName,
          length = _this$state.length,
          currentPage = _this$state.currentPage,
          columns = _this$state.columns,
          tenantAdmin = _this$state.tenantAdmin,
          isOptionDisable = _this$state.isOptionDisable,
          isOrganizationChoosed = _this$state.isOrganizationChoosed;
      return React.createElement("div", {
        className: "shadow-container"
      }, React.createElement("div", {
        className: "row mb-2"
      }, React.createElement("div", {
        className: "offset-md-1 col-md-2"
      }, React.createElement("h4", null, "Organization")), React.createElement("div", {
        className: "col-md-6 option-placeholder"
      }, tenantAdmin ? React.createElement("select", {
        className: "form-control",
        defaultValue: rolePermission.tenant_id,
        disabled: true
      }, React.createElement("option", {
        value: organization._id
      }, organization.name)) : React.createElement("select", {
        className: "form-control upper-case",
        defaultValue: rolePermission.tenant_id,
        onChange: function onChange(e) {
          return _this2.getConfigList(e);
        }
      }, React.createElement("option", {
        value: "",
        disabled: true
      }, "SELECT ORGANIZATION"), React.createElement("option", {
        value: "DEFAULT"
      }, "DEFAULT"), organizations.map(function (org, i) {
        return React.createElement("option", {
          key: i,
          value: org._id
        }, org.name);
      })))), React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "offset-md-1 col-md-2"
      }, React.createElement("h4", null, "Category")), React.createElement("div", {
        className: "col-md-3 option-placeholder"
      }, React.createElement("select", {
        className: "form-control upper-case",
        disabled: isOptionDisable,
        defaultValue: categoryName,
        onChange: function onChange(e) {
          return _this2.getModels(e);
        }
      }, React.createElement("option", {
        value: "",
        disabled: !isOrganizationChoosed,
        selected: isOrganizationChoosed
      }, "SELECT CATEGORY"), categories.map(function (category, i) {
        return React.createElement("option", {
          key: i
        }, category);
      }))), React.createElement("div", {
        className: "col-md-3 option-placeholder"
      }, React.createElement("select", {
        className: "form-control upper-case",
        disabled: isOptionDisable,
        defaultValue: rolePermission.subject,
        onChange: function onChange(e) {
          return _this2.getRolePermission(e);
        }
      }, React.createElement("option", {
        value: "",
        disabled: !isOrganizationChoosed,
        selected: isOrganizationChoosed
      }, "SELECT MODEL"), React.createElement("option", {
        value: "",
        disabled: isOrganizationChoosed,
        selected: !isOrganizationChoosed
      }), models.map(function (model, i) {
        return React.createElement("option", {
          key: i,
          value: Object.keys(model)[0]
        }, model[Object.keys(model)[0]]);
      })))), React.createElement("div", {
        className: "row float-right"
      }, React.createElement(_CButton.default, {
        className: "btn btn-primary mb-2",
        disabled: saveDisabled,
        onClick: function onClick() {
          return _this2.saveRolePermission();
        },
        name: "Save"
      })), React.createElement(_Table.default, {
        keyField: "name",
        data: rolePermission.permissions,
        columns: columns,
        loading: false,
        length: length,
        currentPage: currentPage,
        total: rolePermission.permissions.length,
        onUpdate: function onUpdate(nextState) {
          var page = nextState.page,
              sizePerPage = nextState.sizePerPage; // tslint:disable-next-line:no-console

          console.log(page, sizePerPage);
        }
      }));
    }
  }]);

  return Admin;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: state.config.categories,
    configLoading: state.config.loading,
    models: state.config.models,
    organization: state.organization.currentOrganization,
    organizationLoading: state.organization.currentOrganization.loading,
    organizations: state.organization.list.data,
    organizationsLoading: state.organization.list.loading,
    permissionList: state.config.permissionList,
    roleLoading: state.role.list.loading,
    rolePermission: state.rolePermission,
    rolePermissionLoading: state.rolePermission.loading,
    roles: state.role.list.data,
    saveDisabled: state.rolePermission.isSaveDisabled
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createRolePermission: function createRolePermission(updatedRolePermissions, rolePermission) {
      return dispatch((0, _rolepermission.createRolePermissionRequest)(updatedRolePermissions, rolePermission));
    },
    fetchConfigList: function fetchConfigList(configList, tenantId) {
      return dispatch((0, _config.fetchConfigRequest)(configList, tenantId));
    },
    fetchOrganizationList: function fetchOrganizationList(limit, currentPage) {
      return dispatch((0, _organization.fetchOrganizationListRequest)(limit, currentPage));
    },
    fetchOrganizationRequest: function fetchOrganizationRequest(tenantId) {
      return dispatch((0, _organization.fetchOrganizationRequest)(tenantId));
    },
    fetchRoleList: function fetchRoleList(tenantId, limit, currentPage) {
      return dispatch((0, _role.fetchRoleListRequest)(tenantId, limit, currentPage));
    },
    fetchRolePermission: function fetchRolePermission(tenantId, modelName) {
      return dispatch((0, _rolepermission.fetchRolePermissionRequest)(tenantId, modelName));
    },
    updateRolePermissionState: function updateRolePermissionState(rolePermission, updatedPermissions) {
      return dispatch((0, _rolepermission.updateRolePermissionState)(rolePermission, updatedPermissions));
    },
    resetPermissionState: function resetPermissionState() {
      return dispatch((0, _rolepermission.resetPermissionState)());
    },
    resetRolePermission: function resetRolePermission() {
      return dispatch((0, _rolepermission.resetRolePermission)());
    }
  };
};

var _default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _reactLocalizeRedux.withLocalize)(Admin);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9BZG1pbi9pbmRleC50c3giXSwibmFtZXMiOlsiQWRtaW4iLCJwcm9wcyIsIm5ld1Blcm1pc3Npb24iLCJ1cGRhdGVkUGVybWlzc2lvbnMiLCJ1cGRhdGVSb2xlUGVybWlzc2lvblN0YXRlIiwiZSIsInRlbmFudCIsInRhcmdldCIsInZhbHVlIiwicm9sZVBlcm1pc3Npb24iLCJ0ZW5hbnRfaWQiLCJmZXRjaENvbmZpZ0xpc3QiLCJzZXRTdGF0ZSIsImlzT3B0aW9uRGlzYWJsZSIsInNlbGVjdGVkVGVuYW50IiwiaXNPcmdhbml6YXRpb25DaG9vc2VkIiwicmVzZXRSb2xlUGVybWlzc2lvbiIsInN0YXRlIiwibW9kZWwiLCJmZXRjaFJvbGVQZXJtaXNzaW9uIiwicGVybWlzc2lvbnMiLCJsZW5ndGgiLCJ1cGRhdGVkUm9sZVBlcm1pc3Npb25zIiwiXyIsImNsb25lRGVlcCIsImNyZWF0ZVJvbGVQZXJtaXNzaW9uIiwiY2F0ZWdvcnlOYW1lIiwiY29sdW1ucyIsIkNvbHVtbiIsIndpdGhLZXkiLCJ3aXRoTGFiZWwiLCJ3aXRoQ2VsbEZvcm1hdHRlciIsImNlbGwiLCJyb3ciLCJyb3dJbmRleCIsImhhbmRsZUNoYW5nZUV2ZW50IiwiY3VycmVudFBhZ2UiLCJ0ZW5hbnRBZG1pbiIsInN0b3JhZ2UiLCJnZXRJdGVtIiwiQXBwUHJvcGVydGllcyIsIlRFTkFOVCIsImZldGNoT3JnYW5pemF0aW9uUmVxdWVzdCIsImZldGNoT3JnYW5pemF0aW9uTGlzdCIsInJlc2V0UGVybWlzc2lvblN0YXRlIiwib3JnYW5pemF0aW9uIiwib3JnYW5pemF0aW9ucyIsIm1vZGVscyIsImNhdGVnb3JpZXMiLCJzYXZlRGlzYWJsZWQiLCJfaWQiLCJuYW1lIiwiZ2V0Q29uZmlnTGlzdCIsIm1hcCIsIm9yZyIsImkiLCJnZXRNb2RlbHMiLCJjYXRlZ29yeSIsInN1YmplY3QiLCJnZXRSb2xlUGVybWlzc2lvbiIsIk9iamVjdCIsImtleXMiLCJzYXZlUm9sZVBlcm1pc3Npb24iLCJuZXh0U3RhdGUiLCJwYWdlIiwic2l6ZVBlclBhZ2UiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25maWciLCJjb25maWdMb2FkaW5nIiwibG9hZGluZyIsImN1cnJlbnRPcmdhbml6YXRpb24iLCJvcmdhbml6YXRpb25Mb2FkaW5nIiwibGlzdCIsImRhdGEiLCJvcmdhbml6YXRpb25zTG9hZGluZyIsInBlcm1pc3Npb25MaXN0Iiwicm9sZUxvYWRpbmciLCJyb2xlIiwicm9sZVBlcm1pc3Npb25Mb2FkaW5nIiwicm9sZXMiLCJpc1NhdmVEaXNhYmxlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29uZmlnTGlzdCIsInRlbmFudElkIiwibGltaXQiLCJmZXRjaFJvbGVMaXN0IiwibW9kZWxOYW1lIiwid2l0aFJvdXRlciIsIndpdGhMb2NhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUlBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVNQSxLOzs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzlCLCtFQUFNQSxLQUFOOztBQUQ4Qix3RUE2Q0wsVUFBQ0MsYUFBRCxFQUE2QkMsa0JBQTdCLEVBQXdEO0FBQ2pGLFlBQUtGLEtBQUwsQ0FBV0cseUJBQVgsQ0FBcUNGLGFBQXJDLEVBQW9EQyxrQkFBcEQ7QUFDRCxLQS9DK0I7O0FBQUEsb0VBaURULFVBQUNFLENBQUQsRUFBNkM7QUFDbEUsVUFBTUMsTUFBTSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQSxZQUFLUCxLQUFMLENBQVdRLGNBQVgsQ0FBMEJDLFNBQTFCLEdBQXNDSixNQUF0Qzs7QUFDQSxZQUFLTCxLQUFM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dCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBMb2NhbGl6ZUNvbnRleHRQcm9wcyxcbiAgd2l0aExvY2FsaXplXG59IGZyb20gJ3JlYWN0LWxvY2FsaXplLXJlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBmZXRjaENvbmZpZ1JlcXVlc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbmZpZyc7XG5pbXBvcnQgeyBmZXRjaE9yZ2FuaXphdGlvbkxpc3RSZXF1ZXN0LCBmZXRjaE9yZ2FuaXphdGlvblJlcXVlc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL29yZ2FuaXphdGlvbic7XG5pbXBvcnQgeyBmZXRjaFJvbGVMaXN0UmVxdWVzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcm9sZSc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGUvQ29sdW1uJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzJztcbmltcG9ydCBDQnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uL0NCdXR0b24nO1xuXG5pbXBvcnQgeyBjcmVhdGVSb2xlUGVybWlzc2lvblJlcXVlc3QsIGZldGNoUm9sZVBlcm1pc3Npb25SZXF1ZXN0LCB1cGRhdGVSb2xlUGVybWlzc2lvblN0YXRlLCByZXNldFBlcm1pc3Npb25TdGF0ZSwgcmVzZXRSb2xlUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcm9sZXBlcm1pc3Npb24nO1xuaW1wb3J0IFRhYmxlLCB7IElUYWJsZVN0YXRlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgeyBBcHBQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2FwcGxpY2F0aW9uLnByb3BlcnRpZXMnO1xuaW1wb3J0IHsgSU9yZ2FuaXphdGlvbiB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL29yZ2FuaXphdGlvbic7XG5pbXBvcnQgeyBJUm9sZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3JvbGUnO1xuaW1wb3J0IHsgSVBlcm1pc3Npb24sIElSb2xlUGVybWlzc2lvblJlZHVjZXIgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9yb2xlcGVybWlzc2lvbic7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi91dGlscy9zdG9yYWdlJztcbmltcG9ydCAnLi9hZG1pbi5jc3MnO1xuaW1wb3J0IFJvbGVTZWxlY3RvciBmcm9tICcuL3JvbGVTZWxlY3Rvcic7XG5cbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmludGVyZmFjZSBJQWRtaW5Qcm9wcyBleHRlbmRzIExvY2FsaXplQ29udGV4dFByb3BzLCBJU3RhdGVQcm9wcywgSURpc3BhdGNoUHJvcHMgeyB9XG5cbmludGVyZmFjZSBJQWRtaW5TdGF0ZSB7XG4gIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xuICBjb2x1bW5zOiBDb2x1bW5bXTtcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIHRlbmFudEFkbWluOiBib29sZWFuO1xuICBpc09wdGlvbkRpc2FibGU6IGJvb2xlYW47XG4gIHNlbGVjdGVkVGVuYW50OiBzdHJpbmc7XG4gIGlzT3JnYW5pemF0aW9uQ2hvb3NlZDogYm9vbGVhblxufVxuXG5jbGFzcyBBZG1pbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQWRtaW5Qcm9wcywgSUFkbWluU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IElBZG1pblByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXRlZ29yeU5hbWU6ICcnLFxuICAgICAgY29sdW1uczogW1xuICAgICAgICAobmV3IENvbHVtbigpKS53aXRoS2V5KCduYW1lJykud2l0aExhYmVsKCdSb2xlcycpLFxuICAgICAgICAobmV3IENvbHVtbigpKS53aXRoS2V5KCdwZXJtaXNzaW9uLmNyZWF0ZS5hY3Rpb24nKS53aXRoTGFiZWwoJ0NSRUFURScpLndpdGhDZWxsRm9ybWF0dGVyKChjZWxsOiBhbnksIHJvdzogYW55LCByb3dJbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPFJvbGVTZWxlY3RvciBtb2RlPVwiY3JlYXRlXCIgcm93RGF0YT17cm93fSByb3dJbmRleD17cm93SW5kZXh9IGhhbmRsZUNoYW5nZUV2ZW50PXt0aGlzLmhhbmRsZUNoYW5nZUV2ZW50fSAvPlxuICAgICAgICApKSxcbiAgICAgICAgKG5ldyBDb2x1bW4oKSkud2l0aEtleSgncGVybWlzc2lvbi5yZWFkLmFjdGlvbicpLndpdGhMYWJlbCgnUkVBRCcpLndpdGhDZWxsRm9ybWF0dGVyKChjZWxsOiBhbnksIHJvdzogYW55LCByb3dJbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPFJvbGVTZWxlY3RvciBtb2RlPVwicmVhZFwiIHJvd0RhdGE9e3Jvd30gcm93SW5kZXg9e3Jvd0luZGV4fSBoYW5kbGVDaGFuZ2VFdmVudD17dGhpcy5oYW5kbGVDaGFuZ2VFdmVudH0gLz5cbiAgICAgICAgKSksXG4gICAgICAgIChuZXcgQ29sdW1uKCkpLndpdGhLZXkoJ3Blcm1pc3Npb24udXBkYXRlLmFjdGlvbicpLndpdGhMYWJlbCgnVVBEQVRFJykud2l0aENlbGxGb3JtYXR0ZXIoKGNlbGw6IGFueSwgcm93OiBhbnksIHJvd0luZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8Um9sZVNlbGVjdG9yIG1vZGU9XCJ1cGRhdGVcIiByb3dEYXRhPXtyb3d9IHJvd0luZGV4PXtyb3dJbmRleH0gaGFuZGxlQ2hhbmdlRXZlbnQ9e3RoaXMuaGFuZGxlQ2hhbmdlRXZlbnR9IC8+XG4gICAgICAgICkpLFxuICAgICAgICAobmV3IENvbHVtbigpKS53aXRoS2V5KCdwZXJtaXNzaW9uLmRlbGV0ZS5hY3Rpb24nKS53aXRoTGFiZWwoJ0RFTEVURScpLndpdGhDZWxsRm9ybWF0dGVyKChjZWxsOiBhbnksIHJvdzogYW55LCByb3dJbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPFJvbGVTZWxlY3RvciBtb2RlPVwiZGVsZXRlXCIgcm93RGF0YT17cm93fSByb3dJbmRleD17cm93SW5kZXh9IGhhbmRsZUNoYW5nZUV2ZW50PXt0aGlzLmhhbmRsZUNoYW5nZUV2ZW50fSAvPlxuICAgICAgICApKVxuICAgICAgXSxcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgbGVuZ3RoOiAxMCxcbiAgICAgIHRlbmFudEFkbWluOiBmYWxzZSxcbiAgICAgIGlzT3B0aW9uRGlzYWJsZTogdHJ1ZSxcbiAgICAgIHNlbGVjdGVkVGVuYW50OiAnJyxcbiAgICAgIGlzT3JnYW5pemF0aW9uQ2hvb3NlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHRlbmFudCA9IHN0b3JhZ2UuZ2V0SXRlbShBcHBQcm9wZXJ0aWVzLlRFTkFOVCk7XG4gICAgaWYgKHRlbmFudCkge1xuICAgICAgdGhpcy5wcm9wcy5yb2xlUGVybWlzc2lvbi50ZW5hbnRfaWQgPSB0ZW5hbnQ7XG4gICAgICB0aGlzLnByb3BzLmZldGNoT3JnYW5pemF0aW9uUmVxdWVzdCh0ZW5hbnQpO1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaENvbmZpZ0xpc3QoJ3JlZ2lzdGVyZWRNb2RlbHMscGVybWlzc2lvbkNhdGVnb3J5LHBlcm1pc3Npb25UYWJsZScsIHRlbmFudCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZW5hbnRBZG1pbjogdHJ1ZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJvbGVQZXJtaXNzaW9uLnRlbmFudF9pZCA9ICcnO1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaE9yZ2FuaXphdGlvbkxpc3QoMTAsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlc2V0UGVybWlzc2lvblN0YXRlKCk7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQ2hhbmdlRXZlbnQgPSAobmV3UGVybWlzc2lvbjogSVBlcm1pc3Npb24sIHVwZGF0ZWRQZXJtaXNzaW9uczogW10pID0+IHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVJvbGVQZXJtaXNzaW9uU3RhdGUobmV3UGVybWlzc2lvbiwgdXBkYXRlZFBlcm1pc3Npb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb25maWdMaXN0ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRlbmFudCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMucm9sZVBlcm1pc3Npb24udGVuYW50X2lkID0gdGVuYW50O1xuICAgIHRoaXMucHJvcHMuZmV0Y2hDb25maWdMaXN0KCdwZXJtaXNzaW9uQ2F0ZWdvcnkscGVybWlzc2lvblRhYmxlJywgdGVuYW50KTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc09wdGlvbkRpc2FibGU6IGZhbHNlLCBzZWxlY3RlZFRlbmFudDogdGVuYW50LCBpc09yZ2FuaXphdGlvbkNob29zZWQ6IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLnJlc2V0Um9sZVBlcm1pc3Npb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb2RlbHMgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5yZXNldFJvbGVQZXJtaXNzaW9uKCk7XG4gICAgY29uc3QgeyBzZWxlY3RlZFRlbmFudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzLmZldGNoQ29uZmlnTGlzdChgcmVnaXN0ZXJlZE1vZGVscyxwZXJtaXNzaW9uQ2F0ZWdvcnkscGVybWlzc2lvblRhYmxlJmNhdGVnb3J5PSR7ZS50YXJnZXQudmFsdWV9YCwgc2VsZWN0ZWRUZW5hbnQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzT3JnYW5pemF0aW9uQ2hvb3NlZDogZmFsc2V9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSb2xlUGVybWlzc2lvbiA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBtb2RlbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChtb2RlbCkge1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaFJvbGVQZXJtaXNzaW9uKHRoaXMuc3RhdGUuc2VsZWN0ZWRUZW5hbnQsIG1vZGVsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2F2ZVJvbGVQZXJtaXNzaW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcm9sZVBlcm1pc3Npb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSByb2xlUGVybWlzc2lvbi51cGRhdGVkUGVybWlzc2lvbnM7XG4gICAgaWYgKHBlcm1pc3Npb25zLmxlbmd0aCkge1xuICAgICAgY29uc3QgdXBkYXRlZFJvbGVQZXJtaXNzaW9ucyA9IF8uY2xvbmVEZWVwKHJvbGVQZXJtaXNzaW9uKTtcbiAgICAgIHVwZGF0ZWRSb2xlUGVybWlzc2lvbnMucGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucztcbiAgICAgIGRlbGV0ZSByb2xlUGVybWlzc2lvbi51cGRhdGVkUGVybWlzc2lvbnM7XG4gICAgICB0aGlzLnByb3BzLmNyZWF0ZVJvbGVQZXJtaXNzaW9uKHVwZGF0ZWRSb2xlUGVybWlzc2lvbnMsIHJvbGVQZXJtaXNzaW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3JnYW5pemF0aW9uLCBvcmdhbml6YXRpb25zLCBtb2RlbHMsIGNhdGVnb3JpZXMsIHJvbGVQZXJtaXNzaW9uLCBzYXZlRGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjYXRlZ29yeU5hbWUsIGxlbmd0aCwgY3VycmVudFBhZ2UsIGNvbHVtbnMsIHRlbmFudEFkbWluLCBpc09wdGlvbkRpc2FibGUsIGlzT3JnYW5pemF0aW9uQ2hvb3NlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZnNldC1tZC0xIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICA8aDQ+T3JnYW5pemF0aW9uPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9wdGlvbi1wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAge3RlbmFudEFkbWluID9cbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkZWZhdWx0VmFsdWU9e3JvbGVQZXJtaXNzaW9uLnRlbmFudF9pZH0gZGlzYWJsZWQ9e3RydWV9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e29yZ2FuaXphdGlvbi5faWR9Pntvcmdhbml6YXRpb24ubmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+IDpcbiAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdXBwZXItY2FzZVwiIGRlZmF1bHRWYWx1ZT17cm9sZVBlcm1pc3Npb24udGVuYW50X2lkfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuZ2V0Q29uZmlnTGlzdChlKX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlNFTEVDVCBPUkdBTklaQVRJT048L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiREVGQVVMVFwiPkRFRkFVTFQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICB7b3JnYW5pemF0aW9ucy5tYXAoKG9yZywgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcmcuX2lkfT57b3JnLm5hbWV9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2Zmc2V0LW1kLTEgY29sLW1kLTJcIj5cbiAgICAgICAgICAgIDxoND5DYXRlZ29yeTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBvcHRpb24tcGxhY2Vob2xkZXJcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHVwcGVyLWNhc2VcIiBkaXNhYmxlZD17aXNPcHRpb25EaXNhYmxlfSBkZWZhdWx0VmFsdWU9e2NhdGVnb3J5TmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmdldE1vZGVscyhlKX0+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD17IWlzT3JnYW5pemF0aW9uQ2hvb3NlZH0gc2VsZWN0ZWQ9e2lzT3JnYW5pemF0aW9uQ2hvb3NlZH0gPlNFTEVDVCBDQVRFR09SWTwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpKSA9PiA8b3B0aW9uIGtleT17aX0+e2NhdGVnb3J5fTwvb3B0aW9uPil9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIG9wdGlvbi1wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdXBwZXItY2FzZVwiIGRpc2FibGVkPXtpc09wdGlvbkRpc2FibGV9IGRlZmF1bHRWYWx1ZT17cm9sZVBlcm1pc3Npb24uc3ViamVjdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHRoaXMuZ2V0Um9sZVBlcm1pc3Npb24oZSl9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ9eyFpc09yZ2FuaXphdGlvbkNob29zZWR9IHNlbGVjdGVkPXtpc09yZ2FuaXphdGlvbkNob29zZWR9PlNFTEVDVCBNT0RFTDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ9e2lzT3JnYW5pemF0aW9uQ2hvb3NlZH0gc2VsZWN0ZWQ9eyFpc09yZ2FuaXphdGlvbkNob29zZWR9Pjwvb3B0aW9uPlxuICAgICAgICAgICAgICB7bW9kZWxzLm1hcCgobW9kZWw6IGFueSwgaSkgPT4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtPYmplY3Qua2V5cyhtb2RlbClbMF19Pnttb2RlbFtPYmplY3Qua2V5cyhtb2RlbClbMF1dfTwvb3B0aW9uPil9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgPENCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi0yXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzYXZlRGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNhdmVSb2xlUGVybWlzc2lvbigpfVxuICAgICAgICAgICAgbmFtZT1cIlNhdmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBrZXlGaWVsZD1cIm5hbWVcIlxuICAgICAgICAgIGRhdGE9e3JvbGVQZXJtaXNzaW9uLnBlcm1pc3Npb25zfVxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgbG9hZGluZz17ZmFsc2V9XG4gICAgICAgICAgbGVuZ3RoPXtsZW5ndGh9XG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgIHRvdGFsPXtyb2xlUGVybWlzc2lvbi5wZXJtaXNzaW9ucy5sZW5ndGh9XG4gICAgICAgICAgb25VcGRhdGU9eyhuZXh0U3RhdGU6IElUYWJsZVN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhZ2UsIHNpemVQZXJQYWdlIH0gPSBuZXh0U3RhdGU7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZSwgc2l6ZVBlclBhZ2UpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0YXRlKSA9PiAoe1xuICBjYXRlZ29yaWVzOiBzdGF0ZS5jb25maWcuY2F0ZWdvcmllcyxcbiAgY29uZmlnTG9hZGluZzogc3RhdGUuY29uZmlnLmxvYWRpbmcsXG4gIG1vZGVsczogc3RhdGUuY29uZmlnLm1vZGVscyxcbiAgb3JnYW5pemF0aW9uOiBzdGF0ZS5vcmdhbml6YXRpb24uY3VycmVudE9yZ2FuaXphdGlvbixcbiAgb3JnYW5pemF0aW9uTG9hZGluZzogc3RhdGUub3JnYW5pemF0aW9uLmN1cnJlbnRPcmdhbml6YXRpb24ubG9hZGluZyxcbiAgb3JnYW5pemF0aW9uczogc3RhdGUub3JnYW5pemF0aW9uLmxpc3QuZGF0YSxcbiAgb3JnYW5pemF0aW9uc0xvYWRpbmc6IHN0YXRlLm9yZ2FuaXphdGlvbi5saXN0LmxvYWRpbmcsXG4gIHBlcm1pc3Npb25MaXN0OiBzdGF0ZS5jb25maWcucGVybWlzc2lvbkxpc3QsXG4gIHJvbGVMb2FkaW5nOiBzdGF0ZS5yb2xlLmxpc3QubG9hZGluZyxcbiAgcm9sZVBlcm1pc3Npb246IHN0YXRlLnJvbGVQZXJtaXNzaW9uLFxuICByb2xlUGVybWlzc2lvbkxvYWRpbmc6IHN0YXRlLnJvbGVQZXJtaXNzaW9uLmxvYWRpbmcsXG4gIHJvbGVzOiBzdGF0ZS5yb2xlLmxpc3QuZGF0YSxcbiAgc2F2ZURpc2FibGVkOiBzdGF0ZS5yb2xlUGVybWlzc2lvbi5pc1NhdmVEaXNhYmxlZFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogYW55KSA9PiAoe1xuICBjcmVhdGVSb2xlUGVybWlzc2lvbjogKHVwZGF0ZWRSb2xlUGVybWlzc2lvbnM6IElSb2xlUGVybWlzc2lvblJlZHVjZXIsIHJvbGVQZXJtaXNzaW9uOiBJUm9sZVBlcm1pc3Npb25SZWR1Y2VyKSA9PiBkaXNwYXRjaChjcmVhdGVSb2xlUGVybWlzc2lvblJlcXVlc3QodXBkYXRlZFJvbGVQZXJtaXNzaW9ucywgcm9sZVBlcm1pc3Npb24pKSxcbiAgZmV0Y2hDb25maWdMaXN0OiAoY29uZmlnTGlzdDogc3RyaW5nLCB0ZW5hbnRJZDogc3RyaW5nKSA9PiBkaXNwYXRjaChmZXRjaENvbmZpZ1JlcXVlc3QoY29uZmlnTGlzdCwgdGVuYW50SWQpKSxcbiAgZmV0Y2hPcmdhbml6YXRpb25MaXN0OiAobGltaXQ6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlcikgPT4gZGlzcGF0Y2goZmV0Y2hPcmdhbml6YXRpb25MaXN0UmVxdWVzdChsaW1pdCwgY3VycmVudFBhZ2UpKSxcbiAgZmV0Y2hPcmdhbml6YXRpb25SZXF1ZXN0OiAodGVuYW50SWQ6IHN0cmluZykgPT4gZGlzcGF0Y2goZmV0Y2hPcmdhbml6YXRpb25SZXF1ZXN0KHRlbmFudElkKSksXG4gIGZldGNoUm9sZUxpc3Q6ICh0ZW5hbnRJZDogc3RyaW5nLCBsaW1pdDogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyKSA9PiBkaXNwYXRjaChmZXRjaFJvbGVMaXN0UmVxdWVzdCh0ZW5hbnRJZCwgbGltaXQsIGN1cnJlbnRQYWdlKSksXG4gIGZldGNoUm9sZVBlcm1pc3Npb246ICh0ZW5hbnRJZDogc3RyaW5nLCBtb2RlbE5hbWU6IHN0cmluZykgPT4gZGlzcGF0Y2goZmV0Y2hSb2xlUGVybWlzc2lvblJlcXVlc3QodGVuYW50SWQsIG1vZGVsTmFtZSkpLFxuICB1cGRhdGVSb2xlUGVybWlzc2lvblN0YXRlOiAocm9sZVBlcm1pc3Npb246IElQZXJtaXNzaW9uLCB1cGRhdGVkUGVybWlzc2lvbnM6IFtdKSA9PiBkaXNwYXRjaCh1cGRhdGVSb2xlUGVybWlzc2lvblN0YXRlKHJvbGVQZXJtaXNzaW9uLCB1cGRhdGVkUGVybWlzc2lvbnMpKSxcbiAgcmVzZXRQZXJtaXNzaW9uU3RhdGU6ICgpPT4gZGlzcGF0Y2gocmVzZXRQZXJtaXNzaW9uU3RhdGUoKSksXG4gIHJlc2V0Um9sZVBlcm1pc3Npb246ICgpID0+IGRpc3BhdGNoKHJlc2V0Um9sZVBlcm1pc3Npb24oKSlcbn0pO1xuXG5pbnRlcmZhY2UgSVN0YXRlUHJvcHMge1xuICBvcmdhbml6YXRpb25zOiBJT3JnYW5pemF0aW9uW107XG4gIG9yZ2FuaXphdGlvbjogSU9yZ2FuaXphdGlvbjtcbiAgcm9sZXM6IElSb2xlW107XG4gIG1vZGVsczogc3RyaW5nW107XG4gIGNhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICBwZXJtaXNzaW9uTGlzdDogYW55O1xuICBjb25maWdMb2FkaW5nOiBib29sZWFuO1xuICBvcmdhbml6YXRpb25Mb2FkaW5nOiBib29sZWFuO1xuICBvcmdhbml6YXRpb25zTG9hZGluZzogYm9vbGVhbjtcbiAgcm9sZUxvYWRpbmc6IGJvb2xlYW47XG4gIHJvbGVQZXJtaXNzaW9uOiBJUm9sZVBlcm1pc3Npb25SZWR1Y2VyO1xuICByb2xlUGVybWlzc2lvbkxvYWRpbmc6IGJvb2xlYW47XG4gIHNhdmVEaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElEaXNwYXRjaFByb3BzIHtcbiAgZmV0Y2hDb25maWdMaXN0OiAoY29uZmlnTGlzdDogc3RyaW5nLCB0ZW5hbnRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBmZXRjaE9yZ2FuaXphdGlvbkxpc3Q6IChsaW1pdDogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyKSA9PiB2b2lkO1xuICBmZXRjaE9yZ2FuaXphdGlvblJlcXVlc3Q6ICh0ZW5hbnRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBmZXRjaFJvbGVMaXN0OiAodGVuYW50SWQ6IHN0cmluZywgbGltaXQ6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlcikgPT4gdm9pZDtcbiAgZmV0Y2hSb2xlUGVybWlzc2lvbjogKHRlbmFudElkOiBzdHJpbmcsIG1vZGVsTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xuICB1cGRhdGVSb2xlUGVybWlzc2lvblN0YXRlOiAocm9sZVBlcm1pc3Npb246IElQZXJtaXNzaW9uLCB1cGRhdGVkUGVybWlzc2lvbnM6IFtdKSA9PiB2b2lkO1xuICBjcmVhdGVSb2xlUGVybWlzc2lvbjogKHVwZGF0ZWRSb2xlUGVybWlzc2lvbnM6IElSb2xlUGVybWlzc2lvblJlZHVjZXIsIHJvbGVQZXJtaXNzaW9uOiBJUm9sZVBlcm1pc3Npb25SZWR1Y2VyKSA9PiB2b2lkO1xuICByZXNldFBlcm1pc3Npb25TdGF0ZTogKCkgPT4gdm9pZDtcbiAgcmVzZXRSb2xlUGVybWlzc2lvbjogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbiAgY29ubmVjdDxJU3RhdGVQcm9wcywgSURpc3BhdGNoUHJvcHMsIElBZG1pblByb3BzLCBJU3RhdGU+KFxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgKSxcbiAgd2l0aExvY2FsaXplXG4pKEFkbWluKTtcbiJdfQ==