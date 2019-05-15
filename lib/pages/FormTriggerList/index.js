"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _formTrigger = require("../../actions/formTrigger");

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

var FormTriggerList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormTriggerList, _React$Component);

  function FormTriggerList(props) {
    var _this;

    _classCallCheck(this, FormTriggerList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormTriggerList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "addFormTrigger", function () {
      var formId = _this.props.match.params.formId;

      _this.props.history.push("/formTrigger/".concat(formId));
    });

    _defineProperty(_assertThisInitialized(_this), "editFormTrigger", function (triggerId) {
      var formId = _this.props.match.params.formId;

      _this.props.history.push("/formTrigger/".concat(formId, "/").concat(triggerId));
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFormTriggers", function () {
      var formId = _this.props.match.params.formId;
      var _this$state = _this.state,
          currentPage = _this$state.currentPage,
          length = _this$state.length;

      _this.props.fetchFormTriggerListRequest(formId, length, currentPage);
    });

    _this.state = {
      columns: [new _Column.default().withKey('_id').withLabel('ID'), new _Column.default().withKey('name').withLabel('Name'), new _Column.default().withKey('form').withLabel('Form'), new _Column.default().withKey('createdAt').withLabel('Created At'), new _Column.default().withKey('action').withLabel('Actions').withCellFormatter(function (cell, row) {
        return React.createElement("div", null, React.createElement("i", {
          className: "glyphicon glyphicon-edit cursor-pointer",
          onClick: function onClick() {
            return _this.editFormTrigger(row._id);
          }
        }));
      })],
      currentPage: 1,
      length: 10
    };
    return _this;
  }

  _createClass(FormTriggerList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFormTriggers();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          loading = _this$props.loading,
          data = _this$props.data,
          total = _this$props.total;
      var _this$state2 = this.state,
          currentPage = _this$state2.currentPage,
          length = _this$state2.length;
      return React.createElement("div", {
        className: "shadow-container"
      }, React.createElement(_CButton.default, {
        className: "btn btn-primary pull-right mb-2",
        onClick: function onClick() {
          return _this2.addFormTrigger();
        },
        name: "Add Trigger"
      }), React.createElement(_Table.default, {
        keyField: "formtrigger",
        data: data,
        columns: this.state.columns,
        loading: loading,
        length: length,
        currentPage: currentPage,
        total: total,
        remote: true,
        onUpdate: function onUpdate(nextState) {
          _this2.setState({
            currentPage: nextState.currentPage,
            length: nextState.length
          }, _this2.fetchFormTriggers);
        }
      }));
    }
  }]);

  return FormTriggerList;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.formTrigger.list.data,
    loading: state.formTrigger.list.isLoading,
    total: state.formTrigger.list.total
  };
};

