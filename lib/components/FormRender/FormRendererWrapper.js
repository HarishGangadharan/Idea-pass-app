"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = _interopRequireDefault(require("formiojs/components"));

var _Components = _interopRequireDefault(require("formiojs/components/Components"));

var React = _interopRequireWildcard(require("react"));

var _Form = _interopRequireDefault(require("formiojs/Form"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_Components.default.setComponents(_components.default);

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "formio", void 0);

    _defineProperty(_assertThisInitialized(_this), "element", void 0);

    _defineProperty(_assertThisInitialized(_this), "createPromise", new Promise(function (resolve) {
      return resolve();
    }));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var _this$props = _this.props,
          options = _this$props.options,
          src = _this$props.src,
          url = _this$props.url,
          form = _this$props.form;

      if (src) {
        _this.createFormPromise(src, options, url);
      }

      if (form) {
        _this.createFormPromise(form, options, url);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createFormPromise", function (jsonOrSrc, options, url) {
      if (_this.formio) {
        _this.formio.destroy(true);
      }

      _this.createPromise = new _Form.default(_this.element.current, jsonOrSrc, options).render().then(function (formio) {
        _this.formio = formio;

        if (typeof jsonOrSrc === 'string') {
          _this.formio.src = jsonOrSrc;
        } else {
          _this.formio.form = jsonOrSrc;
        }

        if (_this.props.assignRef) {
          _this.props.assignRef(_this.formio);
        }

        if (url) {
          _this.formio.url = url;
        }
      });

      _this.initializeFormio();
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      if (_this.formio !== undefined) {
        _this.formio.destroy(true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initializeFormio", function () {
      if (_this.createPromise) {
        _this.createPromise.then(function () {
          if (_this.props.submission) {
            _this.formio.submission = _this.props.submission;
          } // this.formio.hideComponents([]); (From Components.js)


          _this.formio.on('prevPage', _this.emit('onPrevPage'));

          _this.formio.on('nextPage', _this.emit('onNextPage'));

          _this.formio.on('change', _this.emit('onChange'));

          _this.formio.on('customEvent', _this.emit('onCustomEvent'));

          _this.formio.on('formLoad', _this.emit('onFormLoad'));

          _this.formio.on('submit', _this.emit('onSubmit'));

          _this.formio.on('submitDone', _this.emit('onSubmitDone'));

          _this.formio.on('error', _this.emit('onError'));

          _this.formio.on('render', _this.emit('onRender'));
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return React.createElement("div", {
        ref: _this.element
      });
    });

    _defineProperty(_assertThisInitialized(_this), "emit", function (funcName) {
      return function () {
        if (_this.props.hasOwnProperty(funcName) && typeof _this.props[funcName] === 'function') {
          var _this$props2;

          (_this$props2 = _this.props)[funcName].apply(_this$props2, arguments);
        }
      };
    });

    _this.element = React.createRef();
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          src = _this$props3.src,
          form = _this$props3.form,
          options = _this$props3.options,
          url = _this$props3.url,
          submission = _this$props3.submission;

      if (src && prevProps.src && src !== prevProps.src) {
        this.createFormPromise(src, options, url);
      }

      if (form && prevProps.form && form !== prevProps.form) {
        this.createFormPromise(form, options, url);
      }

      if (prevProps.submission && submission !== prevProps.submission && this.formio) {
        this.formio.submission = submission;
      }
    }
  }]);

  return _default;
}(React.Component);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm1SZW5kZXIvRm9ybVJlbmRlcmVyV3JhcHBlci50c3giXSwibmFtZXMiOlsiQ29tcG9uZW50cyIsInNldENvbXBvbmVudHMiLCJBbGxDb21wb25lbnRzIiwicHJvcHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9wdGlvbnMiLCJzcmMiLCJ1cmwiLCJmb3JtIiwiY3JlYXRlRm9ybVByb21pc2UiLCJqc29uT3JTcmMiLCJmb3JtaW8iLCJkZXN0cm95IiwiY3JlYXRlUHJvbWlzZSIsIkZvcm0iLCJlbGVtZW50IiwiY3VycmVudCIsInJlbmRlciIsInRoZW4iLCJhc3NpZ25SZWYiLCJpbml0aWFsaXplRm9ybWlvIiwidW5kZWZpbmVkIiwic3VibWlzc2lvbiIsIm9uIiwiZW1pdCIsImZ1bmNOYW1lIiwiaGFzT3duUHJvcGVydHkiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInByZXZQcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBQSxvQkFBV0MsYUFBWCxDQUF5QkMsbUJBQXpCOzs7Ozs7O0FBaUNFLG9CQUFZQyxLQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzdCLGtGQUFNQSxLQUFOOztBQUQ2Qjs7QUFBQTs7QUFBQSxvRUFGTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRDtBQUFBLGFBQWFBLE9BQU8sRUFBcEI7QUFBQSxLQUFaLENBRVA7O0FBQUEsd0VBTUosWUFBTTtBQUFBLHdCQUNLLE1BQUtGLEtBRFY7QUFBQSxVQUN2QkcsT0FEdUIsZUFDdkJBLE9BRHVCO0FBQUEsVUFDZEMsR0FEYyxlQUNkQSxHQURjO0FBQUEsVUFDVEMsR0FEUyxlQUNUQSxHQURTO0FBQUEsVUFDSkMsSUFESSxlQUNKQSxJQURJOztBQUUvQixVQUFJRixHQUFKLEVBQVM7QUFDUCxjQUFLRyxpQkFBTCxDQUF1QkgsR0FBdkIsRUFBNEJELE9BQTVCLEVBQXFDRSxHQUFyQztBQUNEOztBQUNELFVBQUlDLElBQUosRUFBVTtBQUNSLGNBQUtDLGlCQUFMLENBQXVCRCxJQUF2QixFQUE2QkgsT0FBN0IsRUFBc0NFLEdBQXRDO0FBQ0Q7QUFDRixLQWQ4Qjs7QUFBQSx3RUE2QkosVUFBQ0csU0FBRCxFQUE2QkwsT0FBN0IsRUFBMkNFLEdBQTNDLEVBQTREO0FBQ3JGLFVBQUksTUFBS0ksTUFBVCxFQUFpQjtBQUNmLGNBQUtBLE1BQUwsQ0FBWUMsT0FBWixDQUFvQixJQUFwQjtBQUNEOztBQUNELFlBQUtDLGFBQUwsR0FBcUIsSUFBSUMsYUFBSixDQUFTLE1BQUtDLE9BQUwsQ0FBYUMsT0FBdEIsRUFBK0JOLFNBQS9CLEVBQTBDTCxPQUExQyxFQUFtRFksTUFBbkQsR0FBNERDLElBQTVELENBQWlFLFVBQUNQLE1BQUQsRUFBaUI7QUFDckcsY0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUNBLFlBQUksT0FBT0QsU0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUNqQyxnQkFBS0MsTUFBTCxDQUFZTCxHQUFaLEdBQWtCSSxTQUFsQjtBQUNELFNBRkQsTUFFTztBQUNMLGdCQUFLQyxNQUFMLENBQVlILElBQVosR0FBbUJFLFNBQW5CO0FBQ0Q7O0FBQ0QsWUFBSSxNQUFLUixLQUFMLENBQVdpQixTQUFmLEVBQTBCO0FBQ3hCLGdCQUFLakIsS0FBTCxDQUFXaUIsU0FBWCxDQUFxQixNQUFLUixNQUExQjtBQUNEOztBQUNELFlBQUlKLEdBQUosRUFBUztBQUNQLGdCQUFLSSxNQUFMLENBQVlKLEdBQVosR0FBa0JBLEdBQWxCO0FBQ0Q7QUFDRixPQWJvQixDQUFyQjs7QUFjQSxZQUFLYSxnQkFBTDtBQUNELEtBaEQ4Qjs7QUFBQSwyRUFrREQsWUFBTTtBQUNsQyxVQUFJLE1BQUtULE1BQUwsS0FBZ0JVLFNBQXBCLEVBQStCO0FBQzdCLGNBQUtWLE1BQUwsQ0FBWUMsT0FBWixDQUFvQixJQUFwQjtBQUNEO0FBQ0YsS0F0RDhCOztBQUFBLHVFQXdETCxZQUFNO0FBQzlCLFVBQUksTUFBS0MsYUFBVCxFQUF3QjtBQUN0QixjQUFLQSxhQUFMLENBQW1CSyxJQUFuQixDQUF3QixZQUFNO0FBQzVCLGNBQUksTUFBS2hCLEtBQUwsQ0FBV29CLFVBQWYsRUFBMkI7QUFDekIsa0JBQUtYLE1BQUwsQ0FBWVcsVUFBWixHQUF5QixNQUFLcEIsS0FBTCxDQUFXb0IsVUFBcEM7QUFDRCxXQUgyQixDQUk1Qjs7O0FBQ0EsZ0JBQUtYLE1BQUwsQ0FBWVksRUFBWixDQUFlLFVBQWYsRUFBMkIsTUFBS0MsSUFBTCxDQUFVLFlBQVYsQ0FBM0I7O0FBQ0EsZ0JBQUtiLE1BQUwsQ0FBWVksRUFBWixDQUFlLFVBQWYsRUFBMkIsTUFBS0MsSUFBTCxDQUFVLFlBQVYsQ0FBM0I7O0FBQ0EsZ0JBQUtiLE1BQUwsQ0FBWVksRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBS0MsSUFBTCxDQUFVLFVBQVYsQ0FBekI7O0FBQ0EsZ0JBQUtiLE1BQUwsQ0FBWVksRUFBWixDQUFlLGFBQWYsRUFBOEIsTUFBS0MsSUFBTCxDQUFVLGVBQVYsQ0FBOUI7O0FBQ0EsZ0JBQUtiLE1BQUwsQ0FBWVksRUFBWixDQUFlLFVBQWYsRUFBMkIsTUFBS0MsSUFBTCxDQUFVLFlBQVYsQ0FBM0I7O0FBQ0EsZ0JBQUtiLE1BQUwsQ0FBWVksRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBS0MsSUFBTCxDQUFVLFVBQVYsQ0FBekI7O0FBQ0EsZ0JBQUtiLE1BQUwsQ0FBWVksRUFBWixDQUFlLFlBQWYsRUFBNkIsTUFBS0MsSUFBTCxDQUFVLGNBQVYsQ0FBN0I7O0FBQ0EsZ0JBQUtiLE1BQUwsQ0FBWVksRUFBWixDQUFlLE9BQWYsRUFBd0IsTUFBS0MsSUFBTCxDQUFVLFNBQVYsQ0FBeEI7O0FBQ0EsZ0JBQUtiLE1BQUwsQ0FBWVksRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBS0MsSUFBTCxDQUFVLFVBQVYsQ0FBekI7QUFDRCxTQWREO0FBZUQ7QUFDRixLQTFFOEI7O0FBQUEsNkRBNEVmLFlBQU07QUFDcEIsYUFBTztBQUFLLFFBQUEsR0FBRyxFQUFFLE1BQUtUO0FBQWYsUUFBUDtBQUNELEtBOUU4Qjs7QUFBQSwyREFnRmpCLFVBQUNVLFFBQUQsRUFBbUI7QUFDL0IsYUFBTyxZQUFpQjtBQUN0QixZQUFJLE1BQUt2QixLQUFMLENBQVd3QixjQUFYLENBQTBCRCxRQUExQixLQUF1QyxPQUFRLE1BQUt2QixLQUFMLENBQVd1QixRQUFYLENBQVIsS0FBa0MsVUFBN0UsRUFBeUY7QUFBQTs7QUFDdkYsZ0NBQUt2QixLQUFMLEVBQVd1QixRQUFYO0FBQ0Q7QUFDRixPQUpEO0FBS0QsS0F0RjhCOztBQUU3QixVQUFLVixPQUFMLEdBQWVZLEtBQUssQ0FBQ0MsU0FBTixFQUFmO0FBRjZCO0FBRzlCOzs7O3VDQWF5QkMsUyxFQUF1QjtBQUFBLHlCQUNDLEtBQUszQixLQUROO0FBQUEsVUFDdkNJLEdBRHVDLGdCQUN2Q0EsR0FEdUM7QUFBQSxVQUNsQ0UsSUFEa0MsZ0JBQ2xDQSxJQURrQztBQUFBLFVBQzVCSCxPQUQ0QixnQkFDNUJBLE9BRDRCO0FBQUEsVUFDbkJFLEdBRG1CLGdCQUNuQkEsR0FEbUI7QUFBQSxVQUNkZSxVQURjLGdCQUNkQSxVQURjOztBQUUvQyxVQUFLaEIsR0FBRyxJQUFJdUIsU0FBUyxDQUFDdkIsR0FBbEIsSUFBMEJBLEdBQUcsS0FBS3VCLFNBQVMsQ0FBQ3ZCLEdBQWhELEVBQXFEO0FBQ25ELGFBQUtHLGlCQUFMLENBQXVCSCxHQUF2QixFQUE0QkQsT0FBNUIsRUFBcUNFLEdBQXJDO0FBQ0Q7O0FBQ0QsVUFBS0MsSUFBSSxJQUFJcUIsU0FBUyxDQUFDckIsSUFBbkIsSUFBNEJBLElBQUksS0FBS3FCLFNBQVMsQ0FBQ3JCLElBQW5ELEVBQXlEO0FBQ3ZELGFBQUtDLGlCQUFMLENBQXVCRCxJQUF2QixFQUE2QkgsT0FBN0IsRUFBc0NFLEdBQXRDO0FBQ0Q7O0FBQ0QsVUFBSXNCLFNBQVMsQ0FBQ1AsVUFBVixJQUF3QkEsVUFBVSxLQUFLTyxTQUFTLENBQUNQLFVBQWpELElBQStELEtBQUtYLE1BQXhFLEVBQWdGO0FBQzlFLGFBQUtBLE1BQUwsQ0FBWVcsVUFBWixHQUF5QkEsVUFBekI7QUFDRDtBQUNGOzs7O0VBakMwQkssS0FBSyxDQUFDRyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFsbENvbXBvbmVudHMgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cyc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICdmb3JtaW9qcy9jb21wb25lbnRzL0NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuQ29tcG9uZW50cy5zZXRDb21wb25lbnRzKEFsbENvbXBvbmVudHMpO1xuaW1wb3J0IEZvcm0gZnJvbSAnZm9ybWlvanMvRm9ybSc7XG5cbmludGVyZmFjZSBJRm9ybVByb3BzIHtcbiAgc3JjPzogc3RyaW5nLFxuICB1cmw/OiBzdHJpbmcsXG4gIGZvcm0/OiBvYmplY3QsXG4gIHN1Ym1pc3Npb24/OiBvYmplY3QsXG4gIG9wdGlvbnM/OiB7XG4gICAgcmVhZE9ubHk/OiBib29sZWFuLFxuICAgIG5vQWxlcnRzPzogYm9vbGVhbixcbiAgICBpMThuPzogb2JqZWN0LFxuICAgIHRlbXBsYXRlPzogc3RyaW5nLFxuICAgIHRlbXBsYXRlcz86IGFueVxuICB9LFxuICBvblByZXZQYWdlPzogKG9iamVjdD86IGFueSkgPT4gYW55LFxuICBvbk5leHRQYWdlPzogKG9iamVjdD86IGFueSkgPT4gYW55LFxuICBvbkNoYW5nZT86IChvYmplY3Q/OiBhbnkpID0+IGFueSxcbiAgb25DdXN0b21FdmVudD86IChvYmplY3Q/OiBhbnkpID0+IGFueSxcbiAgb25TdWJtaXQ/OiAob2JqZWN0PzogYW55KSA9PiBhbnksXG4gIG9uU3VibWl0RG9uZT86IChvYmplY3Q/OiBhbnkpID0+IGFueSxcbiAgb25Gb3JtTG9hZD86IChvYmplY3Q/OiBhbnkpID0+IGFueSxcbiAgb25FcnJvcj86IChvYmplY3Q/OiBhbnkpID0+IGFueSxcbiAgb25SZW5kZXI/OiAob2JqZWN0PzogYW55KSA9PiBhbnksXG4gIGFzc2lnblJlZj86IChvYmplY3Q/OiBhbnkpID0+IGFueVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJRm9ybVByb3BzLCBhbnk+IHtcbiAgcHVibGljIGZvcm1pbzogYW55O1xuICBwdWJsaWMgZWxlbWVudDogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcblxuICBwcml2YXRlIGNyZWF0ZVByb21pc2U6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRm9ybVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZWxlbWVudCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBzcmMsIHVybCwgZm9ybSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aGlzLmNyZWF0ZUZvcm1Qcm9taXNlKHNyYywgb3B0aW9ucywgdXJsKTtcbiAgICB9XG4gICAgaWYgKGZvcm0pIHtcbiAgICAgIHRoaXMuY3JlYXRlRm9ybVByb21pc2UoZm9ybSwgb3B0aW9ucywgdXJsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogSUZvcm1Qcm9wcykge1xuICAgIGNvbnN0IHsgc3JjLCBmb3JtLCBvcHRpb25zLCB1cmwsIHN1Ym1pc3Npb24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKChzcmMgJiYgcHJldlByb3BzLnNyYykgJiYgc3JjICE9PSBwcmV2UHJvcHMuc3JjKSB7XG4gICAgICB0aGlzLmNyZWF0ZUZvcm1Qcm9taXNlKHNyYywgb3B0aW9ucywgdXJsKTtcbiAgICB9XG4gICAgaWYgKChmb3JtICYmIHByZXZQcm9wcy5mb3JtKSAmJiBmb3JtICE9PSBwcmV2UHJvcHMuZm9ybSkge1xuICAgICAgdGhpcy5jcmVhdGVGb3JtUHJvbWlzZShmb3JtLCBvcHRpb25zLCB1cmwpO1xuICAgIH1cbiAgICBpZiAocHJldlByb3BzLnN1Ym1pc3Npb24gJiYgc3VibWlzc2lvbiAhPT0gcHJldlByb3BzLnN1Ym1pc3Npb24gJiYgdGhpcy5mb3JtaW8pIHtcbiAgICAgIHRoaXMuZm9ybWlvLnN1Ym1pc3Npb24gPSBzdWJtaXNzaW9uO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVGb3JtUHJvbWlzZSA9IChqc29uT3JTcmM6IHN0cmluZyB8IG9iamVjdCwgb3B0aW9uczogYW55LCB1cmw/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAodGhpcy5mb3JtaW8pIHtcbiAgICAgIHRoaXMuZm9ybWlvLmRlc3Ryb3kodHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuY3JlYXRlUHJvbWlzZSA9IG5ldyBGb3JtKHRoaXMuZWxlbWVudC5jdXJyZW50LCBqc29uT3JTcmMsIG9wdGlvbnMpLnJlbmRlcigpLnRoZW4oKGZvcm1pbzogYW55KSA9PiB7XG4gICAgICB0aGlzLmZvcm1pbyA9IGZvcm1pbztcbiAgICAgIGlmICh0eXBlb2YganNvbk9yU3JjID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmZvcm1pby5zcmMgPSBqc29uT3JTcmM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcm1pby5mb3JtID0ganNvbk9yU3JjO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMuYXNzaWduUmVmKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYXNzaWduUmVmKHRoaXMuZm9ybWlvKTtcbiAgICAgIH1cbiAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgdGhpcy5mb3JtaW8udXJsID0gdXJsO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUZvcm1pbygpO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmZvcm1pbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZvcm1pby5kZXN0cm95KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXplRm9ybWlvID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmNyZWF0ZVByb21pc2UpIHtcbiAgICAgIHRoaXMuY3JlYXRlUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3VibWlzc2lvbikge1xuICAgICAgICAgIHRoaXMuZm9ybWlvLnN1Ym1pc3Npb24gPSB0aGlzLnByb3BzLnN1Ym1pc3Npb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5mb3JtaW8uaGlkZUNvbXBvbmVudHMoW10pOyAoRnJvbSBDb21wb25lbnRzLmpzKVxuICAgICAgICB0aGlzLmZvcm1pby5vbigncHJldlBhZ2UnLCB0aGlzLmVtaXQoJ29uUHJldlBhZ2UnKSk7XG4gICAgICAgIHRoaXMuZm9ybWlvLm9uKCduZXh0UGFnZScsIHRoaXMuZW1pdCgnb25OZXh0UGFnZScpKTtcbiAgICAgICAgdGhpcy5mb3JtaW8ub24oJ2NoYW5nZScsIHRoaXMuZW1pdCgnb25DaGFuZ2UnKSk7XG4gICAgICAgIHRoaXMuZm9ybWlvLm9uKCdjdXN0b21FdmVudCcsIHRoaXMuZW1pdCgnb25DdXN0b21FdmVudCcpKTtcbiAgICAgICAgdGhpcy5mb3JtaW8ub24oJ2Zvcm1Mb2FkJywgdGhpcy5lbWl0KCdvbkZvcm1Mb2FkJykpO1xuICAgICAgICB0aGlzLmZvcm1pby5vbignc3VibWl0JywgdGhpcy5lbWl0KCdvblN1Ym1pdCcpKTtcbiAgICAgICAgdGhpcy5mb3JtaW8ub24oJ3N1Ym1pdERvbmUnLCB0aGlzLmVtaXQoJ29uU3VibWl0RG9uZScpKTtcbiAgICAgICAgdGhpcy5mb3JtaW8ub24oJ2Vycm9yJywgdGhpcy5lbWl0KCdvbkVycm9yJykpO1xuICAgICAgICB0aGlzLmZvcm1pby5vbigncmVuZGVyJywgdGhpcy5lbWl0KCdvblJlbmRlcicpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxkaXYgcmVmPXt0aGlzLmVsZW1lbnR9IC8+O1xuICB9XG5cbiAgcHVibGljIGVtaXQgPSAoZnVuY05hbWU6IGFueSkgPT4ge1xuICAgIHJldHVybiAoLi4uYXJnczogW10pID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmhhc093blByb3BlcnR5KGZ1bmNOYW1lKSAmJiB0eXBlb2YgKHRoaXMucHJvcHNbZnVuY05hbWVdKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByb3BzW2Z1bmNOYW1lXSguLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iXX0=