import * as React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import './Table.css';

import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import FilterFactory from 'react-bootstrap-table2-filter';
import PaginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { TABLE_SORT } from '../../constants/tableConstants';
import { comparatorsForAPI } from '../../utils/commonUtil';
import Column, { IBootstrapColumn } from './Column';
import ExportCSVButton from './ExportCSVButton';
import withInfiniteScroll from './InfiniteScrollTable';

/**
 * Table component props
 */
interface ITableProps {
  // Mandatory props
  keyField: string,
  data: object[],
  columns: Column[],
  currentPage?: number,
  loading: boolean,
  length: number,
  total: number,
  onUpdate: any,

  // Optional props
  assignRef?: any,
  onRowClick?: any,  // Provide callback to enable row click action
  noDataIndication?: any, // Customize no data label
  isExportable?: boolean, // Specify if Export option can be given
  selectable?: boolean, // Specify if row selection should be enabled and passed on update
  rowSelectForExport?: boolean, // Specify if row selection should be enabled for export
  enableColumnHide?: boolean, // Specify if column hide/show dropdown should be provided
  enableGlobalSearch?: boolean, // Specify if global search can be enabled
  enableInfiniteScroll?: boolean, // Enable infinite scroll instead of pagination
  remote?: boolean // true -> to enable server side rendering
}

/**
 * Table component state
 */
interface ITableContext {
  columnToggleOpen: boolean,
  searchColumnToggle: boolean,
  searchText: string,
  searchableColumns: string[],
  columns: IBootstrapColumn[],
  keyField: string,
  currentPage: number,
  length: number,
  sortField: string;
  sortOrder: number;
  filters: string;
  selected: string[];
}

/**
 * Shape of object available on table refresh (Check for onTableChange() definition)
 */
export interface ITableState {
  page: number, // newest Page
  sizePerPage: number,  // newest sizePerPage
  sortField: string,  // newest sort field
  sortOrder: string,  // newest sort order
  filters?: object, // an object which have current filter status per column
  searchText?: string // Global search string
}

/**
 * Shape of object available to parent component on table refresh (Check for onUpdate() definition)
 */
export interface ITableUpdateProps {
  currentPage: number, // newest Page
  length: number,  // newest sizePerPage
  sortField: string,  // newest sort field
  sortOrder: number,  // newest sort order
  filters: string, // an object which have current filter status per column
  retainData: boolean; // Whether or not to append data on page change
  callback?: any // Callback function : used for export
}

/**
 * Toolkit provider props
 */
interface IToolkitProps {
  baseProps: object,
  csvProps: object,
  searchProps: object,
}

export default class Table extends React.Component<ITableProps, ITableContext> {
  private static ScrollDiv = withInfiniteScroll();

  constructor(props: ITableProps) {
    super(props);
    this.state = {
      columnToggleOpen: false,
      columns: props.columns.map(column => column.convertToBootstrapTableColumn()),
      currentPage: 1,
      filters: '',
      keyField: props.keyField,
      length: props.length,
      searchColumnToggle: false,
      searchText: '',
      searchableColumns: props.columns
        .filter(col => col.type === 'TEXT')
        .map(col => col.getKey()),
      selected: [],
      sortField: props.keyField,
      sortOrder: 1
    };
    if (this.props.assignRef) {
      this.props.assignRef(this);
    }
  }

