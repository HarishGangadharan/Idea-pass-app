import * as React from 'react';
import {
  Translate,
  withLocalize
} from 'react-localize-redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { compose } from 'redux';
import { createFormSchemaRequest, fetchFormSchemaRequest, fetchTemplateList, updateFormSchemaState, clearFormSchemeData } from '../../actions/formschema';
import Builder from '../../components/FormBuilder';
import { IState } from '../../reducers';
import { IFormSchema } from '../../reducers/formschema';
interface IFBuilderStateMap {
  form: any;
  isLoading: boolean;
  isTemplateLoading: boolean;
  templates: IFormSchema[];
}

interface IFBuilderDispatchMap {
  createFormSchema: (data: any, schemaId?: string) => void;
  fetchFormSchemaRequest: (schemaId: string) => void;
  fetchTemplateList: (callback?: (templates: IFormSchema[]) => void) => void;
  updateFormSchemaState: (data?: any) => void;
  clearFormSchemeData: () => void
}

interface IFBuilderStateProps {
  formData: any;
  formSchemaId: string;
  name: string;
  isFormNameEmpty: boolean;
  isFormPrefixValid: boolean;
  templateType: string;
  idType: string;
  isActive: boolean;
  sequence: number;
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
  public idTypes: Array<{ id: string, name: string }>;

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
      name: '',
      isFormNameEmpty: false,
      isFormPrefixValid: false,
      templateType : 'Default',
      idType:'Auto increment',
      isActive: true,
      sequence: 1
    };
    this.formTypes = [{ id: 'data', name: 'Data' }, { id: 'ticket', name: 'Ticket' }];
    this.templateTypes = [
      { id: 'default', name: 'Default' },
      { id: 'app_form', name: 'Application Form' },
      { id: 'template_form', name: 'Template Form' },
      { id: 'core_fields', name: 'Core Fields' }
    ];
    this.idTypes = [
      { id: 'auto_increment', name: 'Auto increment' },
      { id: 'custom', name: 'Custom' }
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
    this.props.clearFormSchemeData();
  }

  public setFormNameAndType = (e: any) => {
    const fieldName = e.target.id;
    this.props.form[fieldName] = e.target.value;
    this.setState({
      templateType: e.target.value,
      isFormNameEmpty: false
    })
  }

  public setIdTpyes = (e: any) => {
    console.log('1111111111', e.target.value)
    this.props.form[e.target.id] = e.target.value;
    this.setState({
      idType: e.target.value,
      isFormNameEmpty: false
    })
  }
  
  public setFormPrefix = (e: any) => {
    const fieldName = e.target.id;
    this.props.form[fieldName] = e.target.value;
    this.setState({isFormPrefixValid: false});
  }

  public saveFormSchema = (): void => {
    let { form } = this.props;
    const {isActive, sequence, templateType} = this.state 
    const isPrefixValid = !form.prefix || (form.prefix && form.prefix.length < 6);
    if (form && form.name === '') {
      this.setState({
        isFormNameEmpty: true
      });
    }
    if(isPrefixValid) {
      this.setState({
        isFormPrefixValid: true
      })
    }
    if (!form._id) {
      delete form._id;
    }
    // name is a required field
    if (form && form.name && !isPrefixValid) {
      if (templateType === "core_fields") {
        form = Object.assign(form, {is_active: isActive, sequence: sequence })
      }
      console.log('**************', form)
      this.props.createFormSchema(form, form._id);
    }
  }

  public cancelUpdateSchema = (): void => {
    this.props.history.goBack();
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
    const { isLoading, form, isTemplateLoading } = this.props;
    console.log('form', form, this.state.idType, this.state.templateType)
    const { isActive, sequence, templateType, isFormPrefixValid } = this.state;
    const { formTypes, templateTypes, idTypes } = this;
    return (
      <div className="shadow-container">
        {!isLoading &&
          <React.Fragment>
            <div className="row mb-3">
              
              <div  className="col-md-2">
                <label className="control-label">
                  <Translate id="label.prefix" />
                </label> <span className="error-text">*</span>
                <input
                  type="text"
                  id="prefix"
                  defaultValue={form.prefix}
                  className="form-control"
                  onChange={this.setFormPrefix}
                  required={true}
                />
                {isFormPrefixValid &&
                  <span className="error-text">Provide a valid prefix</span>
                }
              </div>
              
              <div className="col-md-4">
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
                {this.state.isFormNameEmpty &&
                  <span className="error-text">Form Name is mandatory</span>
                }
              </div>
              
              <div className="col-md-2">
                <label className="control-label"><Translate id="label.formType" /></label> <span className="error-text">*</span>
                <select className="form-control" id="form_type" defaultValue={form.form_type} onChange={this.setFormNameAndType}>
                  {formTypes.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)}
                </select>
              </div>
              <div className="col-md-2">
                <label className="control-label"><Translate id="label.templateType" /></label> <span className="error-text">*</span>
                <select className="form-control" id="template_type" defaultValue={form.template_type} onChange={this.setFormNameAndType}>
                  {templateTypes.map((template) => <option key={template.id} value={template.id}>{template.name}</option>)}
                </select>
              </div>
              <div className="col-md-2">
                <label className="control-label"><Translate id="label.idType" /></label> <span className="error-text">*</span>
                <select className="form-control" id="id_type" defaultValue={form.id_type} onChange={this.setFormNameAndType}>
                  {idTypes.map((template) => <option key={template.id} value={template.id}>{template.name}</option>)}
                </select>
              </div>
            </div>

            {templateType === "core_fields" &&
            <div className="row mb-3 d-flex align-items-center">
              <div className="col-md-3">
              <label className="control-label">
                Sequence
              </label>
              <input 
                type="number" 
                name="sequence" 
                value={sequence}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({sequence: parseInt(e.target.value)})}
                className="form-control"
                />
              </div>
              <div className="col-md-3 mt-20">
              <input 
                type="checkbox" 
                name="is_active" 
                defaultChecked={isActive} 
                className="mt-0 mr-2"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({isActive: e.target.checked})} /> 
                <span>Is Active</span>
              </div>
            </div>}
            {!isTemplateLoading && <Builder
              formBuilderSchema={form.form_data}
              builderOptions={this.builderOptions}
              renderSchema={this.renderSchema}
              renderComponent={this.renderComponent}
            />}
          </React.Fragment>
        }
        <div className="row d-flex justify-content-end mt-3">
          <button className="btn btn-primary mr-3" onClick={() => this.cancelUpdateSchema()} >
            <Translate id="label.cancel" />
          </button>
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
  updateFormSchemaState,
  clearFormSchemeData
});

const mapStateToProps = (state: IState) => ({
  form: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  isTemplateLoading: state.formSchema.templateList.loading,
  templates: state.formSchema.templateList.data
});

export default compose(connect<IFBuilderStateMap, IFBuilderDispatchMap, IFBuilderMergedProps, IState>
  (mapStateToProps, mapDispatchToProps),
  withLocalize)(FormBuilder);
