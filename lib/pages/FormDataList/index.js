"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _formfielddata = require("../../actions/formfielddata");

var _Table = _interopRequireDefault(require("../../components/Table"));

var _Column = _interopRequireDefault(require("../../components/Table/Column"));

var _CButton = _interopRequireDefault(require("../../components/Button/CButton"));

var _index = require("../../components/index");

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

var FormDataList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormDataList, _React$Component);

  function FormDataList(props) {
    var _this;

    _classCallCheck(this, FormDataList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormDataList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderFormSchema", function (pageType) {
      var formId = _this.props.match.params.formId;

      _this.props.history.push("/formrenderer/".concat(formId, "/").concat(pageType));
    });

    _defineProperty(_assertThisInitialized(_this), "editFormData", function (submissionId, pageType) {
      var formId = _this.props.match.params.formId;

      _this.props.history.push("/formrenderer/".concat(formId, "/").concat(submissionId, "/").concat(pageType));
    });

    _defineProperty(_assertThisInitialized(_this), "fetchFormDatas", function () {
      var formName = _this.props.match.params.formName;
      var _this$state = _this.state,
          currentPage = _this$state.currentPage,
          length = _this$state.length;

      _this.props.fetchFormFieldDataListRequest(formName, length, currentPage);
    });

    _this.state = {
      columns: [new _Column.default().withKey('_id').withLabel('ID'), new _Column.default().withKey('createdAt').withLabel('Created At'), new _Column.default().withKey('action').withLabel('Actions').withCellFormatter(function (cell, row) {
        return React.createElement("div", null, React.createElement(_index.BaseIcon, {
          display: "inline",
          name: "Eye",
          onClick: function onClick() {
            return _this.editFormData(row._id, 'view');
          }
        }), React.createElement(_index.BaseIcon, {
          display: "inline",
          name: "Edit",
          onClick: function onClick() {
            return _this.editFormData(row._id, 'edit');
          }
        }));
      })],
      currentPage: 1,
      length: 10
    };
    return _this;
  }

  _createClass(FormDataList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchFormDatas();
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
          return _this2.renderFormSchema('create');
        },
        name: "Add Data"
      }), React.createElement(_Table.default, {
        keyField: "formfielddata",
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
          }, _this2.fetchFormDatas);
        }
      }));
    }
  }]);

  return FormDataList;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.formFieldData.list.data,
    loading: state.formFieldData.list.isLoading,
    total: state.formFieldData.list.total
  };
};

