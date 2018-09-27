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
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import Column from './Column';

interface ITableProps {
  // Mandatory props
  id: string,
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
  enableGlobalSearch?: boolean, // Specify if global search can be enabled
  onColumnHide?: any // Specify if Column display can be controlled ( NOTE : Maintain column in component state)
}

interface ITableContext {
  columnToggleOpen: boolean
}

/**
 * Shape of state available on table refresh (Check for onUpdate() definition)
 */
interface ITableState {
  page: number, // newest Page
  sizePerPage: number,  // newest sizePerPage
  sortField: string,  // newest sort field
  sortOrder: string,  // newest sort order
  filters: object // an object which have current filter status per column
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
    const { id, data, columns, loading, length, currentPage, total, onRowClick, noDataIndication,
    isExportable, onColumnHide, enableGlobalSearch } = this.props;
    const tableColumns = columns.map(column => column.convertToBootstrapTableColumn());
    const { ExportCSVButton } = CSVExport;
    const { SearchBar } = Search;
    return (
      <div className="container customTableContainer">
        <ToolkitProvider
          keyField={id}
          data={data}
          columns={tableColumns}
          search={enableGlobalSearch || false}
          exportCSV={isExportable || false}
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
                  {isExportable && <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>}
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
}

