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
import Column from '../../components/Table/Column';
import { IState } from '../../reducers';

import './home.css';

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
    const { activeLanguage }: any = this.props;
    return (
      <div className="row flex-column shadow-container">
        <h3>Home</h3>
        <h3>
          Active Language is {activeLanguage ? activeLanguage.name : ''}{' '}
        </h3>
        <h3>
          <Translate id="greeting" data={{ name: 'Idea PaaS' }} />
        </h3>
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
