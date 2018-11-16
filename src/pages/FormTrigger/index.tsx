import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import CreateTriggerComponent from 'src/components/CreateTriggerComponent';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import { fetchFormTriggerRequest, saveFormTriggerRequest } from '../../actions/formTrigger';
import QueryBuilder from '../../components/Triggers/QueryBuilder';
import { IState } from '../../reducers';
import './formTrigger.css';

interface ITriggerDispatchMap {
  fetchFormSchemaRequest: (schemaId?: string, callback?: (name: string) => void) => void;
  fetchFormTriggerRequest: (name: string, dataId: string) => void;
  saveFormTriggerRequest: (data: any, formName: string) => void;
}

interface ITriggerStateMap {
  formRendererSchema: any;
  triggerData: any;
  isLoading: boolean;
  isTriggerLoading: boolean;
}

interface ITriggerAction {
  fieldMapping: any,
  form?: string,
  isBefore?: boolean,
  matchingQualification?: any;
  sequence?: number | string;
  type: string;
  valid?: boolean;
}

interface ITrigger {
  actions: ITriggerAction[],
  description: string,
  form: string,
  isActive: boolean,
  isAsynchronous: boolean,
  isOnCreate: boolean,
  isOnUpdate: boolean,
  name: string,
  qualifications: any,
  sequence: string | number
}
interface ITriggerState {
  actionTypeList: any[];
  trigger: ITrigger;
}

class FormTrigger extends React.Component<ITriggerDispatchMap & ITriggerStateMap & RouteComponentProps, ITriggerState> {
  public formio: any;
  constructor(props: ITriggerDispatchMap & ITriggerStateMap & RouteComponentProps) {
    super(props);
    this.state = {
      actionTypeList: [
        { value: 'fill', label: 'Fill' },
        { value: 'self-fill', label: 'Self Fill' },
        { value: 'insert', label: 'Insert' },
        { value: 'update', label: 'Update' },
        { value: 'veto', label: 'Veto' }
      ],
      trigger: {
        actions: [
          {
            fieldMapping: {
              id: this.getRandom(),
              rules: [
                {
                  customRules: {
                  },
                  field: '',
                  id: this.getRandom(),
                  operator: '=',
                  value: ''
                }
              ]
            },
            form: '',
            matchingQualification: {
              id: this.getRandom(),
              rules: [
                {
                  customRules: {
                  },
                  field: '',
                  id: this.getRandom(),
                  operator: '=',
                  value: ''
                }
              ]
            },
            type: 'fill'
          }
        ],
        description: 'New fill trigger',
        form: '5be3dcaa2abe0d4350b5b8db',
        isActive: true,
        isAsynchronous: false,
        isOnCreate: false,
        isOnUpdate: false,
        name: 'fill-trigger',
        qualifications: {
          id: this.getRandom(),
          rules: [{
            customRules: {
              isOldValue: false
            },
            id: this.getRandom(),
            operator: 'null',
            value: ''
          }]
        },
        sequence: '1'
      }
    };
  }

  public getRandom() {
    return Math.random().toString(36).substr(2, 36);
  }

  public componentDidMount() {
    const match: any = this.props.match;
    if (match) {
      const callBack = (name: string) => {
        const { params: { triggerId } } = match;
        if (triggerId) {
          this.props.fetchFormTriggerRequest(name, triggerId);
        }
      };
      this.props.fetchFormSchemaRequest(match.params.id, callBack);
    }
  }

  public saveFormTrigger = () => {
    //
  }

  public handleTriggerChange(trigger: any) {
    //
  }

