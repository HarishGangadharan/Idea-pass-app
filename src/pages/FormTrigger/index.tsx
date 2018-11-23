import * as React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { BaseIcon } from 'src/components';
import CreateTriggerComponent from 'src/components/CreateTriggerComponent';
import { ITrigger, ITriggerAction } from 'src/reducers/formTrigger';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import { fetchFormTriggerRequest, saveFormTriggerRequest, updateFormTriggerState } from '../../actions/formTrigger';
import QueryBuilder from '../../components/Triggers/QueryBuilder';
import { IState } from '../../reducers';
import './formTrigger.css';

interface ITriggerDispatchMap {
  fetchFormSchemaRequest: (schemaId?: string, callback?: (name: string) => void) => void;
  fetchFormTriggerRequest: (triggerId: string) => void;
  saveFormTriggerRequest: (data: any, triggerId?: string) => void;
  updateFormTriggerState: (data?: any) => void;
}

interface ITriggerStateMap {
  formRendererSchema: any;
  triggerData: any;
  isLoading: boolean;
  isTriggerLoading: boolean;
}

interface ITriggerState {
  action: ITriggerAction;
  actionIndex?: number;
  actionTypeList: any[];
  trigger: ITrigger;
  showPopup: boolean;
}

class FormTrigger extends React.Component<ITriggerDispatchMap & ITriggerStateMap & RouteComponentProps, ITriggerState> {
  public formio: any;
  constructor(props: ITriggerDispatchMap & ITriggerStateMap & RouteComponentProps) {
    super(props);
    this.state = {
      action: {
        type: ''
      },
      actionTypeList: [
        { value: 'fill', label: 'Fill' },
        { value: 'self-fill', label: 'Self Fill' },
        { value: 'insert', label: 'Insert' },
        { value: 'update', label: 'Update' },
        { value: 'veto', label: 'Veto' }
      ],
      showPopup: false,
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
    if (match) {
      const { params: { triggerId, id } } = match;
      this.props.fetchFormSchemaRequest(id);
      if (triggerId) {
        this.props.fetchFormTriggerRequest(triggerId);
      }
    }
  }

  public saveFormTrigger = () => {
    const { trigger } = this.state;
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
    this.setState({ action: { type: '' }, actionIndex: undefined });
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
        state.action[field] = e.target.value;
      });
    }
  }

  public addActionQualification(action: ITriggerAction) {
    action.matchingQualification = {
      id: this.getRandom(),
      rules: []
    };
    action.form = '';
    this.addActionFieldMap(action);
  }

  public addActionFieldMap(action: ITriggerAction) {
    action.fieldMapping = {
      id: this.getRandom(),
      rules: []
    };
  }

  public chooseActionType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.persist();
    const type = e.target.value;
    let action = this.state.action;
    action = {
      type
    };
    switch (type) {
      case 'fill':
        this.addActionQualification(action);
        break;
      case 'self-fill':
        this.addActionFieldMap(action);
        break;
      case 'insert':
        this.addActionQualification(action);
        action.isBefore = false;
        break;
      case 'update':
        this.addActionQualification(action);
        action.isBefore = false;
        break;
      case 'veto':
        action.form = '';
        action.isBefore = false;
        break;
      default:
        break;
    }
    this.setState({ action });
  }

  public logQualificationsQuery = (loggedQuery: any) => {
    this.setState((state: ITriggerState) => {
      return state.trigger.qualifications = loggedQuery;
    });
  }

  public logMatchingQualificationsQuery = (loggedQuery: any) => {
    this.setState((state: ITriggerState) => {
      return state.action.matchingQualification = loggedQuery;
    });
  }

  public logFieldMapping = (loggedQuery: any) => {
    this.setState((state: ITriggerState) => {
      return state.action.fieldMapping = loggedQuery;
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

  public render() {
    const { actionTypeList, trigger, actionIndex, action } = this.state;
    return (
      <div className="row">
        <Modal
          show={this.state.showPopup}
          onHide={this.handleHidePopup}
          container={this}
          aria-labelledby="contained-modal-title"
        >
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
        </Modal>
        <div className="col-md-4 col-xs-12">
          <CreateTriggerComponent
            trigger={trigger}
            onTriggerChange={this.handleTriggerChange} />
        </div>
        <div className="col-md-8 col-xs-12">
          <div className="shadow-container">
            <div className="title">
              <h4>Qualifications</h4>
            </div>
            <QueryBuilder
              fields={[{ label: 'Source', value: '' }, { label: 'firstName', value: 'firstName' }, { label: 'lastName', value: 'lastName' }]}
              targetFields={[{ label: 'Target', value: '' }, { label: 'firstName', value: 'firstName' }, { label: 'lastName', value: 'lastName' }]}
              query={trigger.qualifications}
              onQueryChange={this.logQualificationsQuery} />
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
                  size={48}
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
                        <option value="">Select Action</option>
                        {actionTypeList.map((actionType, actionTypeIndex) => (<option key={actionTypeIndex} value={actionType.value}>{actionType.label}</option>))}
                      </select>
                    </div>}
                  {('matchingQualification' in action) &&
                    <div className="panel panel-default">
                      <div className="panel-heading">Matching Qualifications</div>
                      <div className="panel-body">
                        <QueryBuilder
                          fields={[{ label: 'Source', value: '' }, { label: 'firstName', value: 'firstName' }, { label: 'lastName', value: 'lastName' }]}
                          targetFields={[{ label: 'Target', value: '' }, { label: 'firstName', value: 'firstName' }, { label: 'lastName', value: 'lastName' }]}
                          disableOldValue={true}
                          operators={[{ name: '=', label: '=' }, { name: 'null', label: 'isNull' }]}
                          query={action.matchingQualification}
                          onQueryChange={(query: any) => this.logMatchingQualificationsQuery(query)} />
                      </div>
                    </div>}
                  {('fieldMapping' in action) &&
                    <div className="panel panel-default">
                      <div className="panel-heading">Mapping Fields</div>
                      <div className="panel-body">
                        <QueryBuilder
                          fields={[{ label: 'Source', value: '' }, { label: 'firstName', value: 'firstName' }, { label: 'lastName', value: 'lastName' }]}
                          targetFields={[{ label: 'Target', value: '' }, { label: 'firstName', value: 'firstName' }, { label: 'lastName', value: 'lastName' }]}
                          disableCombinators={true}
                          disableGroupAction={true}
                          disableOldValue={true}
                          operators={[{ name: '=', label: '=' }]}
                          query={action.fieldMapping}
                          onQueryChange={(query: any) => this.logFieldMapping(query)} />
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
      </div>
    );
  }
}

const mapDispatchToProps = ({
  fetchFormSchemaRequest,
  fetchFormTriggerRequest,
  saveFormTriggerRequest,
  updateFormTriggerState
});

const mapStateToProps = (state: IState) => ({
  formRendererSchema: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  isTriggerLoading: state.formTrigger.trigger.isLoading,
  triggerData: state.formTrigger.trigger.data
});

export default connect<ITriggerStateMap, ITriggerDispatchMap>(mapStateToProps, mapDispatchToProps)(FormTrigger);
