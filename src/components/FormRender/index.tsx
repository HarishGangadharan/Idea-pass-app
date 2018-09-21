import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import { Form } from 'react-formio';

interface IRendererProps {
  formRendererSchema: any,
  renderData(data: any): void
}

class Renderer extends React.Component<IRendererProps> {
  constructor(props: IRendererProps) {
    super(props);
  }

  public render() {
    const { formRendererSchema, renderData } = this.props;
    return (
      <div className="container">
        <Form form={formRendererSchema}
          onChange={(data) => renderData(data)}/>
      </div>
    );
  }
}

export default Renderer;
