"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactRedux = require("react-redux");

var _abilityContext = require("../../ability-context");

var _emailTemplate = require("../../actions/emailTemplate");

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

var EmailTemplateList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmailTemplateList, _React$Component);

  function EmailTemplateList(props) {
    var _this;

    _classCallCheck(this, EmailTemplateList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmailTemplateList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "columns", void 0);

    _defineProperty(_assertThisInitialized(_this), "hideViewTemplate", function () {
      _this.setState({
        modal: false,
        template: {}
      });
    });

    _defineProperty(_assertThisInitialized(_this), "ViewEmailTemplate", function (id) {
      _this.props.getEmailTemplate(id, function (response) {
        _this.setState({
          modal: !_this.state.modal,
          template: response
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createEmailTemplate", function () {
      _this.props.history.push('/emailTemplate');
    });

    _defineProperty(_assertThisInitialized(_this), "editEmailemplate", function (id) {
      _this.props.history.push("/emailTemplate/".concat(id));
    });

    _defineProperty(_assertThisInitialized(_this), "fetchEmailTemplateList", function (data) {
      _this.props.getAllEmailTemplates(data);
    });

    _this.columns = [new _Column.default().withKey('_id').withLabel('ID'), new _Column.default().withKey('name').withLabel('Name'), new _Column.default().withKey('description').withLabel('Description'), new _Column.default().withKey('body').withLabel('Actions').withCellFormatter(function (cell, row) {
      return React.createElement("div", null, React.createElement(_index.BaseIcon, {
        display: "inline",
        name: "Edit",
        onClick: function onClick() {
          return _this.editEmailemplate(row._id);
        }
      }), React.createElement(_index.BaseIcon, {
        display: "inline",
        name: "Eye",
        onClick: function onClick() {
          return _this.ViewEmailTemplate(row._id);
        }
      }));
    })];
    _this.state = {
      modal: false,
      template: {}
    };
    return _this;
  }

  _createClass(EmailTemplateList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = {
        currentPage: 1,
        limit: 10,
        sortField: 'id',
        sortOrder: 1
      };
      this.fetchEmailTemplateList(data);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.resetInitialState();
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
      var _this$state = this.state,
          template = _this$state.template,
          modal = _this$state.modal;
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
          return _this2.createEmailTemplate();
        },
        name: "Create Template"
      }))), React.createElement(_Table.default, {
        keyField: "_id",
        data: data || [],
        columns: this.columns,
        loading: loading || false,
        length: length || 10,
        total: total || 0,
        remote: true,
        onUpdate: function onUpdate(nextState) {
          var updatedData = {
            currentPage: nextState.currentPage,
            limit: nextState.length,
            sortField: nextState.sortField,
            sortOrder: nextState.sortOrder
          };

          _this2.fetchEmailTemplateList(updatedData);
        }
      }), modal && React.createElement(_reactBootstrap.Modal, {
        bsSize: "lg",
        backdrop: false,
        show: modal,
        onHide: this.hideViewTemplate
      }, React.createElement(_reactBootstrap.ModalHeader, {
        closeButton: true
      }, template.name), React.createElement(_reactBootstrap.ModalBody, null, React.createElement("div", null, React.createElement("iframe", {
        style: {
          minHeight: '75vh'
        },
        width: "100%",
        srcDoc: template.body
      })))));
    }
  }]);

  return EmailTemplateList;
}(React.Component);

_defineProperty(EmailTemplateList, "defaultProps", {
  length: 10
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.emailTemplate.data,
    loading: state.emailTemplate.loading,
    total: state.emailTemplate.total
  };
};

