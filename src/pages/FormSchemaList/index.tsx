import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFormSchemaList } from '../../actions/formschema';
import Table, { ITableState } from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

interface IFormSchemasProps {
  data: object[],
  total: number,
  loading: boolean,
  fetchFormSchemaList: any
}

interface IFormSchemasState {
  columns: Column[],
  currentPage: number,
  length: number
}

class FormSchemaList extends React.Component<IFormSchemasProps & RouteComponentProps, IFormSchemasState>{
  constructor(props: IFormSchemasProps & RouteComponentProps) {
    super(props);
    this.state = {
      columns: [
        (new Column()).withKey('_id').withLabel('ID'),
        (new Column()).withKey('name').withLabel('Name'),
        (new Column()).withKey('action').withLabel('Actions').withCellFormatter((cell: any, row: any) => (
          <div>
            <i className="glyphicon glyphicon-eye-open cursor-pointer" onClick={() => this.renderFormSchema(row._id)} />&nbsp;
            <i className="glyphicon glyphicon-edit cursor-pointer" onClick={() => this.builderFormSchema(row._id)} />
          </div>
        ))
      ],
      currentPage: 1,
      length: 10
    };
  }

  public renderFormSchema(id: string) {
    this.props.history.push(`/formrenderer/${id}`);
  }

  public builderFormSchema(id?: string) {
    this.props.history.push(id ? `/formbuilder/${id}` : `/formbuilder`);
  }

  public componentDidMount() {
    this.fetchFormSchemas();
  }

  public render() {
    const { loading, data, total } = this.props;
    return (
      <div className="row">
        <div className="container">
          <div className="form-group">
            <button className="btn btn-primary pull-right" onClick={() => this.builderFormSchema()}>Create New Schema</button>
          </div>
        </div>
        <Table
          keyField="_id"
          data={data}
          columns={this.state.columns}
          loading={loading}
          length={this.state.length}
          currentPage={this.state.currentPage}
          total={total}
          onUpdate={(nextState: ITableState) => {
            const { page, sizePerPage } = nextState;
            this.setState({
              currentPage: page,
              length: sizePerPage
            }, this.fetchFormSchemas);
          }}
        />
      </div>
    );
  }

  private fetchFormSchemas = () => {
    const { currentPage, length } = this.state;
    this.props.fetchFormSchemaList(length, currentPage);
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.formSchema.list.data,
  loading: state.formSchema.list.loading,
  total: state.formSchema.list.total
});

const mapDispatchToProps = ({
  fetchFormSchemaList
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSchemaList);
