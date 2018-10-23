import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { getTableData, getTableMeta } from '../../actions/dynamicTable';
import Column, { IColDef } from '../../components/Table/Column';
import Table, { ITableState } from '../../components/Table/index';
import { TABLE_SORT } from '../../constants/tableConstants';
import { IState } from '../../reducers';
import { constructColumns } from '../../utils/commonUtil';

interface IDynamicTableProps {
  // Table props
  columns: IColDef[];
  isExportable: boolean;
  colHide: boolean;
  keyField: string;
  globalSearch: boolean;
  noDataIndicator: string;
  rowSelectForExport: boolean;
  rowAction: any;
  schemaLoading: boolean;

  // List props
  data: object[];
  total: number;
  loading: boolean;

  // Action
  fetchDynamicSchema: any;
  fetchDynamicList: any;
}

interface IDynamicTableState {
  columns: Column[];
  currentPage: number;
  length: number;
  sortField: string;
  sortOrder: string;
  selected: number[];
}

class DynamicTableRenderer extends React.Component<RouteComponentProps & IDynamicTableProps, IDynamicTableState> {
  constructor(props: RouteComponentProps & IDynamicTableProps) {
    super(props);
    this.state = {
      columns: [],
      currentPage: 1,
      length: 10,
      selected: [],
      sortField: '',
      sortOrder: TABLE_SORT.ASC
    };
  }

  public componentDidMount() {
    this.props.fetchDynamicSchema((cols: IColDef[], keyField: string) => {
      this.setState({
        columns: constructColumns(cols),
        sortField: keyField
      }, this.fetchDynamicTableList);
    });
  }

  public render() {
    const { loading, data, total, schemaLoading, keyField, colHide, isExportable, globalSearch } = this.props;
    if (!schemaLoading) {
      return (
        <Table
          keyField={keyField}
          data={data}
          columns={this.state.columns}
          loading={loading}
          length={this.state.length}
          currentPage={this.state.currentPage}
          total={total}
          onColumnHide={colHide ? (columns: Column[]) => {
            this.setState({
              columns
            });
          } : undefined}
          isExportable={isExportable}
          onFetchAll={this.fetchAllForExport}
          enableGlobalSearch={globalSearch}
          onUpdate={(nextState: ITableState) => {
            const { page, sizePerPage, sortField, sortOrder } = nextState;
            this.setState({
              currentPage: page,
              length: sizePerPage,
              sortField,
              sortOrder
            }, this.fetchDynamicTableList);
          }}
        />
      );
    }
    return <div/>;
  }

  private fetchDynamicTableList = () => {
    const { currentPage, length, sortField, sortOrder } = this.state;
    this.props.fetchDynamicList(length, currentPage, sortField, sortOrder);
  }

  private fetchAllForExport = (onExport: any) => {
    // Callback for exporting filtered data without pagination
    const { sortField, sortOrder } = this.state;
    this.props.fetchDynamicList(undefined, undefined, sortField, sortOrder, onExport);
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.dynamicTable.data.data,
  loading: state.dynamicTable.data.loading,
  total: state.dynamicTable.data.total,

  colHide: state.dynamicTable.meta.colHide,
  columns: state.dynamicTable.meta.cols,
  globalSearch: state.dynamicTable.meta.globalSearch,
  isExportable: state.dynamicTable.meta.isExportable,
  keyField: state.dynamicTable.meta.keyField,
  noDataIndicator: state.dynamicTable.meta.noDataIndicator,
  rowAction: state.dynamicTable.meta.rowAction,
  rowSelectForExport: state.dynamicTable.meta.rowSelectForExport,
  schemaLoading: state.dynamicTable.meta.loading
});

const mapDispatchToProps = ({
  fetchDynamicList: getTableData,
  fetchDynamicSchema: getTableMeta
});

export default connect(mapStateToProps, mapDispatchToProps)(DynamicTableRenderer);
