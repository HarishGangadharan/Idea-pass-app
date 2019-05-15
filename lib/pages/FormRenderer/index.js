"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("formiojs/dist/formio.full.min.css");

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _formfielddata = require("../../actions/formfielddata");

var _formschema = require("../../actions/formschema");

var _FormRender = _interopRequireDefault(require("../../components/FormRender"));

require("../../global/FormBuilder/formBuilder.css");

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

var FormRenderer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormRenderer, _React$Component);

  function FormRenderer(props) {
    var _this;

    _classCallCheck(this, FormRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormRenderer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "formio", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (formData) {
      var formRendererSchema = _this.props.formRendererSchema;
      var formId = _this.state.formId;
      var data = formData.data;

      _this.props.saveFormFieldDataRequest(data, formRendererSchema.name_singular, formId, data._id);

      _this.formio.emit('submitDone');
    });

    _defineProperty(_assertThisInitialized(_this), "getFormio", function (formio) {
      _this.formio = formio;
    });

    _this.state = {
      formId: ''
    };
    return _this;
  }

  _createClass(FormRenderer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var match = this.props.match;

      if (match) {
        var callBack = function callBack(form) {
          var submissionId = match.params.submissionId;

          if (submissionId) {
            _this2.props.fetchFormFieldDataRequest(form.name_singular, submissionId);
          }
        };

        this.setState({
          formId: match.params.id
        });
        this.props.fetchFormSchemaRequest(match.params.id, callBack);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.updateFormFieldDataState();
      this.props.updateFormSchemaState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isLoading = _this$props.isLoading,
          submissionData = _this$props.submissionData,
          isSubmissionLoading = _this$props.isSubmissionLoading,
          formRendererSchema = _this$props.formRendererSchema;
      var match = this.props.match;
      var options = {
        readOnly: match.params.pageType === 'view' ? true : false
      };
      return React.createElement("div", {
        className: "shadow-container full-height"
      }, !isLoading && !isSubmissionLoading && React.createElement(React.Fragment, null, formRendererSchema.form_data && React.createElement("div", {
        className: "title"
      }, React.createElement("h2", null, formRendererSchema.name)), React.createElement(_FormRender.default, {
        formRendererSchema: formRendererSchema.form_data,
        submission: {
          data: submissionData
        },
        handleSubmit: this.handleSubmit,
        getFormio: this.getFormio,
        options: options
      })));
    }
  }]);

  return FormRenderer;
}(React.Component);

