import * as React from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Can } from '../../ability-context';
import { getAllEmailTemplates, getEmailTemplate, ITemplateList, IEmailTemplate, resetInitialState } from '../../actions/emailTemplate';
import { BaseIcon } from '../../components/index';
import Table, { ITableUpdateProps } from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';
import { IRequestFilter } from 'request-filter';

interface IMapStateToProps {
  data: ITemplateList[];
  loading: boolean;
  total: number;
}

interface IMapDispatchToProps {
  getAllEmailTemplates: (data: IRequestFilter) => void;
  getEmailTemplate: (id: string, callback?: (response: IEmailTemplate) => void) => void;
  resetInitialState: () => void;
}

interface IEmailTemplateList extends IMapStateToProps, IMapDispatchToProps {
  length?: number;
}
interface IStateEmailTemplate {
  modal?: boolean;
  template?: any;
}

class EmailTemplateList extends React.Component<
  IEmailTemplateList & RouteComponentProps,
  IStateEmailTemplate
  > {
  public static defaultProps = {
    length: 10
  };
  private columns: Column[];

  constructor(props: IEmailTemplateList & RouteComponentProps) {
    super(props);
    this.columns = [
      new Column().withKey('_id').withLabel('ID'),
      new Column().withKey('name').withLabel('Name'),
      new Column().withKey('description').withLabel('Description'),
      new Column()
        .withKey('body')
        .withLabel('Actions')
        .withCellFormatter((cell: any, row: any) => (
          <div>
            <BaseIcon
              display="inline"
              name="Edit"
              onClick={() => this.editEmailemplate(row._id)}
            />
            <BaseIcon
              display="inline"
              name="Eye"
              onClick={() => this.ViewEmailTemplate(row._id)}
            />
          </div>
        )
      )
    ];
    this.state = {
      modal: false,
      template: {}
    };
  }

  public componentDidMount() {
    const data = {
      currentPage: 1,
      limit: 10,
      sortField: 'id',
      sortOrder: 1
    };
    this.fetchEmailTemplateList(data);
  }

  public componentWillUnmount() {
    this.props.resetInitialState();
  }

  public render() {
    const { loading, data, total, length } = this.props;
    const { template, modal } = this.state;
    return (
      <div className="shadow-container">
        <Can I="read" a="admin">
          <div className="form-group">
            <button
              className="btn btn-primary pull-right"
              onClick={() => this.createEmailTemplate()}
            >
              Create Template
            </button>
          </div>
        </Can>
        <Table
          keyField="_id"
          data={data || []}
          columns={this.columns}
          loading={loading || false}
          length={length || 10}
          total={total || 0}
          remote={true}
          onUpdate={(nextState: ITableUpdateProps) => {
            const updatedData = {
              currentPage: nextState.currentPage,
              limit: nextState.length,
              sortField: nextState.sortField,
              sortOrder: nextState.sortOrder
            };
            this.fetchEmailTemplateList(updatedData);
          }}
        />
        {modal &&
          <Modal bsSize="lg" backdrop={false} show={modal} onHide={this.hideViewTemplate} >
            <ModalHeader closeButton={true}>{template.name}</ModalHeader>
            <ModalBody>
              <div >
                <iframe style={{minHeight: '75vh'}} width="100%" srcDoc={template.body} />
              </div>
            </ModalBody>
          </Modal>
        }
      </div>
    );
  }
  private hideViewTemplate = () => {
    this.setState({
      modal: false,
      template: {}
    });
  }

  private ViewEmailTemplate = (id: string) => {
    this.props.getEmailTemplate(id, (response: IEmailTemplate) => {
      this.setState({
        modal: !this.state.modal,
        template: response
      });
    });
  }
  private createEmailTemplate = () => {
    this.props.history.push('/emailTemplate');
  }

  private editEmailemplate = (id: string) => {
    this.props.history.push(`/emailTemplate/${id}`);
  }

  private fetchEmailTemplateList = (data: IRequestFilter) => {
    this.props.getAllEmailTemplates(data);
  }
}

const mapStateToProps = (state: IState) => ({
  data: state.emailTemplate.data,
  loading: state.emailTemplate.loading,
  total: state.emailTemplate.total
});

const mapDispatchToProps = {
  getAllEmailTemplates,
  getEmailTemplate,
  resetInitialState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailTemplateList);
