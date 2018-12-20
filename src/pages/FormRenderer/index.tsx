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
import { fetchFormSchemaRequest, updateFormSchemaState } from '../../actions/formschema';
import Renderer from '../../components/FormRender';
import { IState } from '../../reducers';
import { IFormSchema } from '../../reducers/formschema';

interface IRendererDispatchMap {
  fetchFormSchemaRequest: (
    schemaId: string,
    callback?: (form: IFormSchema) => void
  ) => void;
  fetchFormFieldDataRequest: (name: string, dataId: string) => void;
  saveFormFieldDataRequest: (data: any, formName: string, formId?: string, formDataId?: string) => void;
  // TODO: Need to change type of data
  updateFormFieldDataState: (data?: any) => void;
  updateFormSchemaState: (data?: any) => void;
}

interface IRendererStateMap {
  formRendererSchema: any;
  submissionData: any;
  isLoading: boolean;
  isSubmissionLoading: boolean;
}

interface IMergedProps extends IRendererDispatchMap, IRendererStateMap, RouteComponentProps {

}

class FormRenderer extends React.Component<IMergedProps, { formId: string }> {
  public formio: any;
  constructor(props: IMergedProps) {
    super(props);
    this.state = {
      formId: ''
    };
  }

  public componentDidMount() {
    const match: any = this.props.match;
    if (match) {
      const callBack = (form: IFormSchema) => {
        const {
          params: { submissionId }
        } = match;
        if (submissionId) {
          this.props.fetchFormFieldDataRequest(form.name_singular, submissionId);
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
    this.props.updateFormSchemaState();
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

const mapDispatchToProps: IRendererDispatchMap = {
  fetchFormFieldDataRequest,
  fetchFormSchemaRequest,
  saveFormFieldDataRequest,
  updateFormFieldDataState,
  updateFormSchemaState
};

const mapStateToProps = (state: IState) => ({
  formRendererSchema: state.formSchema.currentFormSchema,
  isLoading: state.formSchema.currentFormSchema.loading,
  isSubmissionLoading: state.formFieldData.submission.isLoading,
  submissionData: state.formFieldData.submission.data
});

export default connect<IRendererStateMap, IRendererDispatchMap, IMergedProps, IState>
  (mapStateToProps, mapDispatchToProps)
  (FormRenderer);
