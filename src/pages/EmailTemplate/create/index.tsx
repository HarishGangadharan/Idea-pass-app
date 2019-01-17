import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import EmailEditor from 'react-email-editor';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {
  createOrUpdateEmailTemplate, getEmailTemplate,
  IEmailTemplate, resetInitialState
}
from '../../../actions/emailTemplate';
import { IState } from '../../../reducers';
import styles from './emailTemplate.css';
import CButton from '../../../components/Button/CButton';

interface IMapStateToProps {
  loading: boolean;
  template: IEmailTemplate;
}

interface IMapDispatchToProps {
  createOrUpdateEmailTemplate: (data: IEmailTemplate) => void;
  getEmailTemplate: (id: string) => void;
  resetInitialState: () => void;
}

interface IEmailTemplateProps extends IMapStateToProps, IMapDispatchToProps { }
interface IEmailTemplateState {
  _id: string;
  name: string;
  description: string;
  type: string;
  previewTemplate: string;
  isPreviewTemplate: boolean;
}

interface IEmailTemplateRef {
  exportHtml: (data: any) => {};
  loadDesign: any;
}

interface ITemplate {
  css: string,
  design: object,
  html: string
}

declare global {
  interface Window {
    unlayer: IEmailTemplateRef;
  }
}

interface IEditorProps {
  projectId: number;
  ref: React.RefObject<IEmailTemplateRef>;
  options: {
    customCSS: string[],
    mergeTags: Array<{ name: string; value: string; }>
  };
}

class EmailTemplate extends React.Component<IEmailTemplateProps & RouteComponentProps<{ id: string }>, IEmailTemplateState> {

  public static getDerivedStateFromProps(props: IEmailTemplateProps, state: IEmailTemplateState) {
    if (props.template && props.template._id !== state._id) {
      const { _id, name, description, type } = props.template;
      return {
        _id,
        description,
        name,
        type
      };
    }
    return null;
  }

  private editor: React.RefObject<IEmailTemplateRef>;
  private editorProps: IEditorProps;

  constructor(props: IEmailTemplateProps & RouteComponentProps<{ id: string }>) {
    super(props);
    this.state = {
      _id: '',
      description: '',
      isPreviewTemplate: false,
      name: '',
      previewTemplate: '',
      type: 'email'
    };
    const customTags = [
      { name: 'First Name', value: '{{first_name}}' },
      { name: 'Last Name', value: '{{last_name}}' },
      { name: 'Full Name', value: '{{full_name}}' },
      { name: 'User Name', value: '{{user_name}}' },
      { name: 'Company Name', value: '{{company_name}}' },
      { name: 'Email', value: '{{email}}' }
    ];
    this.editor = React.createRef<IEmailTemplateRef>();
    this.editorProps = {
      options: {
        customCSS: [`.blockbuilder-preferences .blockbuilder-tools-panel .nav-tabs {
                  background-color: ${styles.appBackgroundColor} !important;
                }
                .blockbuilder-preferences .blockbuilder-tools-panel .nav-tabs .nav-item .nav-link:hover {
                  color: ${styles.primaryColor};
                  cursor: pointer;
                }
                .blockbuilder-preferences .blockbuilder-tools-panel .nav-tabs .nav-item .nav-link.active {
                  color: ${styles.primaryColor};
                }`],
        mergeTags: customTags
      },
      projectId: 1071,
      ref: this.editor
    };
  }

  public componentWillUnmount() {
    this.props.resetInitialState();
  }

  public componentDidMount() {
    const { match, getEmailTemplate } = this.props;
    if (match && match.params.id) {
      getEmailTemplate(match.params.id);
    }
  }

  public render() {
    const { name, description, isPreviewTemplate, previewTemplate } = this.state;
    const { match, template } = this.props;
    return (
      <div className="shadow-container">
        <div className="form-group">
          <label className="control-label">Name</label> <span className="error-text">*</span>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              { this.setState({ name: evt.target.value }); }
            }
            required={true}
          />
        </div>
        <div className="form-group">
          <label className="control-label">Description</label>
          <textarea
            value={description}
            className="form-control"
            onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) =>
              { this.setState({ description: evt.target.value }); }
            }
          />
        </div>
        {
          match && match.params.id ?
            template && <EmailEditor
              {...this.editorProps}
              onLoad={this.onLoad}
            /> : <EmailEditor
              {...this.editorProps}
            />
        }
        <div className="row text-right mb-20">
          <CButton
            className="mt-20 btn btn-primary"
            type="button"
            onClick={this.resetEmailTemplate}
            name="Reset"
          />
          <CButton
            className="mt-20 ml-3 btn btn-primary"
            type="button"
            onClick={this.previewEmailTemplate}
            name="Preview"
          />
          <CButton
            className="mt-20 ml-3 btn btn-primary"
            type="button"
            onClick={this.saveOrUpdateEmailTemplate}
            name="Save"
          />
        </div>
        {isPreviewTemplate &&
          <Modal bsSize="lg" backdrop={false} show={isPreviewTemplate} onHide={this.hidePreviewTemplate} >
            <ModalHeader closeButton={true}>{template.name}</ModalHeader>
            <ModalBody>
              <div >
                <iframe style={{ minHeight: '75vh' }} width="100%" srcDoc={previewTemplate} />
              </div>
            </ModalBody>
          </Modal>
        }
      </div>
    );
  }

  private onLoad = () => {
    const { template } = this.props;
    if (this.editor.current && template) {
      this.editor.current.loadDesign(template.body_json.design);
    } else if (window.unlayer && template) {
      window.unlayer.loadDesign(template.body_json.design);
    }
  }

  private saveOrUpdateEmailTemplate = () => {
    if (this.editor.current) {
      this.editor.current.exportHtml((template: ITemplate) => {
        const { _id, name, description } = this.state;
        const data = {
          _id,
          body: template.html,
          body_json: template,
          description,
          name,
          type: 'email'
        };
        if (!_id) {
          delete data._id;
        }
        this.props.createOrUpdateEmailTemplate(data);
      });
    }
  }

  private previewEmailTemplate = () => {
    if (this.editor.current) {
      this.editor.current.exportHtml((template: ITemplate) => {
        this.setState({
          isPreviewTemplate: true,
          previewTemplate: template.html
        });
      });
    }
  }

  private hidePreviewTemplate = () => {
    this.setState({
      isPreviewTemplate: false,
      previewTemplate: ''
    });
  }

  private resetEmailTemplate = () => {
    const { template } = this.props;
    if (template) {
      window.unlayer.loadDesign(template.body_json.design);
    }
  }
}

const mapStateToProps = (state: IState) => ({
  loading: state.emailTemplate.loading,
  template: state.emailTemplate.template
});

const mapDispatchToProps = {
  createOrUpdateEmailTemplate,
  getEmailTemplate,
  resetInitialState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailTemplate);
