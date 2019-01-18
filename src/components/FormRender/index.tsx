import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import FormRenderer from './FormRendererWrapper';

interface IRendererProps {
  formRendererSchema: any;
  submission?: object;
  options?: object;
  onChange?: (object?: any) => void;
  handleSubmit(data: any): void;
  getFormio?(data: any): void;
}

class Renderer extends React.Component<IRendererProps> {
  constructor(props: IRendererProps) {
    super(props);
  }

  public render() {
    const { formRendererSchema, handleSubmit, onChange, getFormio, submission, options } = this.props;
    return (
      <div>
        <FormRenderer form={formRendererSchema}
          submission={submission}
          onSubmit={handleSubmit}
          onChange={onChange}
          assignRef={getFormio}
          options={options}
        />
      </div>
    );
  }
}

export default Renderer;