  public onActionChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>,
    actionIndex: number,
    field: string) => {
    e.persist();
    if (e.target.type === 'checkbox') {
      this.setState((state: ITriggerState) => {
        state.trigger.actions[actionIndex][field] = !state.trigger.actions[actionIndex][field];
      });
    } else {
      this.setState((state: ITriggerState) => {
        state.trigger.actions[actionIndex][field] = e.target.value;
      });
    }
  }

  public chooseActionType = (
    e: React.ChangeEvent<HTMLSelectElement>,
    actionIndex: number) => {
    e.persist();
    const type = e.target.value;
    const action = this.state.trigger.actions[actionIndex];
    action.type = type;
    switch (type) {
      case 'fill':
        action.matchingQualification = {
          id: this.getRandom(),
          rules: [
            {
              field: 'lastName',
              id: this.getRandom(),
              operator: '=',
              value: 'firstName'
            }
          ]
        };
        action.form = '';
        delete action.isBefore;
        break;
      case 'self-fill':
        delete action.matchingQualification;
        delete action.isBefore;
        delete action.form;
        break;
      case 'insert':
        action.matchingQualification = {
          id: this.getRandom(),
          rules: [
            {
              field: '',
              id: this.getRandom(),
              operator: '=',
              value: ''
            }
          ]
        };
        action.form = '';
        action.isBefore = false;
        break;
      case 'update':
        action.matchingQualification = {
          id: this.getRandom(),
          rules: [
            {
              field: '',
              id: this.getRandom(),
              operator: '=',
              value: ''
            }
          ]
        };
        action.form = '';
        action.isBefore = false;
        break;
      case 'veto':
        delete action.matchingQualification;
        delete action.fieldMapping;
        action.form = '';
        action.isBefore = false;
        break;
      default:
        break;
    }
    this.setState({});
  }

  public logQualificationsQuery = (loggedQuery: any) => {
    this.setState((state: ITriggerState) => {
      return state.trigger.qualifications = loggedQuery;
    });
  }

  public logMatchingQualificationsQuery = (loggedQuery: any, actionIndex: number) => {
    this.setState((state: ITriggerState) => {
      return state.trigger.actions[actionIndex].matchingQualification = loggedQuery;
    });
  }

  public logFieldMapping = (loggedQuery: any, actionIndex: number) => {
    this.setState((state: ITriggerState) => {
      return state.trigger.actions[actionIndex].fieldMapping = loggedQuery;
    });
  }

  public render() {
    const { actionTypeList, trigger } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <CreateTriggerComponent
            trigger={trigger}
            onCreate={this.saveFormTrigger}
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
              showQuery={true}
              onQueryChange={this.logQualificationsQuery} />
          </div>
        </div>
        <div className="col-md-8 col-xs-12">
          <div className="shadow-container">
            <div className="title">
              <h4>Actions {trigger.actions.length && <span className="badge">{trigger.actions.length}</span>}</h4>
            </div>
            {trigger.actions.map((action, actionIndex) =>
              (<div className="panel panel-default" key={actionIndex}>
                <div className="panel-heading">
                  <div className="row">
                    Action - {actionIndex + 1}
                    <button className="btn btn-primary pull-right">Add</button>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select className="form-control" defaultValue={action.type}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.chooseActionType(e, actionIndex)}>
                      <option value="">Select Action</option>
                      {actionTypeList.map((actionType, actionTypeIndex) => (<option key={actionTypeIndex} value={actionType.value}>{actionType.label}</option>))}
                    </select>
                  </div>
                  {('isBefore' in action) &&
                    <div className="form-group">
                      <input type="checkbox" name="isBefore" defaultChecked={action.isBefore} required={true}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onActionChange(e, actionIndex, 'isBefore')} /> Is Before
                </div>}
                  {('form' in action) &&
                    <div className="form-group">
                      <label htmlFor="form">Form to fill</label>
                      <select className="form-control" defaultValue={action.form}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.onActionChange(e, actionIndex, 'form')}>
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
                          onQueryChange={(query: any) => this.logMatchingQualificationsQuery(query, actionIndex)} />
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
                          onQueryChange={(query: any) => this.logFieldMapping(query, actionIndex)} />
                      </div>
                    </div>}
                </div>
              </div>))}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = ({
  fetchFormSchemaRequest,
  fetchFormTriggerRequest,
  saveFormTriggerRequest
});

const mapStateToProps = (state: IState) => ({
  formRendererSchema: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  isTriggerLoading: state.formTrigger.trigger.isLoading,
  triggerData: state.formTrigger.trigger.data
});

export default connect<ITriggerStateMap, ITriggerDispatchMap>(mapStateToProps, mapDispatchToProps)(FormTrigger);
