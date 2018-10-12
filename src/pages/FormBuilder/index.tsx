import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { createFormSchemaRequest, fetchFormSchemaRequest } from '../../actions/formschema';
import Builder from '../../components/FormBuilder';
import { IState } from '../../reducers';

interface IFBuilderStateMap {
  form: any;
  isLoading: boolean;
}

interface IFBuilderDispatchMap {
  createFormSchema: (data: any, schemaId?: string) => void;
  fetchFormSchemaRequest: (schemaId: string) => void;
}

interface IFBuilderStateProps {
  formData: any;
  formSchemaId: string;
  name: string;
}

class FormBuilder extends React.Component<IFBuilderStateMap & IFBuilderDispatchMap & RouteComponentProps<{ id: string }>, IFBuilderStateProps> {
  constructor(props: IFBuilderStateMap & IFBuilderDispatchMap & RouteComponentProps<{ id: string }>) {
    super(props);
    this.state = {
      formData: {},
      formSchemaId: this.props.match.params.id,
      name: ''
    };
  }

  public componentDidMount() {
    if (this.props.match) {
      this.props.fetchFormSchemaRequest(this.props.match.params.id);
    }
  }

  public setFormName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.form.name = e.target.value;
  }

  public saveFormSchema = (): void => {
    const { form } = this.props;
    if (form._id) {
      form.formType = 'data';
      form.nameSingular = form.name;
    }
    this.props.createFormSchema(form, form._id);
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
      <div>
        {!isLoading &&
          <React.Fragment>
            <div>
              <div className="form-group">
                <label className="control-label">Form Name</label>
                <input type="text" defaultValue={form.name} className="form-control" onChange={this.setFormName} />
              </div>
            </div>
            <Builder
              formBuilderSchema={form.formData}
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
  fetchFormSchemaRequest
});

const mapStateToProps = (state: IState) => ({
  form: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading
});

export default connect<IFBuilderStateMap, IFBuilderDispatchMap>(mapStateToProps, mapDispatchToProps)(FormBuilder);



