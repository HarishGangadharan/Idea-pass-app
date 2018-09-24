import * as React from "react";
import {
  Language,
  LocalizeContextProps,
  Translate,
  withLocalize
} from "react-localize-redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { fetchUsers } from "../../actions/user";
import { IState } from "../../reducers";

import './Home.css';

interface IProps extends LocalizeContextProps {
  value: string;
  activeLanguage: Language;
  fetchUsers: () => any;
  users: any[];
  loading: boolean;
}

class Home extends React.PureComponent<IProps> {
  public render() {
    const { activeLanguage, users, loading } = this.props;
    return (
      <div className="container homeContainer">
        <div className="row flex-column">
          <h3>Home</h3>
          <h3>
            Active Language is {activeLanguage ? activeLanguage.name : ""}{" "}
          </h3>
          <h3>
            <Translate id="greeting" data={{ name: "App Name" }} />
          </h3>
        </div>
        <div className="row mb-2">
          <div className="flex-grow-1">
            <h4>Users</h4>
          </div>
          <button disabled={loading} className="btn"
                  aria-label="Add" onClick={this.props.fetchUsers}>
            {!loading && 'Fetch Users'}
            {loading && 'Loading...'}
          </button>
        </div>
        <div className="row">
          <table className="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
            </tbody>
          </table>
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