var mapDispatchToProps = {
  fetchFormTriggerListRequest: _formTrigger.fetchFormTriggerListRequest
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormTriggerList);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Gb3JtVHJpZ2dlckxpc3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkZvcm1UcmlnZ2VyTGlzdCIsInByb3BzIiwiZm9ybUlkIiwibWF0Y2giLCJwYXJhbXMiLCJoaXN0b3J5IiwicHVzaCIsInRyaWdnZXJJZCIsInN0YXRlIiwiY3VycmVudFBhZ2UiLCJsZW5ndGgiLCJmZXRjaEZvcm1UcmlnZ2VyTGlzdFJlcXVlc3QiLCJjb2x1bW5zIiwiQ29sdW1uIiwid2l0aEtleSIsIndpdGhMYWJlbCIsIndpdGhDZWxsRm9ybWF0dGVyIiwiY2VsbCIsInJvdyIsImVkaXRGb3JtVHJpZ2dlciIsIl9pZCIsImZldGNoRm9ybVRyaWdnZXJzIiwibG9hZGluZyIsImRhdGEiLCJ0b3RhbCIsImFkZEZvcm1UcmlnZ2VyIiwibmV4dFN0YXRlIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImZvcm1UcmlnZ2VyIiwibGlzdCIsImlzTG9hZGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdCTUEsZTs7Ozs7QUFDSiwyQkFBWUMsS0FBWixFQUE0RDtBQUFBOztBQUFBOztBQUMxRCx5RkFBTUEsS0FBTjs7QUFEMEQscUVBbUJwQyxZQUFNO0FBQUEsVUFDcEJDLE1BRG9CLEdBQ1QsTUFBS0QsS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxNQURSLENBQ3BCRixNQURvQjs7QUFFNUIsWUFBS0QsS0FBTCxDQUFXSSxPQUFYLENBQW1CQyxJQUFuQix3QkFBd0NKLE1BQXhDO0FBQ0QsS0F0QjJEOztBQUFBLHNFQXdCbkMsVUFBQ0ssU0FBRCxFQUF1QjtBQUFBLFVBQ3RDTCxNQURzQyxHQUMzQixNQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDLE1BRFUsQ0FDdENGLE1B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UyxDQUFDaEI7QUFGTixXQUFkLEVBR0csTUFBSSxDQUFDVyxpQkFIUjtBQUlEO0FBZEgsUUFORixDQURGO0FBeUJEOzs7O0VBOUQyQk8sS0FBSyxDQUFDQyxTOztBQXVFcEMsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdEIsS0FBRDtBQUFBLFNBQW9CO0FBQzFDZSxJQUFBQSxJQUFJLEVBQUVmLEtBQUssQ0FBQ3VCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCVCxJQURhO0FBRTFDRCxJQUFBQSxPQUFPLEVBQUVkLEtBQUssQ0FBQ3VCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCQyxTQUZVO0FBRzFDVCxJQUFBQSxLQUFLLEVBQUVoQixLQUFLLENBQUN1QixXQUFOLENBQWtCQyxJQUFsQixDQUF1QlI7QUFIWSxHQUFwQjtBQUFBLENBQXhCOztBQU1BLElBQU1VLGtCQUFrQixHQUFJO0FBQzFCdkIsRUFBQUEsMkJBQTJCLEVBQTNCQTtBQUQwQixDQUE1Qjs7ZUFJZSx5QkFBUW1CLGVBQVIsRUFBeUJJLGtCQUF6QixFQUE2Q2xDLGVBQTdDLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBmZXRjaEZvcm1UcmlnZ2VyTGlzdFJlcXVlc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Zvcm1UcmlnZ2VyJztcbmltcG9ydCBUYWJsZSwgeyBJVGFibGVVcGRhdGVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGUnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlL0NvbHVtbic7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycyc7XG5pbXBvcnQgQ0J1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uJztcblxuaW50ZXJmYWNlIElGb3JtU2NoZW1hc1Byb3BzIHtcbiAgZGF0YTogb2JqZWN0W10sXG4gIHRvdGFsOiBudW1iZXIsXG4gIGxvYWRpbmc6IGJvb2xlYW4sXG4gIGZldGNoRm9ybVRyaWdnZXJMaXN0UmVxdWVzdDogYW55LFxuICBtYXRjaDogYW55XG59XG5cbmludGVyZmFjZSBJRm9ybVNjaGVtYXNTdGF0ZSB7XG4gIGNvbHVtbnM6IENvbHVtbltdLFxuICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICBsZW5ndGg6IG51bWJlclxufVxuXG5jbGFzcyBGb3JtVHJpZ2dlckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SUZvcm1TY2hlbWFzUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzLCBJRm9ybVNjaGVtYXNTdGF0ZT57XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRm9ybVNjaGVtYXNQcm9wcyAmIFJvdXRlQ29tcG9uZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgKG5ldyBDb2x1bW4oKSkud2l0aEtleSgnX2lkJykud2l0aExhYmVsKCdJRCcpLFxuICAgICAgICAobmV3IENvbHVtbigpKS53aXRoS2V5KCduYW1lJykud2l0aExhYmVsKCdOYW1lJyksXG4gICAgICAgIChuZXcgQ29sdW1uKCkpLndpdGhLZXkoJ2Zvcm0nKS53aXRoTGFiZWwoJ0Zvcm0nKSxcbiAgICAgICAgKG5ldyBDb2x1bW4oKSkud2l0aEtleSgnY3JlYXRlZEF0Jykud2l0aExhYmVsKCdDcmVhdGVkIEF0JyksXG4gICAgICAgIChuZXcgQ29sdW1uKCkpLndpdGhLZXkoJ2FjdGlvbicpLndpdGhMYWJlbCgnQWN0aW9ucycpLndpdGhDZWxsRm9ybWF0dGVyKChjZWxsOiBhbnksIHJvdzogYW55KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZWRpdCBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuZWRpdEZvcm1UcmlnZ2VyKHJvdy5faWQpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgXSxcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgbGVuZ3RoOiAxMFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgYWRkRm9ybVRyaWdnZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtSWQgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvZm9ybVRyaWdnZXIvJHtmb3JtSWR9YCk7XG4gIH1cblxuICBwdWJsaWMgZWRpdEZvcm1UcmlnZ2VyID0gKHRyaWdnZXJJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtSWQgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGAvZm9ybVRyaWdnZXIvJHtmb3JtSWR9LyR7dHJpZ2dlcklkfWApO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hGb3JtVHJpZ2dlcnMoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBkYXRhLCB0b3RhbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCBsZW5ndGggfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNvbnRhaW5lclwiPlxuICAgICAgICA8Q0J1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0IG1iLTJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkRm9ybVRyaWdnZXIoKX1cbiAgICAgICAgICBuYW1lPVwiQWRkIFRyaWdnZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBrZXlGaWVsZD1cImZvcm10cmlnZ2VyXCJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIGNvbHVtbnM9e3RoaXMuc3RhdGUuY29sdW1uc31cbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgIGxlbmd0aD17bGVuZ3RofVxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgcmVtb3RlPXt0cnVlfVxuICAgICAgICAgIG9uVXBkYXRlPXsobmV4dFN0YXRlOiBJVGFibGVVcGRhdGVQcm9wcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBuZXh0U3RhdGUuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgIGxlbmd0aDogbmV4dFN0YXRlLmxlbmd0aFxuICAgICAgICAgICAgfSwgdGhpcy5mZXRjaEZvcm1UcmlnZ2Vycyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoRm9ybVRyaWdnZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybUlkIH0gPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcztcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCBsZW5ndGggfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEZvcm1UcmlnZ2VyTGlzdFJlcXVlc3QoZm9ybUlkLCBsZW5ndGgsIGN1cnJlbnRQYWdlKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcbiAgZGF0YTogc3RhdGUuZm9ybVRyaWdnZXIubGlzdC5kYXRhLFxuICBsb2FkaW5nOiBzdGF0ZS5mb3JtVHJpZ2dlci5saXN0LmlzTG9hZGluZyxcbiAgdG90YWw6IHN0YXRlLmZvcm1UcmlnZ2VyLmxpc3QudG90YWxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoe1xuICBmZXRjaEZvcm1UcmlnZ2VyTGlzdFJlcXVlc3Rcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShGb3JtVHJpZ2dlckxpc3QpO1xuIl19