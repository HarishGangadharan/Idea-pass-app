"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactLocalizeRedux = require("react-localize-redux");

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _formschema = require("../../actions/formschema");

var _FormBuilder = _interopRequireDefault(require("../../components/FormBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormBuilder =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormBuilder, _React$Component);

  function FormBuilder(props) {
    var _this;

    _classCallCheck(this, FormBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormBuilder).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "formTypes", void 0);

    _defineProperty(_assertThisInitialized(_this), "templateTypes", void 0);

    _defineProperty(_assertThisInitialized(_this), "idTypes", void 0);

    _defineProperty(_assertThisInitialized(_this), "formBuildSchema", {
      icon: 'fa fa-folder',
      key: '',
      schema: {
        components: [],
        type: 'template'
      },
      title: '',
      weight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "builderOptions", {
      builder: {
        custom: {
          components: {},
          title: 'Form Templates',
          weight: 40
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setFormNameAndType", function (e) {
      var fieldName = e.target.id;
      _this.props.form[fieldName] = e.target.value;

      _this.setState({
        templateType: e.target.value,
        isFormNameEmpty: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setIdTpyes", function (e) {
      console.log('1111111111', e.target.value);
      _this.props.form[e.target.id] = e.target.value;

      _this.setState({
        idType: e.target.value,
        isFormNameEmpty: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setFormPrefix", function (e) {
      var fieldName = e.target.id;
      _this.props.form[fieldName] = e.target.value;

      _this.setState({
        isFormPrefixValid: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveFormSchema", function () {
      var form = _this.props.form;
      var _this$state = _this.state,
          isActive = _this$state.isActive,
          sequence = _this$state.sequence,
          templateType = _this$state.templateType;
      var isPrefixValid = !form.prefix || form.prefix && form.prefix.length < 6;

      if (form && form.name === '') {
        _this.setState({
          isFormNameEmpty: true
        });
      }

      if (isPrefixValid) {
        _this.setState({
          isFormPrefixValid: true
        });
      }

      if (!form._id) {
        delete form._id;
      } // name is a required field


      if (form && form.name && !isPrefixValid) {
        if (templateType === "core_fields") {
          form = Object.assign(form, {
            is_active: isActive,
            sequence: sequence
          });
        }

        console.log('**************', form);

        _this.props.createFormSchema(form, form._id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "cancelUpdateSchema", function () {
      _this.props.history.goBack();
    });

    _defineProperty(_assertThisInitialized(_this), "renderSchema", function (schema) {//
    });

    _defineProperty(_assertThisInitialized(_this), "renderComponent", function (schema, renderMethod) {
      switch (renderMethod) {
        case 'save':
          break;

        case 'edit':
          break;

        case 'update':
          break;

        case 'delete':
          break;

        case 'cancel':
          break;

        default:
          break;
      }
    });

    _this.state = {
      formData: {},
      formSchemaId: _this.props.match ? _this.props.match.params.id : '',
      name: '',
      isFormNameEmpty: false,
      isFormPrefixValid: false,
      templateType: 'Default',
      idType: 'Auto increment',
      isActive: true,
      sequence: 1
    };
    _this.formTypes = [{
      id: 'data',
      name: 'Data'
    }, {
      id: 'ticket',
      name: 'Ticket'
    }];
    _this.templateTypes = [{
      id: 'default',
      name: 'Default'
    }, {
      id: 'app_form',
      name: 'Application Form'
    }, {
      id: 'template_form',
      name: 'Template Form'
    }, {
      id: 'core_fields',
      name: 'Core Fields'
    }];
    _this.idTypes = [{
      id: 'auto_increment',
      name: 'Auto increment'
    }, {
      id: 'custom',
      name: 'Custom'
    }];
    return _this;
  }

  _createClass(FormBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.match && this.props.match.params.id) {
        this.props.fetchFormSchemaRequest(this.props.match.params.id);
      }

      var renderTemplateList = function renderTemplateList(templates) {
        templates.forEach(function (template, index) {
          var templateSchema = _objectSpread({}, _this2.formBuildSchema);

          templateSchema.title = template.name;
          templateSchema.key = template.name_singular;
          templateSchema.weight = index;
          var formMeta = templateSchema.schema;
          formMeta.label = template.name;
          formMeta.ref = template.name;
          formMeta.key = template.name_singular;
          formMeta.components = _toConsumableArray(JSON.parse(template.form_data).components);
          templateSchema.schema = _objectSpread({}, formMeta);
          _this2.builderOptions.builder.custom.components[template.name_singular] = _objectSpread({}, templateSchema);
        });
      };

      this.props.fetchTemplateList(renderTemplateList);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.updateFormSchemaState();
      this.props.clearFormSchemeData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          isLoading = _this$props.isLoading,
          form = _this$props.form,
          isTemplateLoading = _this$props.isTemplateLoading;
      console.log('form', form, this.state.idType, this.state.templateType);
      var _this$state2 = this.state,
          isActive = _this$state2.isActive,
          sequence = _this$state2.sequence,
          templateType = _this$state2.templateType,
          isFormPrefixValid = _this$state2.isFormPrefixValid;
      var formTypes = this.formTypes,
          templateTypes = this.templateTypes,
          idTypes = this.idTypes;
      return React.createElement("div", {
        className: "shadow-container"
      }, !isLoading && React.createElement(React.Fragment, null, React.createElement("div", {
        className: "row mb-3"
      }, React.createElement("div", {
        className: "col-md-2"
      }, React.createElement("label", {
        className: "control-label"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "label.prefix"
      })), " ", React.createElement("span", {
        className: "error-text"
      }, "*"), React.createElement("input", {
        type: "text",
        id: "prefix",
        defaultValue: form.prefix,
        className: "form-control",
        onChange: this.setFormPrefix,
        required: true
      }), isFormPrefixValid && React.createElement("span", {
        className: "error-text"
      }, "Provide a valid prefix")), React.createElement("div", {
        className: "col-md-4"
      }, React.createElement("label", {
        className: "control-label"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "label.formName"
      })), " ", React.createElement("span", {
        className: "error-text"
      }, "*"), React.createElement("input", {
        type: "text",
        id: "name",
        defaultValue: form.name,
        className: "form-control",
        onChange: this.setFormNameAndType,
        required: true
      }), this.state.isFormNameEmpty && React.createElement("span", {
        className: "error-text"
      }, "Form Name is mandatory")), React.createElement("div", {
        className: "col-md-2"
      }, React.createElement("label", {
        className: "control-label"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "label.formType"
      })), " ", React.createElement("span", {
        className: "error-text"
      }, "*"), React.createElement("select", {
        className: "form-control",
        id: "form_type",
        defaultValue: form.form_type,
        onChange: this.setFormNameAndType
      }, formTypes.map(function (type) {
        return React.createElement("option", {
          key: type.id,
          value: type.id
        }, type.name);
      }))), React.createElement("div", {
        className: "col-md-2"
      }, React.createElement("label", {
        className: "control-label"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "label.templateType"
      })), " ", React.createElement("span", {
        className: "error-text"
      }, "*"), React.createElement("select", {
        className: "form-control",
        id: "template_type",
        defaultValue: form.template_type,
        onChange: this.setFormNameAndType
      }, templateTypes.map(function (template) {
        return React.createElement("option", {
          key: template.id,
          value: template.id
        }, template.name);
      }))), React.createElement("div", {
        className: "col-md-2"
      }, React.createElement("label", {
        className: "control-label"
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "label.idType"
      })), " ", React.createElement("span", {
        className: "error-text"
      }, "*"), React.createElement("select", {
        className: "form-control",
        id: "id_type",
        defaultValue: form.id_type,
        onChange: this.setFormNameAndType
      }, idTypes.map(function (template) {
        return React.createElement("option", {
          key: template.id,
          value: template.id
        }, template.name);
      })))), templateType === "core_fields" && React.createElement("div", {
        className: "row mb-3 d-flex align-items-center"
      }, React.createElement("div", {
        className: "col-md-3"
      }, React.createElement("label", {
        className: "control-label"
      }, "Sequence"), React.createElement("input", {
        type: "number",
        name: "sequence",
        value: sequence,
        onChange: function onChange(e) {
          return _this3.setState({
            sequence: parseInt(e.target.value)
          });
        },
        className: "form-control"
      })), React.createElement("div", {
        className: "col-md-3 mt-20"
      }, React.createElement("input", {
        type: "checkbox",
        name: "is_active",
        defaultChecked: isActive,
        className: "mt-0 mr-2",
        onChange: function onChange(e) {
          return _this3.setState({
            isActive: e.target.checked
          });
        }
      }), React.createElement("span", null, "Is Active"))), !isTemplateLoading && React.createElement(_FormBuilder.default, {
        formBuilderSchema: form.form_data,
        builderOptions: this.builderOptions,
        renderSchema: this.renderSchema,
        renderComponent: this.renderComponent
      })), React.createElement("div", {
        className: "row d-flex justify-content-end mt-3"
      }, React.createElement("button", {
        className: "btn btn-primary mr-3",
        onClick: function onClick() {
          return _this3.cancelUpdateSchema();
        }
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: "label.cancel"
      })), React.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return _this3.saveFormSchema();
        }
      }, React.createElement(_reactLocalizeRedux.Translate, {
        id: form._id ? 'label.updateForm' : 'label.createForm'
      }))));
    }
  }]);

  return FormBuilder;
}(React.Component);

