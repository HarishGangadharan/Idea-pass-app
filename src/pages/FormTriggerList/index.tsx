import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFormTriggerListRequest } from '../../actions/formTrigger';
import Table, { ITableUpdateProps } from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';
import CButton from '../../components/Button/CButton';

interface IFormSchemasProps {
  data: object[],
  total: number,
  loading: boolean,
  fetchFormTriggerListRequest: any,
  match: any
}

interface IFormSchemasState {
  columns: Column[],
  currentPage: number,
  length: number
}

class FormTriggerList extends React.Component<IFormSchemasProps & RouteComponentProps, IFormSchemasState>{
  constructor(props: IFormSchemasProps & RouteComponentProps) {
    super(props);
    this.state = {
      columns: [
        (new Column()).withKey('_id').withLabel('ID'),
        (new Column()).withKey('name').withLabel('Name'),
        (new Column()).withKey('form').withLabel('Form'),
        (new Column()).withKey('createdAt').withLabel('Created At'),
        (new Column()).withKey('action').withLabel('Actions').withCellFormatter((cell: any, row: any) => (
          <div>
            <i className="glyphicon glyphicon-edit cursor-pointer" onClick={() => this.editFormTrigger(row._id)} />
          </div>
        ))
      ],
      currentPage: 1,
      length: 10
    };
  }

  public addFormTrigger = () => {
    const { formId } = this.props.match.params;
    this.props.history.push(`/formTrigger/${formId}`);
  }

  public editFormTrigger = (triggerId: string) => {
    const { formId } = this.props.match.params;
    this.props.history.push(`/formTrigger/${formId}/${triggerId}`);
  }

  public componentDidMount() {
    this.fetchFormTriggers();
  }

  public render() {
    const { loading, data, total } = this.props;
    const { currentPage, length } = this.state;
    return (
      <div className="shadow-container">
        <CButton
          className="btn btn-primary pull-right mb-2"
          onClick={() => this.addFormTrigger()}
          name="Add Trigger"
        />
        <Table
          keyField="formtrigger"
          data={data}
          columns={this.state.columns}
          loading={loading}
          length={length}
          currentPage={currentPage}
          total={total}
          remote={true}
          onUpdate={(nextState: ITableUpdateProps) => {
            this.setState({
              currentPage: nextState.currentPage,
              length: nextState.length
            }, this.fetchFormTriggers);
          }}
        />
      </div>
    );
  }

  private fetchFormTriggers = () => {
    const { formId } = this.props.match.params;
    const { currentPage, length } = this.state;
    this.props.fetchFormTriggerListRequest(formId, length, currentPage);
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.formTrigger.list.data,
  loading: state.formTrigger.list.isLoading,
  total: state.formTrigger.list.total
});

const mapDispatchToProps = ({
  fetchFormTriggerListRequest
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTriggerList);