var mapDispatchToProps = {
  getAllEmailTemplates: _emailTemplate.getAllEmailTemplates,
  getEmailTemplate: _emailTemplate.getEmailTemplate,
  resetInitialState: _emailTemplate.resetInitialState
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EmailTemplateList);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9FbWFpbFRlbXBsYXRlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFbWFpbFRlbXBsYXRlTGlzdCIsInByb3BzIiwic2V0U3RhdGUiLCJtb2RhbCIsInRlbXBsYXRlIiwiaWQiLCJnZXRFbWFpbFRlbXBsYXRlIiwicmVzcG9uc2UiLCJzdGF0ZSIsImhpc3RvcnkiLCJwdXNoIiwiZGF0YSIsImdldEFsbEVtYWlsVGVtcGxhdGVzIiwiY29sdW1ucyIsIkNvbHVtbiIsIndpdGhLZXkiLCJ3aXRoTGFiZWwiLCJ3aXRoQ2VsbEZvcm1hdHRlciIsImNlbGwiLCJyb3ciLCJlZGl0RW1haWxlbXBsYXRlIiwiX2lkIiwiVmlld0VtYWlsVGVtcGxhdGUiLCJjdXJyZW50UGFnZSIsImxpbWl0Iiwic29ydEZpZWxkIiwic29ydE9yZGVyIiwiZmV0Y2hFbWFpbFRlbXBsYXRlTGlzdCIsInJlc2V0SW5pdGlhbFN0YXRlIiwibG9hZGluZyIsInRvdGFsIiwibGVuZ3RoIiwiY3JlYXRlRW1haWxUZW1wbGF0ZSIsIm5leHRTdGF0ZSIsInVwZGF0ZWREYXRhIiwiaGlkZVZpZXdUZW1wbGF0ZSIsIm5hbWUiLCJtaW5IZWlnaHQiLCJib2R5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJlbWFpbFRlbXBsYXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJNQSxpQjs7Ozs7QUFTSiw2QkFBWUMsS0FBWixFQUE2RDtBQUFBOztBQUFBOztBQUMzRCwyRkFBTUEsS0FBTjs7QUFEMkQ7O0FBQUEsdUVBMEZsQyxZQUFNO0FBQy9CLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxLQUFLLEVBQUUsS0FESztBQUVaQyxRQUFBQSxRQUFRLEVBQUU7QUFGRSxP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QUQ7QUFBYSxRQUFBLFdBQVcsRUFBRTtBQUExQixTQUFpQy9CLFFBQVEsQ0FBQ2dDLElBQTFDLENBREYsRUFFRSxvQkFBQyx5QkFBRCxRQUNFLGlDQUNFO0FBQVEsUUFBQSxLQUFLLEVBQUU7QUFBQ0MsVUFBQUEsU0FBUyxFQUFFO0FBQVosU0FBZjtBQUFvQyxRQUFBLEtBQUssRUFBQyxNQUExQztBQUFpRCxRQUFBLE1BQU0sRUFBRWpDLFFBQVEsQ0FBQ2tDO0FBQWxFLFFBREYsQ0FERixDQUZGLENBN0JKLENBREY7QUF5Q0Q7Ozs7RUFsRzZCQyxLQUFLLENBQUNDLFM7O2dCQUFoQ3hDLGlCLGtCQUl5QjtBQUMzQitCLEVBQUFBLE1BQU0sRUFBRTtBQURtQixDOztBQTJIL0IsSUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDakMsS0FBRDtBQUFBLFNBQW9CO0FBQzFDRyxJQUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ2tDLGFBQU4sQ0FBb0IvQixJQURnQjtBQUUxQ2tCLElBQUFBLE9BQU8sRUFBRXJCLEtBQUssQ0FBQ2tDLGFBQU4sQ0FBb0JiLE9BRmE7QUFHMUNDLElBQUFBLEtBQUssRUFBRXRCLEtBQUssQ0FBQ2tDLGFBQU4sQ0FBb0JaO0FBSGUsR0FBcEI7QUFBQSxDQUF4Qjs7QUFNQSxJQUFNYSxrQkFBa0IsR0FBRztBQUN6Qi9CLEVBQUFBLG9CQUFvQixFQUFwQkEsbUNBRHlCO0FBRXpCTixFQUFBQSxnQkFBZ0IsRUFBaEJBLCtCQUZ5QjtBQUd6QnNCLEVBQUFBLGlCQUFpQixFQUFqQkE7QUFIeUIsQ0FBM0I7O2VBTWUseUJBQ2JhLGVBRGEsRUFFYkUsa0JBRmEsRUFHYjNDLGlCQUhhLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEhlYWRlciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBDYW4gfSBmcm9tICcuLi8uLi9hYmlsaXR5LWNvbnRleHQnO1xuaW1wb3J0IHsgZ2V0QWxsRW1haWxUZW1wbGF0ZXMsIGdldEVtYWlsVGVtcGxhdGUsIElUZW1wbGF0ZUxpc3QsIElFbWFpbFRlbXBsYXRlLCByZXNldEluaXRpYWxTdGF0ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZW1haWxUZW1wbGF0ZSc7XG5pbXBvcnQgeyBCYXNlSWNvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IFRhYmxlLCB7IElUYWJsZVVwZGF0ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZSc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGUvQ29sdW1uJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IElSZXF1ZXN0RmlsdGVyIH0gZnJvbSAncmVxdWVzdC1maWx0ZXInO1xuaW1wb3J0IENCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQ0J1dHRvbic7XG5pbnRlcmZhY2UgSU1hcFN0YXRlVG9Qcm9wcyB7XG4gIGRhdGE6IElUZW1wbGF0ZUxpc3RbXTtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgdG90YWw6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElNYXBEaXNwYXRjaFRvUHJvcHMge1xuICBnZXRBbGxFbWFpbFRlbXBsYXRlczogKGRhdGE6IElSZXF1ZXN0RmlsdGVyKSA9PiB2b2lkO1xuICBnZXRFbWFpbFRlbXBsYXRlOiAoaWQ6IHN0cmluZywgY2FsbGJhY2s/OiAocmVzcG9uc2U6IElFbWFpbFRlbXBsYXRlKSA9PiB2b2lkKSA9PiB2b2lkO1xuICByZXNldEluaXRpYWxTdGF0ZTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElFbWFpbFRlbXBsYXRlTGlzdCBleHRlbmRzIElNYXBTdGF0ZVRvUHJvcHMsIElNYXBEaXNwYXRjaFRvUHJvcHMge1xuICBsZW5ndGg/OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgSVN0YXRlRW1haWxUZW1wbGF0ZSB7XG4gIG1vZGFsPzogYm9vbGVhbjtcbiAgdGVtcGxhdGU/OiBhbnk7XG59XG5cbmNsYXNzIEVtYWlsVGVtcGxhdGVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBJRW1haWxUZW1wbGF0ZUxpc3QgJiBSb3V0ZUNvbXBvbmVudFByb3BzLFxuICBJU3RhdGVFbWFpbFRlbXBsYXRlXG4gID4ge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsZW5ndGg6IDEwXG4gIH07XG4gIHByaXZhdGUgY29sdW1uczogQ29sdW1uW107XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElFbWFpbFRlbXBsYXRlTGlzdCAmIFJvdXRlQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgbmV3IENvbHVtbigpLndpdGhLZXkoJ19pZCcpLndpdGhMYWJlbCgnSUQnKSxcbiAgICAgIG5ldyBDb2x1bW4oKS53aXRoS2V5KCduYW1lJykud2l0aExhYmVsKCdOYW1lJyksXG4gICAgICBuZXcgQ29sdW1uKCkud2l0aEtleSgnZGVzY3JpcHRpb24nKS53aXRoTGFiZWwoJ0Rlc2NyaXB0aW9uJyksXG4gICAgICBuZXcgQ29sdW1uKClcbiAgICAgICAgLndpdGhLZXkoJ2JvZHknKVxuICAgICAgICAud2l0aExhYmVsKCdBY3Rpb25zJylcbiAgICAgICAgLndpdGhDZWxsRm9ybWF0dGVyKChjZWxsOiBhbnksIHJvdzogYW55KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCYXNlSWNvblxuICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIkVkaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmVkaXRFbWFpbGVtcGxhdGUocm93Ll9pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJhc2VJY29uXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxuICAgICAgICAgICAgICBuYW1lPVwiRXllXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5WaWV3RW1haWxUZW1wbGF0ZShyb3cuX2lkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIClcbiAgICBdO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICB0ZW1wbGF0ZToge31cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIGxpbWl0OiAxMCxcbiAgICAgIHNvcnRGaWVsZDogJ2lkJyxcbiAgICAgIHNvcnRPcmRlcjogMVxuICAgIH07XG4gICAgdGhpcy5mZXRjaEVtYWlsVGVtcGxhdGVMaXN0KGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMucmVzZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBkYXRhLCB0b3RhbCwgbGVuZ3RoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGVtcGxhdGUsIG1vZGFsIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgPENhbiBJPVwicmVhZFwiIGE9XCJhZG1pblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPENCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHQgbWItMlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY3JlYXRlRW1haWxUZW1wbGF0ZSgpfVxuICAgICAgICAgICAgICBuYW1lPVwiQ3JlYXRlIFRlbXBsYXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FuPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBrZXlGaWVsZD1cIl9pZFwiXG4gICAgICAgICAgZGF0YT17ZGF0YSB8fCBbXX1cbiAgICAgICAgICBjb2x1bW5zPXt0aGlzLmNvbHVtbnN9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZyB8fCBmYWxzZX1cbiAgICAgICAgICBsZW5ndGg9e2xlbmd0aCB8fCAxMH1cbiAgICAgICAgICB0b3RhbD17dG90YWwgfHwgMH1cbiAgICAgICAgICByZW1vdGU9e3RydWV9XG4gICAgICAgICAgb25VcGRhdGU9eyhuZXh0U3RhdGU6IElUYWJsZVVwZGF0ZVByb3BzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHtcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U6IG5leHRTdGF0ZS5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgbGltaXQ6IG5leHRTdGF0ZS5sZW5ndGgsXG4gICAgICAgICAgICAgIHNvcnRGaWVsZDogbmV4dFN0YXRlLnNvcnRGaWVsZCxcbiAgICAgICAgICAgICAgc29ydE9yZGVyOiBuZXh0U3RhdGUuc29ydE9yZGVyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5mZXRjaEVtYWlsVGVtcGxhdGVMaXN0KHVwZGF0ZWREYXRhKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7bW9kYWwgJiZcbiAgICAgICAgICA8TW9kYWwgYnNTaXplPVwibGdcIiBiYWNrZHJvcD17ZmFsc2V9IHNob3c9e21vZGFsfSBvbkhpZGU9e3RoaXMuaGlkZVZpZXdUZW1wbGF0ZX0gPlxuICAgICAgICAgICAgPE1vZGFsSGVhZGVyIGNsb3NlQnV0dG9uPXt0cnVlfT57dGVtcGxhdGUubmFtZX08L01vZGFsSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgPGlmcmFtZSBzdHlsZT17e21pbkhlaWdodDogJzc1dmgnfX0gd2lkdGg9XCIxMDAlXCIgc3JjRG9jPXt0ZW1wbGF0ZS5ib2R5fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcHJpdmF0ZSBoaWRlVmlld1RlbXBsYXRlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgdGVtcGxhdGU6IHt9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIFZpZXdFbWFpbFRlbXBsYXRlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLmdldEVtYWlsVGVtcGxhdGUoaWQsIChyZXNwb25zZTogSUVtYWlsVGVtcGxhdGUpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb2RhbDogIXRoaXMuc3RhdGUubW9kYWwsXG4gICAgICAgIHRlbXBsYXRlOiByZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBjcmVhdGVFbWFpbFRlbXBsYXRlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZW1haWxUZW1wbGF0ZScpO1xuICB9XG5cbiAgcHJpdmF0ZSBlZGl0RW1haWxlbXBsYXRlID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2VtYWlsVGVtcGxhdGUvJHtpZH1gKTtcbiAgfVxuXG4gIHByaXZhdGUgZmV0Y2hFbWFpbFRlbXBsYXRlTGlzdCA9IChkYXRhOiBJUmVxdWVzdEZpbHRlcikgPT4ge1xuICAgIHRoaXMucHJvcHMuZ2V0QWxsRW1haWxUZW1wbGF0ZXMoZGF0YSk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJU3RhdGUpID0+ICh7XG4gIGRhdGE6IHN0YXRlLmVtYWlsVGVtcGxhdGUuZGF0YSxcbiAgbG9hZGluZzogc3RhdGUuZW1haWxUZW1wbGF0ZS5sb2FkaW5nLFxuICB0b3RhbDogc3RhdGUuZW1haWxUZW1wbGF0ZS50b3RhbFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZ2V0QWxsRW1haWxUZW1wbGF0ZXMsXG4gIGdldEVtYWlsVGVtcGxhdGUsXG4gIHJlc2V0SW5pdGlhbFN0YXRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShFbWFpbFRlbXBsYXRlTGlzdCk7XG4iXX0=