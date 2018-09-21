import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Renderer from '../../components/FormRender';
import { IState } from '../../reducers';


interface IStateProps {
  formRendererSchema: any,
  isLoading: boolean
}

class FormRenderer extends React.Component<IStateProps & RouteComponentProps> {
  constructor(props: IStateProps & RouteComponentProps) {
    super(props);
  }

  public renderData(data: any) {
    // tslint:disable-next-line:no-console TODO
    console.log('component data', data);
  }

  public render() {
    const { formRendererSchema } = this.props;
    return (
      <div className="container">
        <Renderer formRendererSchema={formRendererSchema}
          renderData={(data: any) => this.renderData(data)}/>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  formRendererSchema: state.form.formJson,
  isLoading: state.form.isLoading
});

export default connect<IStateProps>(mapStateToProps)(FormRenderer);
