import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFormFieldDataListRequest } from '../../actions/formfielddata';
import Table, { ITableState } from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

interface IFormSchemasProps {
  data: object[],
  total: number,
  loading: boolean,
  fetchFormFieldDataListRequest: any,
  match: any
}

interface IFormSchemasState {
  columns: Column[],
  currentPage: number,
  length: number
}

class FormDataList extends React.Component<IFormSchemasProps & RouteComponentProps, IFormSchemasState>{
  constructor(props: IFormSchemasProps & RouteComponentProps) {
    super(props);
    this.state = {
      columns: [
        (new Column()).withKey('_id').withLabel('ID'),
        (new Column()).withKey('createdAt').withLabel('Created At'),
        (new Column()).withKey('action').withLabel('Actions').withCellFormatter((cell: any, row: any) => (
          <div>
            <i className="glyphicon glyphicon-edit cursor-pointer" onClick={() => this.editFormData(row._id)} />
          </div>
        ))
      ],
      currentPage: 1,
      length: 10
    };
  }

  public renderFormSchema = () => {
    const { formId } = this.props.match.params;
    this.props.history.push(`/formrenderer/${formId}`);
  }

  public editFormData = (submissionId: string) => {
    const { formId } = this.props.match.params;
    this.props.history.push(`/formrenderer/${formId}/${submissionId}`);
  }

  public componentDidMount() {
    this.fetchFormDatas();
  }

  public render() {
    const { loading, data, total } = this.props;
    return (
      <div className="row">
        <div className="container">
          <div className="form-group">
            <button className="btn btn-primary pull-right" onClick={() => this.renderFormSchema()}>Add Data</button>
          </div>
        </div>
        <Table
          keyField="formfielddata"
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
            }, this.fetchFormDatas);
          }}
        />
      </div>
    );
  }

  private fetchFormDatas = () => {
    const { formName } = this.props.match.params;
    const { currentPage, length } = this.state;
    this.props.fetchFormFieldDataListRequest(formName, length, currentPage);
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.formFieldData.list.data,
  loading: state.formFieldData.list.isLoading,
  total: state.formFieldData.list.total
});

const mapDispatchToProps = ({
  fetchFormFieldDataListRequest
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDataList);