"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _abilityContext = require("../../ability-context");

var _formschema = require("../../actions/formschema");

var _index = require("../../components/index");

var _Table = _interopRequireDefault(require("../../components/Table"));

var _Column = _interopRequireDefault(require("../../components/Table/Column"));

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

var FormSchemaList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormSchemaList, _React$Component);

  function FormSchemaList(props) {
    var _this;

    _classCallCheck(this, FormSchemaList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormSchemaList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "columns", void 0);

    _defineProperty(_assertThisInitialized(_this), "fetchFormSchemas", function (currentPage, length, sortField, sortOrder) {
      _this.props.fetchFormSchemaList(length, currentPage, sortField, sortOrder);
    });

    _this.columns = [new _Column.default().withKey('_id').withLabel('ID'), new _Column.default().withKey('name').withLabel('Name'), new _Column.default().withKey('action').withLabel('Actions').withCellFormatter(function (cell, row) {
      return React.createElement("div", null, React.createElement(_abilityContext.Can, {
        I: "read",
        a: "roles"
      }, React.createElement(_index.BaseIcon, {
        display: "inline",
        name: "Eye",
        onClick: function onClick() {
          return _this.renderFormSchema(row._id);
        }
      }), "\xA0"), React.createElement(_index.BaseIcon, {
        display: "inline",
        name: "Edit",
        onClick: function onClick() {
          return _this.builderFormSchema(row._id);
        }
      }), "\xA0", React.createElement(_index.BaseIcon, {
        display: "inline",
        name: "List",
        onClick: function onClick() {
          return _this.viewFormData(row.name_singular, row._id);
        }
      }), "\xA0", React.createElement(_index.BaseIcon, {
        display: "inline",
        name: "Settings",
        onClick: function onClick() {
          return _this.viewFormtriggers(row.name_singular, row._id);
        }
      }));
    })];
    return _this;
  }

  _createClass(FormSchemaList, [{
    key: "renderFormSchema",
    value: function renderFormSchema(id) {
      this.props.history.push("/formrenderer/".concat(id, "/create"));
    }
  }, {
    key: "builderFormSchema",
    value: function builderFormSchema(id) {
      this.props.history.push(id ? "/formbuilder/".concat(id) : "/formbuilder");
    }
  }, {
    key: "viewFormData",
    value: function viewFormData(formName, formId) {
      this.props.history.push("/formDataList/".concat(formName, "/").concat(formId));
    }
  }, {
    key: "viewFormtriggers",
    value: function viewFormtriggers(formName, formId) {
      this.props.history.push("/formTriggerList/".concat(formId));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFormSchemas(1, 10, '_id', 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          loading = _this$props.loading,
          data = _this$props.data,
          total = _this$props.total,
          length = _this$props.length;
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
          return _this2.builderFormSchema();
        },
        name: "Create New Schema"
      }))), React.createElement(_Table.default, {
        keyField: "_id",
        data: data || [],
        columns: this.columns,
        loading: loading || false,
        length: length || 10,
        total: total || 0,
        remote: true,
        onUpdate: function onUpdate(nextState) {
          var currentPage = nextState.currentPage,
              length = nextState.length,
              sortField = nextState.sortField,
              sortOrder = nextState.sortOrder;

          _this2.fetchFormSchemas(currentPage, length, sortField, sortOrder);
        }
      }));
    }
  }]);

  return FormSchemaList;
}(React.Component);

_defineProperty(FormSchemaList, "defaultProps", {
  length: 10
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.formSchema.list.data,
    loading: state.formSchema.list.loading,
    total: state.formSchema.list.total
  };
};

