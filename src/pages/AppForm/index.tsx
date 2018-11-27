import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { matchPath, RouteComponentProps } from 'react-router';
import { saveAppFormRequest } from 'src/actions/appform';
import { AppProperties } from 'src/constants/application.properties';
import storage from 'src/utils/storage';
import { fetchFormFieldDataRequest, saveFormFieldDataRequest } from '../../actions/formfielddata';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import Renderer from '../../components/FormRender';
import { IState } from '../../reducers';

interface IRendererDispatchMap {
  fetchFormSchemaRequest: (schemaId?: string) => void;
  fetchFormFieldDataRequest: (name: string, dataId: string) => void;
  saveFormFieldDataRequest: (data: any, formName: string) => void;
  saveAppFormRequest: (api: string, data: any) => void;
}

interface IRendererStateMap {
  formRendererSchema: any;
  submissionData: any;
  isLoading: boolean;
}

interface IRendererSate {
  formData: any;
  formName: string;
  formSchema: {
    organizationData: object;
    roleData: object;
  };
}

interface IAppFormProps {
  match: any;
}

class AppForm extends React.Component<IRendererDispatchMap & IRendererStateMap & RouteComponentProps & IAppFormProps, IRendererSate> {
  public static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.match.params.id !== prevState.formName) {
      return { formName: nextProps.match.params.id};
    } else {
      return null;
    }
  }

  public formio: any;
  constructor(props: IRendererDispatchMap & IRendererStateMap & RouteComponentProps) {
    super(props);
    this.state = {
      formData: {},
      formName: this.props.match.params.id,
      formSchema: {
        organizationData: {'components': [{'label': 'Panel', 'title': 'Create Organization', 'mask': false, 'tableView': false, 'type': 'panel', 'input': false, 'key': 'panel', 'components': [{'label': 'Name', 'allowMultipleMasks': false, 'showWordCount': false, 'showCharCount': false, 'tableView': true, 'type': 'textfield', 'input': true, 'key': 'name', 'validate': {'required': true, 'unique': false, 'customMessage': '', 'json': '', 'custom': '', 'customPrivate': false, 'minLength': '', 'maxLength': '', 'minWords': '', 'maxWords': '', 'pattern': ''}, 'widget': {'type': ''}, 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'conditional': {'show': null, 'when': null, 'eq': ''}, 'mask': false, 'inputType': 'text', 'inputMask': '', 'id': 'erj0lo9'}, {'label': 'Email', 'tableView': true, 'type': 'email', 'input': true, 'key': 'email', 'defaultValue': '', 'validate': {'required': true, 'unique': false, 'customMessage': '', 'json': '', 'custom': '', 'customPrivate': false, 'minLength': '', 'maxLength': '', 'minWords': '', 'maxWords': '', 'pattern': ''}, 'conditional': {'json': '', 'show': null, 'when': null, 'eq': ''}, 'properties': {}, 'logic': [], 'customConditional': '', 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'mask': false, 'inputType': 'email', 'inputMask': '', 'kickbox': {'enabled': false}, 'id': 'em44rq'}, {'label': 'Application Name', 'allowMultipleMasks': false, 'showWordCount': false, 'showCharCount': false, 'tableView': true, 'type': 'textfield', 'input': true, 'key': 'applicationName', 'defaultValue': '', 'validate': {'required': true, 'unique': false, 'customMessage': '', 'json': '', 'custom': '', 'customPrivate': false, 'minLength': '', 'maxLength': '', 'minWords': '', 'maxWords': '', 'pattern': ''}, 'inputFormat': 'plain', 'widget': {'type': ''}, 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'conditional': {'show': null, 'when': null, 'eq': ''}, 'mask': false, 'inputType': 'text', 'inputMask': '', 'id': 'ezj1xxu'}, {'label': 'Is Active', 'shortcut': '', 'mask': false, 'tableView': true, 'type': 'checkbox', 'input': true, 'key': 'isActive', 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': true, 'labelPosition': 'right', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'inputType': 'checkbox', 'value': '', 'name': '', 'id': 'ey0qqh'}, {'label': 'Submit', 'theme': 'primary', 'shortcut': '', 'mask': false, 'tableView': true, 'type': 'button', 'input': true, 'key': 'submit', 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': false, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': true, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'size': 'md', 'leftIcon': '', 'rightIcon': '', 'block': false, 'action': 'submit', 'disableOnInvalid': false, 'id': 'eeue9l'}], 'placeholder': '', 'prefix': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': false, 'hidden': false, 'clearOnHide': false, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'theme': 'default', 'breadcrumb': 'default', 'id': 'ecbdlwb'}]},
        roleData: {'components': [{'label': 'Panel', 'title': 'Create role', 'mask': false, 'tableView': false, 'type': 'panel', 'input': false, 'key': 'panel', 'components': [{'label': 'Name', 'allowMultipleMasks': false, 'showWordCount': false, 'showCharCount': false, 'tableView': true, 'type': 'textfield', 'input': true, 'key': 'name', 'validate': {'required': true, 'unique': false, 'customMessage': '', 'json': '', 'custom': '', 'customPrivate': false, 'minLength': '', 'maxLength': '', 'minWords': '', 'maxWords': '', 'pattern': ''}, 'widget': {'type': ''}, 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'conditional': {'show': null, 'when': null, 'eq': ''}, 'mask': false, 'inputType': 'text', 'inputMask': '', 'id': 'eyg3hhp'}, {'label': 'Active', 'shortcut': '', 'mask': false, 'tableView': true, 'type': 'checkbox', 'input': true, 'key': 'active', 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': true, 'labelPosition': 'right', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'inputType': 'checkbox', 'value': '', 'name': '', 'id': 'eay1p12'}, {'type': 'button', 'label': 'Submit', 'key': 'submit', 'disableOnInvalid': true, 'theme': 'primary', 'input': true, 'tableView': true, 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': false, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': true, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'size': 'md', 'leftIcon': '', 'rightIcon': '', 'block': false, 'action': 'submit', 'id': 'ecejm3j'}], 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': false, 'hidden': false, 'clearOnHide': false, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'theme': 'default', 'breadcrumb': 'default', 'id': 'e29rss'}]}
      }
    };
    const match: any = matchPath(this.props.history.location.pathname, {
      path: '/appforms/:id'
    });
    if (match) {
      this.props.fetchFormSchemaRequest(match.params.id);
    }
  }

  public handleSubmit = (formData: any) => {
    let { submissionData } = this.props;
    submissionData = { ...submissionData, ...formData.data };
    if (submissionData._id) {
      submissionData.updatedBy = storage.getItem(AppProperties.USER_ID);
    } else {
      submissionData.createdBy = storage.getItem(AppProperties.USER_ID);
    }
    delete submissionData.submit;
    this.props.saveAppFormRequest(this.state.formName === 'organization' ? '/organizations' : 'roles', submissionData);
    this.formio.emit('submitDone');
  }

  public onChange = (formData: any) => {
    // tslint:disable-next-line:no-console
    console.log('on change', formData);
  }

  public getFormio = (formio: any) => {
    this.formio = formio;
  }

  public render() {
    const { formName, formSchema } = this.state;
    return (
      <div className="shadow-container full-height">
        <Renderer formRendererSchema={formName === 'organization' ? formSchema.organizationData : formSchema.roleData}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit} getFormio={this.getFormio} />
      </div>
    );
  }
}

const mapDispatchToProps = ({
  fetchFormFieldDataRequest,
  fetchFormSchemaRequest,
  saveAppFormRequest,
  saveFormFieldDataRequest
});

const mapStateToProps = (state: IState) => ({
  formRendererSchema: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  isSubmissionLoading: state.appForm.data,
  submissionData: state.appForm.data
});

export default connect<IRendererStateMap, IRendererDispatchMap>(mapStateToProps, mapDispatchToProps)(AppForm);
