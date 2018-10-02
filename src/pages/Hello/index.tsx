import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import Table, { ITableState } from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

interface IFormSchemasProps {
  data: object[],
  total: number,
  loading: boolean,
  fetchFormSchemaRequest: any
}

interface IFormSchemasState {
  columns: Column[],
  currentPage: number,
  length: number
}

class Hello extends React.Component<IFormSchemasProps & RouteComponentProps, IFormSchemasState>{
  constructor(props: IFormSchemasProps & RouteComponentProps) {
    super(props);
    this.state = {
      columns: [
        (new Column()).withKey('_id').withLabel('ID'),
        (new Column()).withKey('name').withLabel('Name'),
        (new Column()).withKey('createdAt').withLabel('Created At'),
        (new Column()).withKey('action').withLabel('Actions').withCellFormatter((cell: any, row: any) => (
          <div>
            <button className="btn btn-primary" onClick={() => this.renderFormSchema(row._id)}>View</button>&nbsp;
            <button className="btn btn-primary" onClick={() => this.builderFormSchema(row._id)}>Edit</button>
          </div>
        ))
      ],
      currentPage: 1,
      length: 10
    };
  }

  public renderFormSchema(id: string) {
    this.props.history.push(`/formRenderer/${id}`);
  }

  public builderFormSchema(id: string) {
    this.props.history.push(`/formBuilder/${id}`);
  }

  public componentDidMount() {
    this.fetchFormSchemas();
  }

  public render() {
    const { loading, data, total } = this.props;
    return (
      <div className="row">
        <Table
          id="users"
          data={data}
          columns={this.state.columns}
          loading={loading}
          length={10}
          currentPage={1}
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
    this.props.fetchFormSchemaRequest();
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.formSchema.formSchemas.data,
  loading: state.formSchema.isLoading,
  total: state.formSchema.formSchemas.total
});

const mapDispatchToProps = ({
  fetchFormSchemaRequest
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
