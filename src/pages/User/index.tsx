import * as React from 'react';
import { connect } from 'react-redux';
import { IRequestFilter } from 'request-filter';
import { Can } from 'src/ability-context';
import { fetchUsers } from '../../actions/user';
import Table, { ITableUpdateProps } from '../../components/Table';
import Column from '../../components/Table/Column';
import { AppProperties } from '../../constants/application.properties';
import { IState } from '../../reducers/index';


interface IUserProps extends IStateProps, IDispatchProps{

}

interface IUserState {
  columns: Column[];
  requestFilter: IRequestFilter
}

class Users extends React.Component<IUserProps, IUserState> {
  constructor(props: IUserProps) {
    super(props);
    this.state = {
      columns: [
        new Column().withKey('_id').withLabel('ID'),
        new Column().withKey('first_name').withLabel('Name'),
        new Column().withKey('email').withLabel('Email'),
        new Column().withKey('username').withLabel('UserName')
      ],
      requestFilter: {
        currentPage: 0,
        limit: AppProperties.TABLE_PROPS.LIMIT,
        sortField: '',
        sortOrder: 0
      }
    };
  }

  public componentDidMount() {
    this.props.fetchUsers(this.state.requestFilter);
  }

  public render() {
    const { loading, users, total } = this.props;
    return (
      <div className="shadow-container">
        <Can I="read" a="admin">
          <div className="form-group">
            <button
              className="btn btn-primary pull-right"
              onClick={() => this.createNewUser()}
            >
              Create New User
            </button>
          </div>
        </Can>
        <Table
          keyField="_id"
          data={users || []}
          columns={this.state.columns}
          loading={loading || false}
          length={length || 10}
          total={total || 0}
          remote={true}
          onUpdate={(nextState: ITableUpdateProps) => {
            const { currentPage, length, sortField, sortOrder } = nextState;
            this.props.fetchUsers({ currentPage, length, sortField, sortOrder });
          }}
        />
      </div>
    );
  }

  private createNewUser = () : void => {
    // tslint:disable-next-line:no-console
    console.log('Called');
  }
}

const mapStateToProps = (state: IState) => ({
  loading: state.user.loading,
  total: state.user.users.length,
  users: state.user.users
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: (requestFilter: IRequestFilter) =>
    dispatch(fetchUsers(requestFilter))
});

interface IStateProps {
  users: any[];
  total: number;
  loading: boolean;
}

interface IDispatchProps {
  fetchUsers: (requestFilter: IRequestFilter) => void;
}

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Users);
