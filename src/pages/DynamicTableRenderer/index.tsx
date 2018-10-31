import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { getTableData, getTableMeta } from '../../actions/dynamicTable';
import Column, { IColDef } from '../../components/Table/Column';
import Table, { ITableUpdateProps } from '../../components/Table/index';
import { IState } from '../../reducers';
import { constructColumns } from '../../utils/commonUtil';

import './DynamicTableRenderer.css';

interface IDynamicTableProps {
  // Table props
  columns: IColDef[];
  enableInfiniteScroll: boolean;
  isExportable: boolean;
  colHide: boolean;
  keyField: string;
  globalSearch: boolean;
  name: string;
  noDataIndicator: string;
  selectable: boolean;
  rowSelectForExport: boolean;
  schemaLoading: boolean;
  clientRendering: boolean;
  isAutoRefresh: boolean;
  resource: string;
  length: number;

  // List props
  data: object[];
  total: number;
  loading: boolean;

  // Action
  fetchDynamicSchema: any;
  fetchDynamicList: any;
}

class DynamicTableRenderer extends React.Component<RouteComponentProps & IDynamicTableProps, object> {
  private tableComponent: any = undefined;
  private autoRefresh: any = undefined;
  private columns: Column[] = [];

  public componentDidMount() {
    this.props.fetchDynamicSchema((columns: IColDef[], isAutoRefresh: boolean) => {
      this.columns = constructColumns(columns);
      if (isAutoRefresh) {
        this.autoRefresh = setInterval(() => {
          this.tableComponent.refreshTable();
        }, 30000);
      }
    });
  }

  public componentWillUnmount() {
    if (this.autoRefresh) {
      clearInterval(this.autoRefresh);
    }
  }

  public render() {
    const { loading, clientRendering, name, data, total, schemaLoading, keyField, colHide, selectable,
      isExportable, enableInfiniteScroll, globalSearch, rowSelectForExport, noDataIndicator } = this.props;
    if (!schemaLoading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 dynamic-table-header">
              <h3> {name} </h3>
              <button onClick={() => {
                if (this.tableComponent) {
                  this.tableComponent.refreshTable();
                }
              }}>
                <span className="glyphicon glyphicon-refresh" />
              </button>
            </div>
          </div>
          <Table
            assignRef={(tableComponent: any): void => {
              this.tableComponent = tableComponent;
            }}
            keyField={keyField}
            data={data}
            remote={!clientRendering}
            enableInfiniteScroll={enableInfiniteScroll && !clientRendering}
            columns={this.columns}
            loading={loading}
            length={this.props.length}
            total={total}
            enableColumnHide={colHide}
            selectable={selectable}
            isExportable={isExportable}
            rowSelectForExport={rowSelectForExport}
            noDataIndication={noDataIndicator}
            enableGlobalSearch={globalSearch}
            onUpdate={(nextState: ITableUpdateProps) => {
              const { currentPage, length, filters, sortField, sortOrder, callback, retainData } = nextState;
              const { resource } = this.props;
              this.props.fetchDynamicList(resource, length, currentPage, filters, sortField, sortOrder, retainData, callback);
            }}
          />
        </div>
      );
    }
    return <div/>;
  }
}

const mapStateToProps = (state: IState) => ({
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
});

const mapDispatchToProps = ({
  fetchDynamicList: getTableData,
  fetchDynamicSchema: getTableMeta
});

export default connect(mapStateToProps, mapDispatchToProps)(DynamicTableRenderer);
