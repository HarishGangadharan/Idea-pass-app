import * as React from 'react';
import {
  Language,
  LocalizeContextProps,
  Translate,
  withLocalize
} from 'react-localize-redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { fetchUsers } from '../../actions/user';
import { Component1, ResponsiveLineChart } from '../../components';
import Ticket from '../../components/HomeComponents/TicketComponent';
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

import FormSchemaList from '../FormSchemaList';
import './home.css';

interface IProps extends LocalizeContextProps, RouteComponentProps {
  value: string;
  activeLanguage: Language;
  fetchUsers: () => void;
  users: object[];
  loading: boolean;
}

interface IHomeState {
  columns: Column[];
}

class Home extends React.PureComponent<IProps, IHomeState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      columns: [
        new Column().withKey('id').withLabel('ID'),
        new Column().withKey('name').withLabel('Name'),
        new Column().withKey('phone').withLabel('Phone Number'),
        new Column().withKey('company.name').withLabel('Company')
      ]
    };
  }

  public componentDidMount() {
    this.props.fetchUsers();
  }

  public render() {
    const { activeLanguage }: any = this.props;
    return (
      <div className="row">
        <div className="col-lg-8 p-x-0">
          <Component1 />
          <FormSchemaList {...this.props}/>
          <div className="shadow-container">
            <h3>Home</h3>
            <h3>
              Active Language is {activeLanguage ? activeLanguage.name : ''}{' '}
            </h3>
            <h3>
              <Translate id="greeting" data={{ name: 'Idea PaaS' }} />
            </h3>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="shadow-container">
            <ResponsiveLineChart />
          </div>
          <Ticket/>
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
  connect<IStateProps, IDispatchProps, IProps, IState>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(Home);
