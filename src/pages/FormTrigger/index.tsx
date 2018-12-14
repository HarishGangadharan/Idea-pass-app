import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFormSchemaList, fetchFormSchemaRequest } from '../../actions/formschema';
import { fetchFormTriggerRequest, fetchSourceFormFieldsRequest, fetchTargetFormFieldsRequest, saveFormTriggerRequest, updateFormTriggerState } from '../../actions/formTrigger';
import { BaseIcon } from '../../components';
import CreateTriggerComponent from '../../components/CreateTriggerComponent';
import QueryBuilder from '../../components/Triggers/QueryBuilder';
import { IState } from '../../reducers';
import { IFormSchema } from '../../reducers/formschema';
import { ITrigger, ITriggerAction } from '../../reducers/formTrigger';
import './formTrigger.css';

interface ITriggerDispatchMap {
  fetchFormSchemaRequest: (schemaId: string, callBack?: (form: IFormSchema) => void) => void;
  fetchFormTriggerRequest: (triggerId: string, callBack?: (trigger: ITrigger) => void) => void;
  saveFormTriggerRequest: (data: any, triggerId?: string) => void;
  updateFormTriggerState: (data?: any) => void;
  fetchFormSchemaList: () => void;
  fetchSourceFormFieldsRequest: (formName: string) => void;
  fetchTargetFormFieldsRequest: (formName: string) => void;
}

interface ITriggerStateMap {
  formRendererSchema: any;
  triggerData: ITrigger;
  sourceFormFields: any;
  targetFormFields: any;
  isLoading: boolean;
  isTriggerLoading: boolean;
  formList: any;
  sourceFormFieldsLoading: boolean;
  targetFormFieldsLoading: boolean;
}

interface ITriggerState {
  action: ITriggerAction;
  actionIndex?: number;
  actionTypeList: any[];
  currentFormName: string;
  showPopup: boolean;
  targetForm: string;
  trigger: ITrigger;
}

interface IMergedProps extends ITriggerStateMap, ITriggerDispatchMap, RouteComponentProps {

}

class FormTrigger extends React.Component<IMergedProps, ITriggerState> {
  public formio: any;
  constructor(props: IMergedProps) {
    super(props);
    this.state = {
      action: {
        sequence: '1',
        type: ''
      },
      actionTypeList: [
        { value: 'fill', label: 'Fill' },
        { value: 'self-fill', label: 'Self Fill' },
        { value: 'insert', label: 'Insert' },
        { value: 'update', label: 'Update' },
        { value: 'validate', label: 'Validate' }
      ],
      currentFormName: '',
      showPopup: false,
      targetForm: '',
      trigger: {
        ...this.props.triggerData
      }
    };
  }

  public getRandom() {
    return Math.random().toString(36).substr(2, 36);
  }

  public componentDidMount() {
    const match: any = this.props.match;
    const formCallBack = (form: IFormSchema) => {
      this.props.fetchSourceFormFieldsRequest(form.name_singular);
      this.setState((state: ITriggerState) => {
        state.currentFormName = form.name;
        state.trigger.form = form._id,
          state.trigger.qualification = {
            id: this.getRandom(),
            rules: []
          };
      });
    };
    const triggerCallBack = (trigger: ITrigger) => {
      this.setState({ trigger });
    };
    if (match) {
      const { params: { triggerId, id } } = match;
      this.props.fetchFormSchemaRequest(id, formCallBack);
      if (triggerId) {
        this.props.fetchFormTriggerRequest(triggerId, triggerCallBack);
      }
    }
  }

  public saveFormTrigger = (): any => {
    const { trigger, action } = this.state;
    if (action.type && !confirm(`You didn't save the action, Do you want to continue?`)) {
      return;
    }
    this.props.saveFormTriggerRequest(trigger, trigger._id);
    this.props.updateFormTriggerState();
  }

  public saveTriggerAction = () => {
    const { action, actionIndex } = this.state;
    this.setState((state: ITriggerState) => {
      if (actionIndex !== undefined) {
        state.trigger.actions[actionIndex] = action;
      }
    });
    this.setState({ action: { type: '', sequence: '1' }, actionIndex: undefined });
  }

