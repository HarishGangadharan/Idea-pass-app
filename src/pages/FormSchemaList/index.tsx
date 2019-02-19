import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Can } from '../../ability-context';
import { fetchFormSchemaList } from '../../actions/formschema';
import { BaseIcon } from '../../components/index';
import Table, { ITableUpdateProps } from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';
import CButton from '../../components/Button/CButton';

interface IFormSchemasProps {
  data?: object[];
  total?: number;
  length?:number;
  loading?: boolean;
  fetchFormSchemaList?: any;
}

class FormSchemaList extends React.Component<
  IFormSchemasProps & RouteComponentProps,
  object
  > {
  static defaultProps = {
    length: 10
  }
  private columns: Column[];

  constructor(props: IFormSchemasProps & RouteComponentProps) {
    super(props);
    this.columns = [
      new Column().withKey('_id').withLabel('ID'),
      new Column().withKey('name').withLabel('Name'),
      new Column()
        .withKey('action')
        .withLabel('Actions')
        .withCellFormatter((cell: any, row: any) => (
          <div>
            <Can I="read" a="roles">
              <BaseIcon
                display="inline"
                name="Eye"
                onClick={() => this.renderFormSchema(row._id)}
              />
              &nbsp;
            </Can>
            <BaseIcon
              display="inline"
              name="Edit"
              onClick={() => this.builderFormSchema(row._id)}
            />
            &nbsp;
            <BaseIcon
              display="inline"
              name="List"
              onClick={() => this.viewFormData(row.name_singular, row._id)}
            />
            &nbsp;
            <BaseIcon
              display="inline"
              name="Settings"
              onClick={() => this.viewFormtriggers(row.name_singular, row._id)}
            />
          </div>
        ))
    ];
  }

  public renderFormSchema(id: string) {
    this.props.history.push(`/formrenderer/${id}/create`);
  }

  public builderFormSchema(id?: string) {
    this.props.history.push(id ? `/formbuilder/${id}` : `/formbuilder`);
  }

  public viewFormData(formName: string, formId: string) {
    this.props.history.push(`/formDataList/${formName}/${formId}`);
  }

  public viewFormtriggers(formName: string, formId: string) {
    this.props.history.push(`/formTriggerList/${formId}`);
  }

  public componentDidMount() {
    this.fetchFormSchemas(1, 10, '_id', 1);
  }
  public render() {
    const { loading, data, total, length } = this.props;
    return (
      <div className="shadow-container">
        <Can I="read" a="admin">
          <div className="form-group">
            <CButton
              className="btn btn-primary pull-right mb-2"
              onClick={() => this.builderFormSchema()}
              name="Create New Schema"
            />
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
            const { currentPage, length, sortField, sortOrder } = nextState;
            this.fetchFormSchemas(currentPage, length, sortField, sortOrder);
          }}
        />
      </div>
    );
  }

  private fetchFormSchemas = (
    currentPage: number,
    length: number,
    sortField: string,
    sortOrder: number
  ) => {
    this.props.fetchFormSchemaList(length, currentPage, sortField, sortOrder);
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.formSchema.list.data,
  loading: state.formSchema.list.loading,
  total: state.formSchema.list.total
});

const mapDispatchToProps = {
  fetchFormSchemaList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSchemaList);
