import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { createFormSchemaRequest, fetchFormSchemaRequest, updateFormSchemaState } from '../../actions/formschema';
import Builder from '../../components/FormBuilder';
import { IState } from '../../reducers';

interface IFBuilderStateMap {
  form: any;
  isLoading: boolean;
}

interface IFBuilderDispatchMap {
  createFormSchema: (data: any, schemaId?: string) => void;
  fetchFormSchemaRequest: (schemaId: string) => void;
  updateFormSchemaState: (data?: any) => void;
}

interface IFBuilderStateProps {
  formData: any;
  formSchemaId: string;
  name: string;
}

interface IFBuilderMergedProps extends IFBuilderStateMap, IFBuilderDispatchMap, RouteComponentProps<{ id: string }>{

}

class FormBuilder extends React.Component<IFBuilderMergedProps, IFBuilderStateProps> {
  constructor(props: IFBuilderMergedProps) {
    super(props);
    this.state = {
      formData: {},
      formSchemaId: this.props.match ? this.props.match.params.id : '',
      name: ''
    };
  }

  public componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
      this.props.fetchFormSchemaRequest(this.props.match.params.id);
    }
  }

  public componentWillUnmount() {
    this.props.updateFormSchemaState();
  }

  public setFormName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.form.name = e.target.value;
  }

  public saveFormSchema = (): void => {
    const { form } = this.props;
    if (form._id) {
      form.form_type = 'data';
    }
    // name is a required field
    if (form && form.name) {
      this.props.createFormSchema(form, form._id);
    }
  }

  public renderSchema = (schema: any) => {
    //
  }

  public renderComponent = (schema: any, renderMethod: string) => {
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
    const { isLoading, form } = this.props;
    const builderOptions = {
      editForm: {
        textfield: [
          {
            components: [
              {
                'input': true,
                'key': 'isAuditTrail',
                'label': 'Audit Trail',
                'tooltip': 'Check whether audit trail is enabled',
                'type': 'checkbox',
                'weight': 0
              }
            ],
            ignore: false,
            key: 'custom',
            label: 'Custom',
            weight: 60
          }
        ]
      }
    };
    return (
      <div className="shadow-container">
        {!isLoading &&
          <React.Fragment>
            <div>
              <div className="form-group">
                <label className="control-label">Form Name</label> <span className="error-text">*</span>
                <input type="text" defaultValue={form.name} className="form-control" onChange={this.setFormName} required={true}/>
              </div>
            </div>
            <Builder
              formBuilderSchema={form.form_data}
              builderOptions={builderOptions}
              renderSchema={this.renderSchema}
              renderComponent={this.renderComponent}
            />
          </React.Fragment>}
        <div className="row text-right">
          <button className="btn btn-primary" onClick={() => this.saveFormSchema()} >
            {form._id ? 'Update' : 'Create'} Form
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = ({
  createFormSchema: createFormSchemaRequest,
  fetchFormSchemaRequest,
  updateFormSchemaState
});

const mapStateToProps = (state: IState) => ({
  form: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading
});

export default connect<IFBuilderStateMap, IFBuilderDispatchMap, IFBuilderMergedProps, IState>
  (mapStateToProps, mapDispatchToProps)
  (FormBuilder);
