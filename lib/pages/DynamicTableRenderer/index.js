"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _dynamicTable = require("../../actions/dynamicTable");

var _index = _interopRequireDefault(require("../../components/Table/index"));

var _commonUtil = require("../../utils/commonUtil");

require("./DynamicTableRenderer.css");

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

var DynamicTableRenderer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DynamicTableRenderer, _React$Component);

  function DynamicTableRenderer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DynamicTableRenderer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DynamicTableRenderer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "tableComponent", undefined);

    _defineProperty(_assertThisInitialized(_this), "autoRefresh", undefined);

    _defineProperty(_assertThisInitialized(_this), "columns", []);

    return _this;
  }

  _createClass(DynamicTableRenderer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.fetchDynamicSchema(function (columns, isAutoRefresh) {
        _this2.columns = (0, _commonUtil.constructColumns)(columns);

        if (isAutoRefresh) {
          _this2.autoRefresh = setInterval(function () {
            _this2.tableComponent.refreshTable();
          }, 30000);
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.autoRefresh) {
        clearInterval(this.autoRefresh);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          loading = _this$props.loading,
          clientRendering = _this$props.clientRendering,
          name = _this$props.name,
          data = _this$props.data,
          total = _this$props.total,
          schemaLoading = _this$props.schemaLoading,
          keyField = _this$props.keyField,
          colHide = _this$props.colHide,
          selectable = _this$props.selectable,
          isExportable = _this$props.isExportable,
          enableInfiniteScroll = _this$props.enableInfiniteScroll,
          globalSearch = _this$props.globalSearch,
          rowSelectForExport = _this$props.rowSelectForExport,
          noDataIndicator = _this$props.noDataIndicator;

      if (!schemaLoading) {
        return React.createElement("div", {
          className: "shadow-container"
        }, React.createElement("div", {
          className: "row"
        }, React.createElement("div", {
          className: "col-md-6 dynamic-table-header"
        }, React.createElement("h3", null, " ", name, " "), React.createElement("button", {
          onClick: function onClick() {
            if (_this3.tableComponent) {
              _this3.tableComponent.refreshTable();
            }
          }
        }, React.createElement("span", {
          className: "glyphicon glyphicon-refresh"
        })))), React.createElement(_index.default, {
          assignRef: function assignRef(tableComponent) {
            _this3.tableComponent = tableComponent;
          },
          keyField: keyField,
          data: data,
          remote: !clientRendering,
          enableInfiniteScroll: enableInfiniteScroll && !clientRendering,
          columns: this.columns,
          loading: loading,
          length: this.props.length,
          total: total,
          enableColumnHide: colHide,
          selectable: selectable,
          isExportable: isExportable,
          rowSelectForExport: rowSelectForExport,
          noDataIndication: noDataIndicator,
          enableGlobalSearch: globalSearch,
          onUpdate: function onUpdate(nextState) {
            var currentPage = nextState.currentPage,
                length = nextState.length,
                filters = nextState.filters,
                sortField = nextState.sortField,
                sortOrder = nextState.sortOrder,
                callback = nextState.callback,
                retainData = nextState.retainData;
            var resource = _this3.props.resource;

            _this3.props.fetchDynamicList(resource, length, currentPage, filters, sortField, sortOrder, retainData, callback);
          }
        }));
      }

      return React.createElement("div", null);
    }
  }]);

  return DynamicTableRenderer;
}(React.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.dynamicTable.data.data,
    loading: state.dynamicTable.data.loading,
    total: state.dynamicTable.data.total,
    clientRendering: state.dynamicTable.meta.clientRendering,
    colHide: state.dynamicTable.meta.colHide,
    columns: state.dynamicTable.meta.cols,
    enableInfiniteScroll: state.dynamicTable.meta.enableInfiniteScroll,
    globalSearch: state.dynamicTable.meta.globalSearch,
    isAutoRefresh: state.dynamicTable.meta.isAutoRefresh,
    isExportable: state.dynamicTable.meta.isExportable,
    keyField: state.dynamicTable.meta.keyField,
    length: state.dynamicTable.meta.length,
    name: state.dynamicTable.meta.name,
    noDataIndicator: state.dynamicTable.meta.noDataIndicator,
    resource: state.dynamicTable.meta.loadResource,
    rowSelectForExport: state.dynamicTable.meta.rowSelectForExport,
    schemaLoading: state.dynamicTable.meta.loading,
    selectable: state.dynamicTable.meta.selectable
  };
};

