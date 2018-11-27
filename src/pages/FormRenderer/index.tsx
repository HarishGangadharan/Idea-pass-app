import 'formiojs/dist/formio.full.min.css';
import * as React from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {
  fetchFormFieldDataRequest,
  saveFormFieldDataRequest,
  updateFormFieldDataState
} from '../../actions/formfielddata';
import { fetchFormSchemaRequest } from '../../actions/formschema';
import Renderer from '../../components/FormRender';
import { IState } from '../../reducers';

interface IRendererDispatchMap {
  fetchFormSchemaRequest: (
    schemaId?: string,
    callback?: (name: string) => void
  ) => void;
  fetchFormFieldDataRequest: (name: string, dataId: string) => void;
  saveFormFieldDataRequest: (data: any, formName: string, formId?: string, formDataId?: string) => void;
  updateFormFieldDataState: (data?: any) => void;
}

interface IRendererStateMap {
  formRendererSchema: any;
  submissionData: any;
  isLoading: boolean;
  isSubmissionLoading: boolean;
}

class FormRenderer extends React.Component<
  IRendererDispatchMap & IRendererStateMap & RouteComponentProps,
  { formId: string }
  > {
  public formio: any;
  constructor(
    props: IRendererDispatchMap & IRendererStateMap & RouteComponentProps
  ) {
    super(props);
    this.state = {
      formId: ''
    };
  }

  public componentDidMount() {
    const match: any = this.props.match;
    if (match) {
      const callBack = (name: string) => {
        const {
          params: { submissionId }
        } = match;
        if (submissionId) {
          this.props.fetchFormFieldDataRequest(name, submissionId);
        }
      };
      this.setState({ formId: match.params.id });
      this.props.fetchFormSchemaRequest(match.params.id, callBack);
    }
  }

  public handleSubmit = (formData: any) => {
    const { formRendererSchema } = this.props;
    const { formId } = this.state;
    const { data } = formData;
    this.props.saveFormFieldDataRequest(data, formRendererSchema.name_singular, formId, data._id);
    this.formio.emit('submitDone');
  }

  public componentWillUnmount() {
    this.props.updateFormFieldDataState();
  }

  public getFormio = (formio: any) => {
    this.formio = formio;
  }

  public render() {
    const {
      isLoading,
      submissionData,
      isSubmissionLoading,
      formRendererSchema
    } = this.props;
    return (
      <div className="shadow-container full-height">
        {!isLoading && !isSubmissionLoading && (
          <Fragment>
            {formRendererSchema.form_data && (
              <div className="title">
                <h4>{formRendererSchema.name}</h4>
              </div>
            )}
            <Renderer
              formRendererSchema={formRendererSchema.form_data}
              submission={{ data: submissionData }}
              handleSubmit={this.handleSubmit}
              getFormio={this.getFormio}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchFormFieldDataRequest,
  fetchFormSchemaRequest,
  saveFormFieldDataRequest,
  updateFormFieldDataState
};

const mapStateToProps = (state: IState) => ({
  formRendererSchema: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  isSubmissionLoading: state.formFieldData.submission.isLoading,
  submissionData: state.formFieldData.submission.data
});

export default connect<IRendererStateMap, IRendererDispatchMap>(
  mapStateToProps,
  mapDispatchToProps
)(FormRenderer);
