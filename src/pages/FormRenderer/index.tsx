import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { matchPath, RouteComponentProps } from 'react-router';
import { fetchFormFieldDataRequest, saveFormFieldDataRequest } from '../../actions/formfielddata';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import Renderer from '../../components/FormRender';
import { IState } from '../../reducers';

interface IRendererDispatchMap {
  fetchFormSchemaRequest: (schemaId?: string, callback?: (formSchemaId: string, formData: any, name: string) => void) => void;
  fetchFormFieldDataRequest: (name: string, dataId: string) => void;
  saveFormFieldDataRequest: (data: any, formName: string) => void;
}

interface IRendererStateMap {
  formRendererSchema: any;
  submissionData: any;
  isLoading: boolean;
}

class FormRenderer extends React.Component<IRendererDispatchMap & IRendererStateMap & RouteComponentProps, {}> {
  public formio: any;
  constructor(props: IRendererDispatchMap & IRendererStateMap & RouteComponentProps) {
    super(props);
    const match: any = matchPath(this.props.history.location.pathname, {
      path: '/formRenderer/:id'
    });
    if (match) {
      this.props.fetchFormSchemaRequest(match.params.id);
    }
  }

  public handleSubmit = (formData: any) => {
    const { formRendererSchema } = this.props;
    this.props.saveFormFieldDataRequest(formData.data, formRendererSchema.name);
    this.formio.emit('submitDone');
  }

  public getFormio = (formio: any) => {
    this.formio = formio;
  }

  public render() {
    const { submissionData, isLoading, formRendererSchema } = this.props;
    return (
      <div className="shadow-container full-height">
        {!isLoading && <Renderer formRendererSchema={formRendererSchema.formData}
          submission={{data: submissionData}}
          handleSubmit={this.handleSubmit} getFormio={this.getFormio}/>}
      </div>
    );
  }
}

const mapDispatchToProps = ({
  fetchFormFieldDataRequest,
  fetchFormSchemaRequest,
  saveFormFieldDataRequest
});

const mapStateToProps = (state: IState) => ({
  formRendererSchema: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  submissionData: state.formFieldData.submissionData
});

export default connect<IRendererStateMap, IRendererDispatchMap>(mapStateToProps, mapDispatchToProps)(FormRenderer);
