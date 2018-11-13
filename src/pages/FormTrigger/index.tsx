import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import { fetchFormTriggerRequest, saveFormTriggerRequest } from '../../actions/formTrigger';
import QueryBuilder from '../../components/Triggers/QueryBuilder';
import { IState } from '../../reducers';
import './formTrigger.css';

interface IRendererDispatchMap {
  fetchFormSchemaRequest: (schemaId?: string, callback?: (name: string) => void) => void;
  fetchFormTriggerRequest: (name: string, dataId: string) => void;
  saveFormTriggerRequest: (data: any, formName: string) => void;
}

interface IRendererStateMap {
  formRendererSchema: any;
  triggerData: any;
  isLoading: boolean;
  isTriggerLoading: boolean;
}

class FormTrigger extends React.Component<IRendererDispatchMap & IRendererStateMap & RouteComponentProps, {}> {
  public formio: any;
  constructor(props: IRendererDispatchMap & IRendererStateMap & RouteComponentProps) {
    super(props);
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

  public saveFormTrigger() {
    //
  }

  public render() {
    return (
      <div className="row">
        <div className="col-md-4 col-xs-12">
          <div className="shadow-container full-height">
            <div className="title">
              <h4>Create new trigger</h4>
            </div>
            <div className="form-group">
              <label htmlFor="form">Form</label>
              <input type="text" id="form" name="form" className="form-control" required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-control" required={true} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" className="form-control" required={true} rows={3} />
            </div>
            <div className="form-group">
              <input type="checkbox" id="isActive" name="isActive" required={true} /> Is Active
          </div>
            <div className="form-group">
              <label htmlFor="sequence">Sequence</label>
              <input type="number" id="sequence" name="sequence" className="form-control" required={true} />
            </div>
            <div className="form-group">
              <input type="checkbox" id="isAsynchronous" name="isAsynchronous" required={true} /> Is Asynchronous
          </div>
            <div className="form-group">
              <label htmlFor="isOnCreate">Conditions: </label>
              <br />
              <input type="checkbox" id="isOnCreate" name="isOnCreate" required={true} /> On Create
            <br />
              <input type="checkbox" id="isOnUpdate" name="isOnUpdate" required={true} /> On Update
          </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={() => this.saveFormTrigger()}>Create</button>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-xs-12">
          <div className="shadow-container">
            <div className="title">
              <h4>Qualifications</h4>
            </div>
            <QueryBuilder/>
          </div>
        </div>
        <div className="col-md-8 col-xs-12">
          <div className="shadow-container">
            <div className="title">
              <h4>Actions</h4>
            </div>
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

export default connect<IRendererStateMap, IRendererDispatchMap>(mapStateToProps, mapDispatchToProps)(FormTrigger);






