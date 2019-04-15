import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { matchPath, RouteComponentProps } from 'react-router';
import { saveAppFormRequest } from '../../actions/appform';
import { fetchFormFieldDataRequest, saveFormFieldDataRequest } from '../../actions/formfielddata';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import Renderer from '../../components/FormRender';
import { AppProperties } from '../../constants/application.properties';
import { IState } from '../../reducers';
import storage from '../../utils/storage';

interface IRendererDispatchMap {
  fetchFormSchemaRequest: (schemaId: string) => void;
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
    userData: object;
  };
}

interface IAppFormProps extends IRendererDispatchMap, IRendererStateMap, RouteComponentProps {
  match: any;
}

class AppForm extends React.Component<IAppFormProps, IRendererSate> {
  public static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.match.params.id !== prevState.formName) {
      return { formName: nextProps.match.params.id};
    } else {
      return null;
    }
  }

  public formio: any;
  constructor(props: IAppFormProps) {
    super(props);
    this.state = {
      formData: {},
      formName: this.props.match.params.id,
      formSchema: {
        organizationData: {'components': [{'label': 'Panel', 'title': 'Create Organization', 'mask': false, 'tableView': false, 'type': 'panel', 'input': false, 'key': 'panel', 'components': [{'label': 'Name', 'allowMultipleMasks': false, 'showWordCount': false, 'showCharCount': false, 'tableView': true, 'type': 'textfield', 'input': true, 'key': 'name', 'validate': {'required': true, 'unique': false, 'customMessage': '', 'json': '', 'custom': '', 'customPrivate': false, 'minLength': '', 'maxLength': '', 'minWords': '', 'maxWords': '', 'pattern': ''}, 'widget': {'type': ''}, 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'conditional': {'show': null, 'when': null, 'eq': ''}, 'mask': false, 'inputType': 'text', 'inputMask': '', 'id': 'erj0lo9'}, {'label': 'Email', 'tableView': true, 'type': 'email', 'input': true, 'key': 'email', 'defaultValue': '', 'validate': {'required': true, 'unique': false, 'customMessage': '', 'json': '', 'custom': '', 'customPrivate': false, 'minLength': '', 'maxLength': '', 'minWords': '', 'maxWords': '', 'pattern': ''}, 'conditional': {'json': '', 'show': null, 'when': null, 'eq': ''}, 'properties': {}, 'logic': [], 'customConditional': '', 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'mask': false, 'inputType': 'email', 'inputMask': '', 'kickbox': {'enabled': false}, 'id': 'em44rq'}, {'label': 'Application Name', 'allowMultipleMasks': false, 'showWordCount': false, 'showCharCount': false, 'tableView': true, 'type': 'textfield', 'input': true, 'key': 'applicationName', 'defaultValue': '', 'validate': {'required': true, 'unique': false, 'customMessage': '', 'json': '', 'custom': '', 'customPrivate': false, 'minLength': '', 'maxLength': '', 'minWords': '', 'maxWords': '', 'pattern': ''}, 'inputFormat': 'plain', 'widget': {'type': ''}, 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'conditional': {'show': null, 'when': null, 'eq': ''}, 'mask': false, 'inputType': 'text', 'inputMask': '', 'id': 'ezj1xxu'}, {'label': 'Is Active', 'shortcut': '', 'mask': false, 'tableView': true, 'type': 'checkbox', 'input': true, 'key': 'isActive', 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': true, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': true, 'labelPosition': 'right', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'inputType': 'checkbox', 'value': '', 'name': '', 'id': 'ey0qqh'}, {'label': 'Submit', 'theme': 'primary', 'shortcut': '', 'mask': false, 'tableView': true, 'type': 'button', 'input': true, 'key': 'submit', 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': false, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': true, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'size': 'md', 'leftIcon': '', 'rightIcon': '', 'block': false, 'action': 'submit', 'disableOnInvalid': false, 'id': 'eeue9l'}], 'placeholder': '', 'prefix': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': false, 'hidden': false, 'clearOnHide': false, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'theme': 'default', 'breadcrumb': 'default', 'id': 'ecbdlwb'}]},
        roleData: {'components': [{'label': 'Panel', 'title': 'Create role', 'mask': false, 'tableView': false, 'type': 'panel', 'input': false, 'key': 'panel', 'components': [{'label': 'Name', 'allowMultipleMasks': false, 'showWordCount': false, 'showCharCount': false, 'tableView': true, 'type': 'textfield', 'input': true, 'key': 'name', 'validate': {'required': true, 'unique': false, 'customMessage': '', 'json': '', 'custom': '', 'customPrivate': false, 'minLength': '', 'maxLength': '', 'minWords': '', 'maxWords': '', 'pattern': ''}, 'widget': {'type': ''}, 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'conditional': {'show': null, 'when': null, 'eq': ''}, 'mask': false, 'inputType': 'text', 'inputMask': '', 'id': 'eyg3hhp'}, {'label': 'Active', 'shortcut': '', 'mask': false, 'tableView': true, 'type': 'checkbox', 'input': true, 'key': 'active', 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': true, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': true, 'labelPosition': 'right', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'inputType': 'checkbox', 'value': '', 'name': '', 'id': 'eay1p12'}, {'type': 'button', 'label': 'Submit', 'key': 'submit', 'disableOnInvalid': true, 'theme': 'primary', 'input': true, 'tableView': true, 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': false, 'hidden': false, 'clearOnHide': true, 'dataGridLabel': true, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'size': 'md', 'leftIcon': '', 'rightIcon': '', 'block': false, 'action': 'submit', 'id': 'ecejm3j'}], 'placeholder': '', 'prefix': '', 'customClass': '', 'suffix': '', 'multiple': false, 'defaultValue': null, 'protected': false, 'unique': false, 'persistent': false, 'hidden': false, 'clearOnHide': false, 'dataGridLabel': false, 'labelPosition': 'top', 'labelWidth': 30, 'labelMargin': 3, 'description': '', 'errorLabel': '', 'tooltip': '', 'hideLabel': false, 'tabindex': '', 'disabled': false, 'autofocus': false, 'dbIndex': false, 'customDefaultValue': '', 'calculateValue': '', 'widget': null, 'refreshOn': '', 'clearOnRefresh': false, 'validateOn': 'change', 'validate': {'required': false, 'custom': '', 'customPrivate': false}, 'conditional': {'show': null, 'when': null, 'eq': ''}, 'theme': 'default', 'breadcrumb': 'default', 'id': 'e29rss'}]},
        userData: {"components":[{"label":"Panel","title":"Create User","mask":false,"tableView":false,"type":"panel","input":false,"key":"panel","components":[{"label":"First Name","allowMultipleMasks":false,"showWordCount":false,"showCharCount":false,"tableView":true,"type":"textfield","input":true,"key":"first_name","validate":{"required":true,"unique":false,"customMessage":"","json":"","custom":"","customPrivate":false,"minLength":"","maxLength":"","minWords":"","maxWords":"","pattern":""},"widget":{"type":""},"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"dataGridLabel":false,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","refreshOn":"","clearOnRefresh":false,"validateOn":"change","conditional":{"show":null,"when":null,"eq":""},"mask":false,"inputType":"text","inputMask":"","id":"erj0lo9"},{"label":"Last Name","allowMultipleMasks":false,"showWordCount":false,"showCharCount":false,"tableView":true,"type":"textfield","input":true,"key":"last_name","validate":{"required":true,"unique":false,"customMessage":"","json":"","custom":"","customPrivate":false,"minLength":"","maxLength":"","minWords":"","maxWords":"","pattern":""},"widget":{"type":""},"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"dataGridLabel":false,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","refreshOn":"","clearOnRefresh":false,"validateOn":"change","conditional":{"show":null,"when":null,"eq":""},"mask":false,"inputType":"text","inputMask":"","id":"erj0lo9"},{"label":"UserName","allowMultipleMasks":false,"showWordCount":false,"showCharCount":false,"tableView":true,"type":"textfield","input":true,"key":"username","validate":{"required":true,"unique":false,"customMessage":"","json":"","custom":"","customPrivate":false,"minLength":"","maxLength":"","minWords":"","maxWords":"","pattern":""},"widget":{"type":""},"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"dataGridLabel":false,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","refreshOn":"","clearOnRefresh":false,"validateOn":"change","conditional":{"show":null,"when":null,"eq":""},"mask":false,"inputType":"text","inputMask":"","id":"erj0lo9"},{"label":"Email","tableView":true,"type":"email","input":true,"key":"email","defaultValue":"","validate":{"required":true,"unique":false,"customMessage":"","json":"","custom":"","customPrivate":false,"minLength":"","maxLength":"","minWords":"","maxWords":"","pattern":""},"conditional":{"json":"","show":null,"when":null,"eq":""},"properties":{},"logic":[],"customConditional":"","placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"dataGridLabel":false,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","widget":null,"refreshOn":"","clearOnRefresh":false,"validateOn":"change","mask":false,"inputType":"email","inputMask":"","kickbox":{"enabled":false},"id":"em44rq"},{"label":"Organizations","multiple":false,"mask":false,"tableView":true,"type":"select","input":true,"key":"organizations","defaultValue":[],"data":{"url":`${AppProperties.BASE_URL}/organizations-list`,"headers":[{"key":"","value":""}],"values":[],"json":"","resource":"","custom":""},"dataSrc":"url","lazyLoad":false,"selectValues":"data","disableLimit":false,"placeholder":"","prefix":"","customClass":"","suffix":"","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"dataGridLabel":false,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","widget":null,"refreshOn":"","clearOnRefresh":false,"validateOn":"change","validate":{"required":true,"custom":"","customPrivate":false},"conditional":{"show":null,"when":null,"eq":""},"valueProperty":"","filter":"","searchEnabled":true,"searchField":"","minSearch":0,"authenticate":false,"template":"<span>{{item.name}}</span>","selectFields":"","id":"tsukra"},{"label":"Roles","multiple":true,"mask":false,"tableView":true,"type":"select","input":true,"key":"user_roles","defaultValue":[],"data":{"url":`${AppProperties.BASE_URL}/roles-list/{{ row.organizations._id }}`,"headers":[{"key":"","value":""}],"values":[],"json":"","resource":"","custom":""},"dataSrc":"url","lazyLoad":false,"selectValues":"data","disableLimit":false,"placeholder":"","prefix":"","customClass":"","suffix":"","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"dataGridLabel":false,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","widget":null,"refreshOn":"organizations","clearOnRefresh":true,"validateOn":"change","validate":{"required":true,"custom":"","customPrivate":false},"conditional":{"show":null,"when":null,"eq":""},"valueProperty":"","filter":"","searchEnabled":true,"searchField":"","minSearch":0,"authenticate":false,"template":"<span>{{ item.name }}</span>","selectFields":"","id":"esstuo"},{"label":"Password","allowMultipleMasks":false,"showWordCount":false,"showCharCount":false,"tableView":true,"type":"password","input":true,"key":"password","defaultValue":"","validate":{"required":true,"unique":false,"customMessage":"","json":"","custom":"","customPrivate":false,"minLength":"","maxLength":"","minWords":"","maxWords":"","pattern":""},"inputFormat":"plain","widget":{"type":""},"placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"dataGridLabel":false,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","refreshOn":"","clearOnRefresh":false,"validateOn":"change","conditional":{"show":null,"when":null,"eq":""},"mask":false,"inputType":"text","inputMask":"","id":"ezj1xxu"},{"label":"Is Active","shortcut":"","mask":false,"tableView":true,"type":"checkbox","input":true,"key":"isActive","placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":true,"protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"dataGridLabel":true,"labelPosition":"right","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","widget":null,"refreshOn":"","clearOnRefresh":false,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false},"conditional":{"show":null,"when":null,"eq":""},"inputType":"checkbox","value":"","name":"","id":"ey0qqh"},{"label":"Create User","theme":"primary","shortcut":"","mask":false,"tableView":true,"type":"button","input":true,"key":"submit","placeholder":"","prefix":"","customClass":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"hidden":false,"clearOnHide":true,"dataGridLabel":true,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","widget":null,"refreshOn":"","clearOnRefresh":false,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false},"conditional":{"show":null,"when":null,"eq":""},"size":"md","leftIcon":"","rightIcon":"","block":false,"action":"submit","disableOnInvalid":false,"id":"eeue9l"}],"placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":null,"protected":false,"unique":false,"persistent":false,"hidden":false,"clearOnHide":false,"dataGridLabel":false,"labelPosition":"top","labelWidth":30,"labelMargin":3,"description":"","errorLabel":"","tooltip":"","hideLabel":false,"tabindex":"","disabled":false,"autofocus":false,"dbIndex":false,"customDefaultValue":"","calculateValue":"","widget":null,"refreshOn":"","clearOnRefresh":false,"validateOn":"change","validate":{"required":false,"custom":"","customPrivate":false},"conditional":{"show":null,"when":null,"eq":""},"theme":"default","breadcrumb":"default","id":"ecbdlwb"}]}
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
    const { formName } = this.state;
    submissionData = { ...submissionData, ...formData.data };
    if (submissionData._id) {
      submissionData.updatedBy = storage.getItem(AppProperties.USER_ID);
    } else {
      submissionData.createdBy = storage.getItem(AppProperties.USER_ID);
    }
    delete submissionData.submit;
    let appFormType = '';
    if (formName === 'organization') {
      appFormType = '/organizations';
    } else if (formName === 'role') {
      appFormType = 'roles'
    } else {
      appFormType = '/users'
      submissionData.tenant_id = submissionData.organizations._id;
      const roleIds: object[] = [];
      submissionData.user_roles.map((userRole: any) => {
        roleIds.push(userRole._id);
      });
      submissionData.roles = {
        [submissionData.tenant_id]: roleIds
      }
      delete submissionData.organizations;
      delete submissionData.user_roles;
    }
    this.props.saveAppFormRequest(appFormType, submissionData);
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
    let formData = {};
    if (formName === 'organization') {
      formData = formSchema.organizationData;
    } else if (formName === 'role') {
      formData = formSchema.roleData;
    } else {
      formData = formSchema.userData;
    }
    return (
      <div className="shadow-container full-height">
        <Renderer formRendererSchema={formData}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit} getFormio={this.getFormio} />
      </div>
    );
  }
}

const mapDispatchToProps: IRendererDispatchMap = ({
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

export default connect<IRendererStateMap, IRendererDispatchMap, IAppFormProps, IState>
  (mapStateToProps, mapDispatchToProps)
  (AppForm);
