import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { formRequest } from '../../actions/form';
import Builder from '../../components/FormBuilder';

interface IFBuilderProps {
  formRequest(data: any): void
}

class FormBuilder extends React.Component<IFBuilderProps & RouteComponentProps> {
  constructor(props: IFBuilderProps & RouteComponentProps) {
    super(props);
  }

  public gotoFormRender(): void {
    this.props.history.push('/formRenderer');
  }

  public renderSchema(schema: any) {
    // tslint:disable-next-line:no-console
    console.log('schema', schema);
    this.props.formRequest(schema);
  }

  public renderComponent(schema: any, renderMethod: string) {
    // tslint:disable-next-line:no-console
    console.log('renderMethod', renderMethod, 'schema', schema);
    switch (renderMethod) {
      case 'save':
        break;
      case 'edit':
        break;
      case 'update':
        break;
      case 'delete':
        break;
      case 'cancel':
        break;
      default:
        break;
    }
  }

  public render() {
    return (
      <div className="container">
        <Builder formBuilderSchema={{ display: 'form' }}
          renderSchema={(schema: any) => { this.renderSchema(schema); }}
          renderComponent={(component: any, renderMethod: string) => { this.renderComponent(component, renderMethod); }} />
        <div className="row text-right">
          <button className="btn btn-primary" onClick={() => this.gotoFormRender()} >
            Render Form
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  formRequest: (data: any) => dispatch(formRequest(data))
});

export default connect<{}, IFBuilderProps>(null, mapDispatchToProps)(FormBuilder);
