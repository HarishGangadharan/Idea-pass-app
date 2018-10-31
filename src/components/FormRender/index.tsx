import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import FormRenderer from './FormRendererWrapper';

interface IRendererProps {
  formRendererSchema: any;
  submission?: object;
  handleSubmit(data: any): void;
  getFormio?(data: any): void;
}

class Renderer extends React.Component<IRendererProps> {
  constructor(props: IRendererProps) {
    super(props);
  }

  public render() {
    const { formRendererSchema, handleSubmit, getFormio, submission } = this.props;
    return (
      <FormRenderer form={formRendererSchema}
        submission={submission}
        onSubmit={handleSubmit}
        assignRef={getFormio}
      />
    );
  }
}

export default Renderer;