var mapDispatchToProps = {
  fetchDynamicList: _dynamicTable.getTableData,
  fetchDynamicSchema: _dynamicTable.getTableMeta
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DynamicTableRenderer);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9EeW5hbWljVGFibGVSZW5kZXJlci9pbmRleC50c3giXSwibmFtZXMiOlsiRHluYW1pY1RhYmxlUmVuZGVyZXIiLCJ1bmRlZmluZWQiLCJwcm9wcyIsImZldGNoRHluYW1pY1NjaGVtYSIsImNvbHVtbnMiLCJpc0F1dG9SZWZyZXNoIiwiYXV0b1JlZnJlc2giLCJzZXRJbnRlcnZhbCIsInRhYmxlQ29tcG9uZW50IiwicmVmcmVzaFRhYmxlIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRpbmciLCJjbGllbnRSZW5kZXJpbmciLCJuYW1lIiwiZGF0YSIsInRvdGFsIiwic2NoZW1hTG9hZGluZyIsImtleUZpZWxkIiwiY29sSGlkZSIsInNlbGVjdGFibGUiLCJpc0V4cG9ydGFibGUiLCJlbmFibGVJbmZpbml0ZVNjcm9sbCIsImdsb2JhbFNlYXJjaCIsInJvd1NlbGVjdEZvckV4cG9ydCIsIm5vRGF0YUluZGljYXRvciIsImxlbmd0aCIsIm5leHRTdGF0ZSIsImN1cnJlbnRQYWdlIiwiZmlsdGVycyIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsImNhbGxiYWNrIiwicmV0YWluRGF0YSIsInJlc291cmNlIiwiZmV0Y2hEeW5hbWljTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkeW5hbWljVGFibGUiLCJtZXRhIiwiY29scyIsImxvYWRSZXNvdXJjZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImdldFRhYmxlRGF0YSIsImdldFRhYmxlTWV0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCTUEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFDMEJDLFM7O2tFQUNIQSxTOzs4REFDQyxFOzs7Ozs7O3dDQUVEO0FBQUE7O0FBQ3pCLFdBQUtDLEtBQUwsQ0FBV0Msa0JBQVgsQ0FBOEIsVUFBQ0MsT0FBRCxFQUFxQkMsYUFBckIsRUFBZ0Q7QUFDNUUsUUFBQSxNQUFJLENBQUNELE9BQUwsR0FBZSxrQ0FBaUJBLE9BQWpCLENBQWY7O0FBQ0EsWUFBSUMsYUFBSixFQUFtQjtBQUNqQixVQUFBLE1BQUksQ0FBQ0MsV0FBTCxHQUFtQkMsV0FBVyxDQUFDLFlBQU07QUFDbkMsWUFBQSxNQUFJLENBQUNDLGNBQUwsQ0FBb0JDLFlBQXBCO0FBQ0QsV0FGNkIsRUFFM0IsS0FGMkIsQ0FBOUI7QUFHRDtBQUNGLE9BUEQ7QUFRRDs7OzJDQUU2QjtBQUM1QixVQUFJLEtBQUtILFdBQVQsRUFBc0I7QUFDcEJJLFFBQUFBLGFBQWEsQ0FBQyxLQUFLSixXQUFOLENBQWI7QUFDRDtBQUNGOzs7NkJBRWU7QUFBQTs7QUFBQSx3QkFFOEUsS0FBS0osS0FGbkY7QUFBQSxVQUNOUyxPQURNLGVBQ05BLE9BRE07QUFBQSxVQUNHQyxlQURILGVBQ0dBLGVBREg7QUFBQSxVQUNvQkMsSUFEcEIsZUFDb0JBLElBRHBCO0FBQUEsVUFDMEJDLElBRDFCLGVBQzBCQSxJQUQxQjtBQUFBLFVBQ2dDQyxLQURoQyxlQUNnQ0EsS0FEaEM7QUFBQSxVQUN1Q0MsYUFEdkMsZUFDdUNBLGFBRHZDO0FBQUEsVUFDc0RDLFFBRHRELGVBQ3NEQSxRQUR0RDtBQUFBLFVBQ2dFQyxPQURoRSxlQUNnRUEsT0FEaEU7QUFBQSxVQUN5RUMsVUFEekUsZUFDeUVBLFVBRHpFO0FBQUEsVUFFWkMsWUFGWSxlQUVaQSxZQUZZO0FBQUEsVUFFRUMsb0JBRkYsZUFFRUEsb0JBRkY7QUFBQSxVQUV3QkMsWUFGeEIsZUFFd0JBLFlBRnhCO0FBQUEsVUFFc0NDLGtCQUZ0QyxlQUVzQ0Esa0JBRnRDO0FBQUEsVUFFMERDLGVBRjFELGVBRTBEQSxlQUYxRDs7QUFHZCxVQUFJLENBQUNSLGFBQUwsRUFBb0I7QUFDbEIsZUFDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDRSxxQ0FBTUgsSUFBTixNQURGLEVBRUU7QUFBUSxVQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNyQixnQkFBSSxNQUFJLENBQUNMLGNBQVQsRUFBeUI7QUFDdkIsY0FBQSxNQUFJLENBQUNBLGNBQUwsQ0FBb0JDLFlBQXBCO0FBQ0Q7QUFDRjtBQUpELFdBS0U7QUFBTSxVQUFBLFNBQVMsRUFBQztBQUFoQixVQUxGLENBRkYsQ0FERixDQURGLEVBYUUsb0JBQUMsY0FBRDtBQUNFLFVBQUEsU0FBUyxFQUFFLG1CQUFDRCxjQUFELEVBQStCO0FBQ3hDLFlBQUEsTUFBSSxDQUFDQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNELFdBSEg7QUFJRSxVQUFBLFFBQVEsRUFBRVMsUUFKWjtBQUtFLFVBQUEsSUFBSSxFQUFFSCxJQUxSO0FBTUUsVUFBQSxNQUFNLEVBQUUsQ0FBQ0YsZUFOWDtBQU9FLFVBQUEsb0JBQW9CLEVBQUVTLG9CQUFvQixJQUFJLENBQUNULGVBUGpEO0FBUUUsVUFBQSxPQUFPLEVBQUUsS0FBS1IsT0FSaEI7QUFTRSxVQUFBLE9BQU8sRUFBRU8sT0FUWDtBQVVFLFVBQUEsTUFBTSxFQUFFLEtBQUtULEtBQUwsQ0FBV3VCLE1BVnJCO0FBV0UsVUFBQSxLQUFLLEVBQUVWLEtBWFQ7QUFZRSxVQUFBLGdCQUFnQixFQUFFRyxPQVpwQjtBQWFFLFVBQUEsVUFBVSxFQUFFQyxVQWJkO0FBY0UsVUFBQSxZQUFZLEVBQUVDLFlBZGhCO0FBZUUsVUFBQSxrQkFBa0IsRUFBRUcsa0JBZnRCO0FBZ0JFLFVBQUEsZ0JBQWdCLEVBQUVDLGVBaEJwQjtBQWlCRSxVQUFBLGtCQUFrQixFQUFFRixZQWpCdEI7QUFrQkUsVUFBQSxRQUFRLEVBQUUsa0JBQUNJLFNBQUQsRUFBa0M7QUFBQSxnQkFDbENDLFdBRGtDLEdBQzJDRCxTQUQzQyxDQUNsQ0MsV0FEa0M7QUFBQSxnQkFDckJGLE1BRHFCLEdBQzJDQyxTQUQzQyxDQUNyQkQsTUFEcUI7QUFBQSxnQkFDYkcsT0FEYSxHQUMyQ0YsU0FEM0MsQ0FDYkUsT0FEYTtBQUFBLGdCQUNKQyxTQURJLEdBQzJDSCxTQUQzQyxDQUNKRyxTQURJO0FBQUEsZ0JBQ09DLFNBRFAsR0FDMkNKLFNBRDNDLENBQ09JLFNBRFA7QUFBQSxnQkFDa0JDLFFBRGxCLEdBQzJDTCxTQUQzQyxDQUNrQkssUUFEbEI7QUFBQSxnQkFDNEJDLFVBRDVCLEdBQzJDTixTQUQzQyxDQUM0Qk0sVUFENUI7QUFBQSxnQkFFbENDLFFBRmtDLEdBRXJCLE1BQUksQ0FBQy9CLEtBRmdCLENBRWxDK0IsUUFGa0M7O0FBRzFDLFlBQUEsTUFBSSxDQUFDL0IsS0FBTCxDQUFXZ0MsZ0JBQVgsQ0FBNEJELFFBQTVCLEVBQXNDUixNQUF0QyxFQUE4Q0UsV0FBOUMsRUFBMkRDLE9BQTNELEVBQW9FQyxTQUFwRSxFQUErRUMsU0FBL0UsRUFBMEZFLFVBQTFGLEVBQXNHRCxRQUF0RztBQUNEO0FBdEJILFVBYkYsQ0FERjtBQXdDRDs7QUFDRCxhQUFPLGdDQUFQO0FBQ0Q7Ozs7RUFwRWdDSSxLQUFLLENBQUNDLFM7O0FBdUV6QyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFvQjtBQUMxQ3hCLElBQUFBLElBQUksRUFBRXdCLEtBQUssQ0FBQ0MsWUFBTixDQUFtQnpCLElBQW5CLENBQXdCQSxJQURZO0FBRTFDSCxJQUFBQSxPQUFPLEVBQUUyQixLQUFLLENBQUNDLFlBQU4sQ0FBbUJ6QixJQUFuQixDQUF3QkgsT0FGUztBQUcxQ0ksSUFBQUEsS0FBSyxFQUFFdUIsS0FBSyxDQUFDQyxZQUFOLENBQW1CekIsSUFBbkIsQ0FBd0JDLEtBSFc7QUFLMUNILElBQUFBLGVBQWUsRUFBRTBCLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsSUFBbkIsQ0FBd0I1QixlQUxDO0FBTTFDTSxJQUFBQSxPQUFPLEVBQUVvQixLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLElBQW5CLENBQXdCdEIsT0FOUztBQU8xQ2QsSUFBQUEsT0FBTyxFQUFFa0MsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQixDQUF3QkMsSUFQUztBQVExQ3BCLElBQUFBLG9CQUFvQixFQUFFaUIsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQixDQUF3Qm5CLG9CQVJKO0FBUzFDQyxJQUFBQSxZQUFZLEVBQUVnQixLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLElBQW5CLENBQXdCbEIsWUFUSTtBQVUxQ2pCLElBQUFBLGFBQWEsRUFBRWlDLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsSUFBbkIsQ0FBd0JuQyxhQVZHO0FBVzFDZSxJQUFBQSxZQUFZLEVBQUVrQixLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLElBQW5CLENBQXdCcEIsWUFYSTtBQVkxQ0gsSUFBQUEsUUFBUSxFQUFFcUIsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQixDQUF3QnZCLFFBWlE7QUFhMUNRLElBQUFBLE1BQU0sRUFBRWEsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQixDQUF3QmYsTUFiVTtBQWMxQ1osSUFBQUEsSUFBSSxFQUFFeUIsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQixDQUF3QjNCLElBZFk7QUFlMUNXLElBQUFBLGVBQWUsRUFBRWMsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQixDQUF3QmhCLGVBZkM7QUFnQjFDUyxJQUFBQSxRQUFRLEVBQUVLLEtBQUssQ0FBQ0MsWUFBTixDQUFtQkMsSUFBbkIsQ0FBd0JFLFlBaEJRO0FBaUIxQ25CLElBQUFBLGtCQUFrQixFQUFFZSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJDLElBQW5CLENBQXdCakIsa0JBakJGO0FBa0IxQ1AsSUFBQUEsYUFBYSxFQUFFc0IsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQixDQUF3QjdCLE9BbEJHO0FBbUIxQ1EsSUFBQUEsVUFBVSxFQUFFbUIsS0FBSyxDQUFDQyxZQUFOLENBQW1CQyxJQUFuQixDQUF3QnJCO0FBbkJNLEdBQXBCO0FBQUEsQ0FBeEI7O0FBc0JBLElBQU13QixrQkFBa0IsR0FBSTtBQUMxQlQsRUFBQUEsZ0JBQWdCLEVBQUVVLDBCQURRO0FBRTFCekMsRUFBQUEsa0JBQWtCLEVBQUUwQztBQUZNLENBQTVCOztlQUtlLHlCQUFRUixlQUFSLEVBQXlCTSxrQkFBekIsRUFBNkMzQyxvQkFBN0MsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGdldFRhYmxlRGF0YSwgZ2V0VGFibGVNZXRhIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9keW5hbWljVGFibGUnO1xuaW1wb3J0IENvbHVtbiwgeyBJQ29sRGVmIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZS9Db2x1bW4nO1xuaW1wb3J0IFRhYmxlLCB7IElUYWJsZVVwZGF0ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZS9pbmRleCc7XG5pbXBvcnQgeyBJU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBjb25zdHJ1Y3RDb2x1bW5zIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uVXRpbCc7XG5cbmltcG9ydCAnLi9EeW5hbWljVGFibGVSZW5kZXJlci5jc3MnO1xuXG5pbnRlcmZhY2UgSUR5bmFtaWNUYWJsZVByb3BzIHtcbiAgLy8gVGFibGUgcHJvcHNcbiAgY29sdW1uczogSUNvbERlZltdO1xuICBlbmFibGVJbmZpbml0ZVNjcm9sbDogYm9vbGVhbjtcbiAgaXNFeHBvcnRhYmxlOiBib29sZWFuO1xuICBjb2xIaWRlOiBib29sZWFuO1xuICBrZXlGaWVsZDogc3RyaW5nO1xuICBnbG9iYWxTZWFyY2g6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgbm9EYXRhSW5kaWNhdG9yOiBzdHJpbmc7XG4gIHNlbGVjdGFibGU6IGJvb2xlYW47XG4gIHJvd1NlbGVjdEZvckV4cG9ydDogYm9vbGVhbjtcbiAgc2NoZW1hTG9hZGluZzogYm9vbGVhbjtcbiAgY2xpZW50UmVuZGVyaW5nOiBib29sZWFuO1xuICBpc0F1dG9SZWZyZXNoOiBib29sZWFuO1xuICByZXNvdXJjZTogc3RyaW5nO1xuICBsZW5ndGg6IG51bWJlcjtcblxuICAvLyBMaXN0IHByb3BzXG4gIGRhdGE6IG9iamVjdFtdO1xuICB0b3RhbDogbnVtYmVyO1xuICBsb2FkaW5nOiBib29sZWFuO1xuXG4gIC8vIEFjdGlvblxuICBmZXRjaER5bmFtaWNTY2hlbWE6IGFueTtcbiAgZmV0Y2hEeW5hbWljTGlzdDogYW55O1xufVxuXG5jbGFzcyBEeW5hbWljVGFibGVSZW5kZXJlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSb3V0ZUNvbXBvbmVudFByb3BzICYgSUR5bmFtaWNUYWJsZVByb3BzLCBvYmplY3Q+IHtcbiAgcHJpdmF0ZSB0YWJsZUNvbXBvbmVudDogYW55ID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGF1dG9SZWZyZXNoOiBhbnkgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgY29sdW1uczogQ29sdW1uW10gPSBbXTtcblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaER5bmFtaWNTY2hlbWEoKGNvbHVtbnM6IElDb2xEZWZbXSwgaXNBdXRvUmVmcmVzaDogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5jb2x1bW5zID0gY29uc3RydWN0Q29sdW1ucyhjb2x1bW5zKTtcbiAgICAgIGlmIChpc0F1dG9SZWZyZXNoKSB7XG4gICAgICAgIHRoaXMuYXV0b1JlZnJlc2ggPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy50YWJsZUNvbXBvbmVudC5yZWZyZXNoVGFibGUoKTtcbiAgICAgICAgfSwgMzAwMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmF1dG9SZWZyZXNoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1JlZnJlc2gpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBjbGllbnRSZW5kZXJpbmcsIG5hbWUsIGRhdGEsIHRvdGFsLCBzY2hlbWFMb2FkaW5nLCBrZXlGaWVsZCwgY29sSGlkZSwgc2VsZWN0YWJsZSxcbiAgICAgIGlzRXhwb3J0YWJsZSwgZW5hYmxlSW5maW5pdGVTY3JvbGwsIGdsb2JhbFNlYXJjaCwgcm93U2VsZWN0Rm9yRXhwb3J0LCBub0RhdGFJbmRpY2F0b3IgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFzY2hlbWFMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBkeW5hbWljLXRhYmxlLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDM+IHtuYW1lfSA8L2gzPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUNvbXBvbmVudC5yZWZyZXNoVGFibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICBhc3NpZ25SZWY9eyh0YWJsZUNvbXBvbmVudDogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudGFibGVDb21wb25lbnQgPSB0YWJsZUNvbXBvbmVudDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBrZXlGaWVsZD17a2V5RmllbGR9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgcmVtb3RlPXshY2xpZW50UmVuZGVyaW5nfVxuICAgICAgICAgICAgZW5hYmxlSW5maW5pdGVTY3JvbGw9e2VuYWJsZUluZmluaXRlU2Nyb2xsICYmICFjbGllbnRSZW5kZXJpbmd9XG4gICAgICAgICAgICBjb2x1bW5zPXt0aGlzLmNvbHVtbnN9XG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgbGVuZ3RoPXt0aGlzLnByb3BzLmxlbmd0aH1cbiAgICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICAgIGVuYWJsZUNvbHVtbkhpZGU9e2NvbEhpZGV9XG4gICAgICAgICAgICBzZWxlY3RhYmxlPXtzZWxlY3RhYmxlfVxuICAgICAgICAgICAgaXNFeHBvcnRhYmxlPXtpc0V4cG9ydGFibGV9XG4gICAgICAgICAgICByb3dTZWxlY3RGb3JFeHBvcnQ9e3Jvd1NlbGVjdEZvckV4cG9ydH1cbiAgICAgICAgICAgIG5vRGF0YUluZGljYXRpb249e25vRGF0YUluZGljYXRvcn1cbiAgICAgICAgICAgIGVuYWJsZUdsb2JhbFNlYXJjaD17Z2xvYmFsU2VhcmNofVxuICAgICAgICAgICAgb25VcGRhdGU9eyhuZXh0U3RhdGU6IElUYWJsZVVwZGF0ZVByb3BzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgY3VycmVudFBhZ2UsIGxlbmd0aCwgZmlsdGVycywgc29ydEZpZWxkLCBzb3J0T3JkZXIsIGNhbGxiYWNrLCByZXRhaW5EYXRhIH0gPSBuZXh0U3RhdGU7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcmVzb3VyY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hEeW5hbWljTGlzdChyZXNvdXJjZSwgbGVuZ3RoLCBjdXJyZW50UGFnZSwgZmlsdGVycywgc29ydEZpZWxkLCBzb3J0T3JkZXIsIHJldGFpbkRhdGEsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdi8+O1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0YXRlKSA9PiAoe1xuICBkYXRhOiBzdGF0ZS5keW5hbWljVGFibGUuZGF0YS5kYXRhLFxuICBsb2FkaW5nOiBzdGF0ZS5keW5hbWljVGFibGUuZGF0YS5sb2FkaW5nLFxuICB0b3RhbDogc3RhdGUuZHluYW1pY1RhYmxlLmRhdGEudG90YWwsXG5cbiAgY2xpZW50UmVuZGVyaW5nOiBzdGF0ZS5keW5hbWljVGFibGUubWV0YS5jbGllbnRSZW5kZXJpbmcsXG4gIGNvbEhpZGU6IHN0YXRlLmR5bmFtaWNUYWJsZS5tZXRhLmNvbEhpZGUsXG4gIGNvbHVtbnM6IHN0YXRlLmR5bmFtaWNUYWJsZS5tZXRhLmNvbHMsXG4gIGVuYWJsZUluZmluaXRlU2Nyb2xsOiBzdGF0ZS5keW5hbWljVGFibGUubWV0YS5lbmFibGVJbmZpbml0ZVNjcm9sbCxcbiAgZ2xvYmFsU2VhcmNoOiBzdGF0ZS5keW5hbWljVGFibGUubWV0YS5nbG9iYWxTZWFyY2gsXG4gIGlzQXV0b1JlZnJlc2g6IHN0YXRlLmR5bmFtaWNUYWJsZS5tZXRhLmlzQXV0b1JlZnJlc2gsXG4gIGlzRXhwb3J0YWJsZTogc3RhdGUuZHluYW1pY1RhYmxlLm1ldGEuaXNFeHBvcnRhYmxlLFxuICBrZXlGaWVsZDogc3RhdGUuZHluYW1pY1RhYmxlLm1ldGEua2V5RmllbGQsXG4gIGxlbmd0aDogc3RhdGUuZHluYW1pY1RhYmxlLm1ldGEubGVuZ3RoLFxuICBuYW1lOiBzdGF0ZS5keW5hbWljVGFibGUubWV0YS5uYW1lLFxuICBub0RhdGFJbmRpY2F0b3I6IHN0YXRlLmR5bmFtaWNUYWJsZS5tZXRhLm5vRGF0YUluZGljYXRvcixcbiAgcmVzb3VyY2U6IHN0YXRlLmR5bmFtaWNUYWJsZS5tZXRhLmxvYWRSZXNvdXJjZSxcbiAgcm93U2VsZWN0Rm9yRXhwb3J0OiBzdGF0ZS5keW5hbWljVGFibGUubWV0YS5yb3dTZWxlY3RGb3JFeHBvcnQsXG4gIHNjaGVtYUxvYWRpbmc6IHN0YXRlLmR5bmFtaWNUYWJsZS5tZXRhLmxvYWRpbmcsXG4gIHNlbGVjdGFibGU6IHN0YXRlLmR5bmFtaWNUYWJsZS5tZXRhLnNlbGVjdGFibGVcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoe1xuICBmZXRjaER5bmFtaWNMaXN0OiBnZXRUYWJsZURhdGEsXG4gIGZldGNoRHluYW1pY1NjaGVtYTogZ2V0VGFibGVNZXRhXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRHluYW1pY1RhYmxlUmVuZGVyZXIpO1xuIl19