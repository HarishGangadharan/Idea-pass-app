import * as React from 'react';
import {
  Language,
  LocalizeContextProps,
  Translate,
  withLocalize
} from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { fetchUsers } from '../../actions/user';
import Table from '../../components/Table';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

import './Home.css';

interface IProps extends LocalizeContextProps {
  value: string;
  activeLanguage: Language;
  fetchUsers: () => any;
  users: object[];
  loading: boolean;
}

interface IHomeState {
  columns: Column[]
}

class Home extends React.PureComponent<IProps, IHomeState> {
  public columns: Column[];

  constructor(props: IProps) {
    super(props);
    this.state = {
      columns: [
        (new Column()).withKey('id').withLabel('ID'),
        (new Column()).withKey('name').withLabel('Name'),
        (new Column()).withKey('phone').withLabel('Phone Number'),
        (new Column()).withKey('company.name').withLabel('Company')
      ]
    };
  }

  public componentDidMount() {
    this.props.fetchUsers();
  }

  public render() {
    const { activeLanguage, users, loading } = this.props;
    return (
      <div className="container homeContainer">
        <div className="row flex-column">
          <h3>Home</h3>
          <h3>
            Active Language is {activeLanguage ? activeLanguage.name : ''}{' '}
          </h3>
          <h3>
            <Translate id="greeting" data={{ name: 'App Name' }} />
          </h3>
        </div>
        <div className="row mb-2">
          <div className="flex-grow-1">
            <h4>Users</h4>
          </div>
        </div>
        <div className="row">
          <Table
            id="users"
            data={users}
            columns={this.state.columns}
            loading={loading}
            length={10}
            currentPage={1}
            total={users ? users.length : 0}
            isExportable={true}
            enableGlobalSearch={true}
            onUpdate={() => {
              this.props.fetchUsers();
            }}
            onColumnHide={(columns: Column[]) => {
              this.setState({
                columns
              });
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  loading: state.user.loading,
  users: state.user.users
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

interface IStateProps {
  users: any[];
  loading: boolean;
}

interface IDispatchProps {
  fetchUsers: () => void;
}

export default compose(
  withRouter,
  connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(Home);
