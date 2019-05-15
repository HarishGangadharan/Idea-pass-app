"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactQuerybuilder = _interopRequireDefault(require("react-querybuilder"));

require("./style.css");

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

var QueryBuilderContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(QueryBuilderContainer, _React$Component);

  /*
   * Doc => https://www.npmjs.com/package/react-querybuilder
   * */
  function QueryBuilderContainer(props) {
    var _this;

    _classCallCheck(this, QueryBuilderContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QueryBuilderContainer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "operators", void 0);

    _defineProperty(_assertThisInitialized(_this), "controlElements", {
      /*
       * addRuleAction: {},
       * fieldSelector: {},
       * operatorSelector: {},
       * removeGroupAction: {},
       * removeRuleAction: {
       * },
       */
      addGroupAction: function addGroupAction() {
        return React.createElement("span", null);
      },
      combinatorSelector: function combinatorSelector() {
        return React.createElement("span", null);
      },
      removeGroupAction: _this.removeEditor({
        type: 'group'
      }),
      removeRuleAction: _this.removeEditor({
        type: 'rule'
      }),
      valueEditor: _this.customValueEditor()
    });

    _defineProperty(_assertThisInitialized(_this), "onCustomFieldChange", function (event, rule, fieldName) {
      event.persist();

      var targetRule = _this.findRule(rule.id, _this.props.query);

      if (event.target.type === 'checkbox') {
        Object.assign(targetRule, _defineProperty({}, fieldName, event.target.checked));
      } else {
        Object.assign(targetRule, _defineProperty({}, fieldName, event.target.value));
      }

      _this.props.onQueryChange(_this.props.query);
    });

    if (!props.disableGroupAction) {
      delete _this.controlElements.addGroupAction;
    }

    if (!props.disableCombinators) {
      delete _this.controlElements.combinatorSelector;
    }

    _this.operators = [{
      name: 'is_null',
      label: 'Is Null'
    }, {
      name: 'is_not_null',
      label: 'Is Not Null'
    }, {
      name: 'between',
      label: 'In'
    }, {
      name: 'not_between',
      label: 'Not In'
    }, {
      name: 'equal',
      label: '='
    }, {
      name: 'not_equal',
      label: '!='
    }, {
      name: 'less',
      label: '<'
    }, {
      name: 'greater',
      label: '>'
    }, {
      name: 'less_or_equal',
      label: '<='
    }, {
      name: 'greater_or_equal',
      label: '>='
    }];
    return _this;
  }

  _createClass(QueryBuilderContainer, [{
    key: "isRuleGroup",
    value: function isRuleGroup(rule) {
      return !!(rule.combinator && rule.rules);
    }
  }, {
    key: "findRule",
    value: function findRule(id, parent) {
      if (parent.id === id) {
        return parent;
      }

      if (parent.rules) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = parent.rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var rule = _step.value;

            if (rule.id === id) {
              return rule;
            } else if (this.isRuleGroup(rule)) {
              var subRule = this.findRule(id, rule);

              if (subRule) {
                return subRule;
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "customValueEditor",
    value: function customValueEditor() {
      var _this2 = this;

      var customRules = this.props.customRules;
      return function (props) {
        return React.createElement("span", {
          className: props.level.toString()
        }, React.createElement("select", {
          value: props.value,
          onChange: function onChange(e) {
            return props.handleOnChange(e.target.value);
          },
          className: "rule-fields",
          title: "Fields"
        }, _this2.props.targetFields.map(function (targetField, index) {
          return React.createElement("option", {
            key: index,
            value: targetField.value
          }, targetField.label);
        })), "\xA0", customRules && React.createElement("span", null, customRules.hasOwnProperty('isOldValue') && React.createElement("div", {
          className: "checkbox"
        }, React.createElement("label", {
          style: {
            fontSize: '1em'
          }
        }, React.createElement("input", {
          type: "checkbox",
          checked: props.isOldValue,
          onChange: function onChange(event) {
            return _this2.onCustomFieldChange(event, props, 'isOldValue');
          }
        }), "Is Oldvalue")), customRules.hasOwnProperty('customValue') && React.createElement("div", {
          className: "show-inline"
        }, React.createElement("label", {
          htmlFor: "customValue"
        }, "Custom Value"), React.createElement("input", {
          type: "text",
          defaultValue: props.customValue,
          onChange: function onChange(event) {
            _this2.onCustomFieldChange(event, props, 'customValue');
          }
        }))));
      };
    }
  }, {
    key: "removeEditor",
    value: function removeEditor(editorProps) {
      return function (props) {
        return React.createElement("span", {
          className: "".concat(props.className, " fa fa-trash cursor-pointer"),
          title: "Delete ".concat(editorProps.type, "!"),
          onClick: props.handleOnClick
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(_reactQuerybuilder.default, {
        fields: this.props.fields,
        customRules: this.props.customRules || {},
        controlElements: this.controlElements,
        operators: this.props.operators || this.operators,
        controlClassnames: {
          addGroup: 'rule-btn',
          addRule: 'rule-btn',
          combinators: 'rule-combinator',
          fields: '',
          operators: '',
          queryBuilder: '',
          removeGroup: 'pl-3',
          removeRule: 'pl-3',
          rule: 'rule',
          ruleGroup: 'rule-group',
          value: ''
        },
        translations: {
          addGroup: {
            label: '+ Group',
            title: 'Add group'
          },
          addRule: {
            label: '+ Rule',
            title: 'Add rule'
          },
          combinators: {
            title: 'combinators'
          },
          fields: {
            title: 'fields'
          },
          operators: {
            title: 'operators'
          },
          removeGroup: {
            label: '',
            title: 'removeGroup'
          },
          removeRule: {
            label: '',
            title: 'removeRule'
          },
          value: {
            title: 'value'
          }
        },
        query: this.props.query,
        onQueryChange: this.props.onQueryChange
      }), this.props.showQuery && React.createElement("div", {
        className: "shrink query-log scroll"
      }, React.createElement("h4", null, "Query"), React.createElement("pre", null, JSON.stringify(this.props.query, null, 2))));
    }
  }]);

  return QueryBuilderContainer;
}(React.Component);

var _default = QueryBuilderContainer;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyaWdnZXJzL1F1ZXJ5QnVpbGRlci9pbmRleC50c3giXSwibmFtZXMiOlsiUXVlcnlCdWlsZGVyQ29udGFpbmVyIiwicHJvcHMiLCJhZGRHcm91cEFjdGlvbiIsImNvbWJpbmF0b3JTZWxlY3RvciIsInJlbW92ZUdyb3VwQWN0aW9uIiwicmVtb3ZlRWRpdG9yIiwidHlwZSIsInJlbW92ZVJ1bGVBY3Rpb24iLCJ2YWx1ZUVkaXRvciIsImN1c3RvbVZhbHVlRWRpdG9yIiwiZXZlbnQiLCJydWxlIiwiZmllbGROYW1lIiwicGVyc2lzdCIsInRhcmdldFJ1bGUiLCJmaW5kUnVsZSIsImlkIiwicXVlcnkiLCJ0YXJnZXQiLCJPYmplY3QiLCJhc3NpZ24iLCJjaGVja2VkIiwidmFsdWUiLCJvblF1ZXJ5Q2hhbmdlIiwiZGlzYWJsZUdyb3VwQWN0aW9uIiwiY29udHJvbEVsZW1lbnRzIiwiZGlzYWJsZUNvbWJpbmF0b3JzIiwib3BlcmF0b3JzIiwibmFtZSIsImxhYmVsIiwiY29tYmluYXRvciIsInJ1bGVzIiwicGFyZW50IiwiaXNSdWxlR3JvdXAiLCJzdWJSdWxlIiwiY3VzdG9tUnVsZXMiLCJsZXZlbCIsInRvU3RyaW5nIiwiZSIsImhhbmRsZU9uQ2hhbmdlIiwidGFyZ2V0RmllbGRzIiwibWFwIiwidGFyZ2V0RmllbGQiLCJpbmRleCIsImhhc093blByb3BlcnR5IiwiZm9udFNpemUiLCJpc09sZFZhbHVlIiwib25DdXN0b21GaWVsZENoYW5nZSIsImN1c3RvbVZhbHVlIiwiZWRpdG9yUHJvcHMiLCJjbGFzc05hbWUiLCJoYW5kbGVPbkNsaWNrIiwiZmllbGRzIiwiYWRkR3JvdXAiLCJhZGRSdWxlIiwiY29tYmluYXRvcnMiLCJxdWVyeUJ1aWxkZXIiLCJyZW1vdmVHcm91cCIsInJlbW92ZVJ1bGUiLCJydWxlR3JvdXAiLCJ0aXRsZSIsInNob3dRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWFjdCIsIkNv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L0xpQytDLEtBQUssQ0FBQ0MsUzs7ZUFrTTNCakUscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICdyZWFjdC1sb2NhbGl6ZS1yZWR1eCc7XG5pbXBvcnQgUXVlcnlCdWlsZGVyLCB7IFJ1bGUsIFJ1bGVHcm91cCwgVmFsdWVFZGl0b3JDdXN0b21Db250cm9sUHJvcHMgfSBmcm9tICdyZWFjdC1xdWVyeWJ1aWxkZXInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmludGVyZmFjZSBJRWRpdG9yUHJvcHMge1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSUN1c3RvbVJ1bGVzIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElWYWxpZGF0b3JQcm9wcyBleHRlbmRzIFZhbHVlRWRpdG9yQ3VzdG9tQ29udHJvbFByb3BzIHtcbiAgY3VzdG9tUnVsZXM6IElDdXN0b21SdWxlcztcbiAgaGFuZGxlT25DaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJUmVtb3ZlQWN0aW9uUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgaGFuZGxlT25DbGljazogKCkgPT4gdm9pZDtcbiAgbGV2ZWw6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElFZGl0b3JQcm9wcyB7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJT3BlcmF0b3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJUXVlcnlCdWlsZGVyUHJvcHMge1xuICBmaWVsZHM6IGFueVtdO1xuICB0YXJnZXRGaWVsZHM6IGFueVtdO1xuICBvcGVyYXRvcnM/OiBJT3BlcmF0b3JbXVxuICBkaXNhYmxlR3JvdXBBY3Rpb24/OiBib29sZWFuO1xuICBkaXNhYmxlQ29tYmluYXRvcnM/OiBib29sZWFuO1xuICBkaXNhYmxlT3BlcmF0b3JzPzogYm9vbGVhbjtcbiAgcXVlcnk6IGFueTtcbiAgc2hvd1F1ZXJ5PzogYm9vbGVhbjtcbiAgY3VzdG9tUnVsZXM/OiBJQ3VzdG9tUnVsZXM7XG4gIG9uUXVlcnlDaGFuZ2U6IChxdWVyeTogYW55KSA9PiBhbnk7XG59XG5cbmludGVyZmFjZSBJVmFsaWRhdG9yUHJvcHMgZXh0ZW5kcyBWYWx1ZUVkaXRvckN1c3RvbUNvbnRyb2xQcm9wcyB7XG4gIGlzT2xkVmFsdWU/OiBib29sZWFuO1xuICBjdXN0b21WYWx1ZT86IHN0cmluZztcbiAgaGFuZGxlT25DaGFuZ2UodmFsdWU6IGFueSk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJUmVtb3ZlQWN0aW9uUHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgaGFuZGxlT25DbGljazogKCkgPT4gdm9pZDtcbiAgbGV2ZWw6IG51bWJlcjtcbn1cblxuY2xhc3MgUXVlcnlCdWlsZGVyQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElRdWVyeUJ1aWxkZXJQcm9wcz4ge1xuICBwdWJsaWMgb3BlcmF0b3JzOiBBcnJheTx7IG5hbWU6IHN0cmluZywgbGFiZWw6IHN0cmluZyB9PjtcbiAgLypcbiAgICogRG9jID0+IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXF1ZXJ5YnVpbGRlclxuICAgKiAqL1xuICBwdWJsaWMgY29udHJvbEVsZW1lbnRzOiBhbnkgPSB7XG4gICAgLypcbiAgICAgKiBhZGRSdWxlQWN0aW9uOiB7fSxcbiAgICAgKiBmaWVsZFNlbGVjdG9yOiB7fSxcbiAgICAgKiBvcGVyYXRvclNlbGVjdG9yOiB7fSxcbiAgICAgKiByZW1vdmVHcm91cEFjdGlvbjoge30sXG4gICAgICogcmVtb3ZlUnVsZUFjdGlvbjoge1xuICAgICAqIH0sXG4gICAgICovXG4gICAgYWRkR3JvdXBBY3Rpb246ICgpID0+IDxzcGFuIC8+LFxuICAgIGNvbWJpbmF0b3JTZWxlY3RvcjogKCkgPT4gPHNwYW4gLz4sXG4gICAgcmVtb3ZlR3JvdXBBY3Rpb246IHRoaXMucmVtb3ZlRWRpdG9yKHsgdHlwZTogJ2dyb3VwJyB9KSxcbiAgICByZW1vdmVSdWxlQWN0aW9uOiB0aGlzLnJlbW92ZUVkaXRvcih7IHR5cGU6ICdydWxlJyB9KSxcbiAgICB2YWx1ZUVkaXRvcjogdGhpcy5jdXN0b21WYWx1ZUVkaXRvcigpXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElRdWVyeUJ1aWxkZXJQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBpZiAoIXByb3BzLmRpc2FibGVHcm91cEFjdGlvbikge1xuICAgICAgZGVsZXRlIHRoaXMuY29udHJvbEVsZW1lbnRzLmFkZEdyb3VwQWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIXByb3BzLmRpc2FibGVDb21iaW5hdG9ycykge1xuICAgICAgZGVsZXRlIHRoaXMuY29udHJvbEVsZW1lbnRzLmNvbWJpbmF0b3JTZWxlY3RvcjtcbiAgICB9XG4gICAgdGhpcy5vcGVyYXRvcnMgPSBbXG4gICAgICB7IG5hbWU6ICdpc19udWxsJywgbGFiZWw6ICdJcyBOdWxsJyB9LFxuICAgICAgeyBuYW1lOiAnaXNfbm90X251bGwnLCBsYWJlbDogJ0lzIE5vdCBOdWxsJyB9LFxuICAgICAgeyBuYW1lOiAnYmV0d2VlbicsIGxhYmVsOiAnSW4nIH0sXG4gICAgICB7IG5hbWU6ICdub3RfYmV0d2VlbicsIGxhYmVsOiAnTm90IEluJyB9LFxuICAgICAgeyBuYW1lOiAnZXF1YWwnLCBsYWJlbDogJz0nIH0sXG4gICAgICB7IG5hbWU6ICdub3RfZXF1YWwnLCBsYWJlbDogJyE9JyB9LFxuICAgICAgeyBuYW1lOiAnbGVzcycsIGxhYmVsOiAnPCcgfSxcbiAgICAgIHsgbmFtZTogJ2dyZWF0ZXInLCBsYWJlbDogJz4nIH0sXG4gICAgICB7IG5hbWU6ICdsZXNzX29yX2VxdWFsJywgbGFiZWw6ICc8PScgfSxcbiAgICAgIHsgbmFtZTogJ2dyZWF0ZXJfb3JfZXF1YWwnLCBsYWJlbDogJz49JyB9XG4gICAgXTtcbiAgfVxuXG4gIHB1YmxpYyBvbkN1c3RvbUZpZWxkQ2hhbmdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBydWxlOiBJVmFsaWRhdG9yUHJvcHMsXG4gICAgZmllbGROYW1lOiBzdHJpbmdcbiAgKSA9PiB7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIGNvbnN0IHRhcmdldFJ1bGUgPSB0aGlzLmZpbmRSdWxlKHJ1bGUuaWQsIHRoaXMucHJvcHMucXVlcnkpO1xuICAgIGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXRSdWxlLCB7IFtmaWVsZE5hbWVdOiBldmVudC50YXJnZXQuY2hlY2tlZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXRSdWxlLCB7IFtmaWVsZE5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25RdWVyeUNoYW5nZSh0aGlzLnByb3BzLnF1ZXJ5KTtcbiAgfVxuXG4gIHB1YmxpYyBpc1J1bGVHcm91cChydWxlOiBSdWxlR3JvdXAgfCBSdWxlKSB7XG4gICAgcmV0dXJuICEhKHJ1bGUuY29tYmluYXRvciAmJiBydWxlLnJ1bGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kUnVsZShpZDogc3RyaW5nLCBwYXJlbnQ6IFJ1bGVHcm91cCB8IFJ1bGUpOiBhbnkge1xuICAgIGlmIChwYXJlbnQuaWQgPT09IGlkKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgICBpZiAocGFyZW50LnJ1bGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgcGFyZW50LnJ1bGVzKSB7XG4gICAgICAgIGlmIChydWxlLmlkID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNSdWxlR3JvdXAocnVsZSkpIHtcbiAgICAgICAgICBjb25zdCBzdWJSdWxlID0gdGhpcy5maW5kUnVsZShpZCwgcnVsZSk7XG4gICAgICAgICAgaWYgKHN1YlJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJSdWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjdXN0b21WYWx1ZUVkaXRvcigpIHtcbiAgICBjb25zdCB7IGN1c3RvbVJ1bGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAocHJvcHM6IElWYWxpZGF0b3JQcm9wcykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtwcm9wcy5sZXZlbC50b1N0cmluZygpfT5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBwcm9wcy5oYW5kbGVPbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJydWxlLWZpZWxkc1wiXG4gICAgICAgICAgICB0aXRsZT1cIkZpZWxkc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMudGFyZ2V0RmllbGRzLm1hcCgodGFyZ2V0RmllbGQsIGluZGV4KSA9PiAoPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17dGFyZ2V0RmllbGQudmFsdWV9Pnt0YXJnZXRGaWVsZC5sYWJlbH08L29wdGlvbj4pKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICB7Y3VzdG9tUnVsZXMgJiYgPHNwYW4+XG4gICAgICAgICAgICB7Y3VzdG9tUnVsZXMuaGFzT3duUHJvcGVydHkoJ2lzT2xkVmFsdWUnKSAmJiA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzFlbScgfX0+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHJvcHMuaXNPbGRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ3VzdG9tRmllbGRDaGFuZ2UoZXZlbnQsIHByb3BzLCAnaXNPbGRWYWx1ZScpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBJcyBPbGR2YWx1ZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgIHtjdXN0b21SdWxlcy5oYXNPd25Qcm9wZXJ0eSgnY3VzdG9tVmFsdWUnKSAmJiA8ZGl2IGNsYXNzTmFtZT1cInNob3ctaW5saW5lXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VzdG9tVmFsdWVcIj5DdXN0b20gVmFsdWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3Byb3BzLmN1c3RvbVZhbHVlfSBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25DdXN0b21GaWVsZENoYW5nZShldmVudCwgcHJvcHMsICdjdXN0b21WYWx1ZScpO1xuICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgPC9zcGFuPn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUVkaXRvcihlZGl0b3JQcm9wczogSUVkaXRvclByb3BzKSB7XG4gICAgcmV0dXJuIChwcm9wczogSVJlbW92ZUFjdGlvblByb3BzKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuY2xhc3NOYW1lfSBmYSBmYS10cmFzaCBjdXJzb3ItcG9pbnRlcmB9XG4gICAgICAgICAgdGl0bGU9e2BEZWxldGUgJHtlZGl0b3JQcm9wcy50eXBlfSFgfVxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZU9uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UXVlcnlCdWlsZGVyXG4gICAgICAgICAgZmllbGRzPXt0aGlzLnByb3BzLmZpZWxkc31cbiAgICAgICAgICBjdXN0b21SdWxlcz17dGhpcy5wcm9wcy5jdXN0b21SdWxlcyB8fCB7fX1cbiAgICAgICAgICBjb250cm9sRWxlbWVudHM9e3RoaXMuY29udHJvbEVsZW1lbnRzfVxuICAgICAgICAgIG9wZXJhdG9ycz17dGhpcy5wcm9wcy5vcGVyYXRvcnMgfHwgdGhpcy5vcGVyYXRvcnN9XG4gICAgICAgICAgY29udHJvbENsYXNzbmFtZXM9e3tcbiAgICAgICAgICAgIGFkZEdyb3VwOiAncnVsZS1idG4nLFxuICAgICAgICAgICAgYWRkUnVsZTogJ3J1bGUtYnRuJyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzOiAncnVsZS1jb21iaW5hdG9yJyxcbiAgICAgICAgICAgIGZpZWxkczogJycsXG4gICAgICAgICAgICBvcGVyYXRvcnM6ICcnLFxuICAgICAgICAgICAgcXVlcnlCdWlsZGVyOiAnJyxcbiAgICAgICAgICAgIHJlbW92ZUdyb3VwOiAncGwtMycsXG4gICAgICAgICAgICByZW1vdmVSdWxlOiAncGwtMycsXG4gICAgICAgICAgICBydWxlOiAncnVsZScsXG4gICAgICAgICAgICBydWxlR3JvdXA6ICdydWxlLWdyb3VwJyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgdHJhbnNsYXRpb25zPXt7XG4gICAgICAgICAgICBhZGRHcm91cDoge1xuICAgICAgICAgICAgICBsYWJlbDogJysgR3JvdXAnLFxuICAgICAgICAgICAgICB0aXRsZTogJ0FkZCBncm91cCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRSdWxlOiB7XG4gICAgICAgICAgICAgIGxhYmVsOiAnKyBSdWxlJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdBZGQgcnVsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21iaW5hdG9yczoge1xuICAgICAgICAgICAgICB0aXRsZTogJ2NvbWJpbmF0b3JzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICB0aXRsZTogJ2ZpZWxkcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVyYXRvcnM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdvcGVyYXRvcnMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVtb3ZlR3JvdXA6IHtcbiAgICAgICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgICAgICB0aXRsZTogJ3JlbW92ZUdyb3VwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZVJ1bGU6IHtcbiAgICAgICAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICAgICAgICB0aXRsZTogJ3JlbW92ZVJ1bGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICd2YWx1ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIHF1ZXJ5PXt0aGlzLnByb3BzLnF1ZXJ5fVxuICAgICAgICAgIG9uUXVlcnlDaGFuZ2U9e3RoaXMucHJvcHMub25RdWVyeUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd1F1ZXJ5ICYmIDxkaXYgY2xhc3NOYW1lPVwic2hyaW5rIHF1ZXJ5LWxvZyBzY3JvbGxcIj5cbiAgICAgICAgICA8aDQ+UXVlcnk8L2g0PlxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMucXVlcnksIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5QnVpbGRlckNvbnRhaW5lcjtcblxuIl19