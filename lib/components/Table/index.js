"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

require("react-bootstrap-table-next/dist/react-bootstrap-table2.min.css");

require("react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css");

require("react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css");

require("./Table.css");

var _reactBootstrap = require("react-bootstrap");

var _reactBootstrapTableNext = _interopRequireDefault(require("react-bootstrap-table-next"));

var _reactBootstrapTable2Filter = _interopRequireDefault(require("react-bootstrap-table2-filter"));

var _reactBootstrapTable2Paginator = _interopRequireDefault(require("react-bootstrap-table2-paginator"));

var _reactBootstrapTable2Toolkit = _interopRequireWildcard(require("react-bootstrap-table2-toolkit"));

var _tableConstants = require("../../constants/tableConstants");

var _commonUtil = require("../../utils/commonUtil");

var _Column = _interopRequireDefault(require("./Column"));

var _ExportCSVButton = _interopRequireDefault(require("./ExportCSVButton"));

var _InfiniteScrollTable = _interopRequireDefault(require("./InfiniteScrollTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(_props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "renderTable", function (data) {
      var _this$props = _this.props,
          keyField = _this$props.keyField,
          loading = _this$props.loading,
          total = _this$props.total,
          onRowClick = _this$props.onRowClick,
          remote = _this$props.remote,
          isExportable = _this$props.isExportable,
          enableColumnHide = _this$props.enableColumnHide,
          enableGlobalSearch = _this$props.enableGlobalSearch,
          selectable = _this$props.selectable,
          rowSelectForExport = _this$props.rowSelectForExport,
          enableInfiniteScroll = _this$props.enableInfiniteScroll,
          expandRow = _this$props.expandRow;
      var _this$state = _this.state,
          length = _this$state.length,
          currentPage = _this$state.currentPage,
          columns = _this$state.columns,
          searchableColumns = _this$state.searchableColumns;
      var SearchBar = _reactBootstrapTable2Toolkit.Search.SearchBar;
      var selectionProps = selectable ? {
        selectRow: {
          clickToSelect: true,
          mode: 'checkbox',
          onSelect: _this.handleOnSelect,
          onSelectAll: _this.handleOnSelectAll,
          selected: _this.state.selected
        }
      } : {};
      return React.createElement(_reactBootstrapTable2Toolkit.default, {
        keyField: keyField,
        data: data,
        columns: columns,
        search: enableGlobalSearch || false,
        exportCSV: isExportable ? {
          onlyExportSelection: selectable && rowSelectForExport || false
        } : false
      }, function (props) {
        return React.createElement(React.Fragment, null, React.createElement("div", {
          className: "row table-toolbar"
        }, React.createElement("div", {
          className: "col-md-6"
        }, enableGlobalSearch && React.createElement(React.Fragment, null, React.createElement(SearchBar, _extends({}, props.searchProps, {
          className: "globalSearch",
          delay: 1000,
          placeholder: "Search Something!!!"
        })), React.createElement(_reactBootstrap.DropdownButton, {
          title: "Searchable Columns",
          key: "column-search",
          id: "column-search",
          open: _this.state.searchColumnToggle // @ts-ignore
          ,
          onToggle: function onToggle(open, event, source) {
            if (source.source !== 'select') {
              _this.setState({
                searchColumnToggle: open
              });
            }
          } // @ts-ignore
          ,
          onSelect: function onSelect(eventKey, event) {
            _this.onColumnSearchToggle(searchableColumns.find(function (searchColumn) {
              return searchColumn === eventKey;
            }) !== undefined, eventKey);
          }
        }, columns.filter(function (col) {
          return col.type === 'TEXT';
        }).map(function (column) {
          return React.createElement(_reactBootstrap.MenuItem, {
            key: "".concat(column.searchKey, "-search"),
            eventKey: column.searchKey
          }, React.createElement(_reactBootstrap.Checkbox, {
            checked: searchableColumns.find(function (searchColumn) {
              return searchColumn === column.searchKey;
            }) !== undefined,
            onChange: function onChange(e) {
              return e.preventDefault();
            }
          }, column.text));
        })))), React.createElement("div", {
          className: "col-md-6 table-options"
        }, selectable && React.createElement("span", {
          className: "selection-renderer"
        }, "Selected ".concat(_this.state.selected.length, " of ").concat(_this.props.total)), enableColumnHide && React.createElement(_reactBootstrap.DropdownButton, {
          title: "Columns",
          key: "column-toggle",
          id: "column-toggle",
          open: _this.state.columnToggleOpen // @ts-ignore
          ,
          onToggle: function onToggle(open, event, source) {
            if (source.source !== 'select') {
              _this.setState({
                columnToggleOpen: open
              });
            }
          } // @ts-ignore
          ,
          onSelect: _this.onColumnHide
        }, columns.map(function (column, index) {
          return React.createElement(_reactBootstrap.MenuItem, {
            key: column.text,
            eventKey: column.text
          }, React.createElement(_reactBootstrap.Checkbox, {
            checked: !column.hidden
          }, column.text));
        })), isExportable && React.createElement(_ExportCSVButton.default, _extends({}, props.csvProps, {
          onFetchAll: _this.onFetchAllForExport,
          remote: remote || false
        }), "Export CSV!!"))), React.createElement(Table.ScrollDiv, {
          hasMore: currentPage * length < total,
          enabled: enableInfiniteScroll || false,
          onScroll: function onScroll() {
            _this.setState({
              currentPage: _this.state.currentPage + 1
            }, function () {
              return _this.refreshTable(true);
            });
          },
          content: React.createElement(_reactBootstrapTableNext.default, _extends({}, props.baseProps, {
            expandRow: expandRow,
            remote: remote || false,
            loading: loading,
            onTableChange: _this.onTableChange,
            headerClasses: "table-header",
            rowClasses: "table-rows ".concat(selectable ? 'selectable' : ''),
            noDataIndication: _this.customNoDataIndication,
            defaultSorted: [{
              dataField: keyField,
              order: 'asc'
            }],
            pagination: !enableInfiniteScroll ? (0, _reactBootstrapTable2Paginator.default)({
              firstPageTitle: 'Go to first',
              hidePageListOnlyOnePage: true,
              hideSizePerPage: total === 0,
              lastPageTitle: 'Go to last',
              nextPageTitle: 'Go to next',
              page: currentPage,
              paginationTotalRenderer: _this.customPaginationTotal,
              prePageTitle: 'Go to previous',
              showTotal: total !== 0,
              sizePerPage: length,
              totalSize: total
            }) : undefined,
            rowEvents: {
              onClick: function onClick(e, row, rowIndex) {
                if (onRowClick) {
                  onRowClick(row);
                }
              }
            },
            filter: (0, _reactBootstrapTable2Filter.default)()
          }, selectionProps))
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "refreshTable", function () {
      var retainData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$state2 = _this.state,
          currentPage = _this$state2.currentPage,
          length = _this$state2.length,
          filters = _this$state2.filters,
          sortField = _this$state2.sortField,
          sortOrder = _this$state2.sortOrder;
      var enableInfiniteScroll = _this.props.enableInfiniteScroll;

      _this.props.onUpdate({
        currentPage: !retainData && enableInfiniteScroll ? 0 : currentPage,
        filters: filters,
        length: !retainData && enableInfiniteScroll ? currentPage * length : length,
        retainData: retainData,
        sortField: sortField,
        sortOrder: sortOrder
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onColumnHide", function (eventKey, event) {
      var isSelected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (isSelected) {
        event.preventDefault();
      } // hide column on DOM and export


      _this.setState({
        columns: _this.state.columns.map(function (column) {
          if (column.text === eventKey) {
            return Object.assign({}, column, {
              csvExport: column.hidden,
              hidden: !column.hidden
            });
          }

          return column;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onColumnSearchToggle", function (checked, searchKey) {
      _this.setState({
        searchableColumns: checked ? _this.state.searchableColumns.filter(function (searchableColumn) {
          return searchableColumn !== searchKey;
        }) : [].concat(_toConsumableArray(_this.state.searchableColumns), [searchKey])
      }, function () {
        if (_this.state.searchText && _this.state.searchText !== '') {
          _this.setState({
            filters: _this.state.searchableColumns.map(function (column) {
              return "".concat(column, "[$search]=").concat(_this.state.searchText);
            }).join('&')
          }, _this.refreshTable);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTableChange", function (type, newState) {
      var searchText = newState.searchText,
          filters = newState.filters; // Filters formed by column filter options

      var overriddenFilters = filters ? Object.keys(filters).map(function (filter) {
        if (filters[filter].filterType === _Column.default.COLUMN_TYPES.TEXT) {
          return "".concat(filter, "[$search]=").concat(searchText && searchText !== '' ? searchText : filters[filter].filterVal);
        } else if (filters[filter].filterType === _Column.default.COLUMN_TYPES.NUMBER) {
          return "".concat(filter).concat((0, _commonUtil.comparatorsForAPI)(filters[filter].filterVal.comparator)).concat(filters[filter].filterVal.number);
        } else if (filters[filter].filterType === _Column.default.COLUMN_TYPES.DATE) {
          return "".concat(filter).concat((0, _commonUtil.comparatorsForAPI)(filters[filter].filterVal.comparator)).concat(filters[filter].filterVal.date);
        } else if (filters[filter].filterType === _Column.default.COLUMN_TYPES.SELECT) {
          return "".concat(filter, "=").concat(filters[filter].filterVal);
        } else {
          return null;
        }
      }).join('&') : ''; // Filters formed by global search

      if (searchText && searchText !== '') {
        overriddenFilters = _this.state.searchableColumns.filter(function (searchColumn) {
          return filters ? filters[searchColumn] === undefined : true;
        }).map(function (column) {
          return "".concat(column, "[$search]=").concat(searchText);
        }).join('&');
      }

      _this.props.onUpdate({
        currentPage: _this.props.enableInfiniteScroll ? 0 : newState.page,
        filters: overriddenFilters,
        length: _this.props.enableInfiniteScroll ? _this.state.currentPage * _this.state.length : newState.sizePerPage,
        sortField: newState.sortField,
        sortOrder: newState.sortOrder === _tableConstants.TABLE_SORT.ASC ? 1 : -1
      });

      _this.setState({
        currentPage: _this.props.enableInfiniteScroll ? _this.state.currentPage : newState.page,
        filters: overriddenFilters,
        length: _this.props.enableInfiniteScroll ? _this.state.length : newState.sizePerPage,
        searchText: newState.searchText || '',
        sortField: newState.sortField,
        sortOrder: newState.sortOrder === _tableConstants.TABLE_SORT.ASC ? 1 : -1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFetchAllForExport", function (callback) {
      var _this$state3 = _this.state,
          filters = _this$state3.filters,
          sortField = _this$state3.sortField,
          sortOrder = _this$state3.sortOrder;

      _this.props.onUpdate({
        currentPage: 0,
        length: 0,
        filters: filters,
        sortField: sortField,
        sortOrder: sortOrder,
        callback: callback
      });
    });

    _defineProperty(_assertThisInitialized(_this), "customPaginationTotal", function (from, to, size) {
      return React.createElement("span", {
        className: "react-bootstrap-table-pagination-total"
      }, "\xA0Showing rows ", from, " to\xA0", to, " of\xA0", size);
    });

    _defineProperty(_assertThisInitialized(_this), "customNoDataIndication", function () {
      return React.createElement("div", {
        className: "noDataIndication"
      }, React.createElement("div", null, " ", !_this.props.loading ? _this.props.noDataIndication || 'No Data' : '', " "));
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnSelect", function (row, isSelect) {
      if (isSelect) {
        _this.setState({
          selected: [].concat(_toConsumableArray(_this.state.selected), [row[_this.props.keyField]])
        });
      } else {
        _this.setState({
          selected: _this.state.selected.filter(function (x) {
            return x !== row[_this.props.keyField];
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnSelectAll", function (isSelect, rows) {
      if (isSelect) {
        // Overriding current selection to select all rows by default
        var _this$state4 = _this.state,
            filters = _this$state4.filters,
            sortField = _this$state4.sortField,
            sortOrder = _this$state4.sortOrder;

        _this.props.onUpdate({
          callback: function callback(response) {
            _this.setState({
              selected: response.data.map(function (datum) {
                return datum[_this.props.keyField];
              })
            });
          },
          currentPage: 0,
          filters: filters,
          length: 0,
          sortField: sortField,
          sortOrder: sortOrder
        });
      } else {
        _this.setState({
          selected: []
        });
      }
    });

    _this.state = {
      columnToggleOpen: false,
      columns: _props.columns.map(function (column) {
        return column.convertToBootstrapTableColumn();
      }),
      currentPage: 1,
      filters: '',
      keyField: _props.keyField,
      length: _props.length,
      searchColumnToggle: false,
      searchText: '',
      searchableColumns: _props.columns.filter(function (col) {
        return col.type === 'TEXT';
      }).map(function (col) {
        return col.getKey();
      }),
      selected: [],
      sortField: _props.keyField,
      sortOrder: 1,
      data: []
    };

    if (_this.props.assignRef) {
      _this.props.assignRef(_assertThisInitialized(_this));
    }

    return _this;
  }

  _createClass(Table, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.data !== this.props.data) {
        this.setState({
          data: props.data
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          total = _this$props2.total;
      var data = this.state.data; // @ts-ignore

      return React.createElement("div", {
        className: "customTableContainer ".concat(loading ? 'loading' : '', " ").concat(!loading && total === 0 ? 'noData' : '')
      }, data.length === 0 && this.renderTable([]), data.length > 0 && this.renderTable(data));
    }
    /**
     * Refresh the table contents with current state
     * @param retainData : TRUE only when refresh table called for page change
     * (Check onScroll() method of ScrollDiv)
     */

  }]);

  return Table;
}(React.Component);

exports.default = Table;

_defineProperty(Table, "ScrollDiv", (0, _InfiniteScrollTable.default)());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJUYWJsZSIsInByb3BzIiwiZGF0YSIsImtleUZpZWxkIiwibG9hZGluZyIsInRvdGFsIiwib25Sb3dDbGljayIsInJlbW90ZSIsImlzRXhwb3J0YWJsZSIsImVuYWJsZUNvbHVtbkhpZGUiLCJlbmFibGVHbG9iYWxTZWFyY2giLCJzZWxlY3RhYmxlIiwicm93U2VsZWN0Rm9yRXhwb3J0IiwiZW5hYmxlSW5maW5pdGVTY3JvbGwiLCJleHBhbmRSb3ciLCJzdGF0ZSIsImxlbmd0aCIsImN1cnJlbnRQYWdlIiwiY29sdW1ucyIsInNlYXJjaGFibGVDb2x1bW5zIiwiU2VhcmNoQmFyIiwiU2VhcmNoIiwic2VsZWN0aW9uUHJvcHMiLCJzZWxlY3RSb3ciLCJjbGlja1RvU2VsZWN0IiwibW9kZSIsIm9uU2VsZWN0IiwiaGFuZGxlT25TZWxlY3QiLCJvblNlbGVjdEFsbCIsImhhbmRsZU9uU2VsZWN0QWxsIiwic2VsZWN0ZWQiLCJvbmx5RXhwb3J0U2VsZWN0aW9uIiwic2VhcmNoUHJvcHMiLCJzZWFyY2hDb2x1bW5Ub2dnbGUiLCJvcGVuIiwiZXZlbnQiLCJzb3VyY2UiLCJzZXRTdGF0ZSIsImV2ZW50S2V5Iiwib25Db2x1bW5TZWFyY2hUb2dnbGUiLCJmaW5kIiwic2VhcmNoQ29sdW1uIiwidW5kZWZpbmVkIiwiZmlsdGVyIiwiY29sIiwidHlwZSIsIm1hcCIsImNvbHVtbiIsInNlYXJjaEtleSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjb2x1bW5Ub2dnbGVPcGVuIiwib25Db2x1bW5IaWRlIiwiaW5kZXgiLCJoaWRkZW4iLCJjc3ZQcm9wcyIsIm9uRmV0Y2hBbGxGb3JFeHBvcnQiLCJyZWZyZXNoVGFibGUiLCJiYXNlUHJvcHMiLCJvblRhYmxlQ2hhbmdlIiwiY3VzdG9tTm9EYXRhSW5kaWNhdGlvbiIsImRhdGFGaWVsZCIsIm9yZGVyIiwiZmlyc3RQYWdlVGl0bGUiLCJoaWRlUGFnZUxpc3RPbmx5T25lUGFnZSIsImhpZGVTaXplUGVyUGFnZSIsImxhc3RQYWdlVGl0bGUiLCJuZXh0UGFnZVRpdGxlIiwicGFnZSIsInBhZ2luYXRpb25Ub3RhbFJlbmRlcmVyIiwiY3VzdG9tUGFnaW5hdGlvblRvdGFsIiwicHJlUGFnZVRpdGxlIiwic2hvd1RvdGFsIiwic2l6ZVBlclBhZ2UiLCJ0b3RhbFNpemUiLCJvbkNsaWNrIiwicm93Iiwicm93SW5kZXgiLCJyZXRhaW5EYXRhIiwiZmlsdGVycyIsInNvcnRGaWVsZCIsInNvcnRPcmRlciIsIm9uVXBkYXRlIiwiaXNTZWxlY3RlZCIsIk9iamVjdCIsImFzc2lnbiIsImNzdkV4cG9ydCIsImNoZWNrZWQiLCJzZWFyY2hhYmxlQ29sdW1uIiwic2VhcmNoVGV4dCIsImpvaW4iLCJuZXdTdGF0ZSIsIm92ZXJyaWRkZW5GaWx0ZXJzIiwia2V5cyIsImZpbHRlclR5cGUiLCJDb2x1bW4iLCJDT0xVTU5fVFlQRVMiLCJURVhUIiwiZmlsdGVyVmFsIiwiTlVNQkVSIiwiY29tcGFyYXRvciIsIm51bWJlciIsIkRBVEUiLCJkYXRlIiwiU0VMRUNUIiwiVEFCTEVfU09SVCIsIkFTQyIsImNhbGxiYWNrIiwiZnJvbSIsInRvIiwic2l6ZSIsIm5vRGF0YUluZGljYXRpb24iLCJpc1NlbGVjdCIsIngiLCJyb3dzIiwicmVzcG9uc2UiLCJkYXR1bSIsImNvbnZlcnRUb0Jvb3RzdHJhcFRhYmxlQ29sdW1uIiwiZ2V0S2V5IiwiYXNzaWduUmVmIiwicmVuZGVyVGFibGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1RnFCQSxLOzs7OztBQUduQixpQkFBWUMsTUFBWixFQUFnQztBQUFB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RSxPQUFPLEdBQUcsU0FBSCxHQUFlLEVBQWhELGNBQXNELENBQUNBLE9BQUQsSUFBWUMsS0FBSyxLQUFLLENBQXRCLEdBQTBCLFFBQTFCLEdBQXFDLEVBQTNGO0FBQWQsU0FDR0gsSUFBSSxDQUFDYyxNQUFMLEtBQWdCLENBQWhCLElBQXFCLEtBQUt5RyxXQUFMLENBQWlCLEVBQWpCLENBRHhCLEVBRUd2SCxJQUFJLENBQUNjLE1BQUwsR0FBYyxDQUFkLElBQW1CLEtBQUt5RyxXQUFMLENBQWlCdkgsSUFBakIsQ0FGdEIsQ0FERjtBQU1EO0FBRUQ7Ozs7Ozs7OztFQWhNaUN3SCxLQUFLLENBQUNDLFM7Ozs7Z0JBQXBCM0gsSyxlQUNRLG1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJ3JlYWN0LWJvb3RzdHJhcC10YWJsZS1uZXh0L2Rpc3QvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi5taW4uY3NzJztcbmltcG9ydCAncmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1maWx0ZXIvZGlzdC9yZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlci5taW4uY3NzJztcbmltcG9ydCAncmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3IvZGlzdC9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci5taW4uY3NzJztcbmltcG9ydCAnLi9UYWJsZS5jc3MnO1xuXG5pbXBvcnQgeyBDaGVja2JveCwgRHJvcGRvd25CdXR0b24sIE1lbnVJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBCb290c3RyYXBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAtdGFibGUtbmV4dCc7XG5pbXBvcnQgRmlsdGVyRmFjdG9yeSBmcm9tICdyZWFjdC1ib290c3RyYXAtdGFibGUyLWZpbHRlcic7XG5pbXBvcnQgUGFnaW5hdGlvbkZhY3RvcnkgZnJvbSAncmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3InO1xuaW1wb3J0IFRvb2xraXRQcm92aWRlciwgeyBTZWFyY2ggfSBmcm9tICdyZWFjdC1ib290c3RyYXAtdGFibGUyLXRvb2xraXQnO1xuaW1wb3J0IHsgVEFCTEVfU09SVCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy90YWJsZUNvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21wYXJhdG9yc0ZvckFQSSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vblV0aWwnO1xuaW1wb3J0IENvbHVtbiwgeyBJQm9vdHN0cmFwQ29sdW1uIH0gZnJvbSAnLi9Db2x1bW4nO1xuaW1wb3J0IEV4cG9ydENTVkJ1dHRvbiBmcm9tICcuL0V4cG9ydENTVkJ1dHRvbic7XG5pbXBvcnQgd2l0aEluZmluaXRlU2Nyb2xsIGZyb20gJy4vSW5maW5pdGVTY3JvbGxUYWJsZSc7XG5cbi8qKlxuICogVGFibGUgY29tcG9uZW50IHByb3BzXG4gKi9cbmludGVyZmFjZSBJVGFibGVQcm9wcyB7XG4gIC8vIE1hbmRhdG9yeSBwcm9wc1xuICBrZXlGaWVsZDogc3RyaW5nLFxuICBkYXRhOiBvYmplY3RbXSxcbiAgY29sdW1uczogQ29sdW1uW10sXG4gIGN1cnJlbnRQYWdlPzogbnVtYmVyLFxuICBsb2FkaW5nOiBib29sZWFuLFxuICBsZW5ndGg6IG51bWJlcixcbiAgdG90YWw6IG51bWJlcixcbiAgb25VcGRhdGU6IGFueSxcblxuICAvLyBPcHRpb25hbCBwcm9wc1xuICBhc3NpZ25SZWY/OiBhbnksXG4gIGV4cGFuZGFibGU/OiBib29sZWFuLFxuICBleHBhbmRSb3c/OiB7XG4gICAgcmVuZGVyZXI/OiAocm93OiBhbnkpID0+IHt9LFxuICAgIHNob3dFeHBhbmRDb2x1bW4/OiBib29sZWFuXG4gIH0sXG4gIG9uUm93Q2xpY2s/OiBhbnksICAvLyBQcm92aWRlIGNhbGxiYWNrIHRvIGVuYWJsZSByb3cgY2xpY2sgYWN0aW9uXG4gIG5vRGF0YUluZGljYXRpb24/OiBhbnksIC8vIEN1c3RvbWl6ZSBubyBkYXRhIGxhYmVsXG4gIGlzRXhwb3J0YWJsZT86IGJvb2xlYW4sIC8vIFNwZWNpZnkgaWYgRXhwb3J0IG9wdGlvbiBjYW4gYmUgZ2l2ZW5cbiAgc2VsZWN0YWJsZT86IGJvb2xlYW4sIC8vIFNwZWNpZnkgaWYgcm93IHNlbGVjdGlvbiBzaG91bGQgYmUgZW5hYmxlZCBhbmQgcGFzc2VkIG9uIHVwZGF0ZVxuICByb3dTZWxlY3RGb3JFeHBvcnQ/OiBib29sZWFuLCAvLyBTcGVjaWZ5IGlmIHJvdyBzZWxlY3Rpb24gc2hvdWxkIGJlIGVuYWJsZWQgZm9yIGV4cG9ydFxuICBlbmFibGVDb2x1bW5IaWRlPzogYm9vbGVhbiwgLy8gU3BlY2lmeSBpZiBjb2x1bW4gaGlkZS9zaG93IGRyb3Bkb3duIHNob3VsZCBiZSBwcm92aWRlZFxuICBlbmFibGVHbG9iYWxTZWFyY2g/OiBib29sZWFuLCAvLyBTcGVjaWZ5IGlmIGdsb2JhbCBzZWFyY2ggY2FuIGJlIGVuYWJsZWRcbiAgZW5hYmxlSW5maW5pdGVTY3JvbGw/OiBib29sZWFuLCAvLyBFbmFibGUgaW5maW5pdGUgc2Nyb2xsIGluc3RlYWQgb2YgcGFnaW5hdGlvblxuICByZW1vdGU/OiBib29sZWFuIC8vIHRydWUgLT4gdG8gZW5hYmxlIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xufVxuXG4vKipcbiAqIFRhYmxlIGNvbXBvbmVudCBzdGF0ZVxuICovXG5pbnRlcmZhY2UgSVRhYmxlQ29udGV4dCB7XG4gIGNvbHVtblRvZ2dsZU9wZW46IGJvb2xlYW4sXG4gIHNlYXJjaENvbHVtblRvZ2dsZTogYm9vbGVhbixcbiAgc2VhcmNoVGV4dDogc3RyaW5nLFxuICBzZWFyY2hhYmxlQ29sdW1uczogc3RyaW5nW10sXG4gIGNvbHVtbnM6IElCb290c3RyYXBDb2x1bW5bXSxcbiAga2V5RmllbGQ6IHN0cmluZyxcbiAgY3VycmVudFBhZ2U6IG51bWJlcixcbiAgbGVuZ3RoOiBudW1iZXIsXG4gIHNvcnRGaWVsZDogc3RyaW5nO1xuICBzb3J0T3JkZXI6IG51bWJlcjtcbiAgZmlsdGVyczogc3RyaW5nO1xuICBzZWxlY3RlZDogc3RyaW5nW107XG4gIGRhdGE6IG9iamVjdFtdXG59XG5cbi8qKlxuICogU2hhcGUgb2Ygb2JqZWN0IGF2YWlsYWJsZSBvbiB0YWJsZSByZWZyZXNoIChDaGVjayBmb3Igb25UYWJsZUNoYW5nZSgpIGRlZmluaXRpb24pXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlU3RhdGUge1xuICBwYWdlOiBudW1iZXIsIC8vIG5ld2VzdCBQYWdlXG4gIHNpemVQZXJQYWdlOiBudW1iZXIsICAvLyBuZXdlc3Qgc2l6ZVBlclBhZ2VcbiAgc29ydEZpZWxkOiBzdHJpbmcsICAvLyBuZXdlc3Qgc29ydCBmaWVsZFxuICBzb3J0T3JkZXI6IHN0cmluZywgIC8vIG5ld2VzdCBzb3J0IG9yZGVyXG4gIGZpbHRlcnM/OiBvYmplY3QsIC8vIGFuIG9iamVjdCB3aGljaCBoYXZlIGN1cnJlbnQgZmlsdGVyIHN0YXR1cyBwZXIgY29sdW1uXG4gIHNlYXJjaFRleHQ/OiBzdHJpbmcgLy8gR2xvYmFsIHNlYXJjaCBzdHJpbmdcbn1cblxuLyoqXG4gKiBTaGFwZSBvZiBvYmplY3QgYXZhaWxhYmxlIHRvIHBhcmVudCBjb21wb25lbnQgb24gdGFibGUgcmVmcmVzaCAoQ2hlY2sgZm9yIG9uVXBkYXRlKCkgZGVmaW5pdGlvbilcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGFibGVVcGRhdGVQcm9wcyB7XG4gIGN1cnJlbnRQYWdlOiBudW1iZXIsIC8vIG5ld2VzdCBQYWdlXG4gIGxlbmd0aDogbnVtYmVyLCAgLy8gbmV3ZXN0IHNpemVQZXJQYWdlXG4gIHNvcnRGaWVsZDogc3RyaW5nLCAgLy8gbmV3ZXN0IHNvcnQgZmllbGRcbiAgc29ydE9yZGVyOiBudW1iZXIsICAvLyBuZXdlc3Qgc29ydCBvcmRlclxuICBmaWx0ZXJzOiBzdHJpbmcsIC8vIGFuIG9iamVjdCB3aGljaCBoYXZlIGN1cnJlbnQgZmlsdGVyIHN0YXR1cyBwZXIgY29sdW1uXG4gIHJldGFpbkRhdGE6IGJvb2xlYW47IC8vIFdoZXRoZXIgb3Igbm90IHRvIGFwcGVuZCBkYXRhIG9uIHBhZ2UgY2hhbmdlXG4gIGNhbGxiYWNrPzogYW55IC8vIENhbGxiYWNrIGZ1bmN0aW9uIDogdXNlZCBmb3IgZXhwb3J0XG59XG5cbi8qKlxuICogVG9vbGtpdCBwcm92aWRlciBwcm9wc1xuICovXG5pbnRlcmZhY2UgSVRvb2xraXRQcm9wcyB7XG4gIGJhc2VQcm9wczogb2JqZWN0LFxuICBjc3ZQcm9wczogb2JqZWN0LFxuICBzZWFyY2hQcm9wczogb2JqZWN0LFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJVGFibGVQcm9wcywgSVRhYmxlQ29udGV4dD4ge1xuICBwcml2YXRlIHN0YXRpYyBTY3JvbGxEaXYgPSB3aXRoSW5maW5pdGVTY3JvbGwoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVRhYmxlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbHVtblRvZ2dsZU9wZW46IGZhbHNlLFxuICAgICAgY29sdW1uczogcHJvcHMuY29sdW1ucy5tYXAoY29sdW1uID0+IGNvbHVtbi5jb252ZXJ0VG9Cb290c3RyYXBUYWJsZUNvbHVtbigpKSxcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgZmlsdGVyczogJycsXG4gICAgICBrZXlGaWVsZDogcHJvcHMua2V5RmllbGQsXG4gICAgICBsZW5ndGg6IHByb3BzLmxlbmd0aCxcbiAgICAgIHNlYXJjaENvbHVtblRvZ2dsZTogZmFsc2UsXG4gICAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICAgIHNlYXJjaGFibGVDb2x1bW5zOiBwcm9wcy5jb2x1bW5zXG4gICAgICAgIC5maWx0ZXIoY29sID0+IGNvbC50eXBlID09PSAnVEVYVCcpXG4gICAgICAgIC5tYXAoY29sID0+IGNvbC5nZXRLZXkoKSksXG4gICAgICBzZWxlY3RlZDogW10sXG4gICAgICBzb3J0RmllbGQ6IHByb3BzLmtleUZpZWxkLFxuICAgICAgc29ydE9yZGVyOiAxLFxuICAgICAgZGF0YTogW11cbiAgICB9O1xuICAgIGlmICh0aGlzLnByb3BzLmFzc2lnblJlZikge1xuICAgICAgdGhpcy5wcm9wcy5hc3NpZ25SZWYodGhpcyk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHM6IGFueSkge1xuICAgIGlmIChwcm9wcy5kYXRhICE9PSB0aGlzLnByb3BzLmRhdGEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiBwcm9wcy5kYXRhIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRhYmxlID0gKGRhdGE6IG9iamVjdFtdKSA9PiB7XG4gICAgY29uc3QgeyBrZXlGaWVsZCwgbG9hZGluZywgdG90YWwsIG9uUm93Q2xpY2ssIHJlbW90ZSwgaXNFeHBvcnRhYmxlLCBlbmFibGVDb2x1bW5IaWRlLFxuICAgICAgZW5hYmxlR2xvYmFsU2VhcmNoLCBzZWxlY3RhYmxlLCByb3dTZWxlY3RGb3JFeHBvcnQsIGVuYWJsZUluZmluaXRlU2Nyb2xsLFxuICAgICAgZXhwYW5kUm93IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbGVuZ3RoLCBjdXJyZW50UGFnZSwgY29sdW1ucywgc2VhcmNoYWJsZUNvbHVtbnMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBTZWFyY2hCYXIgfSA9IFNlYXJjaDtcbiAgICBjb25zdCBzZWxlY3Rpb25Qcm9wcyA9IHNlbGVjdGFibGUgPyB7IHNlbGVjdFJvdzoge1xuICAgICAgICBjbGlja1RvU2VsZWN0OiB0cnVlLFxuICAgICAgICBtb2RlOiAnY2hlY2tib3gnLFxuICAgICAgICBvblNlbGVjdDogdGhpcy5oYW5kbGVPblNlbGVjdCxcbiAgICAgICAgb25TZWxlY3RBbGw6IHRoaXMuaGFuZGxlT25TZWxlY3RBbGwsXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLnN0YXRlLnNlbGVjdGVkXG4gICAgICB9fSA6IHt9O1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbGtpdFByb3ZpZGVyXG4gICAgICAgIGtleUZpZWxkPXtrZXlGaWVsZH1cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgc2VhcmNoPXtlbmFibGVHbG9iYWxTZWFyY2ggfHwgZmFsc2V9XG4gICAgICAgIGV4cG9ydENTVj17aXNFeHBvcnRhYmxlID8geyBvbmx5RXhwb3J0U2VsZWN0aW9uOiAoc2VsZWN0YWJsZSAmJiByb3dTZWxlY3RGb3JFeHBvcnQpIHx8IGZhbHNlIH0gOiBmYWxzZX1cbiAgICAgID5cbiAgICAgICAgeyhwcm9wczogSVRvb2xraXRQcm9wcykgPT4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRhYmxlLXRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIHtlbmFibGVHbG9iYWxTZWFyY2ggJiYgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIHsgLi4ucHJvcHMuc2VhcmNoUHJvcHMgfSBjbGFzc05hbWU9XCJnbG9iYWxTZWFyY2hcIiBkZWxheT17MTAwMH0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggU29tZXRoaW5nISEhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNlYXJjaGFibGUgQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjb2x1bW4tc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29sdW1uLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLnNlYXJjaENvbHVtblRvZ2dsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXsob3BlbjogZmFsc2UsIGV2ZW50OiBhbnksIHNvdXJjZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2Uuc291cmNlICE9PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ29sdW1uVG9nZ2xlOiBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGV2ZW50S2V5OiBhbnksIGV2ZW50OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbHVtblNlYXJjaFRvZ2dsZShzZWFyY2hhYmxlQ29sdW1ucy5maW5kKHNlYXJjaENvbHVtbiA9PiBzZWFyY2hDb2x1bW4gPT09IGV2ZW50S2V5KSAhPT0gdW5kZWZpbmVkLCBldmVudEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoY29sID0+IGNvbC50eXBlID09PSAnVEVYVCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjb2x1bW46IElCb290c3RyYXBDb2x1bW4pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2Ake2NvbHVtbi5zZWFyY2hLZXl9LXNlYXJjaGB9IGV2ZW50S2V5PXtjb2x1bW4uc2VhcmNoS2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VhcmNoYWJsZUNvbHVtbnMuZmluZChzZWFyY2hDb2x1bW4gPT4gc2VhcmNoQ29sdW1uID09PSBjb2x1bW4uc2VhcmNoS2V5KSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50Pn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgdGFibGUtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RhYmxlICYmIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdGlvbi1yZW5kZXJlclwiPlxuICAgICAgICAgICAgICAgICAge2BTZWxlY3RlZCAke3RoaXMuc3RhdGUuc2VsZWN0ZWQubGVuZ3RofSBvZiAke3RoaXMucHJvcHMudG90YWx9YH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+fVxuICAgICAgICAgICAgICAgIHtlbmFibGVDb2x1bW5IaWRlICYmXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgIGtleT1cImNvbHVtbi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbHVtbi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLmNvbHVtblRvZ2dsZU9wZW59XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9eyhvcGVuOiBmYWxzZSwgZXZlbnQ6IGFueSwgc291cmNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlLnNvdXJjZSAhPT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5Ub2dnbGVPcGVuOiBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25Db2x1bW5IaWRlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sdW1uOiBJQm9vdHN0cmFwQ29sdW1uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtjb2x1bW4udGV4dH0gZXZlbnRLZXk9e2NvbHVtbi50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyFjb2x1bW4uaGlkZGVufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj59XG4gICAgICAgICAgICAgICAge2lzRXhwb3J0YWJsZSAmJiA8RXhwb3J0Q1NWQnV0dG9uXG4gICAgICAgICAgICAgICAgICB7IC4uLnByb3BzLmNzdlByb3BzIH1cbiAgICAgICAgICAgICAgICAgIG9uRmV0Y2hBbGw9e3RoaXMub25GZXRjaEFsbEZvckV4cG9ydH1cbiAgICAgICAgICAgICAgICAgIHJlbW90ZT17cmVtb3RlIHx8IGZhbHNlfVxuICAgICAgICAgICAgICAgID5FeHBvcnQgQ1NWISE8L0V4cG9ydENTVkJ1dHRvbj59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VGFibGUuU2Nyb2xsRGl2XG4gICAgICAgICAgICAgIGhhc01vcmU9eyhjdXJyZW50UGFnZSAqIGxlbmd0aCkgPCB0b3RhbH1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlSW5maW5pdGVTY3JvbGwgfHwgZmFsc2V9XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSArIDFcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB0aGlzLnJlZnJlc2hUYWJsZSh0cnVlKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNvbnRlbnQ9ezxCb290c3RyYXBUYWJsZVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wcy5iYXNlUHJvcHN9XG4gICAgICAgICAgICAgICAgZXhwYW5kUm93PXtleHBhbmRSb3d9XG4gICAgICAgICAgICAgICAgcmVtb3RlPXtyZW1vdGUgfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICBvblRhYmxlQ2hhbmdlPXt0aGlzLm9uVGFibGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgaGVhZGVyQ2xhc3Nlcz1cInRhYmxlLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgcm93Q2xhc3Nlcz17YHRhYmxlLXJvd3MgJHtzZWxlY3RhYmxlID8gJ3NlbGVjdGFibGUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBub0RhdGFJbmRpY2F0aW9uPXt0aGlzLmN1c3RvbU5vRGF0YUluZGljYXRpb259XG4gICAgICAgICAgICAgICAgZGVmYXVsdFNvcnRlZD17W3tcbiAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDoga2V5RmllbGQsXG4gICAgICAgICAgICAgICAgICBvcmRlcjogJ2FzYydcbiAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uPXsgIWVuYWJsZUluZmluaXRlU2Nyb2xsID8gUGFnaW5hdGlvbkZhY3Rvcnkoe1xuICAgICAgICAgICAgICAgICAgZmlyc3RQYWdlVGl0bGU6ICdHbyB0byBmaXJzdCcsXG4gICAgICAgICAgICAgICAgICBoaWRlUGFnZUxpc3RPbmx5T25lUGFnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGhpZGVTaXplUGVyUGFnZTogdG90YWwgPT09IDAsXG4gICAgICAgICAgICAgICAgICBsYXN0UGFnZVRpdGxlOiAnR28gdG8gbGFzdCcsXG4gICAgICAgICAgICAgICAgICBuZXh0UGFnZVRpdGxlOiAnR28gdG8gbmV4dCcsXG4gICAgICAgICAgICAgICAgICBwYWdlOiBjdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25Ub3RhbFJlbmRlcmVyOiB0aGlzLmN1c3RvbVBhZ2luYXRpb25Ub3RhbCxcbiAgICAgICAgICAgICAgICAgIHByZVBhZ2VUaXRsZTogJ0dvIHRvIHByZXZpb3VzJyxcbiAgICAgICAgICAgICAgICAgIHNob3dUb3RhbDogdG90YWwgIT09IDAsXG4gICAgICAgICAgICAgICAgICBzaXplUGVyUGFnZTogbGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgdG90YWxTaXplOiB0b3RhbFxuICAgICAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIHJvd0V2ZW50cz17e1xuICAgICAgICAgICAgICAgICAgb25DbGljazogKGU6IGFueSwgcm93OiBvYmplY3QsIHJvd0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uUm93Q2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICBvblJvd0NsaWNrKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGZpbHRlcj17RmlsdGVyRmFjdG9yeSgpfVxuICAgICAgICAgICAgICAgIHsuLi5zZWxlY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L1Rvb2xraXRQcm92aWRlcj5cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIHRvdGFsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY3VzdG9tVGFibGVDb250YWluZXIgJHtsb2FkaW5nID8gJ2xvYWRpbmcnIDogJyd9ICR7IWxvYWRpbmcgJiYgdG90YWwgPT09IDAgPyAnbm9EYXRhJyA6ICcnfWB9PlxuICAgICAgICB7ZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5yZW5kZXJUYWJsZShbXSl9XG4gICAgICAgIHtkYXRhLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJUYWJsZShkYXRhKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgdGFibGUgY29udGVudHMgd2l0aCBjdXJyZW50IHN0YXRlXG4gICAqIEBwYXJhbSByZXRhaW5EYXRhIDogVFJVRSBvbmx5IHdoZW4gcmVmcmVzaCB0YWJsZSBjYWxsZWQgZm9yIHBhZ2UgY2hhbmdlXG4gICAqIChDaGVjayBvblNjcm9sbCgpIG1ldGhvZCBvZiBTY3JvbGxEaXYpXG4gICAqL1xuICBwdWJsaWMgcmVmcmVzaFRhYmxlID0gKHJldGFpbkRhdGE6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudFBhZ2UsIGxlbmd0aCwgZmlsdGVycywgc29ydEZpZWxkLCBzb3J0T3JkZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmFibGVJbmZpbml0ZVNjcm9sbCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlKHtcbiAgICAgIGN1cnJlbnRQYWdlOiAoIXJldGFpbkRhdGEgJiYgZW5hYmxlSW5maW5pdGVTY3JvbGwpID8gMCA6IGN1cnJlbnRQYWdlLFxuICAgICAgZmlsdGVycyxcbiAgICAgIGxlbmd0aDogKCFyZXRhaW5EYXRhICYmIGVuYWJsZUluZmluaXRlU2Nyb2xsKSA/IGN1cnJlbnRQYWdlICogbGVuZ3RoIDogbGVuZ3RoLFxuICAgICAgcmV0YWluRGF0YSxcbiAgICAgIHNvcnRGaWVsZCxcbiAgICAgIHNvcnRPcmRlclxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbHVtbiBoaWRlIGRyb3Bkb3duIG9uU2VsZWN0IGhhbmRsZXJcbiAgICogQHBhcmFtIGV2ZW50S2V5XG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gaXNTZWxlY3RlZFxuICAgKi9cbiAgcHJpdmF0ZSBvbkNvbHVtbkhpZGUgPSAoZXZlbnRLZXk6IGFueSwgZXZlbnQ6IGFueSwgaXNTZWxlY3RlZDogYm9vbGVhbiA9IHRydWUpOiBhbnkgPT4ge1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyBoaWRlIGNvbHVtbiBvbiBET00gYW5kIGV4cG9ydFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sdW1uczogdGhpcy5zdGF0ZS5jb2x1bW5zLm1hcCgoY29sdW1uOiBJQm9vdHN0cmFwQ29sdW1uKSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udGV4dCA9PT0gZXZlbnRLZXkpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29sdW1uLCB7XG4gICAgICAgICAgICBjc3ZFeHBvcnQ6IGNvbHVtbi5oaWRkZW4sXG4gICAgICAgICAgICBoaWRkZW46ICFjb2x1bW4uaGlkZGVuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29sdW1uIHNlYXJjaCBkcm9wZG93biBzZWxlY3QgaGFuZGxlclxuICAgKiBAcGFyYW0gY2hlY2tlZFxuICAgKiBAcGFyYW0gc2VhcmNoS2V5XG4gICAqL1xuICBwcml2YXRlIG9uQ29sdW1uU2VhcmNoVG9nZ2xlID0gKGNoZWNrZWQ6IGJvb2xlYW4sIHNlYXJjaEtleTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hhYmxlQ29sdW1uczogY2hlY2tlZFxuICAgICAgICA/IHRoaXMuc3RhdGUuc2VhcmNoYWJsZUNvbHVtbnMuZmlsdGVyKHNlYXJjaGFibGVDb2x1bW4gPT4gc2VhcmNoYWJsZUNvbHVtbiAhPT0gc2VhcmNoS2V5KVxuICAgICAgICA6IFsuLi50aGlzLnN0YXRlLnNlYXJjaGFibGVDb2x1bW5zLCBzZWFyY2hLZXldXG4gICAgfSwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VhcmNoVGV4dCAmJiB0aGlzLnN0YXRlLnNlYXJjaFRleHQgIT09ICcnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZpbHRlcnM6IHRoaXMuc3RhdGUuc2VhcmNoYWJsZUNvbHVtbnNcbiAgICAgICAgICAgIC5tYXAoY29sdW1uID0+IGAke2NvbHVtbn1bJHNlYXJjaF09JHt0aGlzLnN0YXRlLnNlYXJjaFRleHR9YClcbiAgICAgICAgICAgIC5qb2luKCcmJylcbiAgICAgICAgfSwgdGhpcy5yZWZyZXNoVGFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRhYmxlIG9uQ2hhbmdlIGhhbmRsZXJcbiAgICogQHBhcmFtIHR5cGVcbiAgICogQHBhcmFtIG5ld1N0YXRlXG4gICAqL1xuICBwcml2YXRlIG9uVGFibGVDaGFuZ2UgPSAodHlwZTogc3RyaW5nLCBuZXdTdGF0ZTogSVRhYmxlU3RhdGUpID0+IHtcbiAgICBjb25zdCB7IHNlYXJjaFRleHQsIGZpbHRlcnMgfSA9IG5ld1N0YXRlO1xuICAgIC8vIEZpbHRlcnMgZm9ybWVkIGJ5IGNvbHVtbiBmaWx0ZXIgb3B0aW9uc1xuICAgIGxldCBvdmVycmlkZGVuRmlsdGVycyA9IGZpbHRlcnMgPyBPYmplY3Qua2V5cyhmaWx0ZXJzKS5tYXAoZmlsdGVyID0+IHtcbiAgICAgIGlmIChmaWx0ZXJzW2ZpbHRlcl0uZmlsdGVyVHlwZSA9PT0gQ29sdW1uLkNPTFVNTl9UWVBFUy5URVhUKSB7XG4gICAgICAgIHJldHVybiBgJHtmaWx0ZXJ9WyRzZWFyY2hdPSR7c2VhcmNoVGV4dCAmJiBzZWFyY2hUZXh0ICE9PSAnJyA/IHNlYXJjaFRleHQgOiBmaWx0ZXJzW2ZpbHRlcl0uZmlsdGVyVmFsfWA7XG4gICAgICB9IGVsc2UgaWYgKGZpbHRlcnNbZmlsdGVyXS5maWx0ZXJUeXBlID09PSBDb2x1bW4uQ09MVU1OX1RZUEVTLk5VTUJFUikge1xuICAgICAgICByZXR1cm4gYCR7ZmlsdGVyfSR7Y29tcGFyYXRvcnNGb3JBUEkoZmlsdGVyc1tmaWx0ZXJdLmZpbHRlclZhbC5jb21wYXJhdG9yKX0ke2ZpbHRlcnNbZmlsdGVyXS5maWx0ZXJWYWwubnVtYmVyfWA7XG4gICAgICB9IGVsc2UgaWYgKGZpbHRlcnNbZmlsdGVyXS5maWx0ZXJUeXBlID09PSBDb2x1bW4uQ09MVU1OX1RZUEVTLkRBVEUpIHtcbiAgICAgICAgcmV0dXJuIGAke2ZpbHRlcn0ke2NvbXBhcmF0b3JzRm9yQVBJKGZpbHRlcnNbZmlsdGVyXS5maWx0ZXJWYWwuY29tcGFyYXRvcil9JHtmaWx0ZXJzW2ZpbHRlcl0uZmlsdGVyVmFsLmRhdGV9YDtcbiAgICAgIH0gZWxzZSBpZiAoZmlsdGVyc1tmaWx0ZXJdLmZpbHRlclR5cGUgPT09IENvbHVtbi5DT0xVTU5fVFlQRVMuU0VMRUNUKSB7XG4gICAgICAgIHJldHVybiBgJHtmaWx0ZXJ9PSR7ZmlsdGVyc1tmaWx0ZXJdLmZpbHRlclZhbH1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSkuam9pbignJicpIDogJyc7XG4gICAgLy8gRmlsdGVycyBmb3JtZWQgYnkgZ2xvYmFsIHNlYXJjaFxuICAgIGlmIChzZWFyY2hUZXh0ICYmIHNlYXJjaFRleHQgIT09ICcnKSB7XG4gICAgICBvdmVycmlkZGVuRmlsdGVycyA9IHRoaXMuc3RhdGUuc2VhcmNoYWJsZUNvbHVtbnNcbiAgICAgICAgLmZpbHRlcihzZWFyY2hDb2x1bW4gPT4gZmlsdGVycyA/IGZpbHRlcnNbc2VhcmNoQ29sdW1uXSA9PT0gdW5kZWZpbmVkIDogdHJ1ZSlcbiAgICAgICAgLm1hcChjb2x1bW4gPT4gYCR7Y29sdW1ufVskc2VhcmNoXT0ke3NlYXJjaFRleHR9YClcbiAgICAgICAgLmpvaW4oJyYnKTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh7XG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5wcm9wcy5lbmFibGVJbmZpbml0ZVNjcm9sbCA/IDAgOiBuZXdTdGF0ZS5wYWdlLFxuICAgICAgZmlsdGVyczogb3ZlcnJpZGRlbkZpbHRlcnMsXG4gICAgICBsZW5ndGg6IHRoaXMucHJvcHMuZW5hYmxlSW5maW5pdGVTY3JvbGwgPyB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlICogdGhpcy5zdGF0ZS5sZW5ndGggOiBuZXdTdGF0ZS5zaXplUGVyUGFnZSxcbiAgICAgIHNvcnRGaWVsZDogbmV3U3RhdGUuc29ydEZpZWxkLFxuICAgICAgc29ydE9yZGVyOiBuZXdTdGF0ZS5zb3J0T3JkZXIgPT09IFRBQkxFX1NPUlQuQVNDID8gMSA6IC0xXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5wcm9wcy5lbmFibGVJbmZpbml0ZVNjcm9sbCA/IHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgOiBuZXdTdGF0ZS5wYWdlLFxuICAgICAgZmlsdGVyczogb3ZlcnJpZGRlbkZpbHRlcnMsXG4gICAgICBsZW5ndGg6IHRoaXMucHJvcHMuZW5hYmxlSW5maW5pdGVTY3JvbGwgPyB0aGlzLnN0YXRlLmxlbmd0aCA6IG5ld1N0YXRlLnNpemVQZXJQYWdlLFxuICAgICAgc2VhcmNoVGV4dDogbmV3U3RhdGUuc2VhcmNoVGV4dCB8fCAnJyxcbiAgICAgIHNvcnRGaWVsZDogbmV3U3RhdGUuc29ydEZpZWxkLFxuICAgICAgc29ydE9yZGVyOiBuZXdTdGF0ZS5zb3J0T3JkZXIgPT09IFRBQkxFX1NPUlQuQVNDID8gMSA6IC0xXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGJ1dHRvbiBjbGljayBoYW5kbGVyXG4gICAqIEZldGNoIGFsbCBEYXRhIGZvciBleHBvcnRcbiAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAqL1xuICBwcml2YXRlIG9uRmV0Y2hBbGxGb3JFeHBvcnQgPSAoY2FsbGJhY2s6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgZmlsdGVycywgc29ydEZpZWxkLCBzb3J0T3JkZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh7IGN1cnJlbnRQYWdlOiAwLCBsZW5ndGg6IDAsIGZpbHRlcnMsIHNvcnRGaWVsZCwgc29ydE9yZGVyLCBjYWxsYmFjayB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDdXN0b20gcGFnaW5hdGlvbiBzaG93aW5nIHJlbmRlcmVyXG4gICAqIEBwYXJhbSBmcm9tXG4gICAqIEBwYXJhbSB0b1xuICAgKiBAcGFyYW0gc2l6ZVxuICAgKi9cbiAgcHJpdmF0ZSBjdXN0b21QYWdpbmF0aW9uVG90YWwgPSAoZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBzaXplOiBudW1iZXIpID0+IChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWFjdC1ib290c3RyYXAtdGFibGUtcGFnaW5hdGlvbi10b3RhbFwiPlxuICAgICAgJm5ic3A7U2hvd2luZyByb3dzIHsgZnJvbSB9IHRvJm5ic3A7eyB0byB9IG9mJm5ic3A7eyBzaXplIH1cbiAgICA8L3NwYW4+XG4gIClcblxuICAvKipcbiAgICogQ3VzdG9tIE5vIGRhdGEgaW5kaWNhdGlvbiByZW5kZXJlclxuICAgKi9cbiAgcHJpdmF0ZSBjdXN0b21Ob0RhdGFJbmRpY2F0aW9uID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm9EYXRhSW5kaWNhdGlvblwiPlxuICAgICAgPGRpdj4geyF0aGlzLnByb3BzLmxvYWRpbmcgPyB0aGlzLnByb3BzLm5vRGF0YUluZGljYXRpb24gfHwgJ05vIERhdGEnIDogJyd9IDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG5cbiAgLyoqXG4gICAqIFRhYmxlIHNpbmdsZSByb3cgc2VsZWN0IGhhbmRsZXJcbiAgICogQHBhcmFtIHJvd1xuICAgKiBAcGFyYW0gaXNTZWxlY3RcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlT25TZWxlY3QgPSAocm93OiB7IFtrZXk6IHN0cmluZ106IGFueTsgfSwgaXNTZWxlY3Q6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoaXNTZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZDogWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWQsIHJvd1t0aGlzLnByb3BzLmtleUZpZWxkXV1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWQuZmlsdGVyKHggPT4geCAhPT0gcm93W3RoaXMucHJvcHMua2V5RmllbGRdKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRhYmxlIHNlbGVjdCBhbGwgcm93cyBoYW5kbGVyXG4gICAqIEZldGNoZXMgYWxsIHJvd3MgZnJvbSBzZXJ2ZXIgYW5kIGFkZHMgdGhlbSB0byB0aGUgc2VsZWN0ZWQgc3RhdGVcbiAgICogQHBhcmFtIGlzU2VsZWN0XG4gICAqIEBwYXJhbSByb3dzXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZU9uU2VsZWN0QWxsID0gKGlzU2VsZWN0OiBib29sZWFuLCByb3dzOiBbeyBba2V5OiBzdHJpbmddOiBhbnk7IH1dKSA9PiB7XG4gICAgaWYgKGlzU2VsZWN0KSB7XG4gICAgICAvLyBPdmVycmlkaW5nIGN1cnJlbnQgc2VsZWN0aW9uIHRvIHNlbGVjdCBhbGwgcm93cyBieSBkZWZhdWx0XG4gICAgICBjb25zdCB7IGZpbHRlcnMsIHNvcnRGaWVsZCwgc29ydE9yZGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh7XG4gICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IHsgZGF0YTogb2JqZWN0W10sIHRvdGFsOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IHJlc3BvbnNlLmRhdGEubWFwKGRhdHVtID0+IGRhdHVtW3RoaXMucHJvcHMua2V5RmllbGRdKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50UGFnZTogMCxcbiAgICAgICAgZmlsdGVycywgbGVuZ3RoOiAwLCBzb3J0RmllbGQsIHNvcnRPcmRlclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZDogW11cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=