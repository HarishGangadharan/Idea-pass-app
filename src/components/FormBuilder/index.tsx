import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import { FormBuilder } from 'react-formio';

interface IBuilderProps {
  formBuilderSchema: any,
  builderOptions?: any,
  renderSchema(schema: any): void,
  renderComponent(component: any, renderMethod: string): void,
}

class Builder extends React.Component<IBuilderProps> {
  constructor(props: IBuilderProps) {
    super(props);
  }

  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    const { renderSchema, renderComponent, builderOptions, formBuilderSchema } = this.props;
    return (
      <div className="container">
        <FormBuilder form={formBuilderSchema} options={builderOptions}
          onChange={(schema: any) => renderSchema(schema)}
          onSaveComponent={(component: any) => renderComponent(component, 'save')}
          onUpdateComponent={(component: any) => renderComponent(component, 'update')}
          onEditComponent={(component: any) => renderComponent(component, 'edit')}
          onCancelComponent={(component: any) => renderComponent(component, 'cancel')}
          onDeleteComponent={(component: any) => renderComponent(component, 'delete')} />
      </div>
    );
  }
}

export default Builder;