var mapDispatchToProps = {
  fetchFormSchemaList: _formschema.fetchFormSchemaList
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormSchemaList);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Gb3JtU2NoZW1hTGlzdC9pbmRleC50c3giXSwibmFtZXMiOlsiRm9ybVNjaGVtYUxpc3QiLCJwcm9wcyIsImN1cnJlbnRQYWdlIiwibGVuZ3RoIiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiZmV0Y2hGb3JtU2NoZW1hTGlzdCIsImNvbHVtbnMiLCJDb2x1bW4iLCJ3aXRoS2V5Iiwid2l0aExhYmVsIiwid2l0aENlbGxGb3JtYXR0ZXIiLCJjZWxsIiwicm93IiwicmVuZGVyRm9ybVNjaGVtYSIsIl9pZCIsImJ1aWxkZXJGb3JtU2NoZW1hIiwidmlld0Zvcm1EYXRhIiwibmFtZV9zaW5ndWxhciIsInZpZXdGb3JtdHJpZ2dlcnMiLCJpZCIsImhpc3RvcnkiLCJwdXNoIiwiZm9ybU5hbWUiLCJmb3JtSWQiLCJmZXRjaEZvcm1TY2hlbWFzIiwibG9hZGluZyIsImRhdGEiLCJ0b3RhbCIsIm5leHRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJmb3JtU2NoZW1hIiwibGlzdCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVVNQSxjOzs7OztBQVNKLDBCQUFZQyxLQUFaLEVBQTREO0FBQUE7O0FBQUE7O0FBQzFELHdGQUFNQSxLQUFOOztBQUQwRDs7QUFBQSx1RUF5RmpDLFVBQ3pCQyxXQUR5QixFQUV6QkMsTUFGeUIsRUFHekJDLFNBSHlCLEVBSXpCQyxTQUp5QixFQUt0QjtBQUNILFlBQUtKLEtBQUwsQ0FBV0ssbUJBQVgsQ0FBK0JILE1BQS9CLEVBQXVDRCxXQUF2QyxFQUFvREUsU0FBcEQsRUFBK0RDLFNBQS9EO0FBQ0QsS0FoRzJEOztBQUUxRCxVQUFLRSxPQUFMLEdBQWUsQ0FDYixJQUFJQyxlQUFKLEdBQWFD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Q0FBc0JULE9BRlc7QUFHMUNFLElBQUFBLEtBQUssRUFBRUssS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxJQUFqQixDQUFzQlA7QUFIYSxHQUFwQjtBQUFBLENBQXhCOztBQU1BLElBQU1RLGtCQUFrQixHQUFHO0FBQ3pCOUIsRUFBQUEsbUJBQW1CLEVBQW5CQTtBQUR5QixDQUEzQjs7ZUFJZSx5QkFDYjBCLGVBRGEsRUFFYkksa0JBRmEsRUFHYnBDLGNBSGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IENhbiB9IGZyb20gJy4uLy4uL2FiaWxpdHktY29udGV4dCc7XG5pbXBvcnQgeyBmZXRjaEZvcm1TY2hlbWFMaXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9mb3Jtc2NoZW1hJztcbmltcG9ydCB7IEJhc2VJY29uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgVGFibGUsIHsgSVRhYmxlVXBkYXRlUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZS9Db2x1bW4nO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMnO1xuaW1wb3J0IENCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQ0J1dHRvbic7XG5cbmludGVyZmFjZSBJRm9ybVNjaGVtYXNQcm9wcyB7XG4gIGRhdGE/OiBvYmplY3RbXTtcbiAgdG90YWw/OiBudW1iZXI7XG4gIGxlbmd0aD86bnVtYmVyO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgZmV0Y2hGb3JtU2NoZW1hTGlzdD86IGFueTtcbn1cblxuY2xhc3MgRm9ybVNjaGVtYUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIElGb3JtU2NoZW1hc1Byb3BzICYgUm91dGVDb21wb25lbnRQcm9wcyxcbiAgb2JqZWN0XG4gID4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxlbmd0aDogMTBcbiAgfVxuICBwcml2YXRlIGNvbHVtbnM6IENvbHVtbltdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRm9ybVNjaGVtYXNQcm9wcyAmIFJvdXRlQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgbmV3IENvbHVtbigpLndpdGhLZXkoJ19pZCcpLndpdGhMYWJlbCgnSUQnKSxcbiAgICAgIG5ldyBDb2x1bW4oKS53aXRoS2V5KCduYW1lJykud2l0aExhYmVsKCdOYW1lJyksXG4gICAgICBuZXcgQ29sdW1uKClcbiAgICAgICAgLndpdGhLZXkoJ2FjdGlvbicpXG4gICAgICAgIC53aXRoTGFiZWwoJ0FjdGlvbnMnKVxuICAgICAgICAud2l0aENlbGxGb3JtYXR0ZXIoKGNlbGw6IGFueSwgcm93OiBhbnkpID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENhbiBJPVwicmVhZFwiIGE9XCJyb2xlc1wiPlxuICAgICAgICAgICAgICA8QmFzZUljb25cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiRXllXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbmRlckZvcm1TY2hlbWEocm93Ll9pZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgPC9DYW4+XG4gICAgICAgICAgICA8QmFzZUljb25cbiAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJFZGl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5idWlsZGVyRm9ybVNjaGVtYShyb3cuX2lkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIDxCYXNlSWNvblxuICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIkxpc3RcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnZpZXdGb3JtRGF0YShyb3cubmFtZV9zaW5ndWxhciwgcm93Ll9pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICA8QmFzZUljb25cbiAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudmlld0Zvcm10cmlnZ2Vycyhyb3cubmFtZV9zaW5ndWxhciwgcm93Ll9pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyRm9ybVNjaGVtYShpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9mb3JtcmVuZGVyZXIvJHtpZH0vY3JlYXRlYCk7XG4gIH1cblxuICBwdWJsaWMgYnVpbGRlckZvcm1TY2hlbWEoaWQ/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChpZCA/IGAvZm9ybWJ1aWxkZXIvJHtpZH1gIDogYC9mb3JtYnVpbGRlcmApO1xuICB9XG5cbiAgcHVibGljIHZpZXdGb3JtRGF0YShmb3JtTmFtZTogc3RyaW5nLCBmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvZm9ybURhdGFMaXN0LyR7Zm9ybU5hbWV9LyR7Zm9ybUlkfWApO1xuICB9XG5cbiAgcHVibGljIHZpZXdGb3JtdHJpZ2dlcnMoZm9ybU5hbWU6IHN0cmluZywgZm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2Zvcm1UcmlnZ2VyTGlzdC8ke2Zvcm1JZH1gKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoRm9ybVNjaGVtYXMoMSwgMTAsICdfaWQnLCAxKTtcbiAgfVxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgZGF0YSwgdG90YWwsIGxlbmd0aCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY29udGFpbmVyXCI+XG4gICAgICAgIDxDYW4gST1cInJlYWRcIiBhPVwiYWRtaW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxDQnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0IG1iLTJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmJ1aWxkZXJGb3JtU2NoZW1hKCl9XG4gICAgICAgICAgICAgIG5hbWU9XCJDcmVhdGUgTmV3IFNjaGVtYVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Nhbj5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAga2V5RmllbGQ9XCJfaWRcIlxuICAgICAgICAgIGRhdGE9e2RhdGEgfHwgW119XG4gICAgICAgICAgY29sdW1ucz17dGhpcy5jb2x1bW5zfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmcgfHwgZmFsc2V9XG4gICAgICAgICAgbGVuZ3RoPXtsZW5ndGggfHwgMTB9XG4gICAgICAgICAgdG90YWw9e3RvdGFsIHx8IDB9XG4gICAgICAgICAgcmVtb3RlPXt0cnVlfVxuICAgICAgICAgIG9uVXBkYXRlPXsobmV4dFN0YXRlOiBJVGFibGVVcGRhdGVQcm9wcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjdXJyZW50UGFnZSwgbGVuZ3RoLCBzb3J0RmllbGQsIHNvcnRPcmRlciB9ID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgdGhpcy5mZXRjaEZvcm1TY2hlbWFzKGN1cnJlbnRQYWdlLCBsZW5ndGgsIHNvcnRGaWVsZCwgc29ydE9yZGVyKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hGb3JtU2NoZW1hcyA9IChcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIHNvcnRGaWVsZDogc3RyaW5nLFxuICAgIHNvcnRPcmRlcjogbnVtYmVyXG4gICkgPT4ge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hGb3JtU2NoZW1hTGlzdChsZW5ndGgsIGN1cnJlbnRQYWdlLCBzb3J0RmllbGQsIHNvcnRPcmRlcik7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJU3RhdGUpID0+ICh7XG4gIGRhdGE6IHN0YXRlLmZvcm1TY2hlbWEubGlzdC5kYXRhLFxuICBsb2FkaW5nOiBzdGF0ZS5mb3JtU2NoZW1hLmxpc3QubG9hZGluZyxcbiAgdG90YWw6IHN0YXRlLmZvcm1TY2hlbWEubGlzdC50b3RhbFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZmV0Y2hGb3JtU2NoZW1hTGlzdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoRm9ybVNjaGVtYUxpc3QpO1xuIl19