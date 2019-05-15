"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var React = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _reactRedux = require("react-redux");

var _formschema = require("../../actions/formschema");

var _formTrigger = require("../../actions/formTrigger");

var _components = require("../../components");

var _CButton = _interopRequireDefault(require("../../components/Button/CButton"));

var _CreateTriggerComponent = _interopRequireDefault(require("../../components/CreateTriggerComponent"));

var _QueryBuilder = _interopRequireDefault(require("../../components/Triggers/QueryBuilder"));

require("./formTrigger.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var FormTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormTrigger, _React$Component);

  _createClass(FormTrigger, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (!state.targetForm && props.formList.length && state.action.form) {
        var target = (0, _lodash.find)(props.formList, {
          _id: state.action.form
        });

        if (target && target.name_singular) {
          return {
            targetForm: props.fetchTargetFormFieldsRequest(target.name_singular)
          };
        }
      }

      return null;
    }
  }]);

  function FormTrigger(props) {
    var _this;

    _classCallCheck(this, FormTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormTrigger).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "formio", void 0);

    _defineProperty(_assertThisInitialized(_this), "saveFormTrigger", function () {
      var _this$state = _this.state,
          trigger = _this$state.trigger,
          action = _this$state.action;

      if (action.type && !confirm("You didn't save the action, Do you want to continue?")) {
        return;
      }

      _this.props.saveFormTriggerRequest(trigger, trigger._id);

      _this.props.updateFormTriggerState();
    });

    _defineProperty(_assertThisInitialized(_this), "saveTriggerAction", function () {
      var _this$state2 = _this.state,
          action = _this$state2.action,
          actionIndex = _this$state2.actionIndex;
      var field_mapping = action.field_mapping;

      if (field_mapping && field_mapping.rules.length > 0 && field_mapping.rules[0] && field_mapping.rules[0].customValue) {
        field_mapping.rules[0].value = '';
      }

      _this.setState(function (state) {
        if (actionIndex !== undefined) {
          state.trigger.actions[actionIndex] = action;
        }
      });

      _this.setState({
        action: {
          type: '',
          sequence: '1'
        },
        actionIndex: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTriggerChange", function (e, field) {
      var targetElem = e.target;

      _this.setState(function (state) {
        if (targetElem.type === 'checkbox') {
          state.trigger[field] = !state.trigger[field];
        } else {
          state.trigger[field] = targetElem.value;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onActionChange", function (e, field) {
      e.persist();
      var action = _this.state.action;

      if (e.target.type === 'number') {
        action[field] = e.target.value;

        _this.setState({
          action: action
        });
      } else if (e.target.type === 'checkbox') {
        action[field] = !action["".concat(field)];

        _this.setState({
          action: action
        });
      } else {
        _this.setState(function (state) {
          if (field === 'form') {
            state.action[field] = e.target.value;

            _this.props.formList.some(function (form) {
              if (form._id === e.target.value) {
                state.targetForm = form.name_singular;

                _this.props.fetchTargetFormFieldsRequest(form.name_singular);
              }
            });
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "chooseActionType", function (e) {
      e.persist();
      var type = e.target.value;

      _this.performAction(type);
    });

    _defineProperty(_assertThisInitialized(_this), "performAction", function (type) {
      var action = _this.state.action;
      action = {
        sequence: '1',
        type: type
      };

      switch (type) {
        case 'fill':
          _this.addActionQualification(action);

          _this.props.fetchFormSchemaList();

          break;

        case 'self-fill':
          var name_singular = _this.props.formRendererSchema.name_singular;

          _this.setState({
            targetForm: name_singular
          });

          _this.props.fetchTargetFormFieldsRequest(name_singular);

          _this.addActionFieldMap(action);

          break;

        case 'insert':
          _this.addActionQualification(action);

          action.isBefore = false;

          _this.props.fetchFormSchemaList();

          break;

        case 'update':
          _this.addActionQualification(action);

          action.isBefore = false;

          _this.props.fetchFormSchemaList();

          break;

        case 'validate':
          _this.addActionQualification(action, true);

          action.form = '';
          break;

        default:
          break;
      }

      _this.setState({
        action: action
      });
    });

    _defineProperty(_assertThisInitialized(_this), "logQualificationsQuery", function (loggedQuery) {
      _this.setState(function (state) {
        return state.trigger.qualification = loggedQuery;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "logMatchingQualificationsQuery", function (loggedQuery) {
      _this.setState(function (state) {
        return state.action.matching_qualification = loggedQuery;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "logFieldMapping", function (loggedQuery) {
      _this.setState(function (state) {
        return state.action.field_mapping = loggedQuery;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeAction", function (index) {
      var _this$state3 = _this.state,
          trigger = _this$state3.trigger,
          showPopup = _this$state3.showPopup;
      var actionIndex = _this.state.actionIndex;
      trigger.actions.splice(index, 1);

      if (typeof actionIndex !== 'undefined') {
        actionIndex = undefined;
      }

      var stateObj = {
        actionIndex: actionIndex,
        showPopup: showPopup
      };

      if (!trigger.actions.length) {
        stateObj.showPopup = false;
      }

      _this.setState(stateObj);
    });

    _defineProperty(_assertThisInitialized(_this), "handleHidePopup", function () {
      _this.setState({
        showPopup: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addNewAction", function () {
      var trigger = _this.state.trigger;
      var actionIndex = trigger.actions.length;

      _this.setState({
        actionIndex: actionIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.props.updateFormTriggerState();

      _this.props.clearTriggerData();
    });

    _defineProperty(_assertThisInitialized(_this), "getTargetOrSourceFields", function (fieldType) {
      var action = _this.state.action;
      var _this$props = _this.props,
          targetFormFields = _this$props.targetFormFields,
          sourceFormFields = _this$props.sourceFormFields;

      if ((action.type === 'insert' || action.type === 'update') && fieldType === 'Target') {
        return targetFormFields;
      }

      return sourceFormFields;
    });

    _this.state = {
      action: {
        sequence: '1',
        type: ''
      },
      actionTypeList: [{
        value: 'fill',
        label: 'Fill'
      }, {
        value: 'self-fill',
        label: 'Self Fill'
      }, {
        value: 'insert',
        label: 'Insert'
      }, {
        value: 'update',
        label: 'Update'
      }, {
        value: 'validate',
        label: 'Validate'
      }],
      currentFormName: '',
      showPopup: false,
      targetForm: '',
      trigger: _objectSpread({}, _this.props.triggerData)
    };
    return _this;
  }

  _createClass(FormTrigger, [{
    key: "getRandom",
    value: function getRandom() {
      return Math.random().toString(36).substr(2, 36);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var match = this.props.match;

      var formCallBack = function formCallBack(form) {
        _this2.props.fetchSourceFormFieldsRequest(form.name_singular);

        _this2.setState(function (state) {
          state.currentFormName = form.name;
          state.trigger.form = form._id, state.trigger.qualification = {
            combinator: 'and',
            id: _this2.getRandom(),
            rules: []
          };
        });
      };

      var triggerCallBack = function triggerCallBack(trigger) {
        _this2.setState({
          trigger: trigger
        });
      };

      if (match) {
        var _match$params = match.params,
            _triggerId = _match$params.triggerId,
            id = _match$params.id;
        this.props.fetchFormSchemaRequest(id, formCallBack);

        if (_triggerId) {
          this.props.fetchFormTriggerRequest(_triggerId, triggerCallBack);
        }
      }
    }
  }, {
    key: "addActionQualification",
    value: function addActionQualification(action, removeFieldMap) {
      action.matching_qualification = {
        combinator: 'and',
        id: this.getRandom(),
        rules: []
      };
      action.form = '';

      if (!removeFieldMap) {
        this.addActionFieldMap(action);
      }
    }
  }, {
    key: "addActionFieldMap",
    value: function addActionFieldMap(action) {
      action.field_mapping = {
        id: this.getRandom(),
        rules: []
      };
    }
  }, {
    key: "selectAction",
    value: function selectAction(action, actionIndex) {
      this.setState({
        action: action,
        actionIndex: actionIndex
      });
      this.props.fetchTargetFormFieldsRequest(this.state.currentFormName);
      this.handleHidePopup();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state4 = this.state,
          actionTypeList = _this$state4.actionTypeList,
          trigger = _this$state4.trigger,
          actionIndex = _this$state4.actionIndex,
          action = _this$state4.action,
          currentFormName = _this$state4.currentFormName;
      var _this$props2 = this.props,
          formList = _this$props2.formList,
          sourceFormFields = _this$props2.sourceFormFields,
          sourceFormFieldsLoading = _this$props2.sourceFormFieldsLoading,
          isTriggerLoading = _this$props2.isTriggerLoading;
      return React.createElement("div", {
        className: "row"
      }, !isTriggerLoading && React.createElement(React.Fragment, null, React.createElement("div", {
        className: "col-md-4 col-xs-12"
      }, React.createElement(_CreateTriggerComponent.default, {
        trigger: trigger,
        formName: currentFormName,
        onTriggerChange: this.handleTriggerChange
      })), React.createElement("div", {
        className: "col-xs-12 col-md-8"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-12"
      }, React.createElement("div", {
        className: "shadow-container"
      }, React.createElement("div", {
        className: "title"
      }, React.createElement("h4", null, "Qualifications")), !sourceFormFieldsLoading && React.createElement(_QueryBuilder.default, {
        fields: [{
          label: 'Source',
          value: ''
        }].concat(_toConsumableArray(sourceFormFields)),
        targetFields: [{
          label: 'Target',
          value: ''
        }].concat(_toConsumableArray(sourceFormFields)),
        query: trigger.qualification,
        customRules: {
          isOldValue: false
        },
        onQueryChange: this.logQualificationsQuery
      }))), React.createElement("div", {
        className: "col-12"
      }, React.createElement("div", {
        className: "shadow-container"
      }, React.createElement("div", {
        className: "title"
      }, React.createElement("h4", null, "Actions ", trigger.actions.length > 0 && React.createElement("span", {
        className: "badge btn btn-primary",
        onClick: function onClick() {
          return _this3.setState({
            showPopup: true
          });
        }
      }, trigger.actions.length))), typeof actionIndex === 'undefined' ? React.createElement("div", {
        className: "text-center"
      }, React.createElement(_components.BaseIcon, {
        display: "inline",
        name: "PlusCircle",
        size: 28,
        onClick: this.addNewAction
      })) : React.createElement("div", {
        className: "panel panel-default"
      }, React.createElement("div", {
        className: "panel-heading"
      }, React.createElement("div", {
        className: "row d-flex align-items-center justify-content-between"
      }, "Action - ", actionIndex + 1, React.createElement(_CButton.default, {
        className: "btn btn-primary pull-right",
        onClick: this.saveTriggerAction,
        name: "Add"
      }))), React.createElement("div", {
        className: "panel-body"
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "type"
      }, "Type"), React.createElement("select", {
        className: "form-control",
        defaultValue: action.type,
        value: action.type,
        onChange: function onChange(e) {
          return _this3.chooseActionType(e);
        }
      }, React.createElement("option", {
        value: ""
      }, "Select Action"), actionTypeList.map(function (actionType, actionTypeIndex) {
        return React.createElement("option", {
          key: actionTypeIndex,
          value: actionType.value
        }, actionType.label);
      }))), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "sequence"
      }, "Sequence"), React.createElement("input", {
        type: "number",
        name: "sequence",
        defaultValue: action.sequence,
        value: action.sequence,
        className: "form-control",
        required: true,
        onChange: function onChange(e) {
          return _this3.onActionChange(e, 'sequence');
        }
      })), 'isBefore' in action && React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "checkbox",
        name: "isBefore",
        defaultChecked: action.isBefore,
        required: true,
        onChange: function onChange(e) {
          return _this3.onActionChange(e, 'isBefore');
        }
      }), " Is Before"), 'form' in action && React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "form"
      }, "Form"), React.createElement("select", {
        className: "form-control",
        defaultValue: action.form,
        onChange: function onChange(e) {
          return _this3.onActionChange(e, 'form');
        }
      }, React.createElement("option", {
        value: ""
      }, "Select Form"), formList.map(function (form, formIndex) {
        return React.createElement("option", {
          key: formIndex,
          value: form._id
        }, form.name);
      }))), 'matching_qualification' in action && React.createElement("div", {
        className: "panel panel-default"
      }, React.createElement("div", {
        className: "panel-heading"
      }, "Matching Qualifications"), React.createElement("div", {
        className: "panel-body"
      }, !sourceFormFieldsLoading && React.createElement(_QueryBuilder.default, {
        fields: [{
          label: 'Target',
          value: ''
        }].concat(_toConsumableArray(this.getTargetOrSourceFields('Target'))),
        targetFields: [{
          label: 'Source',
          value: ''
        }].concat(_toConsumableArray(this.getTargetOrSourceFields('Source'))),
        operators: [{
          name: 'equal',
          label: '='
        }, {
          name: 'is_null',
          label: 'isNull'
        }],
        query: action.matching_qualification,
        onQueryChange: function onQueryChange(query) {
          return _this3.logMatchingQualificationsQuery(query);
        }
      }))), 'field_mapping' in action && React.createElement("div", {
        className: "panel panel-default"
      }, React.createElement("div", {
        className: "panel-heading"
      }, "Mapping Fields"), React.createElement("div", {
        className: "panel-body"
      }, !sourceFormFieldsLoading && React.createElement(_QueryBuilder.default, {
        fields: [{
          label: 'Target',
          value: ''
        }].concat(_toConsumableArray(this.getTargetOrSourceFields('Target'))),
        targetFields: [{
          label: 'Source',
          value: ''
        }].concat(_toConsumableArray(this.getTargetOrSourceFields('Source'))),
        disableCombinators: true,
        disableGroupAction: true,
        operators: [{
          name: '=',
          label: '='
        }],
        customRules: {
          customValue: ''
        },
        query: action.field_mapping,
        onQueryChange: function onQueryChange(query) {
          return _this3.logFieldMapping(query);
        }
      }))))))))), React.createElement("div", {
        className: "footer-fab-right mb-3 mr-3"
      }, React.createElement("div", {
        className: "form-group"
      }, React.createElement("button", {
        className: "btn btn-primary btn-round",
        onClick: function onClick() {
          return _this3.saveFormTrigger();
        }
      }, React.createElement(_components.BaseIcon, {
        name: "Save",
        display: "inline-block",
        size: 24
      }))))), !isTriggerLoading && React.createElement(_reactBootstrap.Modal, {
        show: this.state.showPopup,
        onHide: this.handleHidePopup,
        container: this,
        "aria-labelledby": "contained-modal-title",
        className: "".concat(this.state.showPopup ? 'show' : '')
      }, React.createElement(_reactBootstrap.Modal.Header, {
        closeButton: true,
        className: "action-header"
      }, React.createElement(_reactBootstrap.Modal.Title, {
        id: "contained-modal-title"
      }, "Actions")), React.createElement(_reactBootstrap.Modal.Body, null, React.createElement("ul", {
        className: "list-group"
      }, trigger.actions.map(function (savedAction, index) {
        return React.createElement("li", {
          className: "list-group-item",
          key: index
        }, "Action ", index + 1, React.createElement("span", {
          className: "action-icons pull-right"
        }, React.createElement(_components.BaseIcon, {
          name: "Edit",
          display: "inline-block",
          classname: "mr-3",
          onClick: function onClick() {
            return _this3.selectAction(savedAction, index);
          }
        }), React.createElement(_components.BaseIcon, {
          name: "Trash2",
          display: "inline-block",
          onClick: function onClick() {
            return _this3.removeAction(index);
          }
        })));
      }))), React.createElement(_reactBootstrap.Modal.Footer, null, React.createElement(_reactBootstrap.Button, {
        onClick: this.handleHidePopup
      }, "Close"))));
    }
  }]);

  return FormTrigger;
}(React.Component);

var mapDispatchToProps = {
  fetchFormSchemaList: _formschema.fetchFormSchemaList,
  fetchFormSchemaRequest: _formschema.fetchFormSchemaRequest,
  fetchFormTriggerRequest: _formTrigger.fetchFormTriggerRequest,
  fetchSourceFormFieldsRequest: _formTrigger.fetchSourceFormFieldsRequest,
  fetchTargetFormFieldsRequest: _formTrigger.fetchTargetFormFieldsRequest,
  saveFormTriggerRequest: _formTrigger.saveFormTriggerRequest,
  updateFormTriggerState: _formTrigger.updateFormTriggerState,
  clearTriggerData: _formTrigger.clearTriggerData
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    formList: state.formSchema.list.data,
    formRendererSchema: state.formSchema.currentFormSchema,
    isLoading: state.formSchema.currentFormSchema.loading,
    isTriggerLoading: state.formTrigger.trigger.isLoading,
    sourceFormFields: state.formTrigger.sourceFormFields.data,
    sourceFormFieldsLoading: state.formTrigger.sourceFormFields.isLoading,
    targetFormFields: state.formTrigger.targetFormFields.data,
    targetFormFieldsLoading: state.formTrigger.targetFormFields.isLoading,
    triggerData: state.formTrigger.trigger.data
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormTrigger);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Gb3JtVHJpZ2dlci9pbmRleC50c3giXSwibmFtZXMiOlsiRm9ybVRyaWdnZXIiLCJwcm9wcyIsInN0YXRlIiwidGFyZ2V0Rm9ybSIsImZvcm1MaXN0IiwibGVuZ3RoIiwiYWN0aW9uIiwiZm9ybSIsInRhcmdldCIsIl9pZCIsIm5hbWVfc2luZ3VsYXIiLCJmZXRjaFRhcmdldEZvcm1GaWVsZHNSZXF1ZXN0IiwidHJpZ2dlciIsInR5cGUiLCJjb25maXJtIiwic2F2ZUZvcm1UcmlnZ2VyUmVxdWVzdCIsInVwZGF0ZUZvcm1UcmlnZ2VyU3RhdGUiLCJhY3Rpb25JbmRleCIsImZpZWxkX21hcHBpbmciLCJydWxlcyIsImN1c3RvbVZhbHVlIiwidmFsdWUiLCJzZXRTdGF0ZSIsInVuZGVmaW5lZCIsImFjdGlvbnMiLCJzZXF1ZW5jZSIsImUiLCJmaWVsZCIsInRhcmdldEVsZW0iLCJwZXJzaXN0Iiwic29tZSIsInBlcmZvcm1BY3Rpb24iLCJhZGRBY3Rpb25RdWFsaWZpY2F0aW9uIiwiZmV0Y2hGb3JtU2NoZW1hTGlzdCIsImZvcm1SZW5kZXJlclNjaGVtYSIsImFkZEFjdGlvbkZpZWxkTWFwIiwiaXNCZWZvcmUiLCJsb2dnZWRRdWVyeSIsInF1YWxpZmljYXRpb24iLCJtYXRjaGluZ19xdWFsaWZpY2F0aW9uIiwiaW5kZXgiLCJzaG93UG9wdXAiLCJzcGxpY2UiLCJzdGF0ZU9iaiIsImNsZWFyVHJpZ2dlckRhdGEiLCJmaWVsZFR5cGUiLCJ0YXJnZXRGb3JtRmllbGRzIiwic291cmNlRm9ybUZpZWxkcyIsImFjdGlvblR5cGVMaXN0IiwibGFiZWwiLCJjdXJyZW50Rm9ybU5hbWUiLCJ0cmlnZ2VyRGF0YSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsIm1hdGNoIiwiZm9ybUNhbGxCYWNrIiwiZmV0Y2hTb3VyY2VGb3JtRmllbGRzUmVxdWVzdCIsIm5hbWUiLCJjb21iaW5hdG9yIiwiaWQiLCJnZXRSYW5kb20iLCJ0cmlnZ2VyQ2FsbEJhY2siLCJwYXJhbXMiLCJ0cmlnZ2VySWQiLCJmZXRjaEZvcm1TY2hlbWFSZXF1ZXN0IiwiZmV0Y2hGb3JtVHJpZ2dlclJlcXVlc3QiLCJyZW1vdmVGaWVsZE1hcCIsImhhbmRsZUhpZGVQb3B1cCIsInNvdXJjZUZvcm1GaWVsZHNMb2FkaW5nIiwiaXNUcmlnZ2VyTG9hZGluZyIsImhhbmRsZVRyaWdnZXJDaGFuZ2UiLCJpc09sZFZhbHVlIiwibG9nUXVhbGlmaWNhdGlvbnNRdWVyeSIsImFkZE5ld0FjdGlvbiIsInNhdmVUcmlnZ2VyQWN0aW9uIiwiY2hvb3NlQWN0aW9uVHlwZSIsIm1hcCIsImFjdGlvblR5cGUiLCJhY3Rpb25UeXBlSW5kZXgiLCJvbkFjdGlvbkNoYW5nZSIsImZvcm1JbmRleCIsImdldFRhcmdldE9yU291cmNlRmllbGRzIiwicXVlcnkiLCJsb2dNYXRjaGluZ1F1YWxpZmljYXRpb25zUXVlcnkiLCJsb2dGaWVsZE1hcHBpbmciLCJzYXZlRm9ybVRyaWdnZXIiLCJzYXZlZEFjdGlvbiIsInNlbGVjdEFjdGlvbiIsInJlbW92ZUFjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwiZm9ybVNjaGVtYSIsImxpc3QiLCJkYXRhIiwiY3VycmVudEZvcm1TY2hlbWEiLCJpc0xvYWRpbmciLCJsb2FkaW5nIiwiZm9ybVRyaWdnZXIiLCJ0YXJnZXRGb3JtRmllbGRzTG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQVFBOztBQUNBOztBQUNBOztBQUNBOztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1Q01BLFc7Ozs7Ozs7NkNBQ21DQyxLLEVBQVlDLEssRUFBc0I7QUFDdkUsVUFBSSxDQUFDQSxLQUFLLENBQUNDLFVBQVAsSUFBcUJGLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxNQUFwQyxJQUE4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O0FBUmdELENBQWxEOztBQVdBLElBQU1rRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUM1RixLQUFEO0FBQUEsU0FBc0M7QUFDNURFLElBQUFBLFFBQVEsRUFBRUYsS0FBSyxDQUFDNkYsVUFBTixDQUFpQkMsSUFBakIsQ0FBc0JDLElBRDRCO0FBRTVEL0QsSUFBQUEsa0JBQWtCLEVBQUVoQyxLQUFLLENBQUM2RixVQUFOLENBQWlCRyxpQkFGdUI7QUFHNURDLElBQUFBLFNBQVMsRUFBRWpHLEtBQUssQ0FBQzZGLFVBQU4sQ0FBaUJHLGlCQUFqQixDQUFtQ0UsT0FIYztBQUk1RDdCLElBQUFBLGdCQUFnQixFQUFFckUsS0FBSyxDQUFDbUcsV0FBTixDQUFrQnpGLE9BQWxCLENBQTBCdUYsU0FKZ0I7QUFLNURwRCxJQUFBQSxnQkFBZ0IsRUFBRTdDLEtBQUssQ0FBQ21HLFdBQU4sQ0FBa0J0RCxnQkFBbEIsQ0FBbUNrRCxJQUxPO0FBTTVEM0IsSUFBQUEsdUJBQXVCLEVBQUVwRSxLQUFLLENBQUNtRyxXQUFOLENBQWtCdEQsZ0JBQWxCLENBQW1Db0QsU0FOQTtBQU81RHJELElBQUFBLGdCQUFnQixFQUFFNUMsS0FBSyxDQUFDbUcsV0FBTixDQUFrQnZELGdCQUFsQixDQUFtQ21ELElBUE87QUFRNURLLElBQUFBLHVCQUF1QixFQUFFcEcsS0FBSyxDQUFDbUcsV0FBTixDQUFrQnZELGdCQUFsQixDQUFtQ3FELFNBUkE7QUFTNURoRCxJQUFBQSxXQUFXLEVBQUVqRCxLQUFLLENBQUNtRyxXQUFOLENBQWtCekYsT0FBbEIsQ0FBMEJxRjtBQVRxQixHQUF0QztBQUFBLENBQXhCOztlQVllLHlCQUNaSCxlQURZLEVBQ0tELGtCQURMLEVBRVo3RixXQUZZLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgZmV0Y2hGb3JtU2NoZW1hTGlzdCwgZmV0Y2hGb3JtU2NoZW1hUmVxdWVzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZm9ybXNjaGVtYSc7XG5pbXBvcnQge1xuICBmZXRjaEZvcm1UcmlnZ2VyUmVxdWVzdCxcbiAgZmV0Y2hTb3VyY2VGb3JtRmllbGRzUmVxdWVzdCxcbiAgZmV0Y2hUYXJnZXRGb3JtRmllbGRzUmVxdWVzdCxcbiAgc2F2ZUZvcm1UcmlnZ2VyUmVxdWVzdCxcbiAgdXBkYXRlRm9ybVRyaWdnZXJTdGF0ZSxcbiAgY2xlYXJUcmlnZ2VyRGF0YVxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2Zvcm1UcmlnZ2VyJztcbmltcG9ydCB7IEJhc2VJY29uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgQ0J1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uJztcbmltcG9ydCBDcmVhdGVUcmlnZ2VyQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3JlYXRlVHJpZ2dlckNvbXBvbmVudCc7XG5pbXBvcnQgUXVlcnlCdWlsZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJpZ2dlcnMvUXVlcnlCdWlsZGVyJztcbmltcG9ydCB7IElTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IElGb3JtU2NoZW1hIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvZm9ybXNjaGVtYSc7XG5pbXBvcnQgeyBJVHJpZ2dlciwgSVRyaWdnZXJBY3Rpb24gfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9mb3JtVHJpZ2dlcic7XG5pbXBvcnQgJy4vZm9ybVRyaWdnZXIuY3NzJztcblxuaW50ZXJmYWNlIElUcmlnZ2VyRGlzcGF0Y2hNYXAge1xuICBmZXRjaEZvcm1TY2hlbWFSZXF1ZXN0OiAoc2NoZW1hSWQ6IHN0cmluZywgY2FsbEJhY2s/OiAoZm9ybTogSUZvcm1TY2hlbWEpID0+IHZvaWQpID0+IHZvaWQ7XG4gIGZldGNoRm9ybVRyaWdnZXJSZXF1ZXN0OiAodHJpZ2dlcklkOiBzdHJpbmcsIGNhbGxCYWNrPzogKHRyaWdnZXI6IElUcmlnZ2VyKSA9PiB2b2lkKSA9PiB2b2lkO1xuICBzYXZlRm9ybVRyaWdnZXJSZXF1ZXN0OiAoZGF0YTogYW55LCB0cmlnZ2VySWQ/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIHVwZGF0ZUZvcm1UcmlnZ2VyU3RhdGU6IChkYXRhPzogYW55KSA9PiB2b2lkO1xuICBjbGVhclRyaWdnZXJEYXRhOiAoKSA9PiB2b2lkO1xuICBmZXRjaEZvcm1TY2hlbWFMaXN0OiAoKSA9PiB2b2lkO1xuICBmZXRjaFNvdXJjZUZvcm1GaWVsZHNSZXF1ZXN0OiAoZm9ybU5hbWU6IHN0cmluZykgPT4gdm9pZDtcbiAgZmV0Y2hUYXJnZXRGb3JtRmllbGRzUmVxdWVzdDogKGZvcm1OYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJVHJpZ2dlclN0YXRlTWFwIHtcbiAgZm9ybVJlbmRlcmVyU2NoZW1hOiBhbnk7XG4gIHRyaWdnZXJEYXRhOiBJVHJpZ2dlcjtcbiAgc291cmNlRm9ybUZpZWxkczogYW55O1xuICB0YXJnZXRGb3JtRmllbGRzOiBhbnk7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgaXNUcmlnZ2VyTG9hZGluZzogYm9vbGVhbjtcbiAgZm9ybUxpc3Q6IGFueTtcbiAgc291cmNlRm9ybUZpZWxkc0xvYWRpbmc6IGJvb2xlYW47XG4gIHRhcmdldEZvcm1GaWVsZHNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVRyaWdnZXJTdGF0ZSB7XG4gIGFjdGlvbjogSVRyaWdnZXJBY3Rpb247XG4gIGFjdGlvbkluZGV4PzogbnVtYmVyO1xuICBhY3Rpb25UeXBlTGlzdDogYW55W107XG4gIGN1cnJlbnRGb3JtTmFtZTogc3RyaW5nO1xuICBzaG93UG9wdXA6IGJvb2xlYW47XG4gIHRhcmdldEZvcm06IHN0cmluZztcbiAgdHJpZ2dlcjogSVRyaWdnZXI7XG59XG5cbmludGVyZmFjZSBJTWVyZ2VkUHJvcHMgZXh0ZW5kcyBJVHJpZ2dlclN0YXRlTWFwLCBJVHJpZ2dlckRpc3BhdGNoTWFwLCBSb3V0ZUNvbXBvbmVudFByb3BzIHtcblxufVxuXG5jbGFzcyBGb3JtVHJpZ2dlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJTWVyZ2VkUHJvcHMsIElUcmlnZ2VyU3RhdGU+IHtcbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IGFueSwgc3RhdGU6IElUcmlnZ2VyU3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLnRhcmdldEZvcm0gJiYgcHJvcHMuZm9ybUxpc3QubGVuZ3RoICYmIHN0YXRlLmFjdGlvbi5mb3JtKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBmaW5kKHByb3BzLmZvcm1MaXN0LCB7IF9pZDogc3RhdGUuYWN0aW9uLmZvcm0gfSkgYXMgSUZvcm1TY2hlbWE7XG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5uYW1lX3Npbmd1bGFyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGFyZ2V0Rm9ybTogcHJvcHMuZmV0Y2hUYXJnZXRGb3JtRmllbGRzUmVxdWVzdCh0YXJnZXQubmFtZV9zaW5ndWxhcilcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcHVibGljIGZvcm1pbzogYW55O1xuICBjb25zdHJ1Y3Rvcihwcm9wczogSU1lcmdlZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgc2VxdWVuY2U6ICcxJyxcbiAgICAgICAgdHlwZTogJydcbiAgICAgIH0sXG4gICAgICBhY3Rpb25UeXBlTGlzdDogW1xuICAgICAgICB7IHZhbHVlOiAnZmlsbCcsIGxhYmVsOiAnRmlsbCcgfSxcbiAgICAgICAgeyB2YWx1ZTogJ3NlbGYtZmlsbCcsIGxhYmVsOiAnU2VsZiBGaWxsJyB9LFxuICAgICAgICB7IHZhbHVlOiAnaW5zZXJ0JywgbGFiZWw6ICdJbnNlcnQnIH0sXG4gICAgICAgIHsgdmFsdWU6ICd1cGRhdGUnLCBsYWJlbDogJ1VwZGF0ZScgfSxcbiAgICAgICAgeyB2YWx1ZTogJ3ZhbGlkYXRlJywgbGFiZWw6ICdWYWxpZGF0ZScgfVxuICAgICAgXSxcbiAgICAgIGN1cnJlbnRGb3JtTmFtZTogJycsXG4gICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgdGFyZ2V0Rm9ybTogJycsXG4gICAgICB0cmlnZ2VyOiB7XG4gICAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlckRhdGFcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldFJhbmRvbSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDM2KTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBtYXRjaDogYW55ID0gdGhpcy5wcm9wcy5tYXRjaDtcbiAgICBjb25zdCBmb3JtQ2FsbEJhY2sgPSAoZm9ybTogSUZvcm1TY2hlbWEpID0+IHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hTb3VyY2VGb3JtRmllbGRzUmVxdWVzdChmb3JtLm5hbWVfc2luZ3VsYXIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGU6IElUcmlnZ2VyU3RhdGUpID0+IHtcbiAgICAgICAgc3RhdGUuY3VycmVudEZvcm1OYW1lID0gZm9ybS5uYW1lO1xuICAgICAgICBzdGF0ZS50cmlnZ2VyLmZvcm0gPSBmb3JtLl9pZCxcbiAgICAgICAgICBzdGF0ZS50cmlnZ2VyLnF1YWxpZmljYXRpb24gPSB7XG4gICAgICAgICAgICBjb21iaW5hdG9yOiAnYW5kJyxcbiAgICAgICAgICAgIGlkOiB0aGlzLmdldFJhbmRvbSgpLFxuICAgICAgICAgICAgcnVsZXM6IFtdXG4gICAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgdHJpZ2dlckNhbGxCYWNrID0gKHRyaWdnZXI6IElUcmlnZ2VyKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdHJpZ2dlciB9KTtcbiAgICB9O1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgeyBwYXJhbXM6IHsgdHJpZ2dlcklkLCBpZCB9IH0gPSBtYXRjaDtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hGb3JtU2NoZW1hUmVxdWVzdChpZCwgZm9ybUNhbGxCYWNrKTtcbiAgICAgIGlmICh0cmlnZ2VySWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEZvcm1UcmlnZ2VyUmVxdWVzdCh0cmlnZ2VySWQsIHRyaWdnZXJDYWxsQmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNhdmVGb3JtVHJpZ2dlciA9ICgpOiBhbnkgPT4ge1xuICAgIGNvbnN0IHsgdHJpZ2dlciwgYWN0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChhY3Rpb24udHlwZSAmJiAhY29uZmlybShgWW91IGRpZG4ndCBzYXZlIHRoZSBhY3Rpb24sIERvIHlvdSB3YW50IHRvIGNvbnRpbnVlP2ApKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvcHMuc2F2ZUZvcm1UcmlnZ2VyUmVxdWVzdCh0cmlnZ2VyLCB0cmlnZ2VyLl9pZCk7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVGb3JtVHJpZ2dlclN0YXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZVRyaWdnZXJBY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGFjdGlvbkluZGV4IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZmllbGRfbWFwcGluZyB9ID0gYWN0aW9uO1xuICAgIGlmIChmaWVsZF9tYXBwaW5nICYmIGZpZWxkX21hcHBpbmcucnVsZXMubGVuZ3RoID4gMCAmJlxuICAgICAgZmllbGRfbWFwcGluZy5ydWxlc1swXSAmJiBmaWVsZF9tYXBwaW5nLnJ1bGVzWzBdLmN1c3RvbVZhbHVlKSB7XG4gICAgICAgIGZpZWxkX21hcHBpbmcucnVsZXNbMF0udmFsdWUgPSAnJztcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGU6IElUcmlnZ2VyU3RhdGUpID0+IHtcbiAgICAgIGlmIChhY3Rpb25JbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0YXRlLnRyaWdnZXIuYWN0aW9uc1thY3Rpb25JbmRleF0gPSBhY3Rpb247XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGlvbjogeyB0eXBlOiAnJywgc2VxdWVuY2U6ICcxJyB9LCBhY3Rpb25JbmRleDogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZVRyaWdnZXJDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+LCBmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbSA9IGUudGFyZ2V0O1xuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlOiBJVHJpZ2dlclN0YXRlKSA9PiB7XG4gICAgICBpZiAodGFyZ2V0RWxlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHN0YXRlLnRyaWdnZXJbZmllbGRdID0gIXN0YXRlLnRyaWdnZXJbZmllbGRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUudHJpZ2dlcltmaWVsZF0gPSB0YXJnZXRFbGVtLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQWN0aW9uQ2hhbmdlID0gKFxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+LFxuICAgIGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICBlLnBlcnNpc3QoKTtcbiAgICBjb25zdCB7IGFjdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGFjdGlvbltmaWVsZF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3Rpb24gfSk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBhY3Rpb25bZmllbGRdID0gIWFjdGlvbltgJHtmaWVsZH1gXTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3Rpb24gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlOiBJVHJpZ2dlclN0YXRlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgICAgc3RhdGUuYWN0aW9uW2ZpZWxkXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgIHRoaXMucHJvcHMuZm9ybUxpc3Quc29tZSgoZm9ybTogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZm9ybS5faWQgPT09IGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnRhcmdldEZvcm0gPSBmb3JtLm5hbWVfc2luZ3VsYXI7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hUYXJnZXRGb3JtRmllbGRzUmVxdWVzdChmb3JtLm5hbWVfc2luZ3VsYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkQWN0aW9uUXVhbGlmaWNhdGlvbihhY3Rpb246IElUcmlnZ2VyQWN0aW9uLCByZW1vdmVGaWVsZE1hcD86IGJvb2xlYW4pIHtcbiAgICBhY3Rpb24ubWF0Y2hpbmdfcXVhbGlmaWNhdGlvbiA9IHtcbiAgICAgIGNvbWJpbmF0b3I6ICdhbmQnLFxuICAgICAgaWQ6IHRoaXMuZ2V0UmFuZG9tKCksXG4gICAgICBydWxlczogW11cbiAgICB9O1xuICAgIGFjdGlvbi5mb3JtID0gJyc7XG4gICAgaWYgKCFyZW1vdmVGaWVsZE1hcCkge1xuICAgICAgdGhpcy5hZGRBY3Rpb25GaWVsZE1hcChhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRBY3Rpb25GaWVsZE1hcChhY3Rpb246IElUcmlnZ2VyQWN0aW9uKSB7XG4gICAgYWN0aW9uLmZpZWxkX21hcHBpbmcgPSB7XG4gICAgICBpZDogdGhpcy5nZXRSYW5kb20oKSxcbiAgICAgIHJ1bGVzOiBbXVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgY2hvb3NlQWN0aW9uVHlwZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBlLnBlcnNpc3QoKTtcbiAgICBjb25zdCB0eXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wZXJmb3JtQWN0aW9uKHR5cGUpO1xuICB9XG5cbiAgcHVibGljIHBlcmZvcm1BY3Rpb24gPSAodHlwZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGFjdGlvbiA9IHRoaXMuc3RhdGUuYWN0aW9uO1xuICAgIGFjdGlvbiA9IHtcbiAgICAgIHNlcXVlbmNlOiAnMScsXG4gICAgICB0eXBlXG4gICAgfTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2ZpbGwnOlxuICAgICAgICB0aGlzLmFkZEFjdGlvblF1YWxpZmljYXRpb24oYWN0aW9uKTtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEZvcm1TY2hlbWFMaXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VsZi1maWxsJzpcbiAgICAgICAgY29uc3QgeyBuYW1lX3Npbmd1bGFyIH0gPSB0aGlzLnByb3BzLmZvcm1SZW5kZXJlclNjaGVtYTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldEZvcm06IG5hbWVfc2luZ3VsYXIgfSk7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hUYXJnZXRGb3JtRmllbGRzUmVxdWVzdChuYW1lX3Npbmd1bGFyKTtcbiAgICAgICAgdGhpcy5hZGRBY3Rpb25GaWVsZE1hcChhY3Rpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luc2VydCc6XG4gICAgICAgIHRoaXMuYWRkQWN0aW9uUXVhbGlmaWNhdGlvbihhY3Rpb24pO1xuICAgICAgICBhY3Rpb24uaXNCZWZvcmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEZvcm1TY2hlbWFMaXN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndXBkYXRlJzpcbiAgICAgICAgdGhpcy5hZGRBY3Rpb25RdWFsaWZpY2F0aW9uKGFjdGlvbik7XG4gICAgICAgIGFjdGlvbi5pc0JlZm9yZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoRm9ybVNjaGVtYUxpc3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2YWxpZGF0ZSc6XG4gICAgICAgIHRoaXMuYWRkQWN0aW9uUXVhbGlmaWNhdGlvbihhY3Rpb24sIHRydWUpO1xuICAgICAgICBhY3Rpb24uZm9ybSA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aW9uIH0pO1xuICB9XG5cbiAgcHVibGljIGxvZ1F1YWxpZmljYXRpb25zUXVlcnkgPSAobG9nZ2VkUXVlcnk6IGFueSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlOiBJVHJpZ2dlclN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4gc3RhdGUudHJpZ2dlci5xdWFsaWZpY2F0aW9uID0gbG9nZ2VkUXVlcnk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9nTWF0Y2hpbmdRdWFsaWZpY2F0aW9uc1F1ZXJ5ID0gKGxvZ2dlZFF1ZXJ5OiBhbnkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZTogSVRyaWdnZXJTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHN0YXRlLmFjdGlvbi5tYXRjaGluZ19xdWFsaWZpY2F0aW9uID0gbG9nZ2VkUXVlcnk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbG9nRmllbGRNYXBwaW5nID0gKGxvZ2dlZFF1ZXJ5OiBhbnkpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZTogSVRyaWdnZXJTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHN0YXRlLmFjdGlvbi5maWVsZF9tYXBwaW5nID0gbG9nZ2VkUXVlcnk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0QWN0aW9uKGFjdGlvbjogSVRyaWdnZXJBY3Rpb24sIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aW9uLCBhY3Rpb25JbmRleCB9KTtcbiAgICB0aGlzLnByb3BzLmZldGNoVGFyZ2V0Rm9ybUZpZWxkc1JlcXVlc3QodGhpcy5zdGF0ZS5jdXJyZW50Rm9ybU5hbWUpO1xuICAgIHRoaXMuaGFuZGxlSGlkZVBvcHVwKCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQWN0aW9uID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IHRyaWdnZXIsIHNob3dQb3B1cCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgeyBhY3Rpb25JbmRleCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0cmlnZ2VyLmFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgYWN0aW9uSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlT2JqID0geyBhY3Rpb25JbmRleCwgc2hvd1BvcHVwIH07XG4gICAgaWYgKCF0cmlnZ2VyLmFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICBzdGF0ZU9iai5zaG93UG9wdXAgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZU9iaik7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlSGlkZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UG9wdXA6IGZhbHNlIH0pO1xuICB9XG5cbiAgcHVibGljIGFkZE5ld0FjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyaWdnZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWN0aW9uSW5kZXggPSB0cmlnZ2VyLmFjdGlvbnMubGVuZ3RoO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3Rpb25JbmRleCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZvcm1UcmlnZ2VyU3RhdGUoKTtcbiAgICB0aGlzLnByb3BzLmNsZWFyVHJpZ2dlckRhdGEoKTtcbiAgfVxuXG4gIGdldFRhcmdldE9yU291cmNlRmllbGRzID0gKGZpZWxkVHlwZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0YXJnZXRGb3JtRmllbGRzLCBzb3VyY2VGb3JtRmllbGRzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICgoYWN0aW9uLnR5cGUgPT09ICdpbnNlcnQnIHx8IGFjdGlvbi50eXBlID09PSAndXBkYXRlJykgJiYgZmllbGRUeXBlID09PSAnVGFyZ2V0Jykge1xuICAgICAgcmV0dXJuIHRhcmdldEZvcm1GaWVsZHM7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2VGb3JtRmllbGRzO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGlvblR5cGVMaXN0LCB0cmlnZ2VyLCBhY3Rpb25JbmRleCwgYWN0aW9uLCBjdXJyZW50Rm9ybU5hbWUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBmb3JtTGlzdCwgc291cmNlRm9ybUZpZWxkcywgc291cmNlRm9ybUZpZWxkc0xvYWRpbmcsIGlzVHJpZ2dlckxvYWRpbmdcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgeyFpc1RyaWdnZXJMb2FkaW5nICYmIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC14cy0xMlwiPlxuICAgICAgICAgICAgPENyZWF0ZVRyaWdnZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cbiAgICAgICAgICAgICAgZm9ybU5hbWU9e2N1cnJlbnRGb3JtTmFtZX1cbiAgICAgICAgICAgICAgb25UcmlnZ2VyQ2hhbmdlPXt0aGlzLmhhbmRsZVRyaWdnZXJDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5RdWFsaWZpY2F0aW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHshc291cmNlRm9ybUZpZWxkc0xvYWRpbmcgJiYgPFF1ZXJ5QnVpbGRlclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9e1t7IGxhYmVsOiAnU291cmNlJywgdmFsdWU6ICcnIH0sIC4uLnNvdXJjZUZvcm1GaWVsZHNdfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRGaWVsZHM9e1t7IGxhYmVsOiAnVGFyZ2V0JywgdmFsdWU6ICcnIH0sIC4uLnNvdXJjZUZvcm1GaWVsZHNdfVxuICAgICAgICAgICAgICAgICAgICBxdWVyeT17dHJpZ2dlci5xdWFsaWZpY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21SdWxlcz17eyBpc09sZFZhbHVlOiBmYWxzZSB9fVxuICAgICAgICAgICAgICAgICAgICBvblF1ZXJ5Q2hhbmdlPXt0aGlzLmxvZ1F1YWxpZmljYXRpb25zUXVlcnl9IC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PkFjdGlvbnMge3RyaWdnZXIuYWN0aW9ucy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dQb3B1cDogdHJ1ZSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dHJpZ2dlci5hY3Rpb25zLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7dHlwZW9mIGFjdGlvbkluZGV4ID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QmFzZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlBsdXNDaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17Mjh9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld0FjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWN0aW9uIC0ge2FjdGlvbkluZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgcHVsbC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlVHJpZ2dlckFjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQWRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidHlwZVwiPlR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGRlZmF1bHRWYWx1ZT17YWN0aW9uLnR5cGV9IHZhbHVlPXthY3Rpb24udHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4gdGhpcy5jaG9vc2VBY3Rpb25UeXBlKGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IEFjdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25UeXBlTGlzdC5tYXAoKGFjdGlvblR5cGUsIGFjdGlvblR5cGVJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2FjdGlvblR5cGVJbmRleH0gdmFsdWU9e2FjdGlvblR5cGUudmFsdWV9PnthY3Rpb25UeXBlLmxhYmVsfTwvb3B0aW9uPikpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VxdWVuY2VcIj5TZXF1ZW5jZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNlcXVlbmNlXCIgZGVmYXVsdFZhbHVlPXthY3Rpb24uc2VxdWVuY2V9IHZhbHVlPXthY3Rpb24uc2VxdWVuY2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMub25BY3Rpb25DaGFuZ2UoZSwgJ3NlcXVlbmNlJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoJ2lzQmVmb3JlJyBpbiBhY3Rpb24pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaXNCZWZvcmVcIiBkZWZhdWx0Q2hlY2tlZD17YWN0aW9uLmlzQmVmb3JlfSByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHRoaXMub25BY3Rpb25DaGFuZ2UoZSwgJ2lzQmVmb3JlJyl9IC8+IElzIEJlZm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgeygnZm9ybScgaW4gYWN0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZvcm1cIj5Gb3JtPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGRlZmF1bHRWYWx1ZT17YWN0aW9uLmZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4gdGhpcy5vbkFjdGlvbkNoYW5nZShlLCAnZm9ybScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgRm9ybTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1MaXN0Lm1hcCgoZm9ybTogYW55LCBmb3JtSW5kZXg6IG51bWJlcikgPT4gKDxvcHRpb24ga2V5PXtmb3JtSW5kZXh9IHZhbHVlPXtmb3JtLl9pZH0+e2Zvcm0ubmFtZX08L29wdGlvbj4pKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgeygnbWF0Y2hpbmdfcXVhbGlmaWNhdGlvbicgaW4gYWN0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5NYXRjaGluZyBRdWFsaWZpY2F0aW9uczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc291cmNlRm9ybUZpZWxkc0xvYWRpbmcgJiYgPFF1ZXJ5QnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RhcmdldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgLi4udGhpcy5nZXRUYXJnZXRPclNvdXJjZUZpZWxkcygnVGFyZ2V0JyldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RmllbGRzPXtbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NvdXJjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgLi4udGhpcy5nZXRUYXJnZXRPclNvdXJjZUZpZWxkcygnU291cmNlJyldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcnM9e1t7IG5hbWU6ICdlcXVhbCcsIGxhYmVsOiAnPScgfSwgeyBuYW1lOiAnaXNfbnVsbCcsIGxhYmVsOiAnaXNOdWxsJyB9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk9e2FjdGlvbi5tYXRjaGluZ19xdWFsaWZpY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblF1ZXJ5Q2hhbmdlPXsocXVlcnk6IGFueSkgPT4gdGhpcy5sb2dNYXRjaGluZ1F1YWxpZmljYXRpb25zUXVlcnkocXVlcnkpfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgeygnZmllbGRfbWFwcGluZycgaW4gYWN0aW9uKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIj5NYXBwaW5nIEZpZWxkczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshc291cmNlRm9ybUZpZWxkc0xvYWRpbmcgJiYgPFF1ZXJ5QnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RhcmdldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgLi4udGhpcy5nZXRUYXJnZXRPclNvdXJjZUZpZWxkcygnVGFyZ2V0JyldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RmllbGRzPXtbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NvdXJjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgLi4udGhpcy5nZXRUYXJnZXRPclNvdXJjZUZpZWxkcygnU291cmNlJyldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ29tYmluYXRvcnM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVHcm91cEFjdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3JzPXtbeyBuYW1lOiAnPScsIGxhYmVsOiAnPScgfV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVJ1bGVzPXt7IGN1c3RvbVZhbHVlOiAnJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17YWN0aW9uLmZpZWxkX21hcHBpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUXVlcnlDaGFuZ2U9eyhxdWVyeTogYW55KSA9PiB0aGlzLmxvZ0ZpZWxkTWFwcGluZyhxdWVyeSl9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1mYWItcmlnaHQgbWItMyBtci0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXJvdW5kXCIgb25DbGljaz17KCkgPT4gdGhpcy5zYXZlRm9ybVRyaWdnZXIoKX0+XG4gICAgICAgICAgICAgICAgPEJhc2VJY29uXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiU2F2ZVwiXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+fVxuICAgICAgICB7IWlzVHJpZ2dlckxvYWRpbmcgJiYgPE1vZGFsXG4gICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93UG9wdXB9XG4gICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGVQb3B1cH1cbiAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuc2hvd1BvcHVwID8gJ3Nob3cnIDogJyd9YH0+XG4gICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj17dHJ1ZX0gY2xhc3NOYW1lPVwiYWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgIEFjdGlvbnNcbiAgICAgICAgICAgIDwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICB7dHJpZ2dlci5hY3Rpb25zLm1hcCgoc2F2ZWRBY3Rpb24sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICg8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXtpbmRleH0gPkFjdGlvbiB7aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWN0aW9uLWljb25zIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJhc2VJY29uXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZT1cIm1yLTNcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VsZWN0QWN0aW9uKHNhdmVkQWN0aW9uLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNlSWNvblxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJUcmFzaDJcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlQWN0aW9uKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPikpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSGlkZVBvcHVwfT5DbG9zZTwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L01vZGFsPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzIDogSVRyaWdnZXJEaXNwYXRjaE1hcCA9ICh7XG4gIGZldGNoRm9ybVNjaGVtYUxpc3QsXG4gIGZldGNoRm9ybVNjaGVtYVJlcXVlc3QsXG4gIGZldGNoRm9ybVRyaWdnZXJSZXF1ZXN0LFxuICBmZXRjaFNvdXJjZUZvcm1GaWVsZHNSZXF1ZXN0LFxuICBmZXRjaFRhcmdldEZvcm1GaWVsZHNSZXF1ZXN0LFxuICBzYXZlRm9ybVRyaWdnZXJSZXF1ZXN0LFxuICB1cGRhdGVGb3JtVHJpZ2dlclN0YXRlLFxuICBjbGVhclRyaWdnZXJEYXRhXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBJU3RhdGUpOiBJVHJpZ2dlclN0YXRlTWFwID0+ICh7XG4gIGZvcm1MaXN0OiBzdGF0ZS5mb3JtU2NoZW1hLmxpc3QuZGF0YSxcbiAgZm9ybVJlbmRlcmVyU2NoZW1hOiBzdGF0ZS5mb3JtU2NoZW1hLmN1cnJlbnRGb3JtU2NoZW1hLFxuICBpc0xvYWRpbmc6IHN0YXRlLmZvcm1TY2hlbWEuY3VycmVudEZvcm1TY2hlbWEubG9hZGluZyxcbiAgaXNUcmlnZ2VyTG9hZGluZzogc3RhdGUuZm9ybVRyaWdnZXIudHJpZ2dlci5pc0xvYWRpbmcsXG4gIHNvdXJjZUZvcm1GaWVsZHM6IHN0YXRlLmZvcm1UcmlnZ2VyLnNvdXJjZUZvcm1GaWVsZHMuZGF0YSxcbiAgc291cmNlRm9ybUZpZWxkc0xvYWRpbmc6IHN0YXRlLmZvcm1UcmlnZ2VyLnNvdXJjZUZvcm1GaWVsZHMuaXNMb2FkaW5nLFxuICB0YXJnZXRGb3JtRmllbGRzOiBzdGF0ZS5mb3JtVHJpZ2dlci50YXJnZXRGb3JtRmllbGRzLmRhdGEsXG4gIHRhcmdldEZvcm1GaWVsZHNMb2FkaW5nOiBzdGF0ZS5mb3JtVHJpZ2dlci50YXJnZXRGb3JtRmllbGRzLmlzTG9hZGluZyxcbiAgdHJpZ2dlckRhdGE6IHN0YXRlLmZvcm1UcmlnZ2VyLnRyaWdnZXIuZGF0YVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q8SVRyaWdnZXJTdGF0ZU1hcCwgSVRyaWdnZXJEaXNwYXRjaE1hcCwgSU1lcmdlZFByb3BzLCBJU3RhdGU+XG4gIChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcbiAgKEZvcm1UcmlnZ2VyKTtcbiJdfQ==