  public handleTriggerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const targetElem = e.target;
    this.setState((state: ITriggerState) => {
      if (targetElem.type === 'checkbox') {
        state.trigger[field] = !state.trigger[field];
      } else {
        state.trigger[field] = targetElem.value;
      }
    });
  }

  public onActionChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>,
    field: string) => {
    e.persist();
    if (e.target.type === 'checkbox') {
      this.setState((state: ITriggerState) => {
        state.action[field] = !state.action[field];
      });
    } else {
      this.setState((state: ITriggerState) => {
        if (field === 'form') {
          state.action[field] = e.target.value;
          this.props.formList.some((form: any) => {
            if (form._id === e.target.value) {
              state.targetForm = form.name_singular;
              this.props.fetchTargetFormFieldsRequest(form.name_singular);
            }
          });
        } else {
          state.action[field] = e.target.value;
        }
      });
    }
  }

  public addActionQualification(action: ITriggerAction, removeFieldMap?: boolean) {
    action.matching_qualification = {
      id: this.getRandom(),
      rules: []
    };
    action.form = '';
    if (!removeFieldMap) {
      this.addActionFieldMap(action);
    }
  }

  public addActionFieldMap(action: ITriggerAction) {
    action.field_mapping = {
      id: this.getRandom(),
      rules: []
    };
  }

  public chooseActionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.persist();
    const type = e.target.value;
    let action = this.state.action;
    action = {
      sequence: '1',
      type
    };
    switch (type) {
      case 'fill':
        this.addActionQualification(action);
        this.props.fetchFormSchemaList();
        break;
      case 'self-fill':
        const { name_singular } = this.props.formRendererSchema;
        this.setState({ targetForm: name_singular });
        this.props.fetchTargetFormFieldsRequest(name_singular);
        this.addActionFieldMap(action);
        break;
      case 'insert':
        this.addActionQualification(action);
        action.isBefore = false;
        this.props.fetchFormSchemaList();
        break;
      case 'update':
        this.addActionQualification(action);
        action.isBefore = false;
        this.props.fetchFormSchemaList();
        break;
      case 'validate':
        this.addActionQualification(action, true);
        action.form = '';
        break;
      default:
        break;
    }
    this.setState({ action });
  }

  public logQualificationsQuery = (loggedQuery: any) => {
    this.setState((state: ITriggerState) => {
      return state.trigger.qualification = loggedQuery;
    });
  }

  public logMatchingQualificationsQuery = (loggedQuery: any) => {
    this.setState((state: ITriggerState) => {
      return state.action.matching_qualification = loggedQuery;
    });
  }

  public logFieldMapping = (loggedQuery: any) => {
    this.setState((state: ITriggerState) => {
      return state.action.field_mapping = loggedQuery;
    });
  }

  public selectAction(action: ITriggerAction, actionIndex: number) {
    this.setState({ action, actionIndex });
    this.handleHidePopup();
  }

  public removeAction = (index: number) => {
    const { trigger } = this.state;
    trigger.actions.splice(index, 1);
    this.setState({});
  }

  public handleHidePopup = () => {
    this.setState({ showPopup: false });
  }

  public addNewAction = () => {
    const { trigger } = this.state;
    const actionIndex = trigger.actions.length;
    this.setState({ actionIndex });
  }

  public componentWillUnmount = () => {
    this.props.updateFormTriggerState();
  }

  public render() {
    const { actionTypeList, trigger, actionIndex, action, currentFormName } = this.state;
    const { formList, sourceFormFields, sourceFormFieldsLoading, targetFormFields, isTriggerLoading } = this.props;
    return (
      <div className="row">
        {!isTriggerLoading && <div>
          <div className="col-md-4 col-xs-12">
            <CreateTriggerComponent
              trigger={trigger}
              formName={currentFormName}
              onTriggerChange={this.handleTriggerChange} />
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="shadow-container">
              <div className="title">
                <h4>Qualifications</h4>
              </div>
              {!sourceFormFieldsLoading && <QueryBuilder
                fields={[{ label: 'Source', value: '' }, ...sourceFormFields]}
                targetFields={[{ label: 'Target', value: '' }, ...sourceFormFields]}
                query={trigger.qualification}
                customRules={{ isOldValue: false}}
                onQueryChange={this.logQualificationsQuery} />}
            </div>
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="shadow-container">
              <div className="title">
                <h4>Actions {trigger.actions.length > 0 &&
                  <span className="badge btn btn-primary" onClick={() => this.setState({ showPopup: true })}>
                    {trigger.actions.length}
                  </span>}
                </h4>
              </div>
              {typeof actionIndex === 'undefined' ?
                <div className="text-center">
                  <BaseIcon
                    display="inline"
                    name="PlusCircle"
                    size={28}
                    onClick={this.addNewAction}
                  />
                </div> :
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="row">
                      Action - {actionIndex + 1}
                      <button className="btn btn-primary pull-right" onClick={this.saveTriggerAction}>Add</button>
                    </div>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label htmlFor="type">Type</label>
                      <select className="form-control" defaultValue={action.type}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.chooseActionType(e)}>
                        <option value="">Select Action</option>
                        {actionTypeList.map((actionType, actionTypeIndex) => (<option key={actionTypeIndex} value={actionType.value}>{actionType.label}</option>))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="sequence">Sequence</label>
                      <input type="number" name="sequence" defaultValue={action.sequence} className="form-control" required={true}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onActionChange(e, 'sequence')} />
                    </div>
                    {('isBefore' in action) &&
                      <div className="form-group">
                        <input type="checkbox" name="isBefore" defaultChecked={action.isBefore} required={true}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onActionChange(e, 'isBefore')} /> Is Before
                    </div>}
                    {('form' in action) &&
                      <div className="form-group">
                        <label htmlFor="form">Form to fill</label>
                        <select className="form-control" defaultValue={action.form}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.onActionChange(e, 'form')}>
                          <option value="">Select Form</option>
                          {formList.map((form: any, formIndex: number) => (<option key={formIndex} value={form._id}>{form.name}</option>))}
                        </select>
                      </div>}
                    {('matching_qualification' in action) &&
                      <div className="panel panel-default">
                        <div className="panel-heading">Matching Qualifications</div>
                        <div className="panel-body">
                          {!sourceFormFieldsLoading && <QueryBuilder
                            fields={[{ label: 'Source', value: '' }, ...sourceFormFields]}
                            targetFields={[{ label: 'Target', value: '' }, ...targetFormFields]}
                            operators={[{ name: '=', label: '=' }, { name: 'null', label: 'isNull' }]}
                            query={action.matching_qualification}
                            onQueryChange={(query: any) => this.logMatchingQualificationsQuery(query)} />}
                        </div>
                      </div>}
                    {('field_mapping' in action) &&
                      <div className="panel panel-default">
                        <div className="panel-heading">Mapping Fields</div>
                        <div className="panel-body">
                          {!sourceFormFieldsLoading && <QueryBuilder
                            fields={[{ label: 'Source', value: '' }, ...sourceFormFields]}
                            targetFields={[{ label: 'Target', value: '' }, ...targetFormFields]}
                            disableCombinators={true}
                            disableGroupAction={true}
                            operators={[{ name: '=', label: '=' }]}
                            customRules={{ customValue: '' }}
                            query={action.field_mapping}
                            onQueryChange={(query: any) => this.logFieldMapping(query)} />}
                        </div>
                      </div>}
                  </div>
                </div>}
            </div>
          </div>
          <div className="footer-fab-right mb-10 mr-10">
            <div className="form-group">
              <button className="btn btn-primary btn-round" onClick={() => this.saveFormTrigger()}>
                <BaseIcon
                  name="Save"
                  display="inline-block"
                  size={24}
                  classname="ml-5"
                />
              </button>
            </div>
          </div>
        </div>}
        {!isTriggerLoading && <Modal
          show={this.state.showPopup}
          onHide={this.handleHidePopup}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton={true}>
            <Modal.Title id="contained-modal-title">
              Actions
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul className="list-group">
              {trigger.actions.map((savedAction, index) =>
                (<li className="list-group-item" key={index} >Action {index + 1}
                  <span className="action-icons pull-right">
                    <BaseIcon
                      name="Edit"
                      display="inline-block"
                      classname="mr-10"
                      onClick={() => this.selectAction(savedAction, index)}
                    />
                    <BaseIcon
                      name="Trash2"
                      display="inline-block"
                      onClick={() => this.removeAction(index)}
                    />
                  </span>
                </li>))
              }
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHidePopup}>Close</Button>
          </Modal.Footer>
        </Modal>}
      </div>
    );
  }
}

const mapDispatchToProps : ITriggerDispatchMap = ({
  fetchFormSchemaList,
  fetchFormSchemaRequest,
  fetchFormTriggerRequest,
  fetchSourceFormFieldsRequest,
  fetchTargetFormFieldsRequest,
  saveFormTriggerRequest,
  updateFormTriggerState
});

const mapStateToProps = (state: IState): ITriggerStateMap => ({
  formList: state.formSchema.list.data,
  formRendererSchema: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  isTriggerLoading: state.formTrigger.trigger.isLoading,
  sourceFormFields: state.formTrigger.sourceFormFields.data,
  sourceFormFieldsLoading: state.formTrigger.sourceFormFields.isLoading,
  targetFormFields: state.formTrigger.targetFormFields.data,
  targetFormFieldsLoading: state.formTrigger.targetFormFields.isLoading,
  triggerData: state.formTrigger.trigger.data
});

export default connect<ITriggerStateMap, ITriggerDispatchMap, IMergedProps, IState>
  (mapStateToProps, mapDispatchToProps)
  (FormTrigger);
