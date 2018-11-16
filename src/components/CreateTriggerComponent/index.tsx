import * as React from 'react';

interface ICreateTriggerProps {
  trigger: any;
  onCreate: () => void;
  onTriggerChange: (trigger: any) => void;
}

class CreateTriggerComponent extends React.PureComponent<ICreateTriggerProps> {
  constructor(props: ICreateTriggerProps) {
    super(props);
  }

  public onTriggerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    if (e.target.type === 'checkbox') {
      this.props.trigger[field] = !this.props.trigger[field];
    } else {
      this.props.trigger[field] = e.target.value;
    }
    this.props.onTriggerChange(this.props.trigger);
  }

  public render() {
    const { trigger, onCreate } = this.props;
    return (
      <div className="shadow-container full-height">
        <div className="title">
          <h4>Create new trigger</h4>
        </div>
        <div className="form-group">
          <label htmlFor="form">Form</label>
          <input type="text" name="form" defaultValue={trigger.form} className="form-control" required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onTriggerChange(e, 'form')} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" defaultValue={trigger.name} className="form-control" required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onTriggerChange(e, 'name')} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" defaultValue={trigger.description} className="form-control" required={true}
            rows={3} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.onTriggerChange(e, 'description')} />
        </div>
        <div className="form-group">
          <input type="checkbox" name="isActive" defaultChecked={trigger.isActive} required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onTriggerChange(e, 'isActive')} /> Is Active
        </div>
        <div className="form-group">
          <label htmlFor="sequence">Sequence</label>
          <input type="number" name="sequence" defaultValue={trigger.sequence} className="form-control" required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onTriggerChange(e, 'sequence')} />
        </div>
        <div className="form-group">
          <input type="checkbox" name="isAsynchronous" defaultChecked={trigger.isAsynchronous} required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onTriggerChange(e, 'isAsynchronous')} /> Is Asynchronous
        </div>
        <div className="form-group">
          <label htmlFor="isOnCreate">Conditions: </label>
          <br />
          <input type="checkbox" name="isOnCreate" defaultChecked={trigger.isOnCreate} required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onTriggerChange(e, 'isOnCreate')} /> On Create
          <br />
          <input type="checkbox" name="isOnUpdate" defaultChecked={trigger.isOnUpdate} required={true}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onTriggerChange(e, 'isOnUpdate')} /> On Update
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={() => onCreate()}>Create</button>
        </div>
      </div>
    );
  }
}

export default CreateTriggerComponent;
