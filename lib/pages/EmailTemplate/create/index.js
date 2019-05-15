"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactEmailEditor = _interopRequireDefault(require("react-email-editor"));

var _reactRedux = require("react-redux");

var _emailTemplate = require("../../../actions/emailTemplate");

var _emailTemplate2 = _interopRequireDefault(require("./emailTemplate.css"));

var _CButton = _interopRequireDefault(require("../../../components/Button/CButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EmailTemplate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmailTemplate, _React$Component);

  _createClass(EmailTemplate, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.template && props.template._id !== state._id) {
        var _props$template = props.template,
            _id = _props$template._id,
            name = _props$template.name,
            description = _props$template.description,
            type = _props$template.type;
        return {
          _id: _id,
          description: description,
          name: name,
          type: type
        };
      }

      return null;
    }
  }]);

  function EmailTemplate(props) {
    var _this;

    _classCallCheck(this, EmailTemplate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmailTemplate).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "editor", void 0);

    _defineProperty(_assertThisInitialized(_this), "editorProps", void 0);

    _defineProperty(_assertThisInitialized(_this), "onLoad", function () {
      var template = _this.props.template;

      if (_this.editor.current && template) {
        _this.editor.current.loadDesign(template.body_json.design);
      } else if (window.unlayer && template) {
        window.unlayer.loadDesign(template.body_json.design);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveOrUpdateEmailTemplate", function () {
      if (_this.editor.current) {
        _this.editor.current.exportHtml(function (template) {
          var _this$state = _this.state,
              _id = _this$state._id,
              name = _this$state.name,
              description = _this$state.description;
          var data = {
            _id: _id,
            body: template.html,
            body_json: template,
            description: description,
            name: name,
            type: 'email'
          };

          if (!_id) {
            delete data._id;
          }

          _this.props.createOrUpdateEmailTemplate(data);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "previewEmailTemplate", function () {
      if (_this.editor.current) {
        _this.editor.current.exportHtml(function (template) {
          _this.setState({
            isPreviewTemplate: true,
            previewTemplate: template.html
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hidePreviewTemplate", function () {
      _this.setState({
        isPreviewTemplate: false,
        previewTemplate: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetEmailTemplate", function () {
      var template = _this.props.template;

      if (template) {
        window.unlayer.loadDesign(template.body_json.design);
      }
    });

    _this.state = {
      _id: '',
      description: '',
      isPreviewTemplate: false,
      name: '',
      previewTemplate: '',
      type: 'email'
    };
    var customTags = [{
      name: 'First Name',
      value: '{{first_name}}'
    }, {
      name: 'Last Name',
      value: '{{last_name}}'
    }, {
      name: 'Full Name',
      value: '{{full_name}}'
    }, {
      name: 'User Name',
      value: '{{user_name}}'
    }, {
      name: 'Company Name',
      value: '{{company_name}}'
    }, {
      name: 'Email',
      value: '{{email}}'
    }];
    _this.editor = React.createRef();
    _this.editorProps = {
      options: {
        customCSS: [".blockbuilder-preferences .blockbuilder-tools-panel .nav-tabs {\n                  background-color: ".concat(_emailTemplate2.default.appBackgroundColor, " !important;\n                }\n                .blockbuilder-preferences .blockbuilder-tools-panel .nav-tabs .nav-item .nav-link:hover {\n                  color: ").concat(_emailTemplate2.default.primaryColor, ";\n                  cursor: pointer;\n                }\n                .blockbuilder-preferences .blockbuilder-tools-panel .nav-tabs .nav-item .nav-link.active {\n                  color: ").concat(_emailTemplate2.default.primaryColor, ";\n                }")],
        mergeTags: customTags
      },
      projectId: 1071,
      ref: _this.editor
    };
    return _this;
  }

  _createClass(EmailTemplate, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.resetInitialState();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          match = _this$props.match,
          getEmailTemplate = _this$props.getEmailTemplate;

      if (match && match.params.id) {
        getEmailTemplate(match.params.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          name = _this$state2.name,
          description = _this$state2.description,
          isPreviewTemplate = _this$state2.isPreviewTemplate,
          previewTemplate = _this$state2.previewTemplate;
      var _this$props2 = this.props,
          match = _this$props2.match,
          template = _this$props2.template;
      return React.createElement("div", {
        className: "shadow-container"
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        className: "control-label"
      }, "Name"), " ", React.createElement("span", {
        className: "error-text"
      }, "*"), React.createElement("input", {
        type: "text",
        className: "form-control",
        value: name,
        onChange: function onChange(evt) {
          _this2.setState({
            name: evt.target.value
          });
        },
        required: true
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        className: "control-label"
      }, "Description"), React.createElement("textarea", {
        value: description,
        className: "form-control",
        onChange: function onChange(evt) {
          _this2.setState({
            description: evt.target.value
          });
        }
      })), match && match.params.id ? template && React.createElement(_reactEmailEditor.default, _extends({}, this.editorProps, {
        onLoad: this.onLoad
      })) : React.createElement(_reactEmailEditor.default, this.editorProps), React.createElement("div", {
        className: "row d-flex justify-content-end mb-20"
      }, React.createElement(_CButton.default, {
        className: "mt-20 btn btn-primary",
        type: "button",
        onClick: this.resetEmailTemplate,
        name: "Reset"
      }), React.createElement(_CButton.default, {
        className: "mt-20 ml-3 btn btn-primary",
        type: "button",
        onClick: this.previewEmailTemplate,
        name: "Preview"
      }), React.createElement(_CButton.default, {
        className: "mt-20 ml-3 btn btn-primary",
        type: "button",
        disabled: !name,
        onClick: this.saveOrUpdateEmailTemplate,
        name: "Save"
      })), isPreviewTemplate && React.createElement(_reactBootstrap.Modal, {
        bsSize: "lg",
        backdrop: false,
        show: isPreviewTemplate,
        onHide: this.hidePreviewTemplate
      }, React.createElement(_reactBootstrap.ModalHeader, {
        closeButton: true
      }, template.name), React.createElement(_reactBootstrap.ModalBody, null, React.createElement("div", null, React.createElement("iframe", {
        style: {
          minHeight: '75vh'
        },
        width: "100%",
        srcDoc: previewTemplate
      })))));
    }
  }]);

  return EmailTemplate;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.emailTemplate.loading,
    template: state.emailTemplate.template
  };
};

var mapDispatchToProps = {
  createOrUpdateEmailTemplate: _emailTemplate.createOrUpdateEmailTemplate,
  getEmailTemplate: _emailTemplate.getEmailTemplate,
  resetInitialState: _emailTemplate.resetInitialState
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EmailTemplate);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wYWdlcy9FbWFpbFRlbXBsYXRlL2NyZWF0ZS9pbmRleC50c3giXSwibmFtZXMiOlsiRW1haWxUZW1wbGF0ZSIsInByb3BzIiwic3RhdGUiLCJ0ZW1wbGF0ZSIsIl9pZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJlZGl0b3IiLCJjdXJyZW50IiwibG9hZERlc2lnbiIsImJvZHlfanNvbiIsImRlc2lnbiIsIndpbmRvdyIsInVubGF5ZXIiLCJleHBvcnRIdG1sIiwiZGF0YSIsImJvZHkiLCJodG1sIiwiY3JlYXRlT3JVcGRhdGVFbWFpbFRlbXBsYXRlIiwic2V0U3RhdGUiLCJpc1ByZXZpZXdUZW1wbGF0ZSIsInByZXZpZXdUZW1wbGF0ZSIsImN1c3RvbVRhZ3MiLCJ2YWx1ZSIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZWRpdG9yUHJvcHMiLCJvcHRpb25zIiwiY3VzdG9tQ1NTIiwic3R5bGVzIiwiYXBwQmFja2dyb3VuZENvbG9yIiwicHJpbWFyeUNvbG9yIiwibWVyZ2VUYWdzIiwicHJvamVjdElkIiwicmVmIiwicmVzZXRJbml0aWFsU3RhdGUiLCJtYXRjaCIsImdldEVtYWlsVGVtcGxhdGUiLCJwYXJhbXMiLCJpZCIsImV2dCIsInRhcmdldCIsIm9uTG9hZCIsInJlc2V0RW1haWxUZW1wbGF0ZSIsInByZXZpZXdFbWFpbFRlbXBsYXRlIiwic2F2ZU9yVXBkYXRlRW1haWxUZW1wbGF0ZSIsImhpZGVQcmV2aWV3VGVtcGxhdGUiLCJtaW5IZWlnaHQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2FkaW5nIiwiZW1haWxUZW1wbGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQU1BOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaURNQSxhOzs7Ozs7OzZDQUVtQ0MsSyxFQUE0QkMsSyxFQUE0QjtB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eUIsQ0FBM0I7O2VBTWUseUJBQ2JjLGVBRGEsRUFFYkcsa0JBRmEsRUFHYnJELGFBSGEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsSGVhZGVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBFbWFpbEVkaXRvciBmcm9tICdyZWFjdC1lbWFpbC1lZGl0b3InO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHtcbiAgY3JlYXRlT3JVcGRhdGVFbWFpbFRlbXBsYXRlLCBnZXRFbWFpbFRlbXBsYXRlLFxuICBJRW1haWxUZW1wbGF0ZSwgcmVzZXRJbml0aWFsU3RhdGVcbn1cbmZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZW1haWxUZW1wbGF0ZSc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9yZWR1Y2Vycyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZW1haWxUZW1wbGF0ZS5jc3MnO1xuaW1wb3J0IENCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24vQ0J1dHRvbic7XG5cbmludGVyZmFjZSBJTWFwU3RhdGVUb1Byb3BzIHtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgdGVtcGxhdGU6IElFbWFpbFRlbXBsYXRlO1xufVxuXG5pbnRlcmZhY2UgSU1hcERpc3BhdGNoVG9Qcm9wcyB7XG4gIGNyZWF0ZU9yVXBkYXRlRW1haWxUZW1wbGF0ZTogKGRhdGE6IElFbWFpbFRlbXBsYXRlKSA9PiB2b2lkO1xuICBnZXRFbWFpbFRlbXBsYXRlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgcmVzZXRJbml0aWFsU3RhdGU6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJRW1haWxUZW1wbGF0ZVByb3BzIGV4dGVuZHMgSU1hcFN0YXRlVG9Qcm9wcywgSU1hcERpc3BhdGNoVG9Qcm9wcyB7IH1cbmludGVyZmFjZSBJRW1haWxUZW1wbGF0ZVN0YXRlIHtcbiAgX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwcmV2aWV3VGVtcGxhdGU6IHN0cmluZztcbiAgaXNQcmV2aWV3VGVtcGxhdGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJRW1haWxUZW1wbGF0ZVJlZiB7XG4gIGV4cG9ydEh0bWw6IChkYXRhOiBhbnkpID0+IHt9O1xuICBsb2FkRGVzaWduOiBhbnk7XG59XG5cbmludGVyZmFjZSBJVGVtcGxhdGUge1xuICBjc3M6IHN0cmluZyxcbiAgZGVzaWduOiBvYmplY3QsXG4gIGh0bWw6IHN0cmluZ1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHVubGF5ZXI6IElFbWFpbFRlbXBsYXRlUmVmO1xuICB9XG59XG5cbmludGVyZmFjZSBJRWRpdG9yUHJvcHMge1xuICBwcm9qZWN0SWQ6IG51bWJlcjtcbiAgcmVmOiBSZWFjdC5SZWZPYmplY3Q8SUVtYWlsVGVtcGxhdGVSZWY+O1xuICBvcHRpb25zOiB7XG4gICAgY3VzdG9tQ1NTOiBzdHJpbmdbXSxcbiAgICBtZXJnZVRhZ3M6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nOyB9PlxuICB9O1xufVxuXG5jbGFzcyBFbWFpbFRlbXBsYXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElFbWFpbFRlbXBsYXRlUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHsgaWQ6IHN0cmluZyB9PiwgSUVtYWlsVGVtcGxhdGVTdGF0ZT4ge1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBJRW1haWxUZW1wbGF0ZVByb3BzLCBzdGF0ZTogSUVtYWlsVGVtcGxhdGVTdGF0ZSkge1xuICAgIGlmIChwcm9wcy50ZW1wbGF0ZSAmJiBwcm9wcy50ZW1wbGF0ZS5faWQgIT09IHN0YXRlLl9pZCkge1xuICAgICAgY29uc3QgeyBfaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCB0eXBlIH0gPSBwcm9wcy50ZW1wbGF0ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF9pZCxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHR5cGVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBlZGl0b3I6IFJlYWN0LlJlZk9iamVjdDxJRW1haWxUZW1wbGF0ZVJlZj47XG4gIHByaXZhdGUgZWRpdG9yUHJvcHM6IElFZGl0b3JQcm9wcztcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSUVtYWlsVGVtcGxhdGVQcm9wcyAmIFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBfaWQ6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgaXNQcmV2aWV3VGVtcGxhdGU6IGZhbHNlLFxuICAgICAgbmFtZTogJycsXG4gICAgICBwcmV2aWV3VGVtcGxhdGU6ICcnLFxuICAgICAgdHlwZTogJ2VtYWlsJ1xuICAgIH07XG4gICAgY29uc3QgY3VzdG9tVGFncyA9IFtcbiAgICAgIHsgbmFtZTogJ0ZpcnN0IE5hbWUnLCB2YWx1ZTogJ3t7Zmlyc3RfbmFtZX19JyB9LFxuICAgICAgeyBuYW1lOiAnTGFzdCBOYW1lJywgdmFsdWU6ICd7e2xhc3RfbmFtZX19JyB9LFxuICAgICAgeyBuYW1lOiAnRnVsbCBOYW1lJywgdmFsdWU6ICd7e2Z1bGxfbmFtZX19JyB9LFxuICAgICAgeyBuYW1lOiAnVXNlciBOYW1lJywgdmFsdWU6ICd7e3VzZXJfbmFtZX19JyB9LFxuICAgICAgeyBuYW1lOiAnQ29tcGFueSBOYW1lJywgdmFsdWU6ICd7e2NvbXBhbnlfbmFtZX19JyB9LFxuICAgICAgeyBuYW1lOiAnRW1haWwnLCB2YWx1ZTogJ3t7ZW1haWx9fScgfVxuICAgIF07XG4gICAgdGhpcy5lZGl0b3IgPSBSZWFjdC5jcmVhdGVSZWY8SUVtYWlsVGVtcGxhdGVSZWY+KCk7XG4gICAgdGhpcy5lZGl0b3JQcm9wcyA9IHtcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY3VzdG9tQ1NTOiBbYC5ibG9ja2J1aWxkZXItcHJlZmVyZW5jZXMgLmJsb2NrYnVpbGRlci10b29scy1wYW5lbCAubmF2LXRhYnMge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzdHlsZXMuYXBwQmFja2dyb3VuZENvbG9yfSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmxvY2tidWlsZGVyLXByZWZlcmVuY2VzIC5ibG9ja2J1aWxkZXItdG9vbHMtcGFuZWwgLm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7c3R5bGVzLnByaW1hcnlDb2xvcn07XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ibG9ja2J1aWxkZXItcHJlZmVyZW5jZXMgLmJsb2NrYnVpbGRlci10b29scy1wYW5lbCAubmF2LXRhYnMgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7c3R5bGVzLnByaW1hcnlDb2xvcn07XG4gICAgICAgICAgICAgICAgfWBdLFxuICAgICAgICBtZXJnZVRhZ3M6IGN1c3RvbVRhZ3NcbiAgICAgIH0sXG4gICAgICBwcm9qZWN0SWQ6IDEwNzEsXG4gICAgICByZWY6IHRoaXMuZWRpdG9yXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBtYXRjaCwgZ2V0RW1haWxUZW1wbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICBnZXRFbWFpbFRlbXBsYXRlKG1hdGNoLnBhcmFtcy5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBpc1ByZXZpZXdUZW1wbGF0ZSwgcHJldmlld1RlbXBsYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbWF0Y2gsIHRlbXBsYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5OYW1lPC9sYWJlbD4gPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPio8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHsgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2dC50YXJnZXQudmFsdWUgfSk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2dDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHsgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldnQudGFyZ2V0LnZhbHVlIH0pOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaCAmJiBtYXRjaC5wYXJhbXMuaWQgP1xuICAgICAgICAgICAgdGVtcGxhdGUgJiYgPEVtYWlsRWRpdG9yXG4gICAgICAgICAgICAgIHsuLi50aGlzLmVkaXRvclByb3BzfVxuICAgICAgICAgICAgICBvbkxvYWQ9e3RoaXMub25Mb2FkfVxuICAgICAgICAgICAgLz4gOiA8RW1haWxFZGl0b3JcbiAgICAgICAgICAgICAgey4uLnRoaXMuZWRpdG9yUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTIwXCI+XG4gICAgICAgICAgPENCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIwIGJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVzZXRFbWFpbFRlbXBsYXRlfVxuICAgICAgICAgICAgbmFtZT1cIlJlc2V0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDQnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yMCBtbC0zIGJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJldmlld0VtYWlsVGVtcGxhdGV9XG4gICAgICAgICAgICBuYW1lPVwiUHJldmlld1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q0J1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMjAgbWwtMyBidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IW5hbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmVPclVwZGF0ZUVtYWlsVGVtcGxhdGV9XG4gICAgICAgICAgICBuYW1lPVwiU2F2ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc1ByZXZpZXdUZW1wbGF0ZSAmJlxuICAgICAgICAgIDxNb2RhbCBic1NpemU9XCJsZ1wiIGJhY2tkcm9wPXtmYWxzZX0gc2hvdz17aXNQcmV2aWV3VGVtcGxhdGV9IG9uSGlkZT17dGhpcy5oaWRlUHJldmlld1RlbXBsYXRlfSA+XG4gICAgICAgICAgICA8TW9kYWxIZWFkZXIgY2xvc2VCdXR0b249e3RydWV9Pnt0ZW1wbGF0ZS5uYW1lfTwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICA8TW9kYWxCb2R5PlxuICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8aWZyYW1lIHN0eWxlPXt7IG1pbkhlaWdodDogJzc1dmgnIH19IHdpZHRoPVwiMTAwJVwiIHNyY0RvYz17cHJldmlld1RlbXBsYXRlfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIG9uTG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRlbXBsYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLmVkaXRvci5jdXJyZW50ICYmIHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmVkaXRvci5jdXJyZW50LmxvYWREZXNpZ24odGVtcGxhdGUuYm9keV9qc29uLmRlc2lnbik7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cudW5sYXllciAmJiB0ZW1wbGF0ZSkge1xuICAgICAgd2luZG93LnVubGF5ZXIubG9hZERlc2lnbih0ZW1wbGF0ZS5ib2R5X2pzb24uZGVzaWduKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmVPclVwZGF0ZUVtYWlsVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZWRpdG9yLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuZWRpdG9yLmN1cnJlbnQuZXhwb3J0SHRtbCgodGVtcGxhdGU6IElUZW1wbGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB7IF9pZCwgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgX2lkLFxuICAgICAgICAgIGJvZHk6IHRlbXBsYXRlLmh0bWwsXG4gICAgICAgICAgYm9keV9qc29uOiB0ZW1wbGF0ZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHR5cGU6ICdlbWFpbCdcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFfaWQpIHtcbiAgICAgICAgICBkZWxldGUgZGF0YS5faWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVPclVwZGF0ZUVtYWlsVGVtcGxhdGUoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByZXZpZXdFbWFpbFRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmVkaXRvci5jdXJyZW50KSB7XG4gICAgICB0aGlzLmVkaXRvci5jdXJyZW50LmV4cG9ydEh0bWwoKHRlbXBsYXRlOiBJVGVtcGxhdGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNQcmV2aWV3VGVtcGxhdGU6IHRydWUsXG4gICAgICAgICAgcHJldmlld1RlbXBsYXRlOiB0ZW1wbGF0ZS5odG1sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoaWRlUHJldmlld1RlbXBsYXRlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNQcmV2aWV3VGVtcGxhdGU6IGZhbHNlLFxuICAgICAgcHJldmlld1RlbXBsYXRlOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEVtYWlsVGVtcGxhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0ZW1wbGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgIHdpbmRvdy51bmxheWVyLmxvYWREZXNpZ24odGVtcGxhdGUuYm9keV9qc29uLmRlc2lnbik7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0YXRlKSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5lbWFpbFRlbXBsYXRlLmxvYWRpbmcsXG4gIHRlbXBsYXRlOiBzdGF0ZS5lbWFpbFRlbXBsYXRlLnRlbXBsYXRlXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBjcmVhdGVPclVwZGF0ZUVtYWlsVGVtcGxhdGUsXG4gIGdldEVtYWlsVGVtcGxhdGUsXG4gIHJlc2V0SW5pdGlhbFN0YXRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShFbWFpbFRlbXBsYXRlKTtcbiJdfQ==