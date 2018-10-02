import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { matchPath } from 'react-router';
import { createFormSchemaRequest, fetchFormSchemaRequest } from '../../actions/formschema';
import Builder from '../../components/FormBuilder';
import { IState } from '../../reducers';

interface IFBuilderProps {
  createFormSchema: (data: any, schemaId?: string) => void;
  fetchFormSchemaRequest: (schemaId?: string) => void;
}

interface IFBuilderStateProps {
  form: any;
  isLoading: boolean;
}

class FormBuilder extends React.Component<IFBuilderProps & IFBuilderStateProps & RouteComponentProps> {
  constructor(props: IFBuilderProps & IFBuilderStateProps & RouteComponentProps) {
    super(props);
    const match: any = matchPath(this.props.history.location.pathname, {
      path: '/formBuilder/:id'
    });
    if (match) {
      this.props.fetchFormSchemaRequest(match.params.id);
    }
  }

  public setFormName(e: React.ChangeEvent<HTMLInputElement>) {
    const { form } = this.props;
    form.name = e.target.value;
    form.nameSingular = `${form.name}123`;
  }

  public gotoFormSchemaList(): void {
    const { form } = this.props;
    this.props.createFormSchema(form, form._id);
    this.props.history.push('/hello');
  }

  public renderSchema(schema: any) {
    const { form } = this.props;
    form.formData = schema;
  }

  public renderComponent(schema: any, renderMethod: string) {
    switch (renderMethod) {
      case 'save':
        break;
      case 'edit':
        break;
      case 'update':
        break;
      case 'delete':
        break;
      case 'cancel':
        break;
      default:
        break;
    }
  }

  public render() {
    const { form, isLoading } = this.props;
    return (
      <div className="container">
        <div className="container">
          <div className="form-group">
            <label className="control-label">Form Name</label>
            <input type="text" defaultValue={form.name} className="form-control" onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setFormName(e)}/>
          </div>
        </div>
        {!isLoading && <Builder formBuilderSchema={form.formData}
          renderSchema={(schema: any) => { this.renderSchema(schema); }}
          renderComponent={(component: any, renderMethod: string) => { this.renderComponent(component, renderMethod); }} />}
        <div className="row text-right">
          <button className="btn btn-primary" onClick={() => this.gotoFormSchemaList()} >
            Create Form
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  createFormSchema: (data: any, schemaId?: string) => dispatch(createFormSchemaRequest(data, schemaId)),
  fetchFormSchemaRequest: (schemaId?: string) => dispatch(fetchFormSchemaRequest(schemaId))
});

const mapStateToProps = (state: IState) => ({
  form: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.isLoading
});

export default connect<{}, IFBuilderProps>(mapStateToProps, mapDispatchToProps)(FormBuilder);