  public render() {
    const { keyField, data, loading, total, onRowClick, remote, isExportable, enableColumnHide,
      enableGlobalSearch, selectable, rowSelectForExport, enableInfiniteScroll } = this.props;
    const { length, currentPage, columns, searchableColumns } = this.state;
    const { SearchBar } = Search;
    const selectionProps = selectable ? { selectRow: {
        clickToSelect: true,
        mode: 'checkbox',
        onSelect: this.handleOnSelect,
        onSelectAll: this.handleOnSelectAll,
        selected: this.state.selected
      }} : {};
    // @ts-ignore
    return (
      <div className={`customTableContainer ${loading ? 'loading' : ''} ${!loading && total === 0 ? 'noData' : ''}`}>
        <ToolkitProvider
          keyField={keyField}
          data={data}
          columns={columns}
          search={enableGlobalSearch || false}
          exportCSV={isExportable ? { onlyExportSelection: (selectable && rowSelectForExport) || false } : false}
        >
          {(props: IToolkitProps) => (
            <React.Fragment>
              <div className="row table-toolbar">
                <div className="col-md-6">
                  {enableGlobalSearch && <React.Fragment>
                      <SearchBar { ...props.searchProps } className="globalSearch" delay={1000} placeholder="Search Something!!!" />
                      <DropdownButton
                          title="Searchable Columns"
                          key="column-search"
                          id="column-search"
                          open={this.state.searchColumnToggle}
                          // @ts-ignore
                          onToggle={(open: false, event: any, source: any) => {
                            if (source.source !== 'select') {
                              this.setState({
                                searchColumnToggle: open
                              });
                            }
                          }}
                          // @ts-ignore
                          onSelect={(eventKey: any, event: any): void => {
                            this.onColumnSearchToggle(searchableColumns.find(searchColumn => searchColumn === eventKey) !== undefined, eventKey);
                          }}
                      >
                        {columns
                          .filter(col => col.type === 'TEXT')
                          .map((column: IBootstrapColumn) => (
                          <MenuItem key={`${column.searchKey}-search`} eventKey={column.searchKey}>
                            <Checkbox
                              checked={searchableColumns.find(searchColumn => searchColumn === column.searchKey) !== undefined}
                              onChange={(e) => e.preventDefault()}
                            >
                              {column.text}
                            </Checkbox>
                          </MenuItem>
                        ))}
                      </DropdownButton>
                  </React.Fragment>}
                </div>
                <div className="col-md-6 table-options">
                  {selectable && <span className="selection-renderer">
                    {`Selected ${this.state.selected.length} of ${this.props.total}`}
                  </span>}
                  {enableColumnHide &&
                  <DropdownButton
                      title="Columns"
                      key="column-toggle"
                      id="column-toggle"
                      open={this.state.columnToggleOpen}
                      // @ts-ignore
                      onToggle={(open: false, event: any, source: any) => {
                        if (source.source !== 'select') {
                          this.setState({
                            columnToggleOpen: open
                          });
                        }
                      }}
                      // @ts-ignore
                      onSelect={this.onColumnHide}
                  >
                    {columns.map((column: IBootstrapColumn, index) => (
                      <MenuItem key={column.text} eventKey={column.text}>
                        <Checkbox
                          checked={!column.hidden}>
                          {column.text}
                        </Checkbox>
                      </MenuItem>
                    ))}
                  </DropdownButton>}
                  {isExportable && <ExportCSVButton
                    { ...props.csvProps }
                    onFetchAll={this.onFetchAllForExport}
                    remote={remote || false}
                  >Export CSV!!</ExportCSVButton>}
                </div>
              </div>
              <Table.ScrollDiv
                hasMore={(currentPage * length) < total}
                enabled={enableInfiniteScroll || false}
                onScroll={() => {
                  this.setState({
                    currentPage: this.state.currentPage + 1
                  }, () => this.refreshTable(true));
                }}
                content={<BootstrapTable
                  {...props.baseProps}
                  remote={remote || false}
                  loading={loading}
                  onTableChange={this.onTableChange}
                  headerClasses="table-header"
                  rowClasses={`table-rows ${selectable ? 'selectable' : ''}`}
                  noDataIndication={this.customNoDataIndication}
                  defaultSorted={[{
                    dataField: keyField,
                    order: 'asc'
                  }]}
                  pagination={ !enableInfiniteScroll ? PaginationFactory({
                    firstPageTitle: 'Go to first',
                    hidePageListOnlyOnePage: true,
                    hideSizePerPage: total === 0,
                    lastPageTitle: 'Go to last',
                    nextPageTitle: 'Go to next',
                    page: currentPage,
                    paginationTotalRenderer: this.customPaginationTotal,
                    prePageTitle: 'Go to previous',
                    showTotal: total !== 0,
                    sizePerPage: length,
                    totalSize: total
                  }) : undefined}
                  rowEvents={{
                    onClick: (e: any, row: object, rowIndex: number) => {
                      if (onRowClick) {
                        onRowClick(row);
                      }
                    }
                  }}
                  filter={FilterFactory()}
                  {...selectionProps}
                />}
              />
            </React.Fragment>
          )}
        </ToolkitProvider>
      </div>
    );
  }

  /**
   * Refresh the table contents with current state
   * @param retainData : TRUE only when refresh table called for page change
   * (Check onScroll() method of ScrollDiv)
   */
  public refreshTable = (retainData: boolean = false) => {
    const { currentPage, length, filters, sortField, sortOrder } = this.state;
    const { enableInfiniteScroll } = this.props;
    this.props.onUpdate({
      currentPage: (!retainData && enableInfiniteScroll) ? 0 : currentPage,
      filters,
      length: (!retainData && enableInfiniteScroll) ? currentPage * length : length,
      retainData,
      sortField,
      sortOrder
    });
  }

  /**
   * Column hide dropdown onSelect handler
   * @param eventKey
   * @param event
   * @param isSelected
   */
  private onColumnHide = (eventKey: any, event: any, isSelected: boolean = true): any => {
    if (isSelected) {
      event.preventDefault();
    }
    // hide column on DOM and export
    this.setState({
      columns: this.state.columns.map((column: IBootstrapColumn) => {
        if (column.text === eventKey) {
          return Object.assign({}, column, {
            csvExport: column.hidden,
            hidden: !column.hidden
          });
        }
        return column;
      })
    });
  }

