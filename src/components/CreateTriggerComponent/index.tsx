import * as React from 'react';
import { ITrigger } from 'src/reducers/formTrigger';

interface ICreateTriggerProps {
  trigger: ITrigger;
  formName: string;
  onTriggerChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => void;
}

class CreateTriggerComponent extends React.PureComponent<ICreateTriggerProps> {
  constructor(props: ICreateTriggerProps) {
    super(props);
  }

  public render() {
    const { trigger, onTriggerChange, formName } = this.props;
    return (
      <div className="shadow-container full-height">
        <div className="title">
          <h4>Create new trigger</h4>
        </div>
        <div className="form-group">
          <label htmlFor="form">Form</label>
          <input type="text" name="form" defaultValue={formName} className="form-control" disabled={true}/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={trigger.name} className="form-control" required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTriggerChange(e, 'name')} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" defaultValue={trigger.description} className="form-control" required={true}
            rows={3} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onTriggerChange(e, 'description')} />
        </div>
        <div className="form-group">
          <input type="checkbox" name="is_active" defaultChecked={trigger.is_active} required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTriggerChange(e, 'is_active')} /> Is Active
        </div>
        <div className="form-group">
          <label htmlFor="sequence">Sequence</label>
          <input type="number" name="sequence" defaultValue={trigger.sequence} className="form-control" required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTriggerChange(e, 'sequence')} />
        </div>
        <div className="form-group">
          <input type="checkbox" name="is_async" defaultChecked={trigger.is_async} required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTriggerChange(e, 'is_async')} /> Is Asynchronous
        </div>
        <div className="form-group">
          <label htmlFor="isOnCreate">Conditions: </label>
          <br />
          <input type="checkbox" name="on_create" defaultChecked={trigger.on_create} required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTriggerChange(e, 'on_create')} /> On Create
          <br />
          <input type="checkbox" name="on_update" defaultChecked={trigger.on_update} required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onTriggerChange(e, 'on_update')} /> On Update
        </div>
      </div>
    );
  }
}

export default CreateTriggerComponent;