var mapDispatchToProps = {
  fetchFormFieldDataListRequest: _formfielddata.fetchFormFieldDataListRequest
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormDataList);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Gb3JtRGF0YUxpc3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkZvcm1EYXRhTGlzdCIsInByb3BzIiwicGFnZVR5cGUiLCJmb3JtSWQiLCJtYXRjaCIsInBhcmFtcyIsImhpc3RvcnkiLCJwdXNoIiwic3VibWlzc2lvbklkIiwiZm9ybU5hbWUiLCJzdGF0ZSIsImN1cnJlbnRQYWdlIiwibGVuZ3RoIiwiZmV0Y2hGb3JtRmllbGREYXRhTGlzdFJlcXVlc3QiLCJjb2x1bW5zIiwiQ29sdW1uIiwid2l0aEtleSIsIndpdGhMYWJlbCIsIndpdGhDZWxsRm9ybWF0dGVyIiwiY2VsbCIsInJvdyIsImVkaXRGb3JtRGF0YSIsIl9pZCIsImZldGNoRm9ybURhdGFzIiwibG9hZGluZyIsImRhdGEiLCJ0b3RhbCIsInJlbmRlckZvcm1TY2hlbWEiLCJuZXh0U3RhdGUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZm9ybUZpZWxkRGF0YSIsImxpc3QiLCJpc0xvYWRpbmciLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQk1BLFk7Ozs7O0FBQ0osd0JBQVlDLEtBQVosRUFBc0M7QUFBQTs7QUFBQTs7QUFDcEMsc0ZBQU1BLEtBQU47O0FBRG9DLHVFQTBCWixVQUFDQyxRQUFELEVBQXNCO0FBQUEsVUFDdENDLE1BRHNDLEdBQzNCLE1BQUtGLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkMsTUFEVSxDQUN0Q0YsTUFEc0M7O0FBRTlDLFlBQUtGLEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkMsSUFBbkIseUJBQXlDSixNQUF6QyxjQUFtREQsUUFBbkQ7QUFDRCxLQTdCcUM7O0FBQUEsbUVBK0JoQixVQUFDTSxZQUFELEVBQXVCTixRQUF2QixFQUE0QztBQUFBLFVBQ3hEQyxNQUR3RCxHQUM3QyxNQUFLRixLQUFMLENBQVdHLEtBQVgsQ0FBaUJDLE1BRDRCLENBQ3hERixNQUR3RDs7QUFFaEUsWUFBS0YsS0FBTCxDQUFXSyxPQUFYLENBQW1CQyxJQUFuQix5QkFBeUNKLE1BQXpDLGNBQW1ESyxZQUFuRCxjQUFtRU4sUUFBbkU7QUFDRCxLQWxDcUM7O0FBQUEscUVBc0ViLFlBQU07QUFBQSxVQUNyQk8sUUFEcUIsR0FDUixNQUFLUixLQUFMLENBQVdHLEtBQVgsQ0FBaUJDLE1BRFQsQ0FDckJJLFFBRHFCO0FBQUEsd0JBRUcsTUFBS0MsS0FGUjtBQUFBLFVBRXJCQyxXQUZxQixlQUVyQkEsV0FGcUI7QUFBQSxVQUVSQyxNQUZRLGVBRVJBLE1BRlE7O0FBRzdCLFlBQUtYLEtBQUwsQ0FBV1ksNkJBQVgsQ0FBeUNKLFFBQXpDLEVBQW1ERyxNQUFuRCxFQUEyREQsV0FBM0Q7QUFDRCxLQTFFcUM7O0FBRXBDLFVBQUtELEtBQUwsR0FBYTtBQUNYSSxNQUFBQSxPQUFPLEVBQUUsQ0FDTixJQUFJQyxlQUFKLEVBQUQsQ0FBZUMsT0FBZixDQUF1QixLQUF2QixFQUE4QkMsU0FBOUIsQ0FBd0MsSUFBeEMsQ0FETyxFQUVOLElBQUlGLGVBQUosRUFBRCxDQUFlQyxPQUFmLENBQXVCLFdBQXZCLEVBQW9DQyxTQUFwQyxDQUE4QyxZQUE5QyxDQUZPLEVBR04sSUFBSUYsZUFBSixFQUFELENBQWVDLE9BQWYsQ0FBdUIsUUFBdkIsRUFBaUNDLFNBQWpDLENBQTJDLFNBQTNDLEVBQXNEQyxpQkFBdEQsQ0FBd0UsVUFBQ0MsSUFBRCxFQUFZQyxHQUFaO0FBQUEsZUFDdEUsaUNBQ0Usb0JBQUMsZUFBRDtBQUNFLFVBQUEsT0FBTyxFQUFDLFFBRFY7QUFFRSxVQUFBLElBQUksRUFBQyxLQUZQO0FBR0UsVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTSxNQUFLQyxZQUFMLENBQWtCRCxHQUFHLENBQUNFLEdBQXRCLEVBQTJCLE1BQTNCLENBQU47QUFBQTtBQUhYLFVBREYsRUFNRSxvQkFBQyxlQUFEO0FBQ0UsVUFBQSxPQUFPLEVBQUMsUUFEVjtBQUVFLFVBQUEsSUFBSSxFQUFDLE1BRlA7QUFHRSxVQUFBLE9BQU8sRUFBRTtBQUFBLG1CQUFNLE1BQUtELFlBQUwsQ0FBa0JELEdBQUcsQ0FBQ0UsR0FBdEIsRUFBMkIsTUFBM0IsQ0FBTjtBQUFBO0FBSFgsVUFORixDQURzRTtBQUFBLE9BQXhFLENBSE8sQ0FERTtBQW1CWFgsTUFBQUEsV0FBVyxFQUFFLENBbkJGO0FBb0JYQyxNQUFBQSxNQUFNLEVBQUU7QUFwQkcsS0FBYjtBQUZvQztBQXdCckM7Ozs7d0NBWTBCO0FBQ3pCLFdBQUtXLGNBQUw7QUFDRDs7OzZCQUVlO0FBQUE7O0FBQUEsd0JBQ21CLEtBQUt0QixLQUR4QjtBQUFBLFVBQ051QixPQURNLGVBQ05BLE9BRE07QUFBQSxVQUNHQyxJQURILGVBQ0dBLElBREg7QUFBQSxVQUNTQyxLQURULGVBQ1NBLEtBRFQ7QUFBQSx5QkFFa0IsS0FBS2hCLEtBRnZCO0FBQUEsVUFFTkMsV0FGTSxnQkFFTkEsV0FGTTtBQUFBLFVBRU9DLE1BRlAsZ0JBRU9BLE1BRlA7QUFHZCxhQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLG9CQUFDLGdCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUMsaUNBRFo7QUFFRSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNLE1BQUksQ0FBQ2UsZ0JBQUwsQ0FBc0IsUUFBdEIsQ0FBTjtBQUFBLFNBRlg7QUFHRSxRQUFBLElBQUksRUFBQztBQUhQLFFBREYsRUFNRSxvQkFBQyxjQUFEO0FBQ0UsUUFBQSxRQUFRLEVBQUMsZUFEWDtBQUVFLFFBQUEsSUFBSSxFQUFFRixJQUZSO0FBR0UsUUFBQSxPQUFPLEVBQUUsS0FBS2YsS0FBTCxDQUFXSSxPQUh0QjtBQUlFLFFBQUEsT0FBTyxFQUFFVSxPQUpYO0FBS0UsUUFBQSxNQUFNLEVBQUVaLE1BTFY7QUFNRSxRQUFBLFdBQVcsRUFBRUQsV0FOZjtBQU9FLFFBQUEsS0FBSyxFQUFFZSxLQVBUO0FBUUUsUUFBQSxNQUFNLEVBQUUsSUFSVjtBQVNFLFFBQUEsUUFBUSxFQUFFLGtCQUFDRSxTQUFELEVBQWtDO0FBQzFDLFVBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDWmxCLFlBQUFBLFdBQVcsRUFBRWlCLFNBQVMsQ0FBQ2pCLFdBRFg7QUFFWkMsWUFBQUEsTUFBTSxFQUFFZ0IsU0FBUyxDQUFDaEI7QUFGTixXQUFkLEVBR0csTUFBSSxDQUFDVyxjQUhSO0FBSUQ7QUFkSCxRQU5GLENBREY7QUF5QkQ7Ozs7RUFyRXdCTyxLQUFLLENBQUNDLFM7O0FBOEVqQyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUN0QixLQUFEO0FBQUEsU0FBb0I7QUFDMUNlLElBQUFBLElBQUksRUFBRWYsS0FBSyxDQUFDdUIsYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUJULElBRFc7QUFFMUNELElBQUFBLE9BQU8sRUFBRWQsS0FBSyxDQUFDdUIsYUFBTixDQUFvQkMsSUFBcEIsQ0FBeUJDLFNBRlE7QUFHMUNULElBQUFBLEtBQUssRUFBRWhCLEtBQUssQ0FBQ3VCLGFBQU4sQ0FBb0JDLElBQXBCLENBQXlCUjtBQUhVLEdBQXBCO0FBQUEsQ0FBeEI7O0FBTUEsSUFBTVUsa0JBQWtCLEdBQUk7QUFDMUJ2QixFQUFBQSw2QkFBNkIsRUFBN0JBO0FBRDBCLENBQTVCOztlQUllLHlCQUFRbUIsZUFBUixFQUF5Qkksa0JBQXpCLEVBQTZDcEMsWUFBN0MsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGZldGNoRm9ybUZpZWxkRGF0YUxpc3RSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9mb3JtZmllbGRkYXRhJztcbmltcG9ydCBUYWJsZSwgeyBJVGFibGVVcGRhdGVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGUnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlL0NvbHVtbic7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycyc7XG5pbXBvcnQgQ0J1dHRvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uJztcbmltcG9ydCB7IEJhc2VJY29uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbmRleCc7XG5cbmludGVyZmFjZSBJRm9ybVNjaGVtYXNQcm9wcyBleHRlbmRzIFJvdXRlQ29tcG9uZW50UHJvcHMge1xuICBkYXRhOiBvYmplY3RbXSxcbiAgdG90YWw6IG51bWJlcixcbiAgbG9hZGluZzogYm9vbGVhbixcbiAgZmV0Y2hGb3JtRmllbGREYXRhTGlzdFJlcXVlc3Q6IGFueSxcbiAgbWF0Y2g6IGFueVxufVxuXG5pbnRlcmZhY2UgSUZvcm1TY2hlbWFzU3RhdGUge1xuICBjb2x1bW5zOiBDb2x1bW5bXSxcbiAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgbGVuZ3RoOiBudW1iZXJcbn1cblxuY2xhc3MgRm9ybURhdGFMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElGb3JtU2NoZW1hc1Byb3BzLCBJRm9ybVNjaGVtYXNTdGF0ZT57XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRm9ybVNjaGVtYXNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29sdW1uczogW1xuICAgICAgICAobmV3IENvbHVtbigpKS53aXRoS2V5KCdfaWQnKS53aXRoTGFiZWwoJ0lEJyksXG4gICAgICAgIChuZXcgQ29sdW1uKCkpLndpdGhLZXkoJ2NyZWF0ZWRBdCcpLndpdGhMYWJlbCgnQ3JlYXRlZCBBdCcpLFxuICAgICAgICAobmV3IENvbHVtbigpKS53aXRoS2V5KCdhY3Rpb24nKS53aXRoTGFiZWwoJ0FjdGlvbnMnKS53aXRoQ2VsbEZvcm1hdHRlcigoY2VsbDogYW55LCByb3c6IGFueSkgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmFzZUljb25cbiAgICAgICAgICAgICAgZGlzcGxheT1cImlubGluZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJFeWVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmVkaXRGb3JtRGF0YShyb3cuX2lkLCAndmlldycpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCYXNlSWNvblxuICAgICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIkVkaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmVkaXRGb3JtRGF0YShyb3cuX2lkLCAnZWRpdCcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgIF0sXG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIGxlbmd0aDogMTBcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlckZvcm1TY2hlbWEgPSAocGFnZVR5cGU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgZm9ybUlkIH0gPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcztcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChgL2Zvcm1yZW5kZXJlci8ke2Zvcm1JZH0vJHtwYWdlVHlwZX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBlZGl0Rm9ybURhdGEgPSAoc3VibWlzc2lvbklkOiBzdHJpbmcsIHBhZ2VUeXBlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IGZvcm1JZCB9ID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXM7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goYC9mb3JtcmVuZGVyZXIvJHtmb3JtSWR9LyR7c3VibWlzc2lvbklkfS8ke3BhZ2VUeXBlfWApO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hGb3JtRGF0YXMoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBkYXRhLCB0b3RhbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGN1cnJlbnRQYWdlLCBsZW5ndGggfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWNvbnRhaW5lclwiPlxuICAgICAgICA8Q0J1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0IG1iLTJcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVuZGVyRm9ybVNjaGVtYSgnY3JlYXRlJyl9XG4gICAgICAgICAgbmFtZT1cIkFkZCBEYXRhXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAga2V5RmllbGQ9XCJmb3JtZmllbGRkYXRhXCJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgIGNvbHVtbnM9e3RoaXMuc3RhdGUuY29sdW1uc31cbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgIGxlbmd0aD17bGVuZ3RofVxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgcmVtb3RlPXt0cnVlfVxuICAgICAgICAgIG9uVXBkYXRlPXsobmV4dFN0YXRlOiBJVGFibGVVcGRhdGVQcm9wcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBuZXh0U3RhdGUuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgIGxlbmd0aDogbmV4dFN0YXRlLmxlbmd0aFxuICAgICAgICAgICAgfSwgdGhpcy5mZXRjaEZvcm1EYXRhcyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoRm9ybURhdGFzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZm9ybU5hbWUgfSA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zO1xuICAgIGNvbnN0IHsgY3VycmVudFBhZ2UsIGxlbmd0aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzLmZldGNoRm9ybUZpZWxkRGF0YUxpc3RSZXF1ZXN0KGZvcm1OYW1lLCBsZW5ndGgsIGN1cnJlbnRQYWdlKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IElTdGF0ZSkgPT4gKHtcbiAgZGF0YTogc3RhdGUuZm9ybUZpZWxkRGF0YS5saXN0LmRhdGEsXG4gIGxvYWRpbmc6IHN0YXRlLmZvcm1GaWVsZERhdGEubGlzdC5pc0xvYWRpbmcsXG4gIHRvdGFsOiBzdGF0ZS5mb3JtRmllbGREYXRhLmxpc3QudG90YWxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoe1xuICBmZXRjaEZvcm1GaWVsZERhdGFMaXN0UmVxdWVzdFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEZvcm1EYXRhTGlzdCk7XG4iXX0=