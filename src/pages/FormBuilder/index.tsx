import * as React from 'react';
import {
  Translate,
  withLocalize
} from 'react-localize-redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { compose } from 'redux';
import { createFormSchemaRequest, fetchFormSchemaRequest, fetchTemplateList, updateFormSchemaState } from '../../actions/formschema';
import Builder from '../../components/FormBuilder';
import { IState } from '../../reducers';
import { IFormSchema } from '../../reducers/formschema';
interface IFBuilderStateMap {
  form: any;
  isLoading: boolean;
  templates: IFormSchema[];
}

interface IFBuilderDispatchMap {
  createFormSchema: (data: any, schemaId?: string) => void;
  fetchFormSchemaRequest: (schemaId: string) => void;
  fetchTemplateList: (callback?: (templates: IFormSchema[]) => void) => void;
  updateFormSchemaState: (data?: any) => void;
}

interface IFBuilderStateProps {
  formData: any;
  formSchemaId: string;
  name: string;
}

interface IFormBuildSchema {
  icon: string;
  key: string;
  title: string;
  weight: number;
  schema: {
    type: 'template',
    components: any[]
  }
}
interface IBuilderOptions {
  [key: string]: any;
  builder: {
    [key: string]: any;
    custom: {
      title: string;
      weight: number;
      components: {
        [key: string]: IFormBuildSchema | boolean;
      }
    }
  }
}

interface IFBuilderMergedProps extends IFBuilderStateMap, IFBuilderDispatchMap, RouteComponentProps<{ id: string }> {

}

class FormBuilder extends React.Component<IFBuilderMergedProps, IFBuilderStateProps> {
  public formTypes: Array<{ id: string, name: string }>;
  public templateTypes: Array<{ id: string, name: string }>;
  public formBuildSchema: IFormBuildSchema = {
    icon: 'fa fa-folder',
    key: '',
    schema: {
      components: [],
      type: 'template'
    },
    title: '',
    weight: 0
  };
  public builderOptions: IBuilderOptions = {
    builder: {
      custom: {
        components: {},
        title: 'Form Templates',
        weight: 40
      }
    }
  };
  constructor(props: IFBuilderMergedProps) {
    super(props);
    this.state = {
      formData: {},
      formSchemaId: this.props.match ? this.props.match.params.id : '',
      name: ''
    };
    this.formTypes = [{ id: 'data', name: 'Data' }, { id: 'ticket', name: 'Ticket' }];
    this.templateTypes = [
      { id: 'default', name: 'Default' },
      { id: 'app_form', name: 'Application Form' },
      { id: 'template_form', name: 'Template Form' }
    ];
  }

  public componentDidMount() {
    if (this.props.match && this.props.match.params.id) {
      this.props.fetchFormSchemaRequest(this.props.match.params.id);
    }
    const renderTemplateList = (templates: IFormSchema[]) => {
      templates.forEach((template: any, index) => {
        const templateSchema: any = {...this.formBuildSchema};
        templateSchema.title = template.name;
        templateSchema.key = template.name_singular;
        templateSchema.weight = index;
        const formMeta = templateSchema.schema;
        formMeta.label = template.name;
        formMeta.ref = template.name;
        formMeta.key = template.name_singular;
        formMeta.components = [...JSON.parse(template.form_data).components];
        templateSchema.schema = {...formMeta};
        this.builderOptions.builder.custom.components[template.name_singular] = {...templateSchema};
      });
    };
    this.props.fetchTemplateList(renderTemplateList);
  }

  public componentWillUnmount() {
    this.props.updateFormSchemaState();
  }

  public setFormNameAndType = (e: any) => {
    const fieldName = e.target.id;
    this.props.form[fieldName] = e.target.value;
  }

  public saveFormSchema = (): void => {
    const { form } = this.props;
    if (!form._id) {
      delete form._id;
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
    const { formTypes, templateTypes } = this;
    return (
      <div className="shadow-container">
        {!isLoading &&
          <React.Fragment>
            <div className="row mb-10">
              <div className="col-md-6">
                <label className="control-label">
                  <Translate id="label.formName" />
                </label> <span className="error-text">*</span>
                <input
                  type="text"
                  id="name"
                  defaultValue={form.name}
                  className="form-control"
                  onChange={this.setFormNameAndType}
                  required={true}
                />
              </div>
              <div className="col-md-3">
                <label className="control-label"><Translate id="label.formType" /></label> <span className="error-text">*</span>
                <select className="form-control" id="form_type" defaultValue={form.form_type} onChange={this.setFormNameAndType}>
                  {formTypes.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
                </select>
              </div>
              <div className="col-md-3">
                <label className="control-label"><Translate id="label.templateType" /></label> <span className="error-text">*</span>
                <select className="form-control" id="template_type" defaultValue={form.template_type} onChange={this.setFormNameAndType}>
                  {templateTypes.map((template) => <option key={template.id} value={template.id}>{template.name}</option>)}
                </select>
              </div>
            </div>
            <Builder
              formBuilderSchema={form.form_data}
              builderOptions={this.builderOptions}
              renderSchema={this.renderSchema}
              renderComponent={this.renderComponent}
            />
          </React.Fragment>
        }
        <div className="row text-right">
          <button className="btn btn-primary" onClick={() => this.saveFormSchema()} >
            <Translate id={form._id ? 'label.updateForm' : 'label.createForm'} />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = ({
  createFormSchema: createFormSchemaRequest,
  fetchFormSchemaRequest,
  fetchTemplateList,
  updateFormSchemaState
});

const mapStateToProps = (state: IState) => ({
  form: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  templates: state.formSchema.templateList.data
});

export default compose(connect<IFBuilderStateMap, IFBuilderDispatchMap, IFBuilderMergedProps, IState>
  (mapStateToProps, mapDispatchToProps),
  withLocalize)(FormBuilder);