var mapDispatchToProps = {
  createFormSchema: _formschema.createFormSchemaRequest,
  fetchFormSchemaRequest: _formschema.fetchFormSchemaRequest,
  fetchTemplateList: _formschema.fetchTemplateList,
  updateFormSchemaState: _formschema.updateFormSchemaState,
  clearFormSchemeData: _formschema.clearFormSchemeData
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    form: state.formSchema.currentFormSchema,
    isLoading: state.formSchema.currentFormSchema.loading,
    isTemplateLoading: state.formSchema.templateList.loading,
    templates: state.formSchema.templateList.data
  };
};

var _default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _reactLocalizeRedux.withLocalize)(FormBuilder);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Gb3JtQnVpbGRlci9pbmRleC50c3giXSwibmFtZXMiOlsiRm9ybUJ1aWxkZXIiLCJwcm9wcyIsImljb24iLCJrZXkiLCJzY2hlbWEiLCJjb21wb25lbnRzIiwidHlwZSIsInRpdGxlIiwid2VpZ2h0IiwiYnVpbGRlciIsImN1c3RvbSIsImUiLCJmaWVsZE5hbWUiLCJ0YXJnZXQiLCJpZCIsImZvcm0iLCJ2YWx1ZSIsInNldFN0YXRlIiwidGVtcGxhdGVUeXBlIiwiaXNGb3JtTmFtZUVtcHR5IiwiY29uc29sZSIsImxvZyIsImlkVHlwZSIsImlzRm9ybVByZWZpeFZhbGlkIiwic3RhdGUiLCJpc0FjdGl2ZSIsInNlcXVlbmNlIiwiaXNQcmVmaXhWYWxpZCIsInByZWZpeCIsImxlbmd0aCIsIm5hbWUiLCJfaWQiLCJPYmplY3QiLCJhc3NpZ24iLCJpc19hY3RpdmUiLCJjcmVhdGVGb3JtU2NoZW1hIiwiaGlzdG9yeSIsImdvQmFjayIsInJlbmRlck1ldGhvZCIsImZvcm1EYXRhIiwiZm9ybVNjaGVtYUlkIiwibWF0Y2giLCJwYXJhbXMiLCJmb3JtVHlwZXMiLCJ0ZW1wbGF0ZVR5cGVzIiwiaWRUeXBlcyIsImZldGNoRm9ybVNjaGVtYVJlcXVlc3QiLCJyZW5kZXJUZW1wbGF0ZUxpc3QiLCJ0ZW1wbGF0ZXMiLCJmb3JFYWNoIiwidGVtcGxhdGUiLCJpbmRleCIsInRlbXBsYXRlU2NoZW1hIiwiZm9ybUJ1aWxkU2NoZW1hIiwibmFtZV9zaW5ndWxhciIsImZvcm1NZXRhIiwibGFiZWwiLCJyZWYiLCJKU09OIiwicGFyc2UiLCJmb3JtX2RhdGEiLCJidWlsZGVyT3B0aW9ucyIsImZldGNoVGVtcGxhdGVMaXN0IiwidXBkYXRlRm9ybVNjaGVtYVN0YXRlIiwiY2xlYXJGb3JtU2NoZW1lRGF0YSIsImlzTG9hZGluZyIsImlzVGVtcGxhdGVMb2FkaW5nIiwic2V0Rm9ybVByZWZpeCIsInNldEZvcm1OYW1lQW5kVHlwZSIsImZvcm1fdHlwZSIsIm1hcCIsInRlbXBsYXRlX3R5cGUiLCJpZF90eXBlIiwicGFyc2VJbnQiLCJjaGVja2VkIiwicmVuZGVyU2NoZW1hIiwicmVuZGVyQ29tcG9uZW50IiwiY2FuY2VsVXBkYXRlU2NoZW1hIiwic2F2ZUZvcm1TY2hlbWEiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNyZWF0ZUZvcm1TY2hlbWFSZXF1ZXN0IiwibWFwU3RhdGVUb1Byb3BzIiwiZm9ybVNjaGVtYSIsImN1cnJlbnRGb3JtU2NoZW1hIiwibG9hZGluZyIsInRlbXBsYXRlTGlzdCIsImRhdGEiLCJ3aXRoTG9jYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFJQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBeURNQSxXOzs7OztBQXdCSix1QkFBWUMsS0FBWixFQUF5QztBQUFBOztBQUFBOztBQUN2QyxxRkFBTUEsS0FBTjs7QUFEdUM7O0FBQUE7O0FBQUE7O0FBQUEsc0VBbkJFO0FBQ3pDQyxNQUFBQSxJQUFJLEVBQUUsY0FEbUM7QUFFekNDLE1BQUFBLEdBQUcsRUFBRSxFQUZvQztBQUd6Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQ05DLFFBQUFBLFVBQVUsRUFBRSxFQUROO0FBRU5DLFFBQUFBLElBQUksRUFBRTtBQUZBLE9BSGlDO0FBT3pDQyxNQUFBQSxLQUFLLEVBQUUsRUFQa0M7QUFRekNDLE1BQUFBLE1BQU0sRUFBRTtBQVJpQyxLQW1CRjs7QUFBQSxxRUFUQTtBQUN2Q0MsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLE1BQU0sRUFBRTtBQUNOTCxVQUFBQSxVQUFVLEVBQUUsRUFETjtBQUVORSxVQUFBQSxLQUFLLEVBQUUsZ0JBRkQ7QUFHTkMsVUFBQUEsTUFBTSxFQUFFO0FBSEY7QUFERDtBQUQ4QixLQVNBOztBQUFBLHlFQXFEYixVQUFDRyxDQUFELEVBQVk7QUFDdEMsVUFBTUMsU0FBUyxHQUFHRCxDQUFD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QUNDLGNBQUwsRUFBTjtBQUFBO0FBQTdDLFNBQ0Usb0JBQUMsNkJBQUQ7QUFBVyxRQUFBLEVBQUUsRUFBRS9ELElBQUksQ0FBQ2dCLEdBQUwsR0FBVyxrQkFBWCxHQUFnQztBQUEvQyxRQURGLENBSkYsQ0EzRkYsQ0FERjtBQXNHRDs7OztFQW5RdUJnRCxLQUFLLENBQUNDLFM7O0FBc1FoQyxJQUFNQyxrQkFBa0IsR0FBSTtBQUMxQjlDLEVBQUFBLGdCQUFnQixFQUFFK0MsbUNBRFE7QUFFMUJwQyxFQUFBQSxzQkFBc0IsRUFBdEJBLGtDQUYwQjtBQUcxQmdCLEVBQUFBLGlCQUFpQixFQUFqQkEsNkJBSDBCO0FBSTFCQyxFQUFBQSxxQkFBcUIsRUFBckJBLGlDQUowQjtBQUsxQkMsRUFBQUEsbUJBQW1CLEVBQW5CQTtBQUwwQixDQUE1Qjs7QUFRQSxJQUFNbUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDM0QsS0FBRDtBQUFBLFNBQW9CO0FBQzFDVCxJQUFBQSxJQUFJLEVBQUVTLEtBQUssQ0FBQzRELFVBQU4sQ0FBaUJDLGlCQURtQjtBQUUxQ3BCLElBQUFBLFNBQVMsRUFBRXpDLEtBQUssQ0FBQzRELFVBQU4sQ0FBaUJDLGlCQUFqQixDQUFtQ0MsT0FGSjtBQUcxQ3BCLElBQUFBLGlCQUFpQixFQUFFMUMsS0FBSyxDQUFDNEQsVUFBTixDQUFpQkcsWUFBakIsQ0FBOEJELE9BSFA7QUFJMUN0QyxJQUFBQSxTQUFTLEVBQUV4QixLQUFLLENBQUM0RCxVQUFOLENBQWlCRyxZQUFqQixDQUE4QkM7QUFKQyxHQUFwQjtBQUFBLENBQXhCOztlQU9lLG9CQUFRLHlCQUNwQkwsZUFEb0IsRUFDSEYsa0JBREcsQ0FBUixFQUViUSxnQ0FGYSxFQUVDekYsV0FGRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgVHJhbnNsYXRlLFxuICB3aXRoTG9jYWxpemVcbn0gZnJvbSAncmVhY3QtbG9jYWxpemUtcmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUZvcm1TY2hlbWFSZXF1ZXN0LCBmZXRjaEZvcm1TY2hlbWFSZXF1ZXN0LCBmZXRjaFRlbXBsYXRlTGlzdCwgdXBkYXRlRm9ybVNjaGVtYVN0YXRlLCBjbGVhckZvcm1TY2hlbWVEYXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9mb3Jtc2NoZW1hJztcbmltcG9ydCBCdWlsZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9ybUJ1aWxkZXInO1xuaW1wb3J0IHsgSVN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgSUZvcm1TY2hlbWEgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9mb3Jtc2NoZW1hJztcbmludGVyZmFjZSBJRkJ1aWxkZXJTdGF0ZU1hcCB7XG4gIGZvcm06IGFueTtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBpc1RlbXBsYXRlTG9hZGluZzogYm9vbGVhbjtcbiAgdGVtcGxhdGVzOiBJRm9ybVNjaGVtYVtdO1xufVxuXG5pbnRlcmZhY2UgSUZCdWlsZGVyRGlzcGF0Y2hNYXAge1xuICBjcmVhdGVGb3JtU2NoZW1hOiAoZGF0YTogYW55LCBzY2hlbWFJZD86IHN0cmluZykgPT4gdm9pZDtcbiAgZmV0Y2hGb3JtU2NoZW1hUmVxdWVzdDogKHNjaGVtYUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGZldGNoVGVtcGxhdGVMaXN0OiAoY2FsbGJhY2s/OiAodGVtcGxhdGVzOiBJRm9ybVNjaGVtYVtdKSA9PiB2b2lkKSA9PiB2b2lkO1xuICB1cGRhdGVGb3JtU2NoZW1hU3RhdGU6IChkYXRhPzogYW55KSA9PiB2b2lkO1xuICBjbGVhckZvcm1TY2hlbWVEYXRhOiAoKSA9PiB2b2lkXG59XG5cbmludGVyZmFjZSBJRkJ1aWxkZXJTdGF0ZVByb3BzIHtcbiAgZm9ybURhdGE6IGFueTtcbiAgZm9ybVNjaGVtYUlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNGb3JtTmFtZUVtcHR5OiBib29sZWFuO1xuICBpc0Zvcm1QcmVmaXhWYWxpZDogYm9vbGVhbjtcbiAgdGVtcGxhdGVUeXBlOiBzdHJpbmc7XG4gIGlkVHlwZTogc3RyaW5nO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgc2VxdWVuY2U6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElGb3JtQnVpbGRTY2hlbWEge1xuICBpY29uOiBzdHJpbmc7XG4gIGtleTogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc2NoZW1hOiB7XG4gICAgdHlwZTogJ3RlbXBsYXRlJyxcbiAgICBjb21wb25lbnRzOiBhbnlbXVxuICB9XG59XG5pbnRlcmZhY2UgSUJ1aWxkZXJPcHRpb25zIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuICBidWlsZGVyOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIGN1c3RvbToge1xuICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgIHdlaWdodDogbnVtYmVyO1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBJRm9ybUJ1aWxkU2NoZW1hIHwgYm9vbGVhbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmludGVyZmFjZSBJRkJ1aWxkZXJNZXJnZWRQcm9wcyBleHRlbmRzIElGQnVpbGRlclN0YXRlTWFwLCBJRkJ1aWxkZXJEaXNwYXRjaE1hcCwgUm91dGVDb21wb25lbnRQcm9wczx7IGlkOiBzdHJpbmcgfT4ge1xuXG59XG5cbmNsYXNzIEZvcm1CdWlsZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElGQnVpbGRlck1lcmdlZFByb3BzLCBJRkJ1aWxkZXJTdGF0ZVByb3BzPiB7XG4gIHB1YmxpYyBmb3JtVHlwZXM6IEFycmF5PHsgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nIH0+O1xuICBwdWJsaWMgdGVtcGxhdGVUeXBlczogQXJyYXk8eyBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcgfT47XG4gIHB1YmxpYyBpZFR5cGVzOiBBcnJheTx7IGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyB9PjtcblxuICBwdWJsaWMgZm9ybUJ1aWxkU2NoZW1hOiBJRm9ybUJ1aWxkU2NoZW1hID0ge1xuICAgIGljb246ICdmYSBmYS1mb2xkZXInLFxuICAgIGtleTogJycsXG4gICAgc2NoZW1hOiB7XG4gICAgICBjb21wb25lbnRzOiBbXSxcbiAgICAgIHR5cGU6ICd0ZW1wbGF0ZSdcbiAgICB9LFxuICAgIHRpdGxlOiAnJyxcbiAgICB3ZWlnaHQ6IDBcbiAgfTtcbiAgcHVibGljIGJ1aWxkZXJPcHRpb25zOiBJQnVpbGRlck9wdGlvbnMgPSB7XG4gICAgYnVpbGRlcjoge1xuICAgICAgY3VzdG9tOiB7XG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICB0aXRsZTogJ0Zvcm0gVGVtcGxhdGVzJyxcbiAgICAgICAgd2VpZ2h0OiA0MFxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHM6IElGQnVpbGRlck1lcmdlZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtRGF0YToge30sXG4gICAgICBmb3JtU2NoZW1hSWQ6IHRoaXMucHJvcHMubWF0Y2ggPyB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCA6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBpc0Zvcm1OYW1lRW1wdHk6IGZhbHNlLFxuICAgICAgaXNGb3JtUHJlZml4VmFsaWQ6IGZhbHNlLFxuICAgICAgdGVtcGxhdGVUeXBlIDogJ0RlZmF1bHQnLFxuICAgICAgaWRUeXBlOidBdXRvIGluY3JlbWVudCcsXG4gICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgIHNlcXVlbmNlOiAxXG4gICAgfTtcbiAgICB0aGlzLmZvcm1UeXBlcyA9IFt7IGlkOiAnZGF0YScsIG5hbWU6ICdEYXRhJyB9LCB7IGlkOiAndGlja2V0JywgbmFtZTogJ1RpY2tldCcgfV07XG4gICAgdGhpcy50ZW1wbGF0ZVR5cGVzID0gW1xuICAgICAgeyBpZDogJ2RlZmF1bHQnLCBuYW1lOiAnRGVmYXVsdCcgfSxcbiAgICAgIHsgaWQ6ICdhcHBfZm9ybScsIG5hbWU6ICdBcHBsaWNhdGlvbiBGb3JtJyB9LFxuICAgICAgeyBpZDogJ3RlbXBsYXRlX2Zvcm0nLCBuYW1lOiAnVGVtcGxhdGUgRm9ybScgfSxcbiAgICAgIHsgaWQ6ICdjb3JlX2ZpZWxkcycsIG5hbWU6ICdDb3JlIEZpZWxkcycgfVxuICAgIF07XG4gICAgdGhpcy5pZFR5cGVzID0gW1xuICAgICAgeyBpZDogJ2F1dG9faW5jcmVtZW50JywgbmFtZTogJ0F1dG8gaW5jcmVtZW50JyB9LFxuICAgICAgeyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nIH1cbiAgICBdOyBcbiAgIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2ggJiYgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hGb3JtU2NoZW1hUmVxdWVzdCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlclRlbXBsYXRlTGlzdCA9ICh0ZW1wbGF0ZXM6IElGb3JtU2NoZW1hW10pID0+IHtcbiAgICAgIHRlbXBsYXRlcy5mb3JFYWNoKCh0ZW1wbGF0ZTogYW55LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZVNjaGVtYTogYW55ID0gey4uLnRoaXMuZm9ybUJ1aWxkU2NoZW1hfTtcbiAgICAgICAgdGVtcGxhdGVTY2hlbWEudGl0bGUgPSB0ZW1wbGF0ZS5uYW1lO1xuICAgICAgICB0ZW1wbGF0ZVNjaGVtYS5rZXkgPSB0ZW1wbGF0ZS5uYW1lX3Npbmd1bGFyO1xuICAgICAgICB0ZW1wbGF0ZVNjaGVtYS53ZWlnaHQgPSBpbmRleDtcbiAgICAgICAgY29uc3QgZm9ybU1ldGEgPSB0ZW1wbGF0ZVNjaGVtYS5zY2hlbWE7XG4gICAgICAgIGZvcm1NZXRhLmxhYmVsID0gdGVtcGxhdGUubmFtZTtcbiAgICAgICAgZm9ybU1ldGEucmVmID0gdGVtcGxhdGUubmFtZTtcbiAgICAgICAgZm9ybU1ldGEua2V5ID0gdGVtcGxhdGUubmFtZV9zaW5ndWxhcjtcbiAgICAgICAgZm9ybU1ldGEuY29tcG9uZW50cyA9IFsuLi5KU09OLnBhcnNlKHRlbXBsYXRlLmZvcm1fZGF0YSkuY29tcG9uZW50c107XG4gICAgICAgIHRlbXBsYXRlU2NoZW1hLnNjaGVtYSA9IHsuLi5mb3JtTWV0YX07XG4gICAgICAgIHRoaXMuYnVpbGRlck9wdGlvbnMuYnVpbGRlci5jdXN0b20uY29tcG9uZW50c1t0ZW1wbGF0ZS5uYW1lX3Npbmd1bGFyXSA9IHsuLi50ZW1wbGF0ZVNjaGVtYX07XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMucHJvcHMuZmV0Y2hUZW1wbGF0ZUxpc3QocmVuZGVyVGVtcGxhdGVMaXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZvcm1TY2hlbWFTdGF0ZSgpO1xuICAgIHRoaXMucHJvcHMuY2xlYXJGb3JtU2NoZW1lRGF0YSgpO1xuICB9XG5cbiAgcHVibGljIHNldEZvcm1OYW1lQW5kVHlwZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBmaWVsZE5hbWUgPSBlLnRhcmdldC5pZDtcbiAgICB0aGlzLnByb3BzLmZvcm1bZmllbGROYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVtcGxhdGVUeXBlOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIGlzRm9ybU5hbWVFbXB0eTogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHNldElkVHB5ZXMgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coJzExMTExMTExMTEnLCBlLnRhcmdldC52YWx1ZSlcbiAgICB0aGlzLnByb3BzLmZvcm1bZS50YXJnZXQuaWRdID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpZFR5cGU6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgaXNGb3JtTmFtZUVtcHR5OiBmYWxzZVxuICAgIH0pXG4gIH1cbiAgXG4gIHB1YmxpYyBzZXRGb3JtUHJlZml4ID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGZpZWxkTmFtZSA9IGUudGFyZ2V0LmlkO1xuICAgIHRoaXMucHJvcHMuZm9ybVtmaWVsZE5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNGb3JtUHJlZml4VmFsaWQ6IGZhbHNlfSk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZUZvcm1TY2hlbWEgPSAoKTogdm9pZCA9PiB7XG4gICAgbGV0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7aXNBY3RpdmUsIHNlcXVlbmNlLCB0ZW1wbGF0ZVR5cGV9ID0gdGhpcy5zdGF0ZSBcbiAgICBjb25zdCBpc1ByZWZpeFZhbGlkID0gIWZvcm0ucHJlZml4IHx8IChmb3JtLnByZWZpeCAmJiBmb3JtLnByZWZpeC5sZW5ndGggPCA2KTtcbiAgICBpZiAoZm9ybSAmJiBmb3JtLm5hbWUgPT09ICcnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNGb3JtTmFtZUVtcHR5OiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYoaXNQcmVmaXhWYWxpZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRm9ybVByZWZpeFZhbGlkOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoIWZvcm0uX2lkKSB7XG4gICAgICBkZWxldGUgZm9ybS5faWQ7XG4gICAgfVxuICAgIC8vIG5hbWUgaXMgYSByZXF1aXJlZCBmaWVsZFxuICAgIGlmIChmb3JtICYmIGZvcm0ubmFtZSAmJiAhaXNQcmVmaXhWYWxpZCkge1xuICAgICAgaWYgKHRlbXBsYXRlVHlwZSA9PT0gXCJjb3JlX2ZpZWxkc1wiKSB7XG4gICAgICAgIGZvcm0gPSBPYmplY3QuYXNzaWduKGZvcm0sIHtpc19hY3RpdmU6IGlzQWN0aXZlLCBzZXF1ZW5jZTogc2VxdWVuY2UgfSlcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKicsIGZvcm0pXG4gICAgICB0aGlzLnByb3BzLmNyZWF0ZUZvcm1TY2hlbWEoZm9ybSwgZm9ybS5faWQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjYW5jZWxVcGRhdGVTY2hlbWEgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LmdvQmFjaygpO1xuICB9XG4gIHB1YmxpYyByZW5kZXJTY2hlbWEgPSAoc2NoZW1hOiBhbnkpID0+IHtcbiAgICAvL1xuICB9XG5cbiAgcHVibGljIHJlbmRlckNvbXBvbmVudCA9IChzY2hlbWE6IGFueSwgcmVuZGVyTWV0aG9kOiBzdHJpbmcpID0+IHtcbiAgICBzd2l0Y2ggKHJlbmRlck1ldGhvZCkge1xuICAgICAgY2FzZSAnc2F2ZSc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZWRpdCc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndXBkYXRlJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZm9ybSwgaXNUZW1wbGF0ZUxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coJ2Zvcm0nLCBmb3JtLCB0aGlzLnN0YXRlLmlkVHlwZSwgdGhpcy5zdGF0ZS50ZW1wbGF0ZVR5cGUpXG4gICAgY29uc3QgeyBpc0FjdGl2ZSwgc2VxdWVuY2UsIHRlbXBsYXRlVHlwZSwgaXNGb3JtUHJlZml4VmFsaWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBmb3JtVHlwZXMsIHRlbXBsYXRlVHlwZXMsIGlkVHlwZXMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNvbnRhaW5lclwiPlxuICAgICAgICB7IWlzTG9hZGluZyAmJlxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgaWQ9XCJsYWJlbC5wcmVmaXhcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwcmVmaXhcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmb3JtLnByZWZpeH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZXRGb3JtUHJlZml4fVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7aXNGb3JtUHJlZml4VmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5Qcm92aWRlIGEgdmFsaWQgcHJlZml4PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgaWQ9XCJsYWJlbC5mb3JtTmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD4gPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmb3JtLm5hbWV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0Rm9ybU5hbWVBbmRUeXBlfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0Zvcm1OYW1lRW1wdHkgJiZcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5Gb3JtIE5hbWUgaXMgbWFuZGF0b3J5PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj48VHJhbnNsYXRlIGlkPVwibGFiZWwuZm9ybVR5cGVcIiAvPjwvbGFiZWw+IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb3JtX3R5cGVcIiBkZWZhdWx0VmFsdWU9e2Zvcm0uZm9ybV90eXBlfSBvbkNoYW5nZT17dGhpcy5zZXRGb3JtTmFtZUFuZFR5cGV9PlxuICAgICAgICAgICAgICAgICAge2Zvcm1UeXBlcy5tYXAoKHR5cGUpID0+IDxvcHRpb24ga2V5PXt0eXBlLmlkfSB2YWx1ZT17dHlwZS5pZH0+e3R5cGUubmFtZX08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+PFRyYW5zbGF0ZSBpZD1cImxhYmVsLnRlbXBsYXRlVHlwZVwiIC8+PC9sYWJlbD4gPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInRlbXBsYXRlX3R5cGVcIiBkZWZhdWx0VmFsdWU9e2Zvcm0udGVtcGxhdGVfdHlwZX0gb25DaGFuZ2U9e3RoaXMuc2V0Rm9ybU5hbWVBbmRUeXBlfT5cbiAgICAgICAgICAgICAgICAgIHt0ZW1wbGF0ZVR5cGVzLm1hcCgodGVtcGxhdGUpID0+IDxvcHRpb24ga2V5PXt0ZW1wbGF0ZS5pZH0gdmFsdWU9e3RlbXBsYXRlLmlkfT57dGVtcGxhdGUubmFtZX08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+PFRyYW5zbGF0ZSBpZD1cImxhYmVsLmlkVHlwZVwiIC8+PC9sYWJlbD4gPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImlkX3R5cGVcIiBkZWZhdWx0VmFsdWU9e2Zvcm0uaWRfdHlwZX0gb25DaGFuZ2U9e3RoaXMuc2V0Rm9ybU5hbWVBbmRUeXBlfT5cbiAgICAgICAgICAgICAgICAgIHtpZFR5cGVzLm1hcCgodGVtcGxhdGUpID0+IDxvcHRpb24ga2V5PXt0ZW1wbGF0ZS5pZH0gdmFsdWU9e3RlbXBsYXRlLmlkfT57dGVtcGxhdGUubmFtZX08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7dGVtcGxhdGVUeXBlID09PSBcImNvcmVfZmllbGRzXCIgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTMgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgU2VxdWVuY2VcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VxdWVuY2VcIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VxdWVuY2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdGhpcy5zZXRTdGF0ZSh7c2VxdWVuY2U6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKX0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgbXQtMjBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJpc19hY3RpdmVcIiBcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17aXNBY3RpdmV9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTAgbXItMlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdGhpcy5zZXRTdGF0ZSh7aXNBY3RpdmU6IGUudGFyZ2V0LmNoZWNrZWR9KX0gLz4gXG4gICAgICAgICAgICAgICAgPHNwYW4+SXMgQWN0aXZlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIHshaXNUZW1wbGF0ZUxvYWRpbmcgJiYgPEJ1aWxkZXJcbiAgICAgICAgICAgICAgZm9ybUJ1aWxkZXJTY2hlbWE9e2Zvcm0uZm9ybV9kYXRhfVxuICAgICAgICAgICAgICBidWlsZGVyT3B0aW9ucz17dGhpcy5idWlsZGVyT3B0aW9uc31cbiAgICAgICAgICAgICAgcmVuZGVyU2NoZW1hPXt0aGlzLnJlbmRlclNjaGVtYX1cbiAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50PXt0aGlzLnJlbmRlckNvbXBvbmVudH1cbiAgICAgICAgICAgIC8+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXQtM1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1yLTNcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNhbmNlbFVwZGF0ZVNjaGVtYSgpfSA+XG4gICAgICAgICAgICA8VHJhbnNsYXRlIGlkPVwibGFiZWwuY2FuY2VsXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2F2ZUZvcm1TY2hlbWEoKX0gPlxuICAgICAgICAgICAgPFRyYW5zbGF0ZSBpZD17Zm9ybS5faWQgPyAnbGFiZWwudXBkYXRlRm9ybScgOiAnbGFiZWwuY3JlYXRlRm9ybSd9IC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoe1xuICBjcmVhdGVGb3JtU2NoZW1hOiBjcmVhdGVGb3JtU2NoZW1hUmVxdWVzdCxcbiAgZmV0Y2hGb3JtU2NoZW1hUmVxdWVzdCxcbiAgZmV0Y2hUZW1wbGF0ZUxpc3QsXG4gIHVwZGF0ZUZvcm1TY2hlbWFTdGF0ZSxcbiAgY2xlYXJGb3JtU2NoZW1lRGF0YVxufSk7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0YXRlKSA9PiAoe1xuICBmb3JtOiBzdGF0ZS5mb3JtU2NoZW1hLmN1cnJlbnRGb3JtU2NoZW1hLFxuICBpc0xvYWRpbmc6IHN0YXRlLmZvcm1TY2hlbWEuY3VycmVudEZvcm1TY2hlbWEubG9hZGluZyxcbiAgaXNUZW1wbGF0ZUxvYWRpbmc6IHN0YXRlLmZvcm1TY2hlbWEudGVtcGxhdGVMaXN0LmxvYWRpbmcsXG4gIHRlbXBsYXRlczogc3RhdGUuZm9ybVNjaGVtYS50ZW1wbGF0ZUxpc3QuZGF0YVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoY29ubmVjdDxJRkJ1aWxkZXJTdGF0ZU1hcCwgSUZCdWlsZGVyRGlzcGF0Y2hNYXAsIElGQnVpbGRlck1lcmdlZFByb3BzLCBJU3RhdGU+XG4gIChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyksXG4gIHdpdGhMb2NhbGl6ZSkoRm9ybUJ1aWxkZXIpO1xuIl19