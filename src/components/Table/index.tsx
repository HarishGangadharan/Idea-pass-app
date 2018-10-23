import * as React from 'react';

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import './Table.css';

import { Checkbox, DropdownButton, MenuItem } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import FilterFactory from 'react-bootstrap-table2-filter';
import OverlayFactory from 'react-bootstrap-table2-overlay';
import PaginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import Column, { IBootstrapColumn, IHeaderComponent } from './Column';
import ExportCSVButton from './ExportCSVButton';

interface ITableProps {
  // Mandatory props
  keyField: string,
  data: object[],
  columns: Column[],
  loading: boolean,
  length: number,
  currentPage: number,
  total: number,
  onUpdate: any,

  // Optional props
  onRowClick?: any,  // Provide callback to enable row click action
  noDataIndication?: any, // Customize no data label
  isExportable?: boolean, // Specify if Export option can be given
  onFetchAll?: any, // Export function to fetch all filtered records without pagination
  rowSelectForExport?: boolean, // Specify if row selection should be enabled for export
  enableGlobalSearch?: boolean, // Specify if global search can be enabled
  searchableColumns?: string[], // List of search keys, Specify which columns are search enabled
  onColumnHide?: any, // Specify if Column display can be controlled ( NOTE : Maintain column in component state)
  onColumnSearchToggle?: any // Callback for toggling whether column is enabled for global search
}

interface ITableContext {
  columnToggleOpen: boolean
}

/**
 * Shape of state available on table refresh (Check for onUpdate() definition)
 */
export interface ITableState {
  page: number, // newest Page
  sizePerPage: number,  // newest sizePerPage
  sortField: string,  // newest sort field
  sortOrder: string,  // newest sort order
  filters?: object // an object which have current filter status per column
}

interface IToolkitProps {
  baseProps: object,
  csvProps: object,
  searchProps: object,
}

export default class Table extends React.Component<ITableProps, ITableContext> {
  constructor(props: ITableProps) {
    super(props);
    this.state = {
      columnToggleOpen: false
    };
  }

  public render() {
    const { keyField, data, columns, loading, length, currentPage, total, onRowClick, noDataIndication,
      isExportable, onColumnHide, enableGlobalSearch, rowSelectForExport } = this.props;
    const tableColumns = enableGlobalSearch
      ? columns.map(column => column
        .withHeaderFormatter(this.searchableHeader)
        .convertToBootstrapTableColumn())
      : columns.map(column => column.convertToBootstrapTableColumn());
    const { SearchBar } = Search;
    const selectionProps = rowSelectForExport ? { selectRow: {
        clickToSelect: true,
        mode: 'checkbox'
      }} : {};
    return (
      <div className="container customTableContainer">
        <ToolkitProvider
          keyField={keyField}
          data={data}
          columns={tableColumns}
          search={enableGlobalSearch || false}
          exportCSV={isExportable ? { onlyExportSelection: rowSelectForExport || false } : false}
        >
          {(props: IToolkitProps) => (
            <React.Fragment>
              <div className="row table-toolbar">
                <div className="col-md-6">
                  {enableGlobalSearch && <SearchBar { ...props.searchProps } delay={100} placeholder="Search Something!!!" />}
                </div>
                <div className="col-md-6 table-options">
                  {onColumnHide &&
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
                      onSelect={(eventKey: any, event: any): any => {
                        event.preventDefault();
                        const columnsToBeDisplayed = columns.map((column: Column, i: number) => {
                          if (i === eventKey) {
                            return column.markAsHidden(!column.isHidden);
                          }
                          return column;
                        });
                        onColumnHide(columnsToBeDisplayed);
                      }}
                  >
                    {tableColumns.map((column, index) => (
                      <MenuItem key={column.text} eventKey={index}>
                        <Checkbox checked={!column.hidden}>
                          {column.text}
                        </Checkbox>
                      </MenuItem>
                    ))}
                  </DropdownButton>}
                  {isExportable && <ExportCSVButton { ...props.csvProps } onFetchAll={this.props.onFetchAll} >Export CSV!!</ExportCSVButton>}
                </div>
              </div>
              <BootstrapTable
                {...props.baseProps}
                remote={true}
                loading={loading}
                onTableChange={this.onTableChange}
                headerClasses="table-header"
                rowClasses="table-rows"
                noDataIndication={noDataIndication || 'No Data'}
                defaultSorted={[{
                  dataField: keyField,
                  order: 'asc'
                }]}
                pagination={ PaginationFactory({
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
                }) }
                rowEvents={{
                  onClick: (e: any, row: object, rowIndex: number) => {
                    if (onRowClick) {
                      onRowClick(row);
                    }
                  }
                }}
                filter={FilterFactory()}
                overlay={ OverlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' }) }
                {...selectionProps}
              />
            </React.Fragment>
          )}
        </ToolkitProvider>
      </div>
    );
  }

  private onTableChange = (type: string, newState: ITableState) => {
    this.props.onUpdate(newState);
  }

  private customPaginationTotal = (from: number, to: number, size: number) => (
    <span className="react-bootstrap-table-pagination-total">
      &nbsp;Showing rows { from } to&nbsp;{ to } of&nbsp;{ size }
    </span>
  )

  private searchableHeader = (column: IBootstrapColumn, colIndex: number, components: IHeaderComponent) : any => (
    <div>
      <Checkbox
        inline={true}
        checked={this.props.searchableColumns
          ? this.props.searchableColumns.find(
          (searchableColumn: string) => this.props.columns[colIndex].searchKey === searchableColumn
        ) !== undefined
          : false}
        onClick={e => {
          // @ts-ignore
          this.props.onColumnSearchToggle(this.props.columns[colIndex].searchKey, e.target.checked);
        }}>
        {column.text}
      </Checkbox>
      {components.sortElement}
      {components.filterElement}
    </div>
  )
}

