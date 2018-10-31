import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { matchPath } from 'react-router';
import { createFormSchemaRequest, fetchFormSchemaRequest } from '../../actions/formschema';
import Builder from '../../components/FormBuilder';
import { IState } from '../../reducers';

interface IFBuilderStateMap {
  form: any;
  isLoading: boolean;
}

interface IFBuilderDispatchMap {
  createFormSchema: (data: any, schemaId?: string) => void;
  fetchFormSchemaRequest: (schemaId: string, callback?: (formSchemaId: string, formData: any, name: string) => void) => void;
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
    const match: any = matchPath(this.props.history.location.pathname, {
      path: '/formBuilder/:id'
    });
    if (match) {
      this.props.fetchFormSchemaRequest(match.params.id, (formSchemaId: string, formData: any, name: string) => {
        this.setState({
          formData,
          formSchemaId,
          name
        });
      });
    }
  }

  public setFormName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value
    });
  }

  public gotoFormSchemaList = (): void => {
    const { formData, formSchemaId, name } = this.state;
    this.props.createFormSchema({
      formData,
      formType: 'data',
      name,
      nameSingular: `${name}`
    }, formSchemaId);
    // this.props.history.push('/formschemalist');
  }

  public renderSchema = (schema: any) => {
    this.setState({
      formData: schema
    });
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
    const { isLoading } = this.props;
    const { name, formData, formSchemaId } = this.state;
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
                <input type="text" defaultValue={name} className="form-control" onChange={this.setFormName} />
              </div>
            </div>
            <Builder
              formBuilderSchema={formData}
              builderOptions={builderOptions}
              renderSchema={this.renderSchema}
              renderComponent={this.renderComponent}
            />
          </React.Fragment>}
        <div className="row text-right">
          <button className="btn btn-primary" onClick={() => this.gotoFormSchemaList()} >
            {formSchemaId ? 'Update' : 'Create'} Form
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



