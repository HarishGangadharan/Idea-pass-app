import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Can } from '../../ability-context';
import { fetchGraphiQlList } from '../../actions/graphiQl';
import { BaseIcon } from '../../components/index';
import Table, { ITableUpdateProps } from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

interface IGraphiQlList {
  data?: any[];
  total?: number;
  loading?: boolean;
  fetchGraphiQlList?: any;
}

class GraphiQlList extends React.Component<
  IGraphiQlList & RouteComponentProps,
  object
  > {
  private columns: Column[];

  constructor(props: IGraphiQlList & RouteComponentProps) {
    super(props);
    this.columns = [
      new Column().withKey('_id').withLabel('ID'),
      new Column().withKey('name').withLabel('Name'),
      new Column()
        .withKey('action')
        .withLabel('Actions')
        .withCellFormatter((cell: any, row: any) => (
          <div>
            <BaseIcon
              display="inline"
              name="Edit"
              onClick={() => { this.openGraphiQl(row._id); }}
            />
          </div>
        ))
    ];
  }

  public componentDidMount() {
    const data = {
      currentPage: 1,
      limit: 10,
      sortField: 'id',
      sortOrder: 1
    };
    this.fetchGraphiQlList(data);
  }
  public render() {
    const { loading, data, total } = this.props;
    return (
      <div className="shadow-container">
        <Can I="read" a="admin">
          <div className="form-group">
            <button
              className="btn btn-primary pull-right"
              onClick={() => this.createGraphiQl()}
            >
              Create New Query
            </button>
          </div>
        </Can>
        <Table
          keyField="_id"
          data={data || []}
          columns={this.columns}
          loading={loading || false}
          length={length || 10}
          total={total || 0}
          remote={true}
          onUpdate={(nextState: ITableUpdateProps) => {
            const updatedData = {
              currentPage: nextState.currentPage,
              limit: nextState.length,
              sortField: nextState.sortField,
              sortOrder: nextState.sortOrder
            };
            this.fetchGraphiQlList(updatedData);
          }}
        />
      </div>
    );
  }

  private createGraphiQl = () => {
    this.props.history.push('/graphiQl');
  }

  private openGraphiQl = (id: any) => {
    this.props.history.push(`/graphiQl/${id}`);
  }

  private fetchGraphiQlList = (data: object) => {
    this.props.fetchGraphiQlList(data);
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.graphiQl.data,
  loading: state.graphiQl.loading,
  total: state.graphiQl.total
});

const mapDispatchToProps = {
  fetchGraphiQlList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphiQlList);