var mapDispatchToProps = {
  fetchFormFieldDataRequest: _formfielddata.fetchFormFieldDataRequest,
  fetchFormSchemaRequest: _formschema.fetchFormSchemaRequest,
  saveFormFieldDataRequest: _formfielddata.saveFormFieldDataRequest,
  updateFormFieldDataState: _formfielddata.updateFormFieldDataState,
  updateFormSchemaState: _formschema.updateFormSchemaState
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    formRendererSchema: state.formSchema.currentFormSchema,
    isLoading: state.formSchema.currentFormSchema.loading,
    isSubmissionLoading: state.formFieldData.submission.isLoading,
    submissionData: state.formFieldData.submission.data
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormRenderer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Gb3JtUmVuZGVyZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkZvcm1SZW5kZXJlciIsInByb3BzIiwiZm9ybURhdGEiLCJmb3JtUmVuZGVyZXJTY2hlbWEiLCJmb3JtSWQiLCJzdGF0ZSIsImRhdGEiLCJzYXZlRm9ybUZpZWxkRGF0YVJlcXVlc3QiLCJuYW1lX3Npbmd1bGFyIiwiX2lkIiwiZm9ybWlvIiwiZW1pdCIsIm1hdGNoIiwiY2FsbEJhY2siLCJmb3JtIiwic3VibWlzc2lvbklkIiwicGFyYW1zIiwiZmV0Y2hGb3JtRmllbGREYXRhUmVxdWVzdCIsInNldFN0YXRlIiwiaWQiLCJmZXRjaEZvcm1TY2hlbWFSZXF1ZXN0IiwidXBkYXRlRm9ybUZpZWxkRGF0YVN0YXRlIiwidXBkYXRlRm9ybVNjaGVtYVN0YXRlIiwiaXNMb2FkaW5nIiwic3VibWlzc2lvbkRhdGEiLCJpc1N1Ym1pc3Npb25Mb2FkaW5nIiwib3B0aW9ucyIsInJlYWRPbmx5IiwicGFnZVR5cGUiLCJmb3JtX2RhdGEiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiZ2V0Rm9ybWlvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJmb3JtU2NoZW1hIiwiY3VycmVudEZvcm1TY2hlbWEiLCJsb2FkaW5nIiwiZm9ybUZpZWxkRGF0YSIsInN1Ym1pc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFLQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qk1BLFk7Ozs7O0FBRUosd0JBQVlDLEtBQVosRUFBaUM7QUFBQTs7QUFBQTs7QUFDL0Isc0ZBQU1BLEtBQU47O0FBRCtCOztBQUFBLG1FQXVCWCxVQUFDQyxRQUFELEVBQW1CO0FBQUEsVUFDL0JDLGtCQUQrQixHQUNSLE1BQUtGLEtBREcsQ0FDL0JFLGtCQUQrQjtBQUFBLFVBRS9C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d0JBQXdCLEVBQXhCQSx1Q0FKK0M7QUFLL0NDLEVBQUFBLHFCQUFxQixFQUFyQkE7QUFMK0MsQ0FBakQ7O0FBUUEsSUFBTWMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDL0IsS0FBRDtBQUFBLFNBQW9CO0FBQzFDRixJQUFBQSxrQkFBa0IsRUFBRUUsS0FBSyxDQUFDZ0MsVUFBTixDQUFpQkMsaUJBREs7QUFFMUNmLElBQUFBLFNBQVMsRUFBRWxCLEtBQUssQ0FBQ2dDLFVBQU4sQ0FBaUJDLGlCQUFqQixDQUFtQ0MsT0FGSjtBQUcxQ2QsSUFBQUEsbUJBQW1CLEVBQUVwQixLQUFLLENBQUNtQyxhQUFOLENBQW9CQyxVQUFwQixDQUErQmxCLFNBSFY7QUFJMUNDLElBQUFBLGNBQWMsRUFBRW5CLEtBQUssQ0FBQ21DLGFBQU4sQ0FBb0JDLFVBQXBCLENBQStCbkM7QUFKTCxHQUFwQjtBQUFBLENBQXhCOztlQU9lLHlCQUNaOEIsZUFEWSxFQUNLRCxrQkFETCxFQUVabkMsWUFGWSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmb3JtaW9qcy9kaXN0L2Zvcm1pby5mdWxsLm1pbi5jc3MnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge1xuICBmZXRjaEZvcm1GaWVsZERhdGFSZXF1ZXN0LFxuICBzYXZlRm9ybUZpZWxkRGF0YVJlcXVlc3QsXG4gIHVwZGF0ZUZvcm1GaWVsZERhdGFTdGF0ZVxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2Zvcm1maWVsZGRhdGEnO1xuaW1wb3J0IHsgZmV0Y2hGb3JtU2NoZW1hUmVxdWVzdCwgdXBkYXRlRm9ybVNjaGVtYVN0YXRlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9mb3Jtc2NoZW1hJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm1SZW5kZXInO1xuaW1wb3J0ICcuLi8uLi9nbG9iYWwvRm9ybUJ1aWxkZXIvZm9ybUJ1aWxkZXIuY3NzJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IElGb3JtU2NoZW1hIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvZm9ybXNjaGVtYSc7XG5pbXBvcnQgJy4uLy4uL2dsb2JhbC9Gb3JtQnVpbGRlci9mb3JtQnVpbGRlci5jc3MnO1xuXG5pbnRlcmZhY2UgSVJlbmRlcmVyRGlzcGF0Y2hNYXAge1xuICBmZXRjaEZvcm1TY2hlbWFSZXF1ZXN0OiAoXG4gICAgc2NoZW1hSWQ6IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IChmb3JtOiBJRm9ybVNjaGVtYSkgPT4gdm9pZFxuICApID0+IHZvaWQ7XG4gIGZldGNoRm9ybUZpZWxkRGF0YVJlcXVlc3Q6IChuYW1lOiBzdHJpbmcsIGRhdGFJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBzYXZlRm9ybUZpZWxkRGF0YVJlcXVlc3Q6IChkYXRhOiBhbnksIGZvcm1OYW1lOiBzdHJpbmcsIGZvcm1JZD86IHN0cmluZywgZm9ybURhdGFJZD86IHN0cmluZykgPT4gdm9pZDtcbiAgLy8gVE9ETzogTmVlZCB0byBjaGFuZ2UgdHlwZSBvZiBkYXRhXG4gIHVwZGF0ZUZvcm1GaWVsZERhdGFTdGF0ZTogKGRhdGE/OiBhbnkpID0+IHZvaWQ7XG4gIHVwZGF0ZUZvcm1TY2hlbWFTdGF0ZTogKGRhdGE/OiBhbnkpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJUmVuZGVyZXJTdGF0ZU1hcCB7XG4gIGZvcm1SZW5kZXJlclNjaGVtYTogYW55O1xuICBzdWJtaXNzaW9uRGF0YTogYW55O1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGlzU3VibWlzc2lvbkxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJTWVyZ2VkUHJvcHMgZXh0ZW5kcyBJUmVuZGVyZXJEaXNwYXRjaE1hcCwgSVJlbmRlcmVyU3RhdGVNYXAsIFJvdXRlQ29tcG9uZW50UHJvcHMge1xuXG59XG5cbmNsYXNzIEZvcm1SZW5kZXJlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJTWVyZ2VkUHJvcHMsIHsgZm9ybUlkOiBzdHJpbmcgfT4ge1xuICBwdWJsaWMgZm9ybWlvOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJTWVyZ2VkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1JZDogJydcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG1hdGNoOiBhbnkgPSB0aGlzLnByb3BzLm1hdGNoO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgY2FsbEJhY2sgPSAoZm9ybTogSUZvcm1TY2hlbWEpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHBhcmFtczogeyBzdWJtaXNzaW9uSWQgfVxuICAgICAgICB9ID0gbWF0Y2g7XG4gICAgICAgIGlmIChzdWJtaXNzaW9uSWQpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmZldGNoRm9ybUZpZWxkRGF0YVJlcXVlc3QoZm9ybS5uYW1lX3Npbmd1bGFyLCBzdWJtaXNzaW9uSWQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm1JZDogbWF0Y2gucGFyYW1zLmlkIH0pO1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaEZvcm1TY2hlbWFSZXF1ZXN0KG1hdGNoLnBhcmFtcy5pZCwgY2FsbEJhY2spO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVTdWJtaXQgPSAoZm9ybURhdGE6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybVJlbmRlcmVyU2NoZW1hIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZm9ybUlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gZm9ybURhdGE7XG4gICAgdGhpcy5wcm9wcy5zYXZlRm9ybUZpZWxkRGF0YVJlcXVlc3QoZGF0YSwgZm9ybVJlbmRlcmVyU2NoZW1hLm5hbWVfc2luZ3VsYXIsIGZvcm1JZCwgZGF0YS5faWQpO1xuICAgIHRoaXMuZm9ybWlvLmVtaXQoJ3N1Ym1pdERvbmUnKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZvcm1GaWVsZERhdGFTdGF0ZSgpO1xuICAgIHRoaXMucHJvcHMudXBkYXRlRm9ybVNjaGVtYVN0YXRlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9ybWlvID0gKGZvcm1pbzogYW55KSA9PiB7XG4gICAgdGhpcy5mb3JtaW8gPSBmb3JtaW87XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzTG9hZGluZyxcbiAgICAgIHN1Ym1pc3Npb25EYXRhLFxuICAgICAgaXNTdWJtaXNzaW9uTG9hZGluZyxcbiAgICAgIGZvcm1SZW5kZXJlclNjaGVtYVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1hdGNoOiBhbnkgPSB0aGlzLnByb3BzLm1hdGNoO1xuICAgIGNvbnN0IG9wdGlvbnM9e3JlYWRPbmx5OiBtYXRjaC5wYXJhbXMucGFnZVR5cGUgPT09ICd2aWV3JyA/IHRydWUgOiBmYWxzZX07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNvbnRhaW5lciBmdWxsLWhlaWdodFwiPlxuICAgICAgICB7IWlzTG9hZGluZyAmJiAhaXNTdWJtaXNzaW9uTG9hZGluZyAmJiAoXG4gICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAge2Zvcm1SZW5kZXJlclNjaGVtYS5mb3JtX2RhdGEgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGgyPntmb3JtUmVuZGVyZXJTY2hlbWEubmFtZX08L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8UmVuZGVyZXJcbiAgICAgICAgICAgICAgZm9ybVJlbmRlcmVyU2NoZW1hPXtmb3JtUmVuZGVyZXJTY2hlbWEuZm9ybV9kYXRhfVxuICAgICAgICAgICAgICBzdWJtaXNzaW9uPXt7IGRhdGE6IHN1Ym1pc3Npb25EYXRhIH19XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgIGdldEZvcm1pbz17dGhpcy5nZXRGb3JtaW99XG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogSVJlbmRlcmVyRGlzcGF0Y2hNYXAgPSB7XG4gIGZldGNoRm9ybUZpZWxkRGF0YVJlcXVlc3QsXG4gIGZldGNoRm9ybVNjaGVtYVJlcXVlc3QsXG4gIHNhdmVGb3JtRmllbGREYXRhUmVxdWVzdCxcbiAgdXBkYXRlRm9ybUZpZWxkRGF0YVN0YXRlLFxuICB1cGRhdGVGb3JtU2NoZW1hU3RhdGVcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0YXRlKSA9PiAoe1xuICBmb3JtUmVuZGVyZXJTY2hlbWE6IHN0YXRlLmZvcm1TY2hlbWEuY3VycmVudEZvcm1TY2hlbWEsXG4gIGlzTG9hZGluZzogc3RhdGUuZm9ybVNjaGVtYS5jdXJyZW50Rm9ybVNjaGVtYS5sb2FkaW5nLFxuICBpc1N1Ym1pc3Npb25Mb2FkaW5nOiBzdGF0ZS5mb3JtRmllbGREYXRhLnN1Ym1pc3Npb24uaXNMb2FkaW5nLFxuICBzdWJtaXNzaW9uRGF0YTogc3RhdGUuZm9ybUZpZWxkRGF0YS5zdWJtaXNzaW9uLmRhdGFcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0PElSZW5kZXJlclN0YXRlTWFwLCBJUmVuZGVyZXJEaXNwYXRjaE1hcCwgSU1lcmdlZFByb3BzLCBJU3RhdGU+XG4gIChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcbiAgKEZvcm1SZW5kZXJlcik7XG4iXX0=