import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { matchPath, RouteComponentProps } from 'react-router';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import Renderer from '../../components/FormRender';
import { IState } from '../../reducers';

interface IRendererProps {
  fetchFormSchemaRequest: (schemaId: string) => void;
}

interface IStateProps {
  formRendererSchema: any,
  isLoading: boolean
}

class FormRenderer extends React.Component<IRendererProps & IStateProps & RouteComponentProps> {
  constructor(props: IRendererProps & IStateProps & RouteComponentProps) {
    super(props); const match: any = matchPath(this.props.history.location.pathname, {
      path: '/formRenderer/:id'
    });
    if (match) {
      this.props.fetchFormSchemaRequest(match.params.id);
    }
  }

  public renderData(data: any) {
    // tslint:disable-next-line:no-console TODO
    console.log('component data', data);
  }

  public render() {
    const { formRendererSchema, isLoading } = this.props;
    return (
      <div className="container">
        {!isLoading && <Renderer formRendererSchema={formRendererSchema.formData}
          renderData={(data: any) => this.renderData(data)}/>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchFormSchemaRequest: (schemaId: string) => dispatch(fetchFormSchemaRequest(schemaId))
});

const mapStateToProps = (state: IState) => ({
  formRendererSchema: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading
});

export default connect<IStateProps, IRendererProps>(mapStateToProps, mapDispatchToProps)(FormRenderer);