  /**
   * Column search dropdown select handler
   * @param checked
   * @param searchKey
   */
  private onColumnSearchToggle = (checked: boolean, searchKey: string) => {
    this.setState({
      searchableColumns: checked
        ? this.state.searchableColumns.filter(searchableColumn => searchableColumn !== searchKey)
        : [...this.state.searchableColumns, searchKey]
    }, () => {
      if (this.state.searchText && this.state.searchText !== '') {
        this.setState({
          filters: this.state.searchableColumns
            .map(column => `${column}[$search]=${this.state.searchText}`)
            .join('&')
        }, this.refreshTable);
      }
    });
  }

  /**
   * Table onChange handler
   * @param type
   * @param newState
   */
  private onTableChange = (type: string, newState: ITableState) => {
    const { searchText, filters } = newState;
    // Filters formed by column filter options
    let overriddenFilters = filters ? Object.keys(filters).map(filter => {
      if (filters[filter].filterType === Column.COLUMN_TYPES.TEXT) {
        return `${filter}[$search]=${searchText && searchText !== '' ? searchText : filters[filter].filterVal}`;
      } else if (filters[filter].filterType === Column.COLUMN_TYPES.NUMBER) {
        return `${filter}${comparatorsForAPI(filters[filter].filterVal.comparator)}${filters[filter].filterVal.number}`;
      } else if (filters[filter].filterType === Column.COLUMN_TYPES.DATE) {
        return `${filter}${comparatorsForAPI(filters[filter].filterVal.comparator)}${filters[filter].filterVal.date}`;
      } else if (filters[filter].filterType === Column.COLUMN_TYPES.SELECT) {
        return `${filter}=${filters[filter].filterVal}`;
      } else {
        return null;
      }
    }).join('&') : '';
    // Filters formed by global search
    if (searchText && searchText !== '') {
      overriddenFilters = this.state.searchableColumns
        .filter(searchColumn => filters ? filters[searchColumn] === undefined : true)
        .map(column => `${column}[$search]=${searchText}`)
        .join('&');
    }
    this.props.onUpdate({
      currentPage: this.props.enableInfiniteScroll ? 0 : newState.page,
      filters: overriddenFilters,
      length: this.props.enableInfiniteScroll ? this.state.currentPage * this.state.length : newState.sizePerPage,
      sortField: newState.sortField,
      sortOrder: newState.sortOrder === TABLE_SORT.ASC ? 1 : -1
    });
    this.setState({
      currentPage: this.props.enableInfiniteScroll ? this.state.currentPage : newState.page,
      filters: overriddenFilters,
      length: this.props.enableInfiniteScroll ? this.state.length : newState.sizePerPage,
      searchText: newState.searchText || '',
      sortField: newState.sortField,
      sortOrder: newState.sortOrder === TABLE_SORT.ASC ? 1 : -1
    });
  }

  /**
   * Export button click handler
   * Fetch all Data for export
   * @param callback
   */
  private onFetchAllForExport = (callback: any) => {
    const { filters, sortField, sortOrder } = this.state;
    this.props.onUpdate({ currentPage: 0, length: 0, filters, sortField, sortOrder, callback });
  }

  /**
   * Custom pagination showing renderer
   * @param from
   * @param to
   * @param size
   */
  private customPaginationTotal = (from: number, to: number, size: number) => (
    <span className="react-bootstrap-table-pagination-total">
      &nbsp;Showing rows { from } to&nbsp;{ to } of&nbsp;{ size }
    </span>
  )

  /**
   * Custom No data indication renderer
   */
  private customNoDataIndication = () => (
    <div className="noDataIndication">
      <div> {!this.props.loading ? this.props.noDataIndication || 'No Data' : ''} </div>
    </div>
  )

  /**
   * Table single row select handler
   * @param row
   * @param isSelect
   */
  private handleOnSelect = (row: { [key: string]: any; }, isSelect: boolean) => {
    if (isSelect) {
      this.setState({
        selected: [...this.state.selected, row[this.props.keyField]]
      });
    } else {
      this.setState({
        selected: this.state.selected.filter(x => x !== row[this.props.keyField])
      });
    }
  }

  /**
   * Table select all rows handler
   * Fetches all rows from server and adds them to the selected state
   * @param isSelect
   * @param rows
   */
  private handleOnSelectAll = (isSelect: boolean, rows: [{ [key: string]: any; }]) => {
    if (isSelect) {
      // Overriding current selection to select all rows by default
      const { filters, sortField, sortOrder } = this.state;
      this.props.onUpdate({
        callback: (response: { data: object[], total: number }) => {
          this.setState({
            selected: response.data.map(datum => datum[this.props.keyField])
          });
        },
        currentPage: 0,
        filters, length: 0, sortField, sortOrder
      });
    } else {
      this.setState({
        selected: []
      });
    }
  }
}